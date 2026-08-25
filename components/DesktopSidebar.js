import SiteMenu from "./SiteMenu";

// Видна только на широких экранах (десктоп) — на мобильном полностью
// скрыта через media query, там навигация идёт через бургер-меню в шапке.
export default function DesktopSidebar({ categories }) {
  return (
    <>
      <aside className="desktop-sidebar">
        <a
          href="#top"
          style={{
            display: "block",
            fontWeight: 800,
            fontSize: 17,
            color: "#333F31",
            textDecoration: "none",
            padding: "4px 4px 16px",
            borderBottom: "1px solid #E4E9E1",
            marginBottom: 12,
          }}
        >
          AMENI <span style={{ color: "#6E7F6B", fontWeight: 600 }}>ДВЕРІ</span>
        </a>
        <div style={{ fontWeight: 800, fontSize: 15, color: "#333F31", padding: "4px 4px 10px" }}>Розділи</div>
        <SiteMenu categories={categories} />
      </aside>
      <style jsx>{`
        .desktop-sidebar {
          display: none;
        }
        @media (min-width: 960px) {
          .desktop-sidebar {
            display: block;
            position: fixed;
            top: 58px;
            left: 0;
            width: 220px;
            padding: 20px 18px;
            height: calc(100vh - 58px);
            overflow-y: auto;
            border-right: 1px solid #E4E9E1;
            background: #fff;
          }
        }
      `}</style>
    </>
  );
}
