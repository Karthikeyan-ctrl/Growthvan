import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Growthvan | Transforming Businesses Through Technology",
  description: "Enterprise-grade IT services, digital transformation, AI, cloud, and software development solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${inter.className} bg-[var(--background)] text-[var(--foreground)] antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
