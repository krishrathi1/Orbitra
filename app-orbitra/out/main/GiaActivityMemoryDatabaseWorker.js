"use strict";
(function () {
  try {
    var i =
      typeof window < "u"
        ? window
        : typeof global < "u"
          ? global
          : typeof globalThis < "u"
            ? globalThis
            : typeof self < "u"
              ? self
              : {};
    i.SENTRY_RELEASE = { id: "1.0.3" };
  } catch {}
})();
try {
  (function () {
    var i =
        typeof window < "u"
          ? window
          : typeof global < "u"
            ? global
            : typeof globalThis < "u"
              ? globalThis
              : typeof self < "u"
                ? self
                : {},
      e = new i.Error().stack;
    e &&
      ((i._sentryDebugIds = i._sentryDebugIds || {}),
      (i._sentryDebugIds[e] = "dea8126c-1775-402b-926c-f0ae3f408e9d"),
      (i._sentryDebugIdIdentifier =
        "sentry-dbid-dea8126c-1775-402b-926c-f0ae3f408e9d"));
  })();
} catch {}
const c = require("./chunks/worker-protocol-CFgWGf-A.js"),
  ne = require("valibot"),
  z = require("crypto"),
  ae = require("fs"),
  x = require("path"),
  se = require("better-sqlite3"),
  de = require("sqlite-vec");
function ce(i) {
  const e = Object.create(null, { [Symbol.toStringTag]: { value: "Module" } });
  if (i) {
    for (const t in i)
      if (t !== "default") {
        const r = Object.getOwnPropertyDescriptor(i, t);
        Object.defineProperty(
          e,
          t,
          r.get ? r : { enumerable: !0, get: () => i[t] },
        );
      }
  }
  return ((e.default = i), Object.freeze(e));
}
const u = ce(ne),
  oe = 6e3;
function _e(i) {
  const e = c.toGiaActivityGroupingChunk(i);
  return e.candidateFrame ? [G(i), Ee(e.candidateFrame, i)] : [G(i)];
}
function ue(i) {
  const e = (i.frames ?? []).flatMap(K).slice(0, 40),
    t = I(
      (i.frames ?? []).flatMap((s) => s.evidence.screenshotArtifactIds ?? []),
    ).slice(0, 16),
    r = i.keyEntities ?? [],
    n = I([...r, ...(i.activityAnchors ?? []), ...e]),
    a = k([
      i.title,
      i.summary,
      i.activityKind,
      i.urlDomain,
      ...r,
      ...(i.activityAnchors ?? []),
      ...e,
    ]);
  return {
    sourceCardId: `gia_source_card_window_${i.windowId}`,
    cardType: "window",
    schemaVersion: c.GIA_ACTIVITY_SOURCE_CARD_SCHEMA_VERSION,
    indexVersion: c.GIA_ACTIVITY_SOURCE_CARD_INDEX_VERSION,
    subjectId: i.windowId,
    title: m(i.title, 220) || "Activity window",
    summary: m(i.summary, 1400) || i.title,
    searchText: a,
    logicalDate: i.logicalDate,
    observedAt: i.startedAt,
    updatedAt: i.updatedAt,
    ...(i.urlDomain ? { urlDomain: i.urlDomain } : {}),
    activityKind: i.activityKind,
    ...J(i.frames ?? []),
    confidence: i.confidence ?? 0.7,
    chunkIds: i.chunkIds,
    frameIds: (i.frames ?? []).map((s) => s.frameId),
    windowId: i.windowId,
    screenshotArtifactIds: t,
    evidenceLabels: X(n),
  };
}
function G(i) {
  const e = i.adapterHints.map((o) => o.label),
    t = i.compactDom.visibleText.map((o) => o.text).slice(0, 24),
    r = i.compactDom.interactive.map((o) => o.text).slice(0, 12),
    n = q(i),
    a = [
      i.userAction?.label,
      i.userAction?.textPreview,
      i.userAction?.elementRole,
      i.userAction?.elementTag,
    ],
    s = m(i.title || i.urlDomain || "Captured activity", 220),
    d = m(
      w([
        `${i.triggerKind} on ${i.urlDomain}`,
        i.userAction?.label,
        i.userAction?.textPreview,
        e[0],
      ]),
      1400,
    ),
    _ = k([
      s,
      d,
      i.urlDomain,
      i.urlPath,
      i.url,
      i.triggerKind,
      ...e,
      ...a,
      ...t,
      ...r,
    ]);
  return {
    sourceCardId: `gia_source_card_chunk_${i.chunkId}`,
    cardType: "chunk",
    schemaVersion: c.GIA_ACTIVITY_SOURCE_CARD_SCHEMA_VERSION,
    indexVersion: c.GIA_ACTIVITY_SOURCE_CARD_INDEX_VERSION,
    subjectId: i.chunkId,
    title: s || "Captured activity",
    summary: d || s || "Captured activity",
    searchText: _,
    logicalDate: i.logicalDate,
    observedAt: i.capturedAt,
    updatedAt: i.capturedAt,
    url: m(i.url, 1200),
    urlDomain: i.urlDomain,
    confidence: 0.7,
    chunkIds: [i.chunkId],
    frameIds: [],
    screenshotArtifactIds: n,
    evidenceLabels: X([i.urlDomain, i.triggerKind, ...e]),
  };
}
function Ee(i, e) {
  const t = K(i),
    r = i.target?.name,
    n = i.action.label ?? `${i.action.verb} ${i.action.stage}`,
    a = m(w([n, r, e.urlDomain]), 220),
    s = m(
      w([
        i.action.textPreview,
        i.target?.typeLabel,
        ...(i.relatedEntities ?? []).map((o) => o.entity.name),
        ...(i.evidence.notes ?? []),
      ]),
      1400,
    ),
    d = I([...(i.evidence.screenshotArtifactIds ?? []), ...q(e)]).slice(0, 16),
    _ = k([
      a,
      s,
      n,
      i.action.verb,
      i.action.stage,
      i.surface,
      r,
      ...(i.target?.anchors ?? []),
      ...t,
    ]);
  return {
    sourceCardId: `gia_source_card_frame_${i.frameId}`,
    cardType: "frame",
    schemaVersion: c.GIA_ACTIVITY_SOURCE_CARD_SCHEMA_VERSION,
    indexVersion: c.GIA_ACTIVITY_SOURCE_CARD_INDEX_VERSION,
    subjectId: i.frameId,
    title: a || "Activity frame",
    summary: s || a || "Activity frame",
    searchText: _,
    logicalDate: e.logicalDate,
    observedAt: i.capturedAt,
    updatedAt: i.capturedAt,
    url: m(e.url, 1200),
    urlDomain: e.urlDomain,
    actionVerb: i.action.verb,
    actionStage: i.action.stage,
    ...J([i]),
    confidence: i.evidence.confidence,
    chunkIds: [e.chunkId],
    frameIds: [i.frameId],
    screenshotArtifactIds: d,
    evidenceLabels: X(t),
  };
}
function J(i) {
  const e = I(
      i.flatMap((r) =>
        (r.relatedEntities ?? [])
          .filter((n) => n.role === "recipient")
          .map((n) => n.entity.name),
      ),
    ).slice(0, 12),
    t = le(i);
  return {
    ...(e.length > 0 ? { recipients: e } : {}),
    ...(t ? { messageStatus: t } : {}),
  };
}
function le(i) {
  let e = !1,
    t = !1;
  for (const r of i) {
    if (r.action.verb === "send") {
      if (r.action.stage === "confirmed") return "sent";
      e = !0;
    }
    r.action.verb === "compose" && (t = !0);
  }
  if (e) return "attempted";
  if (t) return "draft";
}
function K(i) {
  const e = i.relatedEntities ?? [];
  return I([
    i.action.label,
    i.action.textPreview,
    i.target?.name,
    i.target?.typeLabel,
    ...(i.target?.anchors ?? []),
    ...e.map((t) => t.entity.name),
    ...e.flatMap((t) => t.entity.anchors),
    ...(i.anchors ?? []),
    ...(i.evidence.confirmationSignals ?? []),
    ...(i.evidence.notes ?? []),
  ]);
}
function q(i) {
  return I([i.beforeScreenshot?.artifactId, i.screenshot?.artifactId]);
}
function k(i) {
  const e = I(i)
    .join(
      `
`,
    )
    .replace(
      /\s+\n/g,
      `
`,
    )
    .replace(
      /\n\s+/g,
      `
`,
    )
    .replace(/[ \t]+/g, " ")
    .trim();
  return m(e, oe) || "activity";
}
function w(i) {
  return I(i).join(" - ");
}
function X(i) {
  return I(i.map((e) => m(e, 180))).slice(0, 24);
}
function I(i) {
  const e = new Set(),
    t = [];
  for (const r of i) {
    const n = r?.trim();
    !n || e.has(n) || (e.add(n), t.push(n));
  }
  return t;
}
function m(i, e) {
  const t = c
    .sanitizeIndexedText(i ?? "")
    .replace(/\s+/g, " ")
    .trim();
  return t.length <= e ? t : t.slice(0, e - 1).trimEnd();
}
const O = "gia_semantic_index_sqlite_vec_v1",
  D = 50,
  C = 5e4,
  Te = 5e4,
  pe = 300;
function b(i) {
  return Buffer.from(new Float32Array(i).buffer);
}
function V(i) {
  return new Float32Array(
    i.buffer.slice(i.byteOffset, i.byteOffset + i.byteLength),
  );
}
function me(i, e) {
  if (i.length !== e.length) return 0;
  let t = 0,
    r = 0,
    n = 0;
  for (let a = 0; a < i.length; a++) {
    const s = i[a] ?? 0,
      d = e[a] ?? 0;
    ((t += s * d), (r += s * s), (n += d * d));
  }
  return r === 0 || n === 0 ? 0 : Q(t / (Math.sqrt(r) * Math.sqrt(n)));
}
function Ie(i) {
  return Q(1 - i);
}
function Q(i) {
  return Math.max(0, Math.min(1, i));
}
function he(i, e, t) {
  const r = [],
    n = [];
  if (
    (e.fromIso && (r.push("AND cards.updated_at >= ?"), n.push(e.fromIso)),
    e.toIso && (r.push("AND cards.updated_at <= ?"), n.push(e.toIso)),
    e.urlDomain)
  ) {
    const a = e.urlDomain.toLowerCase().replace(/^www\./, "");
    (r.push("AND (cards.url_domain = ? OR cards.url_domain = ?)"),
      n.push(a, `www.${a}`));
  }
  return (
    e.activityKind &&
      (r.push("AND (cards.activity_kind = ? OR cards.activity_kind IS NULL)"),
      n.push(e.activityKind)),
    e.cardTypes?.length &&
      (r.push(
        `AND cards.card_type IN (${e.cardTypes.map(() => "?").join(",")})`,
      ),
      n.push(...e.cardTypes)),
    i
      .prepare(
        `
      SELECT cards.source_card_id, cards.updated_at, embeddings.vector_blob
      FROM source_cards cards
      JOIN semantic_texts text ON text.source_card_id = cards.source_card_id
      JOIN semantic_embeddings embeddings ON embeddings.indexed_text_id = text.indexed_text_id
      WHERE 1 = 1 ${r.length ? r.join(" ") : ""}
      ORDER BY cards.updated_at DESC, cards.source_card_id DESC
      LIMIT ?
    `,
      )
      .all(...n, t)
  );
}
function M(i) {
  return i.message.slice(0, pe);
}
function T(i) {
  return typeof i == "bigint" ? Number(i) : i;
}
class xe {
  initialize(e) {}
  upsert(e, t) {}
  refresh(e, t) {}
  deleteByIndexedTextId(e, t) {}
  enforceRetention(e) {}
  search(e, t, r) {
    const n = he(e, t, Te),
      a = [];
    for (const s of n) {
      const d = {
        sourceCardId: s.source_card_id,
        updatedAt: s.updated_at,
        embeddingRank: 0,
        vectorSimilarity: me(r, V(s.vector_blob)),
      };
      Ne(a, d, D);
    }
    return a.map((s, d) => ({ ...s, embeddingRank: d + 1 }));
  }
  health(e) {
    const t = fe(
      e,
      `
      SELECT COUNT(*) AS value
      FROM semantic_texts text
      JOIN semantic_embeddings embedding
        ON embedding.indexed_text_id = text.indexed_text_id
    `,
    );
    return {
      backend: "exact_js",
      version: O,
      indexedCount: t,
      retainedCount: Math.min(t, C),
    };
  }
}
function Ne(i, e, t) {
  let r = i.findIndex((n) => e.vectorSimilarity > n.vectorSimilarity);
  (r === -1 && (r = i.length),
    !(r >= t) && (i.splice(r, 0, e), i.length > t && i.pop()));
}
function fe(i, e) {
  return i.prepare(e).get()?.value ?? 0;
}
const N = "semantic_embedding_vec",
  F = "sqlite_vec_index_version";
