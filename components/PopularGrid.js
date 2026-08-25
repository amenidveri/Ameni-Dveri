// Витрина хитов: самые ходовые модели вперемешку (не важно, из какого раздела),
// чтобы человек с высокой вероятностью сразу увидел то, что искал,
// не листая длинную страницу по разделам.
export default function PopularGrid({ items }) {
  if (!items || items.length === 0) return null;

  return (
    <div style={{ maxWidth: 640, margin: "0 auto", padding: "8px 16px 28px" }}>
      <h2 style={{ fontSize: 17, fontWeight: 800, color: "#333", marginBottom: 12, position: "relative", paddingBottom: 8 }}>
        Ходові двері
        <span style={{ position: "absolute", left: 0, bottom: 0, width: 34, height: 3, background: "#4F5F4C", borderRadius: 2 }} />
      </h2>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
        {items.map((p) => (
          <div
            key={p.slug}
            style={{
              position: "relative",
              aspectRatio: "1 / 1",
              borderRadius: 10,
              overflow: "hidden",
              boxShadow: "0 1px 4px rgba(0,0,0,0.12)",
            }}
          >
            <img
              src={p.image}
              alt={p.title}
              style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
            />
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(to top, rgba(0,0,0,0.55), rgba(0,0,0,0) 55%)",
              }}
            />
            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                color: "#fff",
                fontWeight: 700,
                fontSize: 12,
                lineHeight: 1.25,
                padding: 9,
              }}
            >
              {p.title}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
