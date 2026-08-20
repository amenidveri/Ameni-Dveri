export default function Reviews({ items }) {
  if (!items || items.length === 0) return null;

  return (
    <div style={{ maxWidth: 640, margin: "0 auto", padding: "8px 16px 28px" }}>
      <h2 style={{ fontSize: 17, fontWeight: 800, color: "#333", marginBottom: 12, position: "relative", paddingBottom: 8 }}>
        Отзывы
        <span style={{ position: "absolute", left: 0, bottom: 0, width: 34, height: 3, background: "#B5502E", borderRadius: 2 }} />
      </h2>
      <div style={{ display: "flex", gap: 10, overflowX: "auto", paddingBottom: 4 }}>
        {items.map((r) => (
          <div key={r.slug} style={{ flex: "0 0 240px", background: "#f7f7f7", borderRadius: 10, padding: 14 }}>
            <div style={{ fontSize: 13.5, fontWeight: 700, color: "#222", marginBottom: 4 }}>{r.name}</div>
            <div style={{ color: "#B5502E", fontSize: 12, marginBottom: 6 }}>{"★".repeat(r.rating || 5)}</div>
            <div style={{ fontSize: 13, color: "#555", lineHeight: 1.5 }}>{r.text}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
