import "./MobileMenu.css"

function MobileIcon({open, onClick} : {open: boolean, onClick: () => void}) {
  const animatedClass = open ? "animate" : ""

  return (
    <button className={`${animatedClass} flex flex-col md:hidden gap-1.5`} onClick={onClick}>
      <span className="firstLine menuIconLine"></span>
      <span className="secondLine menuIconLine"></span>
      <span className="thirdLine menuIconLine"></span>
    </button>
  )
}

export default MobileIcon