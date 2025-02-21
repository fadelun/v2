import type React from "react";
import "./globals.css";
import type { Metadata } from "next";
import { Reddit_Mono, Rambla } from "next/font/google";
// import localFont from "next/font/local";

// const inter = Inter({ subsets: ["latin"] })
const reddit = Reddit_Mono({
  subsets: ["latin"],
  display: "swap",
});
const rambla = Rambla({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Developer Portfolio",
  description: "A showcase of my work and skills as a developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={reddit.className}>{children}</body>
    </html>
  );
}
