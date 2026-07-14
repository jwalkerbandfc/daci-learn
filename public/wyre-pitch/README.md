# Wyre Council Digital Skills Pitch

One QR code, no signups, no downloads. Attendee phones auto-follow whichever step the presenter is on; results aggregate live on the projector.

## Files

| File | What it is |
|---|---|
| `index.html` | Attendee page (the QR target) |
| `present.html` | Presenter/projector view with step controls |
| `functions/api/[[route]].js` | Single Pages Function — all API routes |

## Deploy (Cloudflare dashboard)

1. **Workers & Pages → Create → Pages** → upload this folder (or connect the repo).
2. **Workers & Pages → KV** → create a namespace, e.g. `wyre-pitch`.
3. In the Pages project: **Settings → Bindings → Add → KV namespace**
   - Variable name: `POLL_KV` (must be exactly this)
   - Namespace: the one you just created
4. Optional: **Settings → Variables → Add** `PRESENTER_PIN` = your PIN (defaults to `bfc2026` if unset).
5. Redeploy so the bindings take effect.

## On the day

- Projector: open `https://your-site.pages.dev/present.html?pin=YOURPIN`
- The hold screen shows the QR code automatically (generated from the site's own URL).
- Attendees scan once and never touch the address bar again — their page follows your step buttons.
- **Reset session** the night before to clear any test answers.
- One answer per device per question (re-answering overwrites, so no ballot stuffing).

Note: Workers KV is eventually consistent, so a count can occasionally lag a second or two behind. The presenter view never lets a bar shrink, so it always looks smooth on screen.

## 30-minute run sheet

| Time | Step | What happens | What you're selling |
|---|---|---|---|
| 0–3 | **Hold** | QR on screen, everyone joins while you intro B&FC | Credibility, "hands-on not theory" |
| 3–8 | **1 · Time poll** | Bars fill live, the big amber number computes the room's collective hours/year lost to repetitive work | The whole programme — the cost of doing nothing |
| 8–13 | **2 · Pain points** | Multi-select; each bar shows which course strand fixes it | Course mapping: version chaos + inbox → Core Digital Confidence; re-keying + approvals → Automation; reports → Data & Dashboards |
| 13–20 | **3 · Live feed** | Their "never again manually…" answers stream on screen. Pick one and **live-demo** AI drafting/automating it | AI in the Workplace — the wow moment |
| 20–24 | **4 · Quiz** | "Which could Wyre automate today?" Let bars fill, then hit **Reveal answer** | All of it — with tools already in your Microsoft licence |
| 24–28 | **5 · Courses** | Closing poll + interest form appears on their phones | First cohort, August |
| 28–30 | **End** | Contact details on screen and phones; hit **Interest list** to show sign-ups live if the room's warm | Walk out with warm leads |

The **Interest list** button shows names + service areas — that's your follow-up list for Lee.

## Hours/year maths (step 1)

Midpoint hours/day per option: 0.25 / 0.75 / 1.5 / 2.5 → summed across responses × 220 working days. Working weeks = ÷ 37. Tweak the constants at the top of `present.html` if you want different assumptions.
