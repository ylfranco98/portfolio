import "./globals.css";
import localFont from "next/font/local";

const commandp = localFont({
  src: [
    {
      path: "./fonts/Alamanca.ttf",

      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-commandp",
});
const font = localFont({
  src: [
    {
      path: "./fonts/Penpoint.otf",

      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-font",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>{children}</body>
    </html>
  );
}
