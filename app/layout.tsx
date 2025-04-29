import type React from "react";
import "./globals.css";
import type { Metadata } from "next";
import { Reddit_Mono } from "next/font/google";

const reddit = Reddit_Mono({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Muhammad Fadll | Front end developer",
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
