import {headerLinks} from "@/data/header-links";
import {GuessLogin} from "@/components/Login/GuessLogin";
import Link from "next/link";

function MobileHeaderNavbar({ open }: {open: boolean}) {
  const openClass = (open) ? "max-h-[30rem]" : "max-h-0"
  // const openClass = ""
  return (
    <ul className={`${openClass} transition-max-height ease-linear duration-[400ms] absolute top-full flex flex-col 
                  md:hidden left-0 right-0 bg-white px-4 text-lg text-blue-dark font-semibold overflow-hidden`}>

      { headerLinks.map(element => <li key={element} className="border-t py-4 border-black/15">{element}</li>) }

      <li className="flex py-4 border-t border-black/15"><GuessLogin /></li>
      <li className="flex pb-4">
        <Link className="flex-1 text-center p-4 border border-blue" href="/login">Log In</Link>
      </li>
    </ul>
  )
}

export { MobileHeaderNavbar }