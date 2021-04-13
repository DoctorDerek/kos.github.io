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
          <Link {...{ href }}>
            <div key={text + href}>
              {text}👉{href}
            </div>
          </Link>
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
            <button
              {...buttonProps}
              className="block"
              onMouseEnter={() => setIsOpen(true)}
              onMouseLeave={() => setIsOpen(false)}
              aria-haspopup="true"
              aria-expanded={isOpen}
            >
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
      throw new Error("Unknown destinationOrSubmenu prop in DropdownMenu")
    })

  return <nav>{makeNavigationMenu(NAVIGATION_MENU_MAP)}</nav>
}
