import "./globals.css";

export const metadata = {
  title: "Madeira Advocacia",
  description: "Madeira Advocacia",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
          <meta name='viewport' content='width=device-width, initial-scale=1.0'/>
      <body>
        {children}
      </body>
    </html>
  );
}
