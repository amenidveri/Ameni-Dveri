// Внизу страницы, когда основные товары уже закончились: подсказка,
// что есть ещё менее ходовые варианты (например «с зеркалом», «с шпоном») —
// по одному примеру + ссылка на весь под-раздел, чтобы человек, долиставший
// до конца и не нашедший своё, понял, что стоит поискать ещё.
export default function SubcategoryTeasers({ teasers }) {
  if (!teasers || teasers.length === 0) return null;

  return (
    <div style={{ maxWidth: 640, margin: "0 auto", padding: "8px 16px 28px" }}>
      <h2 style={{ fontSize: 15, fontWeight: 800, color: "#666", marginBottom: 12 }}>
        Не знайшли те, що шукали? Бувають ще:
      </h2>

      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        {teasers.map((t) => (
          <a
            key={`${t.category}-${t.subcategory}`}
            href={`#${t.category}`}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              textDecoration: "none",
              background: "#F5F7F3",
              borderRadius: 10,
              padding: 10,
            }}
          >
            <img
              src={t.example.image}
              alt={t.subcategory}
              style={{ width: 56, height: 56, borderRadius: 8, objectFit: "cover", flexShrink: 0 }}
            />
            <div>
              <div style={{ fontSize: 13.5, fontWeight: 700, color: "#333" }}>
                Двері «{t.subcategory}»{t.count > 1 ? ` — ${t.count} варіантів` : ""}
              </div>
              <div style={{ fontSize: 12, color: "#4F5F4C", fontWeight: 600 }}>Дивитись розділ →</div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
