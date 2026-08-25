export default function About({ text }) {
  if (!text) return null;

  return (
    <div id="about" style={{ maxWidth: 640, margin: "0 auto", padding: "8px 16px 28px", scrollMarginTop: 60 }}>
      <h2 style={{ fontSize: 17, fontWeight: 800, color: "#333", marginBottom: 12, position: "relative", paddingBottom: 8 }}>
        Про нас
        <span style={{ position: "absolute", left: 0, bottom: 0, width: 34, height: 3, background: "#4F5F4C", borderRadius: 2 }} />
      </h2>
      <p style={{ fontSize: 14, color: "#555", lineHeight: 1.6 }}>{text}</p>
    </div>
  );
}
