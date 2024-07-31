function HeaderLinkBar({className, linkStyles} : {className: string, linkStyles: string}) {
  return (
    <ul className={className}>
      <li className={linkStyles}>Features</li>
      <li className={linkStyles}>Solutions</li>
      <li className={linkStyles}>Plans</li>
      <li className={linkStyles}>Pricing</li>
      <li className={linkStyles}>Resources</li>
    </ul>
  )
}

export { HeaderLinkBar }