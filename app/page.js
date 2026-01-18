export default function Home() {
  return (
    <main style={{ fontFamily: "system-ui, sans-serif", color: "#2b2b2b" }}>

      {/* ================= LANGUAGE TOGGLE ================= */}
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

      {/* ================= HERO ================= */}
      <section
        style={{
          padding: "6rem 8vw",
          background:
            "linear-gradient(to right, rgba(60,40,25,0.85), rgba(60,40,25,0.35)), url('/images/Screenshot%202026-01-16%20at%2016.13.58.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "white",
        }}
      >
        <h1 style={{ fontSize: "3rem", marginBottom: "1rem" }}>
          Ekui District Cocoa Cooperative
        </h1>

        <h2 style={{ fontWeight: 400, maxWidth: "760px" }}>
          Deforestation-Free Cocoa from Ekui District, Cross River State
        </h2>

        <p style={{ maxWidth: "600px", marginTop: "2rem" }}>
          Farmer-owned. Forest-friendly. Sold directly to ethical buyers.
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
            Buy Direct
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
            Partner With Us
          </a>
        </div>
      </section>

      {/* ================= OUR COOPERATIVE ================= */}
      <section
        style={{
          padding: "4.5rem 8vw",
          backgroundColor: "#f3eee6",
          backgroundImage: "url('/images/paper-texture-light.jpg')",
          backgroundRepeat: "repeat",
          backgroundSize: "600px 600px",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "3rem",
          alignItems: "center",
        }}
      >
        <div>
          <h2>Our Cooperative</h2>

          <p>
            <strong>35 smallholder farmers</strong> working together to produce
            deforestation-free cocoa in Ekui District.
          </p>

          <p>
            The cooperative is community-owned and organised to strengthen
            livelihoods, improve quality, and protect remaining forest
            landscapes.
          </p>
        </div>

        <img
          src="/images/Screenshot%202026-01-16%20at%2016.14.27.png"
          alt="Women members of Ekui District Cocoa Cooperative"
          style={{ width: "100%", borderRadius: "12px" }}
        />
      </section>

      {/* ================= OUR PRACTICES ================= */}
      <section
        style={{
          padding: "4.5rem 8vw",
          backgroundColor: "#f3eee6",
          backgroundImage: "url('/images/paper-texture-light.jpg')",
          backgroundRepeat: "repeat",
          backgroundSize: "600px 600px",
        }}
      >
        <h2>Our Farming Practices</h2>

        <ul style={{ maxWidth: "760px", lineHeight: 1.7 }}>
          <li>No forest clearing or expansion</li>
          <li>Shade-grown cocoa in agroforestry systems</li>
          <li>Careful fermentation and drying</li>
          <li>Shared quality standards across members</li>
        </ul>

        {/* Illustrated practices graphic */}
        <img
          src="/images/our_practices.png"
          alt="Illustration of deforestation-free cocoa practices"
          style={{
            marginTop: "2.5rem",
            width: "100%",
            maxWidth: "900px",
            display: "block",
          }}
        />
      </section>

      {/* ================= DIRECT TRADE ================= */}
     <section
        style={{
          padding: "4.5rem 8vw",
          backgroundColor: "#f3eee6",
          backgroundImage: "url('/images/paper-texture-light.jpg')",
          backgroundRepeat: "repeat",
          backgroundSize: "600px 600px",
        }}
      >
        <h2>Direct Trade, Transparent & Fair</h2>

        <p style={{ maxWidth: "760px" }}>
          From our farmers to your business — no middlemen, just honest,
          long-term partnerships built on trust and traceability.
        </p>

        {/* Direct trade diagram */}
        <img
          src="/images/our_practices.png"
          alt="Direct trade model from farmer to cooperative to buyer"
          style={{
            marginTop: "2.5rem",
            width: "100%",
            maxWidth: "900px",
            display: "block",
          }}
        />
      </section>

      {/* ================= CTA ================= */}
      <section
        style={{
          padding: "4.5rem 8vw",
          textAlign: "center",
          background: "#4a3324",
          color: "white",
        }}
      >
        <h2>Work With the Cooperative</h2>

        <p style={{ maxWidth: "680px", margin: "1rem auto" }}>
          We welcome conversations with buyers and partners interested in
          deforestation-free cocoa and long-term collaboration.
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
          Contact the Cooperative
        </a>
      </section>
    </main>
  );
}
