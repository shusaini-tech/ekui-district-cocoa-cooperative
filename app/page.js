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
            "linear-gradient(to right, rgba(74,51,36,0.85), rgba(74,51,36,0.35)), url('https://images.unsplash.com/photo-1598515213694-7f4f2d2b2a58')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "white",
        }}
      >
        <h1 style={{ fontSize: "3rem", marginBottom: "1rem" }}>
          Ekui District Cocoa Cooperative
        </h1>

        <h2 style={{ fontWeight: 400, maxWidth: "760px" }}>
          Deforestation-free cocoa from smallholder farmers in Ekui District,
          Cross River State
        </h2>

        <p style={{ maxWidth: "600px", marginTop: "2rem" }}>
          A farmer-owned cooperative of 35 smallholder cocoa producers committed
          to forest protection, transparent trade, and the gradual building of
          long-term export partnerships.
        </p>
      </section>

      {/* ================= WHO WE ARE ================= */}
      <section
        style={{
          padding: "4.5rem 8vw",
          background: "#f6f2ec",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "3rem",
          alignItems: "center",
        }}
      >
        <div>
          <h2>Who We Are</h2>
          <p>
            Ekui District Cocoa Cooperative brings together 35 smallholder cocoa
            farmers across Ekui District to strengthen livelihoods while
            protecting remaining forest landscapes in Cross River State.
          </p>
          <p>
            Through collective organisation, members improve cocoa quality,
            harmonise post-harvest practices, and engage directly with buyers
            who value traceability, transparency, and ethical sourcing.
          </p>
        </div>

        <img
          src="https://images.unsplash.com/photo-1600180758890-6b94519a8ba6"
          alt="Women cocoa farmers"
          style={{ width: "100%", borderRadius: "12px" }}
        />
      </section>

      {/* ================= OUR FARMING PRACTICES ================= */}
      <section style={{ padding: "4.5rem 8vw" }}>
        <h2>Our Farming Practices</h2>

        <ul style={{ maxWidth: "760px", lineHeight: 1.7 }}>
          <li>No forest clearing or expansion into protected areas</li>
          <li>Shade-grown cocoa cultivated under agroforestry systems</li>
          <li>Shared fermentation and drying standards across members</li>
          <li>Basic farm mapping and record-keeping</li>
        </ul>

        <p style={{ maxWidth: "760px", marginTop: "1rem" }}>
          The cooperative prioritises steady improvement and credibility over
          rapid expansion or exaggerated sustainability claims.
        </p>

        <img
          src="https://images.unsplash.com/photo-1586201375761-83865001e31c"
          alt="Shade-grown cocoa farm"
          style={{
            marginTop: "2rem",
            width: "100%",
            maxWidth: "760px",
            borderRadius: "12px",
          }}
        />
      </section>

      {/* ================= DIRECT TRADE ================= */}
      <section style={{ padding: "4.5rem 8vw", background: "#efe8dd" }}>
        <h2>Direct Trade Model</h2>
        <p style={{ maxWidth: "760px" }}>
          Ekui District Cocoa Cooperative is building direct, long-term trading
          relationships between farmers and buyers. By reducing intermediaries,
          the cooperative aims to improve traceability, pricing transparency,
          and mutual accountability.
        </p>
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
      </section>
    </main>
  );
}
