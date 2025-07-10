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
      <body>
        {children}
      </body>
    </html>
  );
}
