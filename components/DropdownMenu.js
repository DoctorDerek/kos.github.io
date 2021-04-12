export default function DropdownMenu() {
  return (
    <div id="slidemenu" data-hover="dropdown" data-animations="fadeIn">
      <ul className="justify-around py-10 nav md:flex navbar-nav">
        <li className="active">
          <a href="/">home</a>
        </li>
        <li className="relative dropdown">
          {" "}
          <a href="#" data-toggle="dropdown">
            services
            <span className="ecaret" />
          </a>
          <ul
            className="absolute z-50 hidden bg-white dropdown-menu"
            role="menu"
          >
            <li className="dropdown-submenu">
              {" "}
              <a href="/residential/" data-toggle="dropdown">
                Residential
                <span className="ecaret" />
              </a>
              <ul className="absolute z-50 hidden bg-white dropdown-menu">
                <li>
                  <a href="/res/high-speed-cable/">High Speed Cable</a>
                </li>
                <li>
                  <a href="/res/wireless-broadband/">Wireless Broadband</a>
                </li>
                <li>
                  <a href="/res/high-speed-dsl/">High Speed DSL</a>
                </li>
                <li>
                  <a href="/res/voip/">VoIP</a>
                </li>
                <li>
                  <a href="/res/mail/">Mail</a>
                </li>
                <li>
                  <a href="/res/dial-up/">Dial Up</a>
                </li>
              </ul>
            </li>
            <li className="dropdown-submenu">
              {" "}
              <a href="/business/">
                Business
                <span className="ecaret" />
              </a>
              <ul className="absolute z-50 hidden bg-white dropdown-menu">
                <li>
                  <a href="/bus/high-speed-cable/">High Speed Cable</a>
                </li>
                <li>
                  <a href="/bus/wireless/">Wireless</a>
                </li>
                <li>
                  <a href="/bus/high-speed-dsl/">High Speed DSL</a>
                </li>
                <li>
                  <a href="/bus/voip/">VoIP</a>
                </li>
                <li>
                  <a href="/bus/mail/">Mail</a>
                </li>
                <li>
                  <a href="/bus/colocate-server/">Co Locate Server</a>
                </li>
                <li>
                  <a href="/bus/dial-up/">Dial Up</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="/campgrounds/">Campgrounds</a>
            </li>
            <li>
              <a href="/availability/">Availability Tool</a>
            </li>
            <li>
              <a href="/payment/options/">Payment Options</a>
            </li>
          </ul>
        </li>
        <li className="relative dropdown">
          <a href="#" data-toggle="dropdown">
            Hosting
            <span className="ecaret" />
          </a>
          <ul
            className="absolute z-50 hidden bg-white dropdown-menu"
            role="menu"
          >
            <li>
              <a href="/hosting/packages/">Packages &amp; Pricing</a>
            </li>
            <li>
              <a href="/domain/registration/">Registering a Domain</a>
            </li>
          </ul>
        </li>
        <li className="relative dropdown">
          <a href="/about/" data-toggle="dropdown">
            About Us
            <span className="ecaret" />
          </a>
          <ul
            className="absolute z-50 hidden bg-white dropdown-menu"
            role="menu"
          >
            <li>
              <a href="/about/">Our Company</a>
            </li>
            <li>
              <a href="/news/events/">News &amp; Events</a>
            </li>
            <li>
              <a href="/coverage/">Coverage Area</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="/order/">Order Now</a>
        </li>
        <li>
          <a href="/contact.php">Contact Us</a>
        </li>
        <li className="relative dropdown">
          <a href="#" data-toggle="dropdown">
            My Account
            <span className="ecaret" />
          </a>
          <ul
            className="absolute z-50 hidden bg-white dropdown-menu"
            role="menu"
          >
            <li>
              <a href="https://webmail.kos.net/src/login.php">My Email</a>
            </li>
            <li>
              <a href="https://usage.kos.net/">My Internet Usage</a>
            </li>
            <li>
              <a href="https://vvs.directnet.ca/?">My VoIP Portal</a>
            </li>
            <li>
              <a href="https://support.kos.net/helpdesk/index.php?action=submit">
                Web Hosting Support
              </a>
            </li>
            <li>
              <a href="https://support.kos.net/helpdesk/index.php?action=submit">
                Open a Support Ticket
              </a>
            </li>
            <li>
              <a href="/support/faqs/">Quick Support / FAQS</a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  )
}
