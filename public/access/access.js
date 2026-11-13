/* ===== Access expression engine, parsing helpers and validation rules ===== */
const clone=o=>JSON.parse(JSON.stringify(o));
const dmy=iso=>iso.slice(8,10)+'/'+iso.slice(5,7)+'/'+iso.slice(0,4);
const pDate=s=>{const m=/^(\d{1,2})\/(\d{1,2})\/(\d{4})$/.exec(String(s).trim());if(!m)return null;const d=new Date(+m[3],+m[2]-1,+m[1]);if(d.getMonth()!==+m[2]-1||d.getDate()!==+m[1])return null;return +m[3]*10000+ +m[2]*100+ +m[1]};
const pTime=s=>{const m=/^(\d{1,2}):(\d{2}):(\d{2})$/.exec(String(s).trim());if(!m||+m[2]>59||+m[3]>59)return null;return +m[1]*3600+ +m[2]*60+ +m[3]};
const todayN=()=>{const d=new Date();return d.getFullYear()*10000+(d.getMonth()+1)*100+d.getDate()};
const dtStr=n=>String(n%100).padStart(2,'0')+'/'+String(Math.floor(n/100)%100).padStart(2,'0')+'/'+Math.floor(n/10000);
const EXERR=m=>({$err:m||'#Error'});
const isErr=v=>!!v&&typeof v==='object'&&'$err' in v;
const isDt=v=>!!v&&typeof v==='object'&&'$d' in v;
const mkDt=n=>({$d:n});
function exShow(v){if(v==null)return '';if(isErr(v))return v.$err;if(isDt(v))return dtStr(v.$d);if(v===true)return 'True';if(v===false)return 'False';return String(v)}

function likeRe(pat){
  let out='';
  for(let i=0;i<pat.length;i++){
    const c=pat[i];
    if(c==='*')out+='.*';else if(c==='?')out+='.';else if(c==='#')out+='\\d';
    else if(c==='['){const j=pat.indexOf(']',i+1);if(j<0){out+='\\[';continue}let body=pat.slice(i+1,j);let neg='';if(body[0]==='!'){neg='^';body=body.slice(1)}out+='['+neg+body.replace(/\\/g,'\\\\')+']';i=j}
    else out+=c.replace(/[.+^$(){}|\\\]]/g,'\\$&');
  }
  return new RegExp('^'+out+'$','i');
}
/* ----- tokenizer and parser ----- */
function exTok(s){
  const t=[];let i=0;
  while(i<s.length){
    const c=s[i];
    if(/\s/.test(c)){i++;continue}
    if(c==='"'){let j=i+1,v='';while(j<s.length){if(s[j]==='"'){if(s[j+1]==='"'){v+='"';j+=2;continue}break}v+=s[j++]}if(j>=s.length)throw 0;t.push({t:'str',v});i=j+1;continue}
    if(c==='#'){const j=s.indexOf('#',i+1);if(j<0)throw 0;t.push({t:'dt',v:s.slice(i+1,j)});i=j+1;continue}
    if(c==='['){const j=s.indexOf(']',i+1);if(j<0)throw 0;t.push({t:'ref',v:s.slice(i+1,j)});i=j+1;continue}
    if(/[0-9]/.test(c)||(c==='.'&&/[0-9]/.test(s[i+1]||''))){let j=i;while(j<s.length&&/[0-9.]/.test(s[j]))j++;t.push({t:'num',v:+s.slice(i,j)});i=j;continue}
    if(/[A-Za-z_]/.test(c)){let j=i;while(j<s.length&&/[A-Za-z0-9_$]/.test(s[j]))j++;t.push({t:'id',v:s.slice(i,j)});i=j;continue}
    const two=s.substr(i,2);
    if(['<=','>=','<>'].includes(two)){t.push({t:'op',v:two});i+=2;continue}
    if('+-*/\\&=<>(),!.^'.includes(c)){t.push({t:'op',v:c});i++;continue}
    throw 0;
  }
  return t;
}
function exParse(src){
  const T=exTok(src);let p=0;
  const eat=()=>T[p++];
  const isId=v=>T[p]&&T[p].t==='id'&&T[p].v.toLowerCase()===v;
  const isOp=v=>T[p]&&T[p].t==='op'&&T[p].v===v;
  function pOr(){let a=pAnd();while(isId('or')){p++;a={k:'bin',op:'or',a,b:pAnd()}}return a}
  function pAnd(){let a=pNot();while(isId('and')){p++;a={k:'bin',op:'and',a,b:pNot()}}return a}
  function pNot(){if(isId('not')){p++;return{k:'un',op:'not',a:pNot()}}return pCmp()}
  function pCmp(){
    let a=pCat();
    for(;;){
      if(T[p]&&T[p].t==='op'&&['=','<>','<','>','<=','>='].includes(T[p].v)){const op=eat().v;a={k:'bin',op,a,b:pCat()};continue}
      if(isId('like')){p++;a={k:'bin',op:'like',a,b:pCat()};continue}
      if(isId('not')&&T[p+1]&&T[p+1].t==='id'&&['like','in','between'].includes(T[p+1].v.toLowerCase())){p++;const w=T[p].v.toLowerCase();
        if(w==='like'){p++;a={k:'un',op:'not',a:{k:'bin',op:'like',a,b:pCat()}};continue}
        if(w==='between'){p++;const lo=pCat();if(!isId('and'))throw 0;p++;const hi=pCat();a={k:'un',op:'not',a:{k:'between',a,lo,hi}};continue}
        p++;if(!isOp('('))throw 0;p++;const list=[];for(;;){list.push(pOr());if(isOp(','))p++;else break}if(!isOp(')'))throw 0;p++;a={k:'un',op:'not',a:{k:'in',a,list}};continue}
      if(isId('is')){p++;let neg=false;if(isId('not')){p++;neg=true}if(!isId('null'))throw 0;p++;a={k:'isnull',a,neg};continue}
      if(isId('between')){p++;const lo=pCat();if(!isId('and'))throw 0;p++;const hi=pCat();a={k:'between',a,lo,hi};continue}
      if(isId('in')){p++;if(!isOp('('))throw 0;p++;const list=[];for(;;){list.push(pOr());if(isOp(','))p++;else break}if(!isOp(')'))throw 0;p++;a={k:'in',a,list};continue}
      break;
    }
    return a;
  }
  function pCat(){let a=pAdd();while(isOp('&')){p++;a={k:'bin',op:'&',a,b:pAdd()}}return a}
  function pAdd(){let a=pMul();while(isOp('+')||isOp('-')){const op=eat().v;a={k:'bin',op,a,b:pMul()}}return a}
  function pMul(){let a=pUn();while(isOp('*')||isOp('/')||isOp('\\')){const op=eat().v;a={k:'bin',op,a,b:pUn()}}return a}
  function pUn(){if(isOp('-')){p++;return{k:'un',op:'-',a:pUn()}}if(isOp('+')){p++;return pUn()}return pPow()}
  function pPow(){let a=pPost();while(isOp('^')){p++;a={k:'bin',op:'^',a,b:pPost()}}return a}
  function pPost(){
    let a=pPrim();
    for(;;){
      if(isOp('!')){p++;const n=eat();if(!n||(n.t!=='ref'&&n.t!=='id'))throw 0;a={k:'ref',path:(a.k==='ref'?a.path:[]).concat(n.v)};continue}
      if(isOp('.')){p++;const n=eat();if(!n||n.t!=='id')throw 0;const nm=n.v.toLowerCase();
        if(nm==='column'){if(!isOp('('))throw 0;p++;const idx=pOr();if(!isOp(')'))throw 0;p++;a={k:'col',base:a,idx};continue}
        if(nm==='value'||nm==='text')continue;
        throw 0}
      break;
    }
    return a;
  }
  function pPrim(){
    const t=eat();if(!t)throw 0;
    if(t.t==='num')return{k:'num',v:t.v};
    if(t.t==='str')return{k:'str',v:t.v};
    if(t.t==='dt'){const n=pDate(t.v);if(n===null)throw 0;return{k:'dt',v:n}}
    if(t.t==='ref')return{k:'ref',path:[t.v]};
    if(t.t==='op'&&t.v==='('){const e=pOr();if(!isOp(')'))throw 0;p++;return e}
    if(t.t==='id'){
      const low=t.v.toLowerCase();
      if(low==='null')return{k:'null'};if(low==='true')return{k:'bool',v:true};if(low==='false')return{k:'bool',v:false};
      if(isOp('(')){p++;const args=[];if(isOp('*')){p++;args.push({k:'str',v:'*'})}else if(!isOp(')')){for(;;){args.push(pOr());if(isOp(','))p++;else break}}if(!isOp(')'))throw 0;p++;return{k:'call',n:low,args}}
      return{k:'ref',path:[t.v]};
    }
    throw 0;
  }
  const ast=pOr();if(p<T.length)throw 0;return ast;
}
const EXCACHE={};
function exCompile(src){
  src=String(src).trim();
  if(!(src in EXCACHE)){try{EXCACHE[src]=exParse(src)}catch(e){EXCACHE[src]=null}}
  return EXCACHE[src];
}
const exValid=src=>exCompile(String(src).replace(/^=/,''))!==null;

/* ----- value helpers ----- */
const serialOf=n=>Math.round((Date.UTC(Math.floor(n/10000),Math.floor(n/100)%100-1,n%100)-Date.UTC(1899,11,30))/86400000);
const fromSerial=sv=>{const d=new Date(Date.UTC(1899,11,30)+sv*86400000);return d.getUTCFullYear()*10000+(d.getUTCMonth()+1)*100+d.getUTCDate()};
function exNum(v){
  if(v==null)return null;if(isErr(v))return v;
  if(typeof v==='number')return v;if(v===true)return -1;if(v===false)return 0;
  if(isDt(v))return serialOf(v.$d);
  if(typeof v==='string'&&v.trim()!==''&&!isNaN(+v))return +v;
  return EXERR('#Type!');
}
function exCmp(a,b){
  if(a==null||b==null)return null;
  if(isDt(a)&&isDt(b))return a.$d<b.$d?-1:a.$d>b.$d?1:0;
  if(isDt(a)||isDt(b)){const x=exNum(a),y=exNum(b);return x<y?-1:x>y?1:0}
  if(typeof a==='string'&&typeof b==='string'){const x=a.toLowerCase(),y=b.toLowerCase();return x<y?-1:x>y?1:0}
  const x=exNum(a),y=exNum(b);if(isErr(x)||isErr(y)){const s=exShow(a).toLowerCase(),t=exShow(b).toLowerCase();return s<t?-1:s>t?1:0}
  return x<y?-1:x>y?1:0;
}
function exFormat(v,fmt){
  if(v==null||isErr(v))return exShow(v);
  const f=String(fmt||'').toLowerCase();
  if(isDt(v))return dtStr(v.$d);
  const n=typeof v==='number'?v:+v;
  if(f==='percent')return (n*100).toFixed(2)+'%';
  if(f==='fixed'||f==='standard')return n.toFixed(2);
  if(f==='general number'||f==='')return String(n);
  const m=/^0(\.(0+))?(%)?$/.exec(f);
  if(m){const d=m[2]?m[2].length:0;return (m[3]?(n*100):n).toFixed(d)+(m[3]||'')}
  return String(n);
}
function exFormatDate(n,fmt){
  const f=String(fmt||'').toLowerCase();
  if(!f||f==='short date'||f==='dd/mm/yyyy')return dtStr(n);
  return String(fmt).replace(/yyyy/gi,String(Math.floor(n/10000))).replace(/mmmm/g,['January','February','March','April','May','June','July','August','September','October','November','December'][Math.floor(n/100)%100-1]).replace(/mm/g,String(Math.floor(n/100)%100).padStart(2,'0')).replace(/dd/g,String(n%100).padStart(2,'0'));
}
function exApplyFormat(v,c){
  if(v==null)return '';if(isErr(v))return v.$err;
  if(isDt(v))return dtStr(v.$d);
  if(typeof v==='number'){
    if(c&&c.format&&c.format!=='General Number'&&c.format!=='')return exFormat(v,c.format)+'';
    if(c&&c.decimalPlaces!==undefined&&c.decimalPlaces!==''&&c.decimalPlaces!=='Auto'&&!isNaN(+c.decimalPlaces))return v.toFixed(+c.decimalPlaces);
    return String(Math.round(v*1e10)/1e10);
  }
  return exShow(v);
}
function exFromStore(type,raw){
  if(raw===''||raw==null)return null;
  if(type==='Date/Time'){const n=pDate(raw);return n!==null?mkDt(n):raw}
  if(type==='Number'||type==='Currency'||type==='AutoNumber')return +raw;
  if(type==='Yes/No')return !!raw;
  return String(raw);
}
function exToStore(v,type){
  if(v==null)return '';
  if(isDt(v))return dtStr(v.$d);
  if(type==='Number'||type==='Currency'||type==='AutoNumber'){const n=exNum(v);return typeof n==='number'?n:''}
  return typeof v==='number'?v:exShow(v);
}

/* ----- evaluation ----- */
function exEval(ast,ctx){
  const ev=n=>exEval(n,ctx);
  const bad=v=>isErr(v)?v:null;
  switch(ast.k){
    case 'num':case 'str':case 'bool':return ast.v;
    case 'null':return null;
    case 'dt':return mkDt(ast.v);
    case 'ref':return ctx.ref(ast.path);
    case 'col':{const i=ev(ast.idx);return ctx.column(ast.base.path||[],typeof i==='number'?i:0)}
    case 'un':{
      const a=ev(ast.a);if(bad(a))return a;
      if(ast.op==='not')return a==null?null:!a;
      const n=exNum(a);return n==null||isErr(n)?n:-n;
    }
    case 'isnull':{const a=ev(ast.a);if(bad(a))return a;const z=a==null||a==='';return ast.neg?!z:z}
    case 'between':{const a=ev(ast.a),lo=ev(ast.lo),hi=ev(ast.hi);if(a==null)return null;const x=exCmp(a,lo),y=exCmp(a,hi);return x>=0&&y<=0}
    case 'in':{const a=ev(ast.a);if(a==null)return null;return ast.list.some(n=>exCmp(a,ev(n))===0)}
    case 'call':return exCall(ast.n,ast.args,ctx);
    case 'bin':{
      const op=ast.op;
      if(op==='and'||op==='or'){const a=ev(ast.a),b=ev(ast.b);if(bad(a))return a;if(bad(b))return b;return op==='and'?(a&&b):(a||b)}
      const a=ev(ast.a),b=ev(ast.b);
      if(bad(a))return a;if(bad(b))return b;
      if(op==='&')return exShow(a)+exShow(b);
      if(op==='like'){if(a==null||b==null)return null;return likeRe(String(b)).test(exShow(a))}
      if(['=','<>','<','>','<=','>='].includes(op)){const c=exCmp(a,b);if(c===null)return null;return op==='='?c===0:op==='<>'?c!==0:op==='<'?c<0:op==='>'?c>0:op==='<='?c<=0:c>=0}
      if(op==='-'&&isDt(a)&&isDt(b))return serialOf(a.$d)-serialOf(b.$d);
      if((op==='+'||op==='-')&&isDt(a)&&typeof b==='number')return mkDt(fromSerial(serialOf(a.$d)+(op==='+'?b:-b)));
      if(op==='+'&&typeof a==='string'&&typeof b==='string')return a+b;
      const x=exNum(a),y=exNum(b);if(x==null||y==null)return null;if(isErr(x))return x;if(isErr(y))return y;
      if(op==='+')return x+y;if(op==='-')return x-y;if(op==='*')return x*y;
      if(op==='/')return y===0?EXERR('#Div/0!'):x/y;
      if(op==='\\')return y===0?EXERR('#Div/0!'):Math.trunc(x/y);
      if(op==='^')return Math.pow(x,y);
      return EXERR();
    }
  }
  return EXERR();
}
function exDomain(fn,args,ctx){
  const ev=n=>exEval(n,ctx);
  const expr=ev(args[0]),dom=ev(args[1]);
  if(isErr(expr))return expr;
  const crit=args[2]?ev(args[2]):'';
  const rows=ctx.domainRows(String(dom));
  if(!rows)return EXERR('#Error');
  let cast=null;if(crit&&String(crit).trim())cast=exCompile(String(crit));
  const field=String(expr).replace(/^\[|\]$/g,'');
  const vals=[];
  for(const row of rows){
    if(cast){const c2=Object.assign({},ctx,{ref:path=>{const n=path[path.length-1];if(path.length===1&&n in row)return row[n];return ctx.ref(path)}});const ok=exEval(cast,c2);if(!ok||isErr(ok))continue}
    const v=field in row?row[field]:null;
    vals.push(v);
  }
  if(fn==='dcount')return vals.length;
  const nonnull=vals.filter(v=>v!=null);
  if(fn==='dlookup')return nonnull.length?nonnull[0]:null;
  if(!nonnull.length)return null;
  if(fn==='dmax')return nonnull.reduce((m,v)=>exCmp(v,m)>0?v:m);
  if(fn==='dmin')return nonnull.reduce((m,v)=>exCmp(v,m)<0?v:m);
  const nums=nonnull.map(v=>exNum(v));
  if(fn==='dsum')return nums.reduce((a,b)=>a+b,0);
  if(fn==='davg')return nums.reduce((a,b)=>a+b,0)/nums.length;
  return EXERR();
}
function exAgg(n,args,ctx){
  const rows=ctx.aggRows;
  const star=args[0]&&args[0].k==='str'&&args[0].v==='*';
  if(n==='count'&&star)return rows.length;
  const vals=rows.map(r=>exEval(args[0],Object.assign({},ctx,{aggRows:null,ref:p=>ctx.rowRef(r,p)}))).filter(v=>v!=null&&!isErr(v));
  if(n==='count')return vals.length;
  if(!vals.length)return null;
  if(n==='min')return vals.reduce((m,v)=>exCmp(v,m)<0?v:m);
  if(n==='max')return vals.reduce((m,v)=>exCmp(v,m)>0?v:m);
  const nums=vals.map(v=>exNum(v));
  if(n==='sum')return nums.reduce((a,b)=>a+b,0);
  return nums.reduce((a,b)=>a+b,0)/nums.length;
}
function exCall(n,args,ctx){
  const ev=i=>args[i]?exEval(args[i],ctx):undefined;
  if(['count','min','max','sum','avg'].includes(n)&&ctx.aggRows)return exAgg(n,args,ctx);
  if(n==='dateserial'){const y=exNum(ev(0)),m=exNum(ev(1)),dd=exNum(ev(2));if([y,m,dd].some(x=>x==null||isErr(x)))return EXERR();const dt=new Date(Date.UTC(y,m-1,dd));return mkDt(dt.getUTCFullYear()*10000+(dt.getUTCMonth()+1)*100+dt.getUTCDate())}
  if(n==='datediff'){const iv=String(ev(0)).toLowerCase(),a=ev(1),b=ev(2);if(!isDt(a)||!isDt(b))return EXERR();
    if(iv==='yyyy')return Math.floor(b.$d/10000)-Math.floor(a.$d/10000);
    if(iv==='m')return (Math.floor(b.$d/10000)-Math.floor(a.$d/10000))*12+(Math.floor(b.$d/100)%100-Math.floor(a.$d/100)%100);
    if(iv==='d')return serialOf(b.$d)-serialOf(a.$d);
    return EXERR()}
  if(n==='strcomp'){const x=exShow(ev(0)),y=exShow(ev(1));const mode=args[2]?exNum(ev(2)):0;const p=mode===1?x.toLowerCase():x,q=mode===1?y.toLowerCase():y;return p<q?-1:p>q?1:0}
  if(n==='instr'){const x=exShow(ev(0)),y=exShow(ev(1));return x.indexOf(y)+1}
  if(n==='mid'){const x=exShow(ev(0)),st=exNum(ev(1));const ln=args[2]?exNum(ev(2)):x.length;return x.substr(st-1,ln)}
  if(n==='asc'){const x=exShow(ev(0));return x?x.charCodeAt(0):EXERR()}
  if(n==='chr'){return String.fromCharCode(exNum(ev(0)))}
  if(['dmax','dmin','dlookup','dcount','dsum','davg'].includes(n))return exDomain(n,args,ctx);
  if(n==='date'||n==='now')return mkDt(todayN());
  if(n==='iif'){const c=ev(0);return c&&!isErr(c)?ev(1):ev(2)}
  const a=ev(0);
  if(isErr(a))return a;
  switch(n){
    case 'nz':return a==null||a===''?(args[1]?ev(1):0):a;
    case 'isnull':return a==null;
    case 'round':{const x=exNum(a);if(x==null||isErr(x))return x;const d=args[1]?exNum(ev(1)):0;const f=Math.pow(10,d);return Math.round(x*f)/f}
    case 'int':{const x=exNum(a);return x==null||isErr(x)?x:Math.floor(x)}
    case 'fix':{const x=exNum(a);return x==null||isErr(x)?x:Math.trunc(x)}
    case 'abs':{const x=exNum(a);return x==null||isErr(x)?x:Math.abs(x)}
    case 'cint':case 'clng':{const x=exNum(a);return x==null||isErr(x)?x:Math.round(x)}
    case 'cdbl':case 'val':{const x=exNum(a);return x==null?0:isErr(x)?0:x}
    case 'cstr':return exShow(a);
    case 'format':return isDt(a)?exFormatDate(a.$d,ev(1)):exFormat(a,ev(1));
    case 'len':return a==null?0:exShow(a).length;
    case 'trim':return a==null?'':exShow(a).trim();
    case 'ucase':return a==null?'':exShow(a).toUpperCase();
    case 'lcase':return a==null?'':exShow(a).toLowerCase();
    case 'left':return exShow(a).slice(0,exNum(ev(1)));
    case 'right':{const k=exNum(ev(1));return k?exShow(a).slice(-k):''}
    case 'year':return isDt(a)?Math.floor(a.$d/10000):EXERR();
    case 'month':return isDt(a)?Math.floor(a.$d/100)%100:EXERR();
    case 'day':return isDt(a)?a.$d%100:EXERR();
  }
  return EXERR('#Name?');
}
function exRun(src,ctx){
  const ast=exCompile(String(src).replace(/^=/,''));
  if(!ast)return EXERR('#Name?');
  try{return exEval(ast,ctx)}catch(e){return EXERR('#Error')}
}

/* ----- validation rules (table, control) ----- */
function splitKw(s,kw){const out=[];let cur='',q=false;const re=new RegExp('^\\s+'+kw+'\\s+','i');for(let i=0;i<s.length;i++){const c=s[i];if(c==='"')q=!q;if(!q){const m=re.exec(s.slice(i));if(m){out.push(cur);cur='';i+=m[0].length-1;continue}}cur+=c}out.push(cur);return out}
function evalRule(rule,type,raw){
  const r=rule.trim();
  if(/^is\s+not\s+null$/i.test(r))return !(raw===''||raw==null);
  if(/^is\s+null$/i.test(r))return raw===''||raw==null;
  if(raw===''||raw==null)return true;
  const v=type==='Number'||type==='Currency'||type==='AutoNumber'?+raw:(type==='Date/Time'?(pDate(raw)!==null?pDate(raw):pTime(raw)):String(raw));
  const operand=tok=>{tok=tok.trim();if(/^date\(\)$/i.test(tok))return todayN();let m=/^#(.+)#$/.exec(tok);if(m){const a=pDate(m[1]);if(a!==null)return a;const b=pTime(m[1]);return b!==null?b:NaN}m=/^"(.*)"$/.exec(tok);if(m)return m[1];if(tok!==''&&!isNaN(+tok))return +tok;return NaN};
  const parts=splitKw(r,'or');
  if(parts.length>1)return parts.some(p=>evalRule(p,type,raw));
  let m=/^between\s+(.+?)\s+and\s+(.+)$/i.exec(r);
  if(m){const a=operand(m[1]),b=operand(m[2]);if(a!==a||b!==b)throw 0;return v>=a&&v<=b}
  m=/^like\s+"(.*)"$/i.exec(r);
  if(m)return likeRe(m[1]).test(String(raw));
  m=/^in\s*\((.+)\)$/i.exec(r);
  if(m){const list=m[1].split(',').map(operand);if(list.some(x=>x!==x))throw 0;return list.some(x=>String(x).toLowerCase()===String(v).toLowerCase())}
  return splitKw(r,'and').every(p=>{
    const mm=/^(<=|>=|<>|<|>|=)\s*(.+)$/.exec(p.trim());if(!mm)throw 0;
    const o=operand(mm[2]);if(o!==o)throw 0;
    const a=typeof v==='string'?v.toLowerCase():v,b=typeof o==='string'?o.toLowerCase():o;
    return mm[1]==='<='?a<=b:mm[1]==='>='?a>=b:mm[1]==='<>'?a!==b:mm[1]==='<'?a<b:mm[1]==='>'?a>b:a===b;
  });
}
/* ===== Access window: chrome, dialogs, objects, ribbon, navigation pane ===== */
let L=null,UI=null,labRef={},itemId=1;
let labPersist=()=>{},onLabChange=null;
const labSave=()=>{labPersist();if(onLabChange)onLabChange()};
const accHooks={saveDb:null,backup:null};
const NAMEL={table:'Table',query:'Query',form:'Form',report:'Report',macro:'Macro'};
const DEFF={table:true,query:true,form:true,macro:true,report:false};
const featOn=k=>Object.assign({},DEFF,(L&&L.feat)||{})[k];

/* ----- database seed (Washerpool College) ----- */
function dbSeed(){
  const o=dbSeedWP();o.reports={};return o}
function dbSeedWP(){
  const F=(n,t,pk)=>({n,t,pk:!!pk,req:false,rule:'',msg:'',size:'',def:'',desc:''});
  const T={
    tblFaculty:{name:'tblFaculty',fields:[F('FacultyID','AutoNumber',1),F('FacultyTitle','Short Text')],rows:WP.fac.map(r=>({FacultyID:r[0],FacultyTitle:r[1]}))},
    tblSubject:{name:'tblSubject',fields:[F('SubjectID','AutoNumber',1),F('SubjectLevel','Number'),F('FacultyID','Number'),F('SubjectTitle','Short Text')],rows:WP.subj.map(r=>({SubjectID:r[0],SubjectLevel:r[1],FacultyID:r[2],SubjectTitle:r[3]}))},
    tblTest:{name:'tblTest',fields:[F('TestID','AutoNumber',1),F('SubjectID','Number'),F('NumMultiChoiceQuestions','Number'),F('NumShortQuestions','Number'),F('NumLongQuestions','Number'),F('MaximumMark','Number')],rows:WP.test.map(r=>({TestID:r[0],SubjectID:r[1],NumMultiChoiceQuestions:r[2],NumShortQuestions:r[3],NumLongQuestions:r[4],MaximumMark:r[5]}))},
    tblTestResult:{name:'tblTestResult',fields:[F('TestResultID','AutoNumber',1),F('TestID','Number'),F('NumStudentsPresent','Number'),F('HighestMark','Number'),F('LowestMark','Number'),F('TestWeek','Date/Time')],rows:WP.res.map(r=>({TestResultID:r[0],TestID:r[1],NumStudentsPresent:r[2]===null?'':r[2],HighestMark:r[3]===null?'':r[3],LowestMark:r[4]===null?'':r[4],TestWeek:r[5]}))}
  };
  return{v:4,tables:T,rels:[
    {oneT:'tblFaculty',oneF:'FacultyID',manyT:'tblSubject',manyF:'FacultyID',ri:true},
    {oneT:'tblSubject',oneF:'SubjectID',manyT:'tblTest',manyF:'SubjectID',ri:true},
    {oneT:'tblTest',oneF:'TestID',manyT:'tblTestResult',manyF:'TestID',ri:true}],queries:{},forms:{},macros:{},done:{}};
}

/* ----- icons ----- */
const SK='stroke="#595959" stroke-width="1.4" fill="none" stroke-linejoin="round" stroke-linecap="round"';
const Bl='#2F6EBA',Gr='#4E9A3A',Pu='#7A5AA6',Yl='#E3A21A',Rd='#C0392B';
const IC={
 table:`<rect x="3" y="5" width="18" height="14" fill="#fff" stroke="${Bl}" stroke-width="1.3"/><path d="M3 10h18M3 14.5h18M9 5v14" stroke="${Bl}" stroke-width="1"/><rect x="3" y="5" width="18" height="5" fill="${Bl}"/>`,
 tabledesign:`<rect x="3" y="5" width="14" height="12" fill="#fff" stroke="${Bl}" stroke-width="1.3"/><path d="M3 9h14M8 5v12" stroke="${Bl}" stroke-width="1"/><rect x="3" y="5" width="14" height="4" fill="${Bl}"/><path d="M13 21l8-8 2 2-8 8-3 1z" fill="${Yl}" stroke="#8a5d00" stroke-width=".8"/>`,
 query:`<rect x="3" y="4" width="14" height="12" fill="#fff" stroke="${Pu}" stroke-width="1.3"/><path d="M3 8h14M9 4v12" stroke="${Pu}" stroke-width="1"/><rect x="3" y="4" width="14" height="4" fill="${Pu}"/><circle cx="16" cy="16" r="4" fill="#fff" stroke="#444" stroke-width="1.4"/><path d="M19 19l3 3" stroke="#444" stroke-width="1.6"/>`,
 form:`<rect x="4" y="3" width="16" height="18" fill="#fff" stroke="${Gr}" stroke-width="1.3"/><rect x="4" y="3" width="16" height="3" fill="${Gr}"/><rect x="7" y="8" width="10" height="3" fill="#fff" stroke="${Gr}"/><rect x="7" y="13" width="10" height="3" fill="#fff" stroke="${Gr}"/><rect x="7" y="18" width="5" height="2" fill="${Gr}"/>`,
 macro:`<rect x="3" y="4" width="18" height="16" fill="#FFF4CC" stroke="#C58F10" stroke-width="1.3"/><path d="M10 8l6 4-6 4z" fill="#C58F10"/>`,
 save:`<path d="M4 4h13l3 3v13H4z" fill="#fff" stroke="#1F5FA8" stroke-width="1.4"/><rect x="7" y="4" width="8" height="5" fill="#1F5FA8"/><rect x="7" y="13" width="10" height="7" fill="#DCE9F7" stroke="#1F5FA8"/>`,
 undo:`<path d="M8 5L3 10l5 5" stroke="#1F5FA8" stroke-width="2" fill="none"/><path d="M3 10h11a6 6 0 0 1 0 12h-3" stroke="#1F5FA8" stroke-width="2" fill="none"/>`,
 redo:`<path d="M16 5l5 5-5 5" stroke="#1F5FA8" stroke-width="2" fill="none"/><path d="M21 10H10a6 6 0 0 0 0 12h3" stroke="#1F5FA8" stroke-width="2" fill="none"/>`,
 run:`<text x="12" y="20" text-anchor="middle" font-size="22" font-weight="700" fill="${Rd}">!</text>`,
 sigma:`<text x="12" y="19" text-anchor="middle" font-size="20" font-weight="700" fill="${Bl}">Σ</text>`,
 az:`<text x="12" y="10" text-anchor="middle" font-size="8" font-weight="700" fill="#333">A</text><text x="12" y="19" text-anchor="middle" font-size="8" font-weight="700" fill="#333">Z</text><path d="M19 5v14m0 0l-2-3m2 3l2-3" stroke="${Bl}" stroke-width="1.5" fill="none"/>`,
 za:`<text x="12" y="10" text-anchor="middle" font-size="8" font-weight="700" fill="#333">Z</text><text x="12" y="19" text-anchor="middle" font-size="8" font-weight="700" fill="#333">A</text><path d="M19 5v14m0 0l-2-3m2 3l2-3" stroke="${Bl}" stroke-width="1.5" fill="none"/>`,
 funnel:`<path d="M3 4h18l-7 9v6l-4 2v-8z" fill="#7F9FC9" stroke="#46618A" stroke-width="1"/>`,
 plus:`<path d="M12 5v14M5 12h14" stroke="#3C9A3C" stroke-width="3.4" fill="none"/>`,
 delrow:`<path d="M4 7h16M4 18h16" ${SK}/><path d="M9 10l6 5M15 10l-6 5" stroke="${Rd}" stroke-width="2.2" fill="none"/>`,
 rel:`<rect x="2" y="4" width="8" height="6" fill="#fff" stroke="${Bl}" stroke-width="1.3"/><rect x="14" y="14" width="8" height="6" fill="#fff" stroke="${Bl}" stroke-width="1.3"/><path d="M10 7h4v10" stroke="#333" stroke-width="1.6" fill="none"/>`,
 sql:`<text x="12" y="16" text-anchor="middle" font-size="10" font-weight="700" fill="${Bl}">SQL</text>`,
 props:`<rect x="4" y="4" width="16" height="16" fill="#fff" stroke="#6B6B6B" stroke-width="1.2"/><path d="M4 9h16M12 4v16" stroke="#6B6B6B" stroke-width="1"/><rect x="4" y="4" width="16" height="5" fill="#BDBDBD"/>`,
 label:`<text x="12" y="17" text-anchor="middle" font-size="13" font-weight="700" fill="#333">Aa</text>`,
 textbox:`<rect x="3" y="7" width="18" height="10" fill="#fff" stroke="#555" stroke-width="1.2"/><path d="M7 10v4" stroke="#333" stroke-width="1.6"/>`,
 combo:`<rect x="3" y="7" width="18" height="10" fill="#fff" stroke="#555" stroke-width="1.2"/><path d="M14 7v10" stroke="#555"/><path d="M15.5 11l2 2.5 2-2.5z" fill="#333"/>`,
 button:`<rect x="3" y="7" width="18" height="10" rx="1" fill="#E8E8E8" stroke="#555" stroke-width="1.2"/>`,
 fields:`<rect x="4" y="4" width="14" height="16" fill="#fff" stroke="#6B6B6B"/><path d="M7 9h8M7 13h8M7 17h8" stroke="#6B6B6B"/><path d="M19 3v6M16 6h6" stroke="#3C9A3C" stroke-width="2" fill="none"/>`,
 paste:`<rect x="5" y="5" width="14" height="16" rx="1" fill="#E7C98A" stroke="#8a6a1c"/><rect x="8" y="3" width="8" height="4" fill="#8a8a8a"/><rect x="8" y="10" width="8" height="9" fill="#fff" stroke="#6B6B6B"/>`,
 report:`<rect x="4" y="3" width="16" height="18" fill="#fff" stroke="#C0392B" stroke-width="1.3"/><rect x="4" y="3" width="16" height="4" fill="#C0392B"/><path d="M7 10h10M7 13h10M7 16h6" stroke="#555"/>`,
 key:`<circle cx="8" cy="9" r="4" fill="#F2C14E" stroke="#8a5d00" stroke-width="1.2"/><path d="M11 11l9 9M16 16l2-2M18 18l2-2" stroke="#8a5d00" stroke-width="2" fill="none"/>`,
 insrow:`<path d="M4 7h16M4 18h16" stroke="#595959" stroke-width="1.4" fill="none"/><path d="M12 9v7M8.5 12.5h7" stroke="#3C9A3C" stroke-width="2.2" fill="none"/>`,
 gen:`<rect x="4" y="4" width="16" height="16" rx="2" fill="#fff" stroke="#7a7a7a" stroke-width="1.2"/><path d="M7 9h10M7 12h10M7 15h6" stroke="#8a8a8a" stroke-width="1.2"/>`,
 select:`<path d="M6 3l12 9-5 1 3 6-3 1-3-6-4 3z" fill="#fff" stroke="#333" stroke-width="1.3"/>`
};
const ico=(n,s)=>h('span',{class:'ic','aria-hidden':'true',html:'<svg viewBox="0 0 24 24" width="'+(s||18)+'" height="'+(s||18)+'" focusable="false">'+(IC[n]||IC.table)+'</svg>'});
const lblSel=(opts,val,fn,aria)=>{const s=h('select',{'aria-label':aria},...opts.map(o=>{const v=Array.isArray(o)?o[0]:o,l=Array.isArray(o)?o[1]:o;return h('option',{value:v},l)}));s.value=val==null?'':val;s.addEventListener('change',()=>fn(s.value));return s};
const fmtv=v=>v===true?'☑':v===false?'☐':(v==null?'':String(v));
const plain=t=>t.replace(/<[^>]+>/g,'');

/* ----- dialogs, menus, status ----- */
function closeDlg(){if(labRef.dlgEl){labRef.dlgEl.remove();labRef.dlgEl=null;const f=labRef.dlgFocus;labRef.dlgFocus=null;if(f&&document.contains(f))f.focus()}}
function dlg(o){
  closeDlg();
  labRef.dlgFocus=document.activeElement;
  const btns=(o.buttons||[{label:'OK',primary:true}]);
  const box=h('div',{class:'a-dlg'+(o.wide?' wide':''),role:'alertdialog','aria-modal':'true','aria-labelledby':'dlgT'},
    h('div',{class:'a-dlgt',id:'dlgT'},h('span',{},o.title||'Microsoft Access'),h('button',{type:'button',class:'a-dlgx','aria-label':'Close',onclick:()=>closeDlg()},'✕')),
    h('div',{class:'a-dlgb'},typeof o.body==='string'?h('div',{html:o.body}):o.body),
    h('div',{class:'a-dlgf'},...btns.map(b=>h('button',{type:'button','data-primary':b.primary?'1':false,class:'btn sm'+(b.primary?'':' quiet'),onclick:()=>{if(b.keep){if(b.fn)b.fn();return}closeDlg();if(b.fn)b.fn()}},b.label))));
  const back=h('div',{class:'a-dlgback'},box);
  box.addEventListener('keydown',e=>{
    if(e.key==='Escape'){e.preventDefault();closeDlg()}
    else if(e.key==='Enter'&&e.target.tagName!=='BUTTON'&&e.target.tagName!=='TEXTAREA'&&e.target.tagName!=='SELECT'){const p=$('[data-primary="1"]',box);if(p){e.preventDefault();p.click()}}
    else if(e.key==='Tab'){const f=$$('button,input,select,textarea',box).filter(x=>!x.disabled);if(!f.length)return;const first=f[0],last=f[f.length-1];if(e.shiftKey&&document.activeElement===first){e.preventDefault();last.focus()}else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first.focus()}}
  });
  labRef.acc.append(back);labRef.dlgEl=back;
  setTimeout(()=>{const t=o.focus||$('[data-primary="1"]',box)||$('button',box);if(t)t.focus()},0);
  return box;
}
function msgBox(text,kind,title){dlg({title:title||'Microsoft Access',body:h('div',{class:'a-msg'},h('span',{class:'a-msgi','aria-hidden':'true'},kind==='ok'?'ℹ':'⚠'),h('div',{html:text})),buttons:[{label:'OK',primary:true}]});say(plain(text))}
function confirmBox(text,yes,no,cancelBtn){dlg({title:'Microsoft Access',body:h('div',{class:'a-msg'},h('span',{class:'a-msgi','aria-hidden':'true'},'?'),h('div',{html:text})),buttons:[{label:'Yes',primary:true,fn:yes},{label:'No',fn:no}].concat(cancelBtn?[{label:'Cancel'}]:[])})}
function closeMenu(){if(labRef.menu){labRef.menu.remove();labRef.menu=null}}
function popMenu(x,y,items,restore){
  closeMenu();
  const m=h('div',{class:'a-menu',role:'menu'},...items.map(it=>h('button',{type:'button',role:'menuitem',class:'a-mi',disabled:!!it.disabled,onclick:()=>{closeMenu();if(restore&&restore.focus)restore.focus();it.fn&&it.fn()}},it.label)));
  m.style.left=x+'px';m.style.top=y+'px';
  m.addEventListener('keydown',e=>{const b=$$('button',m);const i=b.indexOf(document.activeElement);if(e.key==='ArrowDown'){e.preventDefault();b[Math.min(b.length-1,i+1)].focus()}else if(e.key==='ArrowUp'){e.preventDefault();b[Math.max(0,i-1)].focus()}else if(e.key==='Escape'){closeMenu();if(restore&&restore.focus)restore.focus()}});
  labRef.acc.append(m);labRef.menu=m;
  const bx=labRef.acc.getBoundingClientRect();if(x+m.offsetWidth>bx.width)m.style.left=Math.max(0,bx.width-m.offsetWidth-4)+'px';
  const f=$('button:not([disabled])',m);if(f)f.focus();
}
function menuAt(el,items){const a=labRef.acc.getBoundingClientRect(),r=el.getBoundingClientRect();popMenu(r.left-a.left,r.bottom-a.top,items,el)}
function setStatus(t){const s=$('#a-stl');if(s)s.textContent=t;say(t)}

