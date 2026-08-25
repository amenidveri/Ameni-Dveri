export default function VideoSection({ items }) {
  if (!items || items.length === 0) return null;

  return (
    <div id="video" style={{ maxWidth: 640, margin: "0 auto", padding: "8px 16px 28px", scrollMarginTop: 60 }}>
      <h2 style={{ fontSize: 17, fontWeight: 800, color: "#333", marginBottom: 12, position: "relative", paddingBottom: 8 }}>
        Відео та інструкції
        <span style={{ position: "absolute", left: 0, bottom: 0, width: 34, height: 3, background: "#4F5F4C", borderRadius: 2 }} />
      </h2>
      <div
        style={{
          display: "flex",
          gap: 10,
          overflowX: "auto",
          paddingBottom: 4,
        }}
      >
        {items.map((v) => (
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
            {/* Нативный HTML5-плеер: воспроизведение прямо на странице,
                без перехода на YouTube */}
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
    </div>
  );
}
