"use client"

import "./MobileMenu.css"
import {useNavOpen} from "@/providers/NavOpenProvider";

function MobileIcon() {
  const { navOpen, toggleOpen } = useNavOpen();
  const animatedClass = navOpen ? "animate" : ""

  return (
    <button className={`${animatedClass} flex flex-col md:hidden gap-1.5`} onClick={toggleOpen}>
      <span className="firstLine menuIconLine"></span>
      <span className="secondLine menuIconLine"></span>
      <span className="thirdLine menuIconLine"></span>
    </button>
  )
}

export default MobileIcon