import type { Metadata } from "next";
import { Inter, Inter_Tight } from "next/font/google";
import "./globals.css";

const interBody = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
  weight: ["300", "400", "500"],
});

const interDisplay = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "VI — Lebanese Atelier Furniture",
  description:
    "VI is an atelier of handmade objects from Batroun, Lebanon — seating, tables, lighting and quiet vessels in cedar, olive wood and hand-carved walnut, designed for the rooms you keep.",
  keywords: [
    "VI",
    "Lebanese design",
    "Beirut atelier",
    "Batroun",
    "handmade furniture",
    "editorial design",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${interBody.variable} ${interDisplay.variable}`}>
      <body className="min-h-screen bg-[#F5F2EC] text-[#1A1A1A] font-body antialiased">
        {children}
      </body>
    </html>
  );
}
