import type { Metadata } from "next";
import "./globals.css";
import {ReactNode} from "react";
import {Header} from "@/components/Header/Header";

export const metadata: Metadata = {
  title: "Trello Clone",
  description: "Trello clone developed in Next.js",
};

function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}

export default RootLayout
