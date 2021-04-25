/*
import { useRouter } from "next/router"
import useDropdownMenu from "react-accessible-dropdown-menu-hook"
import Link from "@/components/Link"
import DownArrow from "@/data/material-icons/keyboard_arrow_down_black_48dp.svg"
import LeftArrow from "@/data/material-icons/keyboard_arrow_left_black_48dp.svg"
import RightArrow from "@/data/material-icons/keyboard_arrow_right_black_48dp.svg"
import UpArrow from "@/data/material-icons/keyboard_arrow_up_black_48dp.svg"*/
import FlyoutMenuFullWidth from "@/components/FlyoutMenuFullWidth"
import {
  ChartBarIcon,
  CursorClickIcon,
  ShieldCheckIcon,
  ViewGridIcon,
} from "@heroicons/react/outline"
import { Popover } from "@headlessui/react"
import { useState } from "react"
import React, { useRef, useEffect } from "react"
import PropTypes from "prop-types"

/**
 * Hook that alerts clicks outside of the passed ref
 */
function useOutsideAlerter(ref) {
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        alert("You clicked outside of me!")
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [ref])
}

/**
 * Component that alerts if you click outside of it
 */
function OutsideAlerter(props) {
  const wrapperRef = useRef(null)
  useOutsideAlerter(wrapperRef)

  return <div ref={wrapperRef}>{props.children}</div>
}

OutsideAlerter.propTypes = {
  children: PropTypes.element.isRequired,
}

// export default OutsideAlerter

// lookup RegExp objects to match subpages from current URL href (router.asPath)
const MENU_LOOKUP_ALIASES = new Map([
  ["Services", [/home/, /business/, /camp/, /avail/, /pay/]],
  ["Residential", [/home/]],
  ["Business", [/business/]],
  ["Hosting", [/hosting/, /domain/]],
  ["About", [/news/, /coverage/]],
  ["My Account", [/support/]],
])

const NAVIGATION_MENU_MAP = new Map([
  ["Home", "/"],
  [
    "Services",
    new Map([
      [
        "Residential Services",
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

const services = [
  {
    name: "Analytics",
    description:
      "Get a better understanding of where your traffic is coming from.",
    href: "#",
    icon: ChartBarIcon,
  },
  {
    name: "Engagement",
    description: "Speak directly to your customers in a more meaningful way.",
    href: "#",
    icon: CursorClickIcon,
  },
  {
    name: "Security",
    description: "Your customers' data will be safe and secure.",
    href: "#",
    icon: ShieldCheckIcon,
  },
  {
    name: "Integrations",
    description: "Connect with third-party tools that you're already using.",
    href: "#",
    icon: ViewGridIcon,
  },
]

/*
export default function Example() {
  const [referenceElement, setReferenceElement] = useState(null)
  const [popperElement, setPopperElement] = useState(null)
  const [arrowElement, setArrowElement] = useState(null)
  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    modifiers: [{ name: "arrow", options: { element: arrowElement } }],
  })

  return (
    <nav>
      <button type="button" ref={setReferenceElement}>
        Reference element
      </button>

      <div ref={setPopperElement} style={styles.popper} {...attributes.popper}>
        Popper element
        <div ref={setArrowElement} style={styles.arrow} />
      </div>
    </nav>
  )
}*/

/*
export default function MyPopover() {
  let [referenceElement, setReferenceElement] = useState()
  let [popperElement, setPopperElement] = useState()
  let { styles, attributes } = usePopper(referenceElement, popperElement)

  return (
    <Popover>
      <Popover.Button ref={setReferenceElement}>Solutions</Popover.Button>

      <Popover.Panel
        ref={setPopperElement}
        style={styles.popper}
        {...attributes.popper}
      ></Popover.Panel>
    </Popover>
  )
}*/

function classNames(...classes) {
  return classes.filter(Boolean).join(" ")
}

export default function DropdownMenu() {
  const [navIsOpen, setNavIsOpen] = useState(false)

  const onToggleNav = () => {
    setNavIsOpen((status) => {
      if (status) {
        // close the nav, allow scrolling
        document.body.style.overflow = "auto"
      } else {
        // open the nav, prevent scrolling
        document.body.style.overflow = "hidden"
      }
      return !status
    })
  }
  return (
    <OutsideAlerter>
      <Popover.Group as="nav" className={classNames()} role="navigation">
        <button onClick={() => onToggleNav()} className="sm:hidden">
          Show menu
        </button>
        <div
          className={classNames(
            navIsOpen ? "flex" : "hidden sm:flex",
            "sticky z-100 inset-0 flex-wrap px-4 py-6 mx-auto max-w-7xl sm:px-6 lg:px-8",
            "group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          )}
        >
          {Array.from(NAVIGATION_MENU_MAP).map(([title, href], index) => {
            return (
              <>
                <FlyoutMenuFullWidth title={title} menuItems={services} />
              </>
            )
          })}
        </div>
      </Popover.Group>
    </OutsideAlerter>
  )
}

/*
export default function DropdownMenu() {
  // fetch current page URL
  const router = useRouter() // next/router
  const currentURL = router.asPath

  const isRequired = () => {
    throw new Error("Missing navigationMenu argument in DropdownMenu")
  }

  const makeNavigationMenu = (
    navigationMenu = isRequired(),
    dropdownMenuItemProps = null
  ) => {
    return [...navigationMenu.entries()].map(
      ([text, destinationOrSubmenu], itemIndex) => {
        // check to see if we're the current page & need to be highlighted
        const isCurrentPage =
          router.asPath === href ||
          MENU_LOOKUP_ALIASES[text].some((regExp) => regExp.exec(currentURL))

        const isCurrentPageProps =
          router.asPath === href
            ? { "aria-current": "page", className: "active" }
            : {}

        if (typeof destinationOrSubmenu === "string") {
          // we have a URL, so make a <Link> anchor
          const href = destinationOrSubmenu

          // set up props if we're the current page

          // set up the props we're passing around for accessibility
          let childProps = {}
          if (dropdownMenuItemProps && dropdownMenuItemProps[itemIndex]) {
            // pass in itemProps from react-accessible-dropdown-menu-hook
            childProps = { ...dropdownMenuItemProps[itemIndex] }
          }
          childProps.key = text + href

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
                className="flex w-full"
              >
                {text}
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
                  {destinationOrSubmenu &&
                    makeNavigationMenu(destinationOrSubmenu, itemProps)}
                </li>
              </ul>
            </li>
          )
        }
        throw new Error("Unknown destinationOrSubmenu prop in DropdownMenu")
      }
    )
  }
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
            {makeNavigationMenu(NAVIGATION_MENU_MAP)}
          </ul>
        </div>
      </div>
    </nav>
  )
}
*/
