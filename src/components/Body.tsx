"use client"

import {ReactNode} from "react";
import {useNavOpen} from "@/providers/NavOpenProvider";

function Body({ children } : {children: ReactNode}) {
  const { navOpen } = useNavOpen()
  const openClass = navOpen ? "overflow-hidden" : ""

  return (
    <body className={openClass}>
      { children }
    </body>
  )
}

export { Body }