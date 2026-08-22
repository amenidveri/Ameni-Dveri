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
        borderBottom: "3px solid #333F31", // тёмно-шалфейная полоска-акцент
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
        <span style={{ color: "#D6E0D2", fontWeight: 600 }}> {logo_text_sub}</span>
      </div>

      <div style={{ display: "flex", gap: 8, flexShrink: 0 }}>
        <a href={viber_link} style={iconBtn} aria-label="Viber">
          <svg viewBox="0 0 36 36" width="36" height="36">
            <rect width="36" height="36" rx="10" fill="#7C529E" />
            <path
              d="M18 9c-5.2 0-9.2 3.6-9.2 9 0 3 1.4 5.5 3.7 7.2l-.6 3.6 3.9-2c.7.15 1.4.2 2.2.2 5.2 0 9.2-3.6 9.2-9S23.2 9 18 9z"
              fill="#fff"
            />
            <path
              d="M15 14.3c2.6.1 4.7 2.2 4.9 4.9m-4.9-7.7c4.2.1 7.5 3.5 7.7 7.7M14 21.6s.8.6 1.2.9c.6.5 1.3-.1 1.3-.6.1-.7-.5-1.4-1-1.9-.2-.2-.1-.5.1-.6.6-.4 1.3-.1 1.8.4.8.8 1.5 1.9 1.3 3-.1.9-1 1.6-1.9 1.6-2.9-.1-6.3-3.4-6.4-6.3 0-.9.7-1.8 1.6-1.9 1.1-.2 2.2.5 3 1.3.5.5.8 1.2.4 1.8-.1.2-.4.3-.6.1-.5-.5-1.2-1.1-1.9-1-.5 0-1.1.7-.6 1.3.3.4.9.9.9.9"
              fill="none"
              stroke="#7C529E"
              strokeWidth="0.9"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>

        <a href={telegram_link} style={iconBtn} aria-label="Telegram">
          <svg viewBox="0 0 36 36" width="36" height="36">
            <circle cx="18" cy="18" r="18" fill="#29A9EB" />
            <path
              d="M8.5 17.7l16.6-6.4c.8-.3 1.5.2 1.2 1.4l-2.8 13.3c-.2 1-.8 1.2-1.6.8l-4.5-3.3-2.2 2.1c-.2.2-.4.4-.9.4l.3-4.6 8.4-7.6c.4-.3-.1-.5-.5-.2l-10.4 6.6-4.5-1.4c-1-.3-1-1 .2-1.4z"
              fill="#fff"
            />
          </svg>
        </a>

        <a href={`tel:${phone}`} style={iconBtn} aria-label="Позвонить">
          <svg viewBox="0 0 36 36" width="36" height="36">
            <circle cx="18" cy="18" r="18" fill="#43A047" />
            <path
              d="M13.2 12.1c.3-.3.7-.3 1-.1l2.2 1.7c.3.2.4.6.3 1l-.8 1.9c-.1.3 0 .6.2.8l3.6 3.6c.2.2.5.3.8.2l1.9-.8c.4-.1.8 0 1 .3l1.7 2.2c.2.3.2.7-.1 1l-1.3 1.3c-.5.5-1.2.7-1.9.5-2.7-.7-5.3-2.3-7.4-4.4-2.1-2.1-3.7-4.7-4.4-7.4-.2-.7 0-1.4.5-1.9l1.3-1.3z"
              fill="#fff"
            />
          </svg>
        </a>
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
const barStyle = { display: "block", height: 2, width: "100%", background: "#F4F7F1", borderRadius: 2 };
const iconBtn = { width: 36, height: 36, borderRadius: "50%", display: "block", flexShrink: 0 };
