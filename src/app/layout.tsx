import type { Metadata } from "next";
import "./globals.css";
import {ReactNode} from "react";

export const metadata: Metadata = {
  title: "Trello Clone",
  description: "Trello clone developed in Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
