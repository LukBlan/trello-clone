"use client"

import {useState} from "react";

function DropBox({tabName, linkStyle}: {tabName: string, linkStyle: string}) {
  const [open, setOpen] = useState(true)

  const toggleOpen = () => setOpen(open => !open)

  return (
    <li onClick={toggleOpen}>
      <p className={linkStyle}>{tabName}</p>

      { open &&
        <div className="flex absolute top-full left-0 right-0 bg-white">
          <div className="flex-1">
            <p className="py-8 border-b border-b-blue-dark">
              Explore the features that help your team succeed
            </p>
            <p>
              Some features
            </p>
          </div>
          <div className="flex-1 bg-light-violet">
            <p className="p-8 border-b border-b-blue-dark">Meet Trello</p>
          </div>
        </div>
      }
    </li>
  )
}

export { DropBox }