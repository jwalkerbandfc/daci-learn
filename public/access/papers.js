/* ===== Exam shell: setup screens, full screen workspace, timer, results ===== */
let FS=null;
function closeFs(){
  if(!FS)return;
  clearInterval(FS.timer);
  try{if(document.fullscreenElement)document.exitFullscreen()}catch(e){}
  FS.el.remove();FS=null;
  document.documentElement.classList.remove('fs-open');
  if(typeof closeDlg==='function'&&labRef&&labRef.acc)closeDlg();
  labRef={};UI=null;L=null;onLabChange=null;labPersist=()=>store.set('aq-lab3',L);
}
const exKey=(part,mode)=>'aq-ex-'+part+'-'+mode;
const loadEx=(part,mode)=>store.get(exKey(part,mode),null);
const saveEx=(part,mode,st)=>store.set(exKey(part,mode),st);
const bandOf=pct=>pct>=80?'Distinction standard':pct>=60?'Merit standard':pct>=40?'Pass standard':'Not there yet';
function fmtTime(s){s=Math.max(0,Math.floor(s));const m=Math.floor(s/60);return String(m).padStart(2,'0')+':'+String(s%60).padStart(2,'0')}

const PART_INFO={
 A:{title:'Part A (June 2025): Build the database for Narisha’s volunteers',short:'Part A',
  blurb:'The real Part A task. Start from one flat table (Figure 1). Normalise it, then build the tables, relationships and validation in a full-screen copy of Access. Write queries and a report, test your structure and evaluate it. Save your folder and six PDFs with the correct names.',
  tasks:['Read the brief and highlight it (10 min)','Plan: normalise the flat table (not marked)','Activity 1: Relationships (45 min, 8 marks)','Activity 2: Tables and validation (45 min, 8 marks)','Activity 3: Queries and report (40 min, 12 marks)','Activity 4: Structure testing (20 min, 6 marks)','Activity 5: Structure evaluation (20 min, 6 marks)'],mins:180},
 B25:{title:'Part B (June 2025): Narisha’s running club forms',short:'Part B 2025',
  blurb:'The real June 2025 Part B set task. Build a runner entry form with validation and an evaluation form with calculated fields, test them, evaluate them and save your files with the correct names.',
  tasks:['Read the brief and highlight it (10 min)','Activity 6: Forms (70 min, 14 marks)','Activity 7: Interface testing (20 min, 6 marks)','Activity 8: Interface evaluation (20 min, 6 marks)','Save and name your folder and PDFs correctly'],mins:120},
 B:{title:'Part B (set task 2201): Washerpool College forms',short:'Part B 2201',
  blurb:'The Part B set task P65921RA. Read and highlight the brief, build two input forms in a full-screen copy of Access, test them, evaluate them and save your files with the correct names.',
  tasks:['Read the brief and highlight it (10 min)','Activity 6: Forms (70 min, 14 marks)','Activity 7: Interface testing (20 min, 6 marks)','Activity 8: Interface evaluation (20 min, 6 marks)','Save and name your folder and PDFs correctly'],mins:120}
};
function showSetup(part,mode){
  closeFs();
  const info=PART_INFO[part];const practice=mode==='practice';
  document.title=info.short+' '+(practice?'Practice':'Challenge')+' | Access Quest';
  const el=main();el.replaceChildren();
  const saved=loadEx(part,mode);
  const lim=h('select',{class:'sel',id:'limsel','aria-label':'Time limit'},...[['0','No timer'],['30','30 minutes'],['45','45 minutes'],['60','60 minutes'],['90','90 minutes'],['120','120 minutes']].map(([v,l])=>h('option',{value:v},l)));
  lim.value=practice?'0':String(info.mins);
  const start=fresh=>{
    let st=saved;
    if(fresh||!st||st.submitted){st={v:1,mode,part,startedAt:Date.now(),limit:+lim.value,submitted:false,result:null,ans:{}};st.L=null;saveEx(part,mode,st)}
    launchPaper(part,mode,st);
  };
  const best=store.get('aq-best-'+part+'-'+mode,null);
  const canCont=saved&&!saved.submitted;
  el.append(h('div',{class:'wrap'},
    h('div',{class:'crumbs'},h('a',{class:'btn alt sm',href:'#home'},'← Home')),
    h('h1',{},info.title),
    h('p',{class:'chip '+(practice?'good':'info'),style:'margin:.5rem 0'},practice?'Practice mode':'Challenge mode'),
    h('p',{class:'lead'},info.blurb),
    h('div',{class:'hero',style:'margin-top:1rem'},
      h('div',{class:'card'},h('h2',{},'What you will do'),h('ol',{class:'checks'},...info.tasks.map(t=>h('li',{},t)))),
      h('div',{class:'card'},h('h2',{},practice?'How practice mode works':'How challenge mode works'),
        h('ul',{class:'checks'},...(practice?[
          'Every task shows what to do and how many marks it is worth.',
          'You can check your work as often as you like and see why something is right or wrong.',
          'Hints and “show me how” are always on.',
          'No timer unless you choose one.']:[
          'It copies the exam: a timer, marks for each task, and no hints.',
          'You see your marks and feedback only when you press Submit.',
          'Choose your time limit below. The timer keeps running if you leave the screen.',
          'Your result is a practice estimate, not an official grade.']))),
      h('div',{class:'card'},h('h2',{},'Start'),
        h('div',{class:'stack'},
          h('label',{for:'limsel',style:'font-weight:700'},'Time limit'),lim,
          canCont?h('button',{type:'button',class:'btn',onclick:()=>start(false)},'Continue my attempt'):null,
          h('button',{type:'button',class:'btn'+(canCont?' alt':''),onclick:()=>start(true)},canCont?'Start a new attempt':'Start '+(practice?'practice':'the challenge')),
          best!==null?h('p',{class:'chip good'},'Best score so far: '+best+'%'):null,
          h('p',{class:'note',html:'<b>This works best on a laptop or tablet.</b> It opens as a full-screen copy of Access. You also write your evidence documents and save them as PDFs with the exact file names the paper asks for.'}))))));
}

/* ----- full screen shell ----- */
function openFs(o){
  closeFs();
  const el=h('div',{class:'fs',role:'region','aria-label':o.title});
  const timerEl=h('span',{class:'fs-timer',role:'timer','aria-live':'off'},'');
  const actNav=h('nav',{class:'fs-acts','aria-label':'Tasks'});
  const extra=h('div',{class:'fs-extra'});
  const bar=h('div',{class:'fs-bar'},
    h('button',{type:'button',class:'btn alt sm',onclick:()=>{if(o.onExit)o.onExit();go('home')}},'✕ Exit'),
    h('div',{class:'fs-title'},h('b',{},o.short),h('span',{class:'chip '+(o.mode==='practice'?'good':'info')},o.mode==='practice'?'Practice':'Challenge')),
    actNav,timerEl,extra,
    h('button',{type:'button',class:'btn quiet sm',onclick:()=>openSettings()},'Display'),
    h('button',{type:'button',class:'btn quiet sm',onclick:()=>openWords()},'Key words'));
  const body=h('div',{class:'fs-body'});
  el.append(bar,body);
  document.body.append(el);document.documentElement.classList.add('fs-open');
  FS={el,bar,body,actNav,extra,timerEl,part:o.part,mode:o.mode,st:o.st,timer:null,acts:o.acts,cur:0,onAct:o.onAct};
  FS.setActs=(acts,done)=>{
    actNav.replaceChildren(...acts.map((a,i)=>h('button',{type:'button',class:'fs-act'+(i===FS.cur?' on':'')+(done&&done(a)?' ok':''),'aria-current':i===FS.cur?'step':false,title:a.title,'aria-label':a.title+(done&&done(a)?' (done)':''),onclick:()=>{FS.cur=i;FS.setActs(acts,done);o.onAct(i)}},a.label)));
  };
  // timer
  const st=o.st;
  const tick=()=>{
    if(!st.limit){timerEl.textContent=o.mode==='practice'?'':'No timer';return}
    const rem=st.limit*60-(Date.now()-st.startedAt)/1000;
    timerEl.textContent=rem>0?fmtTime(rem):'Time is up';
    timerEl.classList.toggle('low',rem<300);
    if(rem<=0&&!st.warned){st.warned=true;say('Time is up. You can still submit your work.')}
  };
  tick();FS.timer=setInterval(tick,1000);
  setTimeout(()=>{const t=$('.fs-title b',el);if(t){t.setAttribute('tabindex','-1');t.focus()}},0);
  return FS;
}
function resultsView(res,o){
  const pct=res.max?Math.round(res.total/res.max*100):0;
  const wrap=h('div',{class:'stack res-view'},
    h('h2',{id:'resH',tabindex:'-1'},'Your result'),
    h('div',{class:'win'},h('h2',{},res.total+' out of '+res.max+' marks ('+pct+'%)'),h('p',{class:'lead'},bandOf(pct)),h('p',{style:'margin:0;font-size:.9rem'},'This is a practice estimate for your own use. It is not an official grade.')),
    h('div',{class:'tblwrap'},h('table',{class:'t'},h('thead',{},h('tr',{},h('th',{},'Task'),h('th',{},'Marks'),h('th',{},'Feedback'))),
      h('tbody',{},...res.items.map(it=>h('tr',{},h('td',{html:it.label}),h('td',{},it.got+' / '+it.max),h('td',{html:it.notes&&it.notes.length?'<ul class="checks">'+it.notes.map(n=>'<li>'+n+'</li>').join('')+'</ul>':'<span class="chip good">All marks</span>'})))))),
    o&&o.actions?h('div',{class:'m-row'},...o.actions):null);
  return wrap;
}
function finishExam(part,mode,st,res){
  st.submitted=true;st.result=res;saveEx(part,mode,st);
  const pct=res.max?Math.round(res.total/res.max*100):0;
  const best=store.get('aq-best-'+part+'-'+mode,null);
  if(best===null||pct>best)store.set('aq-best-'+part+'-'+mode,pct);
  award('ex:'+part+':'+mode+':done',20,'finishing '+PART_INFO[part].short+' '+mode);
  const bonus=Math.min(60,res.total);award('ex:'+part+':'+mode+':marks',Math.round(bonus/2),'your marks');
  say('Submitted. You scored '+res.total+' out of '+res.max+'.');
}

function showPartBChoice(){
  closeFs();document.title='Part B practice | Access practice';
  const el=main();el.replaceChildren();
  const card=(P,t,sub,hint)=>h('section',{class:'card'},h('h2',{},t),h('p',{},sub),h('p',{class:'a-hint'},hint),h('div',{class:'m-row'},h('a',{class:'btn big',href:'#part'+P.toLowerCase()+'-practice'},'Practice'),h('a',{class:'btn alt',href:'#part'+P.toLowerCase()+'-challenge'},'Challenge')));
  el.append(h('div',{class:'wrap'},h('div',{class:'crumbs'},h('a',{class:'btn alt sm',href:'#home'},'← Home')),h('h1',{},'Part B practice'),h('p',{class:'lead'},'Part B is building and testing forms in Access. Choose the paper you want to practise.'),
    h('div',{class:'hero'},
      card('B25','June 2025: Narisha’s running club','Build a runner entry form with validation and an evaluation form with calculated fields.','Activities 6, 7 and 8. 26 marks.'),
      card('B','Set task 2201: Washerpool College','Build a subject entry form and a test results form, then test and evaluate them.','Activities 6, 7 and 8. 26 marks.'))));
}
/* ===== Part B (Washerpool College, 2201): brief, highlighting, Access, evidence, files, marking ===== */
const BRIEF_WP=[
 {k:'h',t:'Part B Set Task Brief'},
 {k:'p',t:'You are advised to spend 10 minutes reading the Task Scenario and the activities you are to complete.'},
 {k:'p',t:'You may make notes and/or highlight information to use in the completion of the documents you need to produce for your task.'},
 {k:'h2',t:'Task Scenario'},
 {k:'p',t:'‘Washerpool College’ has partially developed a database that will eventually merge with the database you created in Part A.'},
 {k:'p',t:'A subject has a level, which is no lower than 1 and no higher than 3.'},
 {k:'p',t:'There are a number of tests for each subject.'},
 {k:'p',t:'The tests can be used many times.'},
 {k:'p',t:'The results of the tests are recorded.'},
 {k:'p',t:'The database will record information about the subjects and test results.'},
 {k:'h',t:'Part B Set Task'},
 {k:'p',t:'You must complete ALL activities within the set task. Produce your documents using a computer. Save your documents in your folder ready for submission using the formats and naming conventions indicated.'},
 {k:'h2',t:'Activity 6: Forms (1 hour 10 minutes)'},
 {k:'p',t:'Note'},
 {k:'li',t:'The structure of the tables provided should not be changed in any way, e.g. do not add validation, do not change data types.'},
 {k:'li',t:'You will be required to use all of the tables.'},
 {k:'p',t:'Create an efficient interface that will facilitate database input by producing:'},
 {k:'p',t:'(a) an input form to add a subject.'},
 {k:'li',t:'The form should be ready for data entry.'},
 {k:'li',t:'The subject title must be present.'},
 {k:'li',t:'The level must be within the specified range.'},
 {k:'li',t:'The user should be able to select a faculty for a subject.'},
 {k:'li',t:'Valid data should be appended to the subject table and a save message should display.'},
 {k:'li',t:'A suitable error message should appear where invalid data has been used.'},
 {k:'p',t:'(b) an input form to add test results.'},
 {k:'li',t:'The form should not include validation for any fields.'},
 {k:'li',t:'The form should not include an automated routine to save the data.'},
 {k:'li',t:'When the form opens the date of the latest test week must display automatically in a field.'},
 {k:'li',t:'There must be a combo box for the subject. This must contain only the subjects that have a test in the test week displayed on the form.'},
 {k:'li',t:'Once the user has selected a subject the form must display the maximum mark for that subject’s test in a field.'},
 {k:'li',t:'The user must then be able to input into fields: the number of students who took the test, the highest mark achieved, the lowest mark achieved.'},
 {k:'li',t:'These details should then be calculated and displayed in fields: the highest mark as a percentage, the lowest mark as a percentage.'},
 {k:'p',t:'Evidence your interface as screenprints using the given activity6.rtf template.'},
 {k:'p',t:'Your screenprints must show:'},
 {k:'li',t:'the DESIGN view and FORM view of all the forms you have created'},
 {k:'li',t:'the DESIGN view of any queries you have created and used with the forms including fields and criteria'},
 {k:'li',t:'the DATASHEET view of any queries you have created and used with the forms'},
 {k:'li',t:'details of any calculations, validation and macros/code you have created and used with the forms.'},
 {k:'p',t:'Ensure sufficient information is provided to allow a competent third party to maintain the database.'},
 {k:'p',t:'Save the evidence of your interface as a PDF in your folder for submission as activity6_[Registration number #]_[surname]_[first letter of first name]'},
 {k:'p',t:'You are advised to spend 1 hour and 10 minutes on this activity. (Total for Activity 6 = 14 marks)'},
 {k:'h2',t:'Activity 7: Interface testing (20 minutes)'},
 {k:'p',t:'Test the interface of your relational database using appropriate test data (normal, erroneous and extreme as appropriate).'},
 {k:'p',t:'You must provide evidence of form level testing that proves:'},
 {k:'li',t:'1. the subject form is ready for data entry when the form opens'},
 {k:'li',t:'2. an invalid faculty cannot be selected for a subject'},
 {k:'li',t:'3. a record will save in the subject table if all of the required data is present and valid'},
 {k:'li',t:'4. when the test result form opens the date of the latest test week must display automatically in a field'},
 {k:'li',t:'5. once the user has selected a subject the form must display the maximum mark for that subject’s test in a field'},
 {k:'li',t:'6. once the user inputs the highest and lowest marks achieved these details should then be calculated and displayed in fields: the highest mark as a percentage, the lowest mark as a percentage.'},
 {k:'p',t:'Complete the test log to show how you have tested your input forms using the given activity7.rtf template.'},
 {k:'p',t:'Save your test log as a PDF in your folder for submission as activity7_[Registration number #]_[surname]_[first letter of first name]. You are advised to spend 20 minutes on this activity. (Total for Activity 7 = 6 marks)'},
 {k:'h2',t:'Activity 8: Interface evaluation (20 minutes)'},
 {k:'p',t:'Evaluate your interface. You should consider the quality, performance and usability of the interface you have created in terms of how well:'},
 {k:'li',t:'the subject form ensures that: it is ready for data entry when the form opens; a subject level cannot be above the top of the range; a subject level cannot be below the bottom of the range; an invalid faculty cannot be selected for a subject.'},
 {k:'li',t:'the test result form ensures that: when it opens the date of the latest test week must display automatically in a field; there must be a combo box for the subject containing only the subjects that have a test in the test week displayed on the form; once the user has selected a subject the maximum mark for that subject’s test must be displayed in a field; the user can input the number of students who took the test, the highest mark achieved and the lowest mark achieved; the highest mark as a percentage and the lowest mark as a percentage are calculated and displayed in fields.'},
 {k:'p',t:'Save your evaluation as a PDF in your folder for submission as activity8_[Registration number #]_[surname]_[first letter of first name]. You are advised to spend 20 minutes on this activity. (Total for Activity 8 = 6 marks)'},
 {k:'h',t:'Outcomes for Submission'},
 {k:'p',t:'Each learner must create a folder to submit their work. The folder should be named according to this naming convention: [Centre #]_[Registration number #]_[surname]_[first letter of first name]_PartB'},
 {k:'p',t:'Example: Joshua Smith with registration number F180542 at centre 12345 would have a folder titled 12345_F180542_Smith_J_PartB'},
 {k:'p',t:'Each learner will need to submit 3 PDF documents and their final database within their folder. The 3 PDF documents should use these file names: activity6_[Registration number #]_[surname]_[first letter of first name], activity7_[Registration number #]_[surname]_[first letter of first name], activity8_[Registration number #]_[surname]_[first letter of first name]'}
];
let BRIEF=BRIEF_WP,BTEXT='',KEYPH=[];
function pbSetBrief(b,k){BRIEF=b;let p=0;BRIEF.forEach(x=>{x.s=p;p+=x.t.length});BTEXT=BRIEF.map(x=>x.t).join('');KEYPH=k}
let PP=null;
const KEYPH_WP=[
 {p:'no lower than 1 and no higher than 3',why:'This is the rule for the level. It tells you the validation range.'},
 {p:'The structure of the tables provided should not be changed',why:'A warning. Do not add validation or change data types in the tables. Do all your checking on the forms.'},
 {p:'The form should be ready for data entry.',why:'The form must open on a blank new record. Think Data Entry.'},
 {p:'The subject title must be present.',why:'A required value. A blank title must not be saved.'},
 {p:'The level must be within the specified range.',why:'Validation on the form for the level (1 to 3).'},
 {p:'select a faculty',why:'The user chooses from a list. This is a combo box.'},
 {p:'a save message should display',why:'A message must appear after a valid record is saved.'},
 {p:'A suitable error message',why:'A custom message, not the default Access one.'},
 {p:'should not include validation for any fields',why:'The opposite instruction for form (b). Do not add validation there.'},
 {p:'should not include an automated routine to save the data',why:'Do not use a macro to save in form (b). Access saves normally.'},
 {p:'the date of the latest test week must display automatically',why:'A default value or macro that finds the most recent test week.'},
 {p:'only the subjects that have a test in the test week displayed',why:'The combo box needs a query with a criteria on the test week.'},
 {p:'display the maximum mark for that subject’s test in a field',why:'A calculated or looked-up field that depends on the chosen subject.'},
 {p:'the highest mark as a percentage, the lowest mark as a percentage',why:'Two calculations. They need the maximum mark.'},
 {p:'the DESIGN view and FORM view of all the forms',why:'Evidence you must include for every form.'},
 {p:'the DESIGN view of any queries',why:'Evidence of the query design, with fields and criteria.'},
 {p:'the DATASHEET view of any queries',why:'Evidence that the query gives the right results.'},
 {p:'details of any calculations, validation and macros/code',why:'Show the Property Sheet and the Macro Builder so someone else could maintain it.'},
 {p:'normal, erroneous and extreme',why:'The three kinds of test data you need in the test log.'},
 {p:'form level testing',why:'Test using the forms, not the tables.'}
];

/* ----- state helpers ----- */
let PBX=null;const PBHTML={};
const pbSaveNow=()=>{if(!PBX)return;PBX.st.L=L;saveEx(PBX.part,PBX.mode,PBX.st)};
let pbSaveT=null;const pbSave=()=>{clearTimeout(pbSaveT);pbSaveT=setTimeout(pbSaveNow,300)};
const cand=()=>PBX.st.cand;
const candOK=()=>{const c=cand();return c.centre&&c.reg&&c.surname&&c.first};
const expFolder=()=>{const c=cand();return c.centre+'_'+c.reg+'_'+c.surname+'_'+(c.first||'').charAt(0)+'_'+PP.suffix};
const expPdf=n=>{const c=cand();return 'activity'+n+'_'+c.reg+'_'+c.surname+'_'+(c.first||'').charAt(0)};
function nameTip(a,e){
  if(a===e)return '';
  if(lc(a)===lc(e))return 'Check the capital letters.';
  if(/\s/.test(a))return 'Remove the spaces. Use an underscore _ between the parts.';
  if(/-/.test(a))return 'Use underscores _ not hyphens.';
  const miss=e.split('_').filter(p=>!a.includes(p));
  if(miss.length)return 'Missing or wrong: '+miss.join(', ')+'.';
  return 'The order or the underscores are wrong.';
}

