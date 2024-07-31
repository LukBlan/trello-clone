import {HeaderLinkBar} from "@/components/Header/HeaderLinkBar";
import Link from "next/link";
import {GuessLogin} from "@/components/Login/GuessLogin";

function MobileMenu() {
  return (
    <div className="flex flex-col md:hidden">
      <HeaderLinkBar  className="" />
      <Link href="/login">Login</Link>
      <GuessLogin />
    </div>
  )
}

export { MobileMenu }