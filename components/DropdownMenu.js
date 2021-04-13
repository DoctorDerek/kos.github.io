import useDropdownMenu from "react-accessible-dropdown-menu-hook"
import Link from "@/components/Link"

const NAVIGATION_MENU_MAP = new Map([
  ["Home", "/"],
  [
    "Services",
    new Map([
      [
        "Residential",
        new Map([
          ["Residential Internet", "/residential/"],
          ["High Speed Cable", "/res/high-speed-cable/"],
          ["Wireless Broadband", "/res/wireless-broadband/"],
          ["High Speed DSL", "/res/high-speed-dsl/"],
          ["VoIP", "/res/voip/"],
          ["Mail", "/res/mail/"],
          ["Dial Up", "/res/dial-up/"],
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
  ["About Us", "/about/"],
  ["Order Now", "/order/"],
  ["Contact Us", "/contact.php"],
  ["My Account", null],
])

/*
        <li className="relative dropdown">
          <a href="/about/" data-toggle="dropdown">
            About Us
          </a>
              <a href="/about/">Our Company</a>
              <a href="/news/events/">News &amp; Events</a>
              <a href="/coverage/">Coverage Area</a>
          <a href="/order/">Order Now</a>
          <a href="/contact.php">Contact Us</a>
        </li>
        <li className="relative dropdown">
          <a href="#" data-toggle="dropdown">
            My Account
          </a>
              <a href="https://webmail.kos.net/src/login.php">My Email</a>
              <a href="https://usage.kos.net/">My Internet Usage</a>
              <a href="https://vvs.directnet.ca/?">My VoIP Portal</a>
              <a href="https://support.kos.net/helpdesk/index.php?action=submit">
                Web Hosting Support
              </a>
              <a href="https://support.kos.net/helpdesk/index.php?action=submit">
                Open a Support Ticket
              </a>
              <a href="/support/faqs/">Quick Support / FAQS</a>
            </li>
              */

const isRequired = () => {
  throw new Error("Missing argument in DropdownMenu")
}

export default function DropdownMenu() {
  const makeNavigationMenu = (
    NavigationMenu = isRequired(),
    dropdownMenuItemProps = null
  ) =>
    [...NavigationMenu.entries()].map(([text, destinationOrSubmenu]) => {
      if (typeof destinationOrSubmenu === "string") {
        const href = destinationOrSubmenu
        return (
          <a {...{ href }}>
            <div key={text + href}>
              {text}👉{href}
            </div>
          </a>
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
        return (
          <>
            <button {...buttonProps} className="block">
              {text}
              {isOpen ? "👆" : "👇"}
            </button>
            <div
              className={isOpen ? "visible pl-4" : "hidden pl-4"}
              role="menu"
            >
              {destinationOrSubmenu &&
                makeNavigationMenu(destinationOrSubmenu, itemProps)}
            </div>
          </>
        )
      }
      return null
    })

  return <nav>{makeNavigationMenu(NAVIGATION_MENU_MAP)}</nav>
}
