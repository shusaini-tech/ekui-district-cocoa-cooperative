export const metadata = {
  title: "Ekui District Cocoa Cooperative",
  description:
    "Deforestation-free cocoa from smallholder farmers in Ekui District, Cross River State",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: "system-ui, sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
