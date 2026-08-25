import { useState } from "react";

function VideoAccordion({ videos }) {
  const [open, setOpen] = useState(false);
  if (!videos || videos.length === 0) return null;

  return (
    <div style={{ marginTop: 12 }}>
      <button
        onClick={() => setOpen(!open)}
        style={{
          display: "flex",
          alignItems: "center",
          gap: 8,
          width: "100%",
          background: "#EEF1EC",
          border: "none",
          borderRadius: 8,
          padding: "10px 14px",
          fontSize: 13.5,
          fontWeight: 700,
          color: "#333F31",
          cursor: "pointer",
          textAlign: "left",
        }}
      >
        <span style={{ transform: open ? "rotate(90deg)" : "rotate(0deg)", transition: "transform .15s" }}>▶</span>
        Як встановлюємо і заміряємо — відео
      </button>

      {open && (
        <div style={{ display: "flex", gap: 10, overflowX: "auto", padding: "10px 2px 4px" }}>
          {videos.map((v) => (
            <div
              key={v.slug}
              style={{
                flex: "0 0 200px",
                borderRadius: 10,
                overflow: "hidden",
                background: "#000",
                boxShadow: "0 1px 4px rgba(0,0,0,0.12)",
              }}
            >
              <video
                controls
                preload="metadata"
                poster={v.poster}
                src={v.videoUrl}
                style={{ width: "100%", height: 130, objectFit: "cover", display: "block" }}
              />
              <div style={{ padding: "8px 10px", background: "#fff", fontSize: 12.5, fontWeight: 600, color: "#333", lineHeight: 1.3 }}>
                {v.title}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// Каждая категория — свой блок прямо на главной (с id=slug для якорной ссылки
// из QuickNav), а не отдельная страница каталога. Так человек долистывает
// страницу и сразу видит все разделы, без промежуточных переходов.
export default function CategorySections({ categories, productsByCategory, videosByCategory }) {
  return (
    <div style={{ maxWidth: 640, margin: "0 auto", padding: "8px 16px" }}>
      {categories.map((cat) => (
        <section key={cat.slug} id={cat.slug} style={{ scrollMarginTop: 74, marginBottom: 32 }}>
          <div
            style={{
              position: "relative",
              borderRadius: 12,
              overflow: "hidden",
              aspectRatio: "16 / 9",
              boxShadow: "0 1px 4px rgba(0,0,0,0.12)",
            }}
          >
            <img
              src={cat.image}
              alt={cat.title}
              style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
            />
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(to top, rgba(0,0,0,0.55), rgba(0,0,0,0) 55%)",
              }}
            />
            <h2
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                color: "#fff",
                fontWeight: 800,
                fontSize: 18,
                lineHeight: 1.25,
                padding: 14,
                margin: 0,
              }}
            >
              {cat.title}
            </h2>
          </div>

          <ProductGrid items={(productsByCategory[cat.slug] || []).filter((p) => !p.subcategory)} />

          <VideoAccordion videos={videosByCategory[cat.slug] || []} />
        </section>
      ))}
    </div>
  );
}

// Сетка товаров конкретного раздела (без под-разделов — те показаны тизером внизу страницы).
function ProductGrid({ items }) {
  if (!items || items.length === 0) return null;
  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8, marginTop: 14 }}>
      {items.map((p) => (
        <div key={p.slug} style={{ borderRadius: 8, overflow: "hidden", boxShadow: "0 1px 3px rgba(0,0,0,0.1)" }}>
          <img src={p.image} alt={p.title} style={{ width: "100%", aspectRatio: "1 / 1", objectFit: "cover", display: "block" }} />
          <div style={{ fontSize: 10.5, fontWeight: 600, color: "#444", padding: "5px 6px", lineHeight: 1.25 }}>{p.title}</div>
        </div>
      ))}
    </div>
  );
}
