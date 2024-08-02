import {DropBox} from "@/components/DropBox/DropBox";

function HeaderLinkBar({ linkStyles } : {linkStyles: string}) {
  return (
    <ul className="hidden lg:flex gap-8 mr-auto">
      <DropBox tabName="Features" linkStyle={linkStyles}/>
      <li className={linkStyles}>Solutions</li>
      <li className={linkStyles}>Plans</li>
      <li className={linkStyles}>Pricing</li>
      <li className={linkStyles}>Resources</li>
    </ul>
  )
}

export { HeaderLinkBar }