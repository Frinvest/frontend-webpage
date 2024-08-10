import type { Metadata } from "next";
import { Nunito as FontSans } from "next/font/google"
import "./globals.css";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})


export const metadata: Metadata = {
  title: "Frinvest",
  description: "A new way to invest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={fontSans.className}>{children}</body>
    </html>
  );
}
