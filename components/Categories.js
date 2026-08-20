export default function Categories({ items }) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr",
        gap: 10,
        padding: "20px 16px",
        maxWidth: 640,
        margin: "0 auto",
      }}
    >
      {items.map((cat) => (
        <a
          key={cat.slug}
          href={cat.link}
          style={{
            position: "relative",
            aspectRatio: "1 / 1",
            borderRadius: 10,
            overflow: "hidden",
            display: "block",
            boxShadow: "0 1px 4px rgba(0,0,0,0.12)",
          }}
        >
          <img
            src={cat.image}
            alt={cat.title}
            style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(to top, rgba(0,0,0,0.55), rgba(0,0,0,0) 55%)",
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              color: "#fff",
              fontWeight: 700,
              fontSize: 12.5,
              lineHeight: 1.2,
              padding: 10,
            }}
          >
            {cat.title}
          </div>
        </a>
      ))}
    </div>
  );
}
