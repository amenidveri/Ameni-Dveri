export default function Header({ settings }) {
  const {
    logo_text_main,
    logo_text_sub,
    logo_color,
    header_bg,
    phone,
    viber_link,
    telegram_link,
  } = settings;

  return (
    <header
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        height: 64,
        padding: "0 16px",
        background: header_bg,
        borderBottom: "3px solid #B5502E", // золотая полоска-акцент
      }}
    >
      <button aria-label="Меню" style={burgerStyle}>
        <span style={barStyle} />
        <span style={barStyle} />
        <span style={barStyle} />
      </button>

      <div
        style={{
          flex: 1,
          textAlign: "center",
          fontWeight: 800,
          fontSize: 20,
          color: logo_color,
        }}
      >
        {logo_text_main}
        <span style={{ color: "#7A3620", fontWeight: 600 }}> {logo_text_sub}</span>
      </div>

      <div style={{ display: "flex", gap: 10, flexShrink: 0 }}>
        <a href={viber_link} style={{ ...iconBtn, background: "#7360f2" }} aria-label="Viber" />
        <a href={telegram_link} style={{ ...iconBtn, background: "#29a9eb" }} aria-label="Telegram" />
        <a href={`tel:${phone}`} style={{ ...iconBtn, background: "#4caf50" }} aria-label="Позвонить" />
      </div>
    </header>
  );
}

const burgerStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  gap: 5,
  width: 26,
  height: 26,
  background: "none",
  border: "none",
  cursor: "pointer",
};
const barStyle = { display: "block", height: 2, width: "100%", background: "#333", borderRadius: 2 };
const iconBtn = { width: 36, height: 36, borderRadius: "50%" };