class Re {
  initialized = !1;
  version = "unknown";
  lastError;
  initialize(e) {
    if (this.initialized) return;
    const t = Se();
    (e.loadExtension(t),
      (this.version = ge(e)),
      this.ensureVecTable(e),
      this.rebuildIfNeeded(e),
      (this.initialized = !0),
      this.enforceRetention(e));
  }
  upsert(e, t) {
    this.ensureInitialized(e);
    const r = this.vectorIdsForRecord(e, t.indexedTextId, t.sourceCardId);
    for (const s of r) this.deleteVectorRow(e, s);
    e.prepare(
      "DELETE FROM semantic_vector_ids WHERE indexed_text_id = ? OR source_card_id = ?",
    ).run(t.indexedTextId, t.sourceCardId);
    const n = e
        .prepare(
          "INSERT INTO semantic_vector_ids (indexed_text_id, source_card_id) VALUES (?, ?)",
        )
        .run(t.indexedTextId, t.sourceCardId),
      a = T(n.lastInsertRowid);
    this.insertVectorRow(e, a, t);
  }
  refresh(e, t) {
    this.upsert(e, t);
  }
  deleteByIndexedTextId(e, t) {
    this.ensureInitialized(e);
    const r = e
      .prepare(
        "SELECT vector_id FROM semantic_vector_ids WHERE indexed_text_id = ?",
      )
      .all(t);
    for (const n of r) this.deleteVectorRow(e, T(n.vector_id));
    e.prepare("DELETE FROM semantic_vector_ids WHERE indexed_text_id = ?").run(
      t,
    );
  }
  enforceRetention(e) {
    (this.ensureInitialized(e), this.removeOrphanedVectors(e));
    const t = e
        .prepare(
          `
        SELECT ids.vector_id
        FROM semantic_vector_ids ids
        JOIN semantic_texts text ON text.indexed_text_id = ids.indexed_text_id
        JOIN source_cards cards ON cards.source_card_id = text.source_card_id
        JOIN semantic_embeddings embeddings ON embeddings.indexed_text_id = text.indexed_text_id
        ORDER BY cards.updated_at DESC,
                 CASE cards.card_type
                   WHEN 'window' THEN 0
                   WHEN 'frame' THEN 1
                   ELSE 2
                 END,
                 cards.source_card_id DESC
        LIMIT ?
      `,
        )
        .all(C),
      r = new Set(t.map((a) => T(a.vector_id))),
      n = e
        .prepare(
          `
        SELECT ids.vector_id
        FROM semantic_vector_ids ids
        JOIN semantic_embeddings embeddings ON embeddings.indexed_text_id = ids.indexed_text_id
      `,
        )
        .all();
    for (const a of n) {
      const s = T(a.vector_id);
      r.has(s) || (this.deleteVectorRow(e, s), this.deleteVectorMapping(e, s));
    }
  }
  search(e, t, r) {
    this.ensureInitialized(e);
    const n = t.cardTypes ?? [],
      a =
        n.length > 1
          ? n.flatMap((o) => this.searchSingleCardType(e, t, r, o))
          : this.searchSingleCardType(e, t, r, n[0]),
      s = new Map();
    for (const o of a) {
      const l = T(o.vector_id),
        p = s.get(l);
      (!p || o.distance < p.distance) && s.set(l, o);
    }
    const d = Array.from(s.values())
      .sort((o, l) => o.distance - l.distance)
      .slice(0, D);
    if (d.length === 0) return [];
    const _ = this.sourceRowsForVectorIds(
      e,
      d.map((o) => T(o.vector_id)),
    );
    return d.flatMap((o, l) => {
      const p = _.get(T(o.vector_id));
      return p
        ? [
            {
              sourceCardId: p.sourceCardId,
              updatedAt: p.updatedAt,
              embeddingRank: l + 1,
              vectorSimilarity: Ie(o.distance),
            },
          ]
        : [];
    });
  }
  health(e) {
    const t = y(
      e,
      `
      SELECT COUNT(*) AS value
      FROM semantic_texts text
      JOIN semantic_embeddings embedding
        ON embedding.indexed_text_id = text.indexed_text_id
    `,
    );
    return {
      backend: "sqlite_vec",
      version: `${O}:${this.version}`,
      indexedCount: t,
      retainedCount: this.retainedCount(e),
      ...(this.lastError ? { lastError: this.lastError } : {}),
    };
  }
  setLastError(e) {
    this.lastError = M(e);
  }
  ensureInitialized(e) {
    this.initialized || this.initialize(e);
  }
  ensureVecTable(e) {
    e.exec(`
      CREATE VIRTUAL TABLE IF NOT EXISTS ${N} USING vec0(
        vector_id integer primary key,
        embedding float[1536] distance_metric=cosine,
        updated_at_ms integer,
        url_domain_id integer,
        activity_kind_id integer,
        card_type_id integer
      );
    `);
  }
  rebuildIfNeeded(e) {
    if (
      e.prepare("SELECT value FROM semantic_index_meta WHERE key = ?").get(F)
        ?.value !== O
    ) {
      (e.exec(`DROP TABLE IF EXISTS ${N};`),
        this.ensureVecTable(e),
        e
          .prepare(
            `
        INSERT INTO semantic_index_meta (key, value)
        VALUES (?, ?)
        ON CONFLICT(key) DO UPDATE SET value = excluded.value
      `,
          )
          .run(F, O),
        this.rebuildFromDurableEmbeddings(e));
      return;
    }
    this.retainedCount(e) === 0 &&
      this.durableEmbeddingCount(e) > 0 &&
      this.rebuildFromDurableEmbeddings(e);
  }
  rebuildFromDurableEmbeddings(e) {
    (e.exec(`DELETE FROM ${N};`),
      e.prepare("DELETE FROM semantic_vector_ids").run());
    const t = e
      .prepare(
        `
        SELECT text.indexed_text_id,
               text.source_card_id,
               cards.updated_at,
               cards.url_domain,
               cards.activity_kind,
               cards.card_type,
               embeddings.vector_blob
        FROM semantic_texts text
        JOIN source_cards cards ON cards.source_card_id = text.source_card_id
        JOIN semantic_embeddings embeddings ON embeddings.indexed_text_id = text.indexed_text_id
        ORDER BY cards.updated_at DESC,
                 CASE cards.card_type
                   WHEN 'window' THEN 0
                   WHEN 'frame' THEN 1
                   ELSE 2
                 END,
                 cards.source_card_id DESC
        LIMIT ?
      `,
      )
      .all(C);
    for (const r of t) {
      const n = e
        .prepare(
          "INSERT INTO semantic_vector_ids (indexed_text_id, source_card_id) VALUES (?, ?)",
        )
        .run(r.indexed_text_id, r.source_card_id);
      this.insertVectorRow(e, T(n.lastInsertRowid), {
        indexedTextId: r.indexed_text_id,
        sourceCardId: r.source_card_id,
        updatedAt: r.updated_at,
        ...(r.url_domain ? { urlDomain: r.url_domain } : {}),
        ...(r.activity_kind ? { activityKind: r.activity_kind } : {}),
        cardType: r.card_type,
        vector: Array.from(V(r.vector_blob)),
      });
    }
  }
  searchSingleCardType(e, t, r, n) {
    const a = ["embedding MATCH ?", "k = ?"],
      s = Math.min(D * 2, C),
      d = [b(r), s];
    if (
      (t.fromIso &&
        (a.push("updated_at_ms >= ?"), d.push(BigInt(Date.parse(t.fromIso)))),
      t.toIso &&
        (a.push("updated_at_ms <= ?"), d.push(BigInt(Date.parse(t.toIso)))),
      t.urlDomain)
    ) {
      const _ = t.urlDomain.toLowerCase().replace(/^www\./, ""),
        o = [S(e, "url_domain", _), S(e, "url_domain", `www.${_}`)].filter(
          (l) => l !== null,
        );
      if (o.length === 0) return [];
      (a.push(`url_domain_id IN (${o.map(() => "?").join(",")})`),
        d.push(...o.map((l) => BigInt(l))));
    }
    if (t.activityKind) {
      const _ = S(e, "activity_kind", t.activityKind);
      _ !== null
        ? (a.push("(activity_kind_id = ? OR activity_kind_id = ?)"),
          d.push(BigInt(_), 0n))
        : (a.push("activity_kind_id = ?"), d.push(0n));
    }
    if (n) {
      const _ = S(e, "card_type", n);
      if (!_) return [];
      (a.push("card_type_id = ?"), d.push(BigInt(_)));
    }
    return e
      .prepare(
        `
        SELECT vector_id, distance
        FROM ${N}
        WHERE ${a.join(" AND ")}
      `,
      )
      .all(...d);
  }
  sourceRowsForVectorIds(e, t) {
    if (t.length === 0) return new Map();
    const r = e
      .prepare(
        `
        SELECT ids.vector_id, ids.source_card_id, cards.updated_at
        FROM semantic_vector_ids ids
        JOIN source_cards cards ON cards.source_card_id = ids.source_card_id
        JOIN semantic_embeddings embeddings ON embeddings.indexed_text_id = ids.indexed_text_id
        WHERE ids.vector_id IN (${t.map(() => "?").join(",")})
      `,
      )
      .all(...t);
    return new Map(
      r.map((n) => [
        T(n.vector_id),
        { sourceCardId: n.source_card_id, updatedAt: n.updated_at },
      ]),
    );
  }
  vectorIdsForRecord(e, t, r) {
    return e
      .prepare(
        "SELECT vector_id FROM semantic_vector_ids WHERE indexed_text_id = ? OR source_card_id = ?",
      )
      .all(t, r)
      .map((n) => T(n.vector_id));
  }
  insertVectorRow(e, t, r) {
    e.prepare(
      `
      INSERT INTO ${N} (
        vector_id, embedding, updated_at_ms, url_domain_id, activity_kind_id, card_type_id
      )
      VALUES (?, ?, ?, ?, ?, ?)
    `,
    ).run(
      BigInt(t),
      b(r.vector),
      BigInt(Date.parse(r.updatedAt)),
      j(e, "url_domain", r.urlDomain),
      j(e, "activity_kind", r.activityKind),
      BigInt(Z(e, "card_type", r.cardType)),
    );
  }
  deleteVectorRow(e, t) {
    e.prepare(`DELETE FROM ${N} WHERE vector_id = ?`).run(BigInt(t));
  }
  deleteVectorMapping(e, t) {
    e.prepare("DELETE FROM semantic_vector_ids WHERE vector_id = ?").run(
      BigInt(t),
    );
  }
  removeOrphanedVectors(e) {
    const t = e
      .prepare(
        `
        SELECT ids.vector_id
        FROM semantic_vector_ids ids
        LEFT JOIN semantic_texts text ON text.indexed_text_id = ids.indexed_text_id
        LEFT JOIN source_cards cards ON cards.source_card_id = ids.source_card_id
        LEFT JOIN semantic_embeddings embeddings ON embeddings.indexed_text_id = ids.indexed_text_id
        WHERE text.indexed_text_id IS NULL
           OR cards.source_card_id IS NULL
           OR embeddings.indexed_text_id IS NULL
      `,
      )
      .all();
    for (const r of t) {
      const n = T(r.vector_id);
      (this.deleteVectorRow(e, n), this.deleteVectorMapping(e, n));
    }
  }
  retainedCount(e) {
    return y(e, `SELECT COUNT(*) AS value FROM ${N}`);
  }
  durableEmbeddingCount(e) {
    return y(
      e,
      `
      SELECT COUNT(*) AS value
      FROM semantic_texts text
      JOIN semantic_embeddings embedding
        ON embedding.indexed_text_id = text.indexed_text_id
    `,
    );
  }
}
function A(i) {
  try {
    i.prepare("DELETE FROM semantic_index_meta WHERE key = ?").run(F);
  } catch {}
}
function Se() {
  const i = de.getLoadablePath();
  return x
    .normalize(i)
    .replace(`${x.sep}app.asar${x.sep}`, `${x.sep}app.asar.unpacked${x.sep}`);
}
function ge(i) {
  return i.prepare("SELECT vec_version() AS value").get()?.value ?? "unknown";
}
function j(i, e, t) {
  return t ? BigInt(Z(i, e, t)) : 0n;
}
function Z(i, e, t) {
  const r = S(i, e, t);
  if (r) return r;
  const n = i
    .prepare(
      "INSERT INTO semantic_index_terms (term_kind, term_value) VALUES (?, ?)",
    )
    .run(e, t);
  return T(n.lastInsertRowid);
}
function S(i, e, t) {
  const r = i
    .prepare(
      "SELECT term_id FROM semantic_index_terms WHERE term_kind = ? AND term_value = ?",
    )
    .get(e, t);
  return r ? T(r.term_id) : null;
}
function y(i, e) {
  const t = i.prepare(e).get();
  return t ? T(t.value) : 0;
}
function Oe() {
  return new Ae();
}
const ve = 3;
class Ae {
  exact = new xe();
  sqliteVec = new Re();
  sqliteVecAvailable = !1;
  sqliteVecInitAttempts = 0;
  lastError;
  initialize(e) {
    this.exact.initialize(e);
  }
  upsert(e, t) {
    if (this.ensureSqliteVec(e))
      try {
        this.sqliteVec.upsert(e, t);
      } catch (r) {
        this.disableSqliteVec(e, r instanceof Error ? r : null);
      }
  }
  refresh(e, t) {
    if (!this.sqliteVecAvailable) {
      A(e);
      return;
    }
    try {
      this.sqliteVec.refresh(e, t);
    } catch (r) {
      this.disableSqliteVec(e, r instanceof Error ? r : null);
    }
  }
  deleteByIndexedTextId(e, t) {
    if (!this.sqliteVecAvailable) {
      A(e);
      return;
    }
    try {
      this.sqliteVec.deleteByIndexedTextId(e, t);
    } catch (r) {
      this.disableSqliteVec(e, r instanceof Error ? r : null);
    }
  }
  enforceRetention(e) {
    if (this.ensureSqliteVec(e))
      try {
        this.sqliteVec.enforceRetention(e);
      } catch (t) {
        this.disableSqliteVec(e, t instanceof Error ? t : null);
      }
  }
  search(e, t, r) {
    if (!this.ensureSqliteVec(e)) return this.exact.search(e, t, r);
    try {
      return this.sqliteVec.search(e, t, r);
    } catch (n) {
      return (
        this.disableSqliteVec(e, n instanceof Error ? n : null),
        this.exact.search(e, t, r)
      );
    }
  }
  health(e) {
    return this.sqliteVecAvailable
      ? {
          ...this.sqliteVec.health(e),
          ...(this.lastError ? { lastError: this.lastError } : {}),
        }
      : {
          ...this.exact.health(e),
          version: O,
          ...(this.lastError ? { lastError: this.lastError } : {}),
        };
  }
  disableSqliteVec(e, t) {
    if (((this.sqliteVecAvailable = !1), A(e), t)) {
      (this.sqliteVec.setLastError(t), (this.lastError = M(t)));
      return;
    }
    this.lastError = "sqlite_vec unavailable";
  }
  ensureSqliteVec(e) {
    if (this.sqliteVecAvailable) return !0;
    if (this.sqliteVecInitAttempts >= ve) return !1;
    this.sqliteVecInitAttempts++;
    try {
      return (
        this.sqliteVec.initialize(e),
        (this.sqliteVecAvailable = !0),
        (this.lastError = void 0),
        !0
      );
    } catch (t) {
      return (
        (this.sqliteVecAvailable = !1),
        A(e),
        (this.lastError = t instanceof Error ? M(t) : "sqlite_vec load failed"),
        !1
      );
    }
  }
}
const ee = [
    {
      id: 1,
      name: "initial_search_schema",
      up: (i) => {
        i.exec(`
        CREATE TABLE IF NOT EXISTS migrations (
          id INTEGER PRIMARY KEY,
          name TEXT NOT NULL UNIQUE,
          executed_at INTEGER NOT NULL
        );

        CREATE TABLE IF NOT EXISTS activity_chunks (
          chunk_id TEXT PRIMARY KEY,
          logical_date TEXT NOT NULL,
          captured_at TEXT NOT NULL,
          url_domain TEXT NOT NULL,
          data_json TEXT NOT NULL
        );

        CREATE INDEX IF NOT EXISTS idx_gia_chunks_date_time
          ON activity_chunks(logical_date, captured_at);

        CREATE TABLE IF NOT EXISTS activity_screenshots (
          artifact_id TEXT PRIMARY KEY,
          logical_date TEXT NOT NULL,
          content_ref TEXT NOT NULL,
          content_hash TEXT NOT NULL,
          byte_size INTEGER NOT NULL,
          width INTEGER NOT NULL,
          height INTEGER NOT NULL,
          created_at TEXT NOT NULL
        );

        CREATE TABLE IF NOT EXISTS activity_decisions (
          decision_id TEXT PRIMARY KEY,
          logical_date TEXT NOT NULL,
          data_json TEXT NOT NULL
        );

        CREATE TABLE IF NOT EXISTS activity_decision_events (
          event_id TEXT PRIMARY KEY,
          logical_date TEXT,
          created_at TEXT,
          phase TEXT NOT NULL,
          outcome TEXT NOT NULL,
          chunk_id TEXT,
          trace_id TEXT,
          window_id TEXT,
          data_json TEXT NOT NULL
        );

        CREATE INDEX IF NOT EXISTS idx_gia_decision_events_date
          ON activity_decision_events(logical_date, created_at);

        CREATE TABLE IF NOT EXISTS activity_grouping_traces (
          trace_id TEXT PRIMARY KEY,
          logical_date TEXT NOT NULL,
          created_at TEXT NOT NULL,
          chunk_id TEXT NOT NULL,
          data_json TEXT NOT NULL
        );

        CREATE INDEX IF NOT EXISTS idx_gia_traces_date_time
          ON activity_grouping_traces(logical_date, created_at);

        CREATE TABLE IF NOT EXISTS activity_windows (
          window_id TEXT PRIMARY KEY,
          logical_date TEXT NOT NULL,
          status TEXT NOT NULL,
          activity_kind TEXT NOT NULL,
          started_at TEXT NOT NULL,
          updated_at TEXT NOT NULL,
          ended_at TEXT,
          url_domain TEXT,
          data_json TEXT NOT NULL
        );

        CREATE INDEX IF NOT EXISTS idx_gia_windows_status_time
          ON activity_windows(status, updated_at);

        CREATE TABLE IF NOT EXISTS activity_window_chunks (
          window_id TEXT NOT NULL,
          chunk_id TEXT NOT NULL,
          PRIMARY KEY (window_id, chunk_id)
        );

        CREATE TABLE IF NOT EXISTS source_cards (
          source_card_id TEXT PRIMARY KEY,
          card_type TEXT NOT NULL,
          subject_id TEXT NOT NULL,
          logical_date TEXT NOT NULL,
          observed_at TEXT NOT NULL,
          updated_at TEXT NOT NULL,
          url_domain TEXT,
          activity_kind TEXT,
          window_id TEXT,
          title TEXT NOT NULL,
          summary TEXT NOT NULL,
          search_text TEXT NOT NULL,
          data_json TEXT NOT NULL
        );

        CREATE INDEX IF NOT EXISTS idx_gia_source_cards_time
          ON source_cards(updated_at);
        CREATE INDEX IF NOT EXISTS idx_gia_source_cards_domain
          ON source_cards(url_domain, updated_at);
        CREATE INDEX IF NOT EXISTS idx_gia_source_cards_type_observed
          ON source_cards(card_type, observed_at);

        CREATE TABLE IF NOT EXISTS source_card_evidence (
          source_card_id TEXT NOT NULL,
          evidence_kind TEXT NOT NULL,
          evidence_id TEXT NOT NULL,
          PRIMARY KEY (source_card_id, evidence_kind, evidence_id)
        );

        CREATE VIRTUAL TABLE IF NOT EXISTS source_card_fts USING fts5(
          source_card_id UNINDEXED,
          title,
          summary,
          search_text,
          tokenize = 'unicode61'
        );

        CREATE TABLE IF NOT EXISTS semantic_texts (
          indexed_text_id TEXT PRIMARY KEY,
          source_card_id TEXT NOT NULL UNIQUE,
          text_hash TEXT NOT NULL,
          text TEXT NOT NULL,
          schema_version TEXT NOT NULL,
          index_version TEXT NOT NULL,
          model TEXT NOT NULL,
          dims INTEGER NOT NULL,
          normalizer_version TEXT NOT NULL,
          input_template_version TEXT NOT NULL,
          updated_at TEXT NOT NULL
        );

        CREATE TABLE IF NOT EXISTS semantic_embeddings (
          indexed_text_id TEXT PRIMARY KEY,
          model TEXT NOT NULL,
          dims INTEGER NOT NULL,
          normalizer_version TEXT NOT NULL,
          index_version TEXT NOT NULL,
          vector_blob BLOB NOT NULL,
          vector_checksum TEXT NOT NULL,
          created_at TEXT NOT NULL
        );

        CREATE TABLE IF NOT EXISTS embedding_jobs (
          indexed_text_id TEXT PRIMARY KEY,
          status TEXT NOT NULL,
          attempts INTEGER NOT NULL DEFAULT 0,
          last_error TEXT,
          updated_at TEXT NOT NULL
        );

        CREATE INDEX IF NOT EXISTS idx_gia_embedding_jobs_status
          ON embedding_jobs(status, updated_at);
      `);
      },
    },
    {
      id: 2,
      name: "semantic_index_metadata",
      up: (i) => {
        i.exec(`
        CREATE TABLE IF NOT EXISTS semantic_vector_ids (
          vector_id INTEGER PRIMARY KEY,
          indexed_text_id TEXT NOT NULL UNIQUE,
          source_card_id TEXT NOT NULL UNIQUE
        );

        CREATE TABLE IF NOT EXISTS semantic_index_terms (
          term_id INTEGER PRIMARY KEY,
          term_kind TEXT NOT NULL,
          term_value TEXT NOT NULL,
          UNIQUE(term_kind, term_value)
        );

        CREATE TABLE IF NOT EXISTS semantic_index_meta (
          key TEXT PRIMARY KEY,
          value TEXT NOT NULL
        );

        CREATE INDEX IF NOT EXISTS idx_gia_source_cards_kind_time
          ON source_cards(activity_kind, updated_at);
        CREATE INDEX IF NOT EXISTS idx_gia_source_cards_type_time
          ON source_cards(card_type, updated_at);
      `);
      },
    },
    {
      id: 3,
      name: "embedding_job_backoff",
      up: (i) => {
        i.exec(`
        ALTER TABLE embedding_jobs ADD COLUMN next_attempt_at TEXT;

        CREATE INDEX IF NOT EXISTS idx_gia_embedding_jobs_next_attempt
          ON embedding_jobs(status, next_attempt_at);
      `);
      },
    },
    {
      id: 4,
      name: "embedding_job_backoff_recovery",
      up: (i) => {
        (i
          .prepare(
            "SELECT 1 FROM pragma_table_info('embedding_jobs') WHERE name = 'next_attempt_at'",
          )
          .get() !== void 0 ||
          i.exec("ALTER TABLE embedding_jobs ADD COLUMN next_attempt_at TEXT;"),
          i.exec(`
        CREATE INDEX IF NOT EXISTS idx_gia_embedding_jobs_next_attempt
          ON embedding_jobs(status, next_attempt_at);
      `));
      },
    },
    {
      id: 5,
      name: "drop_unused_decision_and_evidence_tables",
      up: (i) => {
        i.exec(`
        DROP TABLE IF EXISTS activity_decisions;
        DROP TABLE IF EXISTS source_card_evidence;
      `);
      },
    },
    {
      id: 6,
      name: "retention_indexes",
      up: (i) => {
        const e = i.prepare(
            "SELECT 1 FROM sqlite_master WHERE type = 'table' AND name = ?",
          ),
          t = [
            { name: "idx_gia_screenshots_date", table: "activity_screenshots" },
            { name: "idx_gia_windows_date", table: "activity_windows" },
          ];
        for (const { name: r, table: n } of t)
          e.get(n) &&
            i.exec(`CREATE INDEX IF NOT EXISTS ${r} ON ${n}(logical_date)`);
      },
    },
    {
      id: 7,
      name: "recall_coverage_index",
      up: (i) => {
        i
          .prepare(
            "SELECT 1 FROM sqlite_master WHERE type = 'table' AND name = 'source_cards'",
          )
          .get() !== void 0 &&
          i.exec(`
        CREATE INDEX IF NOT EXISTS idx_gia_source_cards_type_observed
          ON source_cards(card_type, observed_at);
      `);
      },
    },
  ],
  B = new Set();
