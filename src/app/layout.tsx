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
  title: "Spacez Offers | Exclusive Deals & Coupons",
  description: "Unlock exclusive offers, gift cards, and payment deals for your next Spacez stay.",
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
