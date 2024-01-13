'use client'

import { PRODUCT_CATEGORIES } from "@/config"
import { useRef, useState } from "react"
import { NavItem } from "./nav-item"
import { useOnClickOutside } from "@/lib/hooks/use-click-outside"

export function NavItems() {
  const [activeLink, setActiveLink] = useState<null | number>(null)
  const isAnyOpen = activeLink !== null
  const navRef = useRef<HTMLUListElement | null>(null)

  useOnClickOutside(navRef, () => {setActiveLink(null)})
  return (
    <ul className="flex gap-4 h-full" ref={navRef}>
      {
        PRODUCT_CATEGORIES.map( (category, index) => {
          
          const handleOpen = () => {
            if (activeLink === index) {
              setActiveLink(null)
            } else {
              setActiveLink(index)
            }
          }

          const isOpen = activeLink === index
          
          return <NavItem category={category} key={category.slug} isAnyOpen={isAnyOpen} isOpen={isOpen} handleOpen={handleOpen} />
        })
      }
    </ul>
  )
}
