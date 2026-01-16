export default function Home() {
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
          Ekui District Cocoa Cooperative
        </h1>
        <h2 style={{ fontWeight: 400, maxWidth: "720px" }}>
          Deforestation-free cocoa from smallholder farmers in Ekui District,
          Cross River State
        </h2>

        <p style={{ maxWidth: "560px", marginTop: "2rem" }}>
          A farmer-owned cooperative of 35 smallholder producers committed to
          forest protection, transparent trade, and long-term partnerships.
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

      {/* WHO WE ARE */}
      <section style={{ padding: "4rem 8vw", background: "#f6f2ec" }}>
        <h2>Who We Are</h2>
        <p style={{ maxWidth: "720px" }}>
          Ekui District Cocoa Cooperative brings together 35 smallholder cocoa
          farmers across Ekui District to strengthen livelihoods while protecting
          remaining forest landscapes in Cross River State.
        </p>
        <p style={{ maxWidth: "720px" }}>
          By organising collectively, members improve quality, share knowledge,
          and engage directly with buyers interested in ethical and transparent
          sourcing.
        </p>
      </section>

      {/* OUR PRACTICES */}
      <section style={{ padding: "4rem 8vw" }}>
        <h2>Our Farming Practices</h2>

        <ul style={{ maxWidth: "720px", lineHeight: 1.7 }}>
          <li>No forest clearing or expansion into protected areas</li>
          <li>Shade-grown cocoa under agroforestry systems</li>
          <li>Shared fermentation and drying standards</li>
          <li>Basic farm mapping and record-keeping</li>
        </ul>

        <p style={{ maxWidth: "720px", marginTop: "1rem" }}>
          We prioritise steady improvement and credibility over rapid expansion
          or exaggerated sustainability claims.
        </p>
      </section>

      {/* DIRECT TRADE */}
      <section style={{ padding: "4rem 8vw", background: "#efe8dd" }}>
        <h2>Direct Trade Model</h2>
        <p style={{ maxWidth: "720px" }}>
          The cooperative works toward direct, long-term trading relationships
          between farmers and buyers. By reducing intermediaries, we aim to
          improve traceability, price transparency, and mutual accountability.
        </p>

        <p style={{ maxWidth: "720px" }}>
          We are currently building export partnerships with ethical chocolate
          makers, traders, and organisations aligned with responsible sourcing.
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
        <h2>Work With Us</h2>
        <p style={{ maxWidth: "640px", margin: "1rem auto" }}>
          We welcome conversations with buyers and partners interested in
          deforestation-free cocoa and collaborative growth.
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
