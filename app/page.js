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
            "linear-gradient(to right, rgba(74,51,36,0.85), rgba(74,51,36,0.35)), url('images/Screenshot%202026-01-16%20at%2016.13.58.png')",
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
      </section>

      {/* WHO WE ARE */}
      <section
  style={{
    padding: "4.5rem 8vw",
    backgroundColor: "#f3eee6",
    backgroundImage: "url('/images/paper-texture-light.jpg')",
    backgroundRepeat: "repeat",
    backgroundSize: "600px 600px",
    boxShadow: "inset 0 1px 0 rgba(0,0,0,0.04)"
  }}
>
        <div>
          <h2>Our Cooperative</h2>
          <p>
            Ekui District Cocoa Cooperative brings together 35 smallholder cocoa
            farmers across Ekui District to strengthen livelihoods while
            protecting remaining forest landscapes in Cross River State.
          </p>
        </div>

        <img
          src="images/Screenshot%202026-01-16%20at%2016.14.27.png"
          alt="Woman cocoa farmer harvesting cocoa pods"
          style={{ width: "100%", borderRadius: "12px" }}
        />
      </section>

      {/* OUR FARMING PRACTICES */}
      <section
  style={{
    padding: "4.5rem 8vw",
    backgroundColor: "#f3eee6",
    backgroundImage: "url('images/paper-texture-light.jpg')",
    backgroundRepeat: "repeat",
    backgroundSize: "600px 600px",
  }}
>

        <h2>Our Farming Practices</h2>

  <ul style={{ maxWidth: "760px", lineHeight: 1.7 }}>
    <li>No forest clearing</li>
    <li>Shade-grown cocoa</li>
    <li>Quality post-harvest handling</li>
  </ul>

  {/* Graphic layered naturally above texture */}
  <img
    src="/images/our-practices-graphic.png"
    alt="Illustration of deforestation-free cocoa practices"
    style={{
      display: "block",
      maxWidth: "760px",
      width: "100%",
      marginTop: "2.5rem",
    }}
  />
    
</section>
      {/* DIRECT TRADE */}
      <section style={{ padding: "4.5rem 8vw", background: "#efe8dd" }}>
        <h2>Direct Trade Model</h2>
        <p style={{ maxWidth: "760px" }}>
          Ekui District Cocoa Cooperative is building direct, long-term trading
          relationships between farmers and buyers. By reducing intermediaries,
          the cooperative aims to improve traceability, pricing transparency,
          and mutual accountability.
        </p>
      </section>

      {/* CTA */}
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
