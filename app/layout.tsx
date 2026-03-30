import type { Metadata } from "next";
import { Poppins, Playfair_Display, Open_Sans } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { siteConfig } from "@/config/site";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-playfair",
  display: "swap",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-open-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Catamaran Martinique | Balades & Excursions en Mer",
    template: `%s | Balades Catamaran Martinique`,
  },
  description: siteConfig.description,
  openGraph: {
    title: "Balades Catamaran Martinique - Excursions Paradisiaques",
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: "fr_FR",
    type: "website",
  },
  metadataBase: new URL(siteConfig.url),
  keywords: [
    "catamaran Martinique",
    "balade catamaran Martinique",
    "excursion catamaran Martinique",
    "location catamaran Martinique",
    "sortie mer Martinique",
    "barbecue mer Martinique",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${poppins.variable} ${playfair.variable} ${openSans.variable}`}
    >
      <body className="antialiased min-h-screen flex flex-col pt-20">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
