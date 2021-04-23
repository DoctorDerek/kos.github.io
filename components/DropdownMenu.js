import useDropdownMenu from "react-accessible-dropdown-menu-hook"
import Link from "@/components/Link"
import DownArrow from "@/data/material-icons/keyboard_arrow_down_black_48dp.svg"
import LeftArrow from "@/data/material-icons/keyboard_arrow_left_black_48dp.svg"
import RightArrow from "@/data/material-icons/keyboard_arrow_right_black_48dp.svg"
import UpArrow from "@/data/material-icons/keyboard_arrow_up_black_48dp.svg"

import { useRouter } from "next/router"

const NAVIGATION_MENU_MAP = new Map([
  ["Home", "/"],
  [
    "Services",
    new Map([
      [
        "Residential",
        new Map([
          [
            "Residential Internet",
            "/home-internet-in-kingston-ontario/residential-services",
          ],
          [
            "High Speed Cable",
            "/home-internet-in-kingston-ontario/high-speed-cable",
          ],
          [
            "Wireless Broadband",
            "/home-internet-in-kingston-ontario/wireless-broadband",
          ],
          [
            "High Speed DSL",
            "/home-internet-in-kingston-ontario/high-speed-dsl",
          ],
          ["VoIP", "/home-internet-in-kingston-ontario/voip"],
          ["Mail", "/home-internet-in-kingston-ontario/mail"],
          ["Dial Up", "/home-internet-in-kingston-ontario/dial-up"],
        ]),
        /*
        new Map([
          ["Residential Internet", "/residential/"],
          ["High Speed Cable", "/res/high-speed-cable/"],
          ["Wireless Broadband", "/res/wireless-broadband/"],
          ["High Speed DSL", "/res/high-speed-dsl/"],
          ["VoIP", "/res/voip/"],
          ["Mail", "/res/mail/"],
          ["Dial Up", "/res/dial-up/"],
        ]),
        */
      ],
      [
        "Business",
        new Map([
          ["Business Internet", "/business/"],
          ["High Speed Cable", "/bus/high-speed-cable/"],
          ["Wireless", "/bus/wireless/"],
          ["High Speed DSL", "/bus/high-speed-dsl/"],
          ["VoIP", "/bus/voip/"],
          ["Mail", "/bus/mail/"],
          ["Co Locate Server", "/bus/colocate-server/"],
          ["Dial Up", "/bus/dial-up/"],
        ]),
      ],
      ["Campgrounds", "/campgrounds/"],
      ["Availability Tool", "/availability/"],
      ["Payment Options", "/payment/options/"],
    ]),
  ],
  [
    "Hosting",
    new Map([
      ["Packages & Pricing", "/hosting/packages/"],
      ["Registering a Domain", "/domain/registration/"],
    ]),
  ],
  [
    "About Us",
    new Map([
      ["Our Company", "/about/"],
      ["Registering a Domain", "/news/events/"],
      ["Coverage Area", "/coverage/"],
    ]),
  ],
  ["Order Now", "/order/"],
  ["Contact Us", "/contact.php"],
  [
    "My Account",
    new Map([
      ["My Email", "https://webmail.kos.net/src/login.php"],
      ["My Internet Usage", "https://usage.kos.net/"],
      ["My VoIP Portal", "https://vvs.directnet.ca/?"],
      [
        "Web Hosting Support",
        "https://support.kos.net/helpdesk/index.php?action=submit",
      ],
      [
        "Open a Support Ticket",
        "https://support.kos.net/helpdesk/index.php?action=submit",
      ],
      ["Quick Support / FAQs", "/support/faqs/"],
    ]),
  ],
])

const isRequired = () => {
  throw new Error(
    "Missing required argument navigationMenu or currentPath in DropdownMenu"
  )
}

const makeNavigationMenu = (
  navigationMenu = isRequired(),
  currentPath = isRequired(),
  dropdownMenuItemProps = null
) => {
  const containsCurrentPage = (menuToSearch) => {
    if (typeof menuToSearch === "string") {
      return currentPath === menuToSearch
    }
    return Array.from(menuToSearch).some(([text, href]) => {
      if (typeof href === "string") {
        // this is an actual link
        console.log(currentPath, href)
        return currentPath === href
      }
      // we need to search this submenu
      return containsCurrentPage(href)
    })
  }

  return [...navigationMenu.entries()].map(
    ([text, destinationOrSubmenu], itemIndex) => {
      if (typeof destinationOrSubmenu === "string") {
        // we don't have a submenu, just a URL
        const href = destinationOrSubmenu
        let childProps = {}
        if (dropdownMenuItemProps && dropdownMenuItemProps[itemIndex]) {
          // pass in itemProps from react-accessible-dropdown-menu-hook
          childProps = { ...dropdownMenuItemProps[itemIndex] }
        }
        childProps.key = text + href

        const isCurrentPageProps = containsCurrentPage(href)
          ? {
              "aria-current": "page",
              className: "text-blue-800",
            }
          : {}

        return (
          <li {...childProps} {...isCurrentPageProps}>
            <Link href={href} className="block">
              {text}
            </Link>
          </li>
        )
      }
      if (
        destinationOrSubmenu !== null &&
        typeof destinationOrSubmenu === "object"
      ) {
        // we have a submenu to populate
        const submenu = destinationOrSubmenu
        const numberOfItems = submenu.length
        const { buttonProps, itemProps, isOpen, setIsOpen } = useDropdownMenu(
          numberOfItems
        )
        let ArrowIcon
        if (dropdownMenuItemProps) {
          // we're inside a sub-menu
          if (isOpen) {
            ArrowIcon = <LeftArrow />
          } else {
            ArrowIcon = <RightArrow />
          }
        } else {
          // we're a top-level menu
          if (isOpen) {
            ArrowIcon = <UpArrow />
          } else {
            ArrowIcon = <DownArrow />
          }
        }
        const uniqueKey = text + "Menu"

        return (
          <li
            className="relative dropdown"
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
            key={uniqueKey}
          >
            <button
              {...buttonProps}
              aria-controls={uniqueKey}
              aria-expanded={isOpen}
              className={
                "flex w-full" +
                (containsCurrentPage(submenu) ? " text-blue-800" : "")
              }
            >
              {text}
              {String}
              <div className="grid self-center w-6 h-6 rounded-full fill-current">
                {ArrowIcon}
              </div>
            </button>
            <ul
              className={
                "absolute z-50 bg-white dropdown-menu " +
                (isOpen ? "visible" : "hidden")
              }
              id={uniqueKey}
            >
              <li className="dropdown-submenu">
                {makeNavigationMenu(submenu, itemProps)}
              </li>
            </ul>
          </li>
        )
      }
      throw new Error("Unknown destinationOrSubmenu prop in DropdownMenu")
    }
  )
}

export default function DropdownMenu() {
  const router = useRouter() // next/router

  return (
    <nav
      className="navbar"
      id="slide-nav"
      role="navigation"
      aria-label="Main Navigation"
    >
      <div className="container">
        <div id="slidemenu">
          <ul className="justify-around py-10 nav md:flex navbar-nav">
            {makeNavigationMenu(NAVIGATION_MENU_MAP, router.asPath)}
          </ul>
        </div>
      </div>
    </nav>
  )
}
