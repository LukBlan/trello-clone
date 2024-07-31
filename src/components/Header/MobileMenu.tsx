"use client"

import MobileIcon from "@/components/Header/MobileIcon";
import {useState} from "react";
import {MobileHeaderNavbar} from "@/components/Header/MobileHeaderNavbar";

function MobileMenu() {
  const [open, setOpen] = useState(false)

  const toggleOpen = () => setOpen(open => !open)

  return (
    <>
      <MobileHeaderNavbar open={open} />
      <MobileIcon onClick={toggleOpen}/>
    </>

  )
}

export { MobileMenu }