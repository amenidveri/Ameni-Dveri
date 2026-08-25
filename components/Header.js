import { useState } from "react";
import SiteMenu from "./SiteMenu";

export default function Header({ settings, categories }) {
  const { logo_text_main, logo_text_sub, logo_color, header_bg } = settings;
  const [open, setOpen] = useState(false);

  return (
    <header
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        height: 48,
        padding: "0 16px",
        background: header_bg,
        borderBottom: "3px solid #333F31", // тёмно-шалфейная полоска-акцент
        position: "relative",
      }}
    >
      <button aria-label="Меню" onClick={() => setOpen(!open)} style={burgerStyle} className="mobile-burger">
        <span style={barStyle} />
        <span style={barStyle} />
        <span style={barStyle} />
      </button>

      <div
        style={{
          flex: 1,
          textAlign: "center",
          fontWeight: 800,
          fontSize: 17,
          color: logo_color,
        }}
      >
        {logo_text_main}
        <span style={{ color: "#D6E0D2", fontWeight: 600 }}> {logo_text_sub}</span>
      </div>

      <span style={{ width: 26, flexShrink: 0 }} className="mobile-burger" />

      {open && (
        <div
          style={{
            position: "absolute",
            top: "100%",
            left: 0,
            right: 0,
            background: "#fff",
            boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
            padding: "6px 16px",
            zIndex: 40,
          }}
        >
          <SiteMenu categories={categories} onNavigate={() => setOpen(false)} />
        </div>
      )}

      <style jsx>{`
        @media (min-width: 960px) {
          .mobile-burger {
            visibility: hidden;
          }
        }
      `}</style>
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
