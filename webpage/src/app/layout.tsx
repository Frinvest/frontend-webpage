import type { Metadata } from "next";
import { Rajdhani as FontSans } from "next/font/google"
import "./globals.css";
import { Toaster } from "@/components/ui/toaster"
const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: "400"
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
    <head />
    <body className={fontSans.className}>
      <main>{children}</main>
      <Toaster />
    </body>
    </html>
  );
}
