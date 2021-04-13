import useDropdownMenu from "react-accessible-dropdown-menu-hook"

const Navigation = new Map([
  ["Home", "/"],
  [
    "Services",
    new Map([
      ["Residential", "/residential/"],
      ["Business", "/business/"],
    ]),
  ],
  ["Hosting", null],
  ["About Us", "/about/"],
  ["Order Now", "/order/"],
  ["Contact Us", "/contact.php"],
  ["My Account", null],
])

export default function DropdownMenu() {
  const numberOfItems = 2
  const { buttonProps, itemProps, isOpen, setIsOpen } = useDropdownMenu(
    numberOfItems
  )

  const makeNavigationMenu = (NavigationMap) =>
    [...NavigationMap.entries()].map(([text, href]) => {
      if (typeof href === "string") {
        return (
          <div key={text + href}>
            {text}👉{href}
          </div>
        )
      }
      if (href !== null && typeof href === "object") {
        return (
          <>
            <div>{text}👇</div>
            {href && makeNavigationMenu(href)}
          </>
        )
      }
      return null
    })

  return <nav>{makeNavigationMenu(Navigation)}</nav>
}
/* HOME
SERVICES
HOSTING
ABOUT US
ORDER NOW
CONTACT US
MY ACCOUNT
*/
/*
<a href="/">home</a>
          <a href="#" data-toggle="dropdown">
            services
          </a>
            <li className="dropdown-submenu">
              <a href="/residential/" data-toggle="dropdown">
                Residential
              </a>
                  <a href="/res/high-speed-cable/">High Speed Cable</a>
                  <a href="/res/wireless-broadband/">Wireless Broadband</a>
                  <a href="/res/high-speed-dsl/">High Speed DSL</a>
                  <a href="/res/voip/">VoIP</a>
                  <a href="/res/mail/">Mail</a>
                  <a href="/res/dial-up/">Dial Up</a>
              <a href="/business/">
                Business
              </a>
                  <a href="/bus/high-speed-cable/">High Speed Cable</a>
                  <a href="/bus/wireless/">Wireless</a>
                  <a href="/bus/high-speed-dsl/">High Speed DSL</a>
                  <a href="/bus/voip/">VoIP</a>
                  <a href="/bus/mail/">Mail</a>
                  <a href="/bus/colocate-server/">Co Locate Server</a>
                  <a href="/bus/dial-up/">Dial Up</a>
              <a href="/campgrounds/">Campgrounds</a>
              <a href="/availability/">Availability Tool</a>
              <a href="/payment/options/">Payment Options</a>
        <li className="relative dropdown">
            Hosting
              <a href="/hosting/packages/">Packages &amp; Pricing</a>
              <a href="/domain/registration/">Registering a Domain</a>
        </li>
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
