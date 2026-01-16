export const metadata = {
  title: "Ekui District Cocoa Cooperative",
  description:
    "Deforestation-free cocoa from smallholder farmers in Ekui District, Cross River State",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: "system-ui, sans-serif" }}>
        {/* Language Toggle */}
        <div
          style={{
            padding: "0.75rem 8vw",
            fontSize: "0.9rem",
            background: "#f6f2ec",
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <span style={{ marginRight: "0.5rem", fontWeight: 600 }}>EN</span>
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

        {children}
      </body>
    </html>
  );
}
