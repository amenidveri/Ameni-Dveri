export default function ArticlesList({ items }) {
  if (!items || items.length === 0) return null;

  return (
    <div style={{ maxWidth: 640, margin: "0 auto", padding: "8px 16px 28px" }}>
      <h2 style={{ fontSize: 17, fontWeight: 800, color: "#333", marginBottom: 12, position: "relative", paddingBottom: 8 }}>
        Статьи
        <span style={{ position: "absolute", left: 0, bottom: 0, width: 34, height: 3, background: "#B5502E", borderRadius: 2 }} />
      </h2>
      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        {items.map((a) => (
          <a
            key={a.slug}
            href={`/blog/${a.slug}`}
            style={{ display: "flex", gap: 12, alignItems: "center", textDecoration: "none" }}
          >
            <img
              src={a.image}
              alt={a.title}
              style={{ width: 72, height: 72, borderRadius: 8, objectFit: "cover", flexShrink: 0, background: "#eee" }}
            />
            <div>
              <div style={{ fontSize: 14, fontWeight: 700, color: "#222", lineHeight: 1.3, marginBottom: 3 }}>
                {a.title}
              </div>
              <div style={{ fontSize: 12, color: "#999" }}>{a.date}</div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
