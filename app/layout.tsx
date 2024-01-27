import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from '@vercel/analytics/react';
import CookieButton from './components/CookieButton';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "console.log",
  description: "Type console.log as fast as you can",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-blue-500 relative`}>
        {children}
        <CookieButton />
        <Analytics />
      </body>
    </html>
  );
}
