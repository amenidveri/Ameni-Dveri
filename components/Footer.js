export default function Footer({ settings }) {
  const { phone, email, address, hours, tagline } = settings;

  return (
    <div style={{ background: "#2b2b2b", color: "#eee", padding: "28px 16px 24px" }}>
      <div style={{ maxWidth: 640, margin: "0 auto" }}>
        <h3 style={{ fontSize: 16, fontWeight: 800, marginBottom: 12, color: "#fff" }}>Свяжитесь с нами</h3>
        <div style={lineStyle}><b style={{ color: "#fff" }}>Телефон:</b> {phone}</div>
        <div style={lineStyle}><b style={{ color: "#fff" }}>Email:</b> {email}</div>
        <div style={lineStyle}><b style={{ color: "#fff" }}>Адрес:</b> {address}</div>
        <div style={lineStyle}><b style={{ color: "#fff" }}>Режим работы:</b> {hours}</div>
        {tagline && (
          <div style={{ marginTop: 14, fontSize: 13.5, color: "#B5502E", fontWeight: 700 }}>{tagline}</div>
        )}
        <div
          style={{
            marginTop: 16,
            height: 140,
            borderRadius: 10,
            background: "#3a3a3a",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#888",
            fontSize: 12.5,
          }}
        >
          карта — подключим позже
        </div>
      </div>
    </div>
  );
}

const lineStyle = { fontSize: 14, color: "#ccc", marginBottom: 6, lineHeight: 1.5 };
