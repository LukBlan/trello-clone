import type { Metadata } from "next";
import "./globals.css";
import {ReactNode} from "react";
import {Header} from "@/components/Header/Header";
import {NavOpenProvider} from "@/providers/NavOpenProvider";
import {Body} from "@/components/Body";

export const metadata: Metadata = {
  title: "Trello Clone",
  description: "Trello clone developed in Next.js",
  icons: {
    icon: "/trello.svg"
  }
};

function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <NavOpenProvider>
        <Body>
          <Header />

          <main>
            {children}
          </main>

        </Body>
      </NavOpenProvider>
    </html>
  );
}

export default RootLayout