for (const i of ee) {
  if (B.has(i.id))
    throw new Error(
      `Duplicate Gia Activity Memory migration id ${i.id} ("${i.name}"). Migration ids must be unique and append-only.`,
    );
  B.add(i.id);
}
function Ce(i) {
  i.exec(`
    CREATE TABLE IF NOT EXISTS migrations (
      id INTEGER PRIMARY KEY,
      name TEXT NOT NULL UNIQUE,
      executed_at INTEGER NOT NULL
    );
  `);
  const e = new Set(
    i
      .prepare("SELECT id FROM migrations")
      .all()
      .map((t) => t.id),
  );
  for (const t of ee)
    e.has(t.id) ||
      i.transaction(() => {
        (t.up(i),
          i
            .prepare(
              "INSERT INTO migrations (id, name, executed_at) VALUES (?, ?, ?)",
            )
            .run(t.id, t.name, Date.now()));
      })();
}
const Le = 50,
  ye = 300,
  H = 8,
  we = 3e4,
  De = 30 * 6e4,
  be = u.looseObject({
    evidenceLabels: u.optional(
      u.pipe(u.array(u.pipe(u.string(), u.minLength(1))), u.maxLength(200)),
      () => [],
    ),
  });
class Me {
  constructor(e) {
    this.appDataPath = e;
  }
  databasesByProfile = new Map();
  semanticIndexesByProfile = new Map();
  initialize(e) {
    this.closeProfileDatabase(e);
    const t = this.profilePath(e);
    ae.mkdirSync(t, { recursive: !0 });
    const r = new se(x.join(t, "gia-activity-memory.db"));
    (r.pragma("journal_mode = WAL"),
      r.pragma("synchronous = NORMAL"),
      r.pragma("foreign_keys = ON"),
      Ce(r));
    const n = Oe();
    (n.initialize(r),
      this.databasesByProfile.set(e, r),
      this.semanticIndexesByProfile.set(e, n));
  }
  closeProfileDatabase(e) {
    const t = this.databasesByProfile.get(e);
    t &&
      (t.close(),
      this.databasesByProfile.delete(e),
      this.semanticIndexesByProfile.delete(e));
  }
  cleanup() {
    for (const e of Array.from(this.databasesByProfile.keys()))
      this.closeProfileDatabase(e);
  }
  writeChunk(e, t) {
    const r = this.ensureDb(e),
      n = this.ensureSemanticIndex(e);
    r.transaction(() => {
      (this.upsertChunk(r, t), this.upsertChunkScreenshots(r, t));
      for (const a of _e(t)) this.upsertSourceCard(r, a, n);
    })();
  }
  writeDecisionEvent(e, t, r) {
    const n = this.ensureDb(e);
    this.upsertDecisionEvent(n, t, r);
  }
  applyDecisionWindowClosures(e, t, r) {
    for (const n of t.closeWindowIds)
      this.markWindowClosed(e, n, r, t.patch?.endedAt);
  }
  upsertDecisionEvent(e, t, r) {
    e.prepare(
      `
      INSERT INTO activity_decision_events (
        event_id, logical_date, created_at, phase, outcome, chunk_id, trace_id, window_id, data_json
      )
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
      ON CONFLICT(event_id) DO UPDATE SET
        logical_date = excluded.logical_date,
        created_at = excluded.created_at,
        phase = excluded.phase,
        outcome = excluded.outcome,
        chunk_id = excluded.chunk_id,
        trace_id = excluded.trace_id,
        window_id = excluded.window_id,
        data_json = excluded.data_json
    `,
    ).run(
      t.eventId,
      t.logicalDate ?? r,
      t.createdAt ?? null,
      t.phase,
      t.outcome,
      t.chunkId ?? null,
      t.traceId ?? null,
      t.windowId ?? null,
      JSON.stringify(t),
    );
  }
  writeGroupingTrace(e, t) {
    const r = this.ensureDb(e),
      n = this.ensureSemanticIndex(e);
    r.transaction(() => {
      this.upsertGroupingTrace(r, t);
      for (const a of t.nextOpenWindows) this.upsertWindow(r, a, n);
    })();
  }
  commitIngest(e, t) {
    const r = this.ensureDb(e),
      n = this.ensureSemanticIndex(e);
    r.transaction(() => {
      const a = new Set([
          ...t.nextOpenWindows.map((d) => d.windowId),
          ...t.evictedWindows.map((d) => d.windowId),
        ]),
        s = r
          .prepare(
            "SELECT window_id FROM activity_windows WHERE status = 'active'",
          )
          .all()
          .map((d) => d.window_id);
      for (const d of s) a.has(d) || this.markWindowClosed(r, d, n);
      for (const d of t.nextOpenWindows) this.upsertWindow(r, d, n);
      for (const d of t.evictedWindows) this.upsertWindow(r, d, n);
      for (const d of t.decisionEvents)
        this.upsertDecisionEvent(r, d, t.logicalDate);
      for (const d of t.decisions) this.applyDecisionWindowClosures(r, d, n);
      this.upsertGroupingTrace(r, t.trace);
    })();
  }
  readRecentChunks(e, t, r) {
    return this.ensureDb(e)
      .prepare(
        `
          SELECT data_json
          FROM activity_chunks
          WHERE logical_date = ?
          ORDER BY captured_at DESC, chunk_id DESC
          LIMIT ?
        `,
      )
      .all(t, r)
      .reverse()
      .map((a) => g(a.data_json, c.GiaActivityCaptureChunkSchema, "chunk"))
      .filter(f);
  }
  readOpenWindows(e) {
    return this.ensureDb(e)
      .prepare(
        `
          SELECT data_json
          FROM activity_windows
          WHERE status = 'active'
          ORDER BY updated_at DESC
          LIMIT 8
        `,
      )
      .all()
      .map((r) => g(r.data_json, c.GiaActivityWindowSchema, "window"))
      .filter(f);
  }
  writeOpenWindows(e, t) {
    const r = this.ensureDb(e),
      n = this.ensureSemanticIndex(e);
    r.transaction(() => {
      const a = new Set(t.map((d) => d.windowId)),
        s = r
          .prepare(
            "SELECT window_id FROM activity_windows WHERE status = 'active'",
          )
          .all()
          .map((d) => d.window_id);
      for (const d of s) a.has(d) || this.markWindowClosed(r, d, n);
      for (const d of t) this.upsertWindow(r, d, n);
    })();
  }
  readChunks(e, t) {
    return this.readJsonRows(
      e,
      "activity_chunks",
      "captured_at DESC, chunk_id DESC",
      t,
      c.GiaActivityCaptureChunkSchema,
    );
  }
  readDecisionEvents(e, t) {
    return this.readJsonRows(
      e,
      "activity_decision_events",
      "created_at DESC, event_id DESC",
      t,
      c.GiaActivityDecisionEventSchema,
    );
  }
  readGroupingTraces(e, t) {
    return this.readJsonRows(
      e,
      "activity_grouping_traces",
      "created_at DESC, trace_id DESC",
      t,
      c.GiaActivityGroupingTraceSchema,
    );
  }
  profileRootForInspection(e) {
    return x.join(this.profilePath(e), "gia-activity-memory");
  }
  getSearchReadiness(e) {
    const t = this.ensureDb(e),
      r = this.ensureSemanticIndex(e).health(t),
      n = this.count(t, "SELECT COUNT(*) AS value FROM source_cards"),
      a = this.count(
        t,
        `
      SELECT COUNT(*) AS value
      FROM semantic_texts text
      JOIN semantic_embeddings embedding
        ON embedding.indexed_text_id = text.indexed_text_id
    `,
      ),
      s = this.count(
        t,
        "SELECT COUNT(*) AS value FROM embedding_jobs WHERE status = 'pending'",
      ),
      d = this.count(
        t,
        "SELECT COUNT(*) AS value FROM embedding_jobs WHERE status = 'failed'",
      ),
      _ = this.count(
        t,
        "SELECT COUNT(*) AS value FROM embedding_jobs WHERE status = 'abandoned'",
      ),
      o = t
        .prepare(
          `
        SELECT last_error
        FROM embedding_jobs
        WHERE status IN ('failed', 'abandoned') AND last_error IS NOT NULL
        ORDER BY updated_at DESC
        LIMIT 1
      `,
        )
        .get();
    return {
      sourceCardCount: n,
      embeddedSourceCardCount: a,
      pendingEmbeddingJobCount: s,
      failedEmbeddingJobCount: d,
      abandonedEmbeddingJobCount: _,
      embeddingModel: c.GIA_ACTIVITY_EMBEDDING_MODEL,
      embeddingDims: c.GIA_ACTIVITY_EMBEDDING_DIMS,
      normalizerVersion: c.GIA_ACTIVITY_SEMANTIC_NORMALIZER_VERSION,
      indexVersion: c.GIA_ACTIVITY_SOURCE_CARD_INDEX_VERSION,
      semanticIndexBackend: r.backend,
      semanticIndexVersion: r.version,
      semanticVectorIndexedCount: r.indexedCount,
      semanticVectorRetainedCount: r.retainedCount,
      ...(r.lastError ? { lastSemanticIndexError: r.lastError } : {}),
      ...(o?.last_error ? { lastEmbeddingError: o.last_error } : {}),
    };
  }
  readPendingEmbeddingTexts(e, t) {
    const r = this.ensureDb(e),
      n = new Date().toISOString();
    return r
      .prepare(
        `
          SELECT text.indexed_text_id, text.source_card_id, text.text
          FROM semantic_texts text
          JOIN embedding_jobs job ON job.indexed_text_id = text.indexed_text_id
          WHERE job.status = 'pending'
             OR (
               job.status = 'failed'
               AND job.attempts < ?
               AND (job.next_attempt_at IS NULL OR job.next_attempt_at <= ?)
             )
          ORDER BY CASE WHEN job.status = 'pending' THEN 0 ELSE 1 END,
                   COALESCE(job.next_attempt_at, job.updated_at) ASC
          LIMIT ?
        `,
      )
      .all(H, n, t)
      .map((a) => ({
        indexedTextId: a.indexed_text_id,
        sourceCardId: a.source_card_id,
        text: a.text,
      }));
  }
  countUnfinishedEmbeddingJobs(e) {
    const t = this.ensureDb(e);
    return this.count(
      t,
      "SELECT COUNT(*) AS value FROM embedding_jobs WHERE status IN ('pending', 'failed')",
    );
  }
  upsertEmbeddingVectors(e, t) {
    const r = this.ensureDb(e),
      n = this.ensureSemanticIndex(e),
      a = new Date().toISOString();
    r.transaction(() => {
      for (const s of t) {
        if (s.vector.length !== c.GIA_ACTIVITY_EMBEDDING_DIMS)
          throw new Error(
            "Gia Activity Memory embedding vector dimension mismatch",
          );
        r.prepare(
          `
          INSERT INTO semantic_embeddings (
            indexed_text_id, model, dims, normalizer_version, index_version,
            vector_blob, vector_checksum, created_at
          )
          VALUES (?, ?, ?, ?, ?, ?, ?, ?)
          ON CONFLICT(indexed_text_id) DO UPDATE SET
            model = excluded.model,
            dims = excluded.dims,
            normalizer_version = excluded.normalizer_version,
            index_version = excluded.index_version,
            vector_blob = excluded.vector_blob,
            vector_checksum = excluded.vector_checksum,
            created_at = excluded.created_at
        `,
        ).run(
          s.indexedTextId,
          c.GIA_ACTIVITY_EMBEDDING_MODEL,
          c.GIA_ACTIVITY_EMBEDDING_DIMS,
          c.GIA_ACTIVITY_SEMANTIC_NORMALIZER_VERSION,
          c.GIA_ACTIVITY_SOURCE_CARD_INDEX_VERSION,
          b(s.vector),
          Ge(s.vector),
          a,
        );
        const d = this.semanticIndexRecordForEmbedding(r, s);
        (d && n.upsert(r, d),
          r
            .prepare(
              `
          INSERT INTO embedding_jobs (indexed_text_id, status, attempts, updated_at)
          VALUES (?, 'embedded', 0, ?)
          ON CONFLICT(indexed_text_id) DO UPDATE SET
            status = 'embedded',
            attempts = 0,
            last_error = NULL,
          updated_at = excluded.updated_at
        `,
            )
            .run(s.indexedTextId, a));
      }
      n.enforceRetention(r);
    })();
  }
  markEmbeddingFailures(e, t, r, n) {
    const a = this.ensureDb(e),
      s = Date.now(),
      d = new Date(s).toISOString(),
      _ = r.slice(0, ye),
      o = a.prepare(
        "SELECT attempts FROM embedding_jobs WHERE indexed_text_id = ?",
      ),
      l = a.prepare(`
      UPDATE embedding_jobs
      SET status = ?,
          attempts = ?,
          last_error = ?,
          next_attempt_at = ?,
          updated_at = ?
      WHERE indexed_text_id = ?
    `);
    a.transaction(() => {
      for (const p of t) {
        const h = (o.get(p)?.attempts ?? 0) + 1,
          W = n === "permanent" || h >= H,
          ie = W ? "abandoned" : "failed",
          re = W ? null : new Date(s + Fe(h)).toISOString();
        l.run(ie, h, _, re, d, p);
      }
    })();
  }
  deleteByLogicalDate(e, t) {
    const r = this.ensureDb(e),
      n = this.ensureSemanticIndex(e);
    let a = 0,
      s = 0,
      d = 0;
    const _ = [],
      o = `
      SELECT DISTINCT windows.window_id
      FROM activity_windows windows
      LEFT JOIN activity_window_chunks links ON links.window_id = windows.window_id
      LEFT JOIN activity_chunks chunks ON chunks.chunk_id = links.chunk_id
      WHERE windows.logical_date = ? OR chunks.logical_date = ?
    `;
    return (
      r.transaction(() => {
        const l = r.prepare(o).all(t, t);
        for (const h of r
          .prepare(
            "SELECT content_ref FROM activity_screenshots WHERE logical_date = ?",
          )
          .all(t))
          _.push(h.content_ref);
        s = this.deleteSourceCardScope(
          r,
          n,
          `source_cards.logical_date = ?
         OR source_cards.window_id IN (${o})`,
          [t, t, t],
        );
        const p = r.prepare(
            "DELETE FROM activity_window_chunks WHERE window_id = ?",
          ),
          v = r.prepare("DELETE FROM activity_windows WHERE window_id = ?");
        for (const h of l) (p.run(h.window_id), v.run(h.window_id));
        ((a = r
          .prepare("DELETE FROM activity_chunks WHERE logical_date = ?")
          .run(t).changes),
          (d = r
            .prepare("DELETE FROM activity_screenshots WHERE logical_date = ?")
            .run(t).changes),
          r
            .prepare(
              "DELETE FROM activity_decision_events WHERE logical_date = ?",
            )
            .run(t),
          r
            .prepare(
              "DELETE FROM activity_grouping_traces WHERE logical_date = ?",
            )
            .run(t),
          n.enforceRetention(r));
      })(),
      {
        deletedChunks: a,
        deletedSourceCards: s,
        deletedScreenshots: d,
        screenshotRefs: _,
      }
    );
  }
  deleteSourceCardScope(e, t, r, n) {
    const a = e
      .prepare(
        `SELECT t.indexed_text_id AS id
           FROM semantic_texts t
           JOIN source_cards c ON c.source_card_id = t.source_card_id
           WHERE ${r.replace(/source_cards\./g, "c.")}`,
      )
      .all(...n)
      .map((d) => d.id);
    for (const d of a) t.deleteByIndexedTextId(e, d);
    const s = `SELECT source_card_id FROM source_cards WHERE ${r}`;
    return (
      e
        .prepare(
          `DELETE FROM semantic_embeddings WHERE indexed_text_id IN (SELECT indexed_text_id FROM semantic_texts WHERE source_card_id IN (${s}))`,
        )
        .run(...n),
      e
        .prepare(
          `DELETE FROM embedding_jobs WHERE indexed_text_id IN (SELECT indexed_text_id FROM semantic_texts WHERE source_card_id IN (${s}))`,
        )
        .run(...n),
      e
        .prepare(`DELETE FROM source_card_fts WHERE source_card_id IN (${s})`)
        .run(...n),
      e
        .prepare(`DELETE FROM semantic_texts WHERE source_card_id IN (${s})`)
        .run(...n),
      e.prepare(`DELETE FROM source_cards WHERE ${r}`).run(...n).changes
    );
  }
  pruneExpired(e, t) {
    const r = this.ensureDb(e),
      n = this.ensureSemanticIndex(e);
    let a = [],
      s = 0,
      d = 0,
      _ = 0,
      o = 0;
    if (
      (r.transaction(() => {
        ((a = r
          .prepare(
            "SELECT DISTINCT logical_date FROM activity_screenshots WHERE logical_date < ?",
          )
          .all(t.screenshotCutoff)
          .map((l) => l.logical_date)),
          (s = r
            .prepare("DELETE FROM activity_screenshots WHERE logical_date < ?")
            .run(t.screenshotCutoff).changes));
      })(),
      r.transaction(() => {
        const l = t.rawCaptureCutoff;
        (r
          .prepare(
            "DELETE FROM activity_grouping_traces WHERE logical_date < ?",
          )
          .run(l),
          r
            .prepare(
              "DELETE FROM activity_decision_events WHERE logical_date IS NOT NULL AND logical_date < ?",
            )
            .run(l),
          (_ = r
            .prepare(
              "DELETE FROM activity_windows WHERE logical_date < ? AND status = 'closed'",
            )
            .run(l).changes),
          (d = r
            .prepare(
              `DELETE FROM activity_chunks
           WHERE logical_date < ?
             AND chunk_id NOT IN (
               SELECT wc.chunk_id FROM activity_window_chunks wc
               JOIN activity_windows w ON w.window_id = wc.window_id
               WHERE w.status = 'active'
             )`,
            )
            .run(l).changes),
          r
            .prepare(
              `DELETE FROM activity_window_chunks
         WHERE chunk_id NOT IN (SELECT chunk_id FROM activity_chunks)
            OR window_id NOT IN (SELECT window_id FROM activity_windows)`,
            )
            .run());
      })(),
      t.memoryCutoff !== null)
    ) {
      const l = t.memoryCutoff;
      r.transaction(() => {
        (this.deleteSourceCardScope(r, n, "source_cards.logical_date < ?", [l]),
          n.enforceRetention(r));
      })();
    }
    return (
      r.transaction(() => {
        (r.exec("DROP TABLE IF EXISTS temp.gia_retention_evicted"),
          r.exec(
            "CREATE TEMP TABLE gia_retention_evicted (indexed_text_id TEXT PRIMARY KEY)",
          ),
          r
            .prepare(
              `INSERT INTO gia_retention_evicted (indexed_text_id)
         SELECT t.indexed_text_id
         FROM semantic_texts t
         JOIN source_cards c ON c.source_card_id = t.source_card_id
         JOIN semantic_embeddings e ON e.indexed_text_id = t.indexed_text_id
         ORDER BY c.updated_at DESC,
                  CASE c.card_type WHEN 'window' THEN 0 WHEN 'frame' THEN 1 ELSE 2 END,
                  c.source_card_id DESC
         LIMIT -1 OFFSET ?`,
            )
            .run(t.maxVectors),
          r
            .prepare(
              `INSERT OR IGNORE INTO gia_retention_evicted (indexed_text_id)
         SELECT indexed_text_id FROM semantic_texts
         WHERE source_card_id NOT IN (SELECT source_card_id FROM source_cards)`,
            )
            .run(),
          (o += r
            .prepare(
              "DELETE FROM semantic_embeddings WHERE indexed_text_id IN (SELECT indexed_text_id FROM gia_retention_evicted)",
            )
            .run().changes),
          r
            .prepare(
              "DELETE FROM embedding_jobs WHERE indexed_text_id IN (SELECT indexed_text_id FROM gia_retention_evicted)",
            )
            .run(),
          r
            .prepare(
              "DELETE FROM semantic_texts WHERE indexed_text_id IN (SELECT indexed_text_id FROM gia_retention_evicted)",
            )
            .run(),
          (o += r
            .prepare(
              "DELETE FROM semantic_embeddings WHERE indexed_text_id NOT IN (SELECT indexed_text_id FROM semantic_texts)",
            )
            .run().changes),
          r
            .prepare(
              "DELETE FROM embedding_jobs WHERE indexed_text_id NOT IN (SELECT indexed_text_id FROM semantic_texts)",
            )
            .run(),
          r.exec("DROP TABLE IF EXISTS temp.gia_retention_evicted"),
          n.enforceRetention(r));
      })(),
      {
        prunedScreenshotDates: a,
        deletedScreenshots: s,
        deletedChunks: d,
        deletedWindows: _,
        prunedVectors: o,
      }
    );
  }
  deleteAll(e) {
    const t = this.ensureDb(e),
      r = this.ensureSemanticIndex(e);
    let n = 0,
      a = 0,
      s = 0;
    return (
      t.transaction(() => {
        ((n = t.prepare("SELECT COUNT(*) AS n FROM activity_chunks").get().n),
          (a = t.prepare("SELECT COUNT(*) AS n FROM source_cards").get().n),
          (s = t
            .prepare("SELECT COUNT(*) AS n FROM activity_screenshots")
            .get().n));
        for (const d of t
          .prepare("SELECT indexed_text_id AS id FROM semantic_texts")
          .all())
          r.deleteByIndexedTextId(t, d.id);
        (t.prepare("DELETE FROM activity_chunks").run(),
          t.prepare("DELETE FROM activity_screenshots").run(),
          t.prepare("DELETE FROM activity_decision_events").run(),
          t.prepare("DELETE FROM activity_grouping_traces").run(),
          t.prepare("DELETE FROM activity_windows").run(),
          t.prepare("DELETE FROM activity_window_chunks").run(),
          t.prepare("DELETE FROM source_cards").run(),
          t.prepare("DELETE FROM source_card_fts").run(),
          t.prepare("DELETE FROM semantic_texts").run(),
          t.prepare("DELETE FROM semantic_embeddings").run(),
          t.prepare("DELETE FROM embedding_jobs").run(),
          r.enforceRetention(t));
      })(),
      { deletedChunks: n, deletedSourceCards: a, deletedScreenshots: s }
    );
  }
  search(e, t, r) {
    const n = this.ensureDb(e),
      a = this.ensureSemanticIndex(e),
      s = u.parse(c.GiaActivitySearchRequestSchema, t),
      d = this.ftsCandidates(n, s),
      _ = r ? this.vectorCandidates(n, a, s, r) : [],
      l = ke(d, _)
        .slice(0, s.limit)
        .map((v) => this.searchResultForCandidate(n, v, s.includeScreenshots))
        .filter(f),
      p = {
        profileId: e,
        generatedAt: new Date().toISOString(),
        query: s.query,
        results: l,
        readiness: this.getSearchReadiness(e),
        coverage: this.recallCoverage(n, s.fromIso, s.toIso),
        embeddingUsed: !!r,
        ...(r ? {} : { fallbackReason: "embedding_unavailable_fts_only" }),
      };
    return u.parse(c.GiaActivitySearchResponseSchema, p);
  }
  getSourceCard(e, t) {
    const r = this.ensureDb(e),
      n = u.parse(c.GiaActivitySourceCardLookupRequestSchema, t),
      a = this.cardById(r, n.sourceCardId);
    return {
      sourceCard: a,
      ...(a && n.includeScreenshots
        ? {
            screenshotArtifacts: this.screenshotArtifacts(
              r,
              a.screenshotArtifactIds,
            ),
          }
        : {}),
    };
  }
  timeline(e, t) {
    const r = this.ensureDb(e),
      n = u.parse(c.GiaActivityTimelineRequestSchema, t),
      s = this.timelineRows(r, n)
        .map((_) => this.timelineResultForCardRow(r, _, n.includeScreenshots))
        .filter(f),
      d = {
        profileId: e,
        generatedAt: new Date().toISOString(),
        fromIso: n.fromIso,
        toIso: n.toIso,
        results: s,
        readiness: this.getSearchReadiness(e),
        coverage: this.recallCoverage(r, n.fromIso, n.toIso),
        summary: this.timelineSummary(r, n, s.length),
        embeddingUsed: !1,
      };
    return u.parse(c.GiaActivityTimelineResponseSchema, d);
  }
  ensureDb(e) {
    let t = this.databasesByProfile.get(e);
    if ((t || (this.initialize(e), (t = this.databasesByProfile.get(e))), !t))
      throw new Error(
        `Gia Activity Memory database failed to initialize for ${e}`,
      );
    return t;
  }
  ensureSemanticIndex(e) {
    let t = this.semanticIndexesByProfile.get(e);
    if (
      (t || (this.ensureDb(e), (t = this.semanticIndexesByProfile.get(e))), !t)
    )
      throw new Error(
        `Gia Activity Memory semantic index failed to initialize for ${e}`,
      );
    return t;
  }
  profilePath(e) {
    return x.join(this.appDataPath, "Partitions", `profile_${e}`);
  }
  upsertChunk(e, t) {
    e.prepare(
      `
      INSERT INTO activity_chunks (chunk_id, logical_date, captured_at, url_domain, data_json)
      VALUES (?, ?, ?, ?, ?)
      ON CONFLICT(chunk_id) DO UPDATE SET
        logical_date = excluded.logical_date,
        captured_at = excluded.captured_at,
        url_domain = excluded.url_domain,
        data_json = excluded.data_json
    `,
    ).run(
      t.chunkId,
      t.logicalDate,
      t.capturedAt,
      t.urlDomain,
      JSON.stringify(t),
    );
  }
  upsertChunkScreenshots(e, t) {
    for (const r of [t.beforeScreenshot, t.screenshot])
      r && this.upsertScreenshot(e, r, t.logicalDate, t.capturedAt);
  }
  upsertScreenshot(e, t, r, n) {
    e.prepare(
      `
      INSERT INTO activity_screenshots (
        artifact_id, logical_date, content_ref, content_hash, byte_size, width, height, created_at
      )
      VALUES (?, ?, ?, ?, ?, ?, ?, ?)
      ON CONFLICT(artifact_id) DO UPDATE SET
        logical_date = excluded.logical_date,
        content_ref = excluded.content_ref,
        content_hash = excluded.content_hash,
        byte_size = excluded.byte_size,
        width = excluded.width,
        height = excluded.height,
        created_at = excluded.created_at
    `,
    ).run(
      t.artifactId,
      r,
      t.contentRef,
      t.contentHash,
      t.byteSize,
      t.width,
      t.height,
      n,
    );
  }
  upsertGroupingTrace(e, t) {
    e.prepare(
      `
      INSERT INTO activity_grouping_traces (trace_id, logical_date, created_at, chunk_id, data_json)
      VALUES (?, ?, ?, ?, ?)
      ON CONFLICT(trace_id) DO UPDATE SET
        logical_date = excluded.logical_date,
        created_at = excluded.created_at,
        chunk_id = excluded.chunk_id,
        data_json = excluded.data_json
    `,
    ).run(t.traceId, t.logicalDate, t.createdAt, t.chunkId, JSON.stringify(t));
  }
  upsertWindow(e, t, r) {
    (e
      .prepare(
        `
      INSERT INTO activity_windows (
        window_id, logical_date, status, activity_kind, started_at, updated_at,
        ended_at, url_domain, data_json
      )
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
      ON CONFLICT(window_id) DO UPDATE SET
        logical_date = excluded.logical_date,
        status = excluded.status,
        activity_kind = excluded.activity_kind,
        started_at = excluded.started_at,
        updated_at = excluded.updated_at,
        ended_at = excluded.ended_at,
        url_domain = excluded.url_domain,
        data_json = excluded.data_json
    `,
      )
      .run(
        t.windowId,
        t.logicalDate,
        t.status,
        t.activityKind,
        t.startedAt,
        t.updatedAt,
        t.endedAt ?? null,
        t.urlDomain ?? null,
        JSON.stringify(t),
      ),
      e
        .prepare("DELETE FROM activity_window_chunks WHERE window_id = ?")
        .run(t.windowId));
    const n = e.prepare(
      "INSERT OR IGNORE INTO activity_window_chunks (window_id, chunk_id) VALUES (?, ?)",
    );
    for (const a of t.chunkIds) n.run(t.windowId, a);
    this.upsertSourceCard(e, ue(t), r);
  }
  markWindowClosed(e, t, r, n) {
    const a = e
      .prepare("SELECT data_json FROM activity_windows WHERE window_id = ?")
      .get(t);
    if (!a) return;
    const s = g(a.data_json, c.GiaActivityWindowSchema, "window");
    if (!s) return;
    const d = {
      ...s,
      status: "closed",
      endedAt: n ?? s.endedAt ?? s.updatedAt,
    };
    this.upsertWindow(e, d, r);
  }
  upsertSourceCard(e, t, r) {
    const n = u.parse(c.GiaActivitySourceCardSchema, t),
      a = Ve(n.sourceCardId),
      s = We(n.searchText),
      d = e
        .prepare(
          "SELECT text_hash FROM semantic_texts WHERE indexed_text_id = ?",
        )
        .get(a),
      _ = d?.text_hash !== s;
    if (
      (e
        .prepare(
          `
      INSERT INTO source_cards (
        source_card_id, card_type, subject_id, logical_date, observed_at, updated_at,
        url_domain, activity_kind, window_id, title, summary, search_text, data_json
      )
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
      ON CONFLICT(source_card_id) DO UPDATE SET
        card_type = excluded.card_type,
        subject_id = excluded.subject_id,
        logical_date = excluded.logical_date,
        observed_at = excluded.observed_at,
        updated_at = excluded.updated_at,
        url_domain = excluded.url_domain,
        activity_kind = excluded.activity_kind,
        window_id = excluded.window_id,
        title = excluded.title,
        summary = excluded.summary,
        search_text = excluded.search_text,
        data_json = excluded.data_json
    `,
        )
        .run(
          n.sourceCardId,
          n.cardType,
          n.subjectId,
          n.logicalDate,
          n.observedAt,
          n.updatedAt,
          n.urlDomain ?? null,
          n.activityKind ?? null,
          n.windowId ?? null,
          n.title,
          n.summary,
          n.searchText,
          JSON.stringify(n),
        ),
      e
        .prepare("DELETE FROM source_card_fts WHERE source_card_id = ?")
        .run(n.sourceCardId),
      e
        .prepare(
          "INSERT INTO source_card_fts (source_card_id, title, summary, search_text) VALUES (?, ?, ?, ?)",
        )
        .run(n.sourceCardId, n.title, n.summary, n.searchText),
      e
        .prepare(
          `
      INSERT INTO semantic_texts (
        indexed_text_id, source_card_id, text_hash, text, schema_version, index_version,
        model, dims, normalizer_version, input_template_version, updated_at
      )
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
      ON CONFLICT(indexed_text_id) DO UPDATE SET
        source_card_id = excluded.source_card_id,
        text_hash = excluded.text_hash,
        text = excluded.text,
        schema_version = excluded.schema_version,
        index_version = excluded.index_version,
        model = excluded.model,
        dims = excluded.dims,
        normalizer_version = excluded.normalizer_version,
        input_template_version = excluded.input_template_version,
        updated_at = excluded.updated_at
    `,
        )
        .run(
          a,
          n.sourceCardId,
          s,
          n.searchText,
          n.schemaVersion,
          n.indexVersion,
          c.GIA_ACTIVITY_EMBEDDING_MODEL,
          c.GIA_ACTIVITY_EMBEDDING_DIMS,
          c.GIA_ACTIVITY_SEMANTIC_NORMALIZER_VERSION,
          c.GIA_ACTIVITY_DOCUMENT_INPUT_TEMPLATE_VERSION,
          new Date().toISOString(),
        ),
      _)
    ) {
      (d &&
        (r.deleteByIndexedTextId(e, a),
        e
          .prepare("DELETE FROM semantic_embeddings WHERE indexed_text_id = ?")
          .run(a)),
        e
          .prepare(
            `
        INSERT INTO embedding_jobs (indexed_text_id, status, attempts, last_error, updated_at)
        VALUES (?, 'pending', 0, NULL, ?)
        ON CONFLICT(indexed_text_id) DO UPDATE SET
          status = 'pending',
          attempts = 0,
          last_error = NULL,
          updated_at = excluded.updated_at
      `,
          )
          .run(a, new Date().toISOString()));
      return;
    }
    const o = this.semanticIndexRecordForIndexedText(e, a);
    o && r.refresh(e, o);
  }
  semanticIndexRecordForEmbedding(e, t) {
    const r = e
      .prepare(
        `
        SELECT text.source_card_id,
               cards.updated_at,
               cards.url_domain,
               cards.activity_kind,
               cards.card_type
        FROM semantic_texts text
        JOIN source_cards cards ON cards.source_card_id = text.source_card_id
        WHERE text.indexed_text_id = ?
      `,
      )
      .get(t.indexedTextId);
    return r ? $(t.indexedTextId, r, t.vector) : null;
  }
  semanticIndexRecordForIndexedText(e, t) {
    const r = e
      .prepare(
        `
        SELECT text.source_card_id,
               cards.updated_at,
               cards.url_domain,
               cards.activity_kind,
               cards.card_type,
               embeddings.vector_blob
        FROM semantic_texts text
        JOIN source_cards cards ON cards.source_card_id = text.source_card_id
        JOIN semantic_embeddings embeddings ON embeddings.indexed_text_id = text.indexed_text_id
        WHERE text.indexed_text_id = ?
      `,
      )
      .get(t);
    return r ? $(t, r, Array.from(V(r.vector_blob))) : null;
  }
  readJsonRows(e, t, r, n, a) {
    return this.ensureDb(e)
      .prepare(
        `
          SELECT data_json
          FROM ${t}
          ORDER BY ${r}
          LIMIT ?
        `,
      )
      .all(n)
      .reverse()
      .map((d) => g(d.data_json, a, t))
      .filter(f);
  }
  ftsCandidates(e, t) {
    const r = Xe(t.query);
    if (!r) return [];
    const { clause: n, params: a } = Ue(t);
    return e
      .prepare(
        `
          SELECT cards.source_card_id
               , cards.updated_at
          FROM source_card_fts fts
          JOIN source_cards cards ON cards.source_card_id = fts.source_card_id
          WHERE source_card_fts MATCH ? ${n}
          ORDER BY rank
          LIMIT ${Le}
        `,
      )
      .all(r, ...a)
      .map((s, d) => ({
        sourceCardId: s.source_card_id,
        updatedAt: s.updated_at,
        ftsRank: d + 1,
      }));
  }
  vectorCandidates(e, t, r, n) {
    return n.length !== c.GIA_ACTIVITY_EMBEDDING_DIMS
      ? []
      : t
          .search(e, r, n)
          .map((a) => ({
            sourceCardId: a.sourceCardId,
            updatedAt: a.updatedAt,
            embeddingRank: a.embeddingRank,
            vectorSimilarity: a.vectorSimilarity,
          }));
  }
  searchResultForCandidate(e, t, r) {
    const n = this.cardById(e, t.sourceCardId);
    if (!n) return null;
    const a = [
      ...(t.ftsRank ? ["fts"] : []),
      ...(t.embeddingRank ? ["embedding"] : []),
    ];
    return {
      sourceCard: n,
      score: U(t),
      matchSources: a,
      ...(t.ftsRank ? { ftsRank: t.ftsRank } : {}),
      ...(t.embeddingRank ? { embeddingRank: t.embeddingRank } : {}),
      ...(t.vectorSimilarity !== void 0
        ? { vectorSimilarity: t.vectorSimilarity }
        : {}),
      evidence: {
        chunkIds: n.chunkIds,
        frameIds: n.frameIds,
        ...(n.windowId ? { windowId: n.windowId } : {}),
        screenshotArtifactIds: n.screenshotArtifactIds,
      },
      ...(r
        ? {
            screenshotArtifacts: this.screenshotArtifacts(
              e,
              n.screenshotArtifactIds,
            ),
          }
        : {}),
    };
  }
  cardById(e, t) {
    const r = e
      .prepare("SELECT data_json FROM source_cards WHERE source_card_id = ?")
      .get(t);
    return r ? Y(r.data_json) : null;
  }
  timelineRows(e, t) {
    const { clause: r, params: n } = P(t);
    return e
      .prepare(
        `
        SELECT cards.source_card_id,
               cards.observed_at,
               cards.updated_at,
               cards.data_json
        FROM source_cards cards
        WHERE cards.card_type = 'window'
          AND cards.updated_at >= ?
          AND cards.observed_at <= ?
          ${r}
        ORDER BY cards.updated_at DESC, cards.source_card_id DESC
        LIMIT ?
      `,
      )
      .all(t.fromIso, t.toIso, ...n, t.limit)
      .sort(
        (s, d) =>
          s.observed_at.localeCompare(d.observed_at) ||
          s.source_card_id.localeCompare(d.source_card_id),
      );
  }
  recallCoverage(e, t, r) {
    const n = ["card_type = 'chunk'"],
      a = [];
    (t && (n.push("observed_at >= ?"), a.push(t)),
      r && (n.push("observed_at <= ?"), a.push(r)));
    const s = e
        .prepare(
          `
        SELECT COUNT(*) AS value,
               MIN(observed_at) AS first_at,
               MAX(observed_at) AS last_at
        FROM source_cards
        WHERE ${n.join(" AND ")}
      `,
        )
        .get(...a),
      d = this.count(
        e,
        "SELECT COUNT(*) AS value FROM source_cards WHERE card_type = 'chunk'",
      ),
      _ = {
        inRangeCaptureCount: s.value,
        totalCaptureCount: d,
        firstInRangeCaptureIso: s.first_at,
        lastInRangeCaptureIso: s.last_at,
      };
    return t && r
      ? {
          rangeKind: "between",
          fromIso: t,
          toIso: r,
          ..._,
          nearestBeforeIso: this.nearestCaptureBefore(e, t),
          nearestAfterIso: this.nearestCaptureAfter(e, r),
        }
      : t
        ? {
            rangeKind: "after",
            fromIso: t,
            ..._,
            nearestBeforeIso: this.nearestCaptureBefore(e, t),
            nearestAfterIso: null,
          }
        : r
          ? {
              rangeKind: "before",
              toIso: r,
              ..._,
              nearestBeforeIso: null,
              nearestAfterIso: this.nearestCaptureAfter(e, r),
            }
          : {
              rangeKind: "all",
              ..._,
              nearestBeforeIso: null,
              nearestAfterIso: null,
            };
  }
  nearestCaptureBefore(e, t) {
    return e
      .prepare(
        `
        SELECT MAX(observed_at) AS last_at
        FROM source_cards
        WHERE card_type = 'chunk' AND observed_at < ?
      `,
      )
      .get(t).last_at;
  }
  nearestCaptureAfter(e, t) {
    return e
      .prepare(
        `
        SELECT MIN(observed_at) AS first_at
        FROM source_cards
        WHERE card_type = 'chunk' AND observed_at > ?
      `,
      )
      .get(t).first_at;
  }
  timelineSummary(e, t, r) {
    const { clause: n, params: a } = P(t),
      s = e
        .prepare(
          `
        SELECT COUNT(*) AS value, MAX(cards.updated_at) AS latest_at
        FROM source_cards cards
        WHERE cards.card_type = 'window'
          AND cards.updated_at >= ?
          AND cards.observed_at <= ?
          ${n}
      `,
        )
        .get(t.fromIso, t.toIso, ...a);
    return {
      matchingWindowCount: s.value,
      returnedWindowCount: r,
      truncated: s.value > r,
      latestWindowUpdatedAt: s.latest_at,
    };
  }
  timelineResultForCardRow(e, t, r) {
    const n = Y(t.data_json);
    if (!n) return null;
    const a = je(n);
    return {
      sourceCard: a,
      evidence: {
        chunkIds: a.chunkIds,
        frameIds: a.frameIds,
        ...(a.windowId ? { windowId: a.windowId } : {}),
        screenshotArtifactIds: a.screenshotArtifactIds,
      },
      ...(r
        ? {
            screenshotArtifacts: this.screenshotArtifacts(
              e,
              a.screenshotArtifactIds,
            ),
          }
        : {}),
    };
  }
  screenshotArtifacts(e, t) {
    return t.length === 0
      ? []
      : e
          .prepare(
            `
        SELECT artifact_id, content_ref, content_hash, byte_size, width, height
        FROM activity_screenshots
        WHERE artifact_id IN (${t.map(() => "?").join(",")})
      `,
          )
          .all(...t)
          .map((n) => ({
            artifactId: n.artifact_id,
            contentRef: n.content_ref,
            contentHash: n.content_hash,
            byteSize: n.byte_size,
            width: n.width,
            height: n.height,
          }));
  }
  count(e, t) {
    return e.prepare(t).get()?.value ?? 0;
  }
}
function Fe(i) {
  const e = Math.min(De, we * 2 ** (i - 1)),
    t = e / 2;
  return Math.round(t + Math.random() * (e - t));
}
function Ue(i) {
  const e = [],
    t = [];
  if (
    (i.fromIso && (e.push("AND cards.updated_at >= ?"), t.push(i.fromIso)),
    i.toIso && (e.push("AND cards.updated_at <= ?"), t.push(i.toIso)),
    i.urlDomain)
  ) {
    const r = i.urlDomain.toLowerCase().replace(/^www\./, "");
    (e.push("AND (cards.url_domain = ? OR cards.url_domain = ?)"),
      t.push(r, `www.${r}`));
  }
  return (
    i.activityKind &&
      (e.push("AND (cards.activity_kind = ? OR cards.activity_kind IS NULL)"),
      t.push(i.activityKind)),
    i.cardTypes?.length &&
      (e.push(
        `AND cards.card_type IN (${i.cardTypes.map(() => "?").join(",")})`,
      ),
      t.push(...i.cardTypes)),
    { clause: e.length ? ` ${e.join(" ")}` : "", params: t }
  );
}
function P(i) {
  const e = [],
    t = [];
  if (i.urlDomain) {
    const r = i.urlDomain.toLowerCase().replace(/^www\./, "");
    (e.push("AND (cards.url_domain = ? OR cards.url_domain = ?)"),
      t.push(r, `www.${r}`));
  }
  return (
    i.activityKind &&
      (e.push("AND cards.activity_kind = ?"), t.push(i.activityKind)),
    { clause: e.length ? ` ${e.join(" ")}` : "", params: t }
  );
}
function $(i, e, t) {
  return {
    indexedTextId: i,
    sourceCardId: e.source_card_id,
    updatedAt: e.updated_at,
    ...(e.url_domain ? { urlDomain: e.url_domain } : {}),
    ...(e.activity_kind ? { activityKind: e.activity_kind } : {}),
    cardType: e.card_type,
    vector: t,
  };
}
function ke(i, e) {
  const t = new Map();
  for (const r of [...i, ...e]) {
    const n = t.get(r.sourceCardId) ?? { sourceCardId: r.sourceCardId };
    t.set(r.sourceCardId, { ...n, ...r });
  }
  return Array.from(t.values()).sort((r, n) => {
    const a = U(n) - U(r);
    if (a !== 0) return a;
    const s = n.updatedAt ?? "",
      d = r.updatedAt ?? "";
    return s !== d
      ? s.localeCompare(d)
      : r.sourceCardId.localeCompare(n.sourceCardId);
  });
}
function U(i) {
  return (
    (i.ftsRank ? 1 / (60 + i.ftsRank) : 0) +
    (i.embeddingRank ? 1 / (60 + i.embeddingRank) : 0)
  );
}
function Xe(i) {
  return Array.from(i.toLowerCase().matchAll(/[\p{L}\p{N}]+/gu))
    .map((e) => `"${e[0]}"*`)
    .slice(0, 12)
    .join(" OR ");
}
function Ve(i) {
  return `${i}::${c.GIA_ACTIVITY_EMBEDDING_MODEL}::${c.GIA_ACTIVITY_EMBEDDING_DIMS}::${c.GIA_ACTIVITY_SEMANTIC_NORMALIZER_VERSION}::${c.GIA_ACTIVITY_SOURCE_CARD_INDEX_VERSION}`;
}
function We(i) {
  return z.createHash("sha256").update(i).digest("hex");
}
function Ge(i) {
  return z
    .createHash("sha256")
    .update(JSON.stringify(i.map((e) => Math.round(e * 1e8) / 1e8)))
    .digest("hex");
}
function g(i, e, t) {
  let r;
  try {
    r = JSON.parse(i);
  } catch {
    return (
      console.warn(
        `[gia-activity-memory] dropped an unreadable ${t} row: invalid json`,
      ),
      null
    );
  }
  const n = u.safeParse(e, r);
  return n.success
    ? n.output
    : (console.warn(
        `[gia-activity-memory] dropped an unreadable ${t} row: schema mismatch`,
      ),
      null);
}
function f(i) {
  return i !== null;
}
function Y(i) {
  const e = g(i, be, "source_card");
  return e
    ? u.parse(c.GiaActivitySourceCardSchema, {
        ...e,
        evidenceLabels: Be(e.evidenceLabels, 180, 24),
      })
    : null;
}
function je(i) {
  return u.parse(c.GiaActivityWindowSourceCardSchema, i);
}
function Be(i, e, t) {
  const r = new Set(),
    n = [];
  for (const a of i) {
    const s = He(a, e);
    if (!(!s || r.has(s)) && (r.add(s), n.push(s), n.length >= t)) break;
  }
  return n;
}
function He(i, e) {
  const t = i.replace(/\s+/g, " ").trim();
  return t.length <= e ? t : t.slice(0, e - 1).trimEnd();
}
let L = null;
process.on("SIGINT", () => {});
function te(i, e) {
  const t = `[${new Date().toISOString()}] [GiaActivityMemoryDatabaseWorker]`;
  console[i](`${t} ${e}`);
}
async function Pe(i) {
  if (
    (c.isGiaActivityMemoryShutdownMessage(i) &&
      (L?.cleanup(),
      process.parentPort?.postMessage({ type: "shutdown" }),
      process.exit(0)),
    et(i))
  ) {
    ((L = new Me(i.appDataPath)),
      process.parentPort?.postMessage({ type: "ready" }));
    return;
  }
  if (!c.isGiaActivityMemoryWorkerRequest(i)) {
    te("warn", "Ignored unknown worker message");
    return;
  }
  const e = i;
  try {
    const t = $e(e.method, e.args),
      r = { id: e.id, success: !0, result: t };
    process.parentPort?.postMessage(r);
  } catch (t) {
    const r = t instanceof Error ? t : new Error(String(t)),
      n = {
        id: e.id,
        success: !1,
        error: { message: r.message, stack: r.stack },
      };
    process.parentPort?.postMessage(n);
  }
}
function $e(i, e) {
  const t = Ye();
  switch (i) {
    case "initialize":
      return t.initialize(E(e, 0, i));
    case "closeProfileDatabase":
      return t.closeProfileDatabase(E(e, 0, i));
    case "cleanup":
      return t.cleanup();
    case "writeChunk":
      return t.writeChunk(
        E(e, 0, i),
        u.parse(c.GiaActivityCaptureChunkSchema, e[1]),
      );
    case "writeDecisionEvent":
      return t.writeDecisionEvent(
        E(e, 0, i),
        u.parse(c.GiaActivityDecisionEventSchema, e[1]),
        E(e, 2, i),
      );
    case "writeGroupingTrace":
      return t.writeGroupingTrace(
        E(e, 0, i),
        u.parse(c.GiaActivityGroupingTraceSchema, e[1]),
      );
    case "commitIngest":
      return t.commitIngest(E(e, 0, i), Ze(e, 1, i));
    case "readRecentChunks":
      return t.readRecentChunks(E(e, 0, i), E(e, 1, i), R(e, 2, i));
    case "readOpenWindows":
      return t.readOpenWindows(E(e, 0, i));
    case "writeOpenWindows":
      return t.writeOpenWindows(
        E(e, 0, i),
        u.parse(u.array(c.GiaActivityWindowSchema), e[1]),
      );
    case "readChunks":
      return t.readChunks(E(e, 0, i), R(e, 1, i));
    case "readDecisionEvents":
      return t.readDecisionEvents(E(e, 0, i), R(e, 1, i));
    case "readGroupingTraces":
      return t.readGroupingTraces(E(e, 0, i), R(e, 1, i));
    case "profileRootForInspection":
      return t.profileRootForInspection(E(e, 0, i));
    case "getSearchReadiness":
      return t.getSearchReadiness(E(e, 0, i));
    case "readPendingEmbeddingTexts":
      return t.readPendingEmbeddingTexts(E(e, 0, i), R(e, 1, i));
    case "countUnfinishedEmbeddingJobs":
      return t.countUnfinishedEmbeddingJobs(E(e, 0, i));
    case "upsertEmbeddingVectors":
      return t.upsertEmbeddingVectors(E(e, 0, i), qe(e, 1, i));
    case "markEmbeddingFailures":
      return t.markEmbeddingFailures(
        E(e, 0, i),
        ze(e, 1, i),
        E(e, 2, i),
        Je(e, 3, i),
      );
    case "search":
      return t.search(
        E(e, 0, i),
        u.parse(c.GiaActivitySearchRequestSchema, e[1]),
        Ke(e, 2, i),
      );
    case "getSourceCard":
      return t.getSourceCard(
        E(e, 0, i),
        u.parse(c.GiaActivitySourceCardLookupRequestSchema, e[1]),
      );
    case "timeline":
      return t.timeline(
        E(e, 0, i),
        u.parse(c.GiaActivityTimelineRequestSchema, e[1]),
      );
    case "deleteByLogicalDate":
      return t.deleteByLogicalDate(E(e, 0, i), E(e, 1, i));
    case "deleteAll":
      return t.deleteAll(E(e, 0, i));
    case "pruneExpired":
      return t.pruneExpired(E(e, 0, i), Qe(e, 1, i));
  }
}
function Ye() {
  if (!L)
    throw new Error("Gia Activity Memory database worker is not initialized");
  return L;
}
function E(i, e, t) {
  const r = i[e];
  if (typeof r != "string") throw new Error(`${t} expected string arg ${e}`);
  return r;
}
function R(i, e, t) {
  const r = i[e];
  if (typeof r != "number") throw new Error(`${t} expected number arg ${e}`);
  return r;
}
function ze(i, e, t) {
  const r = i[e];
  if (!Array.isArray(r) || !r.every((n) => typeof n == "string"))
    throw new Error(`${t} expected string array arg ${e}`);
  return r;
}
function Je(i, e, t) {
  const r = i[e];
  if (r !== "transient" && r !== "permanent")
    throw new Error(`${t} expected embedding failure kind arg ${e}`);
  return r;
}
function Ke(i, e, t) {
  const r = i[e];
  if (r === null) return null;
  if (!Array.isArray(r) || !r.every((n) => typeof n == "number"))
    throw new Error(`${t} expected number array or null arg ${e}`);
  return r;
}
function qe(i, e, t) {
  const r = i[e];
  if (!Array.isArray(r))
    throw new Error(`${t} expected embedding vector records arg ${e}`);
  return r.map((n) => {
    if (
      typeof n != "object" ||
      n === null ||
      !("indexedTextId" in n) ||
      !("vector" in n) ||
      typeof n.indexedTextId != "string" ||
      !Array.isArray(n.vector) ||
      !n.vector.every((a) => typeof a == "number")
    )
      throw new Error(`${t} received invalid embedding vector record`);
    return { indexedTextId: n.indexedTextId, vector: n.vector };
  });
}
function Qe(i, e, t) {
  const r = i[e];
  if (
    typeof r != "object" ||
    r === null ||
    !("screenshotCutoff" in r) ||
    !("rawCaptureCutoff" in r) ||
    !("memoryCutoff" in r) ||
    !("maxVectors" in r) ||
    typeof r.screenshotCutoff != "string" ||
    typeof r.rawCaptureCutoff != "string" ||
    (r.memoryCutoff !== null && typeof r.memoryCutoff != "string") ||
    typeof r.maxVectors != "number"
  )
    throw new Error(`${t} expected retention policy arg ${e}`);
  return {
    screenshotCutoff: r.screenshotCutoff,
    rawCaptureCutoff: r.rawCaptureCutoff,
    memoryCutoff: r.memoryCutoff,
    maxVectors: r.maxVectors,
  };
}
function Ze(i, e, t) {
  const r = i[e];
  if (typeof r != "object" || r === null)
    throw new Error(`${t} expected ingest commit arg ${e}`);
  const n = r;
  if (typeof n.logicalDate != "string")
    throw new Error(`${t} expected ingest commit logicalDate`);
  return {
    nextOpenWindows: u.parse(
      u.array(c.GiaActivityWindowSchema),
      n.nextOpenWindows,
    ),
    evictedWindows: u.parse(
      u.array(c.GiaActivityWindowSchema),
      n.evictedWindows,
    ),
    decisions: u.parse(u.array(c.GiaActivityWindowDecisionSchema), n.decisions),
    decisionEvents: u.parse(
      u.array(c.GiaActivityDecisionEventSchema),
      n.decisionEvents,
    ),
    trace: u.parse(c.GiaActivityGroupingTraceSchema, n.trace),
    logicalDate: n.logicalDate,
  };
}
function et(i) {
  return (
    typeof i == "object" &&
    i !== null &&
    "type" in i &&
    "appDataPath" in i &&
    i.type === "init" &&
    typeof i.appDataPath == "string"
  );
}
process.parentPort
  ? (process.parentPort.on("message", (i) => {
      Pe(i.data);
    }),
    process.on("uncaughtException", (i) => {
      const e = {
        type: "error",
        error: { message: i.message, stack: i.stack },
      };
      process.parentPort?.postMessage(e);
    }),
    process.on("unhandledRejection", (i) => {
      const e = i instanceof Error ? i.message : String(i),
        t = i instanceof Error ? i.stack : void 0,
        r = { type: "error", error: { message: e, stack: t } };
      process.parentPort?.postMessage(r);
    }))
  : (te("error", "No parentPort available"), process.exit(1));
