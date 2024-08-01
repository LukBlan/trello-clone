import Link from "next/link";

import {SvgTrello} from "@/components/Svgs/SvgTrello";
import {GuessLogin} from "@/components/Login/GuessLogin";
import {HeaderLinkBar} from "@/components/Header/HeaderLinkBar";
import {MobileMenu} from "@/components/Header/MobileMenu";

function Header() {
  return (
    <nav className="sticky top-0 bg-white flex justify-between items-center py-2 px-4 hover:shadow-xl md:py-0">
      <header className="flex items-center gap-2 px-8">
        <SvgTrello />

        <div className="flex flex-col font-bold">
          <p className="text-blue-opaque text-sm leading-none">Clone</p>
          <h1 className="cursor-pointer text-3xl leading-none text-blue-dark font-bold">Trello</h1>
        </div>
      </header>

      <HeaderLinkBar linkStyles="cursor-pointer text-blue-dark hover:text-blue font-medium" />

      <MobileMenu />

      <div className="hidden md:flex items-center">
        <Link className="p-4 font-bold text-blue-dark" href="/login">Login</Link>
        <GuessLogin className="py-4 px-8" />
      </div>
    </nav>
  )
}

export { Header }