/*
import { useRouter } from "next/router"
import useDropdownMenu from "react-accessible-dropdown-menu-hook"
import Link from "@/components/Link"
import DownArrow from "@/data/material-icons/keyboard_arrow_down_black_48dp.svg"
import LeftArrow from "@/data/material-icons/keyboard_arrow_left_black_48dp.svg"
import RightArrow from "@/data/material-icons/keyboard_arrow_right_black_48dp.svg"
import UpArrow from "@/data/material-icons/keyboard_arrow_up_black_48dp.svg"*/
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
import FlyoutMenuSimple from "@/components/FlyoutMenuSimple"
import FlyoutMenuSimpleStacked from "@/components/FlyoutMenuSimpleStacked"
import FlyoutMenuFullWidth from "@/components/FlyoutMenuFullWidth"
import FlyoutMenuFullWidthOriginal from "@/components/FlyoutMenuFullWidthOriginal"

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
  // <nav> is closed by default on mobile display

  const onToggleNav = () => {
    setNavIsOpen((status) => !status)
  }

  const closeNavIfOpen = () => {
    setNavIsOpen((status) => false)
  }

  /*
  Scroll to menu if clicked? (Alternative to full screen)

  const myRef = useRef(null)

   const executeScroll = () => myRef.current.scrollIntoView()
   // run this function from an event handler or an effect to execute scroll

   return (
      <>
         <div ref={myRef}>Element to scroll to</div>
         <button onClick={executeScroll}> Click to scroll </button>
      </>
      */

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
          closeNavIfOpen()
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

  return (
    <>
      <OutsideAlerter>
        {/* OutsideAlerter is for the mobile menu --
        close with toggle or by clicking outside */}
        <Popover.Group
          as="nav"
          role="navigation"
          className="flex flex-col items-center"
        >
          <button
            type="button"
            aria-label="Toggle Menu"
            onClick={() => onToggleNav()}
            className="flex mx-auto my-4 text-2xl sm:hidden"
          >
            <div className="w-8 h-8 rounded">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="text-gray-900 dark:text-gray-100"
              >
                {/* menu icon when closed and X icon when open*/}
                {navIsOpen ? (
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                ) : (
                  <path
                    fillRule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  />
                )}
              </svg>
            </div>
            Menu
          </button>

          <div
            className={classNames(
              navIsOpen ? "flex" : "hidden sm:flex",
              "justify-between w-full flex-wrap px-4 py-6 mx-auto max-w-7xl sm:px-6 lg:px-8 group bg-white rounded-md text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            )}
          >
            {Array.from(NAVIGATION_MENU_MAP).map(([title, href], index) => {
              return (
                <>
                  {/*<FlyoutMenuFullWidth title={title} menuItems={services} />*/}
                  <Popover.Group>
                    <FlyoutMenuSimpleStacked title={title} />
                  </Popover.Group>
                </>
              )
            })}
          </div>
        </Popover.Group>
      </OutsideAlerter>
    </>
  )
}

/*
          <div
            className={classNames(
              navIsOpen ? "inline-flex" : "hidden sm:inline-flex",
              "flex-wrap px-4 py-6 mx-auto max-w-7xl sm:px-6 lg:px-8",
              "group bg-white rounded-md items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
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
          <FlyoutMenuFullWidth title={"hi"} menuItems={services} />*/

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
