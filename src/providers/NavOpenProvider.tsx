"use client"

import {createContext, ReactNode, useContext, useState} from "react";

const initContext: {navOpen: boolean, toggleOpen: () => void} = {navOpen: false, toggleOpen: () => {}}
const NavOpenContext = createContext(initContext)

function NavOpenProvider({children}: {children: ReactNode}) {
  const [navOpen, setNavOpen] = useState(false);

  const toggleOpen = () => setNavOpen((open) => !open)

  return (
    <NavOpenContext.Provider value={{navOpen, toggleOpen}}>
      {children}
    </NavOpenContext.Provider>
  )
}

const useNavOpen: () =>  {navOpen: boolean, toggleOpen: () => void} = () => useContext(NavOpenContext);


export { NavOpenProvider, useNavOpen }