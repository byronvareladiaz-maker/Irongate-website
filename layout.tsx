import { Inter, Jejugothic } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-inter",
});
const jejuGothic = Jejugothic({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-jejugothic",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jejuGothic.variable}`}>
      <body>{children}</body>
    </html>
  );
}
