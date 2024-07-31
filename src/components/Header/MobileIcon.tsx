import {SvgHamburgerMenu} from "@/components/Svgs/SvgHamburgerMenu";

function MobileIcon({onClick} : {onClick: () => void}) {
  return (
    <button className="md:hidden" onClick={onClick}>
      <SvgHamburgerMenu />
    </button>
  )
}

export default MobileIcon