export default function Home() {
  return (
    <main style={{ fontFamily: "system-ui, sans-serif", color: "#2b2b2b" }}>

      {/* LANGUAGE TOGGLE */}
      <div
        style={{
          padding: "0.75rem 8vw",
          fontSize: "0.9rem",
          background: "#f6f2ec",
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <span style={{ fontWeight: 600 }}>EN</span>
        <span style={{ margin: "0 0.25rem" }}>|</span>
        <a
          href="/fr"
          style={{
            textDecoration: "none",
            color: "#4a3324",
            fontWeight: 600,
          }}
        >
          FR
        </a>
      </div>

      {/* HERO */}
      <section
        style={{
          padding: "6rem 8vw",
          background:
            "linear-gradient(to right, rgba(74,51,36,0.85), rgba(74,51,36,0.35))",
          color: "white",
        }}
      >
        <h1 style={{ fontSize: "3rem", marginBottom: "1rem" }}>
          Ekui District Cocoa Cooperative
        </h1>
        <h2 style={{ fontWeight: 400, maxWidth: "720px" }}>
          Deforestation-free cocoa from smallholder farmers in Ekui District,
          Cross River State
        </h2>
      </section>

    </main>
  );
}