/* ----- table data rules (used by datasheets and forms) ----- */
const relsFor=n=>L.rels.filter(r=>r.manyT===n),relsOf=n=>L.rels.filter(r=>r.oneT===n);
function coerceField(f,raw){
  if(f.t==='AutoNumber')return{ok:true,v:raw};
  if(f.t==='Yes/No')return{ok:true,v:!!raw};
  raw=String(raw==null?'':raw).trim();
  if(raw==='')return{ok:true,v:''};
  if((f.t==='Number'||f.t==='Currency')&&!/^-?\d+(\.\d+)?$/.test(raw))return{msg:'The value you entered isn\'t valid for this field.'};
  if(f.t==='Date/Time'&&pDate(raw)===null&&pTime(raw)===null)return{msg:'The value you entered isn\'t valid for this field.'};
  if(f.t==='Short Text'&&raw.length>(+f.size||255))return{msg:'The text is too long to be accepted by this field.'};
  return{ok:true,v:(f.t==='Number'||f.t==='Currency')?+raw:raw};
}
/* commit a record (idx null = append). db is the database object, so a test copy can be used for marking */
function commitRecord(db,tn,vals,idx){
  const t=db.tables[tn];const rec={};
  for(const f of t.fields){
    if(f.t==='AutoNumber'){rec[f.n]=idx!=null?t.rows[idx][f.n]:(t.rows.reduce((m,r)=>Math.max(m,+r[f.n]||0),0)+1);continue}
    const c=coerceField(f,vals[f.n]);
    if(!c.ok)return{msg:c.msg,field:f.n};
    rec[f.n]=c.v;
  }
  const pks=t.fields.filter(f=>f.pk);
  if(pks.length&&t.rows.some((r,i)=>i!==idx&&pks.every(f=>String(r[f.n])===String(rec[f.n]))))return{msg:'The changes you requested to the table were not successful because they would create duplicate values in the index, primary key, or relationship. Change the data in the field or fields that contain duplicate data, remove the index, or redefine the index to permit duplicate entries and try again.'};
  for(const r of db.rels.filter(r=>r.manyT===tn&&r.ri)){
    const v=rec[r.manyF];
    if(v!==''&&v!=null&&!db.tables[r.oneT].rows.some(o=>String(o[r.oneF])===String(v)))return{msg:'You cannot add or change a record because a related record is required in table “'+r.oneT+'”.'};
  }
  if(idx!=null)t.rows[idx]=Object.assign(t.rows[idx],rec);else t.rows.push(rec);
  return{ok:true,rec};
}
function removeRecord(db,tn,i){
  const t=db.tables[tn];const row=t.rows[i];
  for(const r of db.rels.filter(r=>r.oneT===tn&&r.ri)){
    if(db.tables[r.manyT].rows.some(m=>String(m[r.manyF])===String(row[r.oneF])))return{msg:'The record cannot be deleted or changed because table “'+r.manyT+'” includes related records.'};
  }
  t.rows.splice(i,1);return{ok:true};
}

