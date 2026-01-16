export default function PageFR() {
  return (
    <main style={{ fontFamily: "system-ui, sans-serif", color: "#2b2b2b" }}>

      {/* SÉLECTEUR DE LANGUE */}
      <div
        style={{
          padding: "0.75rem 8vw",
          fontSize: "0.9rem",
          background: "#f6f2ec",
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <a
          href="/"
          style={{
            textDecoration: "none",
            color: "#4a3324",
            fontWeight: 600,
          }}
        >
          EN
        </a>
        <span style={{ margin: "0 0.25rem" }}>|</span>
        <span style={{ fontWeight: 600 }}>FR</span>
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
          Coopérative Cacaoyère du District d’Ekui
        </h1>
        <h2 style={{ fontWeight: 400, maxWidth: "720px" }}>
          Cacao sans déforestation produit par des petits producteurs
        </h2>
      </section>

    </main>
  );
}
