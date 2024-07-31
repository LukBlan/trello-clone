
import Link from "next/link";

import {SvgTrello} from "@/components/Svgs/SvgTrello";
import {GuessLogin} from "@/components/Login/GuessLogin";
import {HeaderLinkBar} from "@/components/Header/HeaderLinkBar";
import {MobileMenu} from "@/components/Header/MobileMenu";

function Header() {
  return (
    <nav className="relative flex justify-between items-center p-4 shadow-lg">
      <div className="flex items-center gap-2">
        <SvgTrello />
        <h1>Trello Clone</h1>
      </div>

      <HeaderLinkBar className="hidden md:flex" linkStyles="" />

      <MobileMenu />

      <div className="hidden md:flex">
        <Link href="/login">Login</Link>
        <GuessLogin />
      </div>
    </nav>
  )
}

export { Header }