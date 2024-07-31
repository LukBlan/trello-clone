import {HeaderLinkBar} from "@/components/Header/HeaderLinkBar";
import Link from "next/link";
import {GuessLogin} from "@/components/Login/GuessLogin";
import MobileIcon from "@/components/Header/MobileIcon";

function MobileMenu() {
  const mobileLinksElements: string[] = [
    "Features",
    "Solutions",
    "Plans",
    "Pricing",
    "Resources",
  ]

  return (
    <>
      <ul className="absolute top-full flex flex-col md:hidden
                    left-0 right-0 bg-white px-4 text-lg text-blue-dark font-semibold">
        { mobileLinksElements.map(element =>
          <li key={element} className="border-t py-4 border-black/15">{element}</li>)
        }
        <li className="flex py-4 border-t border-black/15"><GuessLogin /></li>
        <li className="flex pb-4"><Link className="flex-1 text-center p-4 border border-blue" href="/login">Log In</Link></li>
      </ul>

      <MobileIcon />
    </>

  )
}

export { MobileMenu }