/* ----- highlighting ----- */
function hlPaint(hl){const arr=new Array(BTEXT.length).fill('');hl.forEach(x=>{for(let i=Math.max(0,x.s);i<Math.min(BTEXT.length,x.e);i++)arr[i]=x.c});return arr}
function hlSub(hl,s,e){const out=[];hl.forEach(x=>{if(x.e<=s||x.s>=e){out.push(x);return}if(x.s<s)out.push({s:x.s,e:s,c:x.c});if(x.e>e)out.push({s:e,e:x.e,c:x.c})});return out}
function briefBlocks(hl,container,lineButtons){
  const arr=hlPaint(hl);
  container.replaceChildren();
  let ul=null;
  BRIEF.forEach((b,bi)=>{
    const tag=b.k==='h'?'h2':b.k==='h2'?'h3':b.k==='li'?'li':'p';
    const el=h(tag,{'data-s':String(b.s),class:'bl bl-'+b.k});
    let i=0;
    while(i<b.t.length){
      let j=i;const col=arr[b.s+i];while(j<b.t.length&&arr[b.s+j]===col)j++;
      el.append(col?h('mark',{class:'hl-'+col},b.t.slice(i,j)):document.createTextNode(b.t.slice(i,j)));
      i=j;
    }
    const wrap=h('div',{class:'bl-row'},el);
    if(lineButtons&&b.k!=='h'&&b.k!=='h2')wrap.append(h('button',{type:'button',class:'btn quiet sm bl-btn','aria-label':'Highlight this line: '+b.t.slice(0,50),onclick:()=>lineButtons(b)},'Highlight'));
    container.append(wrap);
  });
}
function selOffsets(root){
  const sel=window.getSelection();if(!sel||!sel.rangeCount||sel.isCollapsed)return null;
  const r=sel.getRangeAt(0);if(!root.contains(r.commonAncestorContainer))return null;
  const off=(node,o)=>{const el=node.nodeType===1?node:node.parentElement;const blk=el&&el.closest('[data-s]');if(!blk)return null;const pre=document.createRange();pre.selectNodeContents(blk);pre.setEnd(node,o);return +blk.getAttribute('data-s')+pre.toString().length};
  const s=off(r.startContainer,r.startOffset),e=off(r.endContainer,r.endOffset);
  if(s===null||e===null||e<=s)return null;return[s,e];
}
function phraseCover(hl){
  const arr=hlPaint(hl);
  return KEYPH.map(k=>{const s=BTEXT.indexOf(k.p);if(s<0)return{k,found:false,ok:false};let c=0;for(let i=s;i<s+k.p.length;i++)if(arr[i])c++;return{k,ok:c/k.p.length>=0.6}});
}
function pbBriefPage(page){
  const st=PBX.st;const practice=PBX.mode==='practice';
  page.replaceChildren();
  const text=h('div',{class:'brief',tabindex:'0','aria-label':PP.short+' brief. Select text, then choose a highlight colour.'});
  const draw=()=>{briefBlocks(st.hl,text,b=>{
    const arr=hlPaint(st.hl);const covered=arr.slice(b.s,b.s+b.t.length).every(x=>x==='y');
    st.hl=hlSub(st.hl,b.s,b.s+b.t.length);if(!covered)st.hl.push({s:b.s,e:b.s+b.t.length,c:'y'});pbSave();draw();drawCoach();say(covered?'Highlight removed.':'Line highlighted.')})};
  let last=null;
  document.addEventListener('selectionchange',function f(){if(!document.contains(text)){document.removeEventListener('selectionchange',f);return}const o=selOffsets(text);if(o)last=o});
  const apply=c=>{
    const o=selOffsets(text)||last;
    if(!o){say('Select some text in the brief first.');tip.textContent='Select some text in the brief first, then choose a colour.';return}
    st.hl=hlSub(st.hl,o[0],o[1]);if(c)st.hl.push({s:o[0],e:o[1],c});pbSave();last=null;window.getSelection().removeAllRanges();draw();drawCoach();tip.textContent=c?'Highlighted.':'Highlight removed.';say(c?'Highlighted.':'Highlight removed.');
  };
  const tip=h('span',{class:'a-hint',role:'status'},'Select text, then press a colour.');
  const tools=h('div',{class:'hl-tools'},h('b',{},'Highlighter:'),
    h('button',{type:'button',class:'btn sm hlb-y',onclick:()=>apply('y')},'Yellow: must do'),
    h('button',{type:'button',class:'btn sm hlb-g',onclick:()=>apply('g')},'Green: data and tables'),
    h('button',{type:'button',class:'btn sm hlb-p',onclick:()=>apply('p')},'Pink: evidence'),
    h('button',{type:'button',class:'btn quiet sm',onclick:()=>apply('')},'Remove highlight'),tip);
  const notes=h('textarea',{class:'inp',id:'brief-notes','aria-label':'Your notes',style:'min-height:9rem;width:100%'});notes.value=st.notes||'';
  notes.addEventListener('input',()=>{st.notes=notes.value;pbSave()});
  const inp=(k,label,ph)=>{const i=h('input',{class:'inp',type:'text','aria-label':label,value:st.cand[k]||'',placeholder:ph});i.addEventListener('input',()=>{st.cand[k]=i.value.trim();pbSave();drawNames()});return h('label',{class:'ps-f'},h('span',{},label),i)};
  const names=h('div',{class:'note',role:'status'});
  const drawNames=()=>{names.innerHTML=candOK()?'<b>Your names will be:</b><br>Folder: <code>'+expFolder()+'</code><br>PDFs: '+PP.pdfs.map(n=>'<code>'+expPdf(n)+'.pdf</code>').join(', '):'Fill in your details to see how your folder and files must be named.'};
  const candBox=h('div',{class:'card stack'},h('h3',{},'Your candidate details'),h('p',{class:'a-hint'},'These are used in every file name. In the real exam your invigilator gives you the centre number and your registration number.'),
    inp('centre','Centre number','e.g. 12345'),inp('reg','Registration number','e.g. F180542'),inp('surname','Surname','e.g. Smith'),inp('first','First name','e.g. Joshua'),
    h('button',{type:'button',class:'btn quiet sm',onclick:()=>{st.cand={centre:'12345',reg:'F180542',surname:'Smith',first:'Joshua'};pbSave();pbBriefPage(page)}},'Use the example (Joshua Smith)'),names);
  const coach=h('div',{class:'card stack'});
  const drawCoach=()=>{
    coach.replaceChildren(h('h3',{},practice?'Highlighting coach':'Highlighting'));
    if(!practice){coach.append(h('p',{},'Use the colours to mark what matters. Write notes on the right. Reading time is advised for 10 minutes.'));return}
    const cov=phraseCover(st.hl);const got=cov.filter(x=>x.ok).length;
    coach.append(h('p',{html:'<b>'+got+' of '+cov.length+'</b> key phrases highlighted.'}),
      h('ul',{class:'checks',style:'list-style:none;padding:0'},...cov.map(x=>h('li',{style:'margin-bottom:.4rem'},h('b',{},(x.ok?'✓ ':'○ ')+x.k.p),h('div',{class:'a-hint',style:'margin:.1rem 0'},x.k.why)))));
  };
  const guide=h('details',{class:'more',open:practice},h('summary',{},'How to highlight the paper'),h('div',{html:'<ol class="checks"><li>Read the whole brief once without a pen.</li><li>Read it again. Highlight in <b>yellow</b> every instruction (<i>must</i>, <i>should</i>, numbers and ranges).</li><li>Highlight in <b>green</b> the data: tables, fields, rules such as '+PP.hlExample+'.</li><li>Highlight in <b>pink</b> the evidence you must show (screenprints, DESIGN view, DATASHEET view, test data).</li><li>Highlight the <b>file names</b> and the <b>time</b> for each activity.</li><li>Write short notes: your plan for each form and your timings.</li></ol>'}));
  page.append(h('div',{class:'pb-page-in'},
    h('div',{class:'pb-brief-col'},h('h2',{id:'pbH',tabindex:'-1'},'Read the brief (10 minutes advised)'),guide,tools,text),
    h('div',{class:'pb-side-col'},candBox,h('div',{class:'card stack'},h('h3',{},'Your notes'),notes),coach)));
  if(PP.figure)page.firstChild.firstChild.append(PP.figure());
  draw();drawCoach();drawNames();
}

/* ----- simulated folders and Save As ----- */
function pbAddFile(folder,name,ext){
  const fsys=PBX.st.fsys;fsys.files=fsys.files.filter(f=>!(f.folder===folder&&f.name===name&&f.ext===ext));fsys.files.push({folder,name,ext});pbSave();
}
function winSave(o){
  const fsys=PBX.st.fsys;let curF='Documents';
  const nm=h('input',{class:'inp',type:'text',id:'wsName','aria-label':'File name',value:o.suggest||''});
  const body=h('div',{class:'ws'});
  const msg=h('div',{class:'a-hint',role:'status'},'');
  const draw=()=>{
    body.replaceChildren();
    const nf=h('input',{class:'inp',type:'text','aria-label':'New folder name',placeholder:'New folder name'});
    const mkf=()=>{const n=nf.value.trim();if(!n)return;if(n.length>120){msg.textContent='That name is too long.';return}if(fsys.folders.includes(n)){msg.textContent='A folder with that name already exists.';return}fsys.folders.push(n);pbSave();curF=n;msg.textContent='Folder “'+n+'” created.';draw()};
    nf.addEventListener('keydown',e=>{if(e.key==='Enter'){e.preventDefault();mkf()}});
    body.append(h('p',{class:'ws-path'},'This PC › Documents › ',h('b',{},curF==='Documents'?'':curF)),
      h('div',{class:'ws-cols'},
        h('div',{class:'ws-tree',role:'listbox','aria-label':'Folders'},...['Documents'].concat(fsys.folders).map(f=>h('button',{type:'button',role:'option','aria-selected':String(f===curF),class:'ws-f'+(f===curF?' on':''),onclick:()=>{curF=f;draw()}},'📁 '+f))),
        h('div',{class:'ws-files'},h('b',{},'Files in this folder'),...(fsys.files.filter(f=>f.folder===curF).map(f=>h('div',{class:'ws-file'},f.name+'.'+f.ext)))||[],fsys.files.filter(f=>f.folder===curF).length?null:h('span',{class:'m-empty'},'(empty)'))),
      h('div',{class:'m-row'},nf,h('button',{type:'button',class:'btn quiet sm',onclick:mkf},'New folder')),
      h('div',{class:'m-row'},h('label',{for:'wsName',style:'font-weight:700'},'File name:'),nm,h('span',{class:'chip'},o.typeLabel)),msg);
  };
  draw();
  const back=h('div',{class:'fs-modal'},h('div',{class:'a-dlg wide',role:'dialog','aria-modal':'true','aria-label':o.title},h('div',{class:'a-dlgt'},o.title),h('div',{class:'a-dlgb'},body),h('div',{class:'a-dlgf'},
    h('button',{type:'button',class:'btn sm','data-primary':'1',onclick:()=>{
      const n=nm.value.trim();if(!n){msg.textContent='Type a file name.';return}
      const base=n.replace(new RegExp('\\.'+o.ext+'$','i'),'');
      back.remove();pbAddFile(curF,base,o.ext);o.onSave(curF,base);say('Saved '+base+'.'+o.ext+' in '+curF)}},'Save'),
    h('button',{type:'button',class:'btn sm quiet',onclick:()=>back.remove()},'Cancel'))));
  back.addEventListener('keydown',e=>{if(e.key==='Escape')back.remove();else if(e.key==='Enter'&&e.target===nm){e.preventDefault();$('[data-primary]',back).click()}});
  FS.el.append(back);nm.focus();nm.select();
}
function pbSubmissionCheck(){
  const fsys=PBX.st.fsys;const out=[];
  if(!candOK()){out.push({ok:false,t:'Enter your candidate details on the “Read the brief” screen first.'});return out}
  const ef=expFolder();
  const folder=fsys.folders.find(f=>f===ef);
  const near=fsys.folders.find(f=>new RegExp(PP.suffix,'i').test(f)||f.includes(cand().reg));
  out.push({ok:!!folder,t:'Folder named correctly',tip:folder?'':(near?'“'+near+'”: '+nameTip(near,ef):'You have not made a folder yet.'),exp:ef});
  const inF=ext=>fsys.files.filter(f=>f.folder===(folder||'__none__')&&f.ext===ext);
  out.push({ok:inF('accdb').length>0,t:'Final database saved in the folder (.accdb)',tip:inF('accdb').length?'':'Use File, Save As, Save Database As and choose your folder.'});
  PP.pdfs.forEach(n=>{
    const want=expPdf(n);const f=inF('pdf').find(x=>x.name===want);
    const any=fsys.files.find(x=>x.ext==='pdf'&&new RegExp('^activity'+n,'i').test(x.name));
    out.push({ok:!!f,t:'activity'+n+' PDF named correctly and in the folder',tip:f?'':(any?'“'+any.name+'”: '+nameTip(any.name,want)+(any.folder!==ef?' It must also be inside your folder.':''):'Not saved yet. Use “Save as PDF” on the Document tab.'),exp:want+'.pdf'});
  });
  return out;
}
function pbSubPage(page){
  const practice=PBX.mode==='practice';
  page.replaceChildren();
  const list=h('ul',{class:'pb-sub'});
  const draw=()=>{
    list.replaceChildren(...pbSubmissionCheck().map(c=>h('li',{class:'pb-subi '+(c.ok?'ok':'no')},h('b',{},(c.ok?'✓ ':'✗ ')+c.t),c.tip?h('div',{class:'a-hint'},c.tip):null,practice&&c.exp&&!c.ok?h('div',{class:'a-hint'},'Expected: ',h('code',{},c.exp)):null)));
    tree.replaceChildren(...['Documents'].concat(PBX.st.fsys.folders).map(f=>h('div',{class:'ws-block'},h('b',{},'📁 '+f),...PBX.st.fsys.files.filter(x=>x.folder===f).map(x=>h('div',{class:'ws-file'},x.name+'.'+x.ext)))));
  };
  const tree=h('div',{class:'ws-tree2'});
  page.append(h('div',{class:'pb-page-in single'},h('h2',{id:'pbH',tabindex:'-1'},'Save and name your files'),
    h('p',{class:'lead'},'The marker can only mark what is in your folder. Check every name carefully. Names must match exactly.'),
    h('div',{class:'hero'},
      h('div',{class:'card stack'},h('h3',{},'Your folder'),tree,
        h('div',{class:'m-row'},h('button',{type:'button',class:'btn',onclick:()=>accHooks.saveDb()},'Save the database…'),h('button',{type:'button',class:'btn alt',onclick:()=>{pbSaveNow();draw()}},'Check again')),
        h('p',{class:'a-hint'},'The PDFs are saved from the Document tab of each activity'+(PP.extraPdfNote||'')+'. You can also save the database from Access: File, Save As.')),
      h('div',{class:'card stack'},h('h3',{},'Submission checklist'),list,h('p',{class:'a-hint'},'Back up regularly. Save the database into your folder every 15 minutes or so.'))),
    h('details',{class:'more',open:practice},h('summary',{},'How the names are built'),h('div',{html:'<ul class="checks"><li>Folder: <code>[Centre #]_[Registration number #]_[surname]_[first letter of first name]_'+PP.suffix+'</code></li><li>Example: <code>12345_F180542_Smith_J_'+PP.suffix+'</code></li><li>PDFs: <code>activity'+PP.pdfs[0]+'_[Registration number #]_[surname]_[first letter of first name]</code> (and the others)</li><li>No spaces. Use underscores. Keep the capital letters as shown.</li></ul>'}))));
  draw();PBX.subDraw=draw;
}

/* ----- screenshots and documents ----- */
function pbToast(t){if(!FS)return;const el=h('div',{class:'fs-toast',role:'status'},t);FS.el.append(el);say(t);setTimeout(()=>el.remove(),2600)}
function pbShot(){
  if(!labRef.acc)return;
  const s=accSnapshot();const ev=PBX.st.ev;const id=ev.nextId||1;ev.nextId=id+1;
  const lab=((s.meta.name||'(new '+(s.meta.kind||'window')+')')+' '+(s.meta.view||'')).trim();
  const meta=Object.assign({id,label:lab,w:labRef.acc.offsetWidth,h:labRef.acc.offsetHeight},s.meta);
  ev.shots.push(meta);PBHTML[id]=s.html;pbSaveNow();
  pbToast('Screenshot '+id+' saved: '+lab+(meta.dialog?' (with a message box)':''));
  if(PBX.tab==='shots'||PBX.tab==='doc')renderDrawer();
}
function pbRenderShot(meta,node,width){
  node.replaceChildren();const html=PBHTML[meta.id];
  if(!html){node.append(h('div',{class:'shot-miss'},'(Picture not kept after reloading. The text of the screenshot was kept, so it still counts.)'));return}
  const inner=h('div',{class:'shot-in',inert:'',html});inner.style.width=meta.w+'px';inner.style.height=meta.h+'px';
  const sc=width/meta.w;inner.style.transform='scale('+sc+')';node.style.height=Math.round(meta.h*sc)+'px';node.style.width=width+'px';node.append(inner);
}
function pbShotLarge(meta){
  const w=Math.min(FS.el.clientWidth-60,1100);const box=h('div',{class:'shot big'});
  const back=h('div',{class:'fs-modal'},h('div',{class:'a-dlg',role:'dialog','aria-label':'Screenshot '+meta.id,style:'max-width:96%'},h('div',{class:'a-dlgt'},'Screenshot '+meta.id+': '+meta.label),h('div',{class:'a-dlgb',style:'overflow:auto;max-height:70vh'},box),h('div',{class:'a-dlgf'},h('button',{type:'button',class:'btn sm','data-primary':'1',onclick:()=>back.remove()},'Close'))));
  FS.el.append(back);pbRenderShot(meta,box,w);$('[data-primary]',back).focus();back.addEventListener('keydown',e=>{if(e.key==='Escape')back.remove()});
}
function pbGallery(box){
  const ev=PBX.st.ev;
  box.append(h('div',{class:'m-row'},h('button',{type:'button',class:'btn',onclick:pbShot},'📷 Take a screenshot now'),h('span',{class:'a-hint'},'It captures the whole Access window as it is now, including message boxes and the Property Sheet.')));
  const gal=h('div',{class:'pb-gal'});
  if(!ev.shots.length)gal.append(h('p',{class:'m-empty'},'No screenshots yet.'));
  ev.shots.forEach(s=>{
    const th=h('div',{class:'shot'});
    gal.append(h('div',{class:'pb-shot'},th,h('div',{},h('b',{},'Screenshot '+s.id),h('div',{},s.label),s.dialog?h('div',{class:'chip good'},'Message box'):null,s.props?h('div',{class:'chip info'},'Property Sheet'):null,s.macro?h('div',{class:'chip info'},'Macro Builder'):null),
      h('div',{class:'m-row'},h('button',{type:'button',class:'btn quiet sm',onclick:()=>pbShotLarge(s)},'View larger'),h('button',{type:'button',class:'btn quiet sm',onclick:()=>{ev.shots=ev.shots.filter(x=>x.id!==s.id);delete PBHTML[s.id];const d=PBX.st.docs;['a','b'].forEach(w=>Object.values(d.a6[w].slots).forEach(sl=>{sl.shots=sl.shots.filter(x=>x!==s.id)}));d.a7.rows.forEach(r=>{if(+r.shot===s.id)r.shot=''});pbSaveNow();renderDrawer()}},'Delete'))));
    requestAnimationFrame(()=>pbRenderShot(s,th,150));
  });
  box.append(gal);
}
const A6_SLOTS=[['form','Form View','Add a screenprint of the input form in form view'],['design','Design View','Add a screenprint of the input form in design view'],['qd','Query Design View','Design view of any query used with the form, showing fields and criteria (if you used one)'],['qs','Query Datasheet View','Datasheet view of any query used with the form (if you used one)'],['details','Calculations, validation and macros','Add screenprints of all code, macros, calculations and validation. Include enough detail to fully show how the form works']];
function pbDocToolbar(n,title){
  return h('div',{class:'m-row doc-bar'},h('b',{},title),h('button',{type:'button',class:'btn sm',onclick:()=>winSave({title:'Save as PDF',ext:'pdf',typeLabel:'PDF (*.pdf)',suggest:'activity'+n,onSave:(f,name)=>{PBX.st.docs.exported[n]={folder:f,name};pbSave();if(PBX.subDraw)PBX.subDraw();pbToast('Saved '+name+'.pdf')}})},'Save as PDF…'));
}
function pbShotPicker(slot,after){
  const ev=PBX.st.ev;
  const sel=h('select',{class:'sel','aria-label':'Choose a screenshot to add'},h('option',{value:''},'Add a screenshot…'),...ev.shots.map(s=>h('option',{value:String(s.id)},'Screenshot '+s.id+': '+s.label)));
  sel.addEventListener('change',()=>{if(sel.value&&!slot.shots.includes(+sel.value)){slot.shots.push(+sel.value);pbSave();after()}});
  return sel;
}
function pbSlotShots(slot,after){
  const ev=PBX.st.ev;const wrap=h('div',{class:'doc-shots'});
  slot.shots.forEach(id=>{const m=ev.shots.find(x=>x.id===id);if(!m)return;const th=h('div',{class:'shot'});wrap.append(h('div',{class:'doc-shot'},th,h('div',{class:'m-row'},h('span',{},'Screenshot '+id),h('button',{type:'button',class:'btn quiet sm','aria-label':'Remove screenshot '+id,onclick:()=>{slot.shots=slot.shots.filter(x=>x!==id);pbSave();after()}},'Remove'))));requestAnimationFrame(()=>pbRenderShot(m,th,Math.min(380,(PBX.drawer.clientWidth||440)-80)))});
  return wrap;
}
function pbDocA6(box){
  const d=PBX.st.docs.a6;
  box.append(pbDocToolbar(6,'Activity 6 evidence (activity6 template)'));
  ['a','b'].forEach(w=>{
    const D=d[w];
    const forms=Object.keys(L.forms);
    const fsel=lblSel([['','(choose the saved form)']].concat(forms.map(f=>[f,f])),D.name||'',v=>{D.name=v;pbSave()},'Which form is form ('+w+')');
    const sec=h('div',{class:'word-sec'},h('h3',{},'('+w+') Input form'),h('label',{class:'ps-f'},h('span',{},'Which form is this?'),fsel));
    A6_SLOTS.forEach(([k,lab,tpl])=>{
      D.slots[k]=D.slots[k]||{shots:[],note:''};const slot=D.slots[k];
      const redraw=()=>{renderDrawer()};
      const note=h('textarea',{class:'inp','aria-label':lab+' notes for form '+w,style:'min-height:2.6rem;width:100%',placeholder:'Optional notes'});note.value=slot.note||'';note.addEventListener('input',()=>{slot.note=note.value;pbSave()});
      sec.append(h('div',{class:'word-slot'},h('b',{},lab),h('div',{class:'a-hint'},tpl),pbSlotShots(slot,redraw),h('div',{class:'m-row'},pbShotPicker(slot,redraw)),note));
    });
    box.append(sec);
  });
}
function pbDocA7(box){pbDocLog(box,'a7',7,'Activity 7 test log (activity7 template)')}
function pbDocLog(box,key,n,title){
  const rows=PBX.st.docs[key].rows;const ev=PBX.st.ev;const practice=PBX.mode==='practice';
  box.append(pbDocToolbar(n,title),
    h('p',{class:'note',html:'<b>Do not carry out any testing other than that specified in the activity.</b> Delete rows you do not need. Show the test data in each screenshot. Only complete the last column if the result is not as expected.'}));
  const body=h('tbody',{});
  const draw=()=>body.replaceChildren(...rows.map((r,i)=>{
    const upd=()=>{pbSave();stt.textContent=stat(r)};
    const stat=r=>{if(!practice)return '';const s=ev.shots.find(x=>x.id===+r.shot);const n=[];if(!r.obj)n.push('choose which requirement this proves');if(!r.data.trim())n.push('add the test data');if(!r.exp.trim())n.push('add the expected result');if(!s)n.push('attach a screenshot');return n.length?'To do: '+n.join(', ')+'.':'✓ Row complete.'};
    const stt=h('div',{class:'a-hint',role:'status'},stat(r));
    const di=h('textarea',{class:'inp','aria-label':'Test data '+(i+1),style:'min-height:3rem'});di.value=r.data;di.addEventListener('input',()=>{r.data=di.value;upd()});
    const ei=h('textarea',{class:'inp','aria-label':'Expected result '+(i+1),style:'min-height:3rem'});ei.value=r.exp;ei.addEventListener('input',()=>{r.exp=ei.value;upd()});
    const xi=h('textarea',{class:'inp','aria-label':'Explain the error '+(i+1),style:'min-height:3rem'});xi.value=r.err||'';xi.addEventListener('input',()=>{r.err=xi.value;pbSave()});
    const ss=h('select',{class:'sel','aria-label':'Screenshot for test '+(i+1)},h('option',{value:''},'(none)'),...ev.shots.map(s=>h('option',{value:String(s.id)},'Screenshot '+s.id+': '+s.label)));ss.value=r.shot||'';ss.addEventListener('change',()=>{r.shot=ss.value;upd();draw()});
    const ob=lblSel([['','Which requirement?']].concat(PP.objs),r.obj||'',v=>{r.obj=v;upd()},'Requirement tested in test '+(i+1));
    const sh=ev.shots.find(x=>x.id===+r.shot);const th=h('div',{class:'shot'});
    const cell=h('td',{},ss,stt);if(sh){cell.append(th);requestAnimationFrame(()=>pbRenderShot(sh,th,150))}
    return h('tr',{},h('td',{},String(i+1)),h('td',{},ob,di),h('td',{},ei),cell,h('td',{},xi),h('td',{},h('button',{type:'button',class:'btn quiet sm','aria-label':'Delete test '+(i+1),onclick:()=>{rows.splice(i,1);pbSave();draw()}},'×')));
  }));
  draw();
  box.append(h('div',{class:'tblwrap'},h('table',{class:'t',style:'min-width:46rem'},h('caption',{class:'sr-only'},'Interface testing log'),h('thead',{},h('tr',{},...['Test No','Test data','Expected results','Screenprint(s) of the results of this test','Explain the error and how you corrected it',''].map(x=>h('th',{},x)))),body)),
    h('button',{type:'button',class:'btn alt sm',onclick:()=>{rows.push({obj:'',data:'',exp:'',shot:'',err:''});pbSave();draw()}},'Add a test'));
}
function pbDocA8(box){
  const d=PBX.st.docs.a8;
  box.append(pbDocToolbar(8,'Activity 8 evaluation'),h('p',{class:'note',html:'Write about how well <b>each form</b> meets its requirements. Give <b>reasons</b>, say what could be <b>improved</b>, and use your test evidence.'}));
  const ta=h('textarea',{class:'inp',id:'evalta','aria-label':'Your evaluation',style:'min-height:16rem;width:100%'});ta.value=d.text||'';
  ta.addEventListener('input',()=>{d.text=ta.value;pbSave();if(PBX.mode==='practice')refreshTicks()});
  box.append(h('div',{class:'seg'},...PP.evalChips.map(s=>h('button',{type:'button',class:'btn quiet sm',onclick:()=>{ta.value+=(ta.value&&!/\s$/.test(ta.value)?' ':'')+s+' ';ta.dispatchEvent(new Event('input'));ta.focus()}},s))),ta);
}

