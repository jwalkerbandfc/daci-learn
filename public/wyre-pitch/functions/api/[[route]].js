// Wyre Council Digital Skills Pitch — API
// Single-file Pages Function (no cross-file imports).
// Requires a KV namespace bound as POLL_KV.
// Optional env var PRESENTER_PIN (defaults to "bfc2026").

export async function onRequest(context) {
  const { request, env, params } = context;
  const url = new URL(request.url);
  const route = (params.route || []).join("/");
  const kv = env.POLL_KV;
  const PIN = env.PRESENTER_PIN || "bfc2026";

  const json = (obj, status = 200) =>
    new Response(JSON.stringify(obj), {
      status,
      headers: { "Content-Type": "application/json", "Cache-Control": "no-store" },
    });

  if (!kv) return json({ error: "KV binding POLL_KV is missing" }, 500);

  const clean = (s, len) => String(s || "").replace(/[^a-zA-Z0-9_-]/g, "").slice(0, len);

  // ---- Session state (which step the room is on) ----
  if (route === "state" && request.method === "GET") {
    const s = await kv.get("state");
    return json(s ? JSON.parse(s) : { step: 0, reveal: false });
  }

  if (route === "state" && request.method === "POST") {
    const b = await request.json().catch(() => ({}));
    if (b.pin !== PIN) return json({ error: "Incorrect PIN" }, 403);
    const state = { step: Math.max(0, Math.min(6, b.step | 0)), reveal: !!b.reveal };
    await kv.put("state", JSON.stringify(state));
    return json(state);
  }

  // ---- Attendee answer (one per device per question; re-answering overwrites) ----
  if (route === "respond" && request.method === "POST") {
    const b = await request.json().catch(() => ({}));
    const qid = clean(b.qid, 20);
    const cid = clean(b.clientId, 40);
    if (!qid || !cid) return json({ error: "Missing qid or clientId" }, 400);

    let value = b.value;
    if (typeof value === "string") value = value.slice(0, 180);
    else if (typeof value === "number") value = value | 0;
    else if (Array.isArray(value)) value = value.slice(0, 10).map((v) => (v | 0));
    else return json({ error: "Bad value" }, 400);

    // Value stored in key metadata so results need a single list() call.
    await kv.put(`r:${qid}:${cid}`, "1", { metadata: { v: value } });
    return json({ ok: true });
  }

  // ---- Aggregated results for the presenter view ----
  if (route === "results" && request.method === "GET") {
    const qid = clean(url.searchParams.get("qid"), 20);
    if (!qid) return json({ error: "Missing qid" }, 400);
    const values = [];
    let cursor;
    do {
      const l = await kv.list({ prefix: `r:${qid}:`, cursor });
      for (const k of l.keys) if (k.metadata && "v" in k.metadata) values.push(k.metadata.v);
      cursor = l.list_complete ? null : l.cursor;
    } while (cursor);
    return json({ qid, count: values.length, values });
  }

  // ---- Interest capture (name + service area, no signup) ----
  if (route === "interest" && request.method === "POST") {
    const b = await request.json().catch(() => ({}));
    const cid = clean(b.clientId, 40);
    if (!cid) return json({ error: "Missing clientId" }, 400);
    const name = String(b.name || "").slice(0, 60).trim();
    const area = String(b.area || "").slice(0, 80).trim();
    if (!name) return json({ error: "Name required" }, 400);
    await kv.put(`i:${cid}`, "1", { metadata: { name, area, t: Date.now() } });
    return json({ ok: true });
  }

  if (route === "interest" && request.method === "GET") {
    if (url.searchParams.get("pin") !== PIN) return json({ error: "Incorrect PIN" }, 403);
    const people = [];
    let cursor;
    do {
      const l = await kv.list({ prefix: "i:", cursor });
      for (const k of l.keys) if (k.metadata) people.push(k.metadata);
      cursor = l.list_complete ? null : l.cursor;
    } while (cursor);
    people.sort((a, b) => (a.t || 0) - (b.t || 0));
    return json({ count: people.length, people });
  }

  // ---- Reset (presenter only). body: { pin, wipeInterest?: true } ----
  if (route === "reset" && request.method === "POST") {
    const b = await request.json().catch(() => ({}));
    if (b.pin !== PIN) return json({ error: "Incorrect PIN" }, 403);
    const prefixes = b.wipeInterest ? ["r:", "i:"] : ["r:"];
    let deleted = 0;
    for (const prefix of prefixes) {
      let cursor;
      do {
        const l = await kv.list({ prefix, cursor });
        for (const k of l.keys) {
          await kv.delete(k.name);
          deleted++;
        }
        cursor = l.list_complete ? null : l.cursor;
      } while (cursor);
    }
    await kv.put("state", JSON.stringify({ step: 0, reveal: false }));
    return json({ ok: true, deleted });
  }

  return json({ error: "Not found" }, 404);
}
