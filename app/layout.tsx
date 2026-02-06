import type { Metadata } from "next";
import { Outfit } from "next/font/google"; // Import Outfit font
import "./globals.css";

// Configure Outfit font
const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "PaletteVerse | Art in Motion",
  description: "A cinematic scrollytelling experience for digital art.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