/* ----- marking: run the forms as a user would ----- */
function pbCtlBound(rt,field){return rt.def.controls.find(c=>rt.boundField(c)&&lc(rt.boundField(c))===lc(field))}
function pbMakeRT(def,msgs){const db=clone(L);const rt=makeRT(def,db,{name:def.__name||'frmTest',msg:t=>msgs.push(t),close:()=>{},openForm:()=>{}});rt.open();return rt}
function pbFindForm(pred){for(const n of Object.keys(L.forms)){const d=clone(L.forms[n]);d.__name=n;try{const rt=pbMakeRT(d,[]);if(pred(rt,d))return{name:n,def:d}}catch(e){}}return null}
function pbCnt(rt,tn){return rt.db.tables[tn].rows.length}
function pbAttemptA(def,title,level,fac){
  const msgs=[];const rt=pbMakeRT(def,msgs);const t=pbCtlBound(rt,'SubjectTitle'),lv=pbCtlBound(rt,'SubjectLevel'),fc=pbCtlBound(rt,'FacultyID');
  const out={rejectedAt:null,saved:false,msgs,custom:false,control:{t,lv,fc}};
  const before=pbCnt(rt,'tblSubject');
  const set=(c,v,label)=>{if(c==null||v===null)return true;const r=rt.setControl(c.name,String(v));if(!r.ok){out.rejectedAt=label;out.msg=r.msg;if(r.custom)out.custom=true;return false}return true};
  if(!set(t,title,'title')||!set(lv,level,'level')||!set(fc,fac,'faculty'))return out;
  let r=rt.save();
  if(pbCnt(rt,'tblSubject')===before){
    for(const b of rt.def.controls.filter(c=>c.type==='button')){rt.runControlEvent(b,'onClick');if(pbCnt(rt,'tblSubject')>before)break}
  }
  out.saved=pbCnt(rt,'tblSubject')>before;
  if(!out.saved){out.rejectedAt=out.rejectedAt||'save';if(r&&r.msg)out.msg=r.msg}
  return out;
}
function pbFacChoice(def){
  const rt=pbMakeRT(def,[]);const fc=pbCtlBound(rt,'FacultyID');if(!fc)return null;
  if(fc.type==='combo'){const L2=rt.comboList(fc);const row=L2.rows[0];if(!row)return null;return rt.comboDisplayCols(fc).map(i=>fmtv(row[i])).join(' ')}
  return '1';
}
function pbCheckA(){
  const res={};
  const f=pbFindForm((rt)=>pbCtlBound(rt,'SubjectTitle')&&pbCtlBound(rt,'SubjectLevel'));
  if(!f){return{found:false}}
  res.found=true;res.name=f.name;
  const choice=pbFacChoice(f.def);
  const rt0=pbMakeRT(f.def,[]);
  res.ready=rt0.isNew===true;
  const good=pbAttemptA(f.def,'Test Subject',2,choice);
  res.valid=good.saved;res.validMsg=good.msgs.length>0;
  const blank=pbAttemptA(f.def,'',2,choice);
  res.titleBlocked=!blank.saved;res.titleMsg=blank.msgs.length>0||!!blank.custom;
  const lo=pbAttemptA(f.def,'Test Subject',0,choice),hi=pbAttemptA(f.def,'Test Subject',4,choice),l1=pbAttemptA(f.def,'Test Subject',1,choice),l3=pbAttemptA(f.def,'Test Subject',3,choice);
  res.levelBlocked=!lo.saved&&!hi.saved;res.levelOk=l1.saved&&l3.saved;res.levelMsg=(lo.custom||lo.msgs.length>0)&&(hi.custom||hi.msgs.length>0);
  const inv=pbAttemptA(f.def,'Test Subject',2,'Zzz invalid');
  const fcCtl=pbCtlBound(rt0,'FacultyID');
  res.facCombo=!!(fcCtl&&fcCtl.type==='combo'&&rt0.comboList(fcCtl).rows.length>=4);
  res.facBlocked=!inv.saved&&inv.rejectedAt==='faculty';
  return res;
}
function pbCheckB(){
  const f=pbFindForm((rt)=>pbCtlBound(rt,'HighestMark')&&pbCtlBound(rt,'LowestMark')&&pbCtlBound(rt,'NumStudentsPresent'));
  if(!f)return{found:false};
  const res={found:true,name:f.name};
  const def=f.def;
  const json=JSON.stringify(def);
  res.noValid=!def.controls.some(c=>(c.validationRule||'').trim())&&!/"SaveRecord"/.test(json)&&!(def.events&&def.events.beforeUpdate);
  const db=L;
  const weeks=db.tables.tblTestResult.rows.map(r=>pDate(r.TestWeek)).filter(x=>x!==null);const latestN=Math.max(...weeks);const latest=dtStr(latestN);
  const inWeek=db.tables.tblTestResult.rows.filter(r=>pDate(r.TestWeek)===latestN);
  const testById={};db.tables.tblTest.rows.forEach(t=>testById[t.TestID]=t);
  const subj={};db.tables.tblSubject.rows.forEach(s=>subj[s.SubjectID]=s);
  const expTitles=[...new Set(inWeek.map(r=>subj[testById[r.TestID].SubjectID].SubjectTitle))];
  const allTitles=db.tables.tblSubject.rows.map(s=>s.SubjectTitle);
  const msgs=[];const rt=pbMakeRT(def,msgs);
  res.latest=latest;
  res.weekShown=def.controls.some(c=>c.type!=='label'&&c.type!=='button'&&rt.display(c)===latest);
  const combo=def.controls.filter(c=>c.type==='combo').map(c=>({c,L2:rt.comboList(c)})).find(x=>x.L2.rows.length>0&&x.L2.rows.some(r=>r.some(v=>allTitles.includes(String(v)))));
  if(combo){
    const texts=combo.L2.rows.flat().map(String);
    res.comboHas=expTitles.every(t=>texts.includes(t));
    res.comboOnly=!allTitles.some(t=>!expTitles.includes(t)&&texts.includes(t));
    const rowIdx=combo.L2.rows.findIndex(r=>r.map(String).includes(expTitles[0]));
    let maxMark=null;inWeek.forEach(r=>{const t=testById[r.TestID];if(subj[t.SubjectID].SubjectTitle===expTitles[0])maxMark=t.MaximumMark});
    const row=combo.L2.rows[rowIdx];
    const disp=rt.comboDisplayCols(combo.c).map(i=>fmtv(row[i])).join(' ');
    const r=rt.setControl(combo.c.name,disp);
    res.selectOk=r.ok;
    res.maxShown=def.controls.some(c=>c!==combo.c&&c.type==='textbox'&&rt.display(c)===String(maxMark));
    const ns=pbCtlBound(rt,'NumStudentsPresent'),hi=pbCtlBound(rt,'HighestMark'),lo=pbCtlBound(rt,'LowestMark');
    const H=Math.round(maxMark*0.9),Lo=Math.round(maxMark*0.3);
    [[ns,'30'],[hi,String(H)],[lo,String(Lo)]].forEach(([c,v])=>{if(c)rt.setControl(c.name,v)});
    const nums=def.controls.filter(c=>c.type==='textbox'&&c!==ns&&c!==hi&&c!==lo).map(c=>String(rt.display(c)));
    const near=(txt,p)=>{const v=parseFloat(String(txt).replace('%',''));if(isNaN(v))return false;const hasPct=/%/.test(txt);return Math.abs(v-p)<0.51||(!hasPct&&v<=1.0001&&Math.abs(v*100-p)<0.51)};
    res.pcHigh=nums.some(t=>near(t,H/maxMark*100));res.pcLow=nums.some(t=>near(t,Lo/maxMark*100));
  }else{res.comboHas=false;res.comboOnly=false;res.selectOk=false;res.maxShown=false;res.pcHigh=false;res.pcLow=false}
  res.names=expTitles;
  res.usesQuery=!!(combo&&(/^select/i.test((combo.c.rowSource||''))||L.queries[(combo.c.rowSource||'').trim()]))||/^select/i.test(def.recordSource||'')||!!L.queries[(def.recordSource||'').trim()];
  return res;
}
function pbEvidFor(w){
  const D=PBX.st.docs.a6[w];const ev=PBX.st.ev;
  const shots=k=>((D.slots[k]||{shots:[]}).shots).map(id=>ev.shots.find(x=>x.id===id)).filter(Boolean);
  const name=D.name;
  const views=!!name&&shots('form').some(s=>s.kind==='form'&&s.view==='view'&&s.name===name)&&shots('design').some(s=>s.kind==='form'&&s.view==='design'&&s.name===name);
  const details=shots('details').some(s=>(s.props||s.macro)&&s.kind==='form'||s.macro);
  const qd=shots('qd').some(s=>s.kind==='query'&&s.view==='design'),qs=shots('qs').some(s=>s.kind==='query'&&s.view==='run');
  return{views,details,qd,qs,name};
}
function pbScoreWP(){
  const items=[];const add=(id,act,label,got,max,note)=>items.push({id,act,label,got:Math.max(0,Math.min(max,got)),max,notes:got<max&&note?[note]:[]});
  const A=pbCheckA(),B=pbCheckB();
  const nA=A.found?'':'No form for adding a subject was found. Create a form based on tblSubject with controls bound to SubjectTitle, SubjectLevel and FacultyID.';
  add('fa1','a6','Form (a): ready for data entry when it opens',A.found&&A.ready?1:0,1,nA||'Make the form open on a new blank record (Form property Data Entry = Yes).');
  add('fa2','a6','Form (a): a blank subject title is not saved, with a message',A.found&&A.titleBlocked&&A.titleMsg?1:0,1,nA||'Blank titles must be stopped with a message. Use a Before Update macro: If IsNull([title]) then MessageBox and CancelEvent.');
  add('fa3','a6','Form (a): level must be 1 to 3, with a suitable message',A.found&&A.levelBlocked&&A.levelOk&&A.levelMsg?1:0,1,nA||'Levels 0 and 4 must be refused with your own message, and 1 and 3 accepted. Use a Validation Rule and Validation Text.');
  add('fa4','a6','Form (a): faculty chosen from a list; an invalid faculty cannot be chosen',A.found&&A.facCombo&&A.facBlocked?1:0,1,nA||'Use a combo box on tblFaculty with Limit To List = Yes.');
  add('fa5','a6','Form (a): valid data is saved and a save message shows',A.found&&A.valid&&A.validMsg?1:0,1,nA||(A.valid?'Add a message that shows after saving (After Insert event, MessageBox).':'A valid record did not save. Check your controls and keys.'));
  const eA=pbEvidFor('a');
  add('fa6','a6','Form (a): evidence (Form View, Design View, validation and macro details)',(eA.views?1:0)+(eA.details?1:0),2,'Put screenshots in the Activity 6 document: '+(eA.name?'':'choose which form is (a); ')+(eA.views?'':'the Form View and the Design View; ')+(eA.details?'':'a screenshot with the Property Sheet or Macro Builder showing.'));
  const nB=B.found?'':'No form for adding test results was found. Create a form on tblTestResult with the number of students, highest and lowest mark.';
  add('fb1','a6','Form (b): no validation and no automated save',B.found&&B.noValid?1:0,1,nB||'Form (b) must not have validation rules or a save macro.');
  add('fb2','a6','Form (b): the latest test week shows automatically',B.found&&B.weekShown?1:0,1,nB||'A field should show '+(B.latest||'the latest test week')+' when the form opens. Try Default Value =DMax("TestWeek","tblTestResult").');
  add('fb3','a6','Form (b): the subject combo box lists only subjects with a test in that week',B.found&&B.comboHas&&B.comboOnly?1:0,1,nB||'The combo box Row Source should be a query with a criteria on TestWeek that gives only the '+((B.names||[]).length||5)+' subjects tested in the latest week.');
  add('fb4','a6','Form (b): choosing a subject shows its maximum mark',B.found&&B.selectOk&&B.maxShown?1:0,1,nB||'Add a text box showing the maximum mark, for example =[cboSubject].Column(2). The combo box needs the maximum mark as a column.');
  add('fb5','a6','Form (b): highest and lowest marks shown as percentages',B.found&&B.pcHigh&&B.pcLow?1:0,1,nB||'Add two calculated text boxes, for example =[HighestMark]/[txtMax]. Set Format to Percent.');
  const eB=pbEvidFor('b');
  const qOK=!B.usesQuery||(eB.qd&&eB.qs);
  add('fb6','a6','Form (b): evidence (views, query design and datasheet, calculations)',(eB.views?1:0)+(eB.details&&qOK?1:0),2,'Put screenshots in the Activity 6 document: '+(eB.name?'':'choose which form is (b); ')+(eB.views?'':'the Form View and the Design View; ')+(eB.details?'':'one with the Property Sheet showing the calculations; ')+(qOK?'':'the query Design View and Datasheet View.'));
  /* Activity 7 */
  const ev=PBX.st.ev,rows=PBX.st.docs.a7.rows;
  const OBJ={1:'the subject form is ready for data entry',2:'an invalid faculty cannot be selected',3:'a record saves when the data is valid',4:'the latest test week shows on the test result form',5:'the maximum mark shows after choosing a subject',6:'the percentages are calculated'};
  const maxMarks=(()=>{const t={};L.tables.tblTest.rows.forEach(x=>t[x.TestID]=x.MaximumMark);const ws=L.tables.tblTestResult.rows.map(r=>pDate(r.TestWeek)).filter(x=>x!==null);const lw=Math.max(...ws);return L.tables.tblTestResult.rows.filter(r=>pDate(r.TestWeek)===lw).map(r=>String(t[r.TestID]))})();
  const latestStr=B.latest||'';
  const okShot=(o,s)=>{
    if(!s)return false;
    if(o===1)return s.kind==='form'&&s.view==='view'&&s.isNew;
    if(o===2)return !!s.dialog;
    if(o===3)return !!s.dialog;
    if(o===4)return s.kind==='form'&&s.view==='view'&&!!latestStr&&s.text.includes(latestStr);
    if(o===5)return s.kind==='form'&&s.view==='view'&&maxMarks.some(m=>new RegExp('(^|[^0-9])'+m+'([^0-9]|$)').test(s.text));
    if(o===6)return s.kind==='form'&&s.view==='view'&&(/%/.test(s.text)||/\d+\.\d{1,}/.test(s.text));
    return false;
  };
  for(let o=1;o<=6;o++){
    const r=rows.find(x=>+x.obj===o&&x.data.trim()&&x.exp.trim()&&okShot(o,ev.shots.find(s=>s.id===+x.shot)));
    add('g7_'+o,'a7','Test '+o+': proves '+OBJ[o],r?1:0,1,'Add a row for requirement '+o+' with test data, the expected result and a screenshot that shows '+({1:'the subject form open on a blank record',2:'the message when an invalid faculty is used',3:'the save message after a valid record',4:'the latest test week date in the field',5:'the maximum mark for the chosen subject',6:'the two percentages after the marks are typed'})[o]+'.');
  }
  /* Activity 8 */
  const t=PBX.st.docs.a8.text||'';let g8=0;const n8=[];
  const topic=a=>a.test(t);
  const subj8=[/ready|data entry|blank/i,/level|range|1|3/i,/faculty|combo|list/i].filter(topic).length;
  const test8=[/latest|test week|date/i,/combo|subjects? (that|with)|only the subjects/i,/maximum|max mark/i,/percent|%|calculat/i].filter(topic).length;
  g8+=subj8>=3?2:subj8>=2?1:0;if(subj8<3)n8.push('cover all the points about the subject form (ready for entry, level range, faculty)');
  g8+=test8>=4?2:test8>=2?1:0;if(test8<4)n8.push('cover all the points about the test result form (latest week, combo box, maximum mark, percentages)');
  if(/because|this means|which means|so that|therefore/i.test(t)&&t.length>250){g8++}else n8.push('give reasons and write a fuller evaluation');
  if(/improve|could|should|however|weakness|limitation|next time/i.test(t)){g8++}else n8.push('say what could be improved or where it is weak');
  add('g8','a8','Evaluation of both forms',g8,6,'To earn more: '+n8.join('; ')+'.');
  return{items};
}
function pbIsPage(id){return id==='brief'||id==='sub'||(PP.pageActs||[]).includes(id)}
function pbGate(r){
  const ex=PBX.st.docs.exported;const ch=PBX.mode==='challenge';
  const items=r.items.map(i=>{const a=PP.acts.find(x=>x.id===i.act);const keys=i.pdf?[i.pdf]:((a&&a.pdfs)||[]);if(!keys.some(k=>!ex[k]))return i;return Object.assign({},i,{pdfMissing:true},ch?{got:0,notes:['No PDF saved for this activity, so it cannot be marked.']}:{})});
  return{total:items.reduce((s,i)=>s+i.got,0),max:items.reduce((s,i)=>s+i.max,0),items};
}
function pbEvalAll(){return pbGate(PP.score())}
/* ----- drawer, tasks and how-to ----- */
const PB_HOW={
 fa1:'Open the form in Design View. In the Property Sheet choose <b>Form</b> in “Selected object”. On the <b>Data</b> tab set <b>Data Entry</b> to Yes. Set <b>Record Source</b> to tblSubject first.',
 fa2:'Property Sheet, select Form, <b>Event</b> tab, <b>Before Update</b>, press … and choose the embedded macro. Add <b>If</b> with the condition <code>IsNull([SubjectTitle])</code>. Inside it add <b>MessageBox</b> (“Enter a subject title”) then <b>CancelEvent</b>. Name the title text box SubjectTitle.',
 fa3:'Select the level text box (Control Source SubjectLevel). On the Data tab type <code>Between 1 And 3</code> in <b>Validation Rule</b> and a clear message in <b>Validation Text</b>, for example “The level must be 1, 2 or 3.”',
 fa4:'Add a <b>Combo Box</b> with Control Source FacultyID. Row Source: <code>tblFaculty</code>. Column Count 2. Column Widths <code>0;3</code>. Bound Column 1. Limit To List: Yes.',
 fa5:'Property Sheet, select Form, Event tab, <b>After Insert</b>, press … and add <b>MessageBox</b> “Subject saved”. Then in Form View fill the form and press Save (Home tab) or move to a new record.',
 fa6:'Take screenshots (📷) of the form in Form View and Design View, and of the Property Sheet and Macro Builder. Add them in the <b>Document</b> tab.',
 fb1:'Do not add Validation Rules or any SaveRecord action to form (b). Let Access save the record when you move on or press Save.',
 fb2:'Add a text box with Control Source TestWeek. On the Data tab set <b>Default Value</b> to <code>=DMax("TestWeek","tblTestResult")</code>. Set the form Data Entry to Yes.',
 fb3:'<b>Create</b>, <b>Query Design</b>. Add tblSubject, tblTest and tblTestResult. Add TestID (from tblTest), SubjectTitle and MaximumMark, and TestWeek. Under TestWeek type <code>=DMax("TestWeek","tblTestResult")</code> and untick Show. Save as qrySubjectsInLatestWeek. On the combo box set Row Source to that query, Column Count 3, Column Widths <code>0;3;0</code>, Control Source TestID.',
 fb4:'Name the combo box <code>cboSubject</code>. Add a text box with Control Source <code>=[cboSubject].Column(2)</code>. Column 2 is the third column, MaximumMark. Name it txtMax.',
 fb5:'Add text boxes for NumStudentsPresent, HighestMark and LowestMark. Add two more with Control Source <code>=[HighestMark]/[txtMax]</code> and <code>=[LowestMark]/[txtMax]</code>. Set Format to <b>Percent</b>.',
 fb6:'Screenshots of Form View, Design View, the query Design View and Datasheet View, and the Property Sheet showing the calculations. Add them in the Document tab for form (b).',
 g7_1:'Open frmSubject in Form View. Do not type anything. Take a screenshot. In the test log add: test data “none, form just opened”.',
 g7_2:'In Form View try to type an invalid faculty into the combo box. When the message shows, take a screenshot.',
 g7_3:'Fill in a valid subject (title, level 2, a faculty) and save. When the save message shows, take a screenshot.',
 g7_4:'Open the test result form. The date should show. Take a screenshot.',
 g7_5:'Choose a subject. The maximum mark appears. Take a screenshot.',
 g7_6:'Type the highest and lowest marks. The percentages appear. Take a screenshot.',
 g8:'Write about each point in the paper for both forms. Say how well it works, why, and one improvement. Use evidence from your testing.'
};
function pbPaperTab(box){
  const act=PBX.act;const practice=PBX.mode==='practice';
  const ac=PP.acts.find(a=>a.id===act);
  box.append(h('h2',{id:'pbH',tabindex:'-1'},ac.title+', '+ac.marks+' marks'));
  const blocks=BRIEF.slice(BRIEF.findIndex(b=>b.t.indexOf(ac.heading)===0)+1);
  const end=blocks.findIndex(b=>b.k==='h2'||b.k==='h'||/^Activity \d/.test(b.t));
  const sect=(end<0?blocks:blocks.slice(0,end));
  box.append(h('div',{class:'brief-small'},...sect.map(b=>h(b.k==='li'?'li':'p',{style:b.k==='li'?'margin-left:1.2rem;list-style:disc':''},b.t))));
  const ul=h('ul',{class:'pb-reqs'});
  const items=PBX.items.filter(i=>i.act===act);
  items.forEach(i=>{
    const stt=h('span',{class:'pb-st','data-req':i.id});
    const manual=h('input',{type:'checkbox','aria-label':'I have done: '+i.label});manual.checked=!!PBX.st.manual[i.id];manual.addEventListener('change',()=>{PBX.st.manual[i.id]=manual.checked;pbSave()});
    ul.append(h('li',{class:'pb-req'},h('div',{class:'pb-rt'},h('span',{class:'chip info'},i.max+(i.max===1?' mark':' marks')),h('div',{},i.label)),
      practice?h('div',{},stt,h('details',{class:'more'},h('summary',{},'Show me how'),h('div',{html:(PP.how||{})[i.id]||''}))):h('label',{class:'opt'},manual,h('span',{},'I think I have done this'))));
  });
  box.append(h('h3',{},'What the marker looks for'),ul,h('p',{class:'a-hint'},'Time advised: '+ac.mins+' minutes.'));
  if(practice)refreshTicks();
}
function refreshTicks(){
  if(!PBX||PBX.mode!=='practice'||!FS)return;
  let res;try{res=pbEvalAll()}catch(e){return}
  res.items.forEach(i=>{
    const el=$('.pb-st[data-req="'+i.id+'"]',FS.el);
    if(i.got>=i.max)award('pb:'+i.id,5,'completing a requirement');
    if(!el)return;
    el.className='pb-st '+(i.got>=i.max?'ok':i.got>0?'part':'');
    el.textContent=(i.got>=i.max?'✓ Done':i.got>0?'◐ Partly done':'○ Not yet')+' ('+i.got+'/'+i.max+')'+(i.notes.length&&i.got<i.max?' '+i.notes[0]:'');
  });
}
function pbMarksTab(box){
  if(PBX.mode==='challenge'&&!PBX.st.submitted){box.append(h('p',{class:'note',html:'<b>Challenge mode.</b> Your marks appear when you press <b>Submit paper</b> at the top.'}));return}
  const res=PBX.st.submitted&&PBX.st.result?PBX.st.result:pbEvalAll();
  const items=[];
  PP.acts.filter(a=>a.marks).map(a=>[a.id,a.name]).forEach(([a,l])=>{
    const its=res.items.filter(i=>i.act===a);items.push({label:'<b>'+l+'</b>',got:its.reduce((s,i)=>s+i.got,0),max:its.reduce((s,i)=>s+i.max,0),notes:[]});
    its.forEach(i=>items.push({label:i.label,got:i.got,max:i.max,notes:i.notes}));
  });
  box.append(resultsView({total:res.total,max:res.max,items}),h('h3',{},'Submission check'),h('ul',{class:'pb-sub'},...pbSubmissionCheck().map(c=>h('li',{class:'pb-subi '+(c.ok?'ok':'no')},h('b',{},(c.ok?'✓ ':'✗ ')+c.t),c.tip?h('div',{class:'a-hint'},c.tip):null))));
}
function renderDrawer(){
  const d=PBX.drawer;const keep=d.scrollTop;
  const tabs=h('div',{class:'fs-dtabs',role:'tablist'},...[['task','Task'],['shots','Screenshots'],['doc','Document'],['marks','Marks']].map(([k,l])=>h('button',{type:'button',role:'tab','aria-selected':String(PBX.tab===k),class:'fs-dtab'+(PBX.tab===k?' on':''),onclick:()=>{PBX.tab=k;renderDrawer()}},l)));
  const box=h('div',{class:'stack fs-dbody'});
  d.replaceChildren(tabs,box);
  if(PBX.tab==='task')pbPaperTab(box);
  else if(PBX.tab==='shots')pbGallery(box);
  else if(PBX.tab==='doc')PP.docs[PBX.act](box);
  else pbMarksTab(box);
  d.scrollTop=keep;
}
function pbShowAct(id){
  PBX.act=id;
  const page=PBX.page;const pageMode=pbIsPage(id);
  FS.body.classList.toggle('pb-pagemode',pageMode);
  page.hidden=!pageMode;
  if(id==='brief')pbBriefPage(page);
  else if(id==='sub')pbSubPage(page);
  else if(pageMode)PP.pages[id](page);
  else{PBX.tab=PBX.tab==='marks'?'marks':'task';renderDrawer()}
  const hd=$('#pbH',FS.el);if(hd)hd.focus();
}
function launchPaper(id,mode,st){
  PP=PAPERS[id];pbSetBrief(PP.brief,PP.keyph);
  const practice=mode==='practice';
  st.ev=st.ev||{shots:[],nextId:1};st.manual=st.manual||{};st.hl=st.hl||[];st.notes=st.notes||'';
  st.cand=st.cand||(practice?{centre:'12345',reg:'F180542',surname:'Smith',first:'Joshua'}:{centre:'',reg:'',surname:'',first:''});
  st.fsys=st.fsys||{folders:[],files:[]};
  PP.initDocs(st);
  L=st.L&&st.L.v===PP.dbV?st.L:PP.seed();st.L=L;L.lock=!!PP.lock;L.feat=PP.feat||{};if(!L.reports)L.reports={};
  UI={tab:'Home',open:[],act:-1};
  const acts=PP.tabs;
  PBX={st,mode,part:id,act:'brief',tab:'task',acts,drawer:h('aside',{class:'fs-drawer','aria-label':'Task, screenshots, document and marks'}),page:h('div',{class:'pb-page'}),items:[]};
  PBX.items=PP.items;
  const fs=openFs({part:'B',mode,st,short:PP.short,title:PP.short+' exam workspace',acts,onAct:i=>pbShowAct(acts[i].id),onExit:()=>{pbSaveNow()}});
  const acc=buildAcc();
  fs.body.classList.add('pb');
  fs.body.append(h('div',{class:'fs-work'},acc),PBX.drawer,PBX.page);
  labPersist=pbSave;
  let rt=null;onLabChange=()=>{clearTimeout(rt);rt=setTimeout(()=>{if(PBX&&PBX.mode==='practice')refreshTicks()},500)};
  accHooks.saveDb=()=>{if(!candOK()){msgBox('Enter your candidate details on the “Read the brief” screen first, so your files can be named correctly.');return}winSave({title:'Save Database As',ext:'accdb',typeLabel:'Microsoft Access Database (*.accdb)',suggest:PP.dbName,onSave:(f,n)=>{pbToast('Database saved as '+n+'.accdb in '+f);if(PBX.subDraw)PBX.subDraw()}})};
  accHooks.backup=()=>{const d=new Date();const stamp=d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')+'-'+String(d.getDate()).padStart(2,'0');winSave({title:'Back Up Database As',ext:'accdb',typeLabel:'Microsoft Access Database (*.accdb)',suggest:PP.dbName+'_'+stamp,onSave:(f,n)=>pbToast('Backup saved as '+n+'.accdb in '+f)})};
  accHooks.pdf=PP.onPdf||null;
  const tgl=h('button',{type:'button',class:'btn quiet sm','aria-pressed':'true',onclick:()=>{const off=fs.body.classList.toggle('nodrawer');tgl.setAttribute('aria-pressed',String(!off))}},'Task panel');
  const lab=h('button',{type:'button',class:'btn quiet sm','aria-pressed':'false',onclick:()=>{const on=!labRef.acc.classList.contains('labels');labRef.acc.classList.toggle('labels',on);lab.setAttribute('aria-pressed',String(on))}},'Labels');
  const cam=h('button',{type:'button',class:'btn sm',onclick:pbShot},'📷 Screenshot');
  fs.extra.append(lab,tgl,cam,practice?h('button',{type:'button',class:'btn sm',onclick:()=>{if(pbIsPage(PBX.act)){FS.cur=PP.firstWork;fs.setActs(acts,null);pbShowAct(acts[PP.firstWork].id)}PBX.tab='marks';fs.body.classList.remove('nodrawer');renderDrawer()}},'Check my marks'):h('button',{type:'button',class:'btn sm',onclick:()=>confirmFs('Submit your paper? You will see your marks and feedback.',()=>{const r=pbEvalAll();finishExam(id,mode,st,r);if(pbIsPage(PBX.act)){FS.cur=PP.firstWork;fs.setActs(acts,null);pbShowAct(acts[PP.firstWork].id)}PBX.tab='marks';fs.body.classList.remove('nodrawer');renderDrawer()})},'Submit paper'));
  if(window.matchMedia&&window.matchMedia('(max-width:60rem)').matches){fs.body.classList.add('nodrawer');tgl.setAttribute('aria-pressed','false')}
  fs.setActs(acts,null);
  renderAll();
  pbShowAct('brief');
}
function pbItemsList(){
  const L2=[['fa1','a6','Form (a): ready for data entry when it opens',1],['fa2','a6','Form (a): a blank subject title is not saved, with a message',1],['fa3','a6','Form (a): level must be 1 to 3, with a suitable message',1],['fa4','a6','Form (a): faculty chosen from a list; an invalid faculty cannot be chosen',1],['fa5','a6','Form (a): valid data is saved and a save message shows',1],['fa6','a6','Form (a): evidence (Form View, Design View, validation and macro details)',2],
   ['fb1','a6','Form (b): no validation and no automated save',1],['fb2','a6','Form (b): the latest test week shows automatically',1],['fb3','a6','Form (b): the subject combo box lists only subjects with a test in that week',1],['fb4','a6','Form (b): choosing a subject shows its maximum mark',1],['fb5','a6','Form (b): highest and lowest marks shown as percentages',1],['fb6','a6','Form (b): evidence (views, query design and datasheet, calculations)',2],
   ['g7_1','a7','Test 1: the subject form is ready for data entry',1],['g7_2','a7','Test 2: an invalid faculty cannot be selected',1],['g7_3','a7','Test 3: a record saves when the data is valid',1],['g7_4','a7','Test 4: the latest test week shows on the test result form',1],['g7_5','a7','Test 5: the maximum mark shows after choosing a subject',1],['g7_6','a7','Test 6: the percentages are calculated',1],
   ['g8','a8','Evaluation of both forms',6]];
  return L2.map(([id,act,label,max])=>({id,act,label,max}));
}

const PAPERS={};
PAPERS.B={id:'B',part:'B',short:'Part B: Washerpool College',suffix:'PartB',dbName:'partB_database',dbV:4,lock:true,feat:{},pdfs:['6','7','8'],
 hlExample:'“no lower than 1 and no higher than 3”',brief:BRIEF_WP,keyph:KEYPH_WP,firstWork:1,
 tabs:[{id:'brief',label:'1 Read the brief',title:'Read the brief and highlight (10 minutes advised)'},{id:'a6',label:'Activity 6',title:'Activity 6: Forms (70 minutes)'},{id:'a7',label:'Activity 7',title:'Activity 7: Interface testing (20 minutes)'},{id:'a8',label:'Activity 8',title:'Activity 8: Interface evaluation (20 minutes)'},{id:'sub',label:'Save and submit',title:'Save and name your files'}],
 acts:[{id:'a6',title:'Activity 6: Forms (1 hour 10 minutes)',name:'Activity 6: Forms',heading:'Activity 6:',mins:70,marks:14,pdfs:['6']},{id:'a7',title:'Activity 7: Interface testing (20 minutes)',name:'Activity 7: Interface testing',heading:'Activity 7:',mins:20,marks:6,pdfs:['7']},{id:'a8',title:'Activity 8: Interface evaluation (20 minutes)',name:'Activity 8: Interface evaluation',heading:'Activity 8:',mins:20,marks:6,pdfs:['8']}],
 objs:[['1','1 Ready for data entry'],['2','2 Invalid faculty'],['3','3 Record saves'],['4','4 Latest test week shows'],['5','5 Maximum mark shows'],['6','6 Percentages calculated']],evalChips:['The subject form is ready for data entry because','A level above 3 or below 1 is stopped because','An invalid faculty cannot be selected because','The test result form shows the latest test week because','The subject combo box only lists subjects with a test in that week, which means','The percentages are calculated, so','However, an improvement would be to'],
 items:pbItemsList(),how:PB_HOW,docs:{a6:pbDocA6,a7:pbDocA7,a8:pbDocA8},score:pbScoreWP,seed:()=>dbSeed(),
 initDocs:st=>{st.docs=st.docs||{a6:{a:{name:'',slots:{}},b:{name:'',slots:{}}},a7:{rows:[]},a8:{text:''},exported:{}}}};
/* ===== June 2025 Part A: Narisha's volunteers (build the database, validate, query, report) ===== */
const BRIEF_A=[
 {k:'h',t:'Part A Brief'},
 {k:'p',t:'You are advised to spend 10 minutes reading the scenario and the activities you are to complete.'},
 {k:'p',t:'You may make notes and/or highlight information to use in the completion of the documents you need to produce for your activities.'},
 {k:'h2',t:'Scenario'},
 {k:'p',t:'You have been asked to create a database for Narisha.'},
 {k:'p',t:'Each Saturday, Narisha organises a 5k run around Suncaster Park.'},
 {k:'p',t:'The database will record information about the runs.'},
 {k:'p',t:'For each run, volunteers stand at positions around the park, for example the first bend.'},
 {k:'p',t:'Attendance of the assigned volunteers is recorded after each run.'},
 {k:'p',t:'Each position needs a specific number of volunteers. The minimum number of volunteers is one and the maximum number of volunteers is three.'},
 {k:'p',t:'Some runs have a social meet up afterwards.'},
 {k:'p',t:'An extract of the data Narisha would like to record is shown in Figure 1 (shown under this brief).'},
 {k:'h',t:'Part A'},
 {k:'p',t:'You must complete ALL activities within Part A. Produce your documents using a computer. Save your documents in your folder ready for submission using the formats and naming conventions indicated.'},
 {k:'h2',t:'Activity 1: Database Relationships Screenprint (45 minutes)'},
 {k:'p',t:'Study the data extract provided in Figure 1.'},
 {k:'p',t:'Create an efficient database structure that:'},
 {k:'li',t:'minimises data duplication'},
 {k:'li',t:'accepts the data provided'},
 {k:'li',t:'uses recognised naming conventions'},
 {k:'li',t:'ensures data integrity.'},
 {k:'p',t:'Ensure you use all and only the fields shown in Figure 1.'},
 {k:'p',t:'Screen print your database relationships.'},
 {k:'p',t:'Save your database relationships screenprint as a PDF in your folder for submission as activity1_[Registration number #]_[surname]_[first letter of first name]'},
 {k:'p',t:'You are advised to spend 45 minutes on this activity. (Total for Activity 1 = 8 marks)'},
 {k:'h2',t:'Activity 2: Table Structures and Validation (45 minutes)'},
 {k:'p',t:'Create efficient table structures based on Activity 1 and the data shown in Figure 1.'},
 {k:'p',t:'The table structures must use suitable validation to meet these requirements:'},
 {k:'li',t:'a record for a new volunteer will not save if the volunteer’s telephone number is not present'},
 {k:'li',t:'a record for a new volunteer will not save if the volunteer’s telephone number is not in the correct format'},
 {k:'li',t:'a record for a new position will not save if the number of volunteers needed is below the accepted range'},
 {k:'li',t:'a record for a new position will not save if the number of volunteers needed is above the accepted range'},
 {k:'li',t:'a record assigning a volunteer to a position for a run will not save if the position ID is invalid'},
 {k:'li',t:'a record assigning a volunteer to a position for a run will not save if the volunteer ID is invalid.'},
 {k:'p',t:'Input the data given in Figure 1 into your relational database.'},
 {k:'p',t:'Evidence your table structures and validation as screenprints using the given activity2.rtf template.'},
 {k:'p',t:'Display your screenprints to show:'},
 {k:'li',t:'the design view of each table showing the structure, including the fields and data types'},
 {k:'li',t:'validation including one suitable example for each of these: presence check, length check, value lookup or range check, table lookup, format check.'},
 {k:'p',t:'Save your evidence of the table structures as a PDF in your folder for submission as activity2_[Registration number #]_[surname]_[first letter of first name]'},
 {k:'p',t:'You are advised to spend 45 minutes on this activity. (Total for Activity 2 = 8 marks)'},
 {k:'h2',t:'Activity 3: Queries and Report (40 minutes)'},
 {k:'p',t:'Queries'},
 {k:'p',t:'(a) Create a query to display a list of volunteers for the start and finish position for the run on 03/05/2025. It must display only the volunteer ID, the volunteer last name and the position. It must be sorted by volunteer last name.'},
 {k:'p',t:'(b) Create a query to display a list of volunteers. Calculate:'},
 {k:'li',t:'the number of times each volunteer should have attended'},
 {k:'li',t:'the number of times each volunteer did not attend when they should have attended.'},
 {k:'p',t:'Display the: volunteer ID, volunteer last name, number of times each volunteer should have attended, number of times each volunteer did not attend when they should have attended.'},
 {k:'p',t:'Evidence your queries as screenprints using the given activity3.rtf template. Your screenprints must show:'},
 {k:'li',t:'the DESIGN view of the queries specified that you have created, including fields and criteria'},
 {k:'li',t:'the DATASHEET view of the queries specified that you have created.'},
 {k:'p',t:'Report'},
 {k:'p',t:'(c) Once a month, Narisha celebrates the birthdays of the volunteers who have birthdays in that month. For each month, calculate:'},
 {k:'li',t:'the number of birthdays in that month'},
 {k:'li',t:'the birth date of the oldest volunteer in that month'},
 {k:'li',t:'the birth date of the youngest volunteer in that month.'},
 {k:'p',t:'For each month, display: the month number, the volunteer ID(s), the volunteer name(s), the volunteer telephone number(s), the total number of birthdays in that month, the birth date of the oldest volunteer in that month, the birth date of the youngest volunteer in that month.'},
 {k:'p',t:'The report must fit on one page.'},
 {k:'p',t:'Evidence your report as screenprints using the given activity3.rtf template. Your screenprints must show:'},
 {k:'li',t:'the DESIGN view of the report you have created, including grouping and calculations'},
 {k:'li',t:'the DESIGN view of any queries you have created and used with the report, including fields and criteria'},
 {k:'li',t:'the DATASHEET view of any queries you have created and used with the report.'},
 {k:'p',t:'Save your query and report evidence as a PDF in your folder for submission as activity3_[Registration number #]_[surname]_[first letter of first name]'},
 {k:'p',t:'(d) Save your database report (not a screenprint) as a PDF in your folder for submission as activity3d_[Registration number #]_[surname]_[first letter of first name]'},
 {k:'p',t:'You are advised to spend 40 minutes on this activity. (Total for Activity 3 = 12 marks)'},
 {k:'h2',t:'Activity 4: Structure Testing (20 minutes)'},
 {k:'p',t:'Test the structure and the validation of your relational database using suitable test data (normal, erroneous and extreme as appropriate).'},
 {k:'p',t:'You must provide evidence of table level testing that proves:'},
 {k:'li',t:'1. a record for a new volunteer will not save if the volunteer’s telephone number is not present'},
 {k:'li',t:'2. a record for a new volunteer will not save if the volunteer’s telephone number is not in the correct format'},
 {k:'li',t:'3. a record for a new position will not save if the number of volunteers needed is below the accepted range'},
 {k:'li',t:'4. a record for a new position will not save if the number of volunteers needed is above the accepted range'},
 {k:'li',t:'5. a record assigning a volunteer to a position for a run will not save if the position ID is invalid'},
 {k:'li',t:'6. a record assigning a volunteer to a position for a run will not save if the volunteer ID is invalid.'},
 {k:'p',t:'Complete the test log to show how you have tested the structure and validation of your database using the given activity4.rtf template.'},
 {k:'p',t:'Save your test log as a PDF in your folder for submission as activity4_[Registration number #]_[surname]_[first letter of first name]'},
 {k:'p',t:'You are advised to spend 20 minutes on this activity. (Total for Activity 4 = 6 marks)'},
 {k:'h2',t:'Activity 5: Structure Evaluation (20 minutes)'},
 {k:'p',t:'Evaluate your database structure and validation. You should consider:'},
 {k:'li',t:'how well your database structure has minimised data duplication'},
 {k:'li',t:'how well your database structure meets these requirements: volunteers stand at positions around the park, for example the first bend; attendance of assigned volunteers is recorded after each run; each position needs a specific number of volunteers (the minimum is one and the maximum is three); some runs have a social meet up afterwards.'},
 {k:'p',t:'Save your evaluation as a PDF in your folder for submission as activity5_[Registration number #]_[surname]_[first letter of first name]'},
 {k:'p',t:'You are advised to spend 20 minutes on this activity. (Total for Activity 5 = 6 marks)'},
 {k:'h',t:'Outcomes for submission'},
 {k:'p',t:'You must create a folder to submit your work. The folder should be named according to this naming convention: [Centre #]_[Registration number #]_[surname]_[first letter of first name]_PartA'},
 {k:'p',t:'Example: Joshua Smith with registration number F180542 at centre 12345 would have a folder titled 12345_F180542_Smith_J_PartA'},
 {k:'p',t:'You will need to submit 6 PDF documents and your final database within this folder. The 6 PDF documents should use these file names: activity1, activity2, activity3, activity3d, activity4 and activity5, each followed by _[Registration number #]_[surname]_[first letter of first name]'}
];
const KEYPH_A=[
 {p:'minimises data duplication',why:'Do not store the same fact twice. This is why you split the flat table into several tables.'},
 {p:'accepts the data provided',why:'Your field types and sizes must let all of Figure 1 go in. For example RunID 104 means RunID cannot be an AutoNumber.'},
 {p:'uses recognised naming conventions',why:'Use the same pattern everywhere, for example tblVolunteer for tables and VolunteerID for fields, with no spaces.'},
 {p:'ensures data integrity',why:'Link the tables with relationships and turn on Enforce Referential Integrity.'},
 {p:'all and only the fields shown in Figure 1',why:'Use every field in Figure 1 and do not add extra ones.'},
 {p:'Screen print your database relationships.',why:'The Relationships window is your Activity 1 evidence.'},
 {p:'the volunteer’s telephone number is not present',why:'Presence check: make the telephone number Required.'},
 {p:'not in the correct format',why:'Format check: an Input Mask or a Validation Rule with Like.'},
 {p:'below the accepted range',why:'Range check: the number needed must be 1 to 3.'},
 {p:'if the position ID is invalid',why:'The position must exist. Use a relationship with integrity or a lookup list.'},
 {p:'if the volunteer ID is invalid',why:'The volunteer must exist. Use a relationship with integrity or a lookup list.'},
 {p:'the design view of each table showing the structure',why:'A screenshot of every table in Design View.'},
 {p:'presence check, length check, value lookup or range check, table lookup, format check',why:'You need one screenshot of each of these five kinds of validation.'},
 {p:'start and finish position for the run on 03/05/2025',why:'Query (a): criteria for the position and for the date.'},
 {p:'the number of times each volunteer should have attended',why:'Query (b): count the rows for each volunteer.'},
 {p:'did not attend when they should have attended',why:'Query (b): count the rows where VolunteerAttended is No.'},
 {p:'The report must fit on one page.',why:'Check the report fits on one page before you save it as a PDF.'},
 {p:'not a screenprint',why:'activity3d is the actual report saved as a PDF, not a picture.'},
 {p:'normal, erroneous and extreme',why:'The three kinds of test data you need in the test log.'},
 {p:'table level testing',why:'Test by typing into the tables, not forms.'}
];
const FIG1_H=['Run ID','Run Date','After Run Meet Up?','Volunteer ID','Position ID','Volunteer Last Name','Volunteer Telephone','Position','Position Volunteers Needed','Date Of Birth','Volunteer Attended?'];
const FIG1=[
 [104,'26/04/2025','Yes',1,1,'Charlton','01134960894','Start and finish',3,'01/03/1971','Yes'],
 [104,'26/04/2025','Yes',2,1,'Warwick','01144960661','Start and finish',3,'15/03/1984','Yes'],
 [104,'26/04/2025','Yes',4,1,'Smith','01134960485','Start and finish',3,'06/05/1967','No'],
 [104,'26/04/2025','Yes',6,2,'Taylor','01134960249','First bend',1,'13/05/1972','Yes'],
 [104,'26/04/2025','Yes',7,3,'Bhat','01144960133','Bottom of the hill',2,'15/07/1971','Yes'],
 [104,'26/04/2025','Yes',9,3,'Morris','01164960104','Bottom of the hill',2,'02/05/1972','Yes'],
 [105,'03/05/2025','No',3,1,'Bewick','01144960480','Start and finish',3,'22/08/1993','Yes'],
 [105,'03/05/2025','No',4,2,'Smith','01134960485','First bend',1,'06/05/1967','No'],
 [105,'03/05/2025','No',5,1,'Islam','01154960208','Start and finish',3,'27/07/1970','Yes'],
 [105,'03/05/2025','No',8,3,'Guy','01154960406','Bottom of the hill',2,'27/08/1973','No']
];
function paFigure(){
  return h('div',{class:'card pa-fig'},h('h3',{},'Figure 1: the data Narisha wants to record'),
    h('div',{class:'tblwrap'},h('table',{class:'t',style:'min-width:56rem;font-size:.8rem'},h('caption',{class:'sr-only'},'Figure 1, an extract of the data'),h('thead',{},h('tr',{},...FIG1_H.map(x=>h('th',{},x)))),h('tbody',{},...FIG1.map(r=>h('tr',{},...r.map(v=>h('td',{},String(v)))))))));
}
/* ----- field recognition (names students might choose) ----- */
function paKey(n){
  const k=String(n||'').toLowerCase().replace(/[^a-z]/g,'');
  if(/tel|phone|mobile/.test(k))return 'tel';
  if(/attend/.test(k))return 'attended';
  if(/birth|dob/.test(k))return 'dob';
  if(/lastname|surname/.test(k))return 'lastname';
  if(/needed|required|numberofvol|numvol/.test(k))return 'needed';
  if(/meet/.test(k))return 'meet';
  if(/volunteerid|volid|^volunteer$/.test(k))return 'volid';
  if(/positionid|posid/.test(k))return 'posid';
  if(/^runid|^run$/.test(k))return 'runid';
  if(/date/.test(k))return 'rundate';
  if(/position|posname/.test(k))return 'posname';
  return '';
}
const PA_ALLK=['runid','rundate','meet','volid','posid','lastname','tel','posname','needed','dob','attended'];
function paModel(db){
  db=db||L;
  const T={};const info=Object.values(db.tables).map(t=>({t,keys:t.fields.map(f=>paKey(f.n)),name:t.name}));
  const find=k=>info.find(i=>i.keys.includes(k));
  const run=find('rundate'),vol=find('tel'),pos=find('needed'),link=find('attended');
  return{info,run:run&&run.t,vol:vol&&vol.t,pos:pos&&pos.t,link:link&&link.t};
}
const paFld=(t,k)=>t&&t.fields.find(f=>paKey(f.n)===k);
const paSame=(t,keys)=>{if(!t)return false;const ks=t.fields.map(f=>paKey(f.n));return keys.every(k=>ks.includes(k))&&ks.every(k=>keys.includes(k))&&new Set(ks).size===ks.length};
const paSurr=t=>t&&t.fields.find(f=>f.pk&&f.t==='AutoNumber'&&!paKey(f.n));
function paLinkOK(t){
  if(!t)return false;const sg=paSurr(t);
  const ks=t.fields.filter(f=>f!==sg).map(f=>paKey(f.n));
  const keys=['runid','volid','posid','attended'];
  if(!(keys.every(k=>ks.includes(k))&&ks.every(k=>keys.includes(k))&&new Set(ks).size===ks.length))return false;
  const pk=t.fields.filter(f=>f.pk);
  return sg?(pk.length===1):paPkOK(t,['runid','volid']);
}
const paPkOK=(t,keys)=>{if(!t)return false;const pk=t.fields.filter(f=>f.pk).map(f=>paKey(f.n)).sort().join(',');return pk===keys.slice().sort().join(',')};
function paRowsVal(t,k,r){const f=paFld(t,k);return f?r[f.n]:undefined}
const yn=v=>v===true||/^(yes|true|-1|1)$/i.test(String(v));
function paDataOK(M){
  if(!M.run||!M.vol||!M.pos||!M.link)return{ok:false,why:'All four tables must exist first.'};
  const runs={},vols={},poss={};
  FIG1.forEach(r=>{runs[r[0]]=[r[0],r[1],r[2]==='Yes'];vols[r[3]]=[r[3],r[5],r[6],r[9]];poss[r[4]]=[r[4],r[7],r[8]]});
  const eq=(a,b)=>String(a).trim().toLowerCase()===String(b).trim().toLowerCase();
  const chk=(t,exp,keys,cmp)=>{if(t.rows.length!==Object.keys(exp).length)return false;return Object.values(exp).every(e=>t.rows.some(r=>keys.every((k,i)=>cmp(k)(paRowsVal(t,k,r),e[i]))))};
  const cmp=k=>(a,b)=>k==='meet'||k==='attended'?yn(a)===yn(b):eq(a,b);
  const okRun=chk(M.run,runs,['runid','rundate','meet'],cmp);
  const okVol=chk(M.vol,vols,['volid','lastname','tel','dob'],cmp);
  const okPos=chk(M.pos,poss,['posid','posname','needed'],cmp);
  const lk=FIG1.map(r=>[r[0],r[3],r[4],r[10]==='Yes']);
  const okLink=M.link.rows.length===lk.length&&lk.every(e=>M.link.rows.some(r=>['runid','volid','posid','attended'].every((k,i)=>cmp(k)(paRowsVal(M.link,k,r),e[i]))));
  return{ok:okRun&&okVol&&okPos&&okLink,okRun,okVol,okPos,okLink};
}
/* ----- behaviour tests on a copy of the database ----- */
function paInsert(db,t,vals){
  const o={};t.fields.forEach(f=>{const k=paKey(f.n);let v=vals[k];if(f.t==='AutoNumber')v='';o[f.n]=v===undefined?(f.t==='Yes/No'?false:''):v});
  return commitRecord(db,t.name,o,null);
}
function paTests(){
  const out={};const M=paModel();
  if(!M.vol||!M.pos||!M.link)return{missing:true,M};
  const mk=()=>{const db=clone(L);const m=paModel(db);return{db,m}};
  const nextId=(t,k)=>{const f=paFld(t,k);return t.rows.reduce((x,r)=>Math.max(x,+r[f.n]||0),0)+1};
  const volBase=(m)=>({volid:nextId(m.vol,'volid'),lastname:'Testerson',tel:'01134960000',dob:'01/01/1980'});
  const posBase=(m)=>({posid:nextId(m.pos,'posid'),posname:'Test post',needed:2});
  const volOK=(()=>{const{db,m}=mk();return paInsert(db,m.vol,volBase(m)).ok})();
  out.telOk=volOK;
  out.telMissing=(()=>{const{db,m}=mk();return !paInsert(db,m.vol,Object.assign(volBase(m),{tel:''})).ok})();
  const fmtBad=['abcdefghijk','1234567890','012345678901','0113496089a','011-3496-089'];
  out.telFmt=(()=>fmtBad.every(v=>{const{db,m}=mk();return !paInsert(db,m.vol,Object.assign(volBase(m),{tel:v})).ok}))();
  out.posOk=[1,2,3].every(n=>{const{db,m}=mk();return paInsert(db,m.pos,Object.assign(posBase(m),{needed:n})).ok});
  out.posLow=[0,-1].every(n=>{const{db,m}=mk();return !paInsert(db,m.pos,Object.assign(posBase(m),{needed:n})).ok});
  out.posHigh=[4,10].every(n=>{const{db,m}=mk();return !paInsert(db,m.pos,Object.assign(posBase(m),{needed:n})).ok});
  const fresh=m=>{for(const r of m.run.rows)for(const v of m.vol.rows){const rid=paRowsVal(m.run,'runid',r),vid=paRowsVal(m.vol,'volid',v);if(!m.link.rows.some(x=>String(paRowsVal(m.link,'runid',x))===String(rid)&&String(paRowsVal(m.link,'volid',x))===String(vid)))return{rid,vid}}return{rid:104,vid:1}};
  out.linkOk=(()=>{const{db,m}=mk();const f=fresh(m);const p=paRowsVal(m.pos,'posid',m.pos.rows[0]);return paInsert(db,m.link,{runid:f.rid,volid:f.vid,posid:p,attended:true}).ok})();
  out.badPos=(()=>{const{db,m}=mk();const f=fresh(m);return !paInsert(db,m.link,{runid:f.rid,volid:f.vid,posid:99,attended:true}).ok})();
  out.badVol=(()=>{const{db,m}=mk();const f=fresh(m);const p=paRowsVal(m.pos,'posid',m.pos.rows[0]);return !paInsert(db,m.link,{runid:f.rid,volid:999,posid:p,attended:true}).ok})();
  out.M=M;return out;
}
/* ----- queries and report ----- */
function paQueries(){
  const out=[];
  Object.keys(L.queries).forEach(n=>{const q=L.queries[n];const r=runQuery(q,L);if(r.err)return;const keys=r.cols.map(c=>paKey(String(c).replace(/^[A-Za-z]*\d*:/,'').replace(/^.*\./,'')));out.push({n,q,r,keys})});
  return out;
}
const paCell=(r,i)=>r.rows.map(row=>row[i]);
function paQa(){
  const qs=paQueries();
  const want=['3','5'];
  let best=null;
  qs.forEach(x=>{
    const iv=x.keys.indexOf('volid'),il=x.keys.indexOf('lastname'),ip=x.keys.indexOf('posname');
    if(iv<0||il<0)return;
    const ids=paCell(x.r,iv).map(String).sort().join(',');
    const score=(ids===want.join(',')?4:0)+(ip>=0?1:0)+(x.r.cols.length===3?1:0);
    if(!best||score>best.score)best={x,score,iv,il,ip,ids};
  });
  if(!best)return{found:false};
  const x=best.x;
  const rows=paCell(x.r,best.il).map(String);
  const sortedOk=rows.length>1&&rows.every((v,i)=>i===0||rows[i-1].toLowerCase()<=v.toLowerCase());
  const qSort=x.q.cols.some(c=>c.sort==='Ascending'&&paKey(String(c.f).replace(/^.*\./,'').replace(/^.*:/,''))==='lastname');
  return{found:true,name:x.n,rowsOK:best.ids===want.join(','),colsOK:x.r.cols.length===3&&best.ip>=0,sortOK:sortedOk&&qSort};
}
function paQb(){
  const qs=paQueries();
  const should={1:1,2:1,3:1,4:2,5:1,6:1,7:1,8:1,9:1},missed={1:0,2:0,3:0,4:2,5:0,6:0,7:0,8:1,9:0};
  let best=null;
  qs.forEach(x=>{
    const iv=x.keys.indexOf('volid'),il=x.keys.indexOf('lastname');
    if(iv<0||il<0||x.r.cols.length<4)return;
    const idRows=x.r.rows.map(r=>String(r[iv]));
    if(new Set(idRows).size!==9||idRows.length!==9)return;
    const numCols=x.r.cols.map((c,i)=>i).filter(i=>i!==iv&&i!==il);
    const numVal=(row,i)=>{const v=String(row[i]).trim();return v===''?0:(v==='Yes'?1:parseFloat(v))};
    const colOK=(i,exp)=>x.r.rows.every(row=>numVal(row,i)===exp[+row[iv]]);
    const cs=numCols.some(i=>colOK(i,should)),cm=numCols.some(i=>colOK(i,missed));
    const s=(cs?1:0)+(cm?1:0)+(numCols.length===2?1:0);
    if(!best||s>best.s)best={s,x,cs,cm,cols:x.r.cols.length===4};
  });
  if(!best)return{found:false};
  return{found:true,name:best.x.n,fieldsOK:best.cols,shouldOK:best.cs,missedOK:best.cm};
}
const RPT_EXP=[{m:'3',n:'2',old:'01/03/1971',young:'15/03/1984'},{m:'5',n:'3',old:'06/05/1967',young:'13/05/1972'},{m:'7',n:'2',old:'27/07/1970',young:'15/07/1971'},{m:'8',n:'2',old:'27/08/1973',young:'22/08/1993'}];
function paReport(){
  let best=null;
  Object.keys(L.reports||{}).forEach(n=>{
    const def=L.reports[n];const m=rptModel(def,L);if(m.err||!m.lines.length)return;
    const gl=m.lines.filter(l=>l.band==='groupHeader'||l.band==='groupFooter');
    const sc=(m.groups.length>=4?1:0)+(gl.length?1:0);
    if(!best||sc>best.sc)best={sc,n,def,m};
  });
  if(!best)return{found:false};
  const {m,def,n}=best;
  const R={found:true,name:n,model:m,def};
  const counts=m.groups.map(g=>String(g.count));
  R.group=m.groups.length===4&&counts.join(',')==='2,3,2,2';
  const gtexts=m.lines.filter(l=>l.band==='groupHeader'||l.band==='groupFooter');
  const txt=gtexts.map(l=>l.cells.map(c=>c.text.trim()));
  R.month=RPT_EXP.every(e=>txt.some(cells=>cells.includes(e.m)));
  const det=m.lines.filter(l=>l.band==='detail').map(l=>l.cells.map(c=>c.text.trim()).join('|'));
  R.detail=det.length===9&&['1','2','3','4','5','6','7','8','9'].every(id=>det.some(d=>d.split('|').includes(id)))&&FIG1.every(r=>det.some(d=>d.includes(r[5])&&d.includes(r[6])));
  R.counts=RPT_EXP.every(e=>txt.some(cells=>cells.includes(e.n)));
  R.age=RPT_EXP.every(e=>txt.some(cells=>cells.includes(e.old))&&txt.some(cells=>cells.includes(e.young)));
  R.page=m.pages===1;
  R.usesQuery=!!L.queries[def.recordSource];
  return R;
}
/* ----- evidence ----- */
function paShots(key,slot){const d=PBX.st.docs[key].slots[slot]||{shots:[]};return d.shots.map(id=>PBX.st.ev.shots.find(x=>x.id===id)).filter(Boolean)}
function paEvidA3(qa,qb,rp){
  const has=(slot,pred)=>paShots('a3',slot).some(pred);
  const qd=n=>has('qd',s=>s.kind==='query'&&s.view==='design'&&s.name===n),qs=n=>has('qs',s=>s.kind==='query'&&s.view==='run'&&s.name===n);
  const okQa=qa.found&&qd(qa.name)&&qs(qa.name),okQb=qb.found&&qd(qb.name)&&qs(qb.name);
  const rd=rp.found&&has('rd',s=>s.kind==='report'&&s.view==='design'&&s.name===rp.name);
  const rq=!rp.found||!rp.usesQuery||(rp.def.recordSource===qa.name||rp.def.recordSource===qb.name?(rp.def.recordSource===qa.name?okQa:okQb):(has('rqd',s=>s.kind==='query'&&s.view==='design'&&s.name===rp.def.recordSource)&&has('rqs',s=>s.kind==='query'&&s.view==='run'&&s.name===rp.def.recordSource)));
  return{okQa,okQb,rd,rq};
}
function paEvidA2(M){
  const tbls=Object.keys(L.tables);
  const all=tbls.length>0&&tbls.every(n=>paShots('a2','tables').some(s=>s.kind==='table'&&s.view==='design'&&s.tbl===n));
  const sl=(slot,pred)=>paShots('a2',slot).some(s=>s.kind==='table'&&s.view==='design'&&s.fld&&pred(s.fld,s));
  const pres=sl('presence',f=>!!f.req),len=sl('length',f=>(f.t==='Short Text'&&+f.size>0&&+f.size<255)||/len\s*\(/i.test(f.rule||'')),
   rng=sl('range',f=>(/between|<|>/i.test(f.rule||''))||(f.lookup&&f.lookup.type==='Value List')),
   tl=sl('tlookup',f=>f.lookup&&f.lookup.display==='Combo Box'&&Object.keys(L.tables).some(n=>n.toLowerCase()===String(f.lookup.rowSource||'').trim().toLowerCase())),
   fm=sl('format',f=>!!(f.mask||/like/i.test(f.rule||'')));
  return{all,pres,len,rng,tl,fm};
}
/* ----- scoring ----- */
function pbScoreA(){
  const items=[];const add=(id,act,label,got,max,note,pdf)=>items.push({id,act,label,got:Math.max(0,Math.min(max,got)),max,notes:got<max&&note?[note]:[],pdf});
  const M=paModel();
  const relShot=(PBX.st.docs.a1.slots.rel.shots||[]).map(id=>PBX.st.ev.shots.find(x=>x.id===id)).filter(Boolean).some(s=>s.kind==='rel');
  const noRel=relShot?'':'Put a screenshot of the Relationships window in the Activity 1 document first.';
  const gate=v=>(relShot&&v)?1:0;
  const allKeys=new Set();let extra=0;let sgUsed=false;Object.values(L.tables).forEach(t=>t.fields.forEach(f=>{const k=paKey(f.n);if(k)allKeys.add(k);else if(t===M.link&&f===paSurr(t)&&!sgUsed)sgUsed=true;else extra++}));
  add('p1_fields','a1','All and only the fields in Figure 1',gate(PA_ALLK.every(k=>allKeys.has(k))&&extra===0),1,noRel||(extra?'You have '+extra+' extra field(s). Use only the fields in Figure 1.':'Some fields from Figure 1 are missing: '+PA_ALLK.filter(k=>!allKeys.has(k)).join(', ')+'.'));
  add('p1_run','a1','A run table (RunID, run date, meet up) with RunID as the primary key',gate(paSame(M.run,['runid','rundate','meet'])&&paPkOK(M.run,['runid'])),1,noRel||'One table with only RunID (key), the run date and the meet up field.');
  add('p1_vol','a1','A volunteer table (ID, last name, telephone, date of birth) with the primary key',gate(paSame(M.vol,['volid','lastname','tel','dob'])&&paPkOK(M.vol,['volid'])),1,noRel||'One table with only VolunteerID (key), last name, telephone and date of birth.');
  add('p1_pos','a1','A position table (ID, position, volunteers needed) with the primary key',gate(paSame(M.pos,['posid','posname','needed'])&&paPkOK(M.pos,['posid'])),1,noRel||'One table with only PositionID (key), the position name and the number of volunteers needed.');
  add('p1_link','a1','A linking table for each volunteer at each run, with a combined primary key',gate(paLinkOK(M.link)),1,noRel||'The linking table has RunID, VolunteerID, PositionID and VolunteerAttended. The primary key is RunID and VolunteerID together (or one AutoNumber ID of your own).');
  const names=Object.values(L.tables);
  const okc=n=>/^[A-Za-z][A-Za-z0-9_]*$/.test(n);const pref=names.every(t=>/^tbl_?[A-Z]/.test(t.name))||names.every(t=>/^t_[A-Za-z]/.test(t.name))||names.every(t=>/^[A-Z][A-Za-z0-9]*$/.test(t.name));const nameOK=names.length>=4&&pref&&names.every(t=>okc(t.name)&&t.fields.every(f=>okc(f.n)));
  add('p1_name','a1','Recognised naming conventions (tbl prefix, no spaces)',gate(nameOK),1,noRel||'Name tables like tblVolunteer and fields like VolunteerLastName. No spaces or odd characters.');
  const relOK=(oneT,manyT,k)=>L.rels.find(r=>r.oneT===(oneT&&oneT.name)&&r.manyT===(manyT&&manyT.name)&&paKey(r.oneF)===k&&paKey(r.manyF)===k);
  const r1=relOK(M.run,M.link,'runid'),r2=relOK(M.vol,M.link,'volid'),r3=relOK(M.pos,M.link,'posid');
  add('p1_rel','a1','Three one-to-many relationships linking each table to the linking table',gate(r1&&r2&&r3),1,noRel||'Link RunID, VolunteerID and PositionID from each main table (the ONE side) to the linking table (the MANY side).');
  add('p1_ri','a1','Referential integrity is enforced on every relationship',gate(r1&&r2&&r3&&r1.ri&&r2.ri&&r3.ri),1,noRel||'Edit each relationship and tick Enforce Referential Integrity.');
  /* Activity 2 */
  const T=paTests();const nT=T.missing?'Build the volunteer, position and linking tables first.':'';
  const tm=(c,note)=>T.missing?0:(c?1:0);
  add('p2_tel1','a2','A volunteer with no telephone number will not save',tm(T.telOk&&T.telMissing),1,nT||'Make the telephone field Required = Yes. A valid volunteer must still save.');
  add('p2_tel2','a2','A telephone number in the wrong format will not save',tm(T.telOk&&T.telFmt),1,nT||'Use an Input Mask such as 00000000000 or a Validation Rule Like "01#########". Valid numbers have 11 digits starting 01.');
  add('p2_pos1','a2','The number of volunteers needed below the range will not save',tm(T.posOk&&T.posLow),1,nT||'Validation Rule Between 1 And 3 on the number needed. 1, 2 and 3 must still save.');
  add('p2_pos2','a2','The number of volunteers needed above the range will not save',tm(T.posOk&&T.posHigh),1,nT||'Validation Rule Between 1 And 3 on the number needed.');
  add('p2_pid','a2','An invalid position ID in the linking table will not save',tm(T.linkOk&&T.badPos),1,nT||'Enforce referential integrity on the position relationship, or make PositionID a combo box with Limit To List.');
  add('p2_vid','a2','An invalid volunteer ID in the linking table will not save',tm(T.linkOk&&T.badVol),1,nT||'Enforce referential integrity on the volunteer relationship, or make VolunteerID a combo box with Limit To List.');
  const D=paDataOK(M);
  add('p2_data','a2','All the data from Figure 1 is entered correctly',D.ok?1:0,1,D.why||'Enter every row: runs '+(D.okRun?'✓':'✗')+', volunteers '+(D.okVol?'✓':'✗')+', positions '+(D.okPos?'✓':'✗')+', linking '+(D.okLink?'✓':'✗')+'. Use Paste on the Home tab.');
  const E2=paEvidA2(M);
  const e2n=[E2.all?'':'a Design View screenshot of every table',E2.pres?'':'a presence check example',E2.len?'':'a length check example (Field Size)',E2.rng?'':'a range or value lookup example',E2.tl?'':'a table lookup example (Lookup tab, combo box)',E2.fm?'':'a format check example (Input Mask or Like)'].filter(Boolean);
  add('p2_evid','a2','Evidence: every table in Design View and one example of each validation type',(E2.all&&E2.pres&&E2.len&&E2.rng&&E2.tl&&E2.fm)?1:0,1,'Still needed: '+e2n.join('; ')+'.');
  /* Activity 3 */
  const qa=paQa(),qb=paQb(),rp=paReport();
  const nQa=qa.found?'':'No query for the start and finish position on 03/05/2025 was found. Use tblVolunteer, the linking table and tblPosition.';
  add('q_a1','a3','Query (a): shows only the volunteers for start and finish on 03/05/2025',qa.found&&qa.rowsOK?1:0,1,nQa||'The query must give volunteers 3 (Bewick) and 5 (Islam). Criteria on the position and on the run date.');
  add('q_a2','a3','Query (a): shows only volunteer ID, last name and position',qa.found&&qa.colsOK?1:0,1,nQa||'Show exactly three fields. Untick Show on the criteria-only fields.');
  add('q_a3','a3','Query (a): sorted by volunteer last name',qa.found&&qa.sortOK?1:0,1,nQa||'Sort Ascending on the last name field.');
  const nQb=qb.found?'':'No query for the volunteer list with counts was found. It needs all 9 volunteers.';
  add('q_b1','a3','Query (b): volunteer ID, last name and two calculated counts shown',qb.found&&qb.fieldsOK?1:0,1,nQb||'Show exactly four columns: ID, last name, times should have attended, times did not attend.');
  add('q_b2','a3','Query (b): number of times each volunteer should have attended is right',qb.found&&qb.shouldOK?1:0,1,nQb||'Press Totals (Σ), Group By the ID and last name, Count on a field from the linking table.');
  add('q_b3','a3','Query (b): number of times each volunteer did not attend is right',qb.found&&qb.missedOK?1:0,1,nQb||'A new column: Missed: Sum(IIf([VolunteerAttended]=False,1,0)) with Total set to Expression.');
  const nR=rp.found?'':'No report was found. Use Create, Report Design.';
  add('r_1','a3','Report: grouped by month with ID, name, telephone and month number shown',rp.found&&rp.month&&rp.detail?1:0,1,nR||'Group on =Month([DateOfBirth]) (use a query to give you the month). Show the month number in the group header and the ID, last name and telephone in the Detail.');
  add('r_2','a3','Report: number of birthdays in each month is right (2, 3, 2, 2)',rp.found&&rp.group&&rp.counts?1:0,1,nR||'In the Group Footer add a text box =Count([VolunteerID]).');
  add('r_3','a3','Report: birth date of the oldest and youngest volunteer in each month',rp.found&&rp.age?1:0,1,nR||'Add two text boxes: =Min([DateOfBirth]) for the oldest and =Max([DateOfBirth]) for the youngest.');
  add('r_4','a3','Report: fits on one page',rp.found&&rp.page?1:0,1,nR||'Reduce the spacing or the number of controls so that it is one page.');
  const ex=PBX.st.docs.exported['3d'];
  const pdfOK=!!(ex&&ex.report&&L.reports[ex.report]&&ex.pages===1&&ex.groups===4);
  add('pdf3d','a3','The report itself saved as a PDF (activity3d)',pdfOK?1:0,1,ex?'The saved report must be one page with four months. Save it again after you fix the report.':'Open the report, then External Data, PDF or XPS, and save it as activity3d.','3d');
  const E3=paEvidA3(qa,qb,rp);
  const e3n=[E3.okQa?'':'query (a) Design View and Datasheet View',E3.okQb?'':'query (b) Design View and Datasheet View',E3.rd?'':'the report in Design View',E3.rq?'':'the Design View and Datasheet View of any query used with the report'].filter(Boolean);
  add('e3','a3','Evidence: query and report Design and Datasheet screenshots',(E3.okQa&&E3.okQb&&E3.rd&&E3.rq)?1:0,1,'Still needed: '+e3n.join('; ')+'.');
  /* Activity 4 */
  const ev=PBX.st.ev,rows=PBX.st.docs.a4.rows;
  const tn={1:M.vol,2:M.vol,3:M.pos,4:M.pos,5:M.link,6:M.link};
  const OBJ={1:'a volunteer with no telephone number will not save',2:'a wrong telephone format will not save',3:'a position needing too few volunteers will not save',4:'a position needing too many volunteers will not save',5:'an invalid position ID will not save',6:'an invalid volunteer ID will not save'};
  const SH={1:'the message after trying to save a volunteer with no telephone',2:'the message after a telephone number in the wrong format',3:'the message for a number needed of 0',4:'the message for a number needed of 4',5:'the message for a position ID that does not exist',6:'the message for a volunteer ID that does not exist'};
  const okShot=(o,s)=>s&&s.kind==='table'&&s.view==='data'&&!!s.dialog&&(!tn[o]||s.name===tn[o].name);
  for(let o=1;o<=6;o++){
    const r=rows.find(x=>+x.obj===o&&x.data.trim()&&x.exp.trim()&&okShot(o,ev.shots.find(s=>s.id===+x.shot)));
    add('t4_'+o,'a4','Test '+o+': proves '+OBJ[o],r?1:0,1,'Add a row for requirement '+o+' with test data, the expected result and a screenshot of the datasheet of the right table showing '+SH[o]+'.');
  }
  /* Activity 5 */
  const t=PBX.st.docs.a5.text||'';const has=a=>a.test(t);let g=0;const n5=[];
  const reqn=[/position|first bend|stand/i,/attend/i,/minimum|maximum|range|between|1 (to|and) 3|three/i,/meet ?up|social/i,/run\b|runs/i].filter(has).length;
  g+=reqn>=5?3:reqn>=3?2:reqn>=1?1:0;if(reqn<5)n5.push('cover every requirement (volunteers at positions, attendance, 1 to 3 volunteers, the social meet up)');
  if(/duplicat|redundan|repeat|same (data|information) (twice|again)|once only|stored once/i.test(t))g++;else n5.push('say how well the structure minimises duplication');
  if(/because|this means|which means|so that|therefore/i.test(t)&&t.length>250)g++;else n5.push('give reasons and write a fuller evaluation');
  if(/improve|could|should|however|weakness|limitation|next time|but/i.test(t))g++;else n5.push('say what could be improved');
  add('g5','a5','Evaluation of the structure and validation',g,6,'To earn more: '+n5.join('; ')+'.');
  return{items};
}
function paItems(){return [['p1_fields','a1','All and only the fields in Figure 1',1],['p1_run','a1','A run table (RunID, run date, meet up) with RunID as the primary key',1],['p1_vol','a1','A volunteer table (ID, last name, telephone, date of birth) with the primary key',1],['p1_pos','a1','A position table (ID, position, volunteers needed) with the primary key',1],['p1_link','a1','A linking table for each volunteer at each run, with a combined primary key',1],['p1_name','a1','Recognised naming conventions (tbl prefix, no spaces)',1],['p1_rel','a1','Three one-to-many relationships linking each table to the linking table',1],['p1_ri','a1','Referential integrity is enforced on every relationship',1],
 ['p2_tel1','a2','A volunteer with no telephone number will not save',1],['p2_tel2','a2','A telephone number in the wrong format will not save',1],['p2_pos1','a2','The number of volunteers needed below the range will not save',1],['p2_pos2','a2','The number of volunteers needed above the range will not save',1],['p2_pid','a2','An invalid position ID in the linking table will not save',1],['p2_vid','a2','An invalid volunteer ID in the linking table will not save',1],['p2_data','a2','All the data from Figure 1 is entered correctly',1],['p2_evid','a2','Evidence: every table in Design View and one example of each validation type',1],
 ['q_a1','a3','Query (a): shows only the volunteers for start and finish on 03/05/2025',1],['q_a2','a3','Query (a): shows only volunteer ID, last name and position',1],['q_a3','a3','Query (a): sorted by volunteer last name',1],['q_b1','a3','Query (b): volunteer ID, last name and two calculated counts shown',1],['q_b2','a3','Query (b): number of times each volunteer should have attended is right',1],['q_b3','a3','Query (b): number of times each volunteer did not attend is right',1],['r_1','a3','Report: grouped by month with ID, name, telephone and month number shown',1],['r_2','a3','Report: number of birthdays in each month is right (2, 3, 2, 2)',1],['r_3','a3','Report: birth date of the oldest and youngest volunteer in each month',1],['r_4','a3','Report: fits on one page',1],['pdf3d','a3','The report itself saved as a PDF (activity3d)',1],['e3','a3','Evidence: query and report Design and Datasheet screenshots',1],
 ['t4_1','a4','Test 1: a volunteer with no telephone number will not save',1],['t4_2','a4','Test 2: a wrong telephone format will not save',1],['t4_3','a4','Test 3: too few volunteers needed will not save',1],['t4_4','a4','Test 4: too many volunteers needed will not save',1],['t4_5','a4','Test 5: an invalid position ID will not save',1],['t4_6','a4','Test 6: an invalid volunteer ID will not save',1],['g5','a5','Evaluation of the structure and validation',6]].map(([id,act,label,max])=>({id,act,label,max,pdf:id==='pdf3d'?'3d':undefined}))}
const PA_HOW={
 p1_fields:'Use the normalisation page first. The 11 fields are RunID, RunDate, AfterRunMeetUp, VolunteerID, PositionID, VolunteerLastName, VolunteerTelephone, Position, PositionVolunteersNeeded, DateOfBirth and VolunteerAttended. Do not add any extra fields (no extra ID fields).',
 p1_run:'<b>Create</b>, <b>Table Design</b>. Fields: RunID (Number), RunDate (Date/Time), AfterRunMeetUp (Yes/No). Select RunID and press <b>Primary Key</b>. Press Ctrl+S and call it <code>tblRun</code>. RunID is a Number because the paper gives you the values 104 and 105.',
 p1_vol:'tblVolunteer: VolunteerID (primary key), VolunteerLastName, VolunteerTelephone (Short Text, not Number, so the leading 0 is kept), DateOfBirth (Date/Time).',
 p1_pos:'tblPosition: PositionID (primary key), Position (Short Text), PositionVolunteersNeeded (Number).',
 p1_link:'tblRunVolunteer: RunID, VolunteerID, PositionID (all Number) and VolunteerAttended (Yes/No). Select RunID, press Primary Key, then select VolunteerID and press Primary Key again so both are keys.',
 p1_name:'Start every table name with <code>tbl</code>. Use capital letters for each word (VolunteerLastName). No spaces. Use the same pattern everywhere.',
 p1_rel:'<b>Database Tools</b>, <b>Relationships</b>. Click RunID in tblRun, then click RunID in tblRunVolunteer. In the box that opens press Create. Do the same for VolunteerID and PositionID.',
 p1_ri:'In the Edit Relationships box tick <b>Enforce Referential Integrity</b> before you press Create. Or click the line, press Edit Relationships and tick it.',
 p2_tel1:'Open tblVolunteer in Design View. Click VolunteerTelephone. In Field Properties set <b>Required</b> to Yes.',
 p2_tel2:'Click VolunteerTelephone. Set <b>Input Mask</b> to <code>00000000000</code> (11 digits), or set <b>Validation Rule</b> to <code>Like "01#########"</code> and <b>Validation Text</b> to “Enter 11 digits starting 01”.',
 p2_pos1:'Open tblPosition in Design View. Click PositionVolunteersNeeded. Validation Rule: <code>Between 1 And 3</code>. Validation Text: “Enter 1, 2 or 3.”',
 p2_pos2:'Same rule as the low value: <code>Between 1 And 3</code> stops both 0 and 4.',
 p2_pid:'Enforce referential integrity (tblPosition to tblRunVolunteer). Optionally also set PositionID in tblRunVolunteer to a combo box on the Lookup tab: Row Source tblPosition, Limit To List Yes.',
 p2_vid:'Enforce referential integrity (tblVolunteer to tblRunVolunteer). Optionally set VolunteerID to a combo box on the Lookup tab with Limit To List.',
 p2_data:'Open each table in Datasheet View. Enter the runs, volunteers, positions first, then the linking table. Use <b>Paste</b> on the Home tab: paste one record per line with tabs or commas between the values. Each volunteer and position is entered once only.',
 p2_evid:'Use the camera. Design View of every table. Then one screenshot for each type with the field selected: Required (presence), Field Size such as 11 (length), Between 1 And 3 (range), the Lookup tab with Row Source tblPosition (table lookup), Input Mask (format). Add them in the Document tab.',
 q_a1:'<b>Create</b>, <b>Query Design</b>. Add tblVolunteer, tblRunVolunteer, tblPosition and tblRun. Fields: VolunteerID, VolunteerLastName, Position. Criteria: Position <code>"Start and finish"</code>. Add RunDate with criteria <code>#03/05/2025#</code> and untick Show.',
 q_a2:'Only three columns should show. The RunDate column is only for the criteria, so untick Show.',
 q_a3:'In the VolunteerLastName column set Sort to Ascending.',
 q_b1:'Query Design with tblVolunteer and tblRunVolunteer. Fields: VolunteerID, VolunteerLastName, then two calculated columns.',
 q_b2:'Press Totals (Σ). Group By on VolunteerID and VolunteerLastName. Add VolunteerAttended with Total <b>Count</b>. Rename it Expr: <code>ShouldAttend: VolunteerAttended</code>.',
 q_b3:'Add a column <code>Missed: IIf([VolunteerAttended]=False,1,0)</code> and set its Total to <b>Sum</b>.',
 r_1:'Make a query with the month number: <code>BirthMonth: Month([DateOfBirth])</code> plus VolunteerID, VolunteerLastName, VolunteerTelephone, DateOfBirth. <b>Create</b>, <b>Report Design</b>. In the box on the left choose the query as the Record Source and Group on the expression <code>=Month([DateOfBirth])</code>. Put a text box <code>=Month([DateOfBirth])</code> in the Group Header. Put VolunteerID, VolunteerLastName and VolunteerTelephone text boxes in the Detail.',
 r_2:'In the Group Footer add a text box with <code>=Count([VolunteerID])</code>.',
 r_3:'In the Group Footer add <code>=Min([DateOfBirth])</code> (oldest) and <code>=Max([DateOfBirth])</code> (youngest). Add labels so the reader knows which is which.',
 r_4:'The report has 9 detail rows and 4 groups. It fits on one page. Do not add blank controls.',
 pdf3d:'Open the report. <b>External Data</b> tab, <b>PDF or XPS</b>. Name it activity3d_… and save it in your folder.',
 e3:'Screenshots: Design View and Datasheet View of query (a) and (b); Design View of the report; the Design View and Datasheet View of any query the report uses. Add them in the Document tab.',
 t4_1:'Open the volunteer datasheet. Type a new volunteer with the telephone left empty. Press Enter on the row. When the message shows take a screenshot.',
 t4_2:'Type a telephone number with 10 digits or letters. Take a screenshot of the message. You can add a second test for an extreme value (12 digits).',
 t4_3:'Open the position datasheet. Type 0 for the number needed. Take a screenshot of the message.',
 t4_4:'Type 4 for the number needed. Take a screenshot of the message.',
 t4_5:'Open the linking table datasheet. Use a PositionID that does not exist, such as 99. Take a screenshot of the message.',
 t4_6:'Use a VolunteerID that does not exist, such as 999. Take a screenshot of the message.',
 g5:'Write about duplication, then each requirement: volunteers at positions, attendance, 1 to 3 volunteers needed, the social meet up. Say how well it works, why, and one improvement.'
};
/* ----- documents ----- */
function paSlotDoc(box,key,n,title,slots,extra){
  const d=PBX.st.docs[key];
  box.append(pbDocToolbar(n,title));if(extra)box.append(extra);
  slots.forEach(([k,lab,tpl])=>{
    d.slots[k]=d.slots[k]||{shots:[],note:''};const slot=d.slots[k];
    const note=h('textarea',{class:'inp','aria-label':lab+' notes',style:'min-height:2.6rem;width:100%',placeholder:'Optional notes'});note.value=slot.note||'';note.addEventListener('input',()=>{slot.note=note.value;pbSave()});
    box.append(h('div',{class:'word-slot'},h('b',{},lab),h('div',{class:'a-hint'},tpl),pbSlotShots(slot,renderDrawer),h('div',{class:'m-row'},pbShotPicker(slot,renderDrawer)),note));
  });
}
const PA_DOC={
 a1:box=>paSlotDoc(box,'a1',1,'Activity 1: relationships screenprint (activity1)',[['rel','Database relationships','Open Database Tools, Relationships. Take a screenshot showing all the tables and lines.']]),
 a2:box=>paSlotDoc(box,'a2',2,'Activity 2 evidence (activity2 template)',[['tables','Design View of each table','One screenshot for every table, showing the fields and data types.'],['presence','Validation: presence check','Design View with the field selected and Required = Yes.'],['length','Validation: length check','Design View with the field selected and a Field Size such as 11.'],['range','Validation: value lookup or range check','Design View with a Validation Rule such as Between 1 And 3.'],['tlookup','Validation: table lookup','Design View, Lookup tab, with a Row Source that is a table.'],['format','Validation: format check','Design View with an Input Mask or Like rule.']]),
 a3:box=>paSlotDoc(box,'a3',3,'Activity 3 evidence (activity3 template)',[['qd','Queries: Design View','Design View of query (a) and query (b).'],['qs','Queries: Datasheet View','Datasheet View of query (a) and query (b).'],['rd','Report: Design View','Design View of the report, including the grouping and the calculations.'],['rqd','Queries used with the report: Design View','Design View of any query used with the report (if it is not query (a) or (b)).'],['rqs','Queries used with the report: Datasheet View','Datasheet View of any query used with the report.']],
   h('div',{class:'note'},h('b',{},'Activity 3(d): '),'save the report itself as a PDF. Open the report, choose External Data, PDF or XPS (or press the button): ',h('button',{type:'button',class:'btn sm alt',onclick:()=>exportReportPdf()},'Save the open report as activity3d…'),h('span',{class:'chip '+(PBX.st.docs.exported['3d']?'good':'warn'),style:'margin-left:.5rem'},PBX.st.docs.exported['3d']?'Saved':'Not saved yet'))),
 a4:box=>pbDocLog(box,'a4',4,'Activity 4 test log (activity4 template)'),
 a5:box=>{
  const d=PBX.st.docs.a5;
  box.append(pbDocToolbar(5,'Activity 5 evaluation'),h('p',{class:'note',html:'Write about how well your structure <b>minimises duplication</b> and meets <b>each requirement</b>. Give <b>reasons</b> and say what could be <b>improved</b>.'}));
  const ta=h('textarea',{class:'inp',id:'evalta','aria-label':'Your evaluation',style:'min-height:16rem;width:100%'});ta.value=d.text||'';
  ta.addEventListener('input',()=>{d.text=ta.value;pbSave();if(PBX.mode==='practice')refreshTicks()});
  box.append(h('div',{class:'seg'},...['My structure minimises duplication because each volunteer is stored once, so','Volunteers stand at positions because the linking table has PositionID, which means','Attendance is recorded because the linking table has VolunteerAttended, so','The number of volunteers needed is limited to 1 to 3 by a validation rule, so','The social meet up is stored in tblRun, which means','However, an improvement would be to'].map(s=>h('button',{type:'button',class:'btn quiet sm',onclick:()=>{ta.value+=(ta.value&&!/\s$/.test(ta.value)?' ':'')+s+' ';ta.dispatchEvent(new Event('input'));ta.focus()}},s))),ta);
 }
};
/* ----- the normalisation stage ----- */
const NORM_FIELDS=['RunID','RunDate','AfterRunMeetUp','VolunteerID','PositionID','VolunteerLastName','VolunteerTelephone','Position','PositionVolunteersNeeded','DateOfBirth','VolunteerAttended'];
const NORM_DEP={RunDate:'RunID',AfterRunMeetUp:'RunID',VolunteerLastName:'VolunteerID',VolunteerTelephone:'VolunteerID',DateOfBirth:'VolunteerID',PositionID:'RunID+VolunteerID',Position:'PositionID',PositionVolunteersNeeded:'PositionID',VolunteerAttended:'RunID+VolunteerID'};
const NORM_SPLIT={tblRun:['RunID','RunDate','AfterRunMeetUp'],tblVolunteer:['VolunteerID','VolunteerLastName','VolunteerTelephone','DateOfBirth'],tblPosition:['PositionID','Position','PositionVolunteersNeeded'],tblRunVolunteer:['RunID','VolunteerID','PositionID','VolunteerAttended']};
const NORM_PROBS=[
 ['The run date and meet up are typed again for every volunteer on the same run',true,'Yes. Run 104 appears six times with the same date. If the date is wrong you must fix six rows.'],
 ['Smith’s last name, telephone number and date of birth appear twice',true,'Yes. Volunteer 4 is in two rows. If Smith changes number you must change it twice, or the data disagrees with itself.'],
 ['“Start and finish” and the number 3 are repeated on many rows',true,'Yes. The position name and the number needed repeat each time that position is used.'],
 ['Each cell holds one value and there are no repeating groups',true,'Yes, so the table is already in First Normal Form (1NF). The problems are the repeated facts, which the next two forms deal with.'],
 ['There is a different table for every kind of thing already',false,'No. Everything is in one flat table. Splitting it is what you will do.'],
 ['Deleting the only row for volunteer 8 would also delete the facts about Guy',true,'Yes. This is a deletion problem. Normalising keeps the volunteer in their own table.']
];
function paNormPage(page){
  page.replaceChildren();
  const st=PBX.st.docs.norm;const fb=PBX.mode==='practice';
  const steps=['Look at the flat table','Find the problems','Find the key','Who depends on what?','Split into tables','Keys and links','Your plan'];
  const body=h('div',{class:'stack'});
  const save=()=>pbSave();
  const go=n=>{st.step=Math.max(0,Math.min(steps.length-1,n));save();draw()};
  const nav=()=>h('div',{class:'m-row'},st.step>0?h('button',{type:'button',class:'btn quiet',onclick:()=>go(st.step-1)},'← Back'):null,st.step<steps.length-1?h('button',{type:'button',class:'btn',onclick:()=>go(st.step+1)},'Next →'):null);
  const ok=(b)=>h('span',{class:'chip '+(b?'good':'warn')},b?'✓ Right':'✗ Not quite');
  function draw(){
    body.replaceChildren();
    const s=st.step;
    body.append(h('ol',{class:'norm-steps','aria-label':'Steps'},...steps.map((t,i)=>h('li',{class:i===s?'on':(i<s?'done':'')},h('button',{type:'button',class:'btn quiet sm','aria-current':i===s?'step':false,onclick:()=>go(i)},(i+1)+'. '+t)))));
    if(s===0){
      body.append(h('h3',{},'Step 1: A flat table'),h('p',{},'Figure 1 is a ',h('b',{},'flat table'),': everything is in one big table. Narisha could type it into a spreadsheet. A database does it better. Read the data like a detective. Who are the runs, the volunteers and the positions? What is repeated?'),paFigure(),
        h('p',{class:'note',html:'<b>Normalisation</b> means splitting a flat table into smaller tables so that <b>each fact is stored once</b>. You will do it in six small steps. Nothing on this page is marked, but it gives you your plan for Activities 1 and 2.'}),nav());
    }else if(s===1){
      st.probs=st.probs||{};
      body.append(h('h3',{},'Step 2: Spot the problems'),h('p',{},'Tick every sentence that is true about Figure 1.'));
      const list=h('div',{class:'stack'});
      NORM_PROBS.forEach(([t,tr,why],i)=>{
        const c=h('input',{type:'checkbox',id:'np'+i});c.checked=!!st.probs[i];c.addEventListener('change',()=>{st.probs[i]=c.checked;save();draw()});
        list.append(h('div',{class:'norm-q'},h('label',{class:'opt',for:'np'+i},c,h('span',{},t)),fb&&(st.probs[i]!==undefined)?h('div',{class:'a-hint'},ok(!!st.probs[i]===tr),' ',why):null));
      });
      body.append(list,paFigure(),nav());
    }else if(s===2){
      body.append(h('h3',{},'Step 3: Which fields make each row unique?'),h('p',{},'A ',h('b',{},'primary key'),' is a field (or fields) that gives every row a different value. Which would work for Figure 1?'));
      const opts=[['RunID','RunID on its own',false,'No. Run 104 has six rows.'],['VolunteerID','VolunteerID on its own',false,'No. Volunteer 4 (Smith) is in two rows.'],['RunID+PositionID','RunID and PositionID together',false,'No. Run 104 with position 1 has three volunteers.'],['RunID+VolunteerID','RunID and VolunteerID together',true,'Yes. Each volunteer appears only once at each run. This is a <b>composite key</b> (a key made from two fields).']];
      const box=h('div',{class:'stack'},...opts.map(([v,l,tr,why])=>{const r=h('input',{type:'radio',name:'npk',id:'npk'+v,value:v});r.checked=st.key===v;r.addEventListener('change',()=>{st.key=v;save();draw()});return h('div',{class:'norm-q'},h('label',{class:'opt',for:'npk'+v},r,h('span',{},l)),fb&&st.key===v?h('div',{class:'a-hint'},ok(tr),' ',h('span',{html:why})):null)}));
      body.append(box,paFigure(),nav());
    }else if(s===3){
      st.dep=st.dep||{};
      body.append(h('h3',{},'Step 4: What does each field depend on?'),h('p',{html:'The key of the flat table is <b>RunID + VolunteerID</b>. A field has a <b>partial dependency</b> if it depends on only part of that key. For each field choose the thing that decides its value. Ask: “If I know only this, can I tell the value?”'}));
      const OPT=['','RunID','VolunteerID','PositionID','RunID+VolunteerID'];
      const tb=h('tbody',{});
      NORM_FIELDS.filter(f=>!['RunID','VolunteerID'].includes(f)).forEach(f=>{
        const sel=h('select',{class:'sel','aria-label':'What does '+f+' depend on'},...OPT.map(o=>h('option',{value:o},o||'Choose…')));sel.value=st.dep[f]||'';sel.addEventListener('change',()=>{st.dep[f]=sel.value;save();draw()});
        tb.append(h('tr',{},h('td',{},f),h('td',{},sel),h('td',{},fb&&st.dep[f]?ok(st.dep[f]===NORM_DEP[f]):''),h('td',{class:'a-hint'},fb&&st.dep[f]&&st.dep[f]!==NORM_DEP[f]?'Hint: '+({RunDate:'The date is a fact about the run.',AfterRunMeetUp:'The meet up is a fact about the run.',VolunteerLastName:'A last name belongs to a volunteer.',VolunteerTelephone:'A telephone number belongs to a volunteer.',DateOfBirth:'A birth date belongs to a volunteer.',PositionID:'Smith is at position 1 in run 104 and position 2 in run 105, so it depends on both the run and the volunteer.',Position:'The position name is decided by the position (ID 1 is always Start and finish). This is a <i>transitive</i> dependency: it hangs off PositionID.',PositionVolunteersNeeded:'The number needed is decided by the position.',VolunteerAttended:'Did this volunteer attend this run? You need both.'})[f].replace(/<[^>]+>/g,''):'')));
      });
      body.append(h('div',{class:'tblwrap'},h('table',{class:'t',style:'min-width:0'},h('thead',{},h('tr',{},h('th',{},'Field'),h('th',{},'Depends on'),h('th',{},''),h('th',{},''))),tb)),
        h('p',{class:'note',html:'Anything that depends on <b>only part</b> of the key moves into its own table (this gives <b>2NF</b>). Anything that depends on another non-key field also moves out (this gives <b>3NF</b>).'}),nav());
    }else if(s===4){
      st.split=st.split||{};
      body.append(h('h3',{},'Step 5: Split it into four tables'),h('p',{html:'Fields that depend on the <b>run</b> go in a run table. Fields about the <b>volunteer</b> go in a volunteer table. Fields about the <b>position</b> go in a position table. The rest go in a <b>linking table</b> that says who stood where at which run. Keys are copied into the linking table. Tick where each field goes. A key field is ticked twice: once in its own table and once in the linking table.'}));
      const T=Object.keys(NORM_SPLIT);
      const tb=h('tbody',{});
      NORM_FIELDS.forEach(f=>{
        const cells=T.map(t=>{const c=h('input',{type:'checkbox','aria-label':f+' goes in '+t});const key=f+'|'+t;c.checked=!!st.split[key];c.addEventListener('change',()=>{st.split[key]=c.checked;save();draw()});return h('td',{},c)});
        const mine=T.filter(t=>st.split[f+'|'+t]);const want=T.filter(t=>NORM_SPLIT[t].includes(f));
        tb.append(h('tr',{},h('td',{},f),...cells,h('td',{},fb&&mine.length?ok(mine.join()===want.join()):'')));
      });
      body.append(h('div',{class:'tblwrap'},h('table',{class:'t',style:'min-width:0'},h('caption',{class:'sr-only'},'Which table does each field belong in'),h('thead',{},h('tr',{},h('th',{},'Field'),...T.map(t=>h('th',{},t)),h('th',{},''))),tb)),nav());
    }else if(s===5){
      st.keys=st.keys||{};
      body.append(h('h3',{},'Step 6: Keys and links'),h('p',{},'Choose the primary key of each table and the ONE side of each relationship.'));
      const rows=[['tblRun primary key',['','RunID','RunDate'],'RunID'],['tblVolunteer primary key',['','VolunteerID','VolunteerLastName'],'VolunteerID'],['tblPosition primary key',['','PositionID','Position'],'PositionID'],['tblRunVolunteer primary key',['','RunID + VolunteerID','An extra ID field','VolunteerAttended'],'RunID + VolunteerID'],
        ['RunID: the ONE side is',['','tblRun','tblRunVolunteer'],'tblRun'],['VolunteerID: the ONE side is',['','tblVolunteer','tblRunVolunteer'],'tblVolunteer'],['PositionID: the ONE side is',['','tblPosition','tblRunVolunteer'],'tblPosition']];
      const why={'An extra ID field':'Figure 1 says use “all and only” the fields shown, so the cleanest linking table uses the two keys together. One extra AutoNumber ID is also accepted here, but it is an extra field.'};
      body.append(...rows.map(([l,o,a])=>{const sel=h('select',{class:'sel','aria-label':l},...o.map(x=>h('option',{value:x},x||'Choose…')));sel.value=st.keys[l]||'';sel.addEventListener('change',()=>{st.keys[l]=sel.value;save();draw()});return h('div',{class:'m-row norm-q'},h('label',{style:'min-width:15rem;font-weight:700'},l),sel,fb&&st.keys[l]?h('span',{},ok(st.keys[l]===a),' ',h('span',{class:'a-hint'},why[st.keys[l]]||'')):null)}),
        h('p',{class:'note',html:'The ONE side is the table where the value is unique (the primary key). The MANY side holds the copy (the <b>foreign key</b>). For example one run has many volunteer rows, so tblRun is the ONE side. Turn on <b>Enforce Referential Integrity</b> so the database refuses an ID that does not exist.'}),nav());
    }else{
      const D=(t,keys)=>h('div',{class:'norm-tbl'},h('b',{},t),h('ul',{},...NORM_SPLIT[t].map(f=>h('li',{},(keys.includes(f)?'🔑 ':'')+f+({RunID:' (Number)',RunDate:' (Date/Time)',AfterRunMeetUp:' (Yes/No)',VolunteerID:' (Number)',VolunteerLastName:' (Short Text)',VolunteerTelephone:' (Short Text, Required, 11 digits)',DateOfBirth:' (Date/Time)',PositionID:' (Number)',Position:' (Short Text)',PositionVolunteersNeeded:' (Number, 1 to 3)',VolunteerAttended:' (Yes/No)'})[f]))));
      body.append(h('h3',{},'Step 7: Your plan'),h('p',{},'This is the structure you will build in Access in Activities 1 and 2. The picture below is the plan. Your own choices above are kept.'),
        h('div',{class:'norm-grid'},D('tblRun',['RunID']),D('tblVolunteer',['VolunteerID']),D('tblPosition',['PositionID']),D('tblRunVolunteer',['RunID','VolunteerID'])),
        h('p',{class:'note',html:'<b>Relationships:</b> tblRun (1) ── (∞) tblRunVolunteer, tblVolunteer (1) ── (∞) tblRunVolunteer, tblPosition (1) ── (∞) tblRunVolunteer. All with referential integrity.'}),
        h('p',{class:'note',html:'<b>Why Number, not AutoNumber, for RunID?</b> Figure 1 gives you the values 104 and 105. You cannot type into an AutoNumber. <b>Why is the telephone Short Text?</b> The leading 0 would be lost in a Number.'}),
        h('div',{class:'m-row'},h('button',{type:'button',class:'btn',onclick:()=>{FS.cur=2;FS.setActs(PP.tabs,null);pbShowAct('a1')}},'Start Activity 1 in Access →')),nav());
    }
  }
  page.append(h('div',{class:'pb-page-in single'},h('h2',{id:'pbH',tabindex:'-1'},'Planning: from one flat table to a database'),body));
  draw();
}
function paInit(st){
  const S=k=>({shots:[],note:''});
  st.docs=st.docs||{};const d=st.docs;
  d.a1=d.a1||{slots:{rel:S()}};d.a2=d.a2||{slots:{}};d.a3=d.a3||{slots:{}};d.a4=d.a4||{rows:[]};d.a5=d.a5||{text:''};d.exported=d.exported||{};d.norm=d.norm||{step:0};
  ['rel'].forEach(k=>{d.a1.slots[k]=d.a1.slots[k]||S()});
}
PAPERS.A={id:'A',part:'A',short:'Part A: Narisha’s volunteers (June 2025)',suffix:'PartA',dbName:'partA_database',dbV:26,lock:false,feat:{report:true,form:false,macro:false},pdfs:['1','2','3','3d','4','5'],extraPdfNote:' (activity3d is saved from the report in Access: External Data, PDF or XPS)',
 hlExample:'“minimises data duplication”',brief:BRIEF_A,keyph:KEYPH_A,figure:paFigure,firstWork:2,pageActs:['norm'],pages:{norm:paNormPage},
 tabs:[{id:'brief',label:'1 Read the brief',title:'Read the brief and highlight (10 minutes advised)'},{id:'norm',label:'2 Plan',title:'Plan: normalise the flat table'},{id:'a1',label:'Activity 1',title:'Activity 1: Database relationships (45 minutes)'},{id:'a2',label:'Activity 2',title:'Activity 2: Table structures and validation (45 minutes)'},{id:'a3',label:'Activity 3',title:'Activity 3: Queries and report (40 minutes)'},{id:'a4',label:'Activity 4',title:'Activity 4: Structure testing (20 minutes)'},{id:'a5',label:'Activity 5',title:'Activity 5: Structure evaluation (20 minutes)'},{id:'sub',label:'Save and submit',title:'Save and name your files'}],
 acts:[{id:'a1',title:'Activity 1: Database Relationships Screenprint (45 minutes)',name:'Activity 1: Relationships',heading:'Activity 1:',mins:45,marks:8,pdfs:['1']},{id:'a2',title:'Activity 2: Table Structures and Validation (45 minutes)',name:'Activity 2: Tables and validation',heading:'Activity 2:',mins:45,marks:8,pdfs:['2']},{id:'a3',title:'Activity 3: Queries and Report (40 minutes)',name:'Activity 3: Queries and report',heading:'Activity 3:',mins:40,marks:12,pdfs:['3']},{id:'a4',title:'Activity 4: Structure Testing (20 minutes)',name:'Activity 4: Structure testing',heading:'Activity 4:',mins:20,marks:6,pdfs:['4']},{id:'a5',title:'Activity 5: Structure Evaluation (20 minutes)',name:'Activity 5: Structure evaluation',heading:'Activity 5:',mins:20,marks:6,pdfs:['5']}],
 items:paItems(),how:PA_HOW,docs:PA_DOC,score:pbScoreA,initDocs:paInit,
 objs:[['1','1 Telephone number missing'],['2','2 Telephone wrong format'],['3','3 Volunteers needed too low'],['4','4 Volunteers needed too high'],['5','5 Invalid position ID'],['6','6 Invalid volunteer ID']],
 seed:()=>({v:26,tables:{},rels:[],queries:{},forms:{},reports:{},macros:{},done:{},lock:false,title:'Narisha’s volunteers database (you build it)',dbFile:'partA_database.accdb'}),
 onPdf:o=>{
  const docs=PBX.st.docs;
  winSave({title:'Publish as PDF or XPS',ext:'pdf',typeLabel:'PDF (*.pdf)',suggest:'activity3d',onSave:(f,name)=>{docs.exported['3d']={folder:f,name,report:o.name,pages:o.model.pages,groups:o.model.groups.length,rows:o.model.rows};pbSave();if(PBX.subDraw)PBX.subDraw();pbToast('Report saved as '+name+'.pdf ('+o.model.pages+' page'+(o.model.pages===1?'':'s')+')')}});
 }};
function confirmFs(text,yes){
  const back=h('div',{class:'fs-modal'},h('div',{class:'a-dlg',role:'alertdialog','aria-modal':'true'},h('div',{class:'a-dlgt'},'Please confirm'),h('div',{class:'a-dlgb'},text),h('div',{class:'a-dlgf'},h('button',{type:'button',class:'btn sm','data-primary':'1',onclick:()=>{back.remove();yes()}},'Yes'),h('button',{type:'button',class:'btn sm quiet',onclick:()=>back.remove()},'No'))));
  FS.el.append(back);$('[data-primary]',back).focus();
  back.addEventListener('keydown',e=>{if(e.key==='Escape')back.remove()});
}
/* ===== June 2025 Part B: Narisha's running club (forms, testing, evaluation) ===== */
const BRIEF_RC=[
 {k:'h',t:'Part B Brief'},
 {k:'p',t:'You are advised to spend 10 minutes reading the scenario and the activities you are to complete.'},
 {k:'p',t:'You may make notes and/or highlight information to use in the completion of the documents you need to produce for your activities.'},
 {k:'h2',t:'Scenario'},
 {k:'p',t:'Narisha has partially developed a database that will eventually merge with the database you created in Part A.'},
 {k:'p',t:'The details of runners, runs and results are stored.'},
 {k:'p',t:'Once a year, Narisha analyses the previous year’s statistics including the fastest run time, youngest, oldest and average runner age. Narisha also considers the plan made the previous year and sets a plan for the new year.'},
 {k:'h',t:'Part B'},
 {k:'p',t:'You must complete ALL activities within the Part B. Produce your documents using a computer. Save your documents in your folder ready for submission using the formats and naming conventions indicated.'},
 {k:'h2',t:'Activity 6: Forms (1 hour 10 minutes)'},
 {k:'p',t:'Note'},
 {k:'li',t:'The structure of the tables provided should not be changed in any way, e.g. do not add validation to the tables, do not change data types.'},
 {k:'li',t:'You will only be required to use the tables tblRunner, tblRunningClub, tblRun, tblRunResults, tblEvaluation.'},
 {k:'p',t:'Create an efficient interface that will facilitate database input by producing:'},
 {k:'p',t:'(a) an input form to add a runner.'},
 {k:'li',t:'The form should be ready for data entry.'},
 {k:'li',t:'The surname must be present.'},
 {k:'li',t:'The forename must be present.'},
 {k:'li',t:'The surname must begin with a single upper case letter, followed by no more than 19 lowercase letters.'},
 {k:'li',t:'There should be a combo box to select the running club ID from the running club table.'},
 {k:'li',t:'Valid data should be appended to the runner table, a save message should display and the form should be cleared ready for the next data entry.'},
 {k:'li',t:'A suitable error message should appear where invalid data has been used.'},
 {k:'p',t:'(b) an input form to evaluate the year.'},
 {k:'li',t:'The form must not include validation for any fields.'},
 {k:'li',t:'The form must not include an automated routine to save the data.'},
 {k:'li',t:'When the form opens this information must be automatically generated and displayed in fields on the form:'},
 {k:'li',t:'the year to be evaluated, which is the most recent year in the evaluation table plus one'},
 {k:'li',t:'the fastest run time in the year'},
 {k:'li',t:'the average age of the runners in the year'},
 {k:'li',t:'the age of the youngest runner in the year'},
 {k:'li',t:'the age of the oldest runner in the year'},
 {k:'li',t:'the plan from the previous year.'},
 {k:'li',t:'There must be a field to enter the progress made towards the plan from the previous year and to plan for next year.'},
 {k:'p',t:'Evidence your interface as screenprints using the given activity6.rtf template.'},
 {k:'p',t:'Your screenprints must show:'},
 {k:'li',t:'the DESIGN view and FORM view of all the forms you have created'},
 {k:'li',t:'the DESIGN view of any queries you have created and used with the forms including fields and criteria'},
 {k:'li',t:'the DATASHEET view of any queries you have created and used with the forms'},
 {k:'li',t:'details of any calculations, validation and macros/code you have created and used with the forms.'},
 {k:'p',t:'Ensure sufficient information is provided to allow a competent third party to maintain the database.'},
 {k:'p',t:'Save the evidence of your interface as a PDF in your folder for submission as activity6_[Registration number #]_[surname]_[first letter of first name]'},
 {k:'p',t:'You are advised to spend 1 hour and 10 minutes on this activity. (Total for Activity 6 = 14 marks)'},
 {k:'h2',t:'Activity 7: Interface Testing (20 minutes)'},
 {k:'p',t:'Test the interface of your relational database using suitable test data (normal, erroneous and extreme as appropriate).'},
 {k:'p',t:'You must not add validation to any of the tables.'},
 {k:'p',t:'You must provide evidence of form level testing that proves:'},
 {k:'li',t:'1. the runner input form is ready for data entry when the form opens'},
 {k:'li',t:'2. the surname must be present'},
 {k:'li',t:'3. the forename must be present'},
 {k:'li',t:'4. the surname must begin with a single upper case letter, followed by no more than 19 lower case letters'},
 {k:'li',t:'5. a record will save in the runner table if all the required data is present and valid'},
 {k:'li',t:'6. these details are generated and appear in fields on the evaluation form when the form opens: the year to be evaluated, the fastest run time in the year, the average age of the runners in the year, the age of the youngest runner in the year, the age of the oldest runner in the year, the plan from the previous year.'},
 {k:'p',t:'Complete the test log to show how you have tested your input forms using the given activity7.rtf template.'},
 {k:'p',t:'Save your test log as a PDF in your folder for submission as activity7_[Registration number #]_[surname]_[first letter of first name]'},
 {k:'p',t:'You are advised to spend 20 minutes on this activity. (Total for Activity 7 = 6 marks)'},
 {k:'h2',t:'Activity 8: Interface evaluation (20 minutes)'},
 {k:'p',t:'Evaluate your interface.'},
 {k:'p',t:'You should consider the quality, performance and usability of the interface you have created in terms of how well it ensures:'},
 {k:'p',t:'Runner form'},
 {k:'li',t:'the form should be ready for data entry'},
 {k:'li',t:'the surname must be present'},
 {k:'li',t:'the forename must be present'},
 {k:'li',t:'the surname must begin with a single upper case letter, followed by no more than 19 lowercase letters'},
 {k:'li',t:'there should be a combo box to select the running club ID from the running club table.'},
 {k:'p',t:'Evaluation form'},
 {k:'li',t:'when the form opens this information must be automatically generated and displayed in fields on the form: the year to be evaluated, the fastest run time in the year, the average age of the runners in the year, the age of the youngest runner in the year, the age of the oldest runner in the year, the plan from the previous year'},
 {k:'li',t:'there must be a field to enter the progress made towards the plan from the previous year and to plan for next year.'},
 {k:'p',t:'Save your evaluation as a PDF in your folder for submission as activity8_[Registration number #]_[surname]_[first letter of first name]'},
 {k:'p',t:'You are advised to spend 20 minutes on this activity. (Total for Activity 8 = 6 marks)'},
 {k:'h',t:'Outcomes for submission'},
 {k:'p',t:'You must create a folder to submit your work. The folder should be named according to this naming convention: [Centre #]_[Registration number #]_[surname]_[first letter of first name]_PartB'},
 {k:'p',t:'Example: Joshua Smith with registration number F180542 at centre 12345 would have a folder titled 12345_F180542_Smith_J_PartB'},
 {k:'p',t:'You will need to submit 3 PDF documents and your final database within this folder. The 3 PDF documents should use these file names: activity6_[Registration number #]_[surname]_[first letter of first name], activity7_[Registration number #]_[surname]_[first letter of first name], activity8_[Registration number #]_[surname]_[first letter of first name]'}
];
const KEYPH_RC=[
 {p:'The structure of the tables provided should not be changed',why:'A warning. Do not add validation or change data types in the tables. Do all your checking on the forms.'},
 {p:'The form should be ready for data entry.',why:'The runner form must open on a blank new record. Think Data Entry.'},
 {p:'The surname must be present.',why:'A required value. A blank surname must not be saved.'},
 {p:'The forename must be present.',why:'A required value. A blank forename must not be saved.'},
 {p:'begin with a single upper case letter, followed by no more than 19 lowercase letters',why:'This is the pattern for the surname. A capital first, then up to 19 small letters. The most letters allowed is 20.'},
 {p:'combo box to select the running club ID',why:'A drop-down list. Its list comes from tblRunningClub.'},
 {p:'a save message should display and the form should be cleared',why:'After a valid save show a message, then go to a new blank record.'},
 {p:'A suitable error message',why:'A custom message that tells the user how to fix the data. Not the default Access message.'},
 {p:'must not include validation for any fields',why:'The opposite instruction for form (b). Do not add validation there.'},
 {p:'must not include an automated routine to save the data',why:'Do not use a macro to save on form (b).'},
 {p:'the most recent year in the evaluation table plus one',why:'A calculation: the biggest YearID in tblEvaluation, plus 1. Try DMax.'},
 {p:'the fastest run time in the year',why:'The smallest time in the year being evaluated. A query with Min.'},
 {p:'the average age of the runners in the year',why:'A query with Avg of the ages. Work out age from the date of birth.'},
 {p:'the age of the youngest runner in the year',why:'The smallest age. Use Min.'},
 {p:'the age of the oldest runner in the year',why:'The largest age. Use Max.'},
 {p:'the plan from the previous year',why:'Look up the Plan for the latest YearID in tblEvaluation. Try DLookup.'},
 {p:'the DESIGN view and FORM view of all the forms',why:'Evidence you must include for every form.'},
 {p:'the DESIGN view of any queries',why:'Evidence of the query design, with fields and criteria.'},
 {p:'the DATASHEET view of any queries',why:'Evidence that the query gives the right results.'},
 {p:'details of any calculations, validation and macros/code',why:'Show the Property Sheet and the Macro Builder so someone else could maintain it.'},
 {p:'normal, erroneous and extreme',why:'The three kinds of test data you need in the test log.'},
 {p:'form level testing',why:'Test using the forms, not the tables.'}
];
function rcSeed(){
  const F=(n,t,pk)=>({n,t,pk:!!pk,req:false,rule:'',msg:'',size:'',def:'',desc:'',fmt:'',mask:'',idx:'',lookup:null});
  const T={};
  T.tblRunningClub={name:'tblRunningClub',fields:[F('RunningClubID','AutoNumber',1),F('RunningClubName','Short Text')],rows:Object.keys(CLUBS).map(k=>({RunningClubID:+k,RunningClubName:CLUBS[k]}))};
  T.tblRunner={name:'tblRunner',fields:[F('RunnerID','AutoNumber',1),F('RunnerDOB','Date/Time'),F('RunningClubID','Number'),F('RunnerSurname','Short Text'),F('RunnerForename','Short Text')],rows:RUNNERS.map(r=>({RunnerID:r[0],RunnerDOB:dmy(r[1]),RunningClubID:r[4],RunnerSurname:r[2],RunnerForename:r[3]}))};
  T.tblRun={name:'tblRun',fields:[F('RunID','AutoNumber',1),F('RunDate','Date/Time'),F('AfterRunMeet','Yes/No')],rows:RC.runs.map(r=>({RunID:r[0],RunDate:r[1],AfterRunMeet:!!r[2]}))};
  T.tblRunResults={name:'tblRunResults',fields:[F('RunID','Number',1),F('RunnerID','Number',1),F('RunnerTime','Date/Time')],rows:RC.res.map(r=>({RunID:r[0],RunnerID:r[1],RunnerTime:r[2]}))};
  T.tblEvaluation={name:'tblEvaluation',fields:[F('YearID','Number',1),F('AgeYoungestRunner','Number'),F('AgeOldestRunner','Number'),F('AverageAge','Number'),F('Plan','Long Text')],rows:EXTRA.ev.map(r=>({YearID:r[0],AgeYoungestRunner:r[1],AgeOldestRunner:r[2],AverageAge:r[3],Plan:r[4]}))};
  return{v:25,tables:T,rels:[
    {oneT:'tblRunningClub',oneF:'RunningClubID',manyT:'tblRunner',manyF:'RunningClubID',ri:true},
    {oneT:'tblRunner',oneF:'RunnerID',manyT:'tblRunResults',manyF:'RunnerID',ri:true},
    {oneT:'tblRun',oneF:'RunID',manyT:'tblRunResults',manyF:'RunID',ri:true}],queries:{},forms:{},reports:{},macros:{},done:{},lock:true};
}

/* ----- harness: the runner form ----- */
const RC_OKNAMES=['Smith','A','Abcdefghijklmnopqrst'];
function rcAttempt(def,o){
  const msgs=[];const rt=pbMakeRT(def,msgs);
  const sn=pbCtlBound(rt,'RunnerSurname'),fn=pbCtlBound(rt,'RunnerForename'),cl=pbCtlBound(rt,'RunningClubID'),dob=pbCtlBound(rt,'RunnerDOB');
  const out={saved:false,msgs,custom:false,cleared:false,rt};
  const before=pbCnt(rt,'tblRunner');
  const set=(c,v)=>{if(!c||v===null)return true;const r=rt.setControl(c.name,String(v));if(!r.ok){out.rejected=true;out.msg=r.msg;if(r.custom)out.custom=true;return false}return true};
  let club=o.club;
  if(club===undefined&&cl){if(cl.type==='combo'){const L2=rt.comboList(cl);const row=L2.rows[0];club=row?rt.comboDisplayCols(cl).map(i=>fmtv(row[i])).join(' '):'1'}else club='1'}
  if(!set(sn,o.sn)||!set(fn,o.fn)||!set(cl,club)||!set(dob,o.dob===undefined?'15/03/1990':o.dob)){return out}
  let r={ok:true};
  const btns=rt.def.controls.filter(c=>c.type==='button');
  for(const b of btns){rt.runControlEvent(b,'onClick');if(pbCnt(rt,'tblRunner')>before)break}
  if(pbCnt(rt,'tblRunner')===before)r=rt.save();
  out.saved=pbCnt(rt,'tblRunner')>before;
  if(!out.saved){if(r&&r.msg){out.msg=r.msg;if(msgs.length===0)msgs.push(r.msg)}}
  else{
    const shown=rt.def.controls.filter(c=>c.type!=='label'&&c.type!=='button').map(c=>rt.display(c));
    out.cleared=rt.isNew&&shown.every(v=>v===''||v==null);
  }
  return out;
}
function rcErrMsgOK(a){return !a.saved&&(a.custom||(a.msgs.length>0&&a.msgs.some(m=>!/prohibited by the validation rule|You must enter a value|Index or primary key/i.test(m))))}
function rcCheckRunner(){
  const f=pbFindForm(rt=>pbCtlBound(rt,'RunnerSurname')&&pbCtlBound(rt,'RunnerForename'));
  if(!f)return{found:false};
  const R={found:true,name:f.name,def:f.def};
  const rt0=pbMakeRT(f.def,[]);R.ready=rt0.isNew===true;
  const good=rcAttempt(f.def,{sn:'Smith',fn:'Jane'});
  R.valid=good.saved;R.validMsg=good.msgs.length>0;R.cleared=good.cleared;
  const noS=rcAttempt(f.def,{sn:'',fn:'Jane'}),noF=rcAttempt(f.def,{sn:'Smith',fn:''});
  R.snBlocked=!noS.saved;R.fnBlocked=!noF.saved;R.snMsg=rcErrMsgOK(noS);R.fnMsg=rcErrMsgOK(noF);
  const bad=['smith','1mith','Smith1','Abcdefghijklmnopqrstu'].map(n=>rcAttempt(f.def,{sn:n,fn:'Jane'}));
  const okn=RC_OKNAMES.map(n=>rcAttempt(f.def,{sn:n,fn:'Jane'}));
  R.patBlocked=bad.every(a=>!a.saved);R.patOk=okn.every(a=>a.saved);R.patMsg=bad.every(rcErrMsgOK);
  R.patCase=!rcAttempt(f.def,{sn:'SMith',fn:'Jane'}).saved;
  const cl=pbCtlBound(rt0,'RunningClubID');
  R.combo=!!(cl&&cl.type==='combo'&&rt0.comboList(cl).rows.length>=3&&/tblRunningClub/i.test(cl.rowSource||''));
  return R;
}
/* ----- harness: the evaluation form ----- */
function rcTruth(){
  const run={};L.tables.tblRun.rows.forEach(r=>run[r.RunID]=r.RunDate);
  const dob={};L.tables.tblRunner.rows.forEach(r=>dob[r.RunnerID]=r.RunnerDOB);
  const year=Math.max(...L.tables.tblEvaluation.rows.map(r=>+r.YearID))+1;
  const ids=new Set();const times=[];const atRun=[];
  const age=(d,y,m,dd)=>{const p=pDate(d);const Y=Math.floor(p/10000),M=Math.floor(p/100)%100,D=p%100;let a=y-Y;if(m<M||(m===M&&dd<D))a--;return a};
  L.tables.tblRunResults.rows.forEach(x=>{const d=run[x.RunID];if(!d)return;const p=pDate(d);if(Math.floor(p/10000)!==year)return;ids.add(x.RunnerID);times.push(x.RunnerTime);atRun.push(age(dob[x.RunnerID],Math.floor(p/10000),Math.floor(p/100)%100,p%100))});
  const A=[],B=[],C=[];
  ids.forEach(i=>{A.push(age(dob[i],year,12,31));B.push(year-Math.floor(pDate(dob[i])/10000));C.push(age(dob[i],year,1,1))});
  const T=age;const now=new Date();const D=[...ids].map(i=>age(dob[i],now.getFullYear(),now.getMonth()+1,now.getDate()));
  const avg=a=>a.reduce((x,y)=>x+y,0)/a.length;
  const sets=[A,B,C,atRun,D].filter(a=>a.length);
  const secs=t=>{const p=String(t).split(':').map(Number);return p.length===3?p[0]*3600+p[1]*60+p[2]:p[0]*60+p[1]};
  const fast=times.slice().sort((a,b)=>secs(a)-secs(b))[0];
  const plan=L.tables.tblEvaluation.rows.slice().sort((a,b)=>b.YearID-a.YearID)[0].Plan;
  return{year,fast,fastSecs:secs(fast),secs,planKey:String(plan).replace(/\s+/g,' ').slice(0,36),
    minLo:Math.min(...sets.map(a=>Math.min(...a)))-1,minHi:Math.max(...sets.map(a=>Math.min(...a)))+1,
    maxLo:Math.min(...sets.map(a=>Math.max(...a)))-1,maxHi:Math.max(...sets.map(a=>Math.max(...a)))+1,
    avgLo:Math.min(...sets.map(avg))-1,avgHi:Math.max(...sets.map(avg))+1,n:ids.size};
}
function rcCheckEval(){
  const truth=rcTruth();
  const f=pbFindForm(rt=>!pbCtlBound(rt,'RunnerSurname')&&(/tblEvaluation/i.test(rt.def.recordSource||'')||rt.def.controls.some(c=>c.type!=='label'&&c.type!=='button'&&rt.display(c)===String(truth.year))));
  if(!f)return{found:false,truth};
  const def=f.def;const json=JSON.stringify(def);
  const R={found:true,name:f.name,truth,def};
  R.noValid=!def.controls.some(c=>(c.validationRule||'').trim())&&!/"SaveRecord"/.test(json)&&!(def.events&&def.events.beforeUpdate);
  const rt=pbMakeRT(def,[]);
  const ctl=def.controls.filter(c=>c.type!=='label'&&c.type!=='button');
  const disp=ctl.map(c=>String(rt.display(c)).trim());
  R.year=disp.some(d=>d===String(truth.year));
  R.fast=disp.some(d=>/^\d{1,2}:\d{2}(:\d{2})?$/.test(d)&&truth.secs(d)===truth.fastSecs);
  const nums=disp.map(d=>parseFloat(d)).filter(x=>!isNaN(x)&&x!==truth.year);
  R.youngest=nums.some(v=>v>=truth.minLo&&v<=truth.minHi);
  R.oldest=nums.some(v=>v>=truth.maxLo&&v<=truth.maxHi);
  R.average=nums.some(v=>v>=truth.avgLo&&v<=truth.avgHi);
  R.plan=disp.some(d=>d.replace(/\s+/g,' ').includes(truth.planKey));
  const ed=ctl.filter(c=>!rt.isCalc(c)&&c.enabled!==false&&!c.locked&&(c.type==='textbox'));
  R.entry=ed.some(c=>{const r=rt.setControl(c.name,'Test progress');return r.ok});
  const all=JSON.stringify(def)+JSON.stringify(L.queries);
  R.usesQuery=/qry|select/i.test(json)||Object.keys(L.queries).length>0&&/DLookup|DMin|DMax|DAvg/i.test(json);
  return R;
}
function rcEvid(w,R){
  const D=PBX.st.docs.a6[w];const ev=PBX.st.ev;
  const shots=k=>((D.slots[k]||{shots:[]}).shots).map(id=>ev.shots.find(x=>x.id===id)).filter(Boolean);
  const name=D.name;
  const views=!!name&&shots('form').some(s=>s.kind==='form'&&s.view==='view'&&s.name===name)&&shots('design').some(s=>s.kind==='form'&&s.view==='design'&&s.name===name);
  const details=shots('details').some(s=>(s.props&&s.kind==='form')||s.macro||(s.kind==='query'&&s.view==='design'));
  const qd=shots('qd').some(s=>s.kind==='query'&&s.view==='design'),qs=shots('qs').some(s=>s.kind==='query'&&s.view==='run');
  return{views,details,qd,qs,name};
}
function pbScoreRC(){
  const items=[];const add=(id,act,label,got,max,note)=>items.push({id,act,label,got:Math.max(0,Math.min(max,got)),max,notes:got<max&&note?[note]:[]});
  const A=rcCheckRunner(),B=rcCheckEval();
  const nA=A.found?'':'No runner form was found. Create a form on tblRunner with controls for RunnerSurname, RunnerForename and RunningClubID.';
  add('rr1','a6','Runner form: ready for data entry when it opens',A.found&&A.ready?1:0,1,nA||'Make the form open on a blank new record (Form property Data Entry = Yes).');
  add('rr2','a6','Runner form: surname and forename must be present (with a message)',A.found&&A.snBlocked&&A.fnBlocked&&A.snMsg&&A.fnMsg?1:0,1,nA||'A blank surname and a blank forename must each be stopped with your own message. Use Validation Rule Is Not Null with Validation Text, or a Before Update macro.');
  add('rr3','a6','Runner form: surname is one capital letter then up to 19 small letters',A.found&&A.patBlocked&&A.patOk?1:0,1,nA||'Valid: Smith, A and a 20-letter name. Invalid: smith, 1mith, Smith1 and a 21-letter name. Access “Like” ignores capitals, so use Asc(Left([RunnerSurname],1)) between 65 and 90 for the capital, Like "?[a-z]*" for the rest and Len(...)<=20.');
  add('rr4','a6','Runner form: combo box lists the running clubs from tblRunningClub',A.found&&A.combo?1:0,1,nA||'Add a Combo Box with Control Source RunningClubID and Row Source tblRunningClub. Column Count 2, Column Widths 0;3.');
  add('rr5','a6','Runner form: valid data is saved, a message shows and the form is cleared',A.found&&A.valid&&A.validMsg&&A.cleared?1:0,1,nA||(A.valid?(A.validMsg?'After the record is saved the form must go to a new blank record. Add GoToRecord New after SaveRecord.':'Show a message after saving (MessageBox).'):'A valid record did not save. Check your controls.'));
  add('rr6','a6','Runner form: suitable error messages for invalid data',A.found&&A.snMsg&&A.fnMsg&&A.patMsg?1:0,1,nA||'Each bad entry needs its own helpful message, not the standard Access message. Set Validation Text, or use MessageBox in a macro.');
  const nB=B.found?'':'No evaluation form was found. Create a form on tblEvaluation (or with calculated fields) that shows the year, fastest time, ages and the plan.';
  add('re1','a6','Evaluation form: no validation and no automated save',B.found&&B.noValid?1:0,1,nB||'Form (b) must not have validation rules or a SaveRecord macro.');
  add('re2','a6','Evaluation form: year to evaluate (latest year plus one) shows automatically',B.found&&B.year?1:0,1,nB||'A text box with Control Source =DMax("YearID","tblEvaluation")+1 should show '+B.truth.year+'.');
  add('re3','a6','Evaluation form: fastest run time in the year shows',B.found&&B.fast?1:0,1,nB||'Build a query with RunDate and RunnerTime, criteria Year([RunDate]) = the year, Total row Min on RunnerTime. Show it with DLookup.');
  add('re4','a6','Evaluation form: average, youngest and oldest age show',B.found&&B.youngest&&B.oldest&&B.average?1:0,1,nB||'Add an Age field to a query, for example DateDiff("yyyy",[RunnerDOB],[RunDate]). Use Min, Max and Avg. Show all three on the form.');
  add('re5','a6','Evaluation form: previous plan shows and there is a field to type the new progress and plan',B.found&&B.plan&&B.entry?1:0,1,nB||(B.plan?'Add an editable text box for the progress and the new plan.':'Show the last plan with =DLookup("Plan","tblEvaluation","YearID=2024") or DMax to find the latest year.'));
  const eA=A.found?rcEvid('a',A):{views:false,details:false},eB=B.found?rcEvid('b',B):{views:false,details:false,qd:false,qs:false};
  add('rev1','a6','Evidence: runner form in Form View and Design View',eA.views?1:0,1,'Take screenshots (📷) of the runner form in Form View and in Design View. Add them in the Document tab for form (a) and choose which form it is.');
  const qOK=!B.usesQuery||(eB.qd&&eB.qs);
  add('rev2','a6','Evidence: evaluation form views and any queries (Design and Datasheet)',eB.views&&qOK?1:0,1,'For the evaluation form add Form View and Design View screenshots'+(B.usesQuery?', and the Design View and Datasheet View of each query you used':'')+'.');
  add('rev3','a6','Evidence: calculations, validation and macros shown',(eA.details&&(!B.found||eB.details))?1:0,1,'Show how it works so someone else could maintain it: a screenshot with the Property Sheet or Macro Builder open for each form.');
  /* Activity 7 */
  const ev=PBX.st.ev,rows=PBX.st.docs.a7.rows;
  const rname=A.found?A.name:'',ename=B.found?B.name:'';
  const okShot=(o,s)=>{
    if(!s)return false;
    if(o===1)return s.kind==='form'&&s.view==='view'&&s.isNew&&(!rname||s.name===rname);
    if(o===2||o===3||o===4)return !!s.dialog&&s.kind==='form'&&s.view==='view';
    if(o===5)return !!s.dialog&&s.kind==='form'&&s.view==='view';
    if(o===6)return s.kind==='form'&&s.view==='view'&&(!ename||s.name===ename)&&s.text.includes(String(B.truth?B.truth.year:2025))&&(!B.truth||s.text.replace(/\s+/g,' ').includes(B.truth.planKey.slice(0,20)));
    return false;
  };
  const OBJ={1:'the runner form is ready for data entry',2:'the surname must be present',3:'the forename must be present',4:'the surname pattern is checked',5:'a valid record saves',6:'the evaluation form shows the year, time, ages and plan'};
  const SH={1:'the runner form open on a blank record',2:'the message when the surname is empty',3:'the message when the forename is empty',4:'the message when the surname is wrong (for example smith)',5:'the save message after valid data',6:'the evaluation form with all the values showing'};
  for(let o=1;o<=6;o++){
    const r=rows.find(x=>+x.obj===o&&x.data.trim()&&x.exp.trim()&&okShot(o,ev.shots.find(s=>s.id===+x.shot)));
    add('g7_'+o,'a7','Test '+o+': proves '+OBJ[o],r?1:0,1,'Add a row for requirement '+o+' with test data, the expected result and a screenshot that shows '+SH[o]+'.');
  }
  /* Activity 8 */
  const t=PBX.st.docs.a8.text||'';const has=a=>a.test(t);let g8=0;const n8=[];
  const rn=[/ready|data entry|blank|new record/i,/surname/i,/forename|first name/i,/capital|upper|lower|letter|pattern|19|20/i,/combo|running club|list/i].filter(has).length;
  const en=[/year|most recent|latest|plus one|\+ ?1|2025/i,/fastest|time/i,/average|youngest|oldest|age/i,/plan|progress|enter|field/i].filter(has).length;
  g8+=rn>=5?2:rn>=3?1:0;if(rn<5)n8.push('cover every point about the runner form (data entry, surname, forename, the capital-letter pattern, the combo box)');
  g8+=en>=4?2:en>=2?1:0;if(en<4)n8.push('cover every point about the evaluation form (the year, fastest time, ages, the plan and the entry field)');
  if(/because|this means|which means|so that|therefore/i.test(t)&&t.length>250)g8++;else n8.push('give reasons and write a fuller evaluation (quality, performance and usability)');
  if(/improve|could|should|however|weakness|limitation|next time/i.test(t))g8++;else n8.push('say what could be improved or where it is weak');
  add('g8','a8','Evaluation of both forms',g8,6,'To earn more: '+n8.join('; ')+'.');
  return{items};
}
const RC_HOW={
 rr1:'Open the form in Design View. In the Property Sheet choose <b>Form</b> in “Selected object”. Set <b>Record Source</b> to tblRunner first. On the <b>Data</b> tab set <b>Data Entry</b> to Yes.',
 rr2:'Select the surname text box (Control Source RunnerSurname). On the Data tab type <code>Is Not Null</code> in <b>Validation Rule</b> and “Enter a surname.” in <b>Validation Text</b>. Do the same for the forename.',
 rr3:'Select the surname text box. Validation Rule (one long line): <code>Asc(Left([RunnerSurname],1))>=65 And Asc(Left([RunnerSurname],1))<=90 And Len([RunnerSurname])<=20 And Mid([RunnerSurname],2) Not Like "*[!a-z]*" And StrComp(Mid([RunnerSurname],2),LCase(Mid([RunnerSurname],2)),0)=0</code>. In words: first letter is A to Z (ASCII 65 to 90), at most 20 letters, no digits or symbols after the first letter, and the rest are lowercase. Access <b>Like</b> ignores capitals, so StrComp with 0 (binary) is needed. Validation Text: “The surname must start with a capital letter followed by up to 19 small letters.”',
 rr4:'Add a <b>Combo Box</b> with Control Source RunningClubID. Row Source: <code>tblRunningClub</code>. Column Count 2. Column Widths <code>0;3</code>. Bound Column 1. Limit To List: Yes.',
 rr5:'Add a <b>Button</b>. Property Sheet, Event tab, On Click, …, Macro Builder: <b>SaveRecord</b>, then <b>MessageBox</b> (“Runner saved”), then <b>GoToRecord</b> with Record = New. The form is then clear for the next runner.',
 rr6:'Every validation rule needs Validation Text, and every macro check needs a MessageBox that says what is wrong and how to fix it.',
 re1:'Do not add any Validation Rule to the controls and do not add SaveRecord to a macro on form (b).',
 re2:'Add a text box with Control Source <code>=DMax("YearID","tblEvaluation")+1</code>. Name it txtYear.',
 re3:'<b>Create</b>, <b>Query Design</b>. Add tblRun, tblRunResults. Add RunDate and RunnerTime. In the RunDate column type <code>Year([RunDate])</code> and under Criteria <code>=DMax("YearID","tblEvaluation")+1</code>, untick Show. Press Totals (Σ). Group By on RunDate, Min on RunnerTime. Save as qryFastest. On the form: <code>=DLookup("MinOfRunnerTime","qryFastest")</code>.',
 re4:'Query Design with tblRun, tblRunResults, tblRunner. Field 1: <code>Age: DateDiff("yyyy",[RunnerDOB],[RunDate])</code> with Totals Min, then Max, then Avg (three columns using the same expression). Criteria <code>Year([RunDate])=DMax("YearID","tblEvaluation")+1</code> as a Where column. On the form use DLookup for each.',
 re5:'Text box for the plan: <code>=DLookup("Plan","tblEvaluation","YearID=" & DMax("YearID","tblEvaluation"))</code>. Add one more text box (not calculated) for the progress and the new plan.',
 rev1:'Screenshots of the runner form in Form View and in Design View. Add them in the <b>Document</b> tab for form (a).',
 rev2:'Screenshots of the evaluation form in Form View and Design View, plus the Design View and Datasheet View of each query you made.',
 rev3:'Take a screenshot with the Property Sheet open on a calculated text box, and one with the Macro Builder open on the button.',
 g7_1:'Open the runner form in Form View. Do not type anything. Take a screenshot. Test data: “none, form just opened”.',
 g7_2:'Leave the surname empty, fill the rest, and save. When the message shows take a screenshot.',
 g7_3:'Leave the forename empty, fill the rest, and save. When the message shows take a screenshot.',
 g7_4:'Type a surname that starts with a small letter, such as smith, and save. When the message shows take a screenshot. You can add a second test with a 21 letter name (extreme).',
 g7_5:'Fill in valid data (Smith, Jane, a club) and save. When the save message shows take a screenshot.',
 g7_6:'Open the evaluation form in Form View. Take a screenshot with all the values showing.',
 g8:'Write about each point for both forms. Say how well it works, why, and one improvement. Use evidence from your testing.'
};
function rcItems(){return [['rr1','a6','Runner form: ready for data entry when it opens',1],['rr2','a6','Runner form: surname and forename must be present (with a message)',1],['rr3','a6','Runner form: surname is one capital letter then up to 19 small letters',1],['rr4','a6','Runner form: combo box lists the running clubs from tblRunningClub',1],['rr5','a6','Runner form: valid data is saved, a message shows and the form is cleared',1],['rr6','a6','Runner form: suitable error messages for invalid data',1],
 ['re1','a6','Evaluation form: no validation and no automated save',1],['re2','a6','Evaluation form: year to evaluate (latest year plus one) shows automatically',1],['re3','a6','Evaluation form: fastest run time in the year shows',1],['re4','a6','Evaluation form: average, youngest and oldest age show',1],['re5','a6','Evaluation form: previous plan shows and there is a field to type the new progress and plan',1],
 ['rev1','a6','Evidence: runner form in Form View and Design View',1],['rev2','a6','Evidence: evaluation form views and any queries (Design and Datasheet)',1],['rev3','a6','Evidence: calculations, validation and macros shown',1],
 ['g7_1','a7','Test 1: the runner form is ready for data entry',1],['g7_2','a7','Test 2: the surname must be present',1],['g7_3','a7','Test 3: the forename must be present',1],['g7_4','a7','Test 4: the surname pattern is checked',1],['g7_5','a7','Test 5: a valid record saves',1],['g7_6','a7','Test 6: the evaluation form shows the year, time, ages and plan',1],
 ['g8','a8','Evaluation of both forms',6]].map(([id,act,label,max])=>({id,act,label,max}))}
PAPERS.B25={id:'B25',part:'B',short:'Part B: Narisha’s running club (June 2025)',suffix:'PartB',dbName:'partB_database',dbV:25,lock:true,feat:{},pdfs:['6','7','8'],
 hlExample:'“begin with a single upper case letter, followed by no more than 19 lowercase letters”',brief:BRIEF_RC,keyph:KEYPH_RC,firstWork:1,
 tabs:PAPERS.B.tabs,acts:PAPERS.B.acts,items:rcItems(),how:RC_HOW,docs:PAPERS.B.docs,score:pbScoreRC,seed:rcSeed,
 objs:[['1','1 Runner form is ready for data entry'],['2','2 Surname must be present'],['3','3 Forename must be present'],['4','4 Surname pattern'],['5','5 A valid record saves'],['6','6 Evaluation form shows the values']],
 evalChips:['The runner form is ready for data entry because','A blank surname or forename is stopped because','A surname such as smith is refused because','The combo box for the running club means','The evaluation form shows the year to evaluate because','The fastest time and the ages are calculated by a query, so','The plan from last year is displayed and there is a field for the new plan, which means','However, an improvement would be to'],
 initDocs:PAPERS.B.initDocs};

boot();
