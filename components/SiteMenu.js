// Общий список пунктов меню — используется и в мобильном выпадающем меню,
// и в боковой колонке на десктопе, чтобы не дублировать логику.
export default function SiteMenu({ categories, onNavigate }) {
  const links = [
    ...categories.map((c) => ({ href: `#${c.slug}`, label: c.title })),
    { href: "#video", label: "Відео та інструкції" },
    { href: "#about", label: "Про нас" },
    { href: "#contacts", label: "Контакти" },
  ];

  return (
    <nav>
      {links.map((l) => (
        <a
          key={l.href}
          href={l.href}
          onClick={onNavigate}
          style={{
            display: "block",
            padding: "10px 4px",
            fontSize: 14,
            fontWeight: 600,
            color: "#333F31",
            textDecoration: "none",
            borderBottom: "1px solid #E4E9E1",
          }}
        >
          {l.label}
        </a>
      ))}
    </nav>
  );
}
