import type { Metadata } from "next";
import { Nunito, Outfit } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";

const nunito = Nunito({
  weight: ['200', '300', '400', '500', '600', '700','800', '900', '1000'],
  variable: "--font-nunito",
  subsets: ["latin"],
});

const outfit = Outfit({
  weight: ['200', '300', '400', '500', '600', '700','800', '900'],
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Adsbin | Media UI",
  description: "Lorem Ipsum",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${nunito.variable} ${outfit.variable} antialiased`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
