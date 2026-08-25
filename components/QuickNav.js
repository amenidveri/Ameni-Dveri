// Мини-навигация под шапкой: маленькие кружки-иконки по категориям.
// Клик — не переход на отдельную страницу, а плавный скролл к разделу
// на этой же главной странице (используются обычные якоря #slug).
export default function QuickNav({ items }) {
  if (!items || items.length === 0) return null;

  return (
    <div className="quicknav">
      {items.map((cat) => (
        <a key={cat.slug} href={`#${cat.slug}`} className="quicknav-item">
          <span className="quicknav-circle">
            <img
              src={cat.image}
              alt={cat.title}
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
            />
          </span>
          <span className="quicknav-label">{cat.title}</span>
        </a>
      ))}

      <style jsx>{`
        .quicknav {
          display: flex;
          gap: 18px;
          overflow-x: auto;
          padding: 14px 16px;
          max-width: 640px;
          margin: 0 auto;
          scrollbar-width: none;
        }
        .quicknav-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 6px;
          text-decoration: none;
          flex-shrink: 0;
          width: 64px;
        }
        .quicknav-circle {
          width: 56px;
          height: 56px;
          border-radius: 50%;
          overflow: hidden;
          display: block;
          border: 2px solid #4f5f4c;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.15);
        }
        .quicknav-label {
          font-size: 10.5px;
          font-weight: 600;
          color: #333;
          text-align: center;
          line-height: 1.2;
        }
        @media (min-width: 960px) {
          .quicknav {
            max-width: 900px;
            gap: 32px;
            padding: 22px 24px;
            justify-content: center;
          }
          .quicknav-item {
            width: 96px;
          }
          .quicknav-circle {
            width: 84px;
            height: 84px;
          }
          .quicknav-label {
            font-size: 13px;
          }
        }
      `}</style>
    </div>
  );
}
