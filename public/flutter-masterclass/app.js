/* ==========================================================================
   Flutter Masterclass — app logic
   Everything the learner sees (lesson text, Dart examples, the code inside
   DartPad) is fetched live from a GitHub repository at runtime.

   HOW IT WORKS
   1. manifest.json is fetched from raw.githubusercontent.com — it defines
      the lesson SEQUENCE. Lessons are locked until the previous one is
      marked complete.
   2. Each lesson's markdown + main.dart are fetched on demand from the
      same repo.
   3. DartPad itself loads the .dart file straight from GitHub using its
      native ?gh_owner=&gh_repo=&gh_path=&gh_ref= parameters — the repo is
      the single source of truth for both panes.
   ========================================================================== */

'use strict';

/* --------------------------- 1. Configuration ---------------------------- */

// EDIT THESE THREE VALUES to point at your public GitHub repo.
const GITHUB = {
    owner: 'YOUR_GITHUB_USERNAME',
    repo: 'flutter-masterclass',
    branch: 'main',
};

// For quick testing you can override without editing this file:
//   index.html?owner=you&repo=flutter-masterclass&branch=main
(function applyUrlOverrides() {
    const params = new URLSearchParams(window.location.search);
    for (const key of ['owner', 'repo', 'branch']) {
        const v = params.get(key);
        if (v) GITHUB[key] = v;
    }
})();

const RAW_BASE  = () => `https://raw.githubusercontent.com/${GITHUB.owner}/${GITHUB.repo}/${GITHUB.branch}/`;
const BLOB_BASE = () => `https://github.com/${GITHUB.owner}/${GITHUB.repo}/blob/${GITHUB.branch}/`;
const REPO_URL  = () => `https://github.com/${GITHUB.owner}/${GITHUB.repo}`;

const dartPadUrl = (dartPath) =>
    `https://dartpad.dev/?gh_owner=${encodeURIComponent(GITHUB.owner)}` +
    `&gh_repo=${encodeURIComponent(GITHUB.repo)}` +
    `&gh_path=${encodeURIComponent(dartPath)}` +
    `&gh_ref=${encodeURIComponent(GITHUB.branch)}` +
    `&theme=dark&run=true`;

const STORAGE_KEY = () => `flutter-masterclass:${GITHUB.owner}/${GITHUB.repo}:progress`;

/* ------------------------------ 2. State --------------------------------- */

let manifest = null;
let currentLesson = 0;
let completedLessons = new Set();
const cache = { lessons: {}, sources: {} };

/* --------------------------- 3. Persistence ------------------------------ */
/* localStorage may be unavailable (privacy mode, sandboxed previews) —
   degrade gracefully to in-memory progress. */

function loadProgress() {
    try {
        const raw = window.localStorage.getItem(STORAGE_KEY());
        if (raw) completedLessons = new Set(JSON.parse(raw));
    } catch (_) { /* in-memory only */ }
}

function saveProgress() {
    try {
        window.localStorage.setItem(STORAGE_KEY(), JSON.stringify([...completedLessons]));
    } catch (_) { /* in-memory only */ }
}

/* ------------------------------ 4. Fetching ------------------------------ */

async function fetchFromRepo(path, asJson = false) {
    const response = await fetch(RAW_BASE() + path, { cache: 'no-cache' });
    if (!response.ok) {
        throw new Error(`GET ${path} → HTTP ${response.status}`);
    }
    return asJson ? response.json() : response.text();
}

/* ------------------------------ 5. Boot ---------------------------------- */

const $ = (id) => document.getElementById(id);

async function boot() {
    show('loading-state');
    hide('lesson-pane');
    hide('error-state');

    if (GITHUB.owner === 'YOUR_GITHUB_USERNAME') {
        return fail('The repo isn\u2019t configured yet \u2014 GITHUB.owner is still the placeholder value.');
    }

    try {
        manifest = await fetchFromRepo('manifest.json', true);
    } catch (err) {
        return fail(`Tried to fetch <code>${RAW_BASE()}manifest.json</code> and got: <strong>${escapeHtml(err.message)}</strong>. Is the repo public and pushed?`);
    }

    $('course-title').textContent = manifest.course || 'Flutter Masterclass';
    $('course-subtitle').textContent = manifest.subtitle || '';
    $('repo-link').href = REPO_URL();
    $('repo-label').textContent = `${GITHUB.owner}/${GITHUB.repo}`;

    loadProgress();
    buildSidebar();

    // Resume where the learner left off: first not-yet-completed unlocked lesson.
    const resume = manifest.lessons.findIndex((_, i) => !completedLessons.has(i));
    selectLesson(resume === -1 ? manifest.lessons.length - 1 : resume);
}

function fail(detailHtml) {
    hide('loading-state');
    hide('lesson-pane');
    $('error-detail').innerHTML = detailHtml;
    show('error-state');
}

/* --------------------------- 6. Sidebar / sequence ------------------------ */

function isUnlocked(index) {
    // Lesson 0 is always open; lesson N unlocks when N-1 is complete.
    return index === 0 || completedLessons.has(index - 1);
}

