function HeaderLinkBar({ linkStyles } : {linkStyles: string}) {
  return (
    <ul className="hidden md:flex gap-8 mr-auto">
      <li className={linkStyles}>Features</li>
      <li className={linkStyles}>Solutions</li>
      <li className={linkStyles}>Plans</li>
      <li className={linkStyles}>Pricing</li>
      <li className={linkStyles}>Resources</li>
    </ul>
  )
}

export { HeaderLinkBar }