/* ----- objects, tabs, saving ----- */
const VIEWS={report:[['view','Report View','table'],['print','Print Preview','table'],['layout','Layout View','table'],['design','Design View','tabledesign']],table:[['data','Datasheet View','table'],['design','Design View','tabledesign']],query:[['run','Datasheet View','table'],['sql','SQL View','sql'],['design','Design View','tabledesign']],form:[['view','Form View','form'],['layout','Layout View','form'],['dsv','Datasheet View','table'],['design','Design View','tabledesign']]};
const defView={report:'view',table:'data',query:'run',form:'view',macro:'design',rel:'rel'};
const LISTS=k=>k==='table'?L.tables:k==='query'?L.queries:k==='form'?L.forms:k==='report'?(L.reports||(L.reports={})):L.macros;
const defn=it=>(it.d&&it.kind!=='table')?it.d:LISTS(it.kind)[it.name];
function openObj(kind,name,view,draft,isNew){
  if(!isNew){const i=UI.open.findIndex(o=>o.kind===kind&&o.name===name&&!o.isNew);if(i>=0){UI.act=i;if(view&&UI.open[i].view!==view)setView(UI.open[i],view);else renderDoc();return UI.open[i]}}
  const it={id:itemId++,kind,name,view,d:draft||null,isNew:!!isNew,dirty:false,sel:-1,edit:-1,selCtl:null,showFields:true,showProps:true,tab:'All'};
  UI.open.push(it);UI.act=UI.open.length-1;
  if(!isNew&&view==='design'&&!draft)prepDesign(it);
  renderDoc();return it;
}
function setView(it,v){
  if(it.view===v)return;
  if(it.kind==='table'&&it.view==='design'&&it.dirty&&!L.lock)return confirmBox('Do you want to save changes to the design of table “'+(it.name||'Table1')+'”?',()=>saveObject(it,()=>{it.d=null;setView(it,v)}),()=>{it.dirty=false;it.d=null;setView(it,v)},true);
  if(it.kind==='table'&&it.view==='design'&&v==='data')it.d=null;
  if(v==='design')prepDesign(it);
  if((it.view==='view'||it.view==='layout')&&it.rt){if(it.rt.dirty){const r=it.rt.save();if(!r.ok){msgBox(r.msg);return}}it.rt=null}
  it.view=v;it.edit=-1;renderDoc();
}
function closeItem(i){
  const it=UI.open[i];
  const doClose=()=>{const k=UI.open.indexOf(it);if(k<0)return;UI.open.splice(k,1);if(UI.act>=UI.open.length)UI.act=UI.open.length-1;else if(k<UI.act)UI.act--;renderDoc()};
  if(it.kind==='form'&&(it.view==='view'||it.view==='layout')&&it.rt&&it.rt.dirty){const r=it.rt.save();if(!r.ok){msgBox(r.msg);return}}
  if((it.view==='design'||it.view==='sql')&&NAMEL[it.kind]&&!(it.kind==='table'&&L.lock)&&(it.isNew||it.dirty))
    return confirmBox('Do you want to save changes to the design of '+it.kind+' “'+(it.name||NAMEL[it.kind]+'1')+'”?',()=>saveObject(it,doClose),doClose,true);
  doClose();
}
function nextName(kind){const l=LISTS(kind);let n=1;while(l[NAMEL[kind]+n])n++;return NAMEL[kind]+n}
function askName(kind,fn,initial){
  const inp=h('input',{class:'inp',id:'sasName',value:initial||nextName(kind),'aria-label':NAMEL[kind]+' Name'});
  dlg({title:'Save As',body:h('div',{},h('label',{for:'sasName'},NAMEL[kind]+' Name: '),inp),buttons:[{label:'OK',primary:true,fn:()=>fn(inp.value.trim())},{label:'Cancel'}],focus:inp});
  setTimeout(()=>inp.select(),10);
}
function saveObject(it,cb){
  if(!it||!NAMEL[it.kind])return;
  if(it.embed){if(applyEmbed(it)){const fi=UI.open.find(o=>o.id===it.embed.formId);const i=UI.open.indexOf(it);UI.open.splice(i,1);UI.act=Math.max(0,UI.open.indexOf(fi));renderDoc();setStatus('The property has been updated with the query.')}if(cb)cb();return}
  const finish=name=>{
    if(!name)return msgBox('The name cannot be blank.');
    if(/[.!`\[\]]/.test(name))return msgBox('The name “'+name+'” is not valid. Names cannot contain . ! ` [ or ].');
    if((it.isNew||name!==it.name)&&(L.tables[name]||L.queries[name]||L.forms[name]||L.macros[name]||(L.reports&&L.reports[name])))return msgBox('Microsoft Access cannot save “'+name+'” because another object already has that name.');
    if(it.kind==='table'){if(L.lock)return;commitTable(it,name,()=>{it.dirty=false;it.isNew=false;it.name=name;renderAll();setStatus('Saved table “'+name+'”.');if(cb)cb()});return}
    const old=it.name;
    LISTS(it.kind)[name]=clone(it.d);
    if(old&&old!==name&&!it.isNew)delete LISTS(it.kind)[old];
    labSave();
    it.dirty=false;it.isNew=false;it.name=name;renderAll();
    setStatus('Saved “'+name+'”.');
    if(cb)cb();
  };
  if(it.isNew)askName(it.kind,finish);else finish(it.name);
}
function saveActive(){
  const it=UI.open[UI.act];
  if(!it){setStatus('Nothing to save. Open or create an object first.');return}
  if(it.kind==='table'&&it.view==='data'){if(it.commit)it.commit();return}
  if(it.kind==='form'&&(it.view==='view'||it.view==='layout')){if(it.rt){const r=it.rt.save();if(!r.ok)msgBox(r.msg);else{renderWork();setStatus('Record saved.')}}return}
  if(NAMEL[it.kind]){if(it.view==='sql'&&it.sqlApply&&!it.sqlApply())return;if(it.view==='design'||it.view==='sql'||it.isNew)saveObject(it);else setStatus('Nothing to save.')}
}
function deleteObject(kind,name){
  if(kind==='table'&&L.lock)return msgBox('The tables in this database cannot be deleted in this exam.');
  confirmBox('Do you want to permanently delete the '+kind+' “'+name+'”?',()=>{
    delete LISTS(kind)[name];if(kind==='table')L.rels=L.rels.filter(r=>r.oneT!==name&&r.manyT!==name);labSave();
    UI.open=UI.open.filter(o=>!(o.kind===kind&&o.name===name&&!o.isNew));UI.act=Math.min(UI.act,UI.open.length-1);
    if(UI.navSel&&UI.navSel.name===name)UI.navSel=null;
    renderAll();setStatus('Deleted “'+name+'”.');
  });
}
function openSaved(kind,name){openObj(kind,name,defView[kind])}
const newFormDef=()=>({recordSource:'',dataEntry:false,allowAdditions:true,allowEdits:true,allowDeletions:true,caption:'',recordSelectors:true,navButtons:true,events:{},controls:[],nextN:0,w:480,h:300});
function newQuery(){const it=openObj('query','','design',{src:[],cols:Array.from({length:6},()=>({f:'',sort:'',show:true,crit:['',''],total:'Group By'})),totals:false},true);showTableDlg(it)}
function newForm(src){const d=newFormDef();if(src)d.recordSource=src;return openObj('form','','design',d,true)}
function newTable(){openObj('table','','design',{name:'',fields:[Object.assign(newFieldDef(),{n:'ID',t:'AutoNumber',pk:true})],rows:[]},true)}
function newReport(){const sel=UI.navSel&&(UI.navSel.kind==='table'||UI.navSel.kind==='query')?UI.navSel.name:'';openObj('report','','design',newReportDef(sel),true)}
function newMacro(){openObj('macro','','design',{actions:[]},true)}
function quickForm(){
  const sel=UI.navSel&&(UI.navSel.kind==='table'||UI.navSel.kind==='query')?UI.navSel:null;
  if(!sel){msgBox('Select a table or query in the Navigation Pane first, then choose Form.');return}
  const d=newFormDef();d.recordSource=sel.name;
  const fields=sel.kind==='table'?L.tables[sel.name].fields.map(f=>f.n):(()=>{const r=runQuery(L.queries[sel.name]);return r.err?[]:r.cols})();
  fields.forEach((f,i)=>{d.nextN+=2;d.controls.push({id:'c'+d.nextN,type:'label',name:'Label'+(d.nextN-1),caption:f,x:20,y:16+i*30,w:150,h:22});d.controls.push({id:'c'+(d.nextN+1000),type:'textbox',name:f,controlSource:f,x:180,y:16+i*30,w:220,h:22,events:{}})});
  const it=openObj('form','','view',d,true);it.dirty=true;
}

/* ----- ribbon ----- */
const cmd=(label,icon,fn,tip,on)=>({label,icon,fn,tip,on});
function viewMenu(b,it){menuAt(b,VIEWS[it.kind].map(([v,l])=>({label:l+(it.view===v?'  ✓':''),fn:()=>setView(it,v)})))}
function ctxTab(it){
  if(!it)return null;
  const xc=extraCtx(it);if(xc)return xc;
  if(it.kind==='query'&&(it.view==='design'||it.view==='sql'))return['Query Design','Query Tools'];
  if(it.kind==='form'&&it.view==='design')return['Design','Form Design Tools'];
  if(it.kind==='macro')return['Design','Macro Tools'];
  return null;
}
function groups(tab,it){
  const view=()=>it&&VIEWS[it.kind]?cmd('View',it.view==='design'?'tabledesign':'table',b=>viewMenu(b,it),'Switch between the views of the open object.'):cmd('View','table',()=>setStatus('Open a table, query or form first.'),'Choose a view of the open object.');
  const isData=it&&it.kind==='table'&&it.view==='data',isRun=it&&it.kind==='query'&&it.view==='run',isForm=it&&it.kind==='form'&&(it.view==='view'||it.view==='layout');
  const sorter=d=>()=>{const x=isData||isRun?it:null;if(x&&x.sortBy)x.sortBy(d);else setStatus('Open a table or query in Datasheet View to sort it.')};
  const ex=extraGroups(tab,it,view);if(ex)return ex;
  if(tab==='Home')return[
   {n:'Views',c:[view()]},
   {n:'Sort & Filter',c:[[cmd('Ascending','az',sorter('asc'),'Sort A to Z, smallest to largest, oldest first. Click a cell in the column first.'),cmd('Descending','za',sorter('desc'),'Sort Z to A, largest to smallest, newest first.'),cmd('Remove Sort','funnel',sorter(''),'Put the records back in their original order.')]]},
   {n:'Records',c:[cmd('New','plus',()=>{if(it&&it.newRec&&(isData||isForm))it.newRec();else setStatus('Open a table or a form in Form View to add a record.')},'Start a new record.'),[cmd('Save','save',()=>saveActive(),'Save the record you are editing.'),cmd('Delete','delrow',()=>{if(it&&it.delRec&&(isData||isForm))it.delRec();else setStatus('Select a record first.')},'Delete the selected record.')]]},
   {n:'Find',c:[cmd('Find','sql',()=>findDlg(it),'Find a value in the datasheet.')]},
   {n:'Clipboard',c:[cmd('Paste','paste',()=>{if(it&&it.paste&&isData)it.paste();else setStatus('Open a table in Datasheet View to paste records into it.')},'Paste rows of data into the datasheet.')]}];
  if(tab==='Create')return[
   !L.lock?{n:'Tables',c:[cmd('Table','table',()=>{newTable();setStatus('Real Access opens a datasheet with a Click to Add column. Here the table opens in Design View so you can type the field names and choose the data types.')},'Create a new table. (Here it opens in Design View.)'),cmd('Table Design','tabledesign',newTable,'Create a table in Design View. You type the field names and choose the data types.')]}:null,
   {n:'Queries',c:[cmd('Query Design','query',newQuery,'Create a query in Design View. You choose the tables, fields and criteria.')]},
   featOn('form')?{n:'Forms',c:[cmd('Form','form',quickForm,'Create a form from the table or query selected in the Navigation Pane.'),cmd('Form Design','tabledesign',()=>newForm(),'Create a blank form in Design View.'),[cmd('Blank Form','form',()=>newForm(),'Create a blank form.'),cmd('Form Wizard','form',()=>wizard('form'),'Choose the fields and let Access build the form.')]]}:null,
   featOn('report')?{n:'Reports',c:[cmd('Report','report',quickReport,'Create a report from the table or query selected in the Navigation Pane.'),cmd('Report Design','report',newReport,'Create a report in Design View. You choose the grouping and the controls.'),[cmd('Blank Report','report',newReport,'Create a blank report.'),cmd('Report Wizard','report',()=>wizard('report'),'Choose the fields, grouping and sorting and let Access build the report.')]]}:null,
   featOn('macro')?{n:'Macros & Code',c:[cmd('Macro','macro',newMacro,'Create a macro: a list of actions Access does for you.')]}:null].filter(Boolean);
  if(tab==='Database Tools')return[
   {n:'Relationships',c:[cmd('Relationships','rel',()=>openObj('rel','Relationships','rel'),'See how the tables are linked.')]}];
  if(tab==='Query Design')return[
   {n:'Results',c:[view(),cmd('Run','run',()=>setView(it,'run'),'Run the query and show the results.')]},
   {n:'Query Type',c:[cmd('Select','query',()=>{},'Select query (the kind you are making).',true)]},
   {n:'Query Setup',c:[cmd('Show Table','table',()=>showTableDlg(it),'Add a table to the query.')]},
   {n:'Show/Hide',c:[cmd('Totals','sigma',()=>{it.d.totals=!it.d.totals;it.dirty=true;renderDoc()},'Show the Total row so you can use Min, Max, Avg, Sum or Count.',!!it.d.totals)]}];
  if(tab==='Design'&&it.kind==='form'){
    const tool=(name,icon,tip)=>cmd(name,icon,()=>{it.tool=it.tool===name?null:name;renderRib();setStatus(it.tool?name+' tool selected. Click on the form to place it.':'Select tool.')},tip,it.tool===name);
    return[{n:'Views',c:[view()]},
      {n:'Controls',c:[cmd('Select','select',()=>{it.tool=null;renderRib()},'Select, move and edit controls on the form.',!it.tool),[tool('Text Box','textbox','Click, then click on the form to add a text box.'),tool('Label','label','Click, then click on the form to add a label.'),tool('Combo Box','combo','Click, then click on the form to add a combo box (drop-down list).')],tool('Button','button','Click, then click on the form to add a command button.')]},
      {n:'Tools',c:[cmd('Add Existing Fields','fields',()=>{it.showFields=!it.showFields;renderDoc()},'Show the list of fields from the Record Source.',it.showFields),cmd('Property Sheet','props',()=>{it.showProps=!it.showProps;renderDoc()},'Show or hide the Property Sheet.',it.showProps)]}];
  }
  if(tab==='Design'&&it.kind==='macro')return[
   {n:'Tools',c:[cmd('Run','run',()=>runMacroActions(it.d.actions,{from:it}),'Run the macro.')]}];
  return[];
}
function hideTip(){if(labRef.tipEl){labRef.tipEl.remove();labRef.tipEl=null}}
function showTip(b,c){
  hideTip();if(!labRef.acc||!document.contains(b))return;
  const a=labRef.acc.getBoundingClientRect(),r=b.getBoundingClientRect();
  const t=h('div',{class:'a-tip','aria-hidden':'true'},h('b',{},c.label),h('br'),c.decoy?'Not needed for this task.':(c.tip||''));
  labRef.acc.append(t);labRef.tipEl=t;
  let x=r.left-a.left,y=r.bottom-a.top+4;
  if(x+t.offsetWidth>a.width-4)x=Math.max(2,a.width-t.offsetWidth-4);
  if(y+t.offsetHeight>a.height-2)y=Math.max(2,r.top-a.top-t.offsetHeight-4);
  t.style.left=x+'px';t.style.top=y+'px';
}
function rbtn(c,size){
  const b=h('button',{type:'button',class:'rb '+size+(c.on?' on':'')+(c.decoy?' decoy':''),'aria-label':c.label+(c.tip?'. '+c.tip:''),'aria-pressed':c.on===undefined?false:String(!!c.on),'data-cmd':c.label},ico(c.icon,size==='big'?30:18),h('span',{class:'rl'},c.label));
  b.addEventListener('click',()=>{hideTip();c.fn(b)});
  const show=()=>showTip(b,c);
  b.addEventListener('mouseenter',show);b.addEventListener('focus',()=>{if(b.matches(':focus-visible'))show()});
  b.addEventListener('mouseleave',hideTip);b.addEventListener('blur',hideTip);
  return b;
}
function renderRib(){
  const it=UI.open[UI.act],ct=ctxTab(it);
  const tabs=['File','Home','Create','External Data','Database Tools'];
  if(ct){const key=it.id+':'+it.view;if(UI.ctxSeen!==key){UI.tab=ct[0];UI.ctxSeen=key}}
  else UI.ctxSeen=null;
  if(['Query Design','Design'].includes(UI.tab)&&(!ct||ct[0]!==UI.tab))UI.tab='Home';
  const T=labRef.tabs;
  T.replaceChildren(...tabs.map(t=>h('button',{type:'button',role:'tab','aria-selected':String(UI.tab===t),class:'a-tab'+(UI.tab===t?' on':'')+(t==='File'?' file':''),onclick:()=>{if(t==='File')showBackstage();else{UI.tab=t;renderRib()}}},t)),
    ct?h('button',{type:'button',role:'tab','aria-selected':String(UI.tab===ct[0]),class:'a-tab ctx'+(UI.tab===ct[0]?' on':''),onclick:()=>{UI.tab=ct[0];renderRib()}},h('small',{},ct[1]),ct[0]):null);
  const R=labRef.rib;R.replaceChildren();
  withDecoys(UI.tab,groups(UI.tab,it),it).forEach(g=>{
    R.append(h('div',{class:'a-group','data-region':g.n+' group',role:'group','aria-label':g.n},h('div',{class:'a-gb'},...g.c.map(c=>Array.isArray(c)?h('div',{class:'sm-col'},...c.map(x=>rbtn(x,'sm'))):rbtn(c,'big'))),h('div',{class:'a-gn'},g.n)));
  });
}
function showBackstage(){
  closeDlg();closeMenu();hideTip();
  const main=h('div',{class:'a-backmain'});
  const pages={
    Info:()=>h('div',{class:'stack'},h('h2',{},'Info'),h('p',{html:'<b>'+(L.dbFile||'partB_database.accdb')+'</b><br>'+(L.title||'Washerpool College database')+' (practice copy).'}),h('p',{class:'note',html:'In real Access the <b>File</b> tab opens the <b>Backstage view</b>. It is where you save, back up and close the database.'})),
    Save:()=>{back.remove();saveActive();return null},
    'Save As':()=>h('div',{class:'stack'},h('h2',{},'Save As'),
      h('p',{},'Save the database into your exam folder. Use the file name you are told to use.'),
      h('div',{class:'m-row'},h('button',{type:'button',class:'btn',onclick:()=>{back.remove();if(accHooks.saveDb)accHooks.saveDb();else msgBox('Saving files is not available here.')}},'Save Database As…'),h('button',{type:'button',class:'btn alt',onclick:()=>{back.remove();if(accHooks.backup)accHooks.backup();else msgBox('Backups are not available here.')}},'Back Up Database…'))),
    Print:()=>h('div',{class:'stack'},h('h2',{},'Print'),h('p',{html:'<b>Print</b>, <b>Quick Print</b> and <b>Print Preview</b> are not required for this task. You save PDFs instead.'})),
    'Close Database':()=>{back.remove();UI.open=[];UI.act=-1;renderAll();setStatus('All objects closed.');return null}};
  const show=k=>{main.replaceChildren();const c=(pages[k]||(()=>h('div',{class:'stack'},h('h2',{},k),h('p',{html:'<b>“'+k+'”</b> is not required for this task.'}),h('p',{class:'note',html:'In the exam you only use <b>Save As</b> (to save your database and back it up) and, sometimes, <b>Close</b>. Go back to the database window to carry on.'}))))();if(c)main.append(c)};
  const back=h('div',{class:'a-back',role:'dialog','aria-label':'Backstage view'},
    h('div',{class:'a-backnav'},h('button',{type:'button',class:'a-mi',onclick:()=>back.remove(),'aria-label':'Back to the database window'},'← Back'),...['Info','New','Open','Save','Save As','Print','Close Database','Account','Feedback','Options'].map(k=>h('button',{type:'button',class:'a-mi',onclick:()=>show(k)},k))),main);
  labRef.acc.append(back);show('Info');$('button',back).focus();
  back.addEventListener('keydown',e=>{if(e.key==='Escape')back.remove()});
}

/* ----- navigation pane ----- */
const NAVSEC=[['Tables','table','table'],['Queries','query','query'],['Forms','form','form'],['Reports','report','report'],['Macros','macro','macro']];
function renderNav(){
  const n=labRef.nav;n.replaceChildren();
  labRef.acc.classList.toggle('navoff',!!UI.navOff);
  n.append(h('button',{type:'button',class:'a-shutter','aria-label':'Shutter Bar Open/Close Button','aria-expanded':String(!UI.navOff),onclick:()=>{UI.navOff=!UI.navOff;renderNav()}},UI.navOff?'»':'«'),h('div',{class:'a-navh'},h('span',{},'All Access Objects'),h('span',{'aria-hidden':'true'},'⌄')),
    h('div',{class:'a-navs'},h('input',{class:'inp',type:'search','aria-label':'Search objects',placeholder:'Search...',value:UI.filter||'',oninput:e=>{UI.filter=e.target.value;renderNav();const s=$('input',labRef.nav);s.focus();s.setSelectionRange(s.value.length,s.value.length)}})));
  NAVSEC.filter(x=>featOn(x[1])).forEach(([title,kind,icon])=>{
    const names=Object.keys(LISTS(kind)).filter(x=>!UI.filter||x.toLowerCase().includes(UI.filter.toLowerCase()));
    const col=UI.coll&&UI.coll[kind];
    n.append(h('button',{type:'button',class:'a-navsec','aria-expanded':String(!col),onclick:()=>{UI.coll=UI.coll||{};UI.coll[kind]=!UI.coll[kind];renderNav()}},h('span',{},title),h('span',{class:'chev','aria-hidden':'true'},col?'⌄':'⌃')));
    if(!col)names.forEach(nm=>{
      const sel=UI.navSel&&UI.navSel.kind===kind&&UI.navSel.name===nm;
      const b=h('button',{type:'button',class:'a-navi'+(sel?' sel':''),'data-nm':nm,'aria-label':title.replace(/s$/,'')+' '+nm+(sel?', selected':'')},ico(icon,16),h('span',{},nm));
      b.addEventListener('click',()=>{if(sel)openSaved(kind,nm);else{UI.navSel={kind,name:nm};renderNav();const nb=$$('.a-navi',labRef.nav).find(x=>x.getAttribute('data-nm')===nm);if(nb)nb.focus()}});
      b.addEventListener('dblclick',()=>openSaved(kind,nm));
      b.addEventListener('keydown',e=>{if(e.key==='Enter'){e.preventDefault();openSaved(kind,nm)}});
      b.addEventListener('contextmenu',e=>{e.preventDefault();UI.navSel={kind,name:nm};const a=labRef.acc.getBoundingClientRect();
        popMenu((e.clientX||a.left+20)-a.left,(e.clientY||a.top+20)-a.top,[{label:'Open',fn:()=>openSaved(kind,nm)},{label:kind==='macro'?'Design View':'Design View',fn:()=>openObj(kind,nm,'design')},{label:'Delete',fn:()=>deleteObject(kind,nm)}],b)});
      n.append(b);
    });
    if(!col&&!names.length)n.append(h('span',{class:'m-empty a-none'},'(none yet)'));
  });
  n.append(h('p',{class:'a-hint'},'Double-click an object to open it. Right-click for more choices.'));
}
function renderAll(){renderNav();renderDoc()}
function renderDoc(){renderRib();renderWork();renderStatus()}
function renderStatus(){
  const it=UI.open[UI.act];const left=$('#a-stl'),rt=$('#a-str');if(!left)return;
  left.textContent=!it?'Ready':it.kind==='table'?(it.view==='design'?'Design view.  F6 = Switch panes.  F1 = Help.':'Datasheet View'):it.kind==='query'?(it.view==='design'?'Design view.':it.view==='sql'?'SQL View':'Datasheet View'):it.kind==='form'?(it.view==='design'?'Design View':'Form View'):'Ready';
  rt.replaceChildren();
  if(it&&VIEWS[it.kind])VIEWS[it.kind].forEach(([v,l,ic])=>rt.append(h('button',{type:'button',class:'a-vb'+(it.view===v?' on':''),'aria-label':l,'aria-pressed':String(it.view===v),title:l,onclick:()=>setView(it,v)},ico(v==='design'?'tabledesign':ic,16))));
}
function renderWork(){
  const d=labRef.obj,rec=labRef.rec;
  d.replaceChildren();rec.replaceChildren();rec.hidden=true;
  labRef.dtabs.replaceChildren(...UI.open.map((o,i)=>{
    const lab=o.kind==='rel'?'Relationships':(o.name||NAMEL[o.kind]+'1');
    return h('span',{class:'a-dtab'+(i===UI.act?' on':'')},
      h('button',{type:'button',role:'tab','aria-selected':String(i===UI.act),class:'a-dt',onclick:()=>{UI.act=i;renderDoc()}},ico(o.kind==='rel'?'rel':o.kind,14),lab),
      h('button',{type:'button',class:'a-x','aria-label':'Close '+lab,onclick:()=>closeItem(i)},'×'));
  }));
  const it=UI.open[UI.act];
  if(!it){d.append(h('div',{class:'a-welcome'},h('h3',{},L.title||'Washerpool College database'),h('p',{},'Double-click an object in the Navigation Pane on the left to open it. Use the Create tab to make new objects.')));return}
  const R={report:{view:rptView,print:rptPrint,layout:rptLayout,design:rptDesign},table:{data:tblData,design:tblDesign},query:{run:qryRun,sql:qrySql,design:qryDesign},form:{view:frmView,layout:frmLayout,dsv:frmDatasheet,design:frmDesign},macro:{design:macDesign},rel:{rel:relView}};
  const box=h('div',{class:'a-objin'});d.append(box);
  (R[it.kind][it.view])(it,box,rec);
}
function accSnapshot(){
  const acc=labRef.acc;
  $$('input,select,textarea',acc).forEach(e=>{
    if(e.tagName==='SELECT'){[...e.options].forEach((o,i)=>{if(i===e.selectedIndex)o.setAttribute('selected','');else o.removeAttribute('selected')})}
    else if(e.type==='checkbox'||e.type==='radio'){if(e.checked)e.setAttribute('checked','');else e.removeAttribute('checked')}
    else e.setAttribute('value',e.value);
  });
  const clone2=acc.cloneNode(true);
  clone2.classList.remove('labels');
  $$('.tip',clone2).forEach(x=>x.remove());
  clone2.setAttribute('inert','');clone2.removeAttribute('role');clone2.removeAttribute('aria-label');
  $$('[id]',clone2).forEach(x=>x.removeAttribute('id'));
  const vals=$$('input,select,textarea',acc).map(e=>e.tagName==='SELECT'?(e.options[e.selectedIndex]?e.options[e.selectedIndex].textContent:''):(e.type==='checkbox'?(e.checked?'checked':''):e.value)).join(' ');
  const it=UI.open[UI.act];const dl=$('.a-dlg',acc);
  const props=!!(it&&it.view==='design'&&it.showProps&&$('.fd-props',acc));
  const meta={kind:it?it.kind:'',view:it?it.view:'',name:it?it.name:'',dialog:dl?dl.textContent.replace(/\s+/g,' ').trim():'',props,macro:!!$('.mb-over',acc),isNew:!!(it&&it.rt&&it.rt.isNew),text:(clone2.textContent+' '+vals).replace(/\s+/g,' ').slice(0,12000)};
  if(it&&it.kind==='table'&&it.view==='design'&&it.d){meta.fld=clone(it.d.fields[it.selRow]||null);meta.tbl=it.name;meta.flds=it.d.fields.map(f=>({n:f.n,t:f.t,pk:!!f.pk}))}
  if(it&&it.kind==='rel')meta.rels=clone(L.rels);
  if(it&&it.kind==='report'){meta.rpt=clone(defn(it));}
  if(it&&it.kind==='query'&&it.d)meta.q=clone(it.d);
  return{html:clone2.outerHTML,meta};
}
function drawLinks(wrap,svg,links){
  svg.replaceChildren();
  const W=wrap.getBoundingClientRect();
  svg.setAttribute('width',wrap.scrollWidth);svg.setAttribute('height',wrap.scrollHeight);
  const NS='http://www.w3.org/2000/svg';
  const txt=(s,x,y)=>{const t=document.createElementNS(NS,'text');t.setAttribute('x',x);t.setAttribute('y',y);t.setAttribute('class','lnk-t');t.setAttribute('text-anchor','middle');t.textContent=s;return t};
  links.forEach(l=>{
    const q=x=>String(x).replace(/(["\\])/g,'\\$1');
    const a=wrap.querySelector('[data-bt="'+q(l.oneT)+'"][data-bf="'+q(l.oneF)+'"]'),b=wrap.querySelector('[data-bt="'+q(l.manyT)+'"][data-bf="'+q(l.manyF)+'"]');
    if(!a||!b)return;
    const ra=a.getBoundingClientRect(),rb=b.getBoundingClientRect();
    const ay=ra.top-W.top+ra.height/2,by=rb.top-W.top+rb.height/2;
    let ax,bx,da,db;
    if(ra.right<rb.left){ax=ra.right-W.left;bx=rb.left-W.left;da=1;db=-1}
    else if(rb.right<ra.left){ax=ra.left-W.left;bx=rb.right-W.left;da=-1;db=1}
    else{ax=ra.left-W.left;bx=rb.left-W.left;da=-1;db=-1}
    const pts=[[ax,ay],[ax+da*20,ay],[bx+db*20,by],[bx,by]].map(p=>p.join(',')).join(' ');
    const pl=document.createElementNS(NS,'polyline');pl.setAttribute('points',pts);pl.setAttribute('fill','none');pl.setAttribute('class','lnk');svg.append(pl);
    if(l.mark!==false){svg.append(txt(l.mA||'1',ax+da*10,ay-5),txt(l.mB||'∞',bx+db*10,by-5))}
  });
}
function ensureLabGlobals(){
  if(window.__labDoc)return;window.__labDoc=1;
  document.addEventListener('click',e=>{if(labRef.menu&&!e.target.closest('.a-menu'))closeMenu()},true);
  window.addEventListener('resize',()=>{if(labRef.redraw&&labRef.obj&&document.contains(labRef.obj))labRef.redraw()});
}
function buildAcc(){
  ensureLabGlobals();
  const acc=h('div',{class:'acc',role:'group','aria-label':'Practice copy of Microsoft Access'});
  labRef={acc,
    tabs:h('div',{class:'a-tabs','data-region':'Ribbon tabs',role:'tablist','aria-label':'Ribbon tabs'}),
    rib:h('div',{class:'a-ribbon','data-region':'Ribbon',role:'tabpanel','aria-label':'Ribbon'}),
    nav:h('div',{class:'a-nav','data-region':'Navigation Pane'}),
    dtabs:h('div',{class:'a-dtabs','data-region':'Object tabs',role:'tablist','aria-label':'Open objects'}),
    obj:h('div',{class:'a-obj','data-region':'Object window (work area)'}),
    rec:h('div',{class:'a-rec','data-region':'Record navigation bar'})};
  const qb=(ic,label,fn)=>{const b=h('button',{type:'button',class:'a-qb','aria-label':label,title:label},ico(ic,16));b.addEventListener('click',fn);return b};
  acc.append(
    h('div',{class:'a-title','data-region':'Title bar'},h('span',{class:'a-appic','aria-hidden':'true'},'A'),h('div',{class:'a-qat','data-region':'Quick Access Toolbar',role:'toolbar','aria-label':'Quick Access Toolbar'},qb('save','Save (Ctrl+S)',saveActive)),h('span',{class:'a-ttext'},((L.dbFile||'partB_database.accdb').replace(/\.accdb$/,'')+' : Database- C:\\Users\\student\\'+(L.dbFile||'partB_database.accdb')+' (Access 2007 - 2016 file format) - Access')),h('span',{class:'a-win','aria-hidden':'true'},h('span',{},'─'),h('span',{},'▢'),h('span',{},'✕'))),
    labRef.tabs,labRef.rib,
    h('div',{class:'a-body'},labRef.nav,h('div',{class:'a-work'},labRef.dtabs,labRef.obj,labRef.rec)),
    h('div',{class:'a-status','data-region':'Status bar'},h('span',{id:'a-stl'},'Ready'),h('span',{id:'a-str','data-region':'View buttons'})));
  acc.addEventListener('keydown',e=>{if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==='s'){e.preventDefault();saveActive()}});
  const markDirty=()=>{const it=UI.open[UI.act];if(it&&it.view==='design')it.dirty=true};
  labRef.obj.addEventListener('input',markDirty);labRef.obj.addEventListener('change',markDirty);
  return acc;
}
/* ===== Access: queries, datasheets, table design (read only), relationships ===== */
const lc=s=>String(s==null?'':s).toLowerCase();
const findRT=name=>{const it=UI&&UI.open.find(o=>o.kind==='form'&&(o.view==='view'||o.view==='layout')&&o.rt&&lc(o.name)===lc(name));return it?it.rt:null};
function storeToVal(raw,type){return exFromStore(type,raw)}
function domainRows(db,name){
  const tn=Object.keys(db.tables).find(x=>lc(x)===lc(name));
  if(tn){const t=db.tables[tn];return t.rows.map(r=>{const o={};t.fields.forEach(f=>o[f.n]=exFromStore(f.t,r[f.n]));return o})}
  const qn=Object.keys(db.queries).find(x=>lc(x)===lc(name));
  if(qn){const r=runQuery(db.queries[qn],db);if(r.err)return null;return r.rows.map(row=>{const o={};r.cols.forEach((c,i)=>{const v=row[i];o[c]=typeof v==='string'&&pDate(v)!==null?mkDt(pDate(v)):(v===''?null:v)});return o})}
  return null;
}
function exCtx(db,o){
  o=o||{};
  return{
    ref:path=>{
      if(lc(path[0])==='forms'){const rt=o.forms?o.forms(path[1]):findRT(path[1]);if(!rt)return EXERR('#Name?');return rt.getControl(path[2])}
      const n=path[path.length-1];
      if(o.local){const v=o.local(n);if(v!==undefined)return v}
      return EXERR('#Name?');
    },
    column:(path,i)=>o.column?o.column(path[path.length-1],i):EXERR('#Name?'),
    domainRows:name=>domainRows(db,name)
  };
}

/* ----- query engine ----- */
const qSources=(q,db)=>q.src.filter(n=>(db||L).tables[n]);
function qAllFields(q,db){const out=[];qSources(q,db).forEach(tn=>(db||L).tables[tn].fields.forEach(f=>out.push({ref:tn+'.'+f.n,tn,f})));return out}
function resolveField(q,name,db){
  name=name.trim().replace(/^\[|\]$/g,'');
  const all=qAllFields(q,db);
  return all.find(x=>lc(x.ref)===lc(name))||all.find(x=>lc(x.f.n)===lc(name));
}
function parseCol(q,txt,db){
  txt=(txt||'').trim();if(!txt)return null;
  let label=null,expr=txt;
  const m=/^([A-Za-z_][\w ]*):\s*(.+)$/.exec(txt);
  if(m){label=m[1].trim();expr=m[2].trim()}
  const f=resolveField(q,expr,db);
  if(f)return{kind:'f',ref:f.ref,label:label||f.f.n,type:f.f.t};
  if(!exValid(expr))return{err:'Access cannot understand “'+txt+'”. A Field box can hold a field name or an expression such as <code>Percent: [HighestMark]/[MaximumMark]*100</code>.'};
  return{kind:'expr',src:expr,label:label||'Expr1',type:'Expr'};
}
function critTest(type,raw,text,db,ctx2,local){
  text=text.trim();if(!text)return true;
  if(type==='Yes/No'){const t=text.toLowerCase().replace(/^=\s*/,'');const neg=/^(<>|not)\s*/.test(t);const w=t.replace(/^(<>|not)\s*/,'');const yes=/^(yes|true|-1|on)$/.test(w),no=/^(no|false|0|off)$/.test(w);if(yes||no){const b=raw===true;return (yes?b:!b)!==neg}}
  if(/^is\s+null$/i.test(text))return raw===''||raw==null;
  if(/^is\s+not\s+null$/i.test(text))return !(raw===''||raw==null);
  const numeric=type==='Number'||type==='Currency'||type==='AutoNumber';
  const literal=/^(like|between|in)\b/i.test(text)||/^(<=|>=|<>|<|>|=)?\s*(#[^#]*#|"[^"]*"|-?\d+(\.\d+)?|[A-Za-z0-9 ,'.\-&*?#]+)$/.test(text)&&!/\(/.test(text);
  if(!literal||/\[|\!/.test(text)){
    const m=/^(<=|>=|<>|<|>|=)?\s*([\s\S]*)$/.exec(text);
    const val=exRun(m[2],ctx2);
    if(isErr(val))throw 0;
    if(raw===''||raw==null)return false;
    const c=exCmp(exFromStore(type,raw),val);
    if(c===null)return false;
    const op=m[1]||'=';
    return op==='='?c===0:op==='<>'?c!==0:op==='<'?c<0:op==='>'?c>0:op==='<='?c<=0:c>=0;
  }
  if(raw===''||raw==null)return false;
  const fix=s=>{s=s.trim();
    if(/^(#.*#|".*"|date\(\))$/i.test(s))return s;
    if(numeric&&/^-?\d+(\.\d+)?$/.test(s))return s;
    if(type==='Date/Time'&&(pDate(s)!==null||pTime(s)!==null))return '#'+s+'#';
    return '"'+s.replace(/"/g,'')+'"'};
  let rule,m;
  if(m=/^like\s+(.+)$/i.exec(text))rule='Like "'+m[1].trim().replace(/^"|"$/g,'')+'"';
  else if(m=/^between\s+(.+?)\s+and\s+(.+)$/i.exec(text))rule='Between '+fix(m[1])+' And '+fix(m[2]);
  else if(m=/^in\s*\((.+)\)$/i.exec(text))rule='In ('+m[1].split(',').map(fix).join(',')+')';
  else if(m=/^not\s+(.+)$/i.exec(text))rule='<> '+fix(m[1]);
  else if(m=/^(<=|>=|<>|<|>|=)\s*(.*)$/.exec(text))rule=m[1]+' '+fix(m[2]);
  else rule='= '+fix(text);
  return evalRule(rule,type,raw);
}
function runQuery(q,db){
  db=db||L;
  const srcs=qSources(q,db);
  if(!srcs.length)return{err:'This query has no tables. Use Show Table to add one.'};
  (function(){const rem=srcs.slice(1);const ord=[srcs[0]];while(rem.length){const k=rem.findIndex(t=>ord.some(j=>db.rels.some(x=>(x.oneT===j&&x.manyT===t)||(x.manyT===j&&x.oneT===t))));if(k<0)break;ord.push(rem.splice(k,1)[0])}srcs.splice(0,srcs.length,...ord.concat(rem))})();
  const base=db.tables[srcs[0]];
  let rows=base.rows.map(r=>{const o={};base.fields.forEach(f=>o[base.name+'.'+f.n]=r[f.n]);return{v:o,refs:{[base.name]:r}}});
  const joined=[srcs[0]];const joins=[];
  for(let i=1;i<srcs.length;i++){
    const t2=db.tables[srcs[i]];
    let rel=null,from=null;
    for(const j of joined){const r=db.rels.find(x=>(x.oneT===j&&x.manyT===srcs[i])||(x.manyT===j&&x.oneT===srcs[i]));if(r){rel=r;from=j;break}}
    if(!rel)return{err:'The table “'+srcs[i]+'” is not joined to the other tables. Tables are joined by the relationships in the database (Database Tools, Relationships).'};
    const kFrom=rel.oneT===from?rel.oneF:rel.manyF,kTo=rel.oneT===from?rel.manyF:rel.oneF;
    joins.push({t:srcs[i],on:from+'.'+kFrom+' = '+srcs[i]+'.'+kTo});
    const out=[];
    rows.forEach(r=>t2.rows.forEach(j2=>{const k=r.v[from+'.'+kFrom];if(k!==''&&k!=null&&String(k)===String(j2[kTo])){const o=Object.assign({},r.v);t2.fields.forEach(f=>o[t2.name+'.'+f.n]=j2[f.n]);out.push({v:o,refs:Object.assign({},r.refs,{[t2.name]:j2})})}}));
    const J=rel.join||1;
    const leftAll=(J===2&&rel.oneT===from)||(J===3&&rel.manyT===from),rightAll=(J===2&&rel.oneT===srcs[i])||(J===3&&rel.manyT===srcs[i]);
    if(leftAll){rows.forEach(r=>{if(!out.some(o=>o.refs===r.refs||(o.refs&&r.refs&&Object.keys(r.refs).every(k=>o.refs[k]===r.refs[k]))))out.push({v:Object.assign({},r.v),refs:Object.assign({},r.refs)})})}
    if(rightAll){t2.rows.forEach(j2=>{if(!out.some(o=>o.refs&&o.refs[t2.name]===j2)){const o={};t2.fields.forEach(f=>o[t2.name+'.'+f.n]=j2[f.n]);out.push({v:o,refs:{[t2.name]:j2}})}})}
    rows=out;joined.push(srcs[i]);
  }
  const cols=[];
  for(const c of q.cols){const p=parseCol(q,c.f,db);if(!p)continue;if(p.err)return{err:p.err};cols.push({c,p})}
  if(!cols.length)return{err:'Add at least one field to the design grid. Click a field name in a table above, or type it in a Field box.'};
  const typeOfName=n=>{const f=resolveField(q,n,db);return f?f.f:null};
  const rowCtx=r=>exCtx(db,{local:n=>{const f=resolveField(q,n,db);if(!f)return undefined;return exFromStore(f.f.t,r.v[f.ref])}});
  const val=(p,r)=>{
    if(p.kind==='f')return r.v[p.ref];
    const v=exRun(p.src,rowCtx(r));
    if(isErr(v))return v.$err;
    return isDt(v)?dtStr(v.$d):(v==null?'':(typeof v==='number'?Math.round(v*1e6)/1e6:v));
  };
  const typeOf=p=>p.kind==='f'?p.type:(p.type==='Expr'?'Number':p.type);
  try{
    const hasCrit=cols.some(x=>x.c.crit.some(t=>t&&t.trim()));
    if(hasCrit)rows=rows.filter(r=>{
      let any=false,pass=false;
      for(let k=0;k<2;k++){
        const active=cols.filter(x=>(x.c.crit[k]||'').trim());
        if(!active.length)continue;any=true;
        if(active.every(x=>critTest(typeOf(x.p),val(x.p,r),x.c.crit[k],db,rowCtx(r))))pass=true;
      }
      return !any||pass;
    });
  }catch(e){return{err:'Access could not understand one of the criteria. Try criteria such as <code>Suncaster</code>, <code>&gt;=5</code>, <code>Like "S*"</code> or <code>=[Forms]![frmTestResult]![txtWeek]</code>.'}}
  const sorted=cols.filter(x=>x.c.sort);
  const cmpRows=(a,b)=>{for(const x of sorted){const ta=typeOf(x.p);const va=exFromStore(ta,val(x.p,a)),vb=exFromStore(ta,val(x.p,b));const c=exCmp(va,vb);if(c)return c*(x.c.sort==='Descending'?-1:1)}return 0};
  let outCols,outRows,agg=false,refs=null;
  if(q.totals){
    const shown=cols.filter(x=>x.c.total!=='Where'&&x.c.show!==false);
    const group=shown.filter(x=>!x.c.total||x.c.total==='Group By'),aggs=shown.filter(x=>x.c.total&&x.c.total!=='Group By');
    agg=aggs.length>0;
    const groups=new Map();
    rows.forEach(r=>{const key=JSON.stringify(group.map(x=>val(x.p,r)));if(!groups.has(key))groups.set(key,[]);groups.get(key).push(r)});
    outCols=group.map(x=>x.p.label).concat(aggs.map(x=>x.c.total==='Expression'?x.p.label:x.c.total+'Of'+x.p.label));
    const entries=[...groups.values()];entries.sort((A,B)=>cmpRows(A[0],B[0]));
    outRows=entries.map(g=>group.map(x=>val(x.p,g[0])).concat(aggs.map(x=>{
      if(x.c.total==='Expression'){if(x.p.kind!=='expr')return val(x.p,g[0]);const cx=Object.assign({},rowCtx(g[0]),{aggRows:g,rowRef:(r,p)=>{const f=resolveField(q,p[p.length-1],db);return f?exFromStore(f.f.t,r.v[f.ref]):EXERR('#Name?')}});const v=exRun(x.p.src,cx);return isErr(v)?v.$err:(isDt(v)?dtStr(v.$d):(v==null?'':(typeof v==='number'?Math.round(v*1e6)/1e6:v)))}
      const arr=g.map(r=>val(x.p,r));const nums=arr.map(v=>+v).filter(v=>v===v);
      const fn=x.c.total;if(fn==='First')return arr.length?arr[0]:'';if(fn==='Last')return arr.length?arr[arr.length-1]:'';if(fn==='Count')return arr.filter(v=>v!==''&&v!=null).length;
      if(x.p.type==='Date/Time'&&(fn==='Min'||fn==='Max')){const ord=v=>{const a=pDate(v);return a!==null?a:pTime(v)};const okv=arr.filter(v=>v!==''&&v!=null&&ord(v)!==null);if(!okv.length)return '';return okv.reduce((m,v)=>(fn==='Min'?ord(v)<ord(m):ord(v)>ord(m))?v:m)}
      if(!nums.length)return '';if(fn==='Min')return Math.min(...nums);if(fn==='Max')return Math.max(...nums);
      const s=nums.reduce((a,b)=>a+b,0);return fn==='Sum'?Math.round(s*100)/100:Math.round(s/nums.length*100)/100})));
  }else{
    rows.sort(cmpRows);
    const shown=cols.filter(x=>x.c.show!==false);
    outCols=shown.map(x=>x.p.label);outRows=rows.map(r=>shown.map(x=>val(x.p,r)));
    refs=rows.map(r=>({refs:r.refs,fieldRefs:shown.map(x=>x.p.kind==='f'?x.p.ref:null)}));
  }
  const sql=qSqlText(q,cols,srcs,joins);
  return{cols:outCols,rows:outRows,sql,agg,refs,srcs};
}

/* ----- shared datasheet bits ----- */
function recNav(rec,o){
  rec.hidden=false;
  const isNew=o.pos<0||o.pos>=o.count;
  const mk=(label,aria,fn,disabled)=>h('button',{type:'button',class:'a-rb','aria-label':aria,disabled:!!disabled,onclick:fn},label);
  const lbl=h('span',{class:'a-recn',role:'status'},isNew?'New record':(o.pos+1)+' of '+o.count);
  rec.append(h('span',{},'Record:'),
    mk('|◀','First record',()=>o.go(0),!o.count),
    mk('◀','Previous record',()=>o.go(isNew?o.count-1:o.pos-1),!o.count||(!isNew&&o.pos===0)),
    lbl,
    mk('▶','Next record',()=>o.go(o.pos+1),isNew||o.pos>=o.count-1),
    mk('▶|','Last record',()=>o.go(o.count-1),!o.count),
    mk('▶*','New (blank) record',()=>o.newRec(),!o.newRec),
    h('span',{class:'a-nofilter'},'No Filter'));
  return lbl;
}
function sortRows(it,cols,rows){
  if(!it.sort)return rows.map((r,i)=>i);
  const ci=cols.indexOf(it.sort.f);if(ci<0)return rows.map((r,i)=>i);
  const idx=rows.map((r,i)=>i);
  idx.sort((a,b)=>{const x=rows[a][ci],y=rows[b][ci];const nx=pDate(x),ny=pDate(y);const p=nx!==null&&ny!==null?[nx,ny]:(x!==''&&y!==''&&!isNaN(+x)&&!isNaN(+y))?[+x,+y]:[lc(x),lc(y)];return(p[0]>p[1]?1:p[0]<p[1]?-1:0)*(it.sort.d==='desc'?-1:1)});
  return idx;
}

/* ----- table datasheet ----- */
function tblData(it,box,rec){
  const t=L.tables[it.name];if(!t){box.append(h('p',{},'This table no longer exists.'));return}
  const cols=t.fields.map(f=>f.n);
  const rows=t.rows.map(r=>cols.map(c=>r[c]));
  const ord=sortRows(it,cols,rows);
  const inputs={},trs={};
  const ed=it.edit>=0?it.edit:null;
  const mkInput=(f,val,stored)=>{
    if(f.t==='AutoNumber')return h('span',{class:'an'},stored?String(val):'(New)');
    let c;
    if(f.t==='Yes/No'){c=h('input',{type:'checkbox','aria-label':f.n});c.checked=!!val}
    else c=h('input',{type:'text','aria-label':f.n,value:fmtv(val),placeholder:stored?'':(f.t==='Date/Time'?'dd/mm/yyyy':'')});
    inputs[f.n]=c;
    c.addEventListener('keydown',e=>{if(e.key==='Enter'){e.preventDefault();commit()}else if(e.key==='Escape'&&ed!=null){it.edit=-1;renderWork()}});
    return c;
  };
  const head=h('tr',{},h('th',{class:'rsel'},''),...t.fields.map(f=>h('th',{'data-col':f.n,class:it.cc===f.n?'colsel':''},h('button',{type:'button',class:'thb','aria-label':'Select column '+f.n,onclick:()=>setCc(f.n)},f.n+(f.pk?' 🔑':'')+(it.sort&&it.sort.f===f.n?(it.sort.d==='desc'?' ▼':' ▲'):'')))));
  const body=ord.map(i=>{
    const r=t.rows[i];const isEd=ed===i;
    const tr=h('tr',{class:(it.sel===i?'cur':'')+(isEd?' editing':'')},
      h('td',{class:'rsel'},h('button',{type:'button',class:'rs','aria-label':'Select record '+(ord.indexOf(i)+1),onclick:()=>selectRow(i)},isEd?'✎':(it.sel===i?'▶':''))),
      ...t.fields.map(f=>{
        const td=h('td',{tabindex:isEd?false:'0','data-c':f.n},isEd?mkInput(f,r[f.n],true):fmtv(r[f.n]));
        if(!isEd){const edit=()=>{it.edit=i;renderWork();const x=$('tr.editing input',labRef.obj);if(x)x.focus()};td.addEventListener('click',()=>{selectRow(i);setCc(f.n)});td.addEventListener('dblclick',edit);td.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key==='F2'){e.preventDefault();edit()}})}
        return td}));
    trs[i]=tr;return tr;
  });
  const newTr=h('tr',{class:'newrow'},h('td',{class:'rsel'},'*'),...t.fields.map(f=>h('td',{},ed!=null?'':mkInput(f,'',false))));
  box.append(h('div',{class:'a-sheet'},h('table',{class:'ds',role:'grid'},h('caption',{class:'sr-only'},'Datasheet of '+t.name),h('thead',{},head),h('tbody',{},...body,newTr))));
  let recLbl;
  function setCc(n){it.cc=n;$$('th',head).forEach(x=>x.classList.toggle('colsel',x.getAttribute('data-col')===n))}
  function selectRow(i){it.sel=i;Object.values(trs).forEach(x=>{x.classList.remove('cur');const b=$('.rs',x);if(b)b.textContent=x.classList.contains('editing')?'✎':''});const x=trs[i];if(x){x.classList.add('cur');$('.rs',x).textContent='▶';x.scrollIntoView({block:'nearest'})}drawRec()}
  function drawRec(){rec.replaceChildren();const pos=it.sel>=0?ord.indexOf(it.sel):-1;recLbl=recNav(rec,{count:t.rows.length,pos,go,newRec:it.newRec})}
  const go=k=>{const pos=Math.max(0,Math.min(t.rows.length-1,k));selectRow(ord[pos])};
  function commit(){
    const idx=ed;
    const hasData=t.fields.some(f=>{const c=inputs[f.n];if(!c)return false;return f.t==='Yes/No'?c.checked:c.value!==''});
    if(idx==null&&!hasData)return setStatus('Type something in the new record row (marked *) first.');
    const vals={};t.fields.forEach(f=>{const c=inputs[f.n];if(c)vals[f.n]=f.t==='Yes/No'?c.checked:c.value});
    const r=commitRecord(L,t.name,vals,idx);
    if(r.ok){const wasNew=idx==null;it.edit=-1;if(wasNew)it.sel=t.rows.length-1;labSave();renderWork();setStatus(wasNew?'Record saved.':'Record updated.')}else msgBox(r.msg);
  }
  it.commit=commit;
  it.newRec=()=>{const f=$('tr.newrow input',labRef.obj);if(f){f.scrollIntoView({block:'nearest'});f.focus()}};
  it.sortBy=d=>{if(!d)it.sort=null;else it.sort={f:it.cc||cols[0],d};renderWork();setStatus(d?'Sorted by '+(it.cc||cols[0])+(d==='asc'?' ascending.':' descending.'):'Sort removed.')};
  it.delRec=()=>{
    if(it.sel<0||it.sel>=t.rows.length)return setStatus('Click the grey record selector box at the left of a row first.');
    confirmBox('You are about to delete 1 record(s).<br><br>If you click Yes, you won\'t be able to undo this Delete operation.<br>Are you sure you want to delete these records?',()=>{const x=removeRecord(L,t.name,it.sel);if(x.ok){it.sel=-1;labSave();renderWork();setStatus('Record deleted.')}else msgBox(x.msg)});
  };
  drawRec();
}

/* ----- table design view (read only in this exam) ----- */
function tblDesign(it,box){
  const t=L.tables[it.name];
  if(it.selRow==null)it.selRow=0;
  const bot=h('div',{class:'dsn-bot'});
  const grid=h('table',{class:'dg'},h('caption',{class:'sr-only'},'Table design: one row for each field'),h('thead',{},h('tr',{},h('th',{class:'rsel'},''),h('th',{},'Field Name'),h('th',{},'Data Type'),h('th',{},'Description (Optional)'))));
  const tb=h('tbody',{});grid.append(tb);
  t.fields.forEach((f,i)=>tb.append(h('tr',{class:i===it.selRow?'cur':''},h('td',{class:'rsel'},h('button',{type:'button',class:'rs','aria-label':'Select field '+f.n,onclick:()=>{it.selRow=i;renderWork()}},f.pk?'🔑':(i===it.selRow?'▶':''))),h('td',{class:'ro'},f.n),h('td',{class:'ro'},f.t),h('td',{class:'ro'},f.desc||''))));
  const f=t.fields[it.selRow];
  const rel=(label,val)=>h('tr',{},h('th',{},label),h('td',{class:'ro'},val));
  bot.append(h('div',{class:'pp'},h('div',{class:'pp-tabs'},h('span',{class:'pp-t on'},'General'),h('span',{class:'pp-t'},'Lookup')),
    h('div',{class:'pp-wrap'},h('table',{class:'pp-tbl'},h('caption',{class:'sr-only'},'Field properties'),h('tbody',{},rel('Field Size',f.t==='Short Text'?'255':(f.t==='Number'||f.t==='AutoNumber'?'Long Integer':'')),rel('Required','No'),rel('Validation Rule',''),rel('Validation Text',''),rel('Indexed',f.pk?'Yes (No Duplicates)':'No'))),
      h('div',{class:'pp-help'},h('b',{},'Do not change the tables'),h('p',{},'The exam says the structure of the tables must not be changed. Look at the field names and data types here, then build your forms and queries.')))));
  box.append(h('div',{class:'dsn-top'},grid),bot);
}

/* ----- relationships (view only) ----- */
function relView(it,box){
  const names=Object.keys(L.tables);
  const wrap=h('div',{class:'relc'});
  const svg=document.createElementNS('http://www.w3.org/2000/svg','svg');svg.setAttribute('class','rel-svg');svg.setAttribute('aria-hidden','true');
  names.forEach(n=>{const t=L.tables[n];wrap.append(h('div',{class:'rbox',role:'group','aria-label':'Table '+n},h('div',{class:'rbox-h'},n),h('div',{class:'rbox-b'},...t.fields.map(f=>h('div',{class:'rf plain','data-bt':n,'data-bf':f.n},(f.pk?'🔑 ':'')+f.n)))))});
  wrap.append(svg);
  box.append(h('p',{class:'note',html:'<b>Relationships.</b> The tables are already linked. Each line shows <b>1</b> at the ONE side and <b>∞</b> at the MANY side.'}),wrap,
    h('ul',{class:'checks'},...L.rels.map(r=>h('li',{},h('code',{},r.oneT+'.'+r.oneF+'  1 ──── ∞  '+r.manyT+'.'+r.manyF)))));
  labRef.redraw=()=>drawLinks(wrap,svg,L.rels);requestAnimationFrame(labRef.redraw);
}

/* ----- query design ----- */
function showTableDlg(it){
  const names=Object.keys(L.tables);let pick=names[0];
  const list=h('div',{class:'opts',role:'radiogroup','aria-label':'Tables'},...names.map((n,i)=>{const r=h('input',{type:'radio',name:'stbl',value:n});r.checked=i===0;r.addEventListener('change',()=>pick=n);return h('label',{class:'opt'},r,n)}));
  dlg({title:'Show Table',body:h('div',{},h('p',{},h('b',{},'Tables')),list,h('p',{class:'a-hint'},'Pick a table and press Add. Press Close when you have finished.')),buttons:[{label:'Add',primary:true,fn:()=>{
    const q=it.d;
    if(q.src.includes(pick))setStatus(pick+' is already in the query.');
    else{q.src.push(pick);it.dirty=true;renderWork();setStatus('Added '+pick+'.')}
    showTableDlg(it);
  }},{label:'Close'}]});
}
function qryDesign(it,box){
  const q=it.d;const all=qAllFields(q);
  const wrap=h('div',{class:'q-tbl'});
  const svg=document.createElementNS('http://www.w3.org/2000/svg','svg');svg.setAttribute('class','rel-svg');svg.setAttribute('aria-hidden','true');
  if(!q.src.length)wrap.append(h('p',{class:'m-empty'},'No tables yet. Press Show Table on the ribbon to add one.'));
  q.src.forEach(n=>{
    const t=L.tables[n];if(!t)return;
    wrap.append(h('div',{class:'rbox'},h('div',{class:'rbox-h'},n,h('button',{type:'button',class:'rx','aria-label':'Remove table '+n,onclick:()=>{q.src=q.src.filter(x=>x!==n);it.dirty=true;renderWork()}},'×')),
      h('div',{class:'rbox-b'},...t.fields.map(f=>h('button',{type:'button',class:'rf','data-bt':n,'data-bf':f.n,'aria-label':'Add field '+f.n+' from '+n+' to the grid',onclick:()=>{
        const ref=all.filter(x=>x.f.n===f.n).length>1?n+'.'+f.n:f.n;
        let c=q.cols.find(x=>!x.f.trim());if(!c){c={f:'',sort:'',show:true,crit:['',''],total:'Group By'};q.cols.push(c)}
        c.f=ref;it.dirty=true;renderWork();setStatus('Added '+ref+' to the grid.');
      }},(f.pk?'🔑 ':'')+f.n)))));
  });
  wrap.append(svg);
  const joins=L.rels.filter(r=>q.src.includes(r.oneT)&&q.src.includes(r.manyT));
  const dl=h('datalist',{id:'dl'+it.id},...all.map(x=>h('option',{value:all.filter(y=>y.f.n===x.f.n).length>1?x.ref:x.f.n})));
  const rowsDef=[['Field:','f'],['Table:','t'],['Sort:','sort'],['Show:','show']].concat(q.totals?[['Total:','total']]:[]).concat([['Criteria:','c0'],['or:','c1']]);
  const tdTable=[];
  const grid=h('table',{class:'qg'},h('caption',{class:'sr-only'},'Query design grid. Each column is one field.'),h('tbody',{},...rowsDef.map(([lab,key])=>h('tr',{},h('th',{scope:'row'},lab),...q.cols.map((c,i)=>{
    let cell;
    if(key==='f'){cell=h('input',{type:'text',list:'dl'+it.id,'aria-label':'Field, column '+(i+1),value:c.f});cell.addEventListener('change',()=>{c.f=cell.value;const p=parseCol(q,c.f);if(tdTable[i])tdTable[i].textContent=p&&!p.err&&p.ref?p.ref.split('.')[0]:''})}
    else if(key==='t'){const p=c.f.trim()?parseCol(q,c.f):null;const td=h('td',{class:'ro'},p&&!p.err&&p.ref?p.ref.split('.')[0]:'');tdTable[i]=td;return td}
    else if(key==='sort'){cell=h('select',{'aria-label':'Sort, column '+(i+1)},h('option',{value:''},'(not sorted)'),h('option',{value:'Ascending'},'Ascending'),h('option',{value:'Descending'},'Descending'));cell.value=c.sort;cell.addEventListener('change',()=>c.sort=cell.value)}
    else if(key==='show'){cell=h('input',{type:'checkbox','aria-label':'Show, column '+(i+1)});cell.checked=c.show!==false;cell.addEventListener('change',()=>c.show=cell.checked)}
    else if(key==='total'){cell=h('select',{'aria-label':'Total, column '+(i+1)},...['Group By','Sum','Avg','Min','Max','Count','StDev','Var','First','Last','Expression','Where'].map(x=>h('option',{value:x},x)));cell.value=c.total||'Group By';cell.addEventListener('change',()=>c.total=cell.value)}
    else{const k=key==='c0'?0:1;cell=h('input',{type:'text','aria-label':(k?'Or criteria':'Criteria')+', column '+(i+1),value:c.crit[k]||''});cell.addEventListener('input',()=>c.crit[k]=cell.value)}
    return h('td',{},cell);
  })))));
  box.append(h('div',{class:'q-wrap'},h('div',{class:'q-top'},wrap),h('div',{class:'q-gridwrap'},grid),dl),
    h('p',{class:'a-hint',style:'padding:.3rem .6rem'},'Click a field name in a table above to add it to the grid (in real Access you double-click it). Press Run (the red !) on the ribbon to see the results.'));
  labRef.redraw=()=>drawLinks(wrap,svg,joins);requestAnimationFrame(labRef.redraw);
}
function queryResultView(it,box,rec,q){
  const r=runQuery(q);
  if(r.err){box.append(h('div',{class:'note warn',html:r.err}),h('button',{type:'button',class:'btn',onclick:()=>setView(it,'design')},'Back to Design View'));return null}
  const ord=sortRows(it,r.cols,r.rows);
  it.sortBy=d=>{if(!d)it.sort=null;else it.sort={f:it.cc||r.cols[0],d};renderWork();setStatus(d?'Sorted.':'Sort removed.')};
  box.append(h('div',{class:'a-sheet'},h('table',{class:'ds'},h('thead',{},h('tr',{},h('th',{class:'rsel'},''),...r.cols.map(c=>h('th',{class:it.cc===c?'colsel':''},h('button',{type:'button',class:'thb',onclick:()=>{it.cc=c;renderWork()}},c+(it.sort&&it.sort.f===c?(it.sort.d==='desc'?' ▼':' ▲'):'')))))),
    h('tbody',{},...ord.slice(0,500).map(i=>h('tr',{},h('td',{class:'rsel'},''),...r.rows[i].map(v=>h('td',{},fmtv(v)))))))));
  rec.hidden=false;rec.append(h('span',{},'Record: '+r.rows.length+' record'+(r.rows.length===1?'':'s')),h('span',{class:'a-nofilter'},'No Filter'));
  return r;
}
function qryRun(it,box,rec){const q=defn(it);if(!q){box.append(h('p',{},'Query not found.'));return}queryResultView(it,box,rec,q)}
function qrySql(it,box){
  const q=defn(it);const r=q?runQuery(q):null;
  if(!r||r.err){box.append(h('div',{class:'note warn',html:r?r.err:'Query not found.'}));return}
  box.append(h('pre',{class:'sqlv'},r.sql),h('p',{class:'a-hint'},'This is the SQL that Access writes for you from the design grid.'));
}
/* ===== Access: macros, form runtime, Form Design, Form View ===== */
const MAC_ACTIONS=['MessageBox','SaveRecord','GoToRecord','SetValue','Requery','CancelEvent','CloseWindow','OpenForm','If'];
const FORM_EVENTS=['onLoad','onCurrent','beforeUpdate','afterUpdate','afterInsert'];
function rsDescribe(def,db){
  db=db||L;const rs=(def.recordSource||'').trim();if(!rs)return null;
  const tn=Object.keys(db.tables).find(x=>lc(x)===lc(rs));
  if(tn)return{kind:'table',tn,fields:db.tables[tn].fields.map(f=>({n:f.n,t:f.t}))};
  const qn=Object.keys(db.queries).find(x=>lc(x)===lc(rs));
  if(qn)return{kind:'query',q:db.queries[qn]};
  if(/^select/i.test(rs)&&def.recordSourceQ)return{kind:'query',q:def.recordSourceQ};
  return null;
}
function guessType(v){if(v===''||v==null)return 'Short Text';if(typeof v==='number')return 'Number';if(typeof v==='boolean')return 'Yes/No';if(pDate(v)!==null)return 'Date/Time';return 'Short Text'}

/* ----- macro runner ----- */
function runMacroActions(actions,ctx){
  const res={cancel:false};
  const rt=ctx.rt||null;
  const ex=src=>exRun(src,rt?rt.exctx():exCtx(L,{}));
  const text=s=>{s=String(s==null?'':s);if(/^=/.test(s)){const v=ex(s);return exShow(v)}return s};
  const exec=list=>{
    for(const a of list){
      switch(a.a){
        case 'MessageBox':if(ctx.msg)ctx.msg(text(a.message),a.title?text(a.title):'');else msgBox(text(a.message),'ok',a.title||'Microsoft Access');break;
        case 'SaveRecord':if(rt){const r=rt.save();if(!r.ok&&r.msg&&ctx.msg)ctx.msg(r.msg,'')}break;
        case 'GoToRecord':if(rt)rt.goto((a.rec||'New').toLowerCase());break;
        case 'SetValue':if(rt)rt.setValueExpr(a.item,a.expr);break;
        case 'Requery':if(rt)rt.requery(a.ctl);break;
        case 'CancelEvent':res.cancel=true;break;
        case 'CloseWindow':if(ctx.close)ctx.close();break;
        case 'OpenForm':if(ctx.openForm&&a.form)ctx.openForm(a.form,a.mode);break;
        case 'If':{const v=ex(a.cond||'');if(v&&!isErr(v))exec(a.then||[]);else if(a.else&&a.else.length)exec(a.else);break}
      }
    }
  };
  exec(actions||[]);
  return res;
}

/* ----- form runtime (used by Form View and by the marker) ----- */
function makeRT(def,db,opt){
  opt=opt||{};
  const rt={def,db,opt,pos:-1,isNew:true,buf:{},dirty:false,unbound:{},log:[],loading:false,closed:false};
  const ctlByName=n=>def.controls.find(c=>lc(c.name)===lc(n));
  rt.ctl=ctlByName;
  const msg=(t,ti)=>{rt.log.push(t);if(opt.msg)opt.msg(t,ti)};
  rt.msg=msg;
  rt.source=()=>rsDescribe(def,db);
  rt.rowObjs=()=>{
    const s=rt.source();if(!s)return[];
    if(s.kind==='table')return db.tables[s.tn].rows;
    const r=runQuery(s.q,db);if(r.err)return[];
    return r.rows.map((row,i)=>{const o={};r.cols.forEach((c,k)=>o[c]=row[k]);o.__refs=r.refs?r.refs[i]:null;return o});
  };
  rt.fieldType=n=>{
    const s=rt.source();if(!s)return 'Short Text';
    if(s.kind==='table'){const f=db.tables[s.tn].fields.find(x=>lc(x.n)===lc(n));return f?f.t:'Short Text'}
    const rows=rt.rowObjs();const k=Object.keys(rows[0]||{}).find(x=>lc(x)===lc(n));return k?guessType(rows[0][k]):'Short Text';
  };
  rt.fieldNames=()=>{const s=rt.source();if(!s)return[];if(s.kind==='table')return s.fields.map(f=>f.n);const r=runQuery(s.q,db);return r.err?[]:r.cols};
  const hasField=n=>rt.fieldNames().some(x=>lc(x)===lc(n));
  const realField=n=>rt.fieldNames().find(x=>lc(x)===lc(n));
  rt.boundField=c=>{const cs=(c.controlSource||'').trim();if(!cs||cs[0]==='=')return null;return hasField(cs)?realField(cs):null};
  rt.isCalc=c=>/^=/.test((c.controlSource||'').trim());
  rt.fieldVal=n=>exFromStore(rt.fieldType(n),rt.buf[n]);
  rt.exctx=()=>exCtx(db,{
    local:n=>{const c=ctlByName(n);if(c)return rt.getControl(c.name);const f=realField(n);if(f)return rt.fieldVal(f);return undefined},
    column:(n,i)=>rt.comboColumn(n,i),
    forms:fn=>lc(fn)===lc(opt.name||'')?rt:findRT(fn)
  });
  rt.comboList=c=>{
    if(c.rowSourceType==='Value List'){
      const items=String(c.rowSource||'').split(';').map(s=>s.trim()).filter(s=>s!=='');
      const n=Math.max(1,+c.columnCount||1);const rows=[];
      for(let i=0;i<items.length;i+=n)rows.push(items.slice(i,i+n).map(v=>(v!==''&&!isNaN(+v))?+v:v));
      return{cols:[],rows};
    }
    const rs=(c.rowSource||'').trim();if(!rs)return{cols:[],rows:[]};
    const tn=Object.keys(db.tables).find(x=>lc(x)===lc(rs)),qn=Object.keys(db.queries).find(x=>lc(x)===lc(rs));
    if(tn){const t=db.tables[tn];return{cols:t.fields.map(f=>f.n),rows:t.rows.map(r=>t.fields.map(f=>r[f.n]))}}
    let q=qn?db.queries[qn]:(/^select/i.test(rs)&&c.rowSourceQ?c.rowSourceQ:null);
    if(!q)return{cols:[],rows:[]};
    const r=runQuery(q,db);return r.err?{cols:[],rows:[],err:r.err}:{cols:r.cols,rows:r.rows};
  };
  const boundIdx=c=>Math.max(1,+c.boundColumn||1)-1;
  const widths=c=>String(c.columnWidths||'').split(';').map(s=>s.trim()).map(s=>s===''?null:parseFloat(s));
  rt.comboDisplayCols=c=>{const L2=rt.comboList(c);const n=L2.rows[0]?L2.rows[0].length:(+c.columnCount||1);const w=widths(c);const cols=[];for(let i=0;i<n;i++){if(w[i]===0)continue;cols.push(i)}return cols.length?cols:[0]};
  rt.comboColumn=(name,idx)=>{
    const c=ctlByName(name);if(!c||c.type!=='combo')return EXERR('#Name?');
    const bv=rt.rawValue(c);const L2=rt.comboList(c);
    const row=L2.rows.find(r=>String(r[boundIdx(c)])===String(bv));
    if(!row)return null;const v=row[idx];
    if(v===''||v==null)return null;
    return typeof v==='string'&&pDate(v)!==null?mkDt(pDate(v)):v;
  };
  rt.rawValue=c=>{
    const f=rt.boundField(c);
    if(f)return rt.buf[f];
    return rt.unbound[c.name];
  };
  rt.getControl=name=>{
    const c=ctlByName(name);
    if(!c){const f=realField(name);return f?rt.fieldVal(f):EXERR('#Name?')}
    if(c.type==='label'||c.type==='button')return c.caption||'';
    if(rt.isCalc(c)){return exRun(c.controlSource,rt.exctx())}
    const f=rt.boundField(c);
    if(f)return rt.fieldVal(f);
    const v=rt.unbound[c.name];
    if(v===undefined||v===''||v===null)return null;
    return v;
  };
  rt.display=c=>{
    if(c.type==='label'||c.type==='button')return c.caption||'';
    const v=rt.getControl(c.name);
    if(c.type==='combo'){
      const bv=rt.rawValue(c);if(bv===''||bv==null)return '';
      const L2=rt.comboList(c);const row=L2.rows.find(r=>String(r[boundIdx(c)])===String(bv));
      if(!row)return exShow(v);
      return rt.comboDisplayCols(c).map(i=>fmtv(row[i])).join(' ');
    }
    return exApplyFormat(v,c);
  };
  rt.setStore=(c,raw)=>{const f=rt.boundField(c);if(f){rt.buf[f]=raw;if(!rt.loading)rt.dirty=true}else rt.unbound[c.name]=(raw===''?null:((raw!==''&&!isNaN(+raw)&&typeof raw==='string')?+raw:raw))};
  rt.setControl=(name,text)=>{
    const c=ctlByName(name);if(!c)return{ok:false,msg:'There is no control called “'+name+'”.'};
    if(c.type==='label'||c.type==='button')return{ok:false,msg:''};
    if(rt.isCalc(c)||c.enabled===false||c.locked)return{ok:false,msg:'This control is locked or calculated and cannot be edited.'};
    if(!rt.isNew&&def.allowEdits===false)return{ok:false,msg:'This form does not allow edits.'};
    let raw=text;
    if(c.type==='combo'){
      const L2=rt.comboList(c);const t=String(text==null?'':text).trim();
      if(t===''){raw=''}
      else{
        const disp=rt.comboDisplayCols(c);
        let row=L2.rows.find(r=>disp.some(i=>lc(fmtv(r[i]))===lc(t)))||L2.rows.find(r=>lc(fmtv(r[boundIdx(c)]))===lc(t));
        if(!row){const full=L2.rows.find(r=>lc(disp.map(i=>fmtv(r[i])).join(' '))===lc(t));row=full}
        if(row)raw=row[boundIdx(c)];
        else if(c.limitToList!==false&&c.limitToList!=='No')return{ok:false,msg:'The text you entered isn\'t an item in the list.<br><br>Select an item from the list, or enter text that matches one of the listed items.'};
        else raw=t;
      }
    }
    const f=rt.boundField(c);
    const type=f?rt.fieldType(f):guessType(raw);
    if(f&&raw!==''){
      const fieldDef=rt.source().kind==='table'?db.tables[rt.source().tn].fields.find(x=>x.n===f):{n:f,t:type};
      const cf=coerceField(fieldDef||{n:f,t:type},raw);if(!cf.ok)return{ok:false,msg:cf.msg};raw=cf.v;
    }
    const rule=(c.validationRule||'').trim();
    if(rule){
      let ok=true;try{ok=evalRule(rule,type,raw)}catch(e){const base=rt.exctx();const tv=exFromStore(type==='Date/Time'?'Date/Time':type,raw);ok=exRun(rule,Object.assign({},base,{ref:p=>{const n=p[p.length-1];if(p.length===1&&(lc(n)==='value'||lc(n)===lc(c.name)||(f&&lc(n)===lc(f))))return tv;return base.ref(p)}}));if(ok===-1)ok=true;if(ok==null)ok=true}
      if(ok===false||(ok&&isErr(ok)))return{ok:false,msg:(c.validationText||'').trim()||('One or more values are prohibited by the validation rule “'+rule+'” set for “'+c.name+'”. Enter a value that the expression for this field can accept.'),custom:!!(c.validationText||'').trim()};
    }
    rt.setStore(c,raw);
    rt.runControlEvent(c,'afterUpdate');
    return{ok:true};
  };
  rt.setValueExpr=(item,expr)=>{
    const name=String(item||'').replace(/^\[?(forms\]?!\[?[^\]!]+\]?!)?\[?/i,'').replace(/\]$/,'');
    const c=ctlByName(name);if(!c)return;
    const v=exRun(expr,rt.exctx());
    const f=rt.boundField(c);
    if(f)rt.setStore(c,exToStore(v,rt.fieldType(f)));
    else rt.unbound[c.name]=isErr(v)?null:v;
  };
  rt.requery=()=>{};
  const evActions=ev=>{if(!ev)return null;if(ev.type==='embedded')return ev.actions||[];if(ev.type==='macro'){const m=db.macros[ev.name];return m?m.actions:[]}return null};
  rt.macCtx=()=>({rt,msg,close:()=>{rt.closed=true;if(opt.close)opt.close()},openForm:(n,m)=>{if(opt.openForm)opt.openForm(n,m)}});
  rt.runEvent=(events,key)=>{const a=evActions(events&&events[key]);if(!a)return{cancel:false};return runMacroActions(a,rt.macCtx())};
  rt.runFormEvent=key=>rt.runEvent(def.events,key);
  rt.runControlEvent=(c,key)=>rt.runEvent(c.events,key);
  rt.newRecord=()=>{
    rt.pos=-1;rt.isNew=true;rt.buf={};rt.dirty=false;rt.unbound={};
    rt.loading=true;
    def.controls.forEach(c=>{
      const dv=(c.defaultValue||'').trim();if(!dv||c.type==='label'||c.type==='button')return;
      const v=exRun(dv,rt.exctx());if(isErr(v))return;
      const f=rt.boundField(c);
      if(f)rt.buf[f]=exToStore(v,rt.fieldType(f));else rt.unbound[c.name]=v;
    });
    rt.loading=false;
    return rt;
  };
  rt.load=i=>{
    const rows=rt.rowObjs();const row=rows[i];if(!row)return false;
    rt.pos=i;rt.isNew=false;rt.dirty=false;rt.buf={};rt.unbound={};
    Object.keys(row).forEach(k=>{if(k!=='__refs')rt.buf[k]=row[k]});
    return true;
  };
  rt.count=()=>rt.rowObjs().length;
  rt.goto=where=>{
    if(rt.dirty){const r=rt.save();if(!r.ok){if(r.msg)msg(r.msg,'');return r}}
    const n=rt.count();
    if(where==='new'||where===-1){if(def.allowAdditions===false){msg('This form does not allow new records.','');return{ok:false}}rt.newRecord()}
    else{
      let i=where==='first'?0:where==='last'?n-1:where==='next'?(rt.isNew?n:rt.pos+1):where==='previous'?(rt.isNew?n-1:rt.pos-1):where;
      i=Math.max(0,Math.min(n-1,i));if(n&&!rt.load(i))rt.newRecord();if(!n)rt.newRecord();
    }
    rt.runFormEvent('onCurrent');
    return{ok:true};
  };
  rt.open=()=>{
    rt.loading=true;
    if(def.dataEntry||!rt.count())rt.newRecord();else rt.load(0);
    rt.runFormEvent('onLoad');
    rt.loading=false;
    rt.runFormEvent('onCurrent');
    return rt;
  };
  rt.save=()=>{
    if(!rt.dirty&&!rt.isNew)return{ok:true};
    if(!rt.dirty&&rt.isNew)return{ok:true};
    const s=rt.source();if(!s)return{ok:false,msg:'This form has no Record Source, so there is nowhere to save the record.'};
    const be=rt.runFormEvent('beforeUpdate');
    if(be.cancel)return{ok:false,msg:'',cancelled:true};
    let r;
    if(s.kind==='table'){
      const t=db.tables[s.tn];
      const vals={};t.fields.forEach(f=>vals[f.n]=rt.buf[f.n]===undefined?(f.t==='Yes/No'?false:''):rt.buf[f.n]);
      r=commitRecord(db,s.tn,vals,rt.isNew?null:rt.pos);
      if(r.ok&&rt.isNew)rt.pos=t.rows.length-1;
    }else{
      const rows=rt.rowObjs();
      if(rt.isNew){
        const srcs=qSources(s.q,db);
        if(srcs.length!==1)return{ok:false,msg:'New records cannot be added through this query in the practice copy. Base the form on a table, or on a query that uses one table.'};
        const t=db.tables[srcs[0]];const vals={};t.fields.forEach(f=>{const k=Object.keys(rt.buf).find(x=>lc(x)===lc(f.n));vals[f.n]=k?rt.buf[k]:(f.t==='Yes/No'?false:'')});
        r=commitRecord(db,srcs[0],vals,null);
      }else{
        const ro=rows[rt.pos];const refs=ro&&ro.__refs;r={ok:true};
        if(refs){const res=runQuery(s.q,db);const fr=res.refs[rt.pos].fieldRefs;
          const byTable={};
          res.cols.forEach((c,k)=>{const ref=fr[k];if(!ref)return;const tn=ref.split('.')[0],fn=ref.split('.').slice(1).join('.');(byTable[tn]=byTable[tn]||{})[fn]=rt.buf[c]});
          for(const tn of Object.keys(byTable)){const rowObj=refs.refs[tn];const idx=db.tables[tn].rows.indexOf(rowObj);const vals={};db.tables[tn].fields.forEach(f=>vals[f.n]=byTable[tn][f.n]!==undefined?byTable[tn][f.n]:rowObj[f.n]);r=commitRecord(db,tn,vals,idx);if(!r.ok)break}}
      }
    }
    if(!r.ok)return{ok:false,msg:r.msg};
    const wasNew=rt.isNew;rt.dirty=false;
    if(opt.persist)opt.persist();
    rt.runFormEvent('afterUpdate');
    if(wasNew){
      rt.runFormEvent('afterInsert');
      if(def.dataEntry){rt.newRecord();rt.runFormEvent('onCurrent')}
      else{rt.isNew=false}
    }
    return{ok:true};
  };
  return rt;
}

/* ----- macro editor (used for embedded macros and standalone macros) ----- */
function macEditor(host,actions,changed){
  const forms=()=>Object.keys(L.forms);
  const argRows=(a,i,redraw)=>{
    const row=(label,node)=>h('label',{class:'ps-f'},h('span',{},label),node);
    const inp=(prop,label)=>{const x=h('input',{class:'inp',type:'text','aria-label':label+' for '+a.a,value:a[prop]||''});x.addEventListener('input',()=>{a[prop]=x.value;changed()});return row(label,x)};
    switch(a.a){
      case 'MessageBox':return[inp('message','Message'),inp('title','Title'),h('p',{class:'a-hint'},'Beep: Yes   Type: None')];
      case 'GoToRecord':return[row('Record',lblSel(['New','Next','Previous','First','Last'],a.rec||'New',v=>{a.rec=v;changed()},'Record'))];
      case 'SetValue':return[inp('item','Item'),inp('expr','Expression')];
      case 'Requery':return[inp('ctl','Control Name')];
      case 'OpenForm':return[row('Form Name',lblSel([['','(choose)']].concat(forms().map(f=>[f,f])),a.form||'',v=>{a.form=v;changed()},'Form Name')),row('Data Mode',lblSel(['Add','Edit'],a.mode||'Edit',v=>{a.mode=v;changed()},'Data Mode'))];
      case 'SaveRecord':return[h('p',{class:'a-hint'},'Saves the record that is open on the form.')];
      case 'CancelEvent':return[h('p',{class:'a-hint'},'Cancels the event that started this macro, for example the save.')];
      case 'CloseWindow':return[h('p',{class:'a-hint'},'Closes the form.')];
    }
    return[];
  };
  const list=(arr,depth)=>{
    const wrap=h('div',{class:'mac-list'});
    arr.forEach((a,i)=>{
      const body=argRows(a,i);
      if(a.a==='If'){
        const c=h('input',{class:'inp',type:'text','aria-label':'Condition',value:a.cond||'',placeholder:'e.g. IsNull([Text2])'});c.addEventListener('input',()=>{a.cond=c.value;changed()});
        a.then=a.then||[];
        body.push(h('label',{class:'ps-f'},h('span',{},'If'),c),h('div',{class:'mb-then'},h('b',{},'Then'),list(a.then,depth+1)),h('p',{class:'a-hint'},'End If'));
      }
      wrap.append(h('div',{class:'mblock'},h('div',{class:'mb-h'},h('b',{},a.a),h('span',{class:'m-row'},
        h('button',{type:'button',class:'btn quiet sm','aria-label':'Move '+a.a+' up',disabled:i===0,onclick:()=>{[arr[i-1],arr[i]]=[arr[i],arr[i-1]];changed();redraw()}},'↑'),
        h('button',{type:'button',class:'btn quiet sm','aria-label':'Move '+a.a+' down',disabled:i===arr.length-1,onclick:()=>{[arr[i+1],arr[i]]=[arr[i],arr[i+1]];changed();redraw()}},'↓'),
        h('button',{type:'button',class:'btn quiet sm','aria-label':'Delete '+a.a,onclick:()=>{arr.splice(i,1);changed();redraw()}},'×'))),...body));
    });
    const add=lblSel([['','Add New Action']].concat(MAC_ACTIONS.filter(x=>depth<1||x!=='If').map(a=>[a,a])),'',v=>{if(!v)return;arr.push(v==='If'?{a:'If',cond:'',then:[]}:{a:v});changed();redraw()},'Add New Action');
    wrap.append(h('div',{class:'mb-add'},add));
    return wrap;
  };
  function redraw(){host.replaceChildren(h('p',{class:'a-hint'},'A macro is a list of actions Access does for you. Choose an action from Add New Action. Use If to make an action happen only when a condition is true.'),list(actions,0))}
  redraw();
}
function eventActions(obj,key,create){
  obj.events=obj.events||{};let ev=obj.events[key];
  if(!ev&&create){ev=obj.events[key]={type:'embedded',actions:[]}}
  return ev;
}
function openMacroBuilder(it,obj,key,title){
  const ev=eventActions(obj,key,true);
  if(ev.type!=='embedded'){obj.events[key]={type:'embedded',actions:[]}}
  const e2=obj.events[key];
  const host=h('div',{class:'mb-body'});
  const over=h('div',{class:'mb-over',role:'dialog','aria-label':'Macro Builder'},
    h('div',{class:'mb-bar'},h('b',{},'Macro Builder (embedded macro)'),h('span',{},title),h('span',{class:'m-row'},h('button',{type:'button',class:'btn sm',onclick:()=>{over.remove();it.dirty=true;renderDoc()}},'Save and Close'))),host);
  macEditor(host,e2.actions,()=>{it.dirty=true});
  labRef.obj.append(over);$('button',over).focus();
}
function macDesign(it,box){
  const host=h('div',{class:'mac'});
  macEditor(host,it.d.actions,()=>{it.dirty=true});
  box.append(host);
}

/* ----- Form Design ----- */
const CTL_BASE={textbox:'Text',combo:'Combo',button:'Command',label:'Label'};
const FP={
 form:[['caption','Caption','Format','text'],['recordSelectors','Record Selectors','Format','bool'],['navButtons','Navigation Buttons','Format','bool'],['recordSource','Record Source','Data','source'],['allowEdits','Allow Edits','Data','bool'],['allowDeletions','Allow Deletions','Data','bool'],['allowAdditions','Allow Additions','Data','bool'],['dataEntry','Data Entry','Data','bool'],['onLoad','On Load','Event','event'],['onCurrent','On Current','Event','event'],['beforeUpdate','Before Update','Event','event'],['afterUpdate','After Update','Event','event'],['afterInsert','After Insert','Event','event']],
 textbox:[['x','Left','Format','num'],['y','Top','Format','num'],['w','Width','Format','num'],['h','Height','Format','num'],['format','Format','Format','text'],['decimalPlaces','Decimal Places','Format','text'],['controlSource','Control Source','Data','field'],['defaultValue','Default Value','Data','text'],['validationRule','Validation Rule','Data','text'],['validationText','Validation Text','Data','text'],['enabled','Enabled','Data','bool'],['locked','Locked','Data','bool'],['afterUpdate','After Update','Event','event'],['onClick','On Click','Event','event'],['name','Name','Other','text']],
 combo:[['x','Left','Format','num'],['y','Top','Format','num'],['w','Width','Format','num'],['h','Height','Format','num'],['columnCount','Column Count','Format','num'],['columnWidths','Column Widths','Format','text'],['controlSource','Control Source','Data','field'],['rowSourceType','Row Source Type','Data','select:Table/Query|Value List'],['rowSource','Row Source','Data','source'],['boundColumn','Bound Column','Data','num'],['limitToList','Limit To List','Data','bool'],['defaultValue','Default Value','Data','text'],['validationRule','Validation Rule','Data','text'],['validationText','Validation Text','Data','text'],['enabled','Enabled','Data','bool'],['locked','Locked','Data','bool'],['afterUpdate','After Update','Event','event'],['onClick','On Click','Event','event'],['name','Name','Other','text']],
 label:[['caption','Caption','Format','text'],['x','Left','Format','num'],['y','Top','Format','num'],['w','Width','Format','num'],['h','Height','Format','num'],['name','Name','Other','text']],
 button:[['caption','Caption','Format','text'],['x','Left','Format','num'],['y','Top','Format','num'],['w','Width','Format','num'],['h','Height','Format','num'],['onClick','On Click','Event','event'],['name','Name','Other','text']]
};
const DEF_TRUE=['recordSelectors','navButtons','allowEdits','allowDeletions','allowAdditions','enabled','limitToList'];
function getP(obj,k,isForm){
  if(FORM_EVENTS.includes(k)||k==='onClick'||(!isForm&&k==='afterUpdate')){const e=obj.events&&obj.events[k];return e?(e.type==='embedded'?'[Embedded Macro]':e.name):''}
  const v=obj[k];
  if(typeof v==='boolean'||(DEF_TRUE.includes(k)&&v===undefined))return v===undefined?true:v;
  return v===undefined?'':v;
}
function frmDesign(it,box){
  const d=it.d;
  if(it.selCtl===null||it.selCtl===undefined)it.selCtl='form';
  const wrap=h('div',{class:'fd'});
  const surfWrap=h('div',{class:'fd-surf-wrap'});
  const surf=h('div',{class:'fd-surf',tabindex:'0','aria-label':'Form design surface. Press Enter to place the selected tool.'});
  surf.style.width=d.w+'px';surf.style.minHeight=d.h+'px';
  surfWrap.append(h('div',{class:'fd-ruler-t','aria-hidden':'true'}),h('div',{class:'fd-sec'},'Detail'),h('div',{style:'display:flex'},h('div',{class:'fd-ruler-l','aria-hidden':'true'}),surf));
  const names=()=>d.controls.map(c=>c.name);
  const newName=type=>{const n=d.nextN;d.nextN+=2;return CTL_BASE[type]+(type==='label'?n:n+1)};
  const addControl=(type,x,y,field)=>{
    const id='c'+(++d.nextN+Math.floor(Math.random()*1000));
    const made=[];
    if(type==='textbox'||type==='combo'){
      const n=newName(type);const nm=field||n;
      d.controls.push({id:id+'l',type:'label',name:'Label'+(d.nextN),caption:field||n,x:Math.max(0,x-130),y,w:120,h:22});
      const c={id,type,name:nm,x,y,w:180,h:22,controlSource:field||'',events:{}};
      if(type==='combo'){c.rowSourceType='Table/Query';c.rowSource='';c.columnCount=1;c.columnWidths='';c.boundColumn=1;c.limitToList=true}
      d.controls.push(c);made.push(c);
    }else if(type==='label'){const n=newName('label');const c={id,type,name:n,caption:n,x,y,w:120,h:22};d.controls.push(c);made.push(c)}
    else if(type==='button'){const n=newName('button');const c={id,type,name:n,caption:n,x,y,w:110,h:28,events:{}};d.controls.push(c);made.push(c)}
    it.dirty=true;it.selCtl=made[0].id;it.tool=null;renderDoc();
  };
  const sel=()=>it.selCtl==='form'?d:d.controls.find(c=>c.id===it.selCtl);
  const select=id=>{it.selCtl=id;$$('.fdc',surf).forEach(e=>e.classList.toggle('sel',e.getAttribute('data-id')===id));drawProps()};
  const drawSurf=()=>{
    surf.replaceChildren();
    d.controls.forEach(c=>{
      const el=h('div',{class:'fdc t-'+c.type+(it.selCtl===c.id?' sel':''),'data-id':c.id,tabindex:'0',role:'button','aria-label':({textbox:'Text box',combo:'Combo box',label:'Label',button:'Button'})[c.type]+' '+c.name+(it.selCtl===c.id?', selected':'')});
      el.style.left=c.x+'px';el.style.top=c.y+'px';el.style.width=c.w+'px';el.style.height=c.h+'px';
      if(c.type==='label')el.append(h('span',{},c.caption||''));
      else if(c.type==='button')el.append(h('span',{},c.caption||''));
      else{const cs=(c.controlSource||'').trim();el.append(h('span',{class:'fdc-t'},cs?(cs[0]==='='?cs:cs):'Unbound'),c.type==='combo'?h('span',{class:'fdc-a','aria-hidden':'true'},'▾'):null)}
      el.addEventListener('pointerdown',e=>{
        if(e.button)return;e.stopPropagation();select(c.id);
        const sx=e.clientX,sy=e.clientY,ox=c.x,oy=c.y;let moved=false;
        try{el.setPointerCapture(e.pointerId)}catch(x){}
        const mv=ev=>{const dx=ev.clientX-sx,dy=ev.clientY-sy;if(Math.abs(dx)+Math.abs(dy)>4)moved=true;if(moved){c.x=Math.max(0,ox+dx);c.y=Math.max(0,oy+dy);el.style.left=c.x+'px';el.style.top=c.y+'px'}};
        const up=()=>{el.removeEventListener('pointermove',mv);el.removeEventListener('pointerup',up);if(moved){it.dirty=true;drawProps()}};
        el.addEventListener('pointermove',mv);el.addEventListener('pointerup',up);
      });
      el.addEventListener('keydown',e=>{
        const step=e.shiftKey?1:8;
        if(e.key==='ArrowLeft'){c.x=Math.max(0,c.x-step)}else if(e.key==='ArrowRight'){c.x+=step}else if(e.key==='ArrowUp'){c.y=Math.max(0,c.y-step)}else if(e.key==='ArrowDown'){c.y+=step}
        else if(e.key==='Delete'){d.controls=d.controls.filter(x=>x!==c);it.selCtl='form';it.dirty=true;renderDoc();return}
        else if(e.key==='Enter'||e.key===' '){e.preventDefault();select(c.id);const f=$('.fd-props .pp-tbl input,.fd-props .pp-tbl select');if(f)f.focus();return}
        else return;
        e.preventDefault();el.style.left=c.x+'px';el.style.top=c.y+'px';it.dirty=true;select(c.id);el.focus();
      });
      el.addEventListener('contextmenu',e=>{e.preventDefault();select(c.id);const a=labRef.acc.getBoundingClientRect();
        popMenu((e.clientX||a.left+40)-a.left,(e.clientY||a.top+40)-a.top,[
          ...(c.type==='textbox'||c.type==='combo'?[{label:'Change To: '+(c.type==='textbox'?'Combo Box':'Text Box'),fn:()=>{const nt=c.type==='textbox'?'combo':'textbox';c.type=nt;if(nt==='combo'){c.rowSourceType='Table/Query';c.rowSource='';c.columnCount=1;c.columnWidths='';c.boundColumn=1;c.limitToList=true}it.dirty=true;renderDoc()}}]:[]),
          {label:'Delete',fn:()=>{d.controls=d.controls.filter(x=>x!==c);it.selCtl='form';it.dirty=true;renderDoc()}}],el)});
      surf.append(el);
    });
  };
  surf.addEventListener('pointerdown',e=>{
    if(e.target!==surf)return;
    if(it.tool){const r=surf.getBoundingClientRect();addControl(({'Text Box':'textbox','Label':'label','Combo Box':'combo','Button':'button'})[it.tool],Math.round(e.clientX-r.left),Math.round(e.clientY-r.top));return}
    select('form');
  });
  surf.addEventListener('keydown',e=>{if(e.target===surf&&e.key==='Enter'&&it.tool){e.preventDefault();addControl(({'Text Box':'textbox','Label':'label','Combo Box':'combo','Button':'button'})[it.tool],160,20+d.controls.length*16)}});
  surf.addEventListener('dragover',e=>e.preventDefault());
  surf.addEventListener('drop',e=>{e.preventDefault();const f=e.dataTransfer.getData('text/plain');if(!f)return;const r=surf.getBoundingClientRect();addControl('textbox',Math.max(140,Math.round(e.clientX-r.left)),Math.round(e.clientY-r.top),f)});
  /* field list */
  const fl=h('div',{class:'fd-pane fd-fl'},h('div',{class:'dz-ph'},h('span',{},'Field List'),h('button',{type:'button',class:'a-dlgx','aria-label':'Close Field List',onclick:()=>{it.showFields=false;renderDoc()}},'✕')));
  const rs=rsDescribe(d);
  if(!rs)fl.append(h('p',{class:'a-hint'},'Set the Record Source in the Property Sheet (Data tab), then the fields appear here.'));
  else{
    fl.append(h('p',{class:'a-hint'},'Click a field to add it to the form (in real Access you drag it).'),h('div',{class:'rbox-h',style:'margin:0 .4rem'},d.recordSource.length>28?'Record Source':d.recordSource));
    const fn=rs.kind==='table'?rs.fields.map(f=>f.n):(()=>{const r=runQuery(rs.q);return r.err?[]:r.cols})();
    fn.forEach(f=>{const b=h('button',{type:'button',class:'rf',draggable:'true','aria-label':'Add field '+f+' to the form',onclick:()=>{const y=20+d.controls.filter(c=>c.type!=='label').length*32;addControl('textbox',150,y,f)}},f);b.addEventListener('dragstart',e=>e.dataTransfer.setData('text/plain',f));fl.append(b)});
  }
  /* property sheet */
  const ps=h('div',{class:'fd-pane fd-props'});
  function drawProps(){
    ps.replaceChildren();
    const o=sel()||d;const isForm=o===d;const type=isForm?'form':o.type;
    ps.append(h('div',{class:'dz-ph'},h('span',{},'Property Sheet'),h('button',{type:'button',class:'a-dlgx','aria-label':'Close Property Sheet',onclick:()=>{it.showProps=false;renderDoc()}},'✕')),
      h('p',{class:'ps-sel'},'Selection type: '+({form:'Form',textbox:'Text Box',combo:'Combo Box',label:'Label',button:'Command Button'})[type]),
      pa$sel());
    const tabs=['Format','Data','Event','Other','All'];
    ps.append(h('div',{class:'pp-tabs',role:'tablist'},...tabs.map(t=>h('button',{type:'button',role:'tab','aria-selected':String(it.tab===t),class:'pp-t'+(it.tab===t?' on':''),onclick:()=>{it.tab=t;drawProps()}},t))));
    const rows=FP[type].filter(p=>it.tab==='All'||p[2]===it.tab);
    const tb=h('tbody',{});
    rows.forEach(([k,label,tab,kind,inert,idef])=>{
      let node;
      const val=inert?((o.x&&o.x[label]!==undefined)?o.x[label]:(idef||'')):getP(o,k,isForm);
      const commit=v=>{
        if(inert){o.x=o.x||{};o.x[label]=v;it.dirty=true;inertMsg(label);return}
        if(k==='name'){const nm=String(v).trim();if(!nm||d.controls.some(c=>c!==o&&lc(c.name)===lc(nm))){msgBox('The name “'+v+'” is already used by another control, or is blank. Choose a different name.');drawProps();return}o.name=nm}
        else if(kind==='num'){const n=parseFloat(v);o[k]=isNaN(n)?(k==='columnCount'||k==='boundColumn'?1:0):n}
        else if(kind==='bool')o[k]=v==='Yes';
        else o[k]=v;
        if(k==='recordSource'){delete d.recordSourceQ;if(!rsDescribe(d)&&v.trim()){msgBox('Microsoft Access cannot find the table or query “'+v+'”. Type the name of a table or a saved query, or use the … button to build a query.')}}
        it.dirty=true;drawSurf();
        if(k==='recordSource'||k==='name'||k==='controlSource'||k==='caption')renderDoc();
      };
      if(kind==='text'||kind==='num'||kind==='field'||kind==='source'){
        const ip=h('input',{type:'text','aria-label':label,value:String(val),list:kind==='field'?'fdl-fields':kind==='source'?'fdl-src':false});
        node=ip;ip.addEventListener('change',()=>commit(ip.value));
      }else if(kind==='bool'){node=lblSel(['Yes','No'],val===true?'Yes':'No',commit,label)}
      else if(kind.startsWith('select:')){node=lblSel(kind.slice(7).split('|'),val||(inert?kind.slice(7).split('|')[0]:'Table/Query'),commit,label)}
      else if(kind==='event'){
        const macs=Object.keys(L.macros);
        node=h('span',{class:'m-row',style:'gap:.2rem;flex-wrap:nowrap'},lblSel([['','']].concat([['[Embedded Macro]','[Embedded Macro]']]).concat(macs.map(m=>[m,m])),val,v=>{
          o.events=o.events||{};
          if(v==='')delete o.events[k];else if(v==='[Embedded Macro]')o.events[k]=(o.events[k]&&o.events[k].type==='embedded')?o.events[k]:{type:'embedded',actions:[]};else o.events[k]={type:'macro',name:v};
          it.dirty=true;drawProps()},label),
          h('button',{type:'button',class:'btn quiet sm','aria-label':'Build event for '+label,title:'Build…',onclick:()=>{o.events=o.events||{};if(!(o.events[k]&&o.events[k].type==='embedded'))o.events[k]={type:'embedded',actions:[]};openMacroBuilder(it,o,k,(isForm?'Form':o.name)+': '+label)}},'…'));
      }
      if(kind==='source'){
        const bld=h('button',{type:'button',class:'btn quiet sm','aria-label':'Build a query for '+label,title:'Build…',onclick:()=>buildSource(o,k,isForm)},'…');
        node=h('span',{class:'m-row',style:'gap:.2rem;flex-wrap:nowrap'},node,bld);
      }
      node.addEventListener&&node.addEventListener('focus',()=>{});
      tb.append(h('tr',{class:inert?'inert':''},h('th',{},label),h('td',{},node)));
    });
    ps.append(h('div',{class:'pp-wrap one'},h('table',{class:'pp-tbl'},h('caption',{class:'sr-only'},'Properties'),tb)));
    ps.append(h('datalist',{id:'fdl-fields'},...(()=>{const r2=rsDescribe(d);const f=r2?(r2.kind==='table'?r2.fields.map(x=>x.n):(()=>{const r=runQuery(r2.q);return r.err?[]:r.cols})()):[];return f.map(x=>h('option',{value:x}))})()),
      h('datalist',{id:'fdl-src'},...Object.keys(L.tables).concat(Object.keys(L.queries)).map(x=>h('option',{value:x}))));
  }
  const pa$sel=()=>{
    const opts=[['form','Form']].concat(d.controls.map(c=>[c.id,c.name]));
    return h('label',{class:'ps-f'},h('span',{},'Selected object'),lblSel(opts,it.selCtl,v=>select(v),'Selected object'));
  };
  function buildSource(o,k,isForm){
    const cur=(o[k]||'').trim();
    const q0=cur&&L.queries[cur]?clone(L.queries[cur]):((o.rowSourceQ||o.recordSourceQ)&&/^select/i.test(cur)?clone(o.rowSourceQ||o.recordSourceQ):{src:[],cols:Array.from({length:6},()=>({f:'',sort:'',show:true,crit:['',''],total:'Group By'})),totals:false});
    const qi=openObj('query','','design',q0,true);
    qi.embed={formId:it.id,ctlId:o===d?'form':o.id,prop:k};
    if(!q0.src.length)showTableDlg(qi);
  }
  box.append(wrap);
  wrap.append(surfWrap);
  if(it.showFields)wrap.append(fl);
  if(it.showProps)wrap.append(ps);
  drawSurf();drawProps();
  it.addControlAt=addControl;
}
/* apply an embedded query built from a Property Sheet "…" button */
function applyEmbed(qi){
  const e=qi.embed;const fi=UI.open.find(o=>o.id===e.formId);if(!fi||!fi.d)return false;
  const d=fi.d;const o=e.ctlId==='form'?d:d.controls.find(c=>c.id===e.ctlId);if(!o)return false;
  const r=runQuery(qi.d);
  const sql=r.err?'SELECT …;':r.sql.replace(/\n/g,' ');
  o[e.prop]=sql;if(e.prop==='recordSource')o.recordSourceQ=clone(qi.d);else o.rowSourceQ=clone(qi.d);
  if(e.prop==='rowSource'){o.rowSourceType='Table/Query';const n=r.err?0:r.cols.length;o.columnCount=n||1}
  fi.dirty=true;
  return true;
}

/* ----- Form View ----- */
function frmView(it,box,rec){
  const def=defn(it);if(!def){box.append(h('p',{},'Form not found.'));return}
  if(!it.rt){
    it.rt=makeRT(def,L,{name:it.name||'Form1',msg:(t,ti)=>msgBox(t,'ok',ti||'Microsoft Access'),close:()=>setTimeout(()=>closeItem(UI.open.indexOf(it)),0),openForm:(n,m)=>{const x=openObj('form',n,'view');if(m==='Add'&&x.rt)x.rt.newRecord()},persist:labSave});
    it.rt.open();
  }
  const rt=it.rt;
  if(!rt.source()){box.append(h('div',{class:'note warn',html:'This form has no <b>Record Source</b>. Switch to Design View and set it in the Property Sheet (Data tab).'}))}
  const inputs={};
  const win=h('div',{class:'fv-win'});
  if(def.recordSelectors!==false)win.append(h('div',{class:'fv-rs','aria-hidden':'true'},rt.isNew?'*':(rt.dirty?'✎':'▶')));
  const fv=h('div',{class:'fv'});fv.style.width=def.w+'px';fv.style.minHeight=def.h+'px';
  def.controls.forEach(c=>{
    const el=h('div',{class:'fvc t-'+c.type});el.style.left=c.x+'px';el.style.top=c.y+'px';el.style.width=c.w+'px';el.style.height=c.h+'px';
    if(c.type==='label')el.append(h('span',{},c.caption||''));
    else if(c.type==='button'){
      const b=h('button',{type:'button','data-name':c.name,onclick:()=>{rt.runControlEvent(c,'onClick');renderWork()}},c.caption||'');
      el.append(b);
    }else if(c.type==='textbox'){
      const calc=rt.isCalc(c);
      const inp=h('input',{type:'text','aria-label':c.name,'data-name':c.name,value:rt.display(c),disabled:calc||c.enabled===false,readonly:!!c.locked});
      inp.addEventListener('change',()=>{const r=rt.setControl(c.name,inp.value);if(!r.ok){if(r.msg)msgBox(r.msg);}refresh();});
      inp.addEventListener('keydown',e=>{if(e.key==='Enter'){e.preventDefault();inp.dispatchEvent(new Event('change'));}});
      inputs[c.name]=inp;el.append(inp);
    }else if(c.type==='combo'){
      const inp=h('input',{type:'text','aria-label':c.name,'data-name':c.name,role:'combobox','aria-expanded':'false',value:rt.display(c),disabled:c.enabled===false||!!c.locked||rt.isCalc(c)});
      const btn=h('button',{type:'button',class:'fv-dd','aria-label':'Open list for '+c.name,tabindex:'-1',disabled:inp.disabled},'▾');
      const pop=h('div',{class:'fv-pop',role:'listbox',hidden:true});
      const fill=()=>{
        const L2=rt.comboList(c);const cols=rt.comboDisplayCols(c);
        pop.replaceChildren(...(L2.rows.length?L2.rows.map((r,ri)=>h('div',{class:'fv-opt',role:'option',tabindex:'-1','data-val':String(r[Math.max(1,+c.boundColumn||1)-1])},...cols.map(ci=>h('span',{},fmtv(r[ci]))))):[h('div',{class:'fv-opt m-empty'},'(no items)')]));
        $$('.fv-opt',pop).forEach((o,ri)=>{o.addEventListener('mousedown',e=>{e.preventDefault();pop.hidden=true;const r=L2.rows[ri];if(!r)return;const res=rt.setControl(c.name,String(r[Math.max(1,+c.boundColumn||1)-1])===''?'':cols.map(ci=>fmtv(r[ci])).join(' '));if(!res.ok&&res.msg)msgBox(res.msg);refresh()})});
      };
      const toggle=()=>{if(pop.hidden){fill();pop.hidden=false;inp.setAttribute('aria-expanded','true')}else{pop.hidden=true;inp.setAttribute('aria-expanded','false')}};
      btn.addEventListener('click',toggle);
      inp.addEventListener('keydown',e=>{if(e.key==='ArrowDown'){e.preventDefault();if(pop.hidden)toggle();const f=$('.fv-opt',pop);if(f)f.focus()}else if(e.key==='Enter'){e.preventDefault();pop.hidden=true;inp.dispatchEvent(new Event('change'))}else if(e.key==='Escape')pop.hidden=true});
      pop.addEventListener('keydown',e=>{const items=$$('.fv-opt',pop);const i=items.indexOf(document.activeElement);if(e.key==='ArrowDown'){e.preventDefault();(items[i+1]||items[i]).focus()}else if(e.key==='ArrowUp'){e.preventDefault();(items[i-1]||inp).focus()}else if(e.key==='Enter'){e.preventDefault();document.activeElement.dispatchEvent(new MouseEvent('mousedown',{bubbles:true}))}else if(e.key==='Escape'){pop.hidden=true;inp.focus()}});
      inp.addEventListener('change',()=>{pop.hidden=true;const r=rt.setControl(c.name,inp.value);if(!r.ok&&r.msg)msgBox(r.msg);refresh()});
      inp.addEventListener('blur',()=>setTimeout(()=>{if(!pop.contains(document.activeElement))pop.hidden=true},150));
      inputs[c.name]=inp;el.append(inp,btn,pop);
    }
    fv.append(el);
  });
  win.append(fv);
  box.append(win);
  function refresh(){
    def.controls.forEach(c=>{const x=inputs[c.name];if(x&&document.activeElement!==x)x.value=rt.display(c)});
    const rs=$('.fv-rs',win);if(rs)rs.textContent=rt.isNew?'*':(rt.dirty?'✎':'▶');
    drawRec();
  }
  const go=k=>{const r=rt.goto(k);if(r&&r.ok===false&&r.msg)msgBox(r.msg);renderWork()};
  function drawRec(){
    rec.replaceChildren();
    if(def.navButtons===false){rec.hidden=true;return}
    recNav(rec,{count:rt.count(),pos:rt.isNew?-1:rt.pos,go:k=>go(k),newRec:()=>go('new')});
  }
  it.commit=()=>{const r=rt.save();if(!r.ok){if(r.msg)msgBox(r.msg)}else{renderWork();setStatus('Record saved.')}};
  it.newRec=()=>go('new');
  it.delRec=()=>{if(rt.isNew)return setStatus('Move to a saved record first.');if(!rt.source()||rt.source().kind!=='table')return msgBox('Records can only be deleted from a form based on one table in this practice copy.');confirmBox('You are about to delete 1 record(s).<br><br>If you click Yes, you won\'t be able to undo this Delete operation.<br>Are you sure you want to delete these records?',()=>{const x=removeRecord(L,rt.source().tn,rt.pos);if(x.ok){labSave();rt.goto('first');renderWork();setStatus('Record deleted.')}else msgBox(x.msg)})};
  drawRec();
}
/* ===== Access: table design, validation, datasheet entry and relationships (editable) ===== */
const FTYPES=['Short Text','Long Text','Number','Date/Time','Currency','AutoNumber','Yes/No'];
const newFieldDef=()=>({n:'',t:'Short Text',pk:false,req:false,rule:'',msg:'',size:'',def:'',desc:'',fmt:'',mask:'',idx:'',lookup:null});

/* ----- rules and masks ----- */
function ruleCheck(rule,type,raw,fname){
  rule=String(rule||'').trim();if(!rule)return true;
  try{return evalRule(rule,type,raw)}catch(e){}
  const norm=/^(like|between|in|is|<|>|=|<>)/i.test(rule)?'[$v] '+rule:rule;
  const ast=exCompile(norm);if(!ast)throw 0;
  const typed=exFromStore(type,raw);
  const v=exEval(ast,{ref:p=>{const n=p[p.length-1];return (n==='$v'||lc(n)===lc(fname))?typed:EXERR('#Name?')},column:()=>null,domainRows:()=>null});
  if(isErr(v))throw 0;
  return v===null||v===true||v===-1;
}
function ruleSyntax(f){
  if(!f.rule||!f.rule.trim())return '';
  const sample={'Number':'1','Currency':'1','AutoNumber':'1','Date/Time':'01/01/2000','Short Text':'a','Long Text':'a','Yes/No':true}[f.t];
  try{ruleCheck(f.rule,f.t,sample,f.n)}catch(e){return 'Microsoft Access cannot understand the Validation Rule for “'+f.n+'”. Check the spelling and the brackets. Examples: <code>Between 1 And 3</code>, <code>&gt;=0</code>, <code>Like "0##########"</code>, <code>Is Not Null</code>, <code>In ("Yes","No")</code>.'}
  return '';
}
function maskRe(mask){
  let m=String(mask||'').split(';')[0];if(!m)return null;
  let out='';
  for(let i=0;i<m.length;i++){
    const c=m[i];
    if(c==='\\'){i++;out+=(m[i]||'').replace(/[.+^$(){}|\[\]\\*?]/g,'\\$&');continue}
    if(c==='0')out+='\\d';else if(c==='9'||c==='#')out+='\\d?';else if(c==='L')out+='[A-Za-z]';else if(c==='?')out+='[A-Za-z]?';
    else if(c==='A')out+='[A-Za-z0-9]';else if(c==='a')out+='[A-Za-z0-9]?';else if(c==='&')out+='.';else if(c==='C')out+='.?';
    else if(c==='!'||c==='>'||c==='<')continue;
    else if(c==='"'){const j=m.indexOf('"',i+1);if(j>0){out+=m.slice(i+1,j).replace(/[.+^$(){}|\[\]\\*?]/g,'\\$&');i=j}}
    else out+=c.replace(/[.+^$(){}|\[\]\\*?]/g,'\\$&');
  }
  return new RegExp('^'+out+'$');
}
function lookupList(db,f){
  const lk=f.lookup;if(!lk)return null;
  if(lk.type==='Value List'){const items=String(lk.rowSource||'').split(';').map(s=>s.trim()).filter(Boolean);const n=Math.max(1,+lk.colCount||1);const rows=[];for(let i=0;i<items.length;i+=n)rows.push(items.slice(i,i+n));return{rows,bound:Math.max(1,+lk.boundCol||1)-1,cols:[]}}
  const rs=(lk.rowSource||'').trim();if(!rs)return{rows:[],bound:0,cols:[]};
  const tn=Object.keys(db.tables).find(x=>lc(x)===lc(rs));
  if(tn){const t=db.tables[tn];return{rows:t.rows.map(r=>t.fields.map(g=>r[g.n])),bound:Math.max(1,+lk.boundCol||1)-1,cols:t.fields.map(g=>g.n)}}
  const qn=Object.keys(db.queries||{}).find(x=>lc(x)===lc(rs));
  if(qn){const r=runQuery(db.queries[qn],db);return r.err?{rows:[],bound:0,cols:[]}:{rows:r.rows,bound:Math.max(1,+lk.boundCol||1)-1,cols:r.cols}}
  return{rows:[],bound:0,cols:[]};
}

/* ----- validating one field and committing a record ----- */
function checkFieldFull(db,t,f,raw){
  if(f.t==='AutoNumber')return{ok:true,v:raw};
  if(f.t==='Yes/No')return{ok:true,v:!!raw};
  raw=String(raw==null?'':raw).trim();
  const label=t.name+'.'+f.n;
  if(raw===''){
    if(f.req)return{msg:'You must enter a value in the “'+label+'” field.'};
    if(f.pk&&t.fields.filter(x=>x.pk).length>=1)return{msg:'Index or primary key cannot contain a Null value.'};
    if(f.rule&&/is\s+not\s+null/i.test(f.rule)){let ok=true;try{ok=ruleCheck(f.rule,f.t,'',f.n)}catch(e){}if(!ok)return{msg:(f.msg||'').trim()||('One or more values are prohibited by the validation rule “'+f.rule+'” set for “'+label+'”. Enter a value that the expression for this field can accept.'),rule:true,custom:!!(f.msg||'').trim()}}
    return{ok:true,v:''};
  }
  const c=coerceField(f,raw);if(!c.ok)return{msg:c.msg};
  if(f.mask){const re=maskRe(f.mask);if(re&&!re.test(raw))return{msg:'The value you entered does not match the Input Mask of “'+label+'”. Check the format ('+f.mask+').'}}
  if(f.lookup&&f.lookup.limit!==false&&f.lookup.rowSource){const L2=lookupList(db,f);if(L2&&!L2.rows.some(r=>String(r[L2.bound])===String(raw)))return{msg:'The text you entered isn\'t an item in the list.<br><br>Select an item from the list, or enter text that matches one of the listed items.'}}
  if(f.rule&&f.rule.trim()){
    let ok=true;try{ok=ruleCheck(f.rule,f.t,raw,f.n)}catch(e){ok=true}
    if(!ok)return{msg:(f.msg||'').trim()||('One or more values are prohibited by the validation rule “'+f.rule+'” set for “'+label+'”. Enter a value that the expression for this field can accept.'),rule:true,custom:!!(f.msg||'').trim()};
  }
  return{ok:true,v:c.v};
}
function commitRecord(db,tn,vals,idx){
  const t=db.tables[tn];const rec={};
  for(const f of t.fields){
    if(f.t==='AutoNumber'){rec[f.n]=idx!=null?t.rows[idx][f.n]:(t.rows.reduce((m,r)=>Math.max(m,+r[f.n]||0),0)+1);continue}
    const c=checkFieldFull(db,t,f,vals[f.n]);
    if(!c.ok)return{msg:c.msg,field:f.n,rule:c.rule,custom:c.custom};
    rec[f.n]=c.v;
  }
  const trule=((t.props&&t.props['Validation Rule'])||'').trim();
  if(trule){
    const cx={ref:p=>{const n=p[p.length-1];const f=t.fields.find(x=>lc(x.n)===lc(n));return f?exFromStore(f.t,rec[f.n]):EXERR('#Name?')},column:()=>null,domainRows:nm=>domainRows(db,nm)};
    const v=exRun(trule,cx);
    if(v===false||(v&&isErr(v))){const tx=((t.props['Validation Text'])||'').trim();return{msg:tx||('One or more values are prohibited by the validation rule “'+trule+'” set for ‘'+tn+'’. Enter a value that the expression can accept.'),rule:true,custom:!!tx}}
  }
  const pks=t.fields.filter(f=>f.pk);
  if(pks.length&&t.rows.some((r,i)=>i!==idx&&pks.every(f=>String(r[f.n])===String(rec[f.n]))))return{msg:'The changes you requested to the table were not successful because they would create duplicate values in the index, primary key, or relationship. Change the data in the field or fields that contain duplicate data, remove the index, or redefine the index to permit duplicate entries and try again.'};
  for(const f of t.fields.filter(x=>x.idx==='Yes (No Duplicates)'&&!x.pk)){
    if(rec[f.n]!==''&&t.rows.some((r,i)=>i!==idx&&String(r[f.n])===String(rec[f.n])))return{msg:'The changes you requested to the table were not successful because they would create duplicate values in the index, primary key, or relationship.'};
  }
  for(const r of db.rels.filter(r=>r.manyT===tn&&r.ri)){
    const v=rec[r.manyF];
    if(v!==''&&v!=null&&!db.tables[r.oneT].rows.some(o=>String(o[r.oneF])===String(v)))return{msg:'You cannot add or change a record because a related record is required in table “'+r.oneT+'”.'};
  }
  if(idx!=null){
    for(const r of db.rels.filter(r=>r.oneT===tn&&r.ri)){
      const oldv=t.rows[idx][r.oneF],newv=rec[r.oneF];
      if(String(oldv)===String(newv))continue;
      const kids=db.tables[r.manyT].rows.filter(m=>String(m[r.manyF])===String(oldv));
      if(!kids.length)continue;
      if(!r.cu)return{msg:'You cannot add or change a record because a related record is required in table ‘'+r.manyT+'’ (the record has related records).'};
      kids.forEach(m=>m[r.manyF]=newv);
    }
  }
  if(idx!=null)t.rows[idx]=Object.assign(t.rows[idx],rec);else t.rows.push(rec);
  return{ok:true,rec};
}
function defValField(f){const dv=(f.def||'').trim();if(!dv)return f.t==='Yes/No'?false:'';if(/^date\(\)$/i.test(dv))return dtStr(todayN());return dv.replace(/^"(.*)"$/,'$1')}

/* ----- datasheet (entry with validation, paste) ----- */
function tblData(it,box,rec){
  const t=L.tables[it.name];if(!t){box.append(h('p',{},'This table no longer exists.'));return}
  const cols=t.fields.map(f=>f.n);
  const rows=t.rows.map(r=>cols.map(c=>r[c]));
  const ord=sortRows(it,cols,rows);
  const inputs={},trs={};
  const ed=it.edit>=0?it.edit:null;
  const mkInput=(f,val,stored)=>{
    if(f.t==='AutoNumber')return h('span',{class:'an'},stored?String(val):'(New)');
    let c;
    if(f.t==='Yes/No'){c=h('input',{type:'checkbox','aria-label':f.n});c.checked=!!val}
    else if(f.lookup&&f.lookup.type!==undefined&&f.lookup.rowSource&&f.lookup.display!=='Text Box'){
      const L2=lookupList(L,f);const widths=String(f.lookup.widths||'').split(';').map(s=>parseFloat(s));
      const shown=[];const n=L2.rows[0]?L2.rows[0].length:1;for(let i=0;i<n;i++)if(widths[i]!==0)shown.push(i);
      c=h('select',{'aria-label':f.n},h('option',{value:''},''),...L2.rows.map(r=>h('option',{value:String(r[L2.bound])},(shown.length?shown:[0]).map(i=>fmtv(r[i])).join(' | '))));
      c.value=val===''||val==null?'':String(val);
    }
    else c=h('input',{type:'text','aria-label':f.n+(f.pk?' (primary key)':''),value:fmtv(val),placeholder:stored?'':(f.t==='Date/Time'?'dd/mm/yyyy':'')});
    inputs[f.n]=c;
    c.addEventListener('keydown',e=>{if(e.key==='Enter'){e.preventDefault();commit()}else if(e.key==='Escape'&&ed!=null){it.edit=-1;renderWork()}});
    return c;
  };
  const head=h('tr',{},h('th',{class:'rsel'},''),...t.fields.map(f=>h('th',{'data-col':f.n,class:it.cc===f.n?'colsel':''},h('button',{type:'button',class:'thb','aria-label':'Select column '+f.n,onclick:()=>setCc(f.n)},f.n+(f.pk?' 🔑':'')+(it.sort&&it.sort.f===f.n?(it.sort.d==='desc'?' ▼':' ▲'):'')))));
  const body=ord.map(i=>{
    const r=t.rows[i];const isEd=ed===i;
    const tr=h('tr',{class:(it.sel===i?'cur':'')+(isEd?' editing':'')},
      h('td',{class:'rsel'},h('button',{type:'button',class:'rs','aria-label':'Select record '+(ord.indexOf(i)+1),onclick:()=>selectRow(i)},isEd?'✎':(it.sel===i?'▶':''))),
      ...t.fields.map(f=>{
        const td=h('td',{tabindex:isEd?false:'0','data-c':f.n},isEd?mkInput(f,r[f.n],true):fmtv(r[f.n]));
        if(!isEd){const edit=()=>{it.edit=i;renderWork();const x=$('tr.editing input,tr.editing select',labRef.obj);if(x)x.focus()};td.addEventListener('click',()=>{selectRow(i);setCc(f.n)});td.addEventListener('dblclick',edit);td.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key==='F2'){e.preventDefault();edit()}})}
        return td}));
    trs[i]=tr;return tr;
  });
  const newTr=h('tr',{class:'newrow'},h('td',{class:'rsel'},'*'),...t.fields.map(f=>h('td',{},ed!=null?'':mkInput(f,defValField(f),false))));
  box.append(h('div',{class:'a-sheet'},h('table',{class:'ds',role:'grid'},h('caption',{class:'sr-only'},'Datasheet of '+t.name),h('thead',{},head),h('tbody',{},...body,newTr))));
  function setCc(n){it.cc=n;$$('th',head).forEach(x=>x.classList.toggle('colsel',x.getAttribute('data-col')===n))}
  function selectRow(i){it.sel=i;Object.values(trs).forEach(x=>{x.classList.remove('cur');const b=$('.rs',x);if(b)b.textContent=x.classList.contains('editing')?'✎':''});const x=trs[i];if(x){x.classList.add('cur');$('.rs',x).textContent='▶';x.scrollIntoView({block:'nearest'})}drawRec()}
  function drawRec(){rec.replaceChildren();const pos=it.sel>=0?ord.indexOf(it.sel):-1;recNav(rec,{count:t.rows.length,pos,go,newRec:it.newRec})}
  const go=k=>{const pos=Math.max(0,Math.min(t.rows.length-1,k));selectRow(ord[pos])};
  function commit(){
    const idx=ed;
    const hasData=t.fields.some(f=>{const c=inputs[f.n];if(!c)return false;if(f.t==='Yes/No')return c.checked;return c.value!==''&&c.value!==String(defValField(f))});
    if(idx==null&&!hasData)return setStatus('Type something in the new record row (marked *) first.');
    const vals={};t.fields.forEach(f=>{const c=inputs[f.n];if(c)vals[f.n]=f.t==='Yes/No'?c.checked:c.value});
    const r=commitRecord(L,t.name,vals,idx);
    if(r.ok){const wasNew=idx==null;it.edit=-1;if(wasNew)it.sel=t.rows.length-1;labSave();renderWork();setStatus(wasNew?'Record saved.':'Record updated.')}else msgBox(r.msg);
  }
  it.commit=commit;
  it.newRec=()=>{const f=$('tr.newrow input,tr.newrow select',labRef.obj);if(f){f.scrollIntoView({block:'nearest'});f.focus()}};
  it.sortBy=d=>{if(!d)it.sort=null;else it.sort={f:it.cc||cols[0],d};renderWork();setStatus(d?'Sorted by '+(it.cc||cols[0])+(d==='asc'?' ascending.':' descending.'):'Sort removed.')};
  it.delRec=()=>{
    if(it.sel<0||it.sel>=t.rows.length)return setStatus('Click the grey record selector box at the left of a row first.');
    confirmBox('You are about to delete 1 record(s).<br><br>If you click Yes, you won\'t be able to undo this Delete operation.<br>Are you sure you want to delete these records?',()=>{const x=removeRecord(L,t.name,it.sel);if(x.ok){it.sel=-1;labSave();renderWork();setStatus('Record deleted.')}else msgBox(x.msg)});
  };
  it.paste=()=>{
    const ta=h('textarea',{class:'inp',id:'pasteta','aria-label':'Paste rows here',style:'width:100%;min-height:9rem;font-family:ui-monospace,monospace'});
    dlg({title:'Paste Records',wide:true,body:h('div',{class:'stack'},h('p',{},'Paste rows of data copied from the brief or a spreadsheet. Put one record on each line. Separate the values with a tab or a comma. AutoNumber fields are skipped. Values go into the columns in order: ',h('b',{},cols.join(', ')),'.'),ta),
      buttons:[{label:'Paste',primary:true,fn:()=>{
        const lines=ta.value.split(/\r?\n/).map(s=>s.trim()).filter(Boolean);let n=0;
        for(const line of lines){
          const parts=(line.includes('\t')?line.split('\t'):line.split(',')).map(s=>s.trim());
          const vals={};let k=0;t.fields.forEach(f=>{if(f.t==='AutoNumber')return;const v=parts[k++];vals[f.n]=f.t==='Yes/No'?/^(yes|true|-1|1)$/i.test(v||''):(v===undefined?'':v)});
          const r=commitRecord(L,t.name,vals,null);
          if(!r.ok){labSave();renderWork();msgBox('Record '+(n+1)+' was not pasted.<br>'+r.msg+'<br><br>'+n+' record(s) were pasted before this one.');return}
          n++;
        }
        labSave();renderWork();setStatus(n+' record(s) pasted.');
      }},{label:'Cancel'}],focus:ta});
  };
  drawRec();
}

/* ----- table design ----- */
function prepDesign(it){
  if(it.kind==='table'){if(!it.d){it.d=clone(L.tables[it.name]);it.d.fields.forEach(f=>{f.orig=true;if(f.lookup===undefined)f.lookup=null})}it.selRow=0;return}
  if(!it.d)it.d=clone(LISTS(it.kind)[it.name]);
}
const PROP_HELP={
 'Field Size':'For a Short Text field this is the <b>maximum number of characters</b> (up to 255). A small size is a <b>length check</b>: the field will not accept longer text.',
 'Format':'How the data is displayed. It does not check the data.',
 'Input Mask':'A pattern for typing data. <code>0</code> = a digit that must be typed, <code>9</code> = an optional digit, <code>L</code> = a letter that must be typed. For example <code>00000000000</code> needs 11 digits. This is a <b>format check</b>.',
 'Default Value':'A value filled in for you in each new record.',
 'Validation Rule':'An expression the data must pass, for example <code>Between 1 And 3</code>, <code>&gt;=1 And &lt;=3</code> or <code>Like "01#########"</code>. Access refuses data that fails it.',
 'Validation Text':'The message shown when the Validation Rule is broken. Say how to fix the problem.',
 'Required':'<b>Yes</b> means the field cannot be left empty. This is a <b>presence check</b>.',
 'Indexed':'Speeds up searching. A primary key is always indexed with no duplicates.',
 'Display Control':'Choose Combo Box to make a drop-down list from another table. This is a <b>table lookup</b>.',
 'Row Source Type':'Where the list comes from: a Table/Query or a Value List.',
 'Row Source':'The table or query that supplies the list, for example the table of positions. For a Value List type items separated by semicolons.',
 'Bound Column':'Which column of the list is stored in this field (1 is the first column).',
 'Column Count':'How many columns the list has.',
 'Column Widths':'Widths of the list columns. Use <code>0;3</code> to hide the first column (the ID).',
 'Limit To List':'<b>Yes</b> means only items in the list are accepted. This makes the field a <b>value lookup</b> or table lookup check.'
};
function tblDesign(it,box){
  const d=it.d;if(!d){prepDesign(it)}const lock=!!L.lock;
  const D=it.d;
  const rowsExist=!!(L.tables[it.name]&&L.tables[it.name].rows.length);
  if(it.selRow>=D.fields.length)it.selRow=Math.max(0,D.fields.length-1);
  const grid=h('table',{class:'dg'});const bot=h('div',{class:'dsn-bot'});
  grid.append(h('caption',{class:'sr-only'},'Table design: one row for each field'),h('thead',{},h('tr',{},h('th',{class:'rsel'},''),h('th',{},'Field Name'),h('th',{},'Data Type'),h('th',{},'Description (Optional)'))));
  const tb=h('tbody',{});grid.append(tb);
  D.fields.forEach((f,i)=>{
    const ni=h('input',{type:'text','aria-label':'Field name '+(i+1),value:f.n,disabled:lock});
    const ts=h('select',{'aria-label':'Data type for '+(f.n||'field '+(i+1)),disabled:lock},...FTYPES.map(x=>h('option',{value:x},x)));ts.value=f.t;
    const ds=h('input',{type:'text','aria-label':'Description for '+(f.n||'field '+(i+1)),value:f.desc||'',disabled:lock});
    ni.addEventListener('input',()=>{f.n=ni.value.trim();ts.setAttribute('aria-label','Data type for '+(f.n||'field '+(i+1)))});
    ts.addEventListener('change',()=>{
      const old=f.t;const apply=()=>{f.t=ts.value;if(f.t!=='Short Text')f.size='';drawProps()};
      if(rowsExist&&f.orig&&old!==ts.value)confirmBox('Some data may be lost when you change the data type of “'+f.n+'”.<br><br>Do you want to continue?',apply,()=>{ts.value=old});else apply();
    });
    ds.addEventListener('input',()=>f.desc=ds.value);
    tb.append(h('tr',{'data-i':String(i),class:i===it.selRow?'cur':''},h('td',{class:'rsel'},h('button',{type:'button',class:'rs','aria-label':'Select field '+(f.n||(i+1))+(f.pk?', primary key':''),onclick:()=>{it.selRow=i;renderDoc()}},f.pk?'🔑':(i===it.selRow?'▶':''))),h('td',{},ni),h('td',{},ts),h('td',{},ds)));
  });
  if(!lock){
    const nb=h('input',{type:'text','aria-label':'New field name (type here to add a field)',placeholder:''});
    nb.addEventListener('change',()=>{const n=nb.value.trim();if(!n)return;D.fields.push(Object.assign(newFieldDef(),{n}));it.selRow=D.fields.length-1;it.dirty=true;renderDoc();const s=$$('select[aria-label^="Data type"]',labRef.obj);const last=s[s.length-1];if(last)last.focus()});
    tb.append(h('tr',{class:'blank'},h('td',{class:'rsel'},''),h('td',{},nb),h('td',{}),h('td',{})));
  }
  grid.addEventListener('focusin',e=>{const tr=e.target.closest('tr[data-i]');if(!tr)return;const i=+tr.getAttribute('data-i');if(i!==it.selRow){it.selRow=i;$$('tr.cur',grid).forEach(x=>x.classList.remove('cur'));tr.classList.add('cur');drawProps();renderRib()}});
  grid.addEventListener('input',()=>{it.dirty=true});grid.addEventListener('change',()=>{it.dirty=true});
  box.append(h('div',{class:'dsn-top'},grid),bot);
  const mkTab=(name)=>h('button',{type:'button',role:'tab','aria-selected':String(it.ptab===name),class:'pp-t'+(it.ptab===name?' on':''),onclick:()=>{it.ptab=name;drawProps()}},name);
  function drawProps(){fieldPropsPane(it,D,bot,lock,drawProps)}
  drawProps();
}
function tableSyntaxProblem(D){
  if(!D.fields.length)return 'Add at least one field first.';
  const trl=((D.props&&D.props['Validation Rule'])||'').trim();if(trl&&!exValid(trl))return 'Microsoft Access cannot understand the table Validation Rule. Check the field names are in [square brackets] and the brackets match.';
  const names=D.fields.map(f=>f.n);
  if(names.some(n=>!n))return 'Every field needs a name.';
  if(new Set(names.map(n=>n.toLowerCase())).size!==names.length)return 'Two fields have the same name. Field names must be different.';
  for(const f of D.fields){const e=ruleSyntax(f);if(e)return e;if(f.mask&&!maskRe(f.mask))return 'The Input Mask for “'+f.n+'” is not valid.';if(f.size&&(!/^\d+$/.test(f.size)||+f.size<1||+f.size>255))return 'The Field Size for “'+f.n+'” must be a whole number from 1 to 255.'}
  return '';
}
/* saving a table design (called from saveObject) */
function commitTable(it,name,done){
  const D=it.d;D.name=name;
  const bad=tableSyntaxProblem(D);if(bad)return msgBox(bad);
  const go=()=>{
    const old=L.tables[it.isNew?'':it.name];
    const fields=D.fields.map(f=>({n:f.n,t:f.t,pk:!!f.pk,req:!!f.req,rule:f.rule||'',msg:f.msg||'',size:f.size||'',def:f.def||'',desc:f.desc||'',fmt:f.fmt||'',mask:f.mask||'',idx:f.idx||'',lookup:f.lookup?clone(f.lookup):null}));
    const rows=old?old.rows.map(r=>{const o={};fields.forEach(f=>{const src=old.fields.find(x=>x.n===f.n);let v=src?r[f.n]:(f.t==='Yes/No'?false:'');if(src&&src.t!==f.t){const c=coerceField(f,v);v=c.ok?c.v:''}o[f.n]=v});return o}):[];
    if(old&&!it.isNew&&old.name!==name)delete L.tables[old.name];
    L.tables[name]={name,fields,rows,props:clone(D.props||{})};
    if(it.name&&it.name!==name&&!it.isNew){L.rels.forEach(r=>{if(r.oneT===it.name)r.oneT=name;if(r.manyT===it.name)r.manyT=name})}
    it.d=clone(L.tables[name]);it.d.fields.forEach(f=>f.orig=true);
    labSave();done();
  };
  if(!D.fields.some(f=>f.pk)){
    confirmBox('There is no primary key defined.<br><br>Although a primary key isn\'t required, it is highly recommended. A table must have a primary key for you to define a relationship between this table and other tables in the database.<br><br>Do you want to create a primary key now?',
      ()=>{let n='ID',k=1;while(D.fields.some(f=>f.n===n))n='ID'+(++k);D.fields.unshift(Object.assign(newFieldDef(),{n,t:'AutoNumber',pk:true}));go()},go);
  }else go();
}

/* ----- relationships (editable) ----- */
function relDialog(it,st,idx){
  const o=L.tables[st.oneT],m=L.tables[st.manyT];
  const ri=h('input',{type:'checkbox',id:'riChk'});ri.checked=st.ri;
  const body=h('div',{class:'stack'},
    h('table',{class:'t',style:'min-width:0'},h('thead',{},h('tr',{},h('th',{},'Table/Query:'),h('th',{},'Related Table/Query:'))),h('tbody',{},h('tr',{},h('td',{},st.oneT),h('td',{},st.manyT)),h('tr',{},h('td',{},st.oneF),h('td',{},st.manyF)))),
    h('label',{class:'opt',for:'riChk'},ri,h('span',{},'Enforce Referential Integrity')),
    h('p',{},h('b',{},'Relationship Type: '),'One-To-Many'));
  const apply=()=>{
    st.ri=ri.checked;
    const of=o.fields.find(f=>f.n===st.oneF),mf=m.fields.find(f=>f.n===st.manyF);
    const same=of.t===mf.t||(of.t==='AutoNumber'&&mf.t==='Number')||(of.t==='Number'&&mf.t==='AutoNumber');
    if(!same)return msgBox('The fields on both sides of a relationship must have the same data type (an AutoNumber links to a Number). You are linking '+of.t+' to '+mf.t+'.');
    if(idx<0&&L.rels.some(r=>r.oneT===st.oneT&&r.oneF===st.oneF&&r.manyT===st.manyT&&r.manyF===st.manyF))return msgBox('That relationship already exists.');
    if(st.ri){const orphan=m.rows.find(r=>r[st.manyF]!==''&&r[st.manyF]!=null&&!o.rows.some(x=>String(x[st.oneF])===String(r[st.manyF])));
      if(orphan)return msgBox('Referential integrity cannot be enforced because existing data in “'+st.manyT+'” has no matching record in “'+st.oneT+'”.')}
    if(idx<0)L.rels.push({oneT:st.oneT,oneF:st.oneF,manyT:st.manyT,manyF:st.manyF,ri:st.ri});else L.rels[idx]=Object.assign({},st);
    labSave();renderWork();setStatus('Relationship '+(idx<0?'created':'updated')+'. The line shows 1 at the ONE side and ∞ at the MANY side.');
  };
  dlg({title:'Edit Relationships',body,buttons:[{label:idx<0?'Create':'OK',primary:true,fn:apply}].concat(idx>=0?[{label:'Delete',fn:()=>{L.rels.splice(idx,1);labSave();it.relLine=null;renderWork();setStatus('Relationship deleted.')}}]:[]).concat([{label:'Cancel'}])});
}
function relView(it,box){
  const names=Object.keys(L.tables);const lock=!!L.lock;
  const wrap=h('div',{class:'relc'});
  const svg=document.createElementNS('http://www.w3.org/2000/svg','svg');svg.setAttribute('class','rel-svg');svg.setAttribute('aria-hidden','true');
  const sel=it.relSel;
  if(!names.length)wrap.append(h('p',{class:'m-empty'},'There are no tables yet. Create tables first.'));
  names.forEach(n=>{
    const t=L.tables[n];
    wrap.append(h('div',{class:'rbox',role:'group','aria-label':'Table '+n},h('div',{class:'rbox-h'},n),h('div',{class:'rbox-b'},...t.fields.map(f=>h('button',{type:'button',class:'rf'+(sel&&sel.t===n&&sel.f===f.n?' on':'')+(lock?' plain':''),'data-bt':n,'data-bf':f.n,'aria-label':'Field '+f.n+' in '+n+(f.pk?', primary key':'')+(sel&&sel.t===n&&sel.f===f.n?', selected':''),onclick:()=>{
      if(lock)return;
      if(sel&&sel.t===n&&sel.f===f.n){it.relSel=null;renderWork();return}
      if(!sel||sel.t===n){it.relSel={t:n,f:f.n};renderWork();setStatus('Selected '+n+'.'+f.n+'. Now click the matching field in another table. (In real Access you drag from one field to the other.)');return}
      const a=L.tables[sel.t],af=a.fields.find(x=>x.n===sel.f),bf=t.fields.find(x=>x.n===f.n);
      const aPk=af.pk&&a.fields.filter(x=>x.pk).length===1,bPk=bf.pk&&t.fields.filter(x=>x.pk).length===1;
      if(!aPk&&!bPk){it.relSel=null;renderWork();return msgBox('No unique index found for the referenced field of the primary table. The ONE side must be a field that is the primary key of its table.')}
      const st=bPk&&!aPk?{oneT:n,oneF:f.n,manyT:sel.t,manyF:sel.f,ri:false}:{oneT:sel.t,oneF:sel.f,manyT:n,manyF:f.n,ri:false};
      it.relSel=null;renderWork();relDialog(it,st,-1);
    }},(f.pk?'🔑 ':'')+f.n)))));
  });
  wrap.append(svg);
  box.append(h('p',{class:'note',html:lock?'<b>Relationships.</b> The tables are already linked. Each line shows <b>1</b> at the ONE side and <b>∞</b> at the MANY side.':'<b>How to link tables:</b> click the primary key field in one table, then click the matching field in the other table. (In real Access you drag.) Click a line to select it.'}),wrap);
  const list=h('ul',{class:'checks'});
  if(!L.rels.length)list.append(h('li',{},'No relationships yet.'));
  L.rels.forEach((r,i)=>list.append(h('li',{},h('button',{type:'button',class:'btn quiet sm',onclick:()=>{it.relLine=i;renderWork();setStatus('Selected relationship '+(i+1)+'.')}},(it.relLine===i?'✓ ':'')+r.oneT+'.'+r.oneF+'  1 ──── ∞  '+r.manyT+'.'+r.manyF+(r.ri?'  (integrity on)':'')))));
  box.append(h('div',{},list));
  const links=L.rels.map((r,i)=>Object.assign({sel:it.relLine===i},r));
  const redraw=()=>{drawLinks(wrap,svg,links);
    if(!lock)links.forEach((l,i)=>{const lines=$$('.lnk',svg)});};
  labRef.redraw=redraw;requestAnimationFrame(()=>{redraw();if(!lock){
    const lines=$$('polyline.lnk',svg);
    lines.forEach((pl,i)=>{const hit=pl.cloneNode();hit.setAttribute('class','lnk-hit');hit.addEventListener('click',()=>{it.relLine=i;renderWork();setStatus('Selected relationship '+(i+1)+'. Press the Edit Relationships button, or press Delete.')});hit.addEventListener('contextmenu',e=>{e.preventDefault();const a=labRef.acc.getBoundingClientRect();it.relLine=i;popMenu(e.clientX-a.left,e.clientY-a.top,[{label:'Edit Relationship...',fn:()=>relDialog(it,Object.assign({},L.rels[i]),i)},{label:'Delete',fn:()=>delRel(it,i)}])});svg.append(hit)});
    $$('polyline.lnk',svg).forEach((pl,i)=>{if(it.relLine===i)pl.setAttribute('class','lnk sel')});
  }});
  it.editRel=()=>{if(it.relLine==null||!L.rels[it.relLine])return setStatus('Click a relationship line first.');relDialog(it,Object.assign({},L.rels[it.relLine]),it.relLine)};
  it.delRel=()=>delRel(it,it.relLine);
  box.addEventListener('keydown',e=>{if(e.key==='Delete'&&it.relLine!=null&&!lock){e.preventDefault();delRel(it,it.relLine)}});
}
function delRel(it,i){
  if(i==null||!L.rels[i])return setStatus('Click a relationship line first.');
  confirmBox('Are you sure you want to permanently delete the selected relationship from your database?',()=>{L.rels.splice(i,1);it.relLine=null;labSave();renderWork();setStatus('Relationship deleted.')});
}

/* ----- ribbon pieces for table design, relationships and reports ----- */
function extraCtx(it){
  if(it.kind==='table'&&it.view==='design'&&!L.lock)return['Design','Table Tools'];
  if(it.kind==='rel'&&!L.lock)return['Design','Relationship Tools'];
  if(it.kind==='report'&&it.view==='design')return['Design','Report Design Tools'];
  return null;
}
function tdSelField(it){const f=it.d&&it.d.fields[it.selRow];if(!f)setStatus('Click the grey box to the left of a field first.');return f}
function extraGroups(tab,it,view){
  if(tab==='External Data')return featOn('report')?[{n:'Export',c:[cmd('PDF or XPS','report',()=>exportReportPdf(),'Save the open report as a PDF file. Open the report first.')]}]:null;
  if(tab!=='Design'||!it)return null;
  if(it.kind==='report'&&it.view==='design')return rptGroups(it,view);
  if(it.kind==='table'&&it.view==='design'&&!L.lock)return[
    {n:'Views',c:[view()]},
    {n:'Tools',c:[cmd('Primary Key','key',()=>{const f=tdSelField(it);if(!f)return;const on=!f.pk;it.d.fields.forEach(x=>x.pk=false);f.pk=on;if(on){f.req=false}it.dirty=true;renderDoc();setStatus(on?'“'+f.n+'” is now the primary key.':'Primary key removed.')},'Make the selected field the primary key. A primary key is unique for every record.',!!(it.d.fields[it.selRow]&&it.d.fields[it.selRow].pk)),
      [cmd('Insert Rows','insrow',()=>{it.d.fields.splice(Math.max(0,it.selRow),0,newFieldDef());it.dirty=true;renderDoc();setStatus('A blank row was added above the selected field. Type the field name.')},'Add a blank row above the selected field.'),
       cmd('Delete Rows','delrow',()=>{const f=tdSelField(it);if(!f)return;const go=()=>{it.d.fields.splice(it.selRow,1);it.dirty=true;renderDoc()};if(f.orig)confirmBox('Deleting this field will also delete all the data in it. Do you want to continue?',go);else go()},'Delete the selected field.')]]},
    {n:'Show/Hide',c:[cmd('Property Sheet','props',()=>tableProps(it),'Show the table properties (Description, Validation Rule, and more).'),cmd('Indexes','sql',()=>indexesDlg(it),'See the indexes of this table. A primary key is always indexed.')]}];
  if(it.kind==='rel'&&!L.lock)return[
    {n:'Tools',c:[cmd('Edit Relationships','rel',()=>it.editRel&&it.editRel(),'Change the selected relationship, for example to turn on Enforce Referential Integrity. Click the relationship line first.'),cmd('Delete Relationship','delrow',()=>it.delRel&&it.delRel(),'Delete the selected relationship.')]},
    {n:'Relationships',c:[cmd('Show Table','table',()=>it.showTbl&&it.showTbl(),'Add a table to the Relationships window.'),cmd('Hide Table','table',()=>it.hideTbl&&it.hideTbl(),'Hide the selected table (click its title bar first). Hiding a table does not delete it.')]}];
  return null;
}

/* ----- the full Access ribbon: buttons not needed for the exam tell the user so ----- */
const RIB_FULL={
 'Home':[['Views',['View']],['Clipboard',['Paste','Cut','Copy','Format Painter']],['Sort & Filter',['Filter','Ascending','Descending','Remove Sort','Selection','Advanced','Toggle Filter']],['Records',['New','Save','Delete','Totals','Spelling','More']],['Find',['Find','Replace','Go To','Select']],['Window',['Size to Fit Form','Switch Windows']],['Text Formatting',['Font','Bold','Italic','Underline','Font Colour','Align Left','Centre','Align Right','Background Colour','Gridlines','Alternate Row Colour']]],
 'Create':[['Templates',['Application Parts']],['Tables',['Table','Table Design','SharePoint Lists']],['Queries',['Query Wizard','Query Design']],['Forms',['Form','Form Design','Blank Form','Form Wizard','Navigation','More Forms']],['Reports',['Report','Report Design','Blank Report','Report Wizard','Labels']],['Macros & Code',['Macro','Module','Class Module','Visual Basic']]],
 'External Data':[['Import & Link',['Saved Imports','Linked Table Manager','Excel','Access','ODBC Database','Text File','XML File','More']],['Export',['Saved Exports','Excel','Text File','XML File','PDF or XPS','Email','Access','Word Merge','More']],['Collect Data',['Create E-mail','Manage Replies']]],
 'Database Tools':[['Tools',['Compact and Repair','Visual Basic','Run Macro','Create Shortcut Menu from Macro']],['Relationships',['Relationships','Object Dependencies']],['Analyze',['Database Documenter','Analyze Performance','Analyze Table']],['Move Data',['Access Database','SQL Server']],['Add-ins',['Add-ins']]],
 'Query Design':[['Results',['View','Run']],['Query Type',['Select','Make Table','Append','Update','Crosstab','Delete']],['Query Setup',['Show Table','Insert Rows','Delete Rows','Builder','Insert Columns','Delete Columns','Return']],['Show/Hide',['Totals','Parameters','Property Sheet','Table Names']]],
 'form:design':[['Views',['View']],['Themes',['Themes','Colours','Fonts']],['Controls',['Select','Text Box','Label','Button','Combo Box','List Box','Check Box','Image','Subform']],['Header / Footer',['Logo','Title','Date and Time']],['Tools',['Add Existing Fields','Property Sheet','Tab Order','Tab Control']]],
 'report:design':[['Views',['View']],['Grouping & Totals',['Group & Sort','Totals','Hide Details']],['Controls',['Select','Text Box','Label','Button','Combo Box','List Box','Check Box','Image','Subreport']],['Header / Footer',['Logo','Title','Page Numbers','Date and Time']],['Tools',['Add Existing Fields','Property Sheet','Tab Order']]],
 'table:design':[['Views',['View']],['Tools',['Primary Key','Test Validation Rules','Insert Rows','Delete Rows','Modify Lookups']],['Show/Hide',['Property Sheet','Indexes']]],
 'rel:design':[['Tools',['Edit Relationships','Clear Layout','Relationship Report']],['Relationships',['Show Table','Hide Table','Direct Relationships','All Relationships']],['Close',['Close']]],
 'macro:design':[['Tools',['Run','Single Step','Convert Macros to Visual Basic']],['Collapse/Expand',['Expand Actions','Collapse Actions']],['Show/Hide',['Show All Actions']]]
};
const RIB_ICON={Cut:'gen',Copy:'gen','Format Painter':'gen',Paste:'paste',Filter:'funnel','Toggle Filter':'funnel',Selection:'funnel',Advanced:'funnel',Find:'sql',Replace:'sql','Go To':'select',Table:'table','Table Design':'tabledesign','Query Wizard':'query','Query Design':'query',Form:'form','Form Design':'tabledesign','Blank Form':'form','Form Wizard':'form',Report:'report','Report Design':'report','Blank Report':'report','Report Wizard':'report',Macro:'macro',Excel:'table',Access:'table','Text File':'table','XML File':'table','PDF or XPS':'report',Email:'gen',Relationships:'rel','Edit Relationships':'rel','Show Table':'table',Run:'run',Totals:'sigma','Property Sheet':'props','Add Existing Fields':'fields','Primary Key':'key','Insert Rows':'insrow','Delete Rows':'delrow',Select:'select','Text Box':'textbox',Label:'label',Button:'button','Combo Box':'combo',New:'plus',Delete:'delrow',Save:'save',View:'table'};
function ribKey(tab,it){
  if(tab==='Design'&&it)return it.kind+':design';
  return tab;
}
function notRequired(label){
  msgBox('<b>“'+label+'”</b> is not required for this task.<br><br>In the real exam you only need the tools the activities ask for. Try the buttons in the other groups, or read the task on the right.','ok');
}
function withDecoys(tab,real,it){
  const cat=RIB_FULL[ribKey(tab,it)];if(!cat)return real;
  const have=new Set();
  real.forEach(g=>g.c.forEach(c=>(Array.isArray(c)?c:[c]).forEach(x=>have.add(lc(x.label)))));
  const mk=l=>({label:l,icon:RIB_ICON[l]||'gen',decoy:true,fn:()=>notRequired(l),tip:'Not needed for this task.'});
  const out=real.map(g=>({n:g.n,c:g.c.slice()}));
  cat.forEach(([name,labels])=>{
    const rest=labels.filter(l=>!have.has(lc(l))).map(mk);rest.forEach(x=>have.add(lc(x.label)));
    if(!rest.length)return;
    let g=out.find(x=>x.n===name);if(!g){g={n:name,c:[]};out.push(g)}
    if(!g.c.length&&rest.length<=2){rest.forEach(x=>g.c.push(x));return}
    for(let i=0;i<rest.length;i+=3)g.c.push(rest.slice(i,i+3));
  });
  const ord=n=>{const k=cat.findIndex(x=>x[0]===n);return k<0?99:k};
  return out.map((g,i)=>[g,i]).sort((x,y)=>ord(x[0].n)-ord(y[0].n)||x[1]-y[1]).map(x=>x[0]);
}
/* ===== Access: reports (design + report view) ===== */
const BANDS=[['reportHeader','Report Header'],['pageHeader','Page Header'],['groupHeader','Group Header'],['detail','Detail'],['groupFooter','Group Footer'],['pageFooter','Page Footer'],['reportFooter','Report Footer']];
const RPT_LINES_PER_PAGE=34;
const newReportDef=src=>({recordSource:src||'',groupField:'',groupInterval:'Each Value',sortField:'',sortDir:'asc',nextN:0,bands:{reportHeader:[],pageHeader:[],groupHeader:[],detail:[],groupFooter:[],pageFooter:[],reportFooter:[]}});
function autoTyp(s){
  if(s==null||s==='')return null;
  if(typeof s!=='string')return s;
  if(/^\d{2}\/\d{2}\/\d{4}$/.test(s)){const n=pDate(s);if(n!==null)return mkDt(n)}
  if(/^-?(0|[1-9]\d*)(\.\d+)?$/.test(s))return +s;
  return s;
}
function rptSource(def,db){
  db=db||L;const n=def.recordSource;
  if(db.tables[n]){const t=db.tables[n];return{cols:t.fields.map(f=>f.n),recs:t.rows.map(r=>{const o={};t.fields.forEach(f=>o[f.n]=exFromStore(f.t,r[f.n]));return o})}}
  if(db.queries&&db.queries[n]){const r=runQuery(db.queries[n],db);if(r.err)return{err:r.err};return{cols:r.cols,recs:r.rows.map(row=>{const o={};r.cols.forEach((c,i)=>o[c]=autoTyp(row[i]));return o})}}
  return{err:'The report has no Record Source. Choose a table or query in the Group, Sort and Total pane.'};
}
const rowRefOf=(row,p)=>{const n=p[p.length-1];const k=Object.keys(row).find(x=>lc(x)===lc(n));return k===undefined?EXERR('#Name?'):row[k]};
function rptCtx(rows,db,agg){
  const first=rows[0]||{};
  return{ref:p=>rowRefOf(first,p),column:()=>null,domainRows:name=>domainRows(db||L,name),rowRef:(r,p)=>rowRefOf(r,p),aggRows:agg?rows:null};
}
function rptCell(c,rows,db,agg){
  if(c.type==='label')return{type:'label',text:c.text||'',name:c.name};
  const src=(c.src||'').trim();
  if(!src)return{type:'text',text:'',src};
  if(src[0]==='='){const v=exRun(src,rptCtx(rows,db,agg));return{type:'text',text:isErr(v)?v.$err:exShow(v),src,name:c.name}}
  const v=rowRefOf(rows[0]||{},[src]);
  return{type:'text',text:isErr(v)?'#Name?':exShow(v),src,name:c.name};
}
function groupKeyOf(def,rec){
  const gf=(def.groupField||'').trim();if(!gf)return'';
  let v;
  if(gf[0]==='='){v=exRun(gf,rptCtx([rec],L,false))}else v=rowRefOf(rec,[gf]);
  if(isErr(v))return'#Name?';
  if(isDt(v)){
    if(def.groupInterval==='Month')return{k:Math.floor(v.$d/100),label:exFormatDate(v.$d,'mmmm yyyy')};
    if(def.groupInterval==='Year')return{k:Math.floor(v.$d/10000),label:String(Math.floor(v.$d/10000))};
    return{k:v.$d,label:exShow(v)};
  }
  return{k:exNum(v)!=null&&typeof v==='number'?v:exShow(v),label:exShow(v)};
}
/* builds a flat list of printable lines; used by Report View and by marking */
function rptModel(def,db){
  db=db||L;
  const src=rptSource(def,db);if(src.err)return{err:src.err,lines:[],pages:0,groups:[]};
  let recs=src.recs.slice();
  const gf=(def.groupField||'').trim();
  const sf=(def.sortField||'').trim();
  const dirm=def.sortDir==='desc'?-1:1;
  const keys=recs.map(r=>gf?groupKeyOf(def,r):null);
  const idx=recs.map((r,i)=>i);
  const sv=r=>sf?(sf[0]==='='?exRun(sf,rptCtx([r],db,false)):rowRefOf(r,[sf])):null;
  idx.sort((a,b)=>{
    if(gf){const ka=keys[a].k,kb=keys[b].k;if(ka!==kb)return ka<kb?-1:1}
    if(sf){const c=exCmp(sv(recs[a]),sv(recs[b]));if(c)return c*dirm}
    return a-b;
  });
  const lines=[];const B=def.bands;
  const add=(band,cells)=>lines.push({band,cells});
  const cellsFor=(arr,rows,agg)=>arr.map(c=>rptCell(c,rows,db,agg));
  if(B.reportHeader.length)add('reportHeader',cellsFor(B.reportHeader,recs,true));
  if(B.pageHeader.length)add('pageHeader',cellsFor(B.pageHeader,recs,false));
  const groups=[];
  if(gf){
    let cur=null;
    idx.forEach(i=>{const k=keys[i];if(!cur||cur.k!==k.k){cur={k:k.k,label:k.label,rows:[]};groups.push(cur)}cur.rows.push(recs[i])});
  }else groups.push({k:'',label:'',rows:idx.map(i=>recs[i])});
  groups.forEach(g=>{
    if(gf&&B.groupHeader.length)add('groupHeader',cellsFor(B.groupHeader,g.rows,true));
    g.rows.forEach(r=>{if(B.detail.length)add('detail',cellsFor(B.detail,[r],false))});
    if(gf&&B.groupFooter.length)add('groupFooter',cellsFor(B.groupFooter,g.rows,true));
  });
  if(B.reportFooter.length)add('reportFooter',cellsFor(B.reportFooter,recs,true));
  if(B.pageFooter.length)add('pageFooter',cellsFor(B.pageFooter,recs,false));
  const weight=l=>l.band==='detail'?1:1.6;
  const total=lines.reduce((a,l)=>a+weight(l),0);
  const pages=lines.length?Math.max(1,Math.ceil(total/RPT_LINES_PER_PAGE)):0;
  return{lines,pages,groups:groups.map(g=>({label:g.label,count:g.rows.length})),rows:recs.length,text:lines.map(l=>l.cells.map(c=>c.text).join(' | ')).join('\n')};
}
function rptView(it,box,rec){
  const def=defn(it);if(!def){box.append(h('p',{},'This report no longer exists.'));return}
  const m=rptModel(def,L);
  if(m.err){box.append(h('div',{class:'a-msg'},h('span',{class:'a-msgi'},'⚠'),h('div',{},m.err)));return}
  const page=h('div',{class:'rptpage',role:'document','aria-label':'Report preview'});
  let prev=null;
  m.lines.forEach(l=>{
    page.append(h('div',{class:'rl '+l.band},...l.cells.map(c=>h('span',{class:'rc '+c.type},c.text))));
  });
  if(!m.lines.length)page.append(h('p',{class:'m-empty'},'The report has no controls yet. Switch to Design View and add some.'));
  box.append(h('p',{class:'note'},'Report View.'+(m.pages?'  The report is '+m.pages+' page'+(m.pages>1?'s':'')+' long'+(m.pages===1?' (it fits on one page).':'. Try to make it fit on one page.'):'')),page);
  it.model=m;
  rec.hidden=false;rec.replaceChildren(h('span',{},'Page '+(m.pages?1:0)+' of '+m.pages));
}
function rptDesign(it,box){
  const D=it.d;if(!D)prepDesign(it);const d=it.d;
  const src=rptSource(d,L);
  const fields=src.err?[]:src.cols;
  const side=h('div',{class:'rpt-side'});
  const tbls=Object.keys(L.tables).concat(Object.keys(L.queries||{}));
  const rs=h('select',{'aria-label':'Record Source',onchange:e=>{d.recordSource=e.target.value;it.dirty=true;renderDoc()}},h('option',{value:''},'(none)'),...tbls.map(n=>h('option',{value:n},n)));rs.value=d.recordSource||'';
  const gsel=h('select',{'aria-label':'Group on field'},h('option',{value:''},'(no grouping)'),...fields.map(n=>h('option',{value:n},n)));
  gsel.value=(d.groupField||'').trim()&&!d.groupField.startsWith('=')?d.groupField:'';
  gsel.addEventListener('change',()=>{d.groupField=gsel.value;it.dirty=true;renderDoc()});
  const gex=h('input',{type:'text','aria-label':'Group on expression (optional)',value:d.groupField&&d.groupField.startsWith('=')?d.groupField:'',placeholder:'or type =Month([Field])'});
  gex.addEventListener('change',()=>{if(gex.value.trim()){d.groupField=gex.value.trim();it.dirty=true;renderDoc()}});
  const gint=h('select',{'aria-label':'Group interval'},...['Each Value','Month','Year'].map(x=>h('option',{value:x},x)));gint.value=d.groupInterval||'Each Value';gint.addEventListener('change',()=>{d.groupInterval=gint.value;it.dirty=true;renderDoc()});
  const ssel=h('select',{'aria-label':'Sort within groups by field'},h('option',{value:''},'(none)'),...fields.map(n=>h('option',{value:n},n)));ssel.value=d.sortField||'';ssel.addEventListener('change',()=>{d.sortField=ssel.value;it.dirty=true});
  const sdir=h('select',{'aria-label':'Sort order'},h('option',{value:'asc'},'with A on top (ascending)'),h('option',{value:'desc'},'with Z on top (descending)'));sdir.value=d.sortDir||'asc';sdir.addEventListener('change',()=>{d.sortDir=sdir.value;it.dirty=true});
  side.append(h('h4',{},'Group, Sort, and Total'),
    h('label',{},'Record Source',rs),
    h('label',{},'Group on',gsel),gex,
    h('label',{},'Group interval',gint),
    h('label',{},'Sort by',ssel),h('label',{},'Sort order',sdir),
    it.showFields===false?null:h('div',{class:'rpt-fl'},h('b',{},'Field List'),h('p',{class:'note'},'Click a field to add it as a Text Box in the selected band.'),...fields.map(f=>h('button',{type:'button',class:'btn quiet sm',onclick:()=>addCtl('text',f)},f))));
  const main=h('div',{class:'rpt-main'});
  const sb=it.selBand||'detail';
  const hasGroup=!!(d.groupField||'').trim();
  BANDS.forEach(([k,label])=>{
    if((k==='groupHeader'||k==='groupFooter')&&!hasGroup)return;
    const band=h('div',{class:'rband'+(sb===k?' on':''),'data-band':k,role:'group','aria-label':label+' band'},
      h('button',{type:'button',class:'rband-h','aria-pressed':String(sb===k),onclick:()=>{it.selBand=k;if(it.tool){addCtl(it.tool==='Label'?'label':'text','')}else renderDoc()}},label+(sb===k?'  (selected)':'')));
    const list=h('div',{class:'rband-b'});
    d.bands[k].forEach((c,i)=>{
      const inp=h('input',{type:'text','aria-label':(c.type==='label'?'Label caption':'Control Source')+' in '+label+' '+(i+1),value:c.type==='label'?(c.text||''):(c.src||''),placeholder:c.type==='label'?'Caption':'Field or =expression'});
      inp.addEventListener('input',()=>{if(c.type==='label')c.text=inp.value;else c.src=inp.value;it.dirty=true});
      const mv=(dx)=>h('button',{type:'button',class:'btn quiet sm','aria-label':(dx<0?'Move left ':'Move right ')+(i+1)+' in '+label,onclick:()=>{const a=d.bands[k];const j=i+dx;if(j<0||j>=a.length)return;[a[i],a[j]]=[a[j],a[i]];it.dirty=true;renderDoc()}},dx<0?'◀':'▶');
      list.append(h('span',{class:'rctl '+c.type},h('small',{},c.type==='label'?'Label':'Text Box'),inp,mv(-1),mv(1),h('button',{type:'button',class:'btn quiet sm','aria-label':'Delete control '+(i+1)+' in '+label,onclick:()=>{d.bands[k].splice(i,1);it.dirty=true;renderDoc()}},'✕')));
    });
    if(!d.bands[k].length)list.append(h('span',{class:'m-empty'},'(empty)'));
    band.append(list);main.append(band);
  });
  function addCtl(type,val){
    const k=it.selBand||'detail';d.nextN++;
    d.bands[k].push(type==='label'?{type:'label',name:'Label'+d.nextN,text:val}:{type:'text',name:'Text'+d.nextN,src:val});
    it.dirty=true;renderDoc();setStatus((type==='label'?'Label':'Text Box')+' added to the '+k.replace(/([A-Z])/g,' $1').toLowerCase()+'. Type its '+(type==='label'?'caption':'Control Source')+' in the box.');
  }
  if(it.showProps===undefined)it.showProps=true;
  const ps=h('div',{class:'fd-props rpt-ps',role:'region','aria-label':'Property Sheet'});
  if(it.showProps)reportPropSheet(it,d,ps);
  box.append(h('div',{class:'rpt-wrap'+(it.showProps?' withps':'')},side,main,it.showProps?ps:null));
}
function rptGroups(it,view){
  const tool=(name,icon,tip)=>cmd(name,icon,()=>{it.tool=it.tool===name?null:name;renderRib();setStatus(it.tool?name+' tool selected. Click a band name (for example Detail) to add it there.':'Select tool.')},tip,it.tool===name);
  return[{n:'Views',c:[view()]},
    {n:'Controls',c:[cmd('Select','select',()=>{it.tool=null;renderRib()},'Stop adding controls.',!it.tool),tool('Text Box','textbox','Then click a band to add a text box. Type a field name, or an expression such as =Count([RunID]).'),tool('Label','label','Then click a band to add a label.')]},
    {n:'Tools',c:[cmd('Add Existing Fields','fields',()=>{it.showFields=it.showFields===false;renderDoc()},'Show the list of fields from the Record Source.',it.showFields!==false),cmd('Property Sheet','props',()=>{it.showProps=!it.showProps;renderDoc()},'Show or hide the Property Sheet.',!!it.showProps)]}];
}
function exportReportPdf(){
  const it=UI.open[UI.act];
  if(!it||it.kind!=='report'||!it.name||it.isNew)return msgBox('Open a saved report first, then choose PDF or XPS.');
  if(it.view!=='view')setView(it,'view');
  if(accHooks.pdf)accHooks.pdf({kind:'report',name:it.name,model:rptModel(defn(it),L),def:clone(defn(it))});
  else msgBox('Exporting is not available here.');
}
/* ===== Access: faithful property sheets, relationships dialog, views (Access 2016 behaviour) ===== */
const notReq=(what)=>{setStatus('“'+what+'” is not needed for this task.');notRequired(what)};
const inertMsg=(label)=>setStatus('“'+label+'” is not needed for this task. You can look at it, but you do not have to change it in the exam.');

/* ----- table design: Field Properties (General / Lookup) ----- */
const FS_NUM=['Byte','Integer','Long Integer','Single','Double','Replication ID','Decimal'];
const FMT_NUM=['','General Number','Currency','Euro','Fixed','Standard','Percent','Scientific'];
const FMT_DATE=['','General Date','Long Date','Medium Date','Short Date','Long Time','Medium Time','Short Time'];
function fieldPropsPane(it,D,bot,lock,drawProps){
  const f=D.fields[it.selRow];bot.replaceChildren();
  if(!it.ptab)it.ptab='General';
  if(!f){bot.append(h('p',{class:'m-empty',style:'padding:.6rem'},lock?'':'Type a field name above to see its Field Properties.'));return}
  f.x=f.x||{};
  const help=h('div',{class:'pp-help'},h('b',{},'Field properties help'),h('p',{},'Click a property to see what it does.'));
  const trs=[];
  const row=(label,node,real)=>{node.addEventListener('focus',()=>help.replaceChildren(h('b',{},label),h('p',{html:real?(PROP_HELP[label]||''):'Not needed for this task. '+(PROP_HELP[label]||'You are not asked to change this in the exam.')})));trs.push(h('tr',{class:real?'':'inert'},h('th',{},label),h('td',{},node)))};
  const rt=(label,key,ph,dis)=>{const x=h('input',{type:'text','aria-label':label,value:f[key]||'',placeholder:ph||'',disabled:lock||dis});x.addEventListener('input',()=>{f[key]=x.value;it.dirty=true});row(label,x,true)};
  const rb=(label,key)=>{const s=h('select',{'aria-label':label,disabled:lock},h('option',{value:'No'},'No'),h('option',{value:'Yes'},'Yes'));s.value=f[key]?'Yes':'No';s.addEventListener('change',()=>{f[key]=s.value==='Yes';it.dirty=true});row(label,s,true)};
  const xs=(label,def,opts)=>{
    const cur=f.x[label]!==undefined?f.x[label]:def;let n;
    if(opts){n=h('select',{'aria-label':label,disabled:lock},...opts.map(o=>h('option',{value:o},o)));n.value=cur}
    else n=h('input',{type:'text','aria-label':label,value:cur,disabled:lock});
    n.addEventListener('change',()=>{f.x[label]=n.value;it.dirty=true;inertMsg(label)});row(label,n,false)};
  const idx=()=>{const ix=h('select',{'aria-label':'Indexed',disabled:lock||f.pk},...['No','Yes (Duplicates OK)','Yes (No Duplicates)'].map(x=>h('option',{value:x},x)));ix.value=f.pk?'Yes (No Duplicates)':(f.idx||'No');ix.addEventListener('change',()=>{f.idx=ix.value;it.dirty=true});row('Indexed',ix,true)};
  const t=f.t;
  if(it.ptab==='General'){
    if(t==='Short Text'){rt('Field Size','size','255');xs('Format','');rt('Input Mask','mask');xs('Caption','');rt('Default Value','def');rt('Validation Rule','rule','e.g. Between 1 And 3');rt('Validation Text','msg');rb('Required');xs('Allow Zero Length','Yes',['Yes','No']);idx();xs('Unicode Compression','Yes',['Yes','No']);xs('IME Mode','No Control',['No Control','On','Off']);xs('IME Sentence Mode','None',['None','Plural','Speaking','Plural and Speaking']);xs('Text Align','General',['General','Left','Center','Right','Distribute'])}
    else if(t==='Long Text'){xs('Format','');xs('Caption','');rt('Default Value','def');rt('Validation Rule','rule');rt('Validation Text','msg');rb('Required');xs('Allow Zero Length','Yes',['Yes','No']);idx();xs('Unicode Compression','Yes',['Yes','No']);xs('IME Mode','No Control',['No Control','On','Off']);xs('Text Format','Plain Text',['Plain Text','Rich Text']);xs('Text Align','General',['General','Left','Center','Right','Distribute']);xs('Append Only','No',['Yes','No'])}
    else if(t==='Number'){xs('Field Size','Long Integer',FS_NUM);xs('Format','',FMT_NUM);xs('Decimal Places','Auto',['Auto','0','1','2','3','4','5','6','7','8','9','10','11','12','13','14','15']);rt('Input Mask','mask');xs('Caption','');rt('Default Value','def');rt('Validation Rule','rule','e.g. Between 1 And 3');rt('Validation Text','msg');rb('Required');idx();xs('Text Align','General',['General','Left','Center','Right','Distribute'])}
    else if(t==='Currency'){xs('Format','Currency',FMT_NUM);xs('Decimal Places','Auto',['Auto','0','1','2','3','4']);rt('Input Mask','mask');xs('Caption','');rt('Default Value','def');rt('Validation Rule','rule');rt('Validation Text','msg');rb('Required');idx();xs('Text Align','General',['General','Left','Center','Right','Distribute'])}
    else if(t==='Date/Time'){xs('Format','',FMT_DATE);rt('Input Mask','mask');xs('Caption','');rt('Default Value','def','e.g. Date()');rt('Validation Rule','rule','e.g. >=#01/01/2000#');rt('Validation Text','msg');rb('Required');idx();xs('IME Mode','No Control',['No Control','On','Off']);xs('IME Sentence Mode','None',['None','Plural','Speaking','Plural and Speaking']);xs('Text Align','General',['General','Left','Center','Right','Distribute']);xs('Show Date Picker','For dates',['For dates','Never'])}
    else if(t==='Yes/No'){xs('Format','Yes/No',['Yes/No','True/False','On/Off']);xs('Caption','');rt('Default Value','def');idx();xs('Text Align','General',['General','Left','Center','Right','Distribute'])}
    else{xs('Field Size','Long Integer',['Long Integer','Replication ID']);xs('New Values','Increment',['Increment','Random']);xs('Format','');xs('Caption','');idx();xs('Text Align','General',['General','Left','Center','Right','Distribute'])}
  }else{
    const lk=f.lookup||{display:'Text Box',type:'Table/Query',rowSource:'',boundCol:1,colCount:1,widths:'',limit:true};
    const dopts=t==='Yes/No'?['Check Box','Text Box','Combo Box']:['Text Box','List Box','Combo Box'];
    const cur=f.lookup&&['Combo Box','List Box'].includes(f.lookup.display)?f.lookup.display:(t==='Yes/No'?'Check Box':'Text Box');
    const dc=h('select',{'aria-label':'Display Control',disabled:lock},...dopts.map(o=>h('option',{value:o},o)));dc.value=cur;
    dc.addEventListener('change',()=>{if(['Combo Box','List Box'].includes(dc.value)){f.lookup=Object.assign({},lk,{display:dc.value})}else f.lookup=null;it.dirty=true;drawProps()});
    row('Display Control',dc,true);
    if(f.lookup&&['Combo Box','List Box'].includes(f.lookup.display)){
      const setLk=(k,v)=>{f.lookup[k]=v;it.dirty=true};
      const rts=h('select',{'aria-label':'Row Source Type',disabled:lock},...['Table/Query','Value List','Field List'].map(o=>h('option',{value:o},o)));rts.value=f.lookup.type||'Table/Query';rts.addEventListener('change',()=>setLk('type',rts.value));row('Row Source Type',rts,true);
      const rs=h('input',{type:'text','aria-label':'Row Source',value:f.lookup.rowSource||'',list:'dl-rs',disabled:lock});rs.addEventListener('input',()=>setLk('rowSource',rs.value));row('Row Source',rs,true);
      const bc=h('input',{type:'text','aria-label':'Bound Column',value:String(f.lookup.boundCol||1),disabled:lock});bc.addEventListener('input',()=>setLk('boundCol',parseInt(bc.value)||1));row('Bound Column',bc,true);
      const cc=h('input',{type:'text','aria-label':'Column Count',value:String(f.lookup.colCount||1),disabled:lock});cc.addEventListener('input',()=>setLk('colCount',parseInt(cc.value)||1));row('Column Count',cc,true);
      xs('Column Heads','No',['Yes','No']);
      const cw=h('input',{type:'text','aria-label':'Column Widths',value:f.lookup.widths||'',disabled:lock});cw.addEventListener('input',()=>setLk('widths',cw.value));row('Column Widths',cw,true);
      xs('List Rows','16');xs('List Width','Auto');
      const ll=h('select',{'aria-label':'Limit To List',disabled:lock},h('option',{value:'Yes'},'Yes'),h('option',{value:'No'},'No'));ll.value=f.lookup.limit===false?'No':'Yes';ll.addEventListener('change',()=>setLk('limit',ll.value==='Yes'));row('Limit To List',ll,true);
      xs('Allow Multiple Values','No',['Yes','No']);xs('Allow Value List Edits','Yes',['Yes','No']);xs('List Items Edit Form','');xs('Show Only Row Source Values','No',['Yes','No']);
    }
  }
  const tab=name=>h('button',{type:'button',role:'tab','aria-selected':String(it.ptab===name),class:'pp-t'+(it.ptab===name?' on':''),onclick:()=>{it.ptab=name;drawProps()}},name);
  bot.append(h('div',{class:'pp'},h('div',{class:'pp-tabs',role:'tablist'},tab('General'),tab('Lookup')),h('div',{class:'pp-wrap'},h('table',{class:'pp-tbl'},h('caption',{class:'sr-only'},'Field properties for '+(f.n||'the selected field')),h('tbody',{},...trs)),lock?h('div',{class:'pp-help'},h('b',{},'Do not change the tables'),h('p',{},'The exam says the structure of the tables must not be changed. Look at the field names and data types here, then build your forms and queries.')):help),h('datalist',{id:'dl-rs'},...Object.keys(L.tables).concat(Object.keys(L.queries||{})).map(x=>h('option',{value:x})))));
}
/* table properties and indexes (Table Design ribbon) */
function tableProps(it){
  const D=it.d;D.props=D.props||{};
  const specs=[['Read Only When Disconnected','No',['Yes','No']],['Subdatasheet Expanded','No',['Yes','No']],['Subdatasheet Height','0"'],['Orientation','Left-to-Right',['Left-to-Right','Right-to-Left']],['Description',''],['Default View','Datasheet',['Datasheet','PivotTable','PivotChart']],['Validation Rule',''],['Validation Text',''],['Filter',''],['Order By',''],['Subdatasheet Name','[Auto]'],['Link Child Fields',''],['Link Master Fields',''],['Filter On Load','No',['Yes','No']],['Order By On Load','Yes',['Yes','No']]];
  const trs=specs.map(([l,def,opts])=>{const real=l==='Validation Rule'||l==='Validation Text';const cur=D.props[l]!==undefined?D.props[l]:def;let n;if(opts){n=h('select',{'aria-label':l,disabled:!!L.lock},...opts.map(o=>h('option',{value:o},o)));n.value=cur}else n=h('input',{type:'text','aria-label':l,value:cur,disabled:!!L.lock});n.addEventListener('change',()=>{D.props[l]=n.value;it.dirty=true;if(!real)inertMsg(l)});return h('tr',{class:real?'':'inert'},h('th',{},l),h('td',{},n))});
  dlg({title:'Property Sheet',wide:true,body:h('div',{},h('p',{class:'ps-sel'},'Selection type: Table Properties'),h('p',{class:'a-hint'},'These are the table properties, as in Access. The Validation Rule and Validation Text are used: a rule here can check several fields at once, for example [StartDate]<=[EndDate]. The other properties are not needed for this task.'),h('div',{class:'pp-wrap one'},h('table',{class:'pp-tbl'},h('caption',{class:'sr-only'},'Table properties'),h('tbody',{},...trs)))),buttons:[{label:'Close',primary:true}]});
}
function indexesDlg(it){
  const D=it.d;
  const pk=D.fields.filter(f=>f.pk);
  const rows=[];
  if(pk.length)rows.push(['PrimaryKey',pk.map(f=>f.n).join(', '),'Ascending',true,true,false]);
  D.fields.filter(f=>!f.pk&&f.idx&&f.idx!=='No').forEach(f=>rows.push([f.n,f.n,'Ascending',false,f.idx==='Yes (No Duplicates)',false]));
  dlg({title:'Indexes: '+(it.name||'Table1'),wide:true,body:h('div',{class:'stack'},
    h('div',{class:'tblwrap'},h('table',{class:'t',style:'min-width:0'},h('thead',{},h('tr',{},...['Index Name','Field Name','Sort Order'].map(x=>h('th',{},x)))),h('tbody',{},...rows.map(r=>h('tr',{},h('td',{},r[0]),h('td',{},r[1]),h('td',{},r[2]))),rows.length?null:h('tr',{},h('td',{colspan:'3',class:'m-empty'},'No indexes yet.'))))),
    h('p',{class:'a-hint'},'Index properties: Primary '+(pk.length?'Yes':'No')+', Unique '+(pk.length?'Yes':'No')+', Ignore Nulls No. A primary key is always indexed with no duplicates.')),buttons:[{label:'Close',primary:true}]});
}

/* ----- Relationships ----- */
function relField(t,fname){const tb=L.tables[t];return tb&&tb.fields.find(f=>f.n===fname)}
function joinText(st){
  return[['1','1: Only include rows where the joined fields from both tables are equal.'],['2','2: Include ALL records from ‘'+st.oneT+'’ and only those records from ‘'+st.manyT+'’ where the joined fields are equal.'],['3','3: Include ALL records from ‘'+st.manyT+'’ and only those records from ‘'+st.oneT+'’ where the joined fields are equal.']];
}
function relDialog(it,st,idx){
  st=Object.assign({cu:false,cd:false,join:1},st);
  const o=L.tables[st.oneT],m=L.tables[st.manyT];
  const lock=!!L.lock;
  const sel=(tn,key)=>{const s=h('select',{'aria-label':(key==='oneF'?'Field in '+st.oneT:'Field in '+st.manyT),disabled:lock},...L.tables[tn].fields.map(f=>h('option',{value:f.n},f.n)));s.value=st[key];s.addEventListener('change',()=>{st[key]=s.value});return s};
  const ri=h('input',{type:'checkbox',id:'riChk',disabled:lock});ri.checked=st.ri;
  const cu=h('input',{type:'checkbox',id:'cuChk'});cu.checked=st.cu;
  const cd=h('input',{type:'checkbox',id:'cdChk'});cd.checked=st.cd;
  const sync=()=>{cu.disabled=cd.disabled=lock||!ri.checked;if(!ri.checked){cu.checked=false;cd.checked=false}};
  ri.addEventListener('change',sync);sync();
  const body=h('div',{class:'stack relDlg'},
    h('table',{class:'t',style:'min-width:0'},h('thead',{},h('tr',{},h('th',{},'Table/Query:'),h('th',{},'Related Table/Query:'))),h('tbody',{},h('tr',{},h('td',{},st.oneT),h('td',{},st.manyT)),h('tr',{},h('td',{},sel(st.oneT,'oneF')),h('td',{},sel(st.manyT,'manyF'))))),
    h('label',{class:'opt',for:'riChk'},ri,h('span',{},'Enforce Referential Integrity')),
    h('label',{class:'opt',for:'cuChk',style:'margin-left:1.4rem'},cu,h('span',{},'Cascade Update Related Fields')),
    h('label',{class:'opt',for:'cdChk',style:'margin-left:1.4rem'},cd,h('span',{},'Cascade Delete Related Records')),
    h('p',{},h('b',{},'Relationship Type: '),'One-To-Many'),
    h('div',{class:'m-row'},h('button',{type:'button',class:'btn quiet sm',onclick:()=>{st.ri=ri.checked;st.cu=cu.checked;st.cd=cd.checked;joinDlg(it,st,idx)}},'Join Type…'),h('button',{type:'button',class:'btn quiet sm',onclick:()=>notReq('Create New…')},'Create New…')));
  const apply=()=>{
    st.ri=ri.checked;st.cu=cu.checked;st.cd=cd.checked;
    const of=relField(st.oneT,st.oneF),mf=relField(st.manyT,st.manyF);
    const same=of.t===mf.t||(of.t==='AutoNumber'&&mf.t==='Number')||(of.t==='Number'&&mf.t==='AutoNumber');
    if(!same)return msgBox('The fields on both sides of a relationship must have the same data type (an AutoNumber links to a Number). You are linking '+of.t+' to '+mf.t+'.');
    if(idx<0&&L.rels.some(r=>r.oneT===st.oneT&&r.oneF===st.oneF&&r.manyT===st.manyT&&r.manyF===st.manyF))return msgBox('That relationship already exists.');
    if(st.ri){
      const pks=o.fields.filter(f=>f.pk);
      const uniq=of.pk&&pks.length===1||of.idx==='Yes (No Duplicates)';
      if(!uniq)return msgBox('No unique index found for the referenced field of the primary table.');
      const orphan=m.rows.find(r=>r[st.manyF]!==''&&r[st.manyF]!=null&&!o.rows.some(x=>String(x[st.oneF])===String(r[st.manyF])));
      if(orphan)return msgBox('Microsoft Access can’t create this relationship and enforce referential integrity.<br><br>Data in the table ‘'+st.manyT+'’ violates referential integrity rules, which means there is no matching record in ‘'+st.oneT+'’. Edit the data so that there are no orphans.');
    }
    const rec={oneT:st.oneT,oneF:st.oneF,manyT:st.manyT,manyF:st.manyF,ri:st.ri,cu:st.cu,cd:st.cd,join:st.join};
    if(idx<0)L.rels.push(rec);else L.rels[idx]=rec;
    labSave();renderWork();setStatus('Relationship '+(idx<0?'created':'updated')+(st.ri?'. The line shows 1 at the ONE side and ∞ at the MANY side.':'. Without Enforce Referential Integrity the line has no 1 or ∞.'));
  };
  dlg({title:'Edit Relationships',body,wide:true,buttons:[{label:idx<0?'Create':'OK',primary:true,fn:apply},{label:'Cancel'}]});
}
function joinDlg(it,st,idx){
  const name='joinType';let val=String(st.join||1);
  const rows=joinText(st).map(([v,t])=>{const r=h('input',{type:'radio',name,id:'jt'+v,value:v});r.checked=val===v;r.addEventListener('change',()=>val=v);return h('label',{class:'opt',for:'jt'+v},r,h('span',{},t))});
  dlg({title:'Join Properties',body:h('div',{class:'stack'},h('p',{},'Left Table Name: '+st.oneT+'  /  Right Table Name: '+st.manyT),...rows),buttons:[{label:'OK',primary:true,fn:()=>{st.join=+val;relDialog(it,st,idx)}},{label:'Cancel',fn:()=>relDialog(it,st,idx)}]});
}
function showRelTable(it){
  const hidden=L.relHidden||(L.relHidden=[]);
  const names=Object.keys(L.tables);
  const pick=h('select',{class:'sel',size:'6','aria-label':'Tables',style:'width:100%'},...names.map(n=>h('option',{value:n},n+(hidden.includes(n)?'':'  (already shown)'))));
  const tabs=h('div',{class:'pp-tabs'},...['Tables','Queries','Both'].map((t,i)=>h('button',{type:'button',class:'pp-t'+(i===0?' on':''),onclick:()=>{if(t==='Queries')notReq('Queries tab')}},t)));
  dlg({title:'Show Table',body:h('div',{class:'stack'},tabs,pick),buttons:[{label:'Add',keep:true,fn:()=>{const n=pick.value;if(!n)return;L.relHidden=hidden.filter(x=>x!==n);labSave();renderWork();setStatus(n+' added to the Relationships window.')}},{label:'Close',primary:true}]});
}
function relView(it,box){
  const hidden=L.relHidden||(L.relHidden=[]);
  const names=Object.keys(L.tables).filter(n=>!hidden.includes(n));const lock=!!L.lock;
  const wrap=h('div',{class:'relc free'});
  const pos=L.relPos||(L.relPos={});
  const svg=document.createElementNS('http://www.w3.org/2000/svg','svg');svg.setAttribute('class','rel-svg');svg.setAttribute('aria-hidden','true');
  const sel=it.relSel;
  if(!names.length)wrap.append(h('p',{class:'m-empty'},Object.keys(L.tables).length?'All tables are hidden. Use Show Table on the Design tab.':'There are no tables yet. Create tables first.'));
  const connect=(t1,f1,t2,f2)=>{
    if(t1===t2){it.relSel=null;renderWork();return}
    const a=L.tables[t1],af=a.fields.find(x=>x.n===f1),b=L.tables[t2],bf=b.fields.find(x=>x.n===f2);
    const aPk=af.pk&&a.fields.filter(x=>x.pk).length===1,bPk=bf.pk&&b.fields.filter(x=>x.pk).length===1;
    const st=bPk&&!aPk?{oneT:t2,oneF:f2,manyT:t1,manyF:f1,ri:false}:{oneT:t1,oneF:f1,manyT:t2,manyF:f2,ri:false};
    it.relSel=null;renderWork();relDialog(it,st,-1);
  };
  names.forEach(n=>{
    const t=L.tables[n];
    const head=h('div',{class:'rbox-h'+(it.relTbl===n?' on':''),tabindex:'0',role:'button','aria-label':'Table '+n+(it.relTbl===n?', selected':'')+'. Drag to move.',onclick:()=>{if(it.boxMoved){it.boxMoved=false;return}it.relTbl=it.relTbl===n?null:n;renderWork()}},n);
    const k=Object.keys(L.tables).indexOf(n);
    if(!pos[n])pos[n]={x:20+(k%3)*250,y:20+Math.floor(k/3)*200};
    const boxEl=h('div',{class:'rbox',role:'group','aria-label':'Table '+n,style:'left:'+pos[n].x+'px;top:'+pos[n].y+'px'},head,h('div',{class:'rbox-b'},...t.fields.map(f=>{
      const b=h('button',{type:'button',class:'rf'+(sel&&sel.t===n&&sel.f===f.n?' on':'')+(lock?' plain':''),'data-bt':n,'data-bf':f.n,'aria-label':'Field '+f.n+' in '+n+(f.pk?', primary key':'')+(sel&&sel.t===n&&sel.f===f.n?', selected':'')},(f.pk?'🔑 ':'')+f.n);
      if(!lock){
        b.addEventListener('click',()=>{
          if(it.dragged){it.dragged=false;return}
          if(sel&&sel.t===n&&sel.f===f.n){it.relSel=null;renderWork();return}
          if(!sel||sel.t===n){it.relSel={t:n,f:f.n};renderWork();setStatus('Selected '+n+'.'+f.n+'. Now click the matching field in another table, or drag from one field to the other.');return}
          connect(sel.t,sel.f,n,f.n);
        });
        b.addEventListener('pointerdown',e=>{
          if(e.button!==0)return;const sx=e.clientX,sy=e.clientY;let moved=false;let ghost=null;
          const mv=ev=>{if(!moved&&Math.hypot(ev.clientX-sx,ev.clientY-sy)<6)return;moved=true;if(!ghost){ghost=h('div',{class:'rel-ghost'},n+'.'+f.n);labRef.acc.append(ghost)}const a=labRef.acc.getBoundingClientRect();ghost.style.left=(ev.clientX-a.left+8)+'px';ghost.style.top=(ev.clientY-a.top+8)+'px'};
          const up=ev=>{document.removeEventListener('pointermove',mv);document.removeEventListener('pointerup',up);if(ghost)ghost.remove();if(!moved)return;it.dragged=true;setTimeout(()=>it.dragged=false,50);const tgt=document.elementFromPoint(ev.clientX,ev.clientY);const rf=tgt&&tgt.closest&&tgt.closest('.rf');if(rf&&rf.getAttribute('data-bt')){connect(n,f.n,rf.getAttribute('data-bt'),rf.getAttribute('data-bf'))}};
          document.addEventListener('pointermove',mv);document.addEventListener('pointerup',up);
        });
      }
      return b;
    })));
    head.addEventListener('pointerdown',e=>{
      if(e.button!==0)return;const sx=e.clientX,sy=e.clientY,ox=pos[n].x,oy=pos[n].y;let moved=false;
      const mv=ev=>{if(!moved&&Math.hypot(ev.clientX-sx,ev.clientY-sy)<5)return;moved=true;pos[n].x=Math.max(0,ox+ev.clientX-sx);pos[n].y=Math.max(0,oy+ev.clientY-sy);boxEl.style.left=pos[n].x+'px';boxEl.style.top=pos[n].y+'px';fit();redraw()};
      const up=()=>{document.removeEventListener('pointermove',mv);document.removeEventListener('pointerup',up);if(moved){it.boxMoved=true;setTimeout(()=>it.boxMoved=false,60);labSave()}};
      document.addEventListener('pointermove',mv);document.addEventListener('pointerup',up);
    });
    head.addEventListener('keydown',e=>{const st=e.shiftKey?40:10;const m={ArrowLeft:[-st,0],ArrowRight:[st,0],ArrowUp:[0,-st],ArrowDown:[0,st]}[e.key];if(!m||!e.altKey)return;e.preventDefault();pos[n].x=Math.max(0,pos[n].x+m[0]);pos[n].y=Math.max(0,pos[n].y+m[1]);boxEl.style.left=pos[n].x+'px';boxEl.style.top=pos[n].y+'px';fit();redraw();labSave()});
    wrap.append(boxEl);
  });
  const fit=()=>{const xs=names.map(n=>pos[n].x+230),ys=names.map(n=>pos[n].y+(L.tables[n].fields.length*24+40));wrap.style.minWidth=Math.max(0,...xs)+'px';wrap.style.height=Math.max(260,...ys)+'px'};
  fit();
  wrap.append(svg);
  box.append(h('p',{class:'note',html:lock?'<b>Relationships.</b> The tables are already linked. A line with <b>1</b> and <b>∞</b> means referential integrity is enforced (the ONE side and the MANY side).':'<b>How to link tables:</b> drag the primary key field of one table onto the matching field of the other. (Or click one field, then the other.) Click a line to select it, double-click it to edit it. Right-click a line to delete it.'}),wrap);
  const list=h('ul',{class:'checks'});
  if(!L.rels.length)list.append(h('li',{},'No relationships yet.'));
  L.rels.forEach((r,i)=>list.append(h('li',{},h('button',{type:'button',class:'btn quiet sm',onclick:()=>{it.relLine=i;renderWork();setStatus('Selected relationship '+(i+1)+'.')}},(it.relLine===i?'✓ ':'')+r.oneT+'.'+r.oneF+'  1 ──── ∞  '+r.manyT+'.'+r.manyF+(r.ri?'  (integrity on'+(r.cu?', cascade update':'')+(r.cd?', cascade delete':'')+')':'')))));
  box.append(h('div',{},list));
  const links=L.rels.map((r,i)=>Object.assign({sel:it.relLine===i,mark:!!r.ri},r)).filter(r=>!hidden.includes(r.oneT)&&!hidden.includes(r.manyT));
  const redraw=()=>drawLinks(wrap,svg,links);
  labRef.redraw=redraw;
  requestAnimationFrame(()=>{redraw();if(!lock){
    $$('polyline.lnk',svg).forEach((pl,i)=>{
      const real=L.rels.indexOf(links[i]&&L.rels.find(r=>r.oneT===links[i].oneT&&r.oneF===links[i].oneF&&r.manyT===links[i].manyT&&r.manyF===links[i].manyF));
      const hit=pl.cloneNode();hit.setAttribute('class','lnk-hit');
      hit.addEventListener('click',()=>{it.relLine=real;renderWork();setStatus('Selected relationship. Double-click to edit it, or press Delete.')});
      hit.addEventListener('dblclick',()=>relDialog(it,Object.assign({},L.rels[real]),real));
      hit.addEventListener('contextmenu',e=>{e.preventDefault();const a=labRef.acc.getBoundingClientRect();it.relLine=real;popMenu(e.clientX-a.left,e.clientY-a.top,[{label:'Edit Relationship...',fn:()=>relDialog(it,Object.assign({},L.rels[real]),real)},{label:'Delete',fn:()=>delRel(it,real)}])});
      svg.append(hit);
      if(it.relLine===real)pl.setAttribute('class','lnk sel');
    });
  }});
  it.editRel=()=>{if(it.relLine==null||!L.rels[it.relLine])return setStatus('Click a relationship line first.');relDialog(it,Object.assign({},L.rels[it.relLine]),it.relLine)};
  it.delRel=()=>delRel(it,it.relLine);
  it.hideTbl=()=>{if(!it.relTbl)return setStatus('Click a table’s title bar first.');hidden.push(it.relTbl);it.relTbl=null;labSave();renderWork()};
  it.showTbl=()=>showRelTable(it);
  box.addEventListener('keydown',e=>{if(e.key==='Delete'&&it.relLine!=null&&!lock){e.preventDefault();delRel(it,it.relLine)}});
}
/* deleting records with cascade delete */
function removeRecord(db,tn,i){
  const t=db.tables[tn];const row=t.rows[i];
  for(const r of db.rels.filter(r=>r.oneT===tn&&r.ri)){
    const kids=db.tables[r.manyT].rows.filter(m=>String(m[r.manyF])===String(row[r.oneF]));
    if(kids.length&&!r.cd)return{msg:'You cannot delete or change this record because the related table ‘'+r.manyT+'’ includes related records.'};
  }
  for(const r of db.rels.filter(r=>r.oneT===tn&&r.ri&&r.cd)){
    const ct=db.tables[r.manyT];
    for(let k=ct.rows.length-1;k>=0;k--)if(String(ct.rows[k][r.manyF])===String(row[r.oneF])){const x=removeRecord(db,r.manyT,k);if(!x.ok)return x}
  }
  t.rows.splice(t.rows.indexOf(row),1);return{ok:true};
}

/* ----- Form and Report property sheets: the real Access property lists ----- */
const YN=['Yes','No'];
const FORM_X={
 Format:[['Caption',''],['Default View','Single Form',['Single Form','Continuous Forms','Datasheet','Split Form']],['Allow Form View','Yes',YN],['Allow Datasheet View','No',YN],['Allow Layout View','Yes',YN],['Scroll Bars','Both',['Neither','Horizontal Only','Vertical Only','Both']],['Auto Resize','Yes',YN],['Auto Center','No',YN],['Border Style','Sizable',['None','Thin','Sizable','Dialog']],['Control Box','Yes',YN],['Min Max Buttons','Both Enabled',['None','Min Enabled','Max Enabled','Both Enabled']],['Close Button','Yes',YN],['Width','8.5cm'],['Picture','(none)'],['Picture Type','Embedded',['Embedded','Shared','Linked']],['Picture Size Mode','Clip',['Clip','Stretch','Zoom']],['Grid X','10'],['Grid Y','10'],['Dividing Lines','No',YN],['Navigation Caption','']],
 Data:[['Filter',''],['Order By',''],['Allow Filters','Yes',YN],['Recordset Type','Dynaset',['Dynaset','Dynaset (Inconsistent Updates)','Snapshot']],['Fetch Defaults','Yes',YN]],
 Event:['On Open','On Close','On Resize','On Unload','On Delete','Before Del Confirm','After Del Confirm','Before Insert','On Dirty','On Got Focus','On Lost Focus','On Click','On Dbl Click','On Mouse Down','On Mouse Move','On Mouse Up','On Key Down','On Key Up','On Key Press','On Error','On Filter','On Apply Filter','On Timer'],
 Other:[['Pop Up','No',YN],['Modal','No',YN],['Cycle','All Records',['All Records','Current Record','Current Page']],['Ribbon Name',''],['Toolbar',''],['Shortcut Menu','Yes',YN],['Menu Bar',''],['Shortcut Menu Bar',''],['Help File',''],['Help Context Id','0'],['Has Module','No',YN],['Use Default Paper Size','No',YN],['Fast Laser Printing','Yes',YN],['Tag','']]
};
const CTL_X={
 textbox:{Format:[['Visible','Yes',YN],['Show Date Picker','For dates',['For dates','Never']],['Back Style','Normal',['Transparent','Normal']],['Back Color','#FFFFFF'],['Border Style','Solid',['Transparent','Solid','Dashes','Short Dashes','Dots','Sparse Dots','Dash-dot','Dash-dot-dot','Double Solid']],['Border Width','Hairline',['Hairline','1 pt','2 pt','3 pt']],['Border Color','#C0C0C0'],['Special Effect','Flat',['Flat','Raised','Sunken','Etched','Shadowed','Chiseled']],['Scroll Bars','None',['None','Vertical']],['Font Name','Calibri'],['Font Size','11'],['Text Align','General',['General','Left','Center','Right','Distribute']],['Font Weight','Normal',['Thin','Extra Light','Light','Normal','Medium','Semi-bold','Bold','Extra Bold','Heavy']],['Font Italic','No',YN],['Font Underline','No',YN],['Fore Color','#000000'],['Line Spacing','0cm']],Data:[['Text Format','Plain Text',['Plain Text','Rich Text']],['Input Mask',''],['Allow AutoCorrect','Yes',YN],['Smart Tags','']],Event:['Before Update','On Dirty','On Change','On Updated','On Enter','On Exit','On Got Focus','On Lost Focus','On Click','On Dbl Click','On Mouse Down','On Mouse Move','On Mouse Up','On Key Down','On Key Up','On Key Press','On Undo'],Other:[['Datasheet Caption',''],['Enter Key Behavior','Default',['Default','New Line in Field']],['Allow Autocorrect','Yes',YN],['Vertical','No',YN],['Auto Tab','No',YN],['Tab Stop','Yes',YN],['Tab Index','0'],['Status Bar Text',''],['Shortcut Menu Bar',''],['Help Context Id','0'],['ControlTip Text',''],['IME Hold','No',YN],['Tag','']]},
 combo:{Format:[['Visible','Yes',YN],['Auto Expand','Yes',YN],['Column Heads','No',YN],['List Rows','16'],['List Width','Auto'],['Back Style','Normal',['Transparent','Normal']],['Back Color','#FFFFFF'],['Border Style','Solid',['Transparent','Solid','Dashes','Dots']],['Border Width','Hairline',['Hairline','1 pt','2 pt','3 pt']],['Special Effect','Flat',['Flat','Raised','Sunken','Etched','Shadowed','Chiseled']],['Font Name','Calibri'],['Font Size','11'],['Text Align','General',['General','Left','Center','Right','Distribute']],['Fore Color','#000000']],Data:[['Allow Value List Edits','Yes',YN],['List Items Edit Form',''],['Inherit Value List','Yes',YN],['Show Only Row Source Values','No',YN],['Input Mask',''],['Smart Tags','']],Event:['Before Update','On Dirty','On Change','On Not in List','On Dropdown','On Enter','On Exit','On Got Focus','On Lost Focus','On Click','On Dbl Click','On Mouse Down','On Mouse Move','On Mouse Up','On Key Down','On Key Up','On Key Press','On Undo'],Other:[['Tab Stop','Yes',YN],['Tab Index','0'],['Status Bar Text',''],['Shortcut Menu Bar',''],['Help Context Id','0'],['ControlTip Text',''],['Tag','']]},
 label:{Format:[['Visible','Yes',YN],['Hyperlink Address',''],['Back Style','Transparent',['Transparent','Normal']],['Back Color','#FFFFFF'],['Border Style','Transparent',['Transparent','Solid','Dashes','Dots']],['Special Effect','Flat',['Flat','Raised','Sunken','Etched','Shadowed','Chiseled']],['Font Name','Calibri'],['Font Size','11'],['Text Align','General',['General','Left','Center','Right','Distribute']],['Font Weight','Normal',['Normal','Bold']],['Fore Color','#000000']],Data:[],Event:['On Click','On Dbl Click','On Mouse Down','On Mouse Move','On Mouse Up'],Other:[['Vertical','No',YN],['Tab Index','0'],['ControlTip Text',''],['Tag','']]},
 button:{Format:[['Visible','Yes',YN],['Picture Type','Embedded',['Embedded','Shared','Linked']],['Picture','(none)'],['Transparent','No',YN],['Back Color','#E1E1E1'],['Border Style','Solid',['Transparent','Solid','Dashes','Dots']],['Hover Color',''],['Font Name','Calibri'],['Font Size','11'],['Font Weight','Normal',['Normal','Bold']],['Fore Color','#000000']],Data:[['Enabled','Yes',YN]],Event:['On Got Focus','On Lost Focus','On Dbl Click','On Mouse Down','On Mouse Move','On Mouse Up','On Key Down','On Key Up','On Key Press'],Other:[['Default','No',YN],['Cancel','No',YN],['Auto Repeat','No',YN],['Tab Stop','Yes',YN],['Tab Index','0'],['Status Bar Text',''],['ControlTip Text',''],['Tag','']]}
};
/* add the extra rows to the existing property lists; the 5th item marks them as "look only" */
(function(){
  const add=(arr,tab,label,def,opts)=>arr.some(r=>r[1]===label&&r[2]===tab)||arr.push(['x:'+label,label,tab,opts?'select:'+opts.join('|'):'text',1,def]);
  Object.keys(FORM_X).forEach(tab=>FORM_X[tab].forEach(r=>{if(typeof r==='string')add(FP.form,tab,r,'');else add(FP.form,tab,r[0],r[1],r[2])}));
  Object.keys(CTL_X).forEach(ty=>{const S=CTL_X[ty];Object.keys(S).forEach(tab=>S[tab].forEach(r=>{if(typeof r==='string')add(FP[ty],tab,r,'');else add(FP[ty],tab,r[0],r[1],r[2])}))});
  /* real Access shows every property on its own tab in a fixed order */
  const ORDER={Format:0,Data:1,Event:2,Other:3};
  Object.keys(FP).forEach(k=>FP[k].sort((a,b)=>ORDER[a[2]]-ORDER[b[2]]));
  /* the tests and the exam need these real properties on the form */
  ['Width'].forEach(()=>{});
})();

/* ----- generic property sheet for reports ----- */
const REPORT_X={
 Format:[['Caption',''],['Default View','Report View',['Report View','Print Preview']],['Allow Report View','Yes',YN],['Allow Layout View','Yes',YN],['Auto Resize','Yes',YN],['Auto Center','No',YN],['Border Style','Sizable',['None','Thin','Sizable','Dialog']],['Control Box','Yes',YN],['Min Max Buttons','Both Enabled',['None','Min Enabled','Max Enabled','Both Enabled']],['Close Button','Yes',YN],['Width','16.5cm'],['Picture','(none)'],['Page Header','All Pages',['All Pages','Not with Rpt Hdr','Not with Rpt Ftr','Not with Rpt Hdr/Ftr']],['Page Footer','All Pages',['All Pages','Not with Rpt Hdr','Not with Rpt Ftr','Not with Rpt Hdr/Ftr']],['Grid X','24'],['Grid Y','24']],
 Data:[['Record Source','',null,'rs'],['Filter',''],['Filter On Load','No',YN],['Order By','','','ob'],['Order By On Load','Yes',YN],['Allow Filters','Yes',YN]],
 Event:['On Load','On Unload','On Open','On Close','On Activate','On Deactivate','On No Data','On Page','On Error','On Click','On Mouse Down','On Key Down','On Timer'],
 Other:[['Pop Up','No',YN],['Modal','No',YN],['Ribbon Name',''],['Shortcut Menu','Yes',YN],['Menu Bar',''],['Help File',''],['Help Context Id','0'],['Has Module','No',YN],['Use Default Paper Size','Yes',YN],['Fast Laser Printing','Yes',YN],['Tag','']]
};
const SEC_X={Format:[['Visible','Yes',YN],['Height','1cm'],['Back Color','#FFFFFF'],['Special Effect','Flat',['Flat','Raised','Sunken']],['Display When','Always',['Always','Print Only','Screen Only']],['Can Grow','No',YN],['Can Shrink','No',YN],['Keep Together','Yes',YN],['Force New Page','None',['None','Before Section','After Section','Before & After']],['New Row Or Col','None',['None','Before Section','After Section','Before & After']],['Repeat Section','No',YN]],Data:[],Event:['On Format','On Print','On Retreat','On Click','On Dbl Click','On Mouse Down','On Mouse Move','On Mouse Up'],Other:[['Name',''],['Tag','']]};
const RCTL_X={Format:[['Visible','Yes',YN],['Format',''],['Decimal Places','Auto'],['Hide Duplicates','No',YN],['Can Grow','No',YN],['Can Shrink','No',YN],['Left','0cm'],['Top','0cm'],['Width','3cm'],['Height','0.6cm'],['Back Style','Normal',['Transparent','Normal']],['Back Color','#FFFFFF'],['Border Style','Solid',['Transparent','Solid','Dashes','Dots']],['Font Name','Calibri'],['Font Size','11'],['Text Align','General',['General','Left','Center','Right','Distribute']],['Fore Color','#000000']],Data:[['Control Source','','','cs'],['Running Sum','No',['No','Over Group','Over All']],['Input Mask','']],Event:['On Click','On Dbl Click','On Mouse Down','On Mouse Up'],Other:[['Name','','','nm'],['Tag','']]};
function reportPropSheet(it,d,host){
  host.replaceChildren();
  const sel=it.psSel||'report';
  const ctl=sel!=='report'&&sel.startsWith('c:')?(()=>{const [,band,i]=sel.split(':');return(d.bands[band]||[])[+i]})():null;
  const band=sel!=='report'&&sel.startsWith('b:')?sel.slice(2):null;
  const opts=[['report','Report']].concat(BANDS.filter(([k])=>!(['groupHeader','groupFooter'].includes(k))||(d.groupField||'').trim()).map(([k,l])=>['b:'+k,l]));
  BANDS.forEach(([k,l])=>d.bands[k].forEach((c,i)=>opts.push(['c:'+k+':'+i,(c.type==='label'?'Label: ':'Text Box: ')+(c.type==='label'?(c.text||'(blank)'):(c.src||'(unbound)'))+' ('+l+')'])));
  const typeName=sel==='report'?'Report':band?'Section':(ctl&&ctl.type==='label'?'Label':'Text Box');
  host.append(h('div',{class:'dz-ph'},h('span',{},'Property Sheet'),h('button',{type:'button',class:'a-dlgx','aria-label':'Close Property Sheet',onclick:()=>{it.showProps=false;renderDoc()}},'✕')),
    h('p',{class:'ps-sel'},'Selection type: '+typeName),
    h('label',{class:'ps-f'},h('span',{},'Selected object'),lblSel(opts.map(o=>[o[0],o[1]]),sel,v=>{it.psSel=v;reportPropSheet(it,d,host)},'Selected object')));
  const spec=sel==='report'?REPORT_X:band?SEC_X:RCTL_X;
  it.ptab2=it.ptab2||'Format';
  host.append(h('div',{class:'pp-tabs',role:'tablist'},...['Format','Data','Event','Other','All'].map(t=>h('button',{type:'button',role:'tab','aria-selected':String(it.ptab2===t),class:'pp-t'+(it.ptab2===t?' on':''),onclick:()=>{it.ptab2=t;reportPropSheet(it,d,host)}},t))));
  const tb=h('tbody',{});
  const store=sel==='report'?(d.x=d.x||{}):band?((d.bx=d.bx||{})[band]=(d.bx[band]||{})):(ctl.x=ctl.x||{});
  ['Format','Data','Event','Other'].filter(t=>it.ptab2==='All'||t===it.ptab2).forEach(tab=>{
    (spec[tab]||[]).forEach(r=>{
      const label=typeof r==='string'?r:r[0],def=typeof r==='string'?'':r[1],ops=typeof r==='string'?null:r[2],special=typeof r==='string'?null:r[3];
      const ev=typeof r==='string';
      let node,real=false;
      if(special==='rs'){real=true;const ip=h('input',{type:'text','aria-label':label,value:d.recordSource||'',list:'rpt-src'});ip.addEventListener('change',()=>{d.recordSource=ip.value;it.dirty=true;renderDoc()});node=h('span',{},ip,h('datalist',{id:'rpt-src'},...Object.keys(L.tables).concat(Object.keys(L.queries)).map(x=>h('option',{value:x}))))}
      else if(special==='ob'){real=true;const ip=h('input',{type:'text','aria-label':label,value:d.sortField?d.sortField+(d.sortDir==='desc'?' DESC':''):''});ip.addEventListener('change',()=>{const m=/^\[?([^\]\s]+)\]?(\s+desc)?$/i.exec(ip.value.trim());d.sortField=m?m[1]:'';d.sortDir=m&&m[2]?'desc':'asc';it.dirty=true;renderDoc()});node=ip}
      else if(special==='cs'&&ctl){real=true;const ip=h('input',{type:'text','aria-label':label,value:ctl.type==='label'?'':(ctl.src||'')});ip.disabled=ctl.type==='label';ip.addEventListener('change',()=>{ctl.src=ip.value;it.dirty=true;renderDoc()});node=ip}
      else if(special==='nm'&&ctl){real=true;const ip=h('input',{type:'text','aria-label':label,value:ctl.name||''});ip.addEventListener('change',()=>{ctl.name=ip.value;it.dirty=true});node=ip}
      else{
        const cur=store[label]!==undefined?store[label]:def;
        if(ops){node=h('select',{'aria-label':label},...ops.map(o=>h('option',{value:o},o)));node.value=cur}else node=h('input',{type:'text','aria-label':label,value:cur,readonly:ev?'':false});
        node.addEventListener('change',()=>{store[label]=node.value;it.dirty=true;inertMsg(label)});
      }
      tb.append(h('tr',{class:real?'':'inert'},h('th',{},label),h('td',{},node)));
    });
  });
  if(ctl&&ctl.type==='label'){const cap=h('input',{type:'text','aria-label':'Caption',value:ctl.text||''});cap.addEventListener('change',()=>{ctl.text=cap.value;it.dirty=true;renderDoc()});tb.prepend(h('tr',{},h('th',{},'Caption'),h('td',{},cap)))}
  host.append(h('div',{class:'pp-wrap one'},h('table',{class:'pp-tbl'},h('caption',{class:'sr-only'},'Properties'),tb)));
}
/* ----- extra views ----- */
function layoutBanner(what){return h('div',{class:'layout-note',role:'note'},h('b',{},'Layout View. '),'You can see the data and move controls at the same time. In this tutorial do your design work in ',h('b',{},'Design View'),', as the exam tasks ask for Design View and '+what+' screenshots.')}
function frmLayout(it,box,rec){box.append(layoutBanner('Form View'));frmView(it,box,rec)}
function rptLayout(it,box,rec){box.append(layoutBanner('Report View'));rptView(it,box,rec)}
function rptPrint(it,box,rec){box.classList.add('printprev');rptView(it,box,rec)}

/* Datasheet View of a form shows its Record Source as a datasheet */
function frmDatasheet(it,box,rec){
  const d=defn(it)||it.d;const rs=((d&&d.recordSource)||'').trim();
  const tn=Object.keys(L.tables).find(n=>lc(n)===lc(rs)),qn=Object.keys(L.queries).find(n=>lc(n)===lc(rs));
  if(tn){const tmp=it.dsItem&&it.dsItem.name===tn?it.dsItem:(it.dsItem={kind:'table',name:tn,view:'data',sel:-1,edit:-1,d:null});tblData(tmp,box,rec);return}
  if(qn){const tmp=it.dsItem&&it.dsItem.name===qn?it.dsItem:(it.dsItem={kind:'query',name:qn,view:'run',sel:-1,edit:-1,d:null});qryRun(tmp,box,rec);return}
  box.append(h('p',{class:'m-empty',style:'padding:1rem'},'This form has no Record Source, so there is no datasheet to show. Set the Record Source in the Property Sheet first.'));
}
/* ===== Access: SQL View (editable), wizards, quick report/form, Find ===== */

/* --- SQL text written from the design grid (the same shape Access writes) --- */
function qSqlText(q,cols,srcs,joins){
  const crit=t=>{t=String(t).trim();if(/^(<=|>=|<>|<|>|=|like\b|between\b|in\b|is\b|not\b)/i.test(t))return t;if(/^-?\d+(\.\d+)?$/.test(t)||/^#.*#$/.test(t)||/^".*"$/.test(t)||/[()\[\]!]/.test(t))return '= '+t;return '= "'+t+'"'};
  const ftxt=x=>x.p.kind==='f'?x.p.ref:x.p.src;
  const used=cols.filter(x=>x.c.total!=='Where'&&x.c.show!==false);
  const isAgg=x=>q.totals&&x.c.total&&x.c.total!=='Group By'&&x.c.total!=='Expression';
  const sel=used.map(x=>{
    if(isAgg(x))return x.c.total+'('+ftxt(x)+') AS '+x.c.total+'Of'+x.p.label;
    if(q.totals&&x.c.total==='Expression')return ftxt(x)+' AS '+x.p.label;
    if(x.p.kind==='expr')return x.p.src+' AS '+x.p.label;
    return x.p.label!==x.p.ref.split('.').pop()?x.p.ref+' AS '+x.p.label:x.p.ref;
  });
  let from=srcs[0];joins.forEach(j=>{from='('+from+' INNER JOIN '+j.t+' ON '+j.on+')'});
  if(joins.length)from=from.slice(1,-1);
  const rowsW=[0,1].map(k=>cols.filter(x=>(x.c.crit[k]||'').trim()).map(x=>ftxt(x)+' '+crit(x.c.crit[k])));
  const where=rowsW.filter(a=>a.length).map(a=>a.join(' AND '));
  const wtxt=where.length>1?where.map(w=>'('+w+')').join(' OR '):where[0]||'';
  const grp=q.totals?used.filter(x=>!x.c.total||x.c.total==='Group By').map(ftxt):[];
  const sorted=cols.filter(x=>x.c.sort);
  return 'SELECT '+sel.join(', ')+'\nFROM '+from+(wtxt?'\nWHERE '+wtxt:'')+(grp.length?'\nGROUP BY '+grp.join(', '):'')+(sorted.length?'\nORDER BY '+sorted.map(x=>ftxt(x)+(x.c.sort==='Descending'?' DESC':'')).join(', '):'')+';';
}

/* --- a small SQL reader that turns typed SQL back into the design grid --- */
function sqlScan(s,fn){
  let depth=0,q=null;
  for(let i=0;i<s.length;i++){
    const c=s[i];
    if(q){if(c===q)q=null;continue}
    if(c==='"'||c==="'"){q=c;continue}
    if(c==='['){q=']';continue}
    if(c==='#'){q='#';continue}
    if(c==='('){depth++;continue}
    if(c===')'){depth--;continue}
    if(depth===0&&fn(i,c)===true)return i;
  }
  return -1;
}
function sqlClauses(sql){
  const pos=[];
  const re=/^(SELECT|FROM|WHERE|GROUP\s+BY|HAVING|ORDER\s+BY)\b/i;
  sqlScan(sql,(i)=>{if(i>0&&/\w/.test(sql[i-1]))return;const m=re.exec(sql.slice(i));if(m)pos.push({kw:m[1].toUpperCase().replace(/\s+/g,' '),i,len:m[0].length})});
  const out={};
  pos.forEach((p,k)=>{out[p.kw]=sql.slice(p.i+p.len,k+1<pos.length?pos[k+1].i:sql.length).trim()});
  return out;
}
function sqlSplitTop(s,sep){
  const out=[];let last=0;
  const isWord=sep!==',';
  const re=isWord?new RegExp('^\\s'+sep+'\\s','i'):null;
  let between=false;
  sqlScan(s,(i,c)=>{
    if(!isWord){if(c===','){out.push(s.slice(last,i));last=i+1}return}
    if(/^\sbetween\s/i.test(s.slice(i,i+9)))between=true;
    const m=re.exec(s.slice(i));
    if(m){if(sep.toUpperCase()==='AND'&&between){between=false;return}out.push(s.slice(last,i));last=i+m[0].length-1}
  });
  out.push(s.slice(last));
  return out.map(x=>x.trim()).filter(x=>x!=='');
}
const stripParens=s=>{s=s.trim();while(s[0]==='('&&s[s.length-1]===')'){let d=0,ok=true;for(let i=0;i<s.length-1;i++){if(s[i]==='(')d++;if(s[i]===')')d--;if(d===0){ok=false;break}}if(!ok)break;s=s.slice(1,-1).trim()}return s};
const SIMPLE_ID=/^\[?[A-Za-z_][\w ]*\]?(\.\[?[A-Za-z_][\w ]*\]?)?$/;
const sqlName=s=>s.replace(/\[|\]/g,'').trim();
function parseSql(sql,db){
  db=db||L;
  const fail=m=>({err:m});
  sql=String(sql||'').replace(/;\s*$/,'').trim();
  if(!sql||/^select$/i.test(sql))return fail('This query has no tables. Type a FROM clause, for example: SELECT * FROM tblRunner;');
  if(!/^select\b/i.test(sql))return fail('Syntax error in query expression. A query in this tutorial must start with SELECT.');
  const C=sqlClauses(sql);
  if(!C.SELECT||!C.FROM)return fail('Syntax error in query expression. A SELECT query needs a SELECT list and a FROM clause, for example: SELECT RunnerSurname FROM tblRunner;');
  if(C.HAVING!==undefined)return fail('HAVING is not needed for this task. Put the condition in WHERE, or use a column with Criteria in Design View.');
  const from=C.FROM.replace(/[()]/g,' ');
  const parts=from.split(/\b(?:(?:INNER|LEFT|RIGHT|FULL|CROSS)\s+)?(?:OUTER\s+)?JOIN\b/i);
  const src=[];
  for(let i=0;i<parts.length;i++){
    let seg=parts[i].replace(/\bON\b[\s\S]*$/i,'').trim();
    seg.split(',').forEach(t=>{t=sqlName(t.replace(/\s+AS\s+\w+$/i,''));if(!t)return;const tn=Object.keys(db.tables).find(n=>lc(n)===lc(t));if(!tn){src.push({bad:t});return}if(!src.some(x=>x===tn))src.push(tn)});
  }
  const bad=src.find(x=>x&&x.bad);
  if(bad)return fail('The Microsoft Access database engine cannot find the input table or query ‘'+bad.bad+'’. Make sure it exists and that its name is spelled correctly.');
  const mkCol=(f,o)=>Object.assign({f,sort:'',show:true,crit:['',''],total:'Group By'},o||{});
  const allFields=src.flatMap(tn=>db.tables[tn].fields.map(f=>tn+'.'+f.n));
  let cols=[];let hasAgg=false;
  const keyOf=f=>{f=String(f).trim();const m=/^[^:"\[(]+?:\s*(.+)$/.exec(f);const e=(m?m[1]:f).trim();return sqlName(e).toLowerCase()};
  const normField=e=>{e=e.trim();if(SIMPLE_ID.test(e)){const n=sqlName(e);if(n.includes('.'))return n;const hit=allFields.find(x=>x.split('.')[1].toLowerCase()===n.toLowerCase());return hit&&allFields.filter(x=>x.split('.')[1].toLowerCase()===n.toLowerCase()).length===1?n:(hit||n)}return e};
  for(let item of sqlSplitTop(C.SELECT,',')){
    item=item.replace(/^DISTINCT(ROW)?\s+/i,'').trim();
    if(item==='*'||/^\[?\w+\]?\.\*$/.test(item)){const only=item==='*'?null:sqlName(item.slice(0,-2));allFields.filter(f=>!only||lc(f.split('.')[0])===lc(only)).forEach(f=>cols.push(mkCol(f)));continue}
    let alias=null;const am=/^([\s\S]*?)\s+AS\s+(\[[^\]]+\]|\w+)$/i.exec(item);
    if(am){item=am[1].trim();alias=sqlName(am[2])}
    const gm=/^(count|min|max|sum|avg)\s*\(([\s\S]*)\)$/i.exec(item);
    if(gm&&stripParens('('+gm[2]+')')===gm[2].trim()&&(()=>{let d=0;for(const c of gm[2]){if(c==='(')d++;if(c===')'){d--;if(d<0)return false}}return d===0})()){
      hasAgg=true;const fn=gm[1][0].toUpperCase()+gm[1].slice(1).toLowerCase();const inner=normField(gm[2].trim());
      const lbl=alias||null;
      cols.push(mkCol((lbl?lbl.replace(/^(Count|Min|Max|Sum|Avg)Of/,'')+': ':'')+inner,{total:fn,_alias:lbl}));continue;
    }
    if(/\b(count|min|max|sum|avg)\s*\(/i.test(item)){hasAgg=true;cols.push(mkCol((alias?alias+': ':'Expr1: ')+item,{total:'Expression'}));continue}
    const f=normField(item);
    cols.push(mkCol(alias&&alias.toLowerCase()!==sqlName(item).split('.').pop().toLowerCase()?alias+': '+f:f));
  }
  if(!cols.length)return fail('Syntax error in query expression. The SELECT list is empty.');
  const totals=hasAgg||C['GROUP BY']!==undefined;
  if(totals){
    const gb=C['GROUP BY']?sqlSplitTop(C['GROUP BY'],',').map(x=>keyOf(normField(x))):[];
    if(hasAgg){const miss=cols.find(c=>c.total==='Group By'&&C['GROUP BY']===undefined);if(miss)return fail('You tried to execute a query that does not include the specified expression ‘'+miss.f+'’ as part of an aggregate function. Add a GROUP BY clause, or press Totals (Σ) in Design View.')}
    cols.forEach(c=>{if(c.total==='Group By'&&gb.length&&!gb.includes(keyOf(c.f))){/* selected but not grouped: Access refuses */}});
  }
  const attach=(cond,k)=>{
    cond=stripParens(cond);
    let opAt=-1,opLen=0,opTxt='';
    const OPS=['<=','>=','<>','=','<','>'];
    sqlScan(cond,(i)=>{
      const rest=cond.slice(i);
      const kw=/^\s(NOT\s+LIKE|LIKE|BETWEEN|NOT\s+IN|IN|IS\s+NOT|IS)\s/i.exec(rest);
      if(kw){opAt=i;opLen=kw[0].length;opTxt=kw[1].replace(/\s+/g,' ');return true}
      for(const o of OPS)if(rest.startsWith(o)){opAt=i;opLen=o.length;opTxt=o;return true}
    });
    if(opAt<0)return 'Syntax error (missing operator) in query expression ‘'+cond+'’.';
    const lhs=normField(stripParens(cond.slice(0,opAt).trim()));const rhs=cond.slice(opAt+opLen).trim();
    let text;
    if(/^[<>=]/.test(opTxt))text=opTxt+' '+rhs;
    else if(/^not like$/i.test(opTxt))text='Not Like '+rhs;
    else if(/^not in$/i.test(opTxt))text='Not In '+rhs;
    else if(/^is not$/i.test(opTxt))text='Is Not '+rhs;
    else text=opTxt[0].toUpperCase()+opTxt.slice(1).toLowerCase()+' '+rhs;
    let col=cols.find(c=>keyOf(c.f)===keyOf(lhs)&&!(c.crit[k]||'').trim());
    if(!col){col=mkCol(lhs,{show:false,total:totals?'Where':'Group By'});cols.push(col)}
    col.crit[k]=text;return null;
  };
  if(C.WHERE){
    const ors=sqlSplitTop(C.WHERE,'OR').map(stripParens);
    if(ors.length>2)return fail('This query has more than two OR groups. In Design View put them in the Criteria and “or” rows (two rows).');
    for(let k=0;k<ors.length;k++){for(const cond of sqlSplitTop(ors[k],'AND')){const e=attach(cond,k);if(e)return fail(e)}}
  }
  if(C['ORDER BY']){
    for(const o of sqlSplitTop(C['ORDER BY'],',')){
      const m=/^([\s\S]*?)(?:\s+(ASC|DESC))?$/i.exec(o);const f=normField(m[1]);const dir=/desc/i.test(m[2]||'')?'Descending':'Ascending';
      let col=cols.find(c=>keyOf(c.f)===keyOf(f));
      if(!col){col=mkCol(f,{show:false,total:totals?'Where':'Group By'});cols.push(col)}
      col.sort=dir;
    }
  }
  while(cols.length<6)cols.push(mkCol(''));
  cols.forEach(c=>delete c._alias);
  return{q:{src,cols,totals},tables:src};
}
function qrySql(it,box){
  if(!it.d)prepDesign(it);
  const q=it.d;
  if(it.sqlText===undefined){
    const r=runQuery(q);
    it.sqlText=r&&!r.err?r.sql:'SELECT;';
  }
  const ta=h('textarea',{class:'sqlv sqled',spellcheck:'false','aria-label':'SQL View. Type or edit the SQL statement.'});
  ta.value=it.sqlText;
  ta.addEventListener('input',()=>{it.sqlText=ta.value;it.sqlDirty=true;it.dirty=true});
  box.append(ta,h('p',{class:'a-hint'},'This is the SQL that Access writes for you from the design grid. You can also type your own SQL here. When you switch to Design View or Datasheet View (or press Run), Access reads it and updates the design grid.'));
  it.sqlApply=()=>{
    if(!it.sqlDirty)return true;
    const r=parseSql(it.sqlText,L);
    if(r.err){msgBox(r.err);return false}
    it.d=r.q;it.sqlDirty=false;it.dirty=true;return true;
  };
}
const _setViewBase=setView;
setView=function(it,v){
  if(it.kind==='query'&&it.view==='sql'&&v!=='sql'&&it.sqlApply){if(!it.sqlApply())return;it.sqlText=undefined}
  if(it.kind==='query'&&v==='sql')it.sqlText=undefined;
  return _setViewBase(it,v);
};

/* --- quick report / form and the two wizards --- */
function srcFields(name){
  const tn=Object.keys(L.tables).find(n=>lc(n)===lc(name));if(tn)return L.tables[tn].fields.map(f=>f.n);
  const qn=Object.keys(L.queries).find(n=>lc(n)===lc(name));if(qn){const r=runQuery(L.queries[qn],L);return r.err?[]:r.cols}
  return[];
}
function makeReport(src,fields,group,sort){
  const d=newReportDef(src);d.nextN=0;
  d.bands.reportHeader=[{type:'label',name:'Label0',text:src}];
  d.bands.pageHeader=fields.filter(f=>f!==group).map((f,i)=>({type:'label',name:'Label'+(i+1),text:f}));
  d.bands.detail=fields.filter(f=>f!==group).map((f,i)=>({type:'text',name:'Text'+(i+1),src:f}));
  if(group){d.groupField=group;d.bands.groupHeader=[{type:'label',name:'LabelG',text:group+':'},{type:'text',name:'TextG',src:group}]}
  if(sort)d.sortField=sort;
  const it=openObj('report','','view',d,true);it.dirty=true;return it;
}
function makeForm(src,fields){
  const d=newFormDef();d.recordSource=src;
  fields.forEach((f,i)=>{d.nextN+=2;d.controls.push({id:'c'+d.nextN,type:'label',name:'Label'+(d.nextN-1),caption:f,x:20,y:16+i*30,w:150,h:22});d.controls.push({id:'c'+(d.nextN+1000),type:'textbox',name:f,controlSource:f,x:180,y:16+i*30,w:220,h:22,events:{}})});
  const it=openObj('form','','view',d,true);it.dirty=true;return it;
}
function selSource(){return UI.navSel&&(UI.navSel.kind==='table'||UI.navSel.kind==='query')?UI.navSel.name:''}
function quickReport(){
  const s=selSource();if(!s){msgBox('Select a table or query in the Navigation Pane first, then choose Report.');return}
  makeReport(s,srcFields(s),'','');
}
function wizard(kind){
  const names=Object.keys(L.tables).concat(Object.keys(L.queries));
  if(!names.length){msgBox('There are no tables or queries to use yet.');return}
  const st={src:selSource()||names[0],fields:[],group:'',sort:''};
  const body=h('div',{class:'stack wiz'});
  const draw=()=>{
    body.replaceChildren();
    const fl=srcFields(st.src);
    const srcSel=lblSel(names.map(n=>[n,(L.tables[n]?'Table: ':'Query: ')+n]),st.src,v=>{st.src=v;st.fields=[];st.group='';st.sort='';draw()},'Tables/Queries');
    body.append(h('label',{class:'ps-f'},h('span',{},'Tables/Queries'),srcSel),h('b',{},'Available Fields: tick the ones you want in the '+kind));
    fl.forEach((f,i)=>{const c=h('input',{type:'checkbox',id:'wz'+i,'aria-label':f});c.checked=st.fields.includes(f);c.addEventListener('change',()=>{st.fields=c.checked?st.fields.concat([f]):st.fields.filter(x=>x!==f)});body.append(h('label',{class:'opt',for:'wz'+i},c,h('span',{},f)))});
    if(kind==='report')body.append(h('label',{class:'ps-f'},h('span',{},'Group by (optional)'),lblSel([['','(no grouping)']].concat(fl.map(f=>[f,f])),st.group,v=>st.group=v,'Group by')),h('label',{class:'ps-f'},h('span',{},'Sort by (optional)'),lblSel([['','(none)']].concat(fl.map(f=>[f,f])),st.sort,v=>st.sort=v,'Sort by')));
  };
  draw();
  dlg({title:(kind==='report'?'Report':'Form')+' Wizard',wide:true,body,buttons:[{label:'Finish',primary:true,fn:()=>{
    const f=st.fields.length?st.fields:srcFields(st.src);
    if(kind==='report')makeReport(st.src,st.group&&!f.includes(st.group)?f.concat([st.group]):f,st.group,st.sort);else makeForm(st.src,f);
  }},{label:'Cancel'}]});
}
/* --- Find --- */
function findDlg(it){
  if(!it||it.kind!=='table'||it.view!=='data'){setStatus('Open a table in Datasheet View, then choose Find.');return}
  const t=L.tables[it.name];if(!t)return;
  const ti=h('input',{class:'inp',type:'text',id:'fdText','aria-label':'Find What'});
  const scope=lblSel([['all','Current document'],['col','Current field']],'all',()=>{},'Look In');
  const msg=h('div',{class:'a-hint',role:'status'},'');
  let last=it.sel>=0?it.sel:-1;
  const next=()=>{
    const q=ti.value.trim().toLowerCase();if(!q){msg.textContent='Type what to find.';return}
    const cols=scope.value==='col'&&it.cc?[it.cc]:t.fields.map(f=>f.n);
    for(let k=1;k<=t.rows.length;k++){const i=(last+k)%t.rows.length;if(cols.some(c=>String(fmtv(t.rows[i][c])).toLowerCase().includes(q))){last=i;it.sel=i;closeDlg();renderWork();setStatus('Found in record '+(i+1)+'.');return}}
    msg.textContent='Microsoft Access finished searching the records. The search item was not found.';
  };
  dlg({title:'Find and Replace',body:h('div',{class:'stack'},h('label',{for:'fdText'},'Find What:'),ti,h('label',{},'Look In: ',scope),msg),buttons:[{label:'Find Next',primary:true,keep:true,fn:next},{label:'Cancel'}],focus:ti});
}
