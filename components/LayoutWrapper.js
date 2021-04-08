import siteMetadata from "@/data/siteMetadata"
import headerNavLinks from "@/data/headerNavLinks"
import Logo from "@/data/logo.svg"
import Link from "./Link"
import SectionContainer from "./SectionContainer"
import Footer from "./Footer"
import MobileNav from "./MobileNav"
import ThemeSwitch from "./ThemeSwitch"

const LayoutWrapper = ({ children }) => {
  return (
    <>
      <header className="py-4 page-header">
        <nav
          className="flex flex-wrap pl-0 list-reset navbar"
          id="slide-nav"
          role="navigation"
        >
          <div className="container mx-auto">
            <div className="flex flex-wrap pl-0 list-reset navbar-header">
              <div className="header-top !w-full">
                <div className="flex flex-wrap lg:flex-nowrap ">
                  <div className=" lg:order-1 sm:w-2/3 md:w-1/3 first-mobile">
                    <div className="phone">
                      <div className="number">
                        <i className="icon icon-call-telephone" />
                        <span style={{ fontSize: 20 }}>
                          <strong>
                            Kingston:{" "}
                            <span style={{ color: "#A80532" }}>
                              613-549-8667
                            </span>
                          </strong>
                        </span>
                        <br />
                        <span style={{ fontSize: 20 }}>
                          <strong>
                            Belleville:{" "}
                            <span style={{ color: "#A80532" }}>
                              613-968-7137
                            </span>
                          </strong>
                        </span>
                      </div>
                      <div>CALL &amp; DISCUSS YOUR INTERNET NEEDS </div>
                    </div>
                  </div>
                  <div className="pl-4 pr-4 sm:w-1/3 lg:w-1/4">
                    <div className="!mt-6">
                      <a
                        href="/order/"
                        className="!mt-10 text-white hover:active:focus:outline-none hover:active:focus:shadow-none py-4 px-6 leading-normal h-[51px] rounded-xl align-top font-bold border-none  uppercase transition-all duration-300 no-underline btn btn-orange focus:active:bg-[#005395] bg-[#b0243d] shadow-xl border:none"
                      >
                        Order now
                      </a>
                    </div>
                  </div>
                  <div className="pl-4 pr-4 lg:w-1/6 visible-lg" />
                  <div className="pl-4 pr-4 text-center sm:w-1/3">
                    <div className="logo">
                      <a href="/">
                        <img
                          className="max-w-full md:mx-w-[250px] md:text-center md:py-4 md:px-0"
                          src="https://kos.net/images/logo.png"
                          alt="Logo"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <button
                type="button"
                className="flex flex-wrap pl-0 list-reset lg:hidden navbar-toggle"
              >
                <i className="icon icon-menu" />
                <i className="icon icon-cancel" />
              </button>
            </div>
            <div id="slidemenu" data-hover="dropdown" data-animations="fadeIn">
              <ul className="py-10 nav lg:flex navbar-nav">
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
                          <a href="/res/wireless-broadband/">
                            Wireless Broadband
                          </a>
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
                      <a href="https://webmail.kos.net/src/login.php">
                        My Email
                      </a>
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
          </div>
        </nav>
        <div id="navbar-height-col" />
      </header>
      <div id="page-content">{children}</div>
    </>
  )
}

export default LayoutWrapper
