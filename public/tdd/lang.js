/* lang.js: a small in-browser checker for a useful subset of Dart and C#.
 *
 * It turns Dart (Flutter) or C# (Unity) code into JavaScript, then runs
 * flutter_test-style or NUnit-style tests against it. It is made for
 * learning: it runs logic (functions, classes, if, for, strings, lists).
 * It does NOT type-check, and it cannot run widgets, scenes or MonoBehaviours.
 *
 * Works in a browser and in Node.
 *   TDD_LANG.compile('dart' | 'cs', source)  ->  JavaScript text, or throws CompileError (with .line)
 *   TDD_LANG.execute                          ->  self-contained, so it can run inside a Web Worker
 */
(function (root, factory) {
  var api = factory();
  if (typeof module === 'object' && module.exports) module.exports = api; else root.TDD_LANG = api;
})(typeof self !== 'undefined' ? self : this, function () {
  'use strict';

  function CompileError(line, msg) { this.name = 'CompileError'; this.line = line; this.message = msg; }
  CompileError.prototype = Object.create(Error.prototype);

  /* ------------------------------------------------------------------ tokens */
  var OPS3 = ['??=', '~/=', '...'];
  var OPS2 = ['<=', '>=', '==', '!=', '&&', '||', '++', '--', '+=', '-=', '*=', '/=', '%=', '??', '?.', '=>', '~/'];
  var OPS1 = '+-*/%=<>!?:;,.(){}[]&|^~@#';

  function tokenize(src, lang, startLine) {
    var cs = lang === 'cs', toks = [], i = 0, n = src.length, line = startLine || 1;
    function fail(m) { throw new CompileError(line, m); }

    function readExprEnd(j, close) { /* returns index of the matching close brace, skipping nested strings */
      var depth = 1;
      while (j < n) {
        var ch = src[j];
        if (ch === '"' || ch === "'") { var q = ch; j++; while (j < n && src[j] !== q) { if (src[j] === '\\') j++; j++; } }
        else if (ch === '{') depth++;
        else if (ch === '}') { depth--; if (!depth) return j; }
        j++;
      }
      fail('An interpolated value in this string is missing its closing brace.');
    }

    function readString(j, q, mode) {
      var parts = [], buf = '', startLine = line;
      for (;;) {
        if (j >= n) { line = startLine; fail('This string is never closed. Add the closing quote.'); }
        var ch = src[j];
        if (ch === q) {
          if (mode.verbatim && src[j + 1] === q) { buf += q; j += 2; continue; }
          j++; break;
        }
        if (ch === '\n') { if (!mode.verbatim) { line = startLine; fail('This string is never closed. A string must end on the same line.'); } line++; }
        if (ch === '\\' && !mode.raw && !mode.verbatim) {
          var e = src[j + 1], map = { n: '\n', t: '\t', r: '\r', '0': '\0', b: '\b', '\\': '\\', "'": "'", '"': '"', '$': '$' };
          if (e === 'u') { buf += String.fromCharCode(parseInt(src.slice(j + 2, j + 6), 16)); j += 6; continue; }
          if (map.hasOwnProperty(e)) { buf += map[e]; j += 2; continue; }
          buf += e; j += 2; continue;
        }
        if (mode.interp && cs) {
          if (ch === '{' && src[j + 1] === '{') { buf += '{'; j += 2; continue; }
          if (ch === '}' && src[j + 1] === '}') { buf += '}'; j += 2; continue; }
          if (ch === '{') { var end = readExprEnd(j + 1); parts.push({ s: buf }); buf = ''; parts.push({ e: src.slice(j + 1, end), line: line }); j = end + 1; continue; }
        }
        if (mode.interp && !cs && ch === '$') {
          if (src[j + 1] === '{') { var end2 = readExprEnd(j + 2); parts.push({ s: buf }); buf = ''; parts.push({ e: src.slice(j + 2, end2), line: line }); j = end2 + 1; continue; }
          var m = /^[A-Za-z_][A-Za-z0-9_]*/.exec(src.slice(j + 1, j + 60));
          if (m) { parts.push({ s: buf }); buf = ''; parts.push({ e: m[0], line: line }); j += 1 + m[0].length; continue; }
        }
        buf += ch; j++;
      }
      parts.push({ s: buf });
      return { parts: parts.filter(function (p) { return p.e !== undefined || p.s !== ''; }), end: j };
    }

    while (i < n) {
      var c = src[i], d = src[i + 1];
      if (c === '\n') { line++; i++; continue; }
      if (c === ' ' || c === '\t' || c === '\r') { i++; continue; }
      if (c === '/' && d === '/') { while (i < n && src[i] !== '\n') i++; continue; }
      if (c === '/' && d === '*') {
        var e = src.indexOf('*/', i + 2);
        if (e < 0) fail('This comment is never closed. Add */ at the end.');
        line += (src.slice(i, e).match(/\n/g) || []).length; i = e + 2; continue;
      }
      /* strings */
      var mode = null, qpos = -1;
      if (cs) {
        var j = i, interp = false, verb = false;
        while ((src[j] === '$' || src[j] === '@') && j - i < 2) { if (src[j] === '$') interp = true; else verb = true; j++; }
        if (src[j] === '"') { mode = { interp: interp, verbatim: verb }; qpos = j; }
        else if (j > i) fail('Unexpected "' + c + '".');
        else if (c === "'") { mode = { char: true }; qpos = i; }
      } else {
        if ((c === 'r') && (d === "'" || d === '"')) { mode = { raw: true }; qpos = i + 1; }
        else if (c === "'" || c === '"') { mode = { interp: true }; qpos = i; }
        if (mode && src.slice(qpos, qpos + 3) === src[qpos].repeat(3)) fail('Triple-quoted strings are not supported by the in-browser checker. Use a normal string.');
      }
      if (mode) {
        var r = readString(qpos + 1, src[qpos], mode);
        toks.push({ t: 'str', parts: r.parts, line: line });
        i = r.end; continue;
      }
      if (/[0-9]/.test(c)) {
        var m1 = /^(0[xX][0-9a-fA-F]+|[0-9][0-9_]*(\.[0-9]+)?([eE][+-]?[0-9]+)?)/.exec(src.slice(i, i + 40));
        var txt = m1[0]; i += txt.length;
        if (cs && /[fFdDmMlLuU]/.test(src[i] || '') && !/[A-Za-z0-9_]/.test(src[i + 1] || '')) i++;
        toks.push({ t: 'num', v: txt.replace(/_/g, ''), line: line }); continue;
      }
      if (/[A-Za-z_]/.test(c)) {
        var m2 = /^[A-Za-z_][A-Za-z0-9_]*/.exec(src.slice(i, i + 80));
        toks.push({ t: 'id', v: m2[0], line: line }); i += m2[0].length; continue;
      }
      var three = src.slice(i, i + 3), two = src.slice(i, i + 2);
      if (OPS3.indexOf(three) >= 0) { toks.push({ t: 'op', v: three, line: line }); i += 3; continue; }
      if (OPS2.indexOf(two) >= 0) { toks.push({ t: 'op', v: two, line: line }); i += 2; continue; }
      if (OPS1.indexOf(c) >= 0) { toks.push({ t: 'op', v: c, line: line }); i++; continue; }
      fail('Unexpected character "' + c + '".');
    }
    toks.push({ t: 'eof', v: '', line: line });
    return toks;
  }

  /* ------------------------------------------------------------------ parser */
  var MODS = { public: 1, private: 1, protected: 1, internal: 1, static: 1, readonly: 1, const: 1, final: 1, abstract: 1, override: 1, virtual: 1, sealed: 1, late: 1, partial: 1, extern: 1 };
  var KEYWORDS = { if: 1, else: 1, for: 1, foreach: 1, while: 1, return: 1, throw: 1, break: 1, continue: 1, new: 1, this: 1, class: 1, switch: 1, try: 1, catch: 1, in: 1, is: 1, as: 1, true: 1, false: 1, null: 1 };
  var CAST = { int: 1, float: 1, double: 1, long: 1, short: 1, byte: 1, decimal: 1, string: 1, char: 1, object: 1, bool: 1 };
  var TYPEIDS = { cs: { string: 'string', String: 'string', int: 'int', char: 'char', double: 'double', float: 'double', long: 'int', bool: 'bool' }, dart: { String: 'string', int: 'int', double: 'double', num: 'double', bool: 'bool' } };
  var DART_CTORS = { ArgumentError: 1, Exception: 1, StateError: 1, UnsupportedError: 1, FormatException: 1, RangeError: 1, RegExp: 1, Error: 1 };
  var UNSUPPORTED = {
    switch: '`switch` is not supported by the in-browser checker yet. Use if / else if here. Your real project can use switch.',
    try: '`try` / `catch` is not supported by the in-browser checker yet. Your real project can use it.',
    do: '`do` / `while` is not supported by the in-browser checker yet. Use `while` or `for`.',
    yield: '`yield` (coroutines and PlayMode tests) cannot run in the browser. Keep to plain functions and classes here.',
    async: '`async` / `await` cannot run in the browser checker. Keep to plain functions and classes here.',
    await: '`await` cannot run in the browser checker. Keep to plain functions and classes here.',
    out: '`out` parameters are not supported by the in-browser checker. Return a value instead.',
    ref: '`ref` parameters are not supported by the in-browser checker. Return a value instead.',
    params: '`params` is not supported by the in-browser checker.',
    lock: '`lock` is not supported by the in-browser checker.',
    using: '`using` blocks are not supported by the in-browser checker.',
    goto: '`goto` is not supported.',
    required: 'Named parameters (`required`, `{ }`) are not supported by the in-browser checker. Use normal positional parameters here.'
  };

  function Parser(toks, lang) { this.t = toks; this.p = 0; this.lang = lang; this.cs = lang === 'cs'; }
  var P = Parser.prototype;
  P.peek = function (k) { return this.t[Math.min(this.p + (k || 0), this.t.length - 1)]; };
  P.next = function () { var x = this.t[this.p]; if (this.p < this.t.length - 1) this.p++; return x; };
  P.is = function (v, k) { var x = this.peek(k); return (x.t === 'id' || x.t === 'op') && x.v === v; };
  P.accept = function (v) { if (this.is(v)) { this.next(); return true; } return false; };
  P.fail = function (msg, tok) { throw new CompileError((tok || this.peek()).line, msg); };
  P.desc = function (x) { return x.t === 'eof' ? 'the end of the code' : x.t === 'str' ? 'a string' : x.t === 'num' ? 'the number ' + x.v : '"' + x.v + '"'; };
  P.expect = function (v, why) {
    if (!this.is(v)) this.fail('Expected "' + v + '"' + (why ? ' ' + why : '') + ', but found ' + this.desc(this.peek()) + '.');
    return this.next();
  };
  P.expectSemi = function (why) {
    if (!this.is(';')) this.fail('Expected ";" ' + (why || 'at the end of the statement') + ', but found ' + this.desc(this.peek()) + '.', this.p > 0 ? this.t[this.p - 1] : this.peek());
    this.next();
  };
  P.ident = function (why) {
    var x = this.peek();
    if (x.t !== 'id') this.fail('Expected a name' + (why ? ' ' + why : '') + ', but found ' + this.desc(x) + '.');
    return this.next().v;
  };
  P.unsupported = function (v) { this.fail(UNSUPPORTED[v] || ('`' + v + '` is not supported by the in-browser checker.')); };

  /* types: returns {name, nullable, arr} */
  P.skipGenerics = function () {
    var depth = 0;
    do {
      var x = this.next();
      if (x.v === '<' && x.t === 'op') depth++;
      else if (x.v === '>' && x.t === 'op') depth--;
      else if (!(x.t === 'id' || (x.t === 'op' && ',.?[]'.indexOf(x.v) >= 0))) this.fail('Unexpected ' + this.desc(x) + ' inside <...>.', x);
    } while (depth > 0);
  };
  P.parseType = function () {
    var name = this.ident('for a type'), nullable = false, arr = false;
    while (this.is('.') && this.peek(1).t === 'id') { this.next(); name += '.' + this.next().v; }
    if (this.is('<')) this.skipGenerics();
    if (this.is('?')) { this.next(); nullable = true; }
    while (this.is('[') && this.is(']', 1)) { this.next(); this.next(); arr = true; }
    return { name: name, nullable: nullable, arr: arr };
  };
  P.parseTypeArgs = function () {
    this.expect('<'); var names = [];
    do { names.push(this.parseType().name); } while (this.accept(','));
    this.expect('>'); return names;
  };
  P.tryTypeArgs = function () {
    if (!this.is('<')) return null;
    var save = this.p;
    try { var a = this.parseTypeArgs(); if (this.is('(')) return a; } catch (e) { if (!(e instanceof CompileError)) throw e; }
    this.p = save; return null;
  };

  /* attributes: C# [Test], [TestCase(1, 2)]; Dart @override */
  P.parseAttrs = function () {
    var out = [];
    if (this.cs) {
      while (this.is('[')) {
        this.next();
        do {
          var name = this.ident('for the attribute'), args = [];
          while (this.accept('.')) name = this.ident();
          if (this.is('(')) args = this.parseArgs();
          out.push({ name: name.replace(/Attribute$/, ''), args: args });
        } while (this.accept(','));
        this.expect(']');
      }
    } else {
      while (this.is('@')) {
        this.next(); this.ident();
        while (this.accept('.')) this.ident();
        if (this.is('(')) this.parseArgs();
      }
    }
    return out;
  };
  P.parseMods = function () {
    var m = {};
    while (this.peek().t === 'id' && MODS[this.peek().v] && !this.is('(', 1) && !this.is('=', 1) && !this.is(';', 1)) m[this.next().v] = true;
    return m;
  };

  P.parseParams = function () {
    this.expect('(');
    var ps = [];
    while (!this.is(')')) {
      if (this.is('{') || (!this.cs && this.is('['))) this.fail('Named and optional parameters are not supported by the in-browser checker. Use normal positional parameters here.');
      var x = this.peek();
      if (x.t === 'id' && UNSUPPORTED[x.v] && this.peek(1).t === 'id') this.unsupported(x.v);
      var p = { name: null, def: null, field: false };
      while (this.is('final') || this.is('const')) this.next();
      if (this.is('this') && this.is('.', 1)) { this.next(); this.next(); p.field = true; p.name = this.ident(); }
      else {
        var save = this.p, typed = false;
        try { this.parseType(); typed = this.peek().t === 'id'; } catch (e) { if (!(e instanceof CompileError)) throw e; }
        this.p = save;
        if (typed) this.parseType();
        p.name = this.ident('for the parameter');
      }
      if (this.accept('=')) p.def = this.parseExpr();
      ps.push(p);
      if (!this.accept(',')) break;
    }
    this.expect(')');
    return ps;
  };
  P.parseArgs = function () {
    this.expect('('); var args = [];
    while (!this.is(')')) {
      if (this.peek().t === 'id' && this.is(':', 1)) this.fail('Named arguments (name: value) are not supported by the in-browser checker. Pass the values in order.');
      args.push(this.parseExpr());
      if (!this.accept(',')) break;
    }
    this.expect(')', 'after the arguments');
    return args;
  };

  /* top level */
  P.parseProgram = function () {
    var prog = { items: [] };
    while (this.peek().t !== 'eof') this.parseTop(prog);
    return prog;
  };
  P.skipDirective = function () { while (!this.is(';') && this.peek().t !== 'eof') this.next(); this.accept(';'); };
  P.parseTop = function (prog) {
    if (this.is('import') || this.is('using') || this.is('part') || this.is('library') || this.is('export')) { this.skipDirective(); return; }
    if (this.is('namespace')) {
      this.next(); this.ident(); while (this.accept('.')) this.ident();
      if (this.accept(';')) return;
      this.expect('{'); while (!this.is('}') && this.peek().t !== 'eof') this.parseTop(prog); this.expect('}'); return;
    }
    var attrs = this.parseAttrs(), mods = this.parseMods();
    if (this.is('class') || this.is('struct')) { prog.items.push(this.parseClass(attrs, mods)); return; }
    if (this.is('enum')) { prog.items.push(this.parseEnum()); return; }
    if (this.is('interface')) this.fail('`interface` is not supported by the in-browser checker.');
    if (this.cs) this.fail('In C#, code belongs inside a class. Wrap it in `public class Name { ... }`.');
    /* Dart: function or variable */
    var type = null;
    if (!(this.peek().t === 'id' && (this.is('(', 1) || this.is('=', 1)))) type = this.parseType();
    var name = this.ident('for the function or variable');
    if (this.is('(')) { prog.items.push(this.parseFunction(name, mods, type, false)); return; }
    var init = this.accept('=') ? this.parseExpr() : null;
    this.expectSemi('at the end of the declaration');
    prog.items.push({ k: 'topvar', name: name, init: init, type: type, isConst: !!(mods.const || mods.final) });
  };
  P.parseEnum = function () {
    this.next(); var name = this.ident(), names = [];
    this.expect('{');
    while (!this.is('}')) { names.push(this.ident()); if (this.accept('=')) this.parseExpr(); if (!this.accept(',')) break; }
    this.expect('}');
    return { k: 'enum', name: name, names: names };
  };
  P.parseClass = function (attrs, mods) {
    this.next(); var cls = { k: 'class', name: this.ident('for the class'), base: null, members: [], attrs: attrs, line: this.peek().line };
    if (this.is('<')) this.skipGenerics();
    if (this.cs) {
      if (this.accept(':')) { var names = []; do { var t = this.parseType().name; names.push(t); } while (this.accept(',')); cls.base = names.filter(function (x) { return !/^I[A-Z]/.test(x); })[0] || null; }
    } else {
      if (this.accept('extends')) cls.base = this.parseType().name;
      if (this.accept('with')) { do { this.parseType(); } while (this.accept(',')); }
      if (this.accept('implements')) { do { this.parseType(); } while (this.accept(',')); }
    }
    this.expect('{', 'to start the class body');
    while (!this.is('}')) {
      if (this.peek().t === 'eof') this.fail('The class "' + cls.name + '" is missing its closing brace }.');
      cls.members.push(this.parseMember(cls));
    }
    this.expect('}');
    return cls;
  };
  P.parseBodyOrArrow = function () {
    if (this.accept('=>')) { var e = this.parseExpr(); this.expectSemi(); return { k: 'block', body: [{ k: 'return', e: e }] }; }
    if (this.is('{')) return this.parseBlock();
    this.expectSemi('after the declaration'); return null;
  };
  P.parseFunction = function (name, mods, type, isMember) {
    if (this.is('<')) this.skipGenerics();
    var params = this.parseParams();
    var body = this.parseBodyOrArrow();
    return { k: 'func', name: name, params: params, body: body, isStatic: !!mods.static, type: type };
  };
  P.parseMember = function (cls) {
    var attrs = this.parseAttrs(), mods = this.parseMods(), line = this.peek().line;
    if (this.peek().t === 'id' && this.peek().v === cls.name && this.is('(', 1)) {
      this.next();
      var params = this.parseParams(), inits = [], sup = null;
      if (this.accept(':')) {
        do {
          if (this.is('super') || this.is('base')) { this.next(); sup = this.parseArgs(); }
          else if (this.is('this') && this.is('(', 1)) this.fail('Constructor chaining (`this(...)`) is not supported by the in-browser checker.');
          else { this.accept('this') && this.accept('.'); var n = this.ident(); this.expect('='); inits.push({ name: n, e: this.parseExpr() }); }
        } while (this.accept(','));
      }
      var body = this.is('{') ? this.parseBlock() : (this.expectSemi(), null);
      return { k: 'ctor', params: params, inits: inits, sup: sup, body: body, line: line };
    }
    if (this.is('factory') || this.is('operator')) this.fail('`' + this.peek().v + '` members are not supported by the in-browser checker.');
    var type = null;
    if (!(this.peek().t === 'id' && (this.is('=', 1) || this.is(';', 1)))) type = this.parseType();
    if (!this.cs && this.is('get') && this.peek(1).t === 'id') {
      this.next(); var gname = this.ident();
      return { k: 'getter', name: gname, body: this.parseBodyOrArrow(), isStatic: !!mods.static, line: line };
    }
    if (!this.cs && this.is('set') && this.peek(1).t === 'id') this.fail('Setters are not supported by the in-browser checker. Use a normal method or a field.');
    var name = this.ident('for the member');
    if (this.is('(') || (this.is('<') && this.cs)) {
      var f = this.parseFunction(name, mods, type, true); f.attrs = attrs; f.line = line; return f;
    }
    if (this.cs && this.is('{')) return this.parseProperty(name, type, mods, line);
    if (this.cs && this.is('=>')) { this.next(); var ge = this.parseExpr(); this.expectSemi(); return { k: 'getter', name: name, body: { k: 'block', body: [{ k: 'return', e: ge }] }, isStatic: !!mods.static, line: line }; }
    var init = null;
    if (this.accept('=')) init = this.parseExpr();
    if (this.is(',')) this.fail('Declare one field per line in the in-browser checker.');
    this.expectSemi('at the end of the field');
    return { k: 'field', name: name, init: init, type: type, isStatic: !!(mods.static || (this.cs && mods.const)), line: line };
  };
  P.parseProperty = function (name, type, mods, line) {
    this.expect('{');
    var getBody = null, hasGet = false, auto = true;
    while (!this.is('}')) {
      while (this.peek().t === 'id' && MODS[this.peek().v]) this.next();
      var acc = this.ident('for get or set');
      if (acc === 'get') hasGet = true;
      if (this.accept(';')) continue;
      auto = false;
      if (this.accept('=>')) { var e = this.parseExpr(); this.expectSemi(); if (acc === 'get') getBody = { k: 'block', body: [{ k: 'return', e: e }] }; else this.fail('Property setters with bodies are not supported by the in-browser checker.'); }
      else { var b = this.parseBlock(); if (acc === 'get') getBody = b; else this.fail('Property setters with bodies are not supported by the in-browser checker.'); }
    }
    this.expect('}');
    var init = null;
    if (this.accept('=')) { init = this.parseExpr(); this.expectSemi(); }
    if (!auto && getBody) return { k: 'getter', name: name, body: getBody, isStatic: !!mods.static, line: line };
    return { k: 'field', name: name, init: init, type: type, isStatic: !!mods.static, line: line };
  };

  /* statements */
  P.parseBlock = function () {
    this.expect('{', 'to start the block');
    var body = [];
    while (!this.is('}')) {
      if (this.peek().t === 'eof') this.fail('A block is missing its closing brace }.');
      body.push(this.parseStmt());
    }
    this.expect('}');
    return { k: 'block', body: body };
  };
  P.looksLikeDecl = function () {
    var t = this.peek();
    if (t.t !== 'id' || KEYWORDS[t.v]) return false;
    if (t.v === 'var' || t.v === 'final' || t.v === 'const' || t.v === 'late') return true;
    var save = this.p, ok = false;
    try {
      this.parseType();
      var n = this.peek();
      ok = n.t === 'id' && !KEYWORDS[n.v] && (this.is('=', 1) || this.is(';', 1) || this.is(',', 1) || this.is('in', 1) || this.is(':', 1));
    } catch (e) { if (!(e instanceof CompileError)) throw e; }
    this.p = save; return ok;
  };
  P.parseVarDecl = function () {
    var kind = 'let', type = null;
    while (this.is('final') || this.is('const') || this.is('late') || this.is('readonly')) { if (!this.is('late')) kind = 'const'; this.next(); }
    if (this.is('var')) this.next();
    else if (!(this.peek().t === 'id' && (this.is('=', 1) || this.is('in', 1)))) type = this.parseType();
    var decls = [];
    do {
      var name = this.ident('for the variable'), init = this.accept('=') ? this.parseExpr() : null;
      decls.push({ name: name, init: init });
    } while (this.accept(','));
    return { k: 'var', kind: kind, type: type, decls: decls };
  };
  P.body = function () { var s = this.parseStmt(); return s.k === 'block' ? s : { k: 'block', body: [s] }; };
  P.parseStmt = function () {
    var t = this.peek();
    if (t.t === 'id') {
      if (UNSUPPORTED[t.v] && !this.is('=', 1) && !this.is('.', 1)) this.unsupported(t.v);
      switch (t.v) {
        case 'if': {
          this.next(); this.expect('(', 'after if'); var c = this.parseExpr(); this.expect(')', 'after the condition');
          var a = this.body(), b = null;
          if (this.accept('else')) b = this.is('if') ? this.parseStmt() : this.body();
          return { k: 'if', c: c, a: a, b: b };
        }
        case 'while': { this.next(); this.expect('('); var wc = this.parseExpr(); this.expect(')', 'after the condition'); return { k: 'while', c: wc, body: this.body() }; }
        case 'for': case 'foreach': return this.parseFor();
        case 'return': { this.next(); var e = this.is(';') ? null : this.parseExpr(); this.expectSemi('after return'); return { k: 'return', e: e }; }
        case 'throw': { this.next(); var te = this.parseExpr(); this.expectSemi('after throw'); return { k: 'throw', e: te }; }
        case 'break': this.next(); this.expectSemi(); return { k: 'break' };
        case 'continue': this.next(); this.expectSemi(); return { k: 'continue' };
      }
    }
    if (this.is('{')) return this.parseBlock();
    if (this.accept(';')) return { k: 'empty' };
    if (this.looksLikeDecl()) { var d = this.parseVarDecl(); this.expectSemi('at the end of the declaration'); return d; }
    var ex = this.parseExpr();
    this.expectSemi();
    return { k: 'expr', e: ex };
  };
  P.parseFor = function () {
    this.next(); this.expect('(', 'after for');
    var init = null;
    if (!this.is(';')) {
      if (this.looksLikeDecl()) init = this.parseVarDecl();
      else init = { k: 'expr', e: this.parseExpr() };
    }
    if (init && init.k === 'var' && (this.is('in'))) {
      this.next(); var it = this.parseExpr(); this.expect(')');
      return { k: 'forin', decl: init, iter: it, body: this.body() };
    }
    this.expect(';', 'in the for loop');
    var c = this.is(';') ? null : this.parseExpr(); this.expect(';', 'in the for loop');
    var step = this.is(')') ? null : this.parseExpr(); this.expect(')', 'after the for loop header');
    return { k: 'for', init: init, c: c, step: step, body: this.body() };
  };

  /* expressions */
  var ASSIGN = { '=': 1, '+=': 1, '-=': 1, '*=': 1, '/=': 1, '%=': 1, '??=': 1, '~/=': 1 };
  var PREC = { '??': 1, '||': 2, '&&': 3, '==': 4, '!=': 4, '<': 5, '>': 5, '<=': 5, '>=': 5, '+': 6, '-': 6, '*': 7, '/': 7, '%': 7, '~/': 7 };
  P.parseExpr = function () { return this.parseAssign(); };
  P.parseAssign = function () {
    var l = this.parseTernary(), t = this.peek();
    if (t.t === 'op' && ASSIGN[t.v]) {
      if (!(l.k === 'id' || l.k === 'member' || l.k === 'index')) this.fail('You can only assign to a variable, field or list item.', t);
      this.next(); return { k: 'assign', op: t.v, l: l, r: this.parseAssign() };
    }
    return l;
  };
  P.parseTernary = function () {
    var c = this.parseBinary(1);
    if (this.is('?')) { this.next(); var a = this.parseAssign(); this.expect(':', 'in the ? : expression'); return { k: 'cond', c: c, a: a, b: this.parseAssign() }; }
    return c;
  };
  P.parseBinary = function (min) {
    var l = this.parseUnary();
    for (;;) {
      var t = this.peek();
      if (t.t === 'id' && (t.v === 'is' || t.v === 'as') && min <= 5) {
        this.next();
        if (t.v === 'as') { this.parseType(); continue; }
        var neg = false;
        if (this.accept('!') || this.accept('not')) neg = true;
        if (this.is('null')) { this.next(); l = { k: 'isnull', x: l, neg: neg }; }
        else { var ty = this.parseType(); l = { k: 'is', x: l, type: ty.name, neg: neg }; }
        continue;
      }
      if (t.t !== 'op' || !PREC[t.v] || PREC[t.v] < min) return l;
      this.next();
      var right = this.parseBinary(t.v === '??' ? PREC[t.v] : PREC[t.v] + 1);
      l = { k: 'bin', op: t.v, l: l, r: right };
    }
  };
  P.parseUnary = function () {
    var t = this.peek();
    if (t.t === 'op' && (t.v === '!' || t.v === '-' || t.v === '+')) { this.next(); return { k: 'unary', op: t.v, x: this.parseUnary() }; }
    if (t.t === 'op' && (t.v === '++' || t.v === '--')) { this.next(); return { k: 'prefix', op: t.v, x: this.parseUnary() }; }
    if (t.t === 'id' && (t.v === 'await')) this.unsupported('await');
    return this.parsePostfix(this.parsePrimary());
  };
  P.parsePostfix = function (e) {
    for (;;) {
      var t = this.peek();
      if (t.t !== 'op') return e;
      if (t.v === '.' || t.v === '?.') {
        this.next(); var name = this.ident('after the dot');
        var m = { k: 'member', obj: e, name: name, opt: t.v === '?.' };
        var targs = this.tryTypeArgs(); if (targs) m.targs = targs;
        e = m;
      } else if (t.v === '(') { e = { k: 'call', callee: e, args: this.parseArgs() }; }
      else if (t.v === '[') { this.next(); var i = this.parseExpr(); this.expect(']'); e = { k: 'index', obj: e, idx: i }; }
      else if (t.v === '++' || t.v === '--') { this.next(); e = { k: 'postfix', op: t.v, x: e }; }
      else if (t.v === '!' && !this.cs) { this.next(); }
      else return e;
    }
  };
  P.parseSub = function (src, line) {
    var p = new Parser(tokenize(src, this.lang, line), this.lang);
    var e = p.parseExpr();
    if (p.peek().t !== 'eof') p.fail('Unexpected ' + p.desc(p.peek()) + ' inside the string.');
    return e;
  };
  P.tryLambda = function () {
    var save = this.p;
    try {
      var params = this.parseParams();
      if (this.is('=>')) { this.next(); var b = this.is('{') ? this.parseBlock() : this.parseExpr(); return { k: 'lambda', params: params, body: b }; }
      if (!this.cs && this.is('{')) return { k: 'lambda', params: params, body: this.parseBlock() };
    } catch (e) { if (!(e instanceof CompileError)) throw e; if (/not supported/.test(e.message) && this.p > save + 1 && false) throw e; }
    this.p = save; return null;
  };
  P.parseListLiteral = function (close) {
    var elems = [];
    while (!this.is(close)) { elems.push(this.parseExpr()); if (!this.accept(',')) break; }
    this.expect(close);
    return { k: 'arr', elems: elems };
  };
  P.parsePrimary = function () {
    var t = this.peek(), self = this;
    if (t.t === 'num') { this.next(); return { k: 'num', v: t.v }; }
    if (t.t === 'str') {
      this.next();
      return { k: 'str', parts: t.parts.map(function (p) { return p.e !== undefined ? self.parseSub(p.e, p.line) : p.s; }), char: false };
    }
    if (t.t === 'id') {
      if (t.v === 'true' || t.v === 'false' || t.v === 'null') { this.next(); return { k: 'lit', v: t.v }; }
      if (t.v === 'this') { this.next(); return { k: 'this' }; }
      if (t.v === 'base' || t.v === 'super') this.fail('`' + t.v + '` calls are only supported in constructors by the in-browser checker.');
      if (t.v === 'new' && this.cs) return this.parseNew();
      if (t.v === 'const' && !this.cs) { this.next(); return this.parseUnary(); }
      if (UNSUPPORTED[t.v] && (t.v === 'switch' || t.v === 'yield' || t.v === 'async')) this.unsupported(t.v);
      if (this.is('=>', 1)) { this.next(); this.next(); var b = this.is('{') ? this.parseBlock() : this.parseExpr(); return { k: 'lambda', params: [{ name: t.v }], body: b }; }
      this.next();
      var id = { k: 'id', name: t.v };
      var targs = this.tryTypeArgs(); if (targs) id.targs = targs;
      return id;
    }
    if (t.t === 'op') {
      if (t.v === '(') {
        var lam = this.tryLambda(); if (lam) return lam;
        if (this.cs && this.peek(1).t === 'id' && CAST[this.peek(1).v] && this.is(')', 2)) {
          this.next(); var ty = this.next().v; this.next();
          return { k: 'cast', type: ty, x: this.parseUnary() };
        }
        this.next(); var e = this.parseExpr(); this.expect(')', 'to close the bracket'); return { k: 'paren', e: e };
      }
      if (t.v === '[' && !this.cs) { this.next(); return this.parseListLiteral(']'); }
      if (t.v === '{' && this.cs) { this.next(); return this.parseListLiteral('}'); }
      if (t.v === '{') this.fail('Map and set literals ({...}) are not supported by the in-browser checker. Use a list [ ... ] instead.');
      if (t.v === '<' && !this.cs) { this.skipGenerics(); this.expect('['); return this.parseListLiteral(']'); }
    }
    this.fail('Unexpected ' + this.desc(t) + (t.t === 'op' && t.v === ')' ? ' (is there a missing value before it?).' : '.'));
  };
  P.parseNew = function () {
    this.expect('new');
    if (this.is('[')) { this.next(); this.expect(']'); this.expect('{'); return this.parseListLiteral('}'); }
    if (this.is('(')) this.fail('Target-typed `new()` is not supported by the in-browser checker. Write the type, for example new Health(100).');
    var type = this.parseType();
    if (type.arr) { this.expect('{', 'after the array type'); return this.parseListLiteral('}'); }
    if (this.is('[')) { this.next(); var size = this.parseExpr(); this.expect(']'); return { k: 'newarr', type: type.name, size: size }; }
    var args = this.is('(') ? this.parseArgs() : [], init = null;
    if (this.is('{')) { this.next(); init = this.parseListLiteral('}'); }
    return { k: 'new', type: type.name, args: args, init: init };
  };

  /* ------------------------------------------------------------------ emitter */
  function defaultFor(type) {
    if (!type || type.nullable || type.arr) return 'null';
    return /^(int|double|float|long|short|byte|num|decimal)$/.test(type.name) ? '0' : type.name === 'bool' ? 'false' : 'null';
  }

  function emitProgram(prog, lang) {
    var cs = lang === 'cs', classes = {}, out = [];
    prog.items.forEach(function (it) {
      if (it.k === 'class') {
        var info = { name: it.name, base: it.base, members: {} };
        it.members.forEach(function (m) { if (m.name && m.k !== 'ctor') info.members[m.name] = { isStatic: !!m.isStatic }; });
        classes[it.name] = info; it.info = info;
      }
    });
    function findMember(info, name, seen) {
      if (!info) return null; seen = seen || {};
      if (seen[info.name]) return null; seen[info.name] = 1;
      if (info.members.hasOwnProperty(name)) return { m: info.members[name], owner: info };
      return findMember(classes[info.base], name, seen);
    }

    function Ctx(info, isStatic) { this.info = info; this.isStatic = isStatic; this.scopes = [{}]; }
    Ctx.prototype.push = function () { this.scopes.push({}); };
    Ctx.prototype.pop = function () { this.scopes.pop(); };
    Ctx.prototype.declare = function (n) { this.scopes[this.scopes.length - 1][n] = 1; };
    Ctx.prototype.isLocal = function (n) { for (var i = this.scopes.length - 1; i >= 0; i--) if (this.scopes[i][n]) return true; return false; };

    function resolveId(name, ctx) {
      if (ctx.isLocal(name)) return name;
      var tid = TYPEIDS[lang][name];
      if (tid) return '$T.' + tid;
      var f = findMember(ctx.info, name);
      if (f) return f.m.isStatic ? f.owner.name + '.' + name : 'this.' + name;
      return name;
    }
    function isCtorCall(callee) {
      if (callee.k !== 'id') return false;
      if (classes[callee.name]) return true;
      return !cs && (DART_CTORS[callee.name] === 1 || /^[A-Z]/.test(callee.name));  /* Dart: Capitalised() is a constructor */
    }

    function ex(n, c) {
      switch (n.k) {
        case 'num': return n.v;
        case 'lit': return n.v;
        case 'this': return 'this';
        case 'paren': return '(' + ex(n.e, c) + ')';
        case 'str': {
          var hasExpr = n.parts.some(function (p) { return typeof p !== 'string'; });
          if (!hasExpr) return JSON.stringify(n.parts.join(''));
          var segs = n.parts.map(function (p) { return typeof p === 'string' ? JSON.stringify(p) : '$str(' + ex(p, c) + ')'; });
          if (typeof n.parts[0] !== 'string') segs.unshift('""');
          return '(' + segs.join(' + ') + ')';
        }
        case 'id': return resolveId(n.name, c);
        case 'member': return ex(n.obj, c) + (n.opt ? '?.' : '.') + n.name;
        case 'index': return ex(n.obj, c) + '[' + ex(n.idx, c) + ']';
        case 'call': {
          var args = n.args.map(function (a) { return ex(a, c); });
          var targs = n.callee.targs ? n.callee.targs.map(function (t) { return JSON.stringify(t); }) : [];
          var all = targs.concat(args).join(', ');
          if (isCtorCall(n.callee)) return 'new ' + n.callee.name + '(' + all + ')';
          return ex(n.callee, c) + '(' + all + ')';
        }
        case 'new': {
          var base = n.type.replace(/^.*\./, '');
          if (/^(List|ArrayList|IList|IEnumerable)$/.test(base)) {
            if (n.init) return ex(n.init, c);
            return n.args.length ? '[...' + ex(n.args[0], c) + ']' : '[]';
          }
          return 'new ' + base + '(' + n.args.map(function (a) { return ex(a, c); }).join(', ') + ')';
        }
        case 'newarr': return 'Array.from({ length: ' + ex(n.size, c) + ' }, () => ' + defaultFor({ name: n.type }) + ')';
        case 'arr': return '[' + n.elems.map(function (e) { return ex(e, c); }).join(', ') + ']';
        case 'unary': return '(' + n.op + ex(n.x, c) + ')';
        case 'prefix': return '(' + n.op + ex(n.x, c) + ')';
        case 'postfix': return '(' + ex(n.x, c) + n.op + ')';
        case 'bin': {
          var l = ex(n.l, c), r = ex(n.r, c);
          switch (n.op) {
            case '==': return '$eq(' + l + ', ' + r + ')';
            case '!=': return '(!$eq(' + l + ', ' + r + '))';
            case '~/': return 'Math.trunc(' + l + ' / ' + r + ')';
            case '/': return cs ? '$cdiv(' + l + ', ' + r + ')' : '(' + l + ' / ' + r + ')';
            case '%': return cs ? '(' + l + ' % ' + r + ')' : '$mod(' + l + ', ' + r + ')';
            default: return '(' + l + ' ' + n.op + ' ' + r + ')';
          }
        }
        case 'assign': {
          var L = ex(n.l, c), R = ex(n.r, c);
          if (n.op === '~/=') return '(' + L + ' = Math.trunc(' + L + ' / ' + R + '))';
          if (n.op === '/=' && cs) return '(' + L + ' = $cdiv(' + L + ', ' + R + '))';
          if (n.op === '%=' && !cs) return '(' + L + ' = $mod(' + L + ', ' + R + '))';
          return '(' + L + ' ' + n.op + ' ' + R + ')';
        }
        case 'cond': return '(' + ex(n.c, c) + ' ? ' + ex(n.a, c) + ' : ' + ex(n.b, c) + ')';
        case 'cast': return n.type === 'int' || n.type === 'long' || n.type === 'short' || n.type === 'byte' ? 'Math.trunc(' + ex(n.x, c) + ')' : ex(n.x, c);
        case 'isnull': return '(' + (n.neg ? '!' : '') + '$eq(' + ex(n.x, c) + ', null))';
        case 'is': return '(' + (n.neg ? '!' : '') + '$is(' + ex(n.x, c) + ', ' + JSON.stringify(n.type) + '))';
        case 'lambda': {
          c.push();
          var ps = n.params.map(function (p) { c.declare(p.name); return p.name; });
          var body = n.body.k === 'block' ? stmt(n.body, c) : '(' + ex(n.body, c) + ')';
          c.pop();
          return '((' + ps.join(', ') + ') => ' + body + ')';
        }
      }
      throw new CompileError(0, 'Internal: unknown expression ' + n.k);
    }

    function stmt(n, c) {
      switch (n.k) {
        case 'empty': return ';';
        case 'block': { c.push(); var s = '{\n' + n.body.map(function (x) { return stmt(x, c); }).join('\n') + '\n}'; c.pop(); return s; }
        case 'expr': return ex(n.e, c) + ';';
        case 'var': {
          var decls = n.decls.map(function (d) {
            var init = d.init ? ex(d.init, c) : defaultFor(n.type);
            c.declare(d.name);
            return d.name + ' = ' + init;
          });
          return (n.kind === 'const' && n.decls.every(function (d) { return d.init; }) ? 'const ' : 'let ') + decls.join(', ') + ';';
        }
        case 'if': return 'if (' + ex(n.c, c) + ') ' + stmt(n.a, c) + (n.b ? ' else ' + stmt(n.b, c) : '');
        case 'while': return 'while (' + ex(n.c, c) + ') ' + stmt(n.body, c);
        case 'for': {
          c.push();
          var init = n.init ? (n.init.k === 'var' ? stmt(n.init, c).replace(/^const /, 'let ').replace(/;$/, '') : ex(n.init.e, c)) : '';
          var s2 = 'for (' + init + '; ' + (n.c ? ex(n.c, c) : '') + '; ' + (n.step ? ex(n.step, c) : '') + ') ' + stmt(n.body, c);
          c.pop(); return s2;
        }
        case 'forin': {
          c.push(); var d = n.decl.decls[0]; var it = ex(n.iter, c); c.declare(d.name);
          var s3 = 'for (' + (n.decl.kind === 'const' ? 'const' : 'let') + ' ' + d.name + ' of ' + it + ') ' + stmt(n.body, c);
          c.pop(); return s3;
        }
        case 'return': return 'return' + (n.e ? ' ' + ex(n.e, c) : '') + ';';
        case 'throw': return 'throw ' + ex(n.e, c) + ';';
        case 'break': return 'break;';
        case 'continue': return 'continue;';
      }
      throw new CompileError(0, 'Internal: unknown statement ' + n.k);
    }

    function fn(f, c, prefix) {
      c.push();
      var ps = f.params.map(function (p) { c.declare(p.name); return p.name + (p.def ? ' = ' + ex(p.def, c) : ''); });
      var body = f.body ? stmt(f.body, c) : '{}';
      c.pop();
      return prefix + '(' + ps.join(', ') + ') ' + body;
    }

    function emitClass(cl) {
      var info = cl.info, tests = [], setups = [], teardowns = [], lines = [];
      var sup = cl.base ? ' extends ' + cl.base.replace(/^.*\./, '') : '';
      cl.members.forEach(function (m) {
        var c = new Ctx(info, !!m.isStatic), st = m.isStatic ? 'static ' : '';
        if (m.k === 'field') lines.push(st + m.name + ' = ' + (m.init ? ex(m.init, c) : defaultFor(m.type)) + ';');
        else if (m.k === 'getter') { c.push(); lines.push(st + 'get ' + m.name + '() ' + stmt(m.body, c)); }
        else if (m.k === 'func') {
          lines.push(fn(m, c, st + m.name));
          (m.attrs || []).forEach(function (a) {
            if (a.name === 'Test') tests.push({ m: m.name, cases: null });
            else if (a.name === 'TestCase') {
              var t = tests.filter(function (x) { return x.m === m.name; })[0];
              if (!t) { t = { m: m.name, cases: [] }; tests.push(t); } else if (!t.cases) t.cases = [];
              t.cases.push('[' + a.args.map(function (x) { return ex(x, new Ctx(null, true)); }).join(', ') + ']');
            }
            else if (a.name === 'UnityTest') throw new CompileError(m.line, '[UnityTest] (PlayMode, coroutines) cannot run in the browser checker. Use [Test] with plain logic here.');
            else if (a.name === 'SetUp') setups.push(m.name);
            else if (a.name === 'TearDown') teardowns.push(m.name);
          });
        }
        else if (m.k === 'ctor') {
          var cc = new Ctx(info, false); cc.push();
          var ps = m.params.map(function (p) { cc.declare(p.name); return p.name + (p.def ? ' = ' + ex(p.def, cc) : ''); });
          var b = [];
          if (cl.base) b.push('super(' + (m.sup ? m.sup.map(function (a) { return ex(a, cc); }).join(', ') : '') + ');');
          m.params.forEach(function (p) { if (p.field) b.push('this.' + p.name + ' = ' + p.name + ';'); });
          m.inits.forEach(function (i) { b.push('this.' + i.name + ' = ' + ex(i.e, cc) + ';'); });
          if (m.body) b.push(m.body.body.map(function (x) { return stmt(x, cc); }).join('\n'));
          lines.push('constructor(' + ps.join(', ') + ') {\n' + b.join('\n') + '\n}');
        }
      });
      var s = 'class ' + cl.name + sup + ' {\n' + lines.join('\n') + '\n}';
      if (tests.length) {
        s += '\n$fixture(' + cl.name + ', { setup: ' + JSON.stringify(setups) + ', teardown: ' + JSON.stringify(teardowns) + ', tests: [' +
          tests.map(function (t) { return '{ m: ' + JSON.stringify(t.m) + ', cases: ' + (t.cases ? '[' + t.cases.join(', ') + ']' : 'null') + ' }'; }).join(', ') + '] });';
      }
      return s;
    }

    prog.items.forEach(function (it) {
      if (it.k === 'class') out.push(emitClass(it));
      else if (it.k === 'enum') out.push('const ' + it.name + ' = Object.freeze({ ' + it.names.map(function (x) { return x + ': ' + JSON.stringify(it.name + '.' + x); }).join(', ') + ' });');
      else if (it.k === 'func') out.push('function ' + fn(it, new Ctx(null, true), it.name));
      else if (it.k === 'topvar') out.push((it.isConst && it.init ? 'const ' : 'let ') + it.name + ' = ' + (it.init ? ex(it.init, new Ctx(null, true)) : defaultFor(it.type)) + ';');
    });
    return out.join('\n');
  }

  function compile(lang, src) {
    var toks = tokenize(src, lang, 1);
    var ast = new Parser(toks, lang).parseProgram();
    return emitProgram(ast, lang);
  }

  /* ------------------------------------------------------------------ runtime
     execute() must stay self-contained: it is copied into a Web Worker. */
  function execute(lang, code, tests) {
    var cs = lang === 'cs', logs = [], queue = [], fixtures = [];
    var defs = function (proto, o) { Object.keys(o).forEach(function (k) { if (!(k in proto) || o[k].force) { var d = o[k]; var desc = typeof d === 'function' ? { value: d } : { get: d.get }; desc.configurable = true; desc.enumerable = false; try { Object.defineProperty(proto, k, desc); } catch (e) {} } }); };
    var getter = function (f) { return { get: f }; };

    /* ---- helpers used by compiled code ---- */
    function $eq(a, b) { return a === b || (a == null && b == null); }
    function $mod(a, b) { var r = a % b; return r < 0 ? r + Math.abs(b) : r; }
    function $cdiv(a, b) { if (b === 0 && Number.isInteger(a)) throw new DivideByZeroException('Attempted to divide by zero.'); return Number.isInteger(a) && Number.isInteger(b) ? Math.trunc(a / b) : a / b; }
    function $str(x) { if (x === null || x === undefined) return cs ? '' : 'null'; if (typeof x === 'boolean') return cs ? (x ? 'True' : 'False') : String(x); return String(x); }
    function $is(x, t) {
      if (t === 'int' || t === 'long') return typeof x === 'number' && Number.isInteger(x);
      if (t === 'double' || t === 'num' || t === 'float') return typeof x === 'number';
      if (t === 'String' || t === 'string') return typeof x === 'string';
      if (t === 'bool') return typeof x === 'boolean';
      return typeof types[t] === 'function' && x instanceof types[t];
    }
    function $default() { return null; }

    /* ---- errors ---- */
    function mkErr(name, base) { var C = function (msg) { var e = new (base || Error)(msg === undefined ? '' : String(msg)); Object.setPrototypeOf(e, C.prototype); e.name = name; e.message = msg === undefined ? '' : String(msg); return e; }; C.prototype = Object.create((base || Error).prototype); C.prototype.constructor = C; return C; }
    var Exception = mkErr('Exception');
    var types = { Exception: Exception, Error: Error };
    ['ArgumentError', 'StateError', 'UnsupportedError', 'FormatException', 'RangeError', 'ArgumentException', 'InvalidOperationException', 'ArgumentNullException', 'ArgumentOutOfRangeException', 'NotImplementedException', 'DivideByZeroException', 'NullReferenceException', 'IndexOutOfRangeException', 'KeyNotFoundException', 'NotSupportedException'].forEach(function (n) { types[n] = mkErr(n, Exception); });
    types.ArgumentNullException.prototype.constructor = types.ArgumentNullException;
    var DivideByZeroException = types.DivideByZeroException;
    var AssertionFailure = function (msg) { var e = new Error(msg); e.isAssertion = true; return e; };

    /* ---- built-in shims so Dart and C# method names work on JS values ---- */
    var regexArg = function (x) { return x instanceof RegExp ? x : null; };
    defs(String.prototype, {
      isEmpty: getter(function () { return this.length === 0; }), isNotEmpty: getter(function () { return this.length > 0; }),
      contains: function (x) { var r = regexArg(x); return r ? new RegExp(r.source, r.flags.replace('g', '')).test(this) : this.indexOf(x) >= 0; },
      padLeft: function (n, ch) { return this.padStart(n, ch === undefined ? ' ' : ch); }, padRight: function (n, ch) { return this.padEnd(n, ch === undefined ? ' ' : ch); },
      codeUnitAt: function (i) { return this.charCodeAt(i); },
      Length: getter(function () { return this.length; }),
      ToUpper: function () { return this.toUpperCase(); }, ToLower: function () { return this.toLowerCase(); },
      Contains: function (x) { return this.indexOf(x) >= 0; }, StartsWith: function (x) { return this.startsWith(x); }, EndsWith: function (x) { return this.endsWith(x); },
      Trim: function () { return this.trim(); }, TrimStart: function () { return this.trimStart(); }, TrimEnd: function () { return this.trimEnd(); },
      Substring: function (a, n) { return n === undefined ? this.substring(a) : this.substr(a, n); }, IndexOf: function (x) { return this.indexOf(x); },
      Replace: function (a, b) { return this.split(a).join(b); }, Split: function (s) { return this.split(s); },
      PadLeft: function (n, ch) { return this.padStart(n, ch === undefined ? ' ' : ch); }, PadRight: function (n, ch) { return this.padEnd(n, ch === undefined ? ' ' : ch); },
      ToString: function () { return String(this); }, ToCharArray: function () { return Array.from(this); }
    });
    defs(Number.prototype, {
      toInt: function () { return Math.trunc(this); }, toDouble: function () { return Number(this); }, abs: function () { return Math.abs(this); },
      round: function () { return Math.round(this); }, floor: function () { return Math.floor(this); }, ceil: function () { return Math.ceil(this); },
      clamp: function (a, b) { return Math.min(Math.max(this, a), b); }, remainder: function (b) { return this % b; },
      isEven: getter(function () { return this % 2 === 0; }), isOdd: getter(function () { return Math.abs(this % 2) === 1; }), isNegative: getter(function () { return this < 0; }),
      toStringAsFixed: function (n) { return this.toFixed(n); }, ToString: function () { return String(this); }
    });
    var linq = {
      Any: function (f) { return f ? this.some(f) : this.length > 0; }, All: function (f) { return this.every(f); },
      Sum: function (f) { return this.reduce(function (a, x) { return a + (f ? f(x) : x); }, 0); },
      Max: function () { return Math.max.apply(null, this); }, Min: function () { return Math.min.apply(null, this); },
      Where: function (f) { return this.filter(f); }, Select: function (f) { return this.map(f); },
      ToList: function () { return Array.from(this); }, ToArray: function () { return Array.from(this); }
    };
    defs(Array.prototype, {
      isEmpty: getter(function () { return this.length === 0; }), isNotEmpty: getter(function () { return this.length > 0; }),
      first: getter(function () { if (!this.length) throw new StateErrorCtor('No element'); return this[0]; }), last: getter(function () { if (!this.length) throw new StateErrorCtor('No element'); return this[this.length - 1]; }),
      add: function (x) { this.push(x); }, addAll: function (xs) { for (var i = 0; i < xs.length; i++) this.push(xs[i]); },
      removeAt: function (i) { return this.splice(i, 1)[0]; }, remove: function (x) { var i = this.indexOf(x); if (i < 0) return false; this.splice(i, 1); return true; },
      contains: function (x) { return this.indexOf(x) >= 0; }, where: function (f) { return this.filter(f); }, toList: function () { return Array.from(this); },
      fold: function (init, f) { return this.reduce(f, init); }, any: function (f) { return this.some(f); }, insert: function (i, x) { this.splice(i, 0, x); },
      sublist: function (a, b) { return this.slice(a, b); }, clear: function () { this.length = 0; },
      Count: getter(function () { return this.length; }), Length: getter(function () { return this.length; }),
      Add: function (x) { this.push(x); }, Remove: function (x) { var i = this.indexOf(x); if (i < 0) return false; this.splice(i, 1); return true; },
      Contains: function (x) { return this.indexOf(x) >= 0; }, Insert: function (i, x) { this.splice(i, 0, x); }, Clear: function () { this.length = 0; },
      IndexOf: function (x) { return this.indexOf(x); }, First: function () { return this[0]; }, Last: function () { return this[this.length - 1]; }
    });
    defs(Array.prototype, linq);
    defs(String.prototype, { Any: function (f) { return Array.from(this).some(f); }, All: function (f) { return Array.from(this).every(f); }, Where: function (f) { return Array.from(this).filter(f); } });
    function StateErrorCtor(m) { return types.StateError(m); }

    /* ---- type-name helpers: int.parse, string.IsNullOrEmpty, char.IsDigit ---- */
    var num = function (s) { var n = Number(String(s).trim()); if (String(s).trim() === '' || isNaN(n)) throw types.FormatException('Invalid number: ' + s); return n; };
    var $T = {
      string: { IsNullOrEmpty: function (s) { return s == null || s === ''; }, IsNullOrWhiteSpace: function (s) { return s == null || String(s).trim() === ''; }, Join: function (sep, xs) { return xs.join(sep); }, fromCharCode: function (n) { return String.fromCharCode(n); } },
      int: { parse: function (s) { return Math.trunc(num(s)); }, Parse: function (s) { return Math.trunc(num(s)); }, tryParse: function (s) { try { return Math.trunc(num(s)); } catch (e) { return null; } }, MaxValue: 2147483647, MinValue: -2147483648, maxFinite: 2147483647 },
      double: { parse: num, Parse: num, tryParse: function (s) { try { return num(s); } catch (e) { return null; } }, MaxValue: Number.MAX_VALUE, MinValue: -Number.MAX_VALUE },
      char: { IsDigit: function (c) { return /^[0-9]$/.test(c); }, IsLetter: function (c) { return /^[A-Za-z]$/.test(c); }, IsLetterOrDigit: function (c) { return /^[A-Za-z0-9]$/.test(c); }, IsUpper: function (c) { return /^[A-Z]$/.test(c); }, IsLower: function (c) { return /^[a-z]$/.test(c); }, IsWhiteSpace: function (c) { return /^\s$/.test(c); }, ToUpper: function (c) { return c.toUpperCase(); }, ToLower: function (c) { return c.toLowerCase(); } },
      bool: {}
    };

    /* ---- math ---- */
    var MathX = Object.create(Math);
    Object.assign(MathX, { Max: Math.max, Min: Math.min, Abs: Math.abs, Floor: Math.floor, Ceiling: Math.ceil, Round: function (x) { var r = Math.round(x); return (Math.abs(x % 1) === 0.5 && r % 2 !== 0) ? r - 1 : r; }, Sqrt: Math.sqrt, Pow: Math.pow, Clamp: function (v, a, b) { return Math.min(Math.max(v, a), b); }, Sign: Math.sign });
    var Mathf = { Clamp: function (v, a, b) { return Math.min(Math.max(v, a), b); }, Clamp01: function (v) { return Math.min(Math.max(v, 0), 1); }, Max: Math.max, Min: Math.min, Abs: Math.abs, Floor: Math.floor, Ceil: Math.ceil, FloorToInt: Math.floor, CeilToInt: Math.ceil, RoundToInt: Math.round, Sqrt: Math.sqrt, Pow: Math.pow, Sign: function (x) { return x < 0 ? -1 : 1; }, Approximately: function (a, b) { return Math.abs(a - b) < 1e-6; }, Lerp: function (a, b, t) { return a + (b - a) * Math.min(Math.max(t, 0), 1); }, PI: Math.PI, Infinity: Infinity };
    var Debug = { Log: function (m) { logs.push($str(m)); }, LogWarning: function (m) { logs.push($str(m)); }, LogError: function (m) { logs.push($str(m)); } };
    function print(m) { logs.push($str(m)); }
    function MonoBehaviour() {} function ScriptableObject() {}

    /* ---- formatting and equality for messages ---- */
    function fmt(v) {
      if (typeof v === 'string') return cs ? '"' + v + '"' : "'" + v + "'";
      if (v === undefined || v === null) return 'null';
      if (Array.isArray(v)) return '[' + v.map(fmt).join(', ') + ']';
      if (typeof v === 'function') return 'a function';
      if (typeof v === 'object') { try { return JSON.stringify(v); } catch (e) { return String(v); } }
      return String(v);
    }
    function deq(a, b) {
      if (a === b) return true;
      if (typeof a === 'number' && typeof b === 'number') return a === b;
      if (!a || !b || typeof a !== 'object' || typeof b !== 'object') return false;
      var ka = Object.keys(a), kb = Object.keys(b);
      return ka.length === kb.length && ka.every(function (k) { return deq(a[k], b[k]); });
    }
    function throwsWhat(fn) { try { fn(); } catch (e) { return { threw: true, err: e }; } return { threw: false }; }

    /* ---- matchers: Dart flutter_test and NUnit constraints share one shape ---- */
    function M(desc, test, mism) { return { $m: true, desc: desc, test: test, mism: mism }; }
    function asM(x) { return x && x.$m ? x : equals(x); }
    function equals(x) { return M(fmt(x), function (a) { return deq(a, x); }); }
    function isA(t) { return M('an instance of ' + t, function (a) { return $is(a, t); }); }
    function throwsA(m) { m = asM(m); return M('throws ' + m.desc, function (f) { var r = throwsWhat(f); return r.threw && m.test(r.err); }, function (f) { var r = throwsWhat(f); return r.threw ? 'threw ' + (r.err.name || 'an error') : 'did not throw'; }); }
    var dartM = {
      equals: equals, isTrue: M('true', function (a) { return a === true; }), isFalse: M('false', function (a) { return a === false; }),
      isNull: M('null', function (a) { return a == null; }), isNotNull: M('not null', function (a) { return a != null; }),
      isEmpty: M('empty', function (a) { return a != null && a.length === 0; }), isNotEmpty: M('not empty', function (a) { return a != null && a.length > 0; }),
      isZero: M('zero', function (a) { return a === 0; }), isPositive: M('positive', function (a) { return a > 0; }), isNegative: M('negative', function (a) { return a < 0; }),
      greaterThan: function (x) { return M('a value greater than ' + fmt(x), function (a) { return a > x; }); },
      greaterThanOrEqualTo: function (x) { return M('a value greater than or equal to ' + fmt(x), function (a) { return a >= x; }); },
      lessThan: function (x) { return M('a value less than ' + fmt(x), function (a) { return a < x; }); },
      lessThanOrEqualTo: function (x) { return M('a value less than or equal to ' + fmt(x), function (a) { return a <= x; }); },
      closeTo: function (x, d) { return M('a value within ' + d + ' of ' + x, function (a) { return Math.abs(a - x) <= d; }); },
      inInclusiveRange: function (lo, hi) { return M('in range ' + lo + ' to ' + hi, function (a) { return a >= lo && a <= hi; }); },
      contains: function (x) { return M('contains ' + fmt(x), function (a) { return typeof a === 'string' ? a.indexOf(x) >= 0 : Array.isArray(a) && a.some(function (y) { return deq(y, x); }); }); },
      startsWith: function (x) { return M('starts with ' + fmt(x), function (a) { return typeof a === 'string' && a.startsWith(x); }); },
      endsWith: function (x) { return M('ends with ' + fmt(x), function (a) { return typeof a === 'string' && a.endsWith(x); }); },
      hasLength: function (n) { return M('an object with length ' + n, function (a) { return a != null && a.length === n; }); },
      isNot: function (m) { m = asM(m); return M('not ' + m.desc, function (a) { return !m.test(a); }); },
      isA: isA, throwsA: throwsA, throwsException: throwsA(isA('Exception')), throwsArgumentError: throwsA(isA('ArgumentError')), throwsStateError: throwsA(isA('StateError'))
    };
    function expectDart(actual, matcher, reason) {
      var m = asM(matcher);
      if (!m.test(actual)) throw AssertionFailure('Expected: ' + m.desc + '. Actual: ' + (m.mism ? m.mism(actual) : fmt(actual)) + (reason ? ' (' + reason + ')' : ''));
    }
    /* NUnit */
    function C2(desc, test) { var c = M(desc, test); c.Within = function (d) { var x = c.expected; return C2(c.desc + ' within ' + d, function (a) { return Math.abs(a - x) <= d; }); }; return c; }
    function eqC(x) { var c = C2(fmt(x), function (a) { return deq(a, x); }); c.expected = x; return c; }
    function negC(c) { return C2('not ' + c.desc, function (a) { return !c.test(a); }); }
    var Is = {
      EqualTo: eqC, True: C2('True', function (a) { return a === true; }), False: C2('False', function (a) { return a === false; }),
      Null: C2('null', function (a) { return a == null; }), Empty: C2('<empty>', function (a) { return a != null && a.length === 0; }),
      GreaterThan: function (x) { return C2('greater than ' + fmt(x), function (a) { return a > x; }); }, LessThan: function (x) { return C2('less than ' + fmt(x), function (a) { return a < x; }); },
      GreaterThanOrEqualTo: function (x) { return C2('greater than or equal to ' + fmt(x), function (a) { return a >= x; }); }, LessThanOrEqualTo: function (x) { return C2('less than or equal to ' + fmt(x), function (a) { return a <= x; }); },
      Positive: C2('greater than 0', function (a) { return a > 0; }), Negative: C2('less than 0', function (a) { return a < 0; }), Zero: C2('0', function (a) { return a === 0; })
    };
    Is.Not = { EqualTo: function (x) { return negC(eqC(x)); }, Null: negC(Is.Null), True: negC(Is.True), False: negC(Is.False), Empty: negC(Is.Empty) };
    var Does = { Contain: function (x) { return C2('contains ' + fmt(x), function (a) { return typeof a === 'string' ? a.indexOf(x) >= 0 : Array.isArray(a) && a.some(function (y) { return deq(y, x); }); }); }, StartWith: function (x) { return C2('starts with ' + fmt(x), function (a) { return typeof a === 'string' && a.startsWith(x); }); }, EndWith: function (x) { return C2('ends with ' + fmt(x), function (a) { return typeof a === 'string' && a.endsWith(x); }); } };
    function bad(exp, act, msg) { throw AssertionFailure('Expected: ' + exp + ' But was: ' + act + (msg ? ' (' + msg + ')' : '')); }
    var Assert = {
      AreEqual: function (e, a, d) { if (typeof d === 'number' ? Math.abs(e - a) > d : !deq(e, a)) bad(fmt(e), fmt(a)); },
      AreNotEqual: function (e, a) { if (deq(e, a)) bad('not ' + fmt(e), fmt(a)); },
      IsTrue: function (a) { if (a !== true) bad('True', fmt(a)); }, IsFalse: function (a) { if (a !== false) bad('False', fmt(a)); },
      IsNull: function (a) { if (a != null) bad('null', fmt(a)); }, IsNotNull: function (a) { if (a == null) bad('not null', 'null'); },
      Greater: function (a, b) { if (!(a > b)) bad('greater than ' + fmt(b), fmt(a)); }, GreaterOrEqual: function (a, b) { if (!(a >= b)) bad('greater than or equal to ' + fmt(b), fmt(a)); },
      Less: function (a, b) { if (!(a < b)) bad('less than ' + fmt(b), fmt(a)); }, LessOrEqual: function (a, b) { if (!(a <= b)) bad('less than or equal to ' + fmt(b), fmt(a)); },
      Zero: function (a) { if (a !== 0) bad('0', fmt(a)); }, IsEmpty: function (a) { if (!(a != null && a.length === 0)) bad('<empty>', fmt(a)); },
      Fail: function (m) { throw AssertionFailure(m || 'Assert.Fail'); }, Pass: function () {},
      That: function (a, c) { if (!c.test(a)) bad(c.desc, fmt(a)); },
      Throws: function (t, f) { var r = throwsWhat(f); var T = types[t]; if (!r.threw) bad('an instance of <' + t + '>', 'no exception was thrown'); if (T && !(r.err instanceof T)) bad('an instance of <' + t + '>', '<' + (r.err.name || 'Error') + '>'); return r.err; },
      DoesNotThrow: function (f) { var r = throwsWhat(f); if (r.threw) bad('no exception', '<' + (r.err.name || 'Error') + '>: ' + r.err.message); }
    };
    Assert.IsNaN = function (a) { if (!(a !== a)) bad('NaN', fmt(a)); };

    /* ---- test registration ---- */
    var prefix = [], ctxStack = [{ setups: [], teardowns: [] }];
    function test(name, fn) { queue.push({ name: prefix.concat(name).join(' '), fn: fn, chain: ctxStack.slice() }); }
    function group(name, fn) { prefix.push(name); ctxStack.push({ setups: [], teardowns: [] }); try { fn(); } finally { ctxStack.pop(); prefix.pop(); } }
    function setUp(fn) { ctxStack[ctxStack.length - 1].setups.push(fn); }
    function tearDown(fn) { ctxStack[ctxStack.length - 1].teardowns.push(fn); }
    function $fixture(cls, spec) { fixtures.push({ cls: cls, spec: spec }); }

    function msgOf(e) { return e && e.isAssertion ? e.message : ((e && e.name && e.name !== 'Error' ? e.name + ': ' : '') + (e && e.message !== undefined ? e.message : String(e))); }
    function runAll() {
      var results = [];
      queue.forEach(function (q) {
        try {
          q.chain.forEach(function (c) { c.setups.forEach(function (f) { f(); }); });
          q.fn();
          q.chain.slice().reverse().forEach(function (c) { c.teardowns.forEach(function (f) { f(); }); });
          results.push({ name: q.name, pass: true });
        } catch (e) { results.push({ name: q.name, pass: false, message: msgOf(e) }); }
      });
      fixtures.forEach(function (fx) {
        fx.spec.tests.forEach(function (t) {
          (t.cases || [null]).forEach(function (args) {
            var name = fx.cls.name + '.' + t.m + (args ? '(' + args.map(fmt).join(', ') + ')' : '');
            try {
              var inst = new fx.cls();
              fx.spec.setup.forEach(function (s) { inst[s](); });
              inst[t.m].apply(inst, args || []);
              fx.spec.teardown.forEach(function (s) { inst[s](); });
              results.push({ name: name, pass: true });
            } catch (e) { results.push({ name: name, pass: false, message: msgOf(e) }); }
          });
        });
      });
      return results;
    }

    /* ---- run it ---- */
    var scope = {
      $eq: $eq, $mod: $mod, $cdiv: $cdiv, $str: $str, $is: $is, $T: $T, $fixture: $fixture, Math: MathX,
      Mathf: Mathf, Debug: Debug, print: print, MonoBehaviour: MonoBehaviour, ScriptableObject: ScriptableObject,
      test: test, group: group, setUp: setUp, tearDown: tearDown, expect: expectDart, Assert: Assert, Is: Is, Does: Does,
      max: Math.max, min: Math.min, sqrt: Math.sqrt, pow: Math.pow, pi: Math.PI
    };
    Object.keys(dartM).forEach(function (k) { scope[k] = dartM[k]; });
    Object.keys(types).forEach(function (k) { scope[k] = types[k]; });
    scope.isEmpty = dartM.isEmpty;
    var names = Object.keys(scope), vals = names.map(function (k) { return scope[k]; });
    try {
      var body = code + '\n;\n' + tests + '\n;\nif (typeof main === "function") main();';
      new Function(names.join(','), body).apply(null, vals);
    } catch (e) {
      return { fatal: (e && e.name ? e.name + ': ' : '') + (e && e.message !== undefined ? e.message : String(e)), results: [], logs: logs };
    }
    return { results: runAll(), logs: logs };
  }

  return { compile: compile, execute: execute, CompileError: CompileError };
});