function buildSidebar() {
    const list = $('lesson-list');
    list.innerHTML = '';

    manifest.lessons.forEach((lesson, index) => {
        const li = document.createElement('li');
        li.className = 'lesson-item';
        li.dataset.index = index;
        li.setAttribute('tabindex', '0');
        li.setAttribute('role', 'button');

        const marker = document.createElement('span');
        marker.className = 'step-marker';

        const label = document.createElement('span');
        label.textContent = `${lesson.emoji ? lesson.emoji + ' ' : ''}${lesson.title}`;

        li.append(marker, label);
        li.addEventListener('click', () => selectLesson(index));
        li.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); selectLesson(index); }
        });
        list.appendChild(li);
    });

    refreshSidebar();
}

function refreshSidebar() {
    document.querySelectorAll('.lesson-item').forEach((li) => {
        const index = Number(li.dataset.index);
        const done = completedLessons.has(index);
        const unlocked = isUnlocked(index);

        li.classList.toggle('completed', done);
        li.classList.toggle('locked', !unlocked);
        li.classList.toggle('active', index === currentLesson);
        li.title = unlocked ? '' : 'Complete the previous lesson to unlock';

        const marker = li.querySelector('.step-marker');
        marker.textContent = done ? '✓' : (unlocked ? String(index + 1) : '🔒');
    });

    const total = manifest.lessons.length;
    const done = [...completedLessons].filter((i) => i < total).length;
    $('progress-fill').style.width = `${(done / total) * 100}%`;
    $('progress-text').textContent = `${done}/${total} lessons completed`;
}

/* --------------------------- 7. Lesson loading ---------------------------- */

async function selectLesson(index) {
    if (!isUnlocked(index)) {
        // Gentle nudge instead of silence.
        const li = document.querySelector(`.lesson-item[data-index="${index}"]`);
        if (li) {
            li.style.transition = 'transform 0.1s';
            li.style.transform = 'translateX(4px)';
            setTimeout(() => (li.style.transform = ''), 120);
        }
        return;
    }

    currentLesson = index;
    const lesson = manifest.lessons[index];

    refreshSidebar();
    switchTab('content');
    $('lesson-heading').textContent = `Lesson ${index + 1} of ${manifest.lessons.length}: ${lesson.title}`;

    const completeBtn = $('btn-complete');
    completeBtn.disabled = completedLessons.has(index);
    completeBtn.textContent = completedLessons.has(index)
        ? '✅ Completed'
        : '✅ Mark complete & unlock next';

    show('loading-state');
    hide('lesson-pane');
    hide('error-state');

    // Fetch lesson markdown + dart source in parallel (both cached after first hit).
    try {
        const [markdown, dartSource] = await Promise.all([
            cache.lessons[index] ?? fetchFromRepo(lesson.content),
            cache.sources[index] ?? fetchFromRepo(lesson.example),
        ]);
        cache.lessons[index] = markdown;
        cache.sources[index] = dartSource;

        renderLesson(lesson, markdown);
        renderSource(lesson, dartSource);
        embedDartPad(lesson.example);

        hide('loading-state');
        show('lesson-pane');
    } catch (err) {
        fail(`Couldn\u2019t load <code>${escapeHtml(lesson.content)}</code> or <code>${escapeHtml(lesson.example)}</code>: <strong>${escapeHtml(err.message)}</strong>`);
    }
}

/* ------------------------ 8. Markdown → lesson pane ----------------------- */

function renderLesson(lesson, markdown) {
    const html = DOMPurify.sanitize(marked.parse(markdown));
    const pane = $('lesson-pane');
    pane.innerHTML = html;

    // Convert "> 💡 …" and "> ⚠️ …" blockquotes into styled boxes.
    pane.querySelectorAll('blockquote').forEach((bq) => {
        const text = bq.textContent.trim();
        const box = document.createElement('div');
        box.className = text.startsWith('⚠️') ? 'warning-box' : 'tip-box';
        box.innerHTML = bq.innerHTML;
        bq.replaceWith(box);
    });

    // External links open in a new tab.
    pane.querySelectorAll('a[href^="http"]').forEach((a) => {
        a.target = '_blank';
        a.rel = 'noopener noreferrer';
    });

    // Append the challenge card defined in the manifest.
    if (lesson.challenge) {
        const c = lesson.challenge;
        const card = document.createElement('div');
        card.className = 'code-challenge';
        card.innerHTML = `
            <div class="challenge-title">✏️ Challenge: ${escapeHtml(c.title)}</div>
            <div class="challenge-description">${DOMPurify.sanitize(c.description)}</div>
            <div class="challenge-buttons">
                <button class="editor-button success" id="btn-load-challenge">▶ Reload starter in DartPad</button>
                <button class="hint-button" id="btn-hint">💡 Show hint</button>
            </div>
            <div class="challenge-feedback" id="challenge-feedback"></div>`;
        pane.appendChild(card);

        card.querySelector('#btn-load-challenge').addEventListener('click', () => {
            embedDartPad(lesson.example);
            feedback('✅ Starter code reloaded from GitHub — edit it in DartPad and press Run.');
        });
        card.querySelector('#btn-hint').addEventListener('click', () => {
            feedback(`💡 <strong>Hint:</strong> ${escapeHtml(c.hint)}`);
        });
    }

    pane.scrollTop = 0;
}

