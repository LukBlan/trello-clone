"use client"

import {ReactNode} from "react";
import {useNavOpen} from "@/providers/NavOpenProvider";

function MobileHeaderLinks({ children }: { children: ReactNode}) {
  const { navOpen} = useNavOpen()
  const openClass = (navOpen) ? "min-h-full-nav" : "min-h-0"

  return (
    <ul className={`${openClass} h-0 transition-min-height ease-in-out duration-[400ms] absolute top-full flex flex-col 
                  lg:hidden left-0 right-0 bg-white px-4 text-lg text-blue-dark font-semibold overflow-auto`}>
      { children }
    </ul>
  )
}

export { MobileHeaderLinks }