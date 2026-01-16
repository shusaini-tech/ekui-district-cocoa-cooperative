export default function PageFR() {
  return (
    <main style={{ fontFamily: "system-ui, sans-serif", color: "#2b2b2b" }}>

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
          du district d’Ekui, dans l’État de Cross River
        </h2>

        <p style={{ maxWidth: "560px", marginTop: "2rem" }}>
          Coopérative détenue par les producteurs, regroupant 35 exploitations
          familiales engagées dans la protection des forêts, la transparence
          commerciale et la construction de partenariats durables.
        </p>

        <div style={{ marginTop: "2.5rem", display: "flex", gap: "1rem" }}>
          <a
            href="/contact"
            style={{
              background: "#b4532a",
              color: "white",
              padding: "0.75rem 1.5rem",
              textDecoration: "none",
              borderRadius: "6px",
            }}
          >
            Acheter en direct
          </a>

          <a
            href="/contact"
            style={{
              border: "2px solid white",
              color: "white",
              padding: "0.75rem 1.5rem",
              textDecoration: "none",
              borderRadius: "6px",
            }}
          >
            Devenir partenaire
          </a>
        </div>
      </section>

      {/* À PROPOS */}
      <section style={{ padding: "4rem 8vw", background: "#f6f2ec" }}>
        <h2>À propos de la coopérative</h2>
        <p style={{ maxWidth: "720px" }}>
          La Coopérative Cacaoyère du District d’Ekui regroupe des producteurs
          de cacao du district d’Ekui afin d’améliorer les conditions de vie
          rurales tout en protégeant les paysages forestiers existants.
        </p>
        <p style={{ maxWidth: "720px" }}>
          L’organisation collective permet d’améliorer la qualité du cacao,
          d’harmoniser les pratiques post-récolte et d’engager un dialogue
          direct avec des acheteurs responsables.
        </p>
      </section>

      {/* PRATIQUES */}
      <section style={{ padding: "4rem 8vw" }}>
        <h2>Nos pratiques agricoles</h2>

        <ul style={{ maxWidth: "720px", lineHeight: 1.7 }}>
          <li>Aucune conversion ou défrichement forestier</li>
          <li>Cacao cultivé sous ombrage en systèmes agroforestiers</li>
          <li>Normes communes de fermentation et de séchage</li>
          <li>Cartographie et suivi de base des exploitations</li>
        </ul>

        <p style={{ maxWidth: "720px", marginTop: "1rem" }}>
          La coopérative privilégie une amélioration progressive, crédible
          et vérifiable, plutôt que des promesses excessives.
        </p>
      </section>

      {/* COMMERCE DIRECT */}
      <section style={{ padding: "4rem 8vw", background: "#efe8dd" }}>
        <h2>Modèle de commerce direct</h2>
        <p style={{ maxWidth: "720px" }}>
          La coopérative développe des relations commerciales directes
          et durables entre producteurs et acheteurs.
        </p>

        <p style={{ maxWidth: "720px" }}>
          Nous construisons actuellement des partenariats d’exportation
          avec des chocolatiers, négociants et organisations engagés
          dans un approvisionnement responsable.
        </p>
      </section>

      {/* CTA */}
      <section
        style={{
          padding: "4rem 8vw",
          textAlign: "center",
          background: "#4a3324",
          color: "white",
        }}
      >
        <h2>Travailler avec nous</h2>
        <p style={{ maxWidth: "640px", margin: "1rem auto" }}>
          Nous invitons les acheteurs et partenaires intéressés par un cacao
          sans déforestation à nous contacter.
        </p>

        <a
          href="/contact"
          style={{
            display: "inline-block",
            marginTop: "1.5rem",
            background: "#b4532a",
            color: "white",
            padding: "0.75rem 1.75rem",
            textDecoration: "none",
            borderRadius: "6px",
          }}
        >
          Contacter la coopérative
        </a>
      </section>
    </main>
  );
}
