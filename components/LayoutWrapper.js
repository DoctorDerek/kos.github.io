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
      <header className="page-header">
        <nav className="navbar" id="slide-nav">
          <div className="container">
            <div className="navbar-header">
              <div className="header-top">
                <div className="row">
                  <div className="col-sm-8 col-md-4 first-mobile">
                    <div className="phone">
                      <div className="number">
                        <i className="icon icon-call-telephone"></i>
                        <span style={{ fontSize: "20px" }}>
                          <strong>
                            Kingston:
                            <span style={{ color: "#a80532" }}>
                              613-549-8667
                            </span>
                          </strong>
                        </span>
                        <br />
                        <span style={{ fontSize: "20px" }}>
                          <strong>
                            Belleville:
                            <span style={{ color: "#a80532" }}>
                              613-968-7137
                            </span>
                          </strong>
                        </span>
                      </div>
                      <div>CALL &amp; DISCUSS YOUR INTERNET NEEDS</div>
                    </div>
                  </div>
                  <div className="col-sm-4 col-lg-3">
                    <div>
                      <a href="/order/" className="btn btn-orange">
                        Order now
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-1 visible-lg"></div>
                  <div className="text-center col-sm-4">
                    <div className="logo">
                      <a href="/">
                        <img src="/images/logo.png" alt="Logo" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <button type="button" className="navbar-toggle">
                <i className="icon icon-menu"></i>
                <i className="icon icon-cancel"></i>
              </button>
            </div>

            <div id="slidemenu" data-hover="dropdown" data-animations="fadeIn">
              <ul className="nav navbar-nav">
                <li className="active">
                  <a href="/">home</a>
                </li>
                <li className="dropdown">
                  <a href="#" data-toggle="dropdown">
                    services<span className="ecaret"></span>
                  </a>
                  <ul className="dropdown-menu" role="menu">
                    <li className="dropdown-submenu">
                      <a href="/residential/" data-toggle="dropdown">
                        Residential<span className="ecaret"></span>
                      </a>
                      <ul className="dropdown-menu">
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
                      <a href="/business/">
                        Business<span className="ecaret"></span>
                      </a>
                      <ul className="dropdown-menu">
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
                <li className="dropdown">
                  <a href="#" data-toggle="dropdown">
                    Hosting<span className="ecaret"></span>
                  </a>
                  <ul className="dropdown-menu" role="menu">
                    <li>
                      <a href="/hosting/packages/">Packages &amp; Pricing</a>
                    </li>
                    <li>
                      <a href="/domain/registration/">Registering a Domain</a>
                    </li>
                  </ul>
                </li>
                <li className="dropdown">
                  <a href="/about/" data-toggle="dropdown">
                    About Us<span className="ecaret"></span>
                  </a>
                  <ul className="dropdown-menu" role="menu">
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
                <li className="dropdown">
                  <a href="#" data-toggle="dropdown">
                    My Account<span className="ecaret"></span>
                  </a>
                  <ul className="dropdown-menu" role="menu">
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
      </header>
      <div id="page-content">{children}</div>
    </>
  )
}

export default LayoutWrapper
