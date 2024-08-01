import {headerLinks} from "@/data/header-links";
import {GuessLogin} from "@/components/Login/GuessLogin";
import Link from "next/link";
import {MobileHeaderLinks} from "@/components/Header/MobileHeaderLinks";

function MobileHeaderNavbar() {
  return (
    <MobileHeaderLinks>
      { headerLinks.map(element => <li key={element} className="border-t py-4 border-black/15">{element}</li>) }

      <li className="flex py-4 border-t border-black/15"><GuessLogin className="py-4" /></li>
      <li className="flex pb-4">
        <Link className="flex-1 text-center p-4 border border-blue" href="/login">Log In</Link>
      </li>

    </MobileHeaderLinks>
  )
}

export { MobileHeaderNavbar }