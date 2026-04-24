import type { Metadata } from "next";
import { Cinzel, Josefin_Sans } from "next/font/google";
import "./globals.css";

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const josefin = Josefin_Sans({
  subsets: ["latin"],
  variable: "--font-josefin",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "VI Furniture — Vietnamese Luxury Furniture",
  description:
    "Handcrafted Vietnamese luxury furniture. Sofas, dining, beds, lighting and decor — designed in Hanoi, made for a lifetime.",
  keywords: [
    "Vietnamese furniture",
    "luxury furniture",
    "VI Furniture",
    "Hanoi",
    "handcrafted",
    "interior design",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${cinzel.variable} ${josefin.variable}`}>
      <body className="min-h-screen text-[var(--color-foreground)]">
        {children}
      </body>
    </html>
  );
}
