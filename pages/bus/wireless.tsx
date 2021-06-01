import Link from "@/components/Link"
import { InternalTemplate } from "@/components/InternalTemplate"
import { BulletNavMenu } from "@/components/BulletNavMenu"

export default function BusinessWireless(): JSX.Element {
  const title = (
    <>
      Business <span style={{ color: "#A80532" }}>Wireless</span>
      Packages in Kingston & Belleville, Ontario
    </>
  )
  // "Business Wireless Packages"
  const slug = "bus/wireless"
  // "bus/wireless"
  const bulletNavMenu = <BulletNavMenu type="Business" />

  return (
    <InternalTemplate title={title} slug={slug} bulletNavMenu={bulletNavMenu}>
      <WirelessContent />
    </InternalTemplate>
  )
}

function WirelessContent() {
  return (
    <>
      <div id="page-content">
        {/* Block */}
        <div className="block">
          <div className="container">
            <span className="text-center" style={{ fontSize: "20px" }}>
              Kingston Online Services has aggressively built a wireless
              broadband network in Southeastern Ontario to accommodate the needs
              of our rural customers.{" "}
              <Link href="/coverage/">Click here for our coverage area.</Link>{" "}
            </span>{" "}
            <br />
            <br />
            {/* <div>
              <iframe
                frameBorder={0}
                height={250}
                width="80%"
                scrolling="no"
                src="../../dslavail/dslavail-bus.php"
                title="Postal Code Search"
              />
            </div> */}
            <div className="divider" />
            <div className="row pricing-block-row">
              <div className="col-sm-4">
                <div className="pricing-block color1">
                  <div className="number">1</div>
                  <div className="pricing-block__top">
                    <div className="pricing-block__price">
                      <div className="vert-wrapper">
                        <div className="vert">
                          <div style={{ margin: "0 0" }}>
                            <span
                              style={{ fontSize: "36px", fontWeight: "bold" }}
                            >
                              BIZ 4
                            </span>
                          </div>
                          <div>
                            <br />
                            <span
                              style={{ fontSize: "36px", fontWeight: "bold" }}
                            >
                              $71
                            </span>
                            <sup>.95</sup>
                            <br />
                            per month{" "}
                            <sup>
                              <Link
                                href="#6"
                                style={{
                                  color: "#ffffff",
                                  textDecoration: "underline",
                                }}
                              >
                                6
                              </Link>{" "}
                            </sup>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="pricing-block__bottom">
                    <span style={{ fontSize: "26px", color: "#005395" }}>
                      UP TO 4.0 MBPS DOWNLOAD SPEED
                    </span>
                    <br />
                    <br />
                    <span style={{ fontSize: "26px", color: "#005395" }}>
                      100 GB OF DATA TRANSFER PER MONTH
                    </span>
                    <br />
                    <br />
                    <h6 className="title2">BIZ 4</h6>
                    <p style={{}}> FREE DOWNLOADING BETWEEN 1AM-6AM</p>
                    <p>
                      <span
                        style={{
                          color: "#28BCEB",
                          fontSize: "12px",
                          fontWeight: "bold",
                        }}
                      >
                        »
                      </span>
                      &nbsp;
                      <Link
                        style={{
                          color: "#28BCEB",
                          textDecoration: "underline",
                          fontWeight: "bold",
                        }}
                        href="#popup0"
                      >
                        click here for full details
                      </Link>
                    </p>
                    <div className="text-center">
                      <Link
                        href="/order/?env=bus&type=broadband&plan=BIZ 4 - $71.95"
                        className="btn"
                      >
                        Order Now
                      </Link>
                    </div>
                  </div>
                  {/* SOF POP UP BOX */}
                  <div id="popup0" className="overlay">
                    <div className="popup">
                      <button className="close">CLOSE ×</button>
                      <div className="content">
                        <div className="pricing-block color2">
                          <div className="pricing-block__bottom sm">
                            <p>
                              <span
                                style={{
                                  color: "#00539D",
                                  fontWeight: "bold",
                                  fontSize: "28px",
                                }}
                              >
                                BIZ 4
                              </span>
                              <br />
                            </p>
                            <h6>Account Includes:</h6>
                            <ul>
                              <li>100 GB per month</li>
                              <li>
                                Up to 4 Mbps performance<sup>6</sup>
                              </li>
                              <li>Free downloading between 1am – 6am</li>
                              <li>7 day tech support</li>
                              <li>Email anti-virus and spam protection</li>
                              <li>
                                Packages include rental of all hardware to
                                activate one system
                              </li>
                              <li>5 email addresses</li>
                              <li>Separate dial-up back up account</li>
                              <li>$1.95 per extra gigabyte</li>
                            </ul>
                            <h6>Installation Includes:</h6>
                            <ul>
                              <li>Subscriber Module</li>
                              <li>Basic configuration of one computer</li>
                              <li>Reflector Dish (if required)</li>
                              <li>
                                Up to 20 metres of cable ($3 per additional
                                metre)
                              </li>
                            </ul>
                            <h6>Installation Fee:</h6>
                            <ul>
                              <li>3 Year Contract $0 Install fee</li>
                              <li>2 Year Contract $99.95 Install fee</li>
                              <li>1 Year Contract $199.95 Install fee</li>
                            </ul>
                            <p>
                              6) Only in regions where technology is available
                            </p>
                            <p />
                          </div>
                          <div>
                            <button className="bottomclose">CLOSE ×</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* EOF POP UP BOX */}
                </div>
              </div>
              <div className="col-sm-4">
                <div className="pricing-block color2">
                  <div className="number">2</div>
                  <div className="pricing-block__top">
                    <div className="pricing-block__price">
                      <div className="vert-wrapper">
                        <div className="vert">
                          <div style={{ margin: "0 0" }}>
                            <span
                              style={{ fontSize: "36px", fontWeight: "bold" }}
                            >
                              BIZ 6
                            </span>
                          </div>
                          <div>
                            <br />
                            <span
                              style={{ fontSize: "36px", fontWeight: "bold" }}
                            >
                              $81
                            </span>
                            <sup>.95</sup>
                            <br />
                            per month{" "}
                            <sup>
                              <Link
                                href="#6"
                                style={{
                                  color: "#ffffff",
                                  textDecoration: "underline",
                                }}
                              >
                                6
                              </Link>{" "}
                            </sup>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="pricing-block__bottom">
                    <span style={{ fontSize: "26px", color: "#005395" }}>
                      UP TO 6.0 MBPS DOWNLOAD SPEED
                    </span>
                    <br />
                    <br />
                    <span style={{ fontSize: "26px", color: "#005395" }}>
                      150 GB DATA TRANSFER PER MONTH
                    </span>
                    <br />
                    <br />
                    <h6 className="title2">BIZ 6</h6>
                    <p style={{}}> FREE DOWNLOADING BETWEEN 1AM-6AM</p>
                    <p>
                      <span
                        style={{
                          color: "#28BCEB",
                          fontSize: "12px",
                          fontWeight: "bold",
                        }}
                      >
                        »
                      </span>
                      &nbsp;
                      <Link
                        style={{
                          color: "#28BCEB",
                          textDecoration: "underline",
                          fontWeight: "bold",
                        }}
                        href="#popup1"
                      >
                        click here for full details
                      </Link>
                    </p>
                    <div className="text-center">
                      <Link
                        href="/order/?env=bus&type=broadband&plan=BIZ 6 - $81.95"
                        className="btn"
                      >
                        Order Now
                      </Link>
                    </div>
                  </div>
                  {/* SOF POP UP BOX */}
                  <div id="popup1" className="overlay">
                    <div className="popup">
                      <button className="close">CLOSE ×</button>
                      <div className="content">
                        <div className="pricing-block color2">
                          <div className="pricing-block__bottom sm">
                            <p>
                              <span
                                style={{
                                  color: "#00539D",
                                  fontWeight: "bold",
                                  fontSize: "28px",
                                }}
                              >
                                BIZ 6
                              </span>
                              <br />
                            </p>
                            <h6>Account Includes:</h6>
                            <ul>
                              <li>150 GB per month</li>
                              <li>
                                Up to 6 Mbps performance<sup>6</sup>
                              </li>
                              <li>Free downloading between 1am – 6am</li>
                              <li>7 day tech support</li>
                              <li>Email anti-virus and spam protection</li>
                              <li>
                                Packages include rental of all hardware to
                                activate one system
                              </li>
                              <li>5 email addresses</li>
                              <li>Separate dial-up back up account</li>
                              <li>$1.95 per extra gigabyte</li>
                            </ul>
                            <h6>Installation Includes:</h6>
                            <ul>
                              <li>Subscriber Module</li>
                              <li>Basic configuration of one computer</li>
                              <li>Reflector Dish (if required)</li>
                              <li>
                                Up to 20 metres of cable ($3 per additional
                                metre)
                              </li>
                            </ul>
                            <h6>Installation Fee:</h6>
                            <ul>
                              <li>3 Year Contract $0 Install fee</li>
                              <li>2 Year Contract $99.95 Install fee</li>
                              <li>1 Year Contract $199.95 Install fee</li>
                            </ul>
                            <p>
                              6) Only in regions where technology is available
                            </p>
                            <p />
                          </div>
                          <div>
                            <button className="bottomclose">CLOSE ×</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* EOF POP UP BOX */}
                </div>
              </div>
              <div className="col-sm-4">
                <div className="pricing-block color1">
                  <div className="number">3</div>
                  <div className="pricing-block__top">
                    <div className="pricing-block__price">
                      <div className="vert-wrapper">
                        <div className="vert">
                          <div style={{ margin: "0 0" }}>
                            <span
                              style={{ fontSize: "36px", fontWeight: "bold" }}
                            >
                              BIZ 10
                            </span>
                          </div>
                          <div>
                            <br />
                            <span
                              style={{ fontSize: "36px", fontWeight: "bold" }}
                            >
                              $99
                            </span>
                            <sup>.95</sup>
                            <br />
                            per month{" "}
                            <sup>
                              <Link
                                href="#6"
                                style={{
                                  color: "#ffffff",
                                  textDecoration: "underline",
                                }}
                              >
                                6
                              </Link>{" "}
                            </sup>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="pricing-block__bottom">
                    <span style={{ fontSize: "26px", color: "#005395" }}>
                      UP TO 10.0 MBPS DOWNLOAD SPEED
                    </span>
                    <br />
                    <br />
                    <span style={{ fontSize: "26px", color: "#005395" }}>
                      200 GB DATA TRANSFER PER MONTH
                    </span>
                    <br />
                    <br />
                    <h6 className="title2">BIZ 10</h6>
                    <p style={{}}>FREE DOWNLOADING BETWEEN 1AM-6AM</p>
                    <p>
                      <span
                        style={{
                          color: "#28BCEB",
                          fontSize: "12px",
                          fontWeight: "bold",
                        }}
                      >
                        »
                      </span>
                      &nbsp;
                      <Link
                        style={{
                          color: "#28BCEB",
                          textDecoration: "underline",
                          fontWeight: "bold",
                        }}
                        href="#popup2"
                      >
                        click here for full details
                      </Link>
                    </p>
                    <div className="text-center">
                      <Link
                        href="/order/?env=bus&type=broadband&plan=BIZ 10 - $99.95"
                        className="btn"
                      >
                        Order Now
                      </Link>
                    </div>
                  </div>
                  {/* SOF POP UP BOX */}
                  <div id="popup2" className="overlay">
                    <div className="popup">
                      <button className="close">CLOSE ×</button>
                      <div className="content">
                        <div className="pricing-block color2">
                          <div className="pricing-block__bottom sm">
                            <p>
                              <span
                                style={{
                                  color: "#00539D",
                                  fontWeight: "bold",
                                  fontSize: "28px",
                                }}
                              >
                                BIZ 10
                              </span>
                              <br />
                            </p>
                            <h6>Account Includes:</h6>
                            <ul>
                              <li>250 GB per month</li>
                              <li>
                                Up to 10 Mbps performance<sup>6</sup>
                              </li>
                              <li>Free downloading between 1am – 6am</li>
                              <li>7 day tech support</li>
                              <li>Email anti-virus and spam protection</li>
                              <li>
                                Packages include rental of all hardware to
                                activate one system
                              </li>
                              <li>5 email addresses</li>
                              <li>Separate dial-up back up account</li>
                              <li>$1.95 per extra gigabyte</li>
                            </ul>
                            <h6>Installation Includes:</h6>
                            <ul>
                              <li>Subscriber Module</li>
                              <li>Basic configuration of one computer</li>
                              <li>Reflector Dish (if required)</li>
                              <li>
                                Up to 20 metres of cable ($3 per additional
                                metre)
                              </li>
                            </ul>
                            <h6>Installation Fee:</h6>
                            <ul>
                              <li>3 Year Contract $0 Install fee</li>
                              <li>2 Year Contract $99.95 Install fee</li>
                              <li>1 Year Contract $199.95 Install fee</li>
                            </ul>
                            <p>
                              6) Only in regions where technology is
                              available.&nbsp;
                            </p>
                            <p />
                          </div>
                          <div>
                            <button className="bottomclose">CLOSE ×</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* EOF POP UP BOX */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="block">
          <div className="container">
            <div className="divider" />
            <div className="row pricing-block-row"> </div>
          </div>
        </div>
      </div>

      <div className="block">
        <div className="container">
          <p
            style={{
              marginTop: "0px",
              marginBottom: "22px",
              fontSize: "15px",
              lineHeight: "22px",
              color: "#000000",
              fontFamily: '"Open Sans", sans-serif',
              backgroundColor: "#ffffff",
            }}
          >
            6) Only in regions where technology is available.
          </p>
          <div
            className="block"
            style={{
              marginBottom: "90px",
              color: "#000000",
              fontFamily: '"Open Sans", sans-serif',
              fontSize: "15px",
              backgroundColor: "#ffffff",
            }}
          >
            <div
              className="container"
              style={{
                paddingRight: "15px",
                paddingLeft: "15px",
                marginRight: "auto",
                marginLeft: "auto",
                width: "1200px",
              }}
            >
              <div>
                <h1
                  className="text-center decor color"
                  style={{
                    marginTop: "0px",
                    marginBottom: "33px",
                    fontSize: "52px",
                    fontFamily: '"Open Sans", sans-serif',
                    fontWeight: 600,
                    lineHeight: "1em",
                    color: "#005395",
                    paddingBottom: "48px",
                    backgroundImage: 'url("../images/h-decor.png")',
                    backgroundPosition: "center bottom",
                  }}
                >
                  Additional Details &amp; Options
                </h1>
              </div>
              <div
                className="price-grid"
                style={{
                  display: "table",
                  borderCollapse: "collapse",
                  marginTop: "35px",
                }}
              >
                <div
                  className="price-cell"
                  style={{
                    display: "table-cell",
                    padding: "22px 15px 50px",
                    width: "584px",
                    position: "relative",
                    transition: "0.2s",
                    backgroundColor: "#f7f8f8",
                    border: "1px solid #e4e4e4",
                  }}
                >
                  <h6
                    style={{
                      fontFamily: "Lato, sans-serif",
                      fontWeight: "bold",
                      lineHeight: "26px",
                      color: "#005395",
                      marginTop: "0px",
                      marginBottom: "5px",
                      fontSize: "18px",
                      textTransform: "uppercase",
                    }}
                  >
                    OPTIONS
                  </h6>
                  <p
                    style={{
                      marginTop: "0px",
                      marginBottom: "5px",
                      lineHeight: "22px",
                    }}
                  >
                    &nbsp;
                  </p>
                  <ul style={{ marginBottom: "10px" }}>
                    <li>Additional E-Mail boxes, $4.95 per month, each</li>
                    <li>Optional VIP E-mail boxes, $6.95 per month, each</li>
                    <li>
                      Additional 1000MB (1GB) transfer available for $1.95 on
                      select services
                    </li>
                    <li>Opt-out for automatic spam protection</li>
                    <li>All accounts allow upgrades with no service fee</li>
                    <li>Tripod and Mast Kit available for extra height</li>
                  </ul>
                  <p
                    style={{
                      marginTop: "0px",
                      marginBottom: "5px",
                      lineHeight: "22px",
                    }}
                  >
                    &nbsp;
                  </p>
                </div>
                <div
                  className="price-cell"
                  style={{
                    display: "table-cell",
                    padding: "22px 15px 50px",
                    width: "585px",
                    position: "relative",
                    transition: "0.2s",
                    border: "1px solid #e4e4e4",
                  }}
                >
                  <h6
                    style={{
                      fontFamily: "Lato, sans-serif",
                      fontWeight: "bold",
                      lineHeight: "26px",
                      color: "#005395",
                      marginTop: "0px",
                      marginBottom: "5px",
                      fontSize: "18px",
                      textTransform: "uppercase",
                    }}
                  >
                    REQUIREMENTS
                  </h6>
                  <p
                    style={{
                      marginTop: "0px",
                      marginBottom: "5px",
                      lineHeight: "22px",
                    }}
                  >
                    To access the Internet with KOS Wireless, you will need:
                  </p>
                  <ul style={{ marginBottom: "10px" }}>
                    <li>
                      A clear or partial line of sight to one of our towers
                    </li>
                    <li>
                      A Network Interface Card (NIC), also known as an Ethernet
                      Card
                    </li>
                    <li>
                      Modern 32-bit or 64-bit Operating System (Windows 7
                      minimum)
                    </li>
                    <li>Minimum of 2.0 Ghz processor required</li>
                    <li>56K modem suggested for dial-up</li>
                  </ul>
                </div>
              </div>
              <div
                className="price-grid"
                style={{ display: "table", borderCollapse: "collapse" }}
              >
                <p
                  style={{
                    marginTop: "0px",
                    marginBottom: "22px",
                    lineHeight: "22px",
                  }}
                >
                  &nbsp;
                </p>
                <h6
                  style={{
                    fontFamily: "Lato, sans-serif",
                    fontWeight: "bold",
                    lineHeight: "26px",
                    color: "#005395",
                    marginTop: "0px",
                    marginBottom: "0px",
                    fontSize: "18px",
                  }}
                >
                  How it works
                </h6>
                <p
                  style={{
                    marginTop: "0px",
                    marginBottom: "22px",
                    lineHeight: "22px",
                  }}
                >
                  Kingston Online’s wireless broadband solution incorporates
                  towers which are supplied Internet transit via high-speed
                  backhaul routers to our central network. None of our solution
                  uses high-latency satellite transit or high speed DSL
                  solutions designed for low priority retail markets as in the
                  case of some market competitors. KOS Broadband Wireless is
                  Internet access done right.
                </p>
                <p
                  style={{
                    marginTop: "0px",
                    marginBottom: "22px",
                    lineHeight: "22px",
                  }}
                >
                  KOS provides the customer with a total solution which includes
                  the hardware required for the service and an installation
                  component that takes the guesswork out of the process. KOS
                  installs the following for each customer:
                </p>
                <ul style={{ marginBottom: "10px" }}>
                  <li>High-gain reception dish antenna (if required)</li>
                  <li>Wireless broadband Subscriber Module</li>
                  <li>
                    Up to 20 metres of outdoor network cabling ($3 per
                    additional metre)
                  </li>
                  <li>Mounting brackets as required</li>
                </ul>
                <p
                  style={{
                    marginTop: "0px",
                    marginBottom: "22px",
                    lineHeight: "22px",
                  }}
                >
                  &nbsp;
                </p>
                <p
                  style={{
                    marginTop: "0px",
                    marginBottom: "22px",
                    lineHeight: "22px",
                  }}
                >
                  Our installers bring the network connection directly to a
                  designated demarc position in your home or business, just as
                  the phone company does with its service. The customer then
                  will be required to make available a computer to test with and
                  configure.
                </p>
                <p
                  style={{
                    marginTop: "0px",
                    marginBottom: "22px",
                    lineHeight: "22px",
                  }}
                >
                  Once configuration and installation is complete, the customer
                  will be able to receive signal from one of KOS’ towers and
                  access the Internet as if they were using it over a high speed
                  line of some other sort. Latency should be under 50ms in most
                  cases, which is suitable for online gaming, voice over IP and
                  other applications that require low latency.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
