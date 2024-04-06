import type { Metadata } from "next";
import "./globals.css";
import { nunito } from "./ui/fonts"


export const metadata: Metadata = {
  title: "telefunke",
  description: "a game of cards",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={nunito.className}>{children}</body>
    </html>
  );
}
