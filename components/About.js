export default function About({ text }) {
  if (!text) return null;

  return (
    <div style={{ maxWidth: 640, margin: "0 auto", padding: "8px 16px 28px" }}>
      <h2 style={{ fontSize: 17, fontWeight: 800, color: "#333", marginBottom: 12, position: "relative", paddingBottom: 8 }}>
        О нас
        <span style={{ position: "absolute", left: 0, bottom: 0, width: 34, height: 3, background: "#B5502E", borderRadius: 2 }} />
      </h2>
      <p style={{ fontSize: 14, color: "#555", lineHeight: 1.6 }}>{text}</p>
    </div>
  );
}