function feedback(html) {
    const el = $('challenge-feedback');
    if (!el) return;
    el.className = 'challenge-feedback hint show';
    el.innerHTML = html;
}

/* ------------------------ 9. Dart source pane ----------------------------- */

function renderSource(lesson, source) {
    $('source-path').textContent = lesson.example;
    $('source-code').innerHTML = highlightDart(source);
    $('raw-link').href = BLOB_BASE() + lesson.example;
}

/* A deliberately small Dart highlighter — comments, strings, keywords,
   types, numbers. Escapes everything first, so it's safe on any input. */
function highlightDart(code) {
    let html = escapeHtml(code);

    // Strings and comments first (they may contain keyword-looking text).
    html = html.replace(/(\/\/[^\n]*)/g, '<span class="tok-com">$1</span>');
    html = html.replace(/(&#39;(?:[^&]|&(?!#39;))*?&#39;)/g, '<span class="tok-str">$1</span>');

    const keywords = ['import', 'void', 'class', 'extends', 'return', 'const', 'final', 'var',
        'required', 'this', 'super', 'override', 'if', 'else', 'for', 'while', 'switch',
        'case', 'async', 'await', 'true', 'false', 'null', 'new', 'static', 'late', 'assert'];
    html = html.replace(
        new RegExp(`\\b(${keywords.join('|')})\\b(?![^<]*</span>)`, 'g'),
        '<span class="tok-kw">$1</span>');

    // Capitalised identifiers ≈ types/classes.
    html = html.replace(/\b([A-Z][A-Za-z0-9_]*)\b(?![^<]*<\/span>)/g, '<span class="tok-cls">$1</span>');
    html = html.replace(/\b(\d+(?:\.\d+)?)\b(?![^<]*<\/span>)/g, '<span class="tok-num">$1</span>');

    return html;
}

/* --------------------------- 10. DartPad embed ----------------------------- */

function embedDartPad(dartPath) {
    const wrapper = $('dartpad-wrapper');
    wrapper.innerHTML = '';

    setStatus('loading', 'Loading from GitHub…');

    const iframe = document.createElement('iframe');
    iframe.src = dartPadUrl(dartPath);
    iframe.title = 'DartPad live editor';
    iframe.setAttribute('allow', 'clipboard-read; clipboard-write');
    iframe.addEventListener('load', () => setStatus('ready', 'Ready'));

    wrapper.appendChild(iframe);
}

function setStatus(state, text) {
    $('status-dot').classList.toggle('loading', state === 'loading');
    $('status-text').textContent = text;
}

/* ----------------------- 11. Completion / sequencing ----------------------- */

function markComplete() {
    completedLessons.add(currentLesson);
    saveProgress();
    refreshSidebar();

    const next = currentLesson + 1;
    if (next < manifest.lessons.length) {
        selectLesson(next);
    } else {
        $('btn-complete').disabled = true;
        $('btn-complete').textContent = '🎓 Course complete!';
        feedback('🎓 <strong>Course complete!</strong> Every lesson finished — nice work.');
    }
}

/* ------------------------------ 12. UI wiring ------------------------------ */

function switchTab(tab) {
    $('tab-content').classList.toggle('active', tab === 'content');
    $('tab-source').classList.toggle('active', tab === 'source');
    const showingError = !$('error-state').hidden;
    if (showingError) return;
    $('lesson-pane').hidden = tab !== 'content';
    $('source-pane').hidden = tab !== 'source';
}

function show(id) { $(id).hidden = false; if (id === 'loading-state') $(id).style.display = ''; }
function hide(id) { $(id).hidden = true; }

function escapeHtml(s) {
    return String(s)
        .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
}

document.addEventListener('DOMContentLoaded', () => {
    $('tab-content').addEventListener('click', () => switchTab('content'));
    $('tab-source').addEventListener('click', () => switchTab('source'));
    $('btn-complete').addEventListener('click', markComplete);
    $('retry-fetch').addEventListener('click', boot);

    $('btn-reload-pad').addEventListener('click', () => {
        if (manifest) embedDartPad(manifest.lessons[currentLesson].example);
    });

    $('btn-open-pad').addEventListener('click', () => {
        if (manifest) window.open(dartPadUrl(manifest.lessons[currentLesson].example), '_blank', 'noopener');
    });

    $('copy-source').addEventListener('click', async () => {
        const source = cache.sources[currentLesson];
        if (!source) return;
        try {
            await navigator.clipboard.writeText(source);
            $('copy-source').textContent = '✅ Copied';
        } catch (_) {
            $('copy-source').textContent = '⚠️ Copy failed';
        }
        setTimeout(() => ($('copy-source').textContent = '📋 Copy'), 1500);
    });

    $('reset-progress').addEventListener('click', () => {
        if (!window.confirm('Clear saved progress and re-lock all lessons?')) return;
        completedLessons.clear();
        saveProgress();
        refreshSidebar();
        selectLesson(0);
    });

    boot();
});
