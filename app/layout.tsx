import "./globals.css";
import Head from "next/head";
import type { Metadata } from "next";
import { Sofia_Sans, Inconsolata } from "next/font/google";

const inter = Sofia_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dafazan",
  description: "Dafazan Portofolio Website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
