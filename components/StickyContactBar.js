import { ContactsIcon, ViberIcon, TelegramIcon, PhoneIcon } from "./ContactIcons";

// Прилипающая панель контактов внизу экрана — видна всегда, даже когда
// человек долистал страницу далеко вниз. Тот же паттерн, что у Portes.ua.
// Порядок: Контакты → Viber → Telegram → Звонок (зелёная трубка — крайняя справа).
export default function StickyContactBar({ settings }) {
  const { phone, viber_link, telegram_link } = settings;

  return (
    <div
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        width: "100%",
        height: 56,
        background: "#4F5F4C",
        borderTop: "3px solid #333F31",
      }}
    >
      <a href="#contacts" style={itemStyle} aria-label="Контакти">
        <ContactsIcon />
        <span style={labelStyle}>Контакти</span>
      </a>
      <a href={viber_link} style={itemStyle} aria-label="Viber">
        <ViberIcon />
        <span style={labelStyle}>Viber</span>
      </a>
      <a href={telegram_link} style={itemStyle} aria-label="Telegram">
        <TelegramIcon />
        <span style={labelStyle}>Telegram</span>
      </a>
      <a href={`tel:${phone}`} style={itemStyle} aria-label="Подзвонити">
        <PhoneIcon />
        <span style={labelStyle}>Дзвінок</span>
      </a>
    </div>
  );
}

const itemStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: 2,
  textDecoration: "none",
};
const labelStyle = { fontSize: 10, fontWeight: 600, color: "#F4F7F1" };

// Высота панели + запас, на этот отступ снизу нужно поджать контент страницы,
// чтобы прилипающая панель ничего не перекрывала.
export const STICKY_BAR_HEIGHT = 64;
