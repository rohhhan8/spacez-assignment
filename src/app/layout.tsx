import type { Metadata } from "next";
import { Poppins, Buda } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const buda = Buda({
  variable: "--font-buda",
  subsets: ["latin"],
  weight: ["300"],
});

export const metadata: Metadata = {
  title: "Spacez: Luxury Villas & Stays",
  description: "Discover the perfect destination for your next vacation. Explore our collection of luxury villas and stays, and book your dream getaway today.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${buda.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
