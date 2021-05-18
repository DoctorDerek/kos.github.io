import { InternalTemplate } from "@/components/InternalTemplate"
import { BulletNavMenu } from "@/components/BulletNavMenu"

export default function BusinessHighSpeedDsl(): JSX.Element {
  const title = (
    <>
      Business <span style={{ color: "#A80532" }}>High Speed DSL</span> Packages
      in Kingston & Belleville, Ontario
    </>
  )
  // "Business High Speed DSL Packages"
  const slug = "bus/high-speed-dsl"
  // "bus/high-speed-dsl"
  const bulletNavMenu = <BulletNavMenu type="Business" />

  return (
    <InternalTemplate title={title} slug={slug} bulletNavMenu={bulletNavMenu}>
      <HighSpeedDslContent />
    </InternalTemplate>
  )
}

function HighSpeedDslContent() {
  return (
    <>
      <div id="page-content">
        {/* Block */}
        <div className="block">
          <div className="container">
            <span className="text-center" style={{ fontSize: "20px" }}>
              KOS Business DSL uses fast, reliable digital connections over your
              phone circuit, to let you talk on the phone and use the Internet
              at the same time. Ask about dry-loop services, if you do not have
              an active phone line.
            </span>{" "}
            <br />
            <br />
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
                              LITE 6
                            </span>
                          </div>
                          <div>
                            <br />
                            <span
                              style={{ fontSize: "36px", fontWeight: "bold" }}
                            >
                              $59
                            </span>
                            <sup>.95</sup>
                            <br />
                            per month
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
                      60 GB OF DATA TRANSFER PER MONTH
                    </span>
                    <br />
                    <br />
                    <h6 className="title2">LITE 6</h6>
                    <p style={{}}>
                      An account for small/SOHO work environments with e-mail,
                      browsing and general Internet usage. Perfect for home
                      offices.
                    </p>
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
                      <a
                        style={{
                          color: "#28BCEB",
                          textDecoration: "underline",
                          fontWeight: "bold",
                        }}
                        href="#popup0"
                      >
                        click here for full details
                      </a>
                    </p>
                    <div className="text-center">
                      <a
                        href="/order/?env=bus&type=dsl&plan=LITE 6 - $59.95"
                        className="btn"
                      >
                        Order Now
                      </a>
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
                                LITE 6
                              </span>
                              <br />
                            </p>
                            <h6>Account Includes:</h6>
                            <ul>
                              <li>
                                Up to 6.0 Mbps download speed, 800 Kbps upload
                                speed
                              </li>
                              <li>60 GB of data transfer per month</li>
                              <li>Includes Modem</li>
                              <li>Free spam and virus protection</li>
                              <li>
                                Five e-mail addresses with web e-mail, IMAP4, or
                                POP3 access
                              </li>
                              <li>20 hours of dial-up access provided</li>
                              <li>Access to value-added services</li>
                              <li>Technical support with office repair</li>
                              <li>Access to web-based e-mail</li>
                            </ul>
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
                              REGULAR 6 UNLIMITED
                            </span>
                          </div>
                          <div>
                            <br />
                            <span
                              style={{ fontSize: "36px", fontWeight: "bold" }}
                            >
                              $69
                            </span>
                            <sup>.95</sup>
                            <br />
                            per month
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
                      UNLIMITED DATA TRANSFER PER MONTH
                    </span>
                    <br />
                    <br />
                    <h6 className="title2">REGULAR 6 UNLIMITED</h6>
                    <p style={{}}>
                      A great choice for small networks with less than 10
                      computers connected. Offers web, e-mail and regular
                      Internet services to your network.
                    </p>
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
                      <a
                        style={{
                          color: "#28BCEB",
                          textDecoration: "underline",
                          fontWeight: "bold",
                        }}
                        href="#popup1"
                      >
                        click here for full details
                      </a>
                    </p>
                    <div className="text-center">
                      <a
                        href="/order/?env=bus&type=dsl&plan=REGULAR 6 UNLIMITED - $69.95"
                        className="btn"
                      >
                        Order Now
                      </a>
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
                                REGULAR 6 UNLIMITED
                              </span>
                              <br />
                            </p>
                            <h6>Account Includes:</h6>
                            <ul>
                              <li>
                                Up to 6.0 Mbps download speed, 800 Kbps upload
                                speed
                              </li>
                              <li>Unlimited data transfer per month</li>
                              <li>Includes Modem</li>
                              <li>Free spam and virus protection</li>
                              <li>
                                Five e-mail addresses with web e-mail, IMAP4, or
                                POP3 access
                              </li>
                              <li>20 hours of dial-up access provided</li>
                              <li>Access to value-added services</li>
                              <li>Technical support with office repair</li>
                              <li>Access to web-based e-mail</li>
                            </ul>
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
                              ULTRA 6 UNLIMITED
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
                            per month
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
                      UNLIMITED DATA TRANSFER PER MONTH
                    </span>
                    <br />
                    <br />
                    <h6 className="title2">ULTRA 6 UNLIMITED</h6>
                    <p style={{}}>
                      A full “one stop” Unlimited Internet package for business
                      customers which includes static IP, Domain Hosting, and
                      Web Hosting.
                    </p>
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
                      <a
                        style={{
                          color: "#28BCEB",
                          textDecoration: "underline",
                          fontWeight: "bold",
                        }}
                        href="#popup2"
                      >
                        click here for full details
                      </a>
                    </p>
                    <div className="text-center">
                      <a
                        href="/order/?env=bus&type=dsl&plan=ULTRA 6 UNLIMITED - $99.95"
                        className="btn"
                      >
                        Order Now
                      </a>
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
                                ULTRA 6 UNLIMITED
                              </span>
                              <br />
                            </p>
                            <h6>Account Includes:</h6>
                            <ul>
                              <li>
                                Up to 6.0 Mbps download speed, 800 Kbps upload
                                speed
                              </li>
                              <li>Unlimited data transfer per month</li>
                              <li>Includes Modem</li>
                              <li>
                                Web Space Package 1 and Domain Hosting Included
                                (Domain Registration Required)
                              </li>
                              <li>1 Static IP address included</li>
                              <li>Free spam and virus protection</li>
                              <li>
                                Five e-mail addresses with web e-mail, IMAP4, or
                                POP3 access
                              </li>
                              <li>20 hours of dial-up access provided</li>
                              <li>Access to value-added services</li>
                              <li>Technical support with office repair</li>
                              <li>Access to web-based e-mail</li>
                            </ul>
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
            <div className="row pricing-block-row">
              <div className="col-sm-4">
                <div className="pricing-block color2">
                  <div className="number">4</div>
                  <div className="pricing-block__top">
                    <div className="pricing-block__price">
                      <div className="vert-wrapper">
                        <div className="vert">
                          <div style={{ margin: "0 0" }}>
                            <span
                              style={{ fontSize: "36px", fontWeight: "bold" }}
                            >
                              ULTRA 10 UNLIMITED
                            </span>
                          </div>
                          <div>
                            <br />
                            <span
                              style={{ fontSize: "36px", fontWeight: "bold" }}
                            >
                              $69
                            </span>
                            <sup>.95</sup>
                            <br />
                            per month{" "}
                            <sup>
                              <a
                                href="#4"
                                style={{
                                  color: "#ffffff",
                                  textDecoration: "underline",
                                }}
                              >
                                4
                              </a>{" "}
                              <a
                                href="#5"
                                style={{
                                  color: "#ffffff",
                                  textDecoration: "underline",
                                }}
                              >
                                5
                              </a>{" "}
                              <span
                                style={{
                                  color: "#ffffff",
                                  textDecoration: "underline",
                                }}
                              />{" "}
                              <span
                                style={{
                                  color: "#ffffff",
                                  textDecoration: "underline",
                                }}
                              />{" "}
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
                      UNLIMITED DATA TRANSFER PER MONTH
                    </span>
                    <br />
                    <br />
                    <h6 className="title2">ULTRA 10 UNLIMITED</h6>
                    <p style={{}}>
                      A fast Unlimited Internet package that offers web, e-mail
                      and regular Internet services to your network.
                    </p>
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
                      <a
                        style={{
                          color: "#28BCEB",
                          textDecoration: "underline",
                          fontWeight: "bold",
                        }}
                        href="#popup3"
                      >
                        click here for full details
                      </a>
                    </p>
                    <div className="text-center">
                      <a
                        href="/order/?env=bus&type=dsl&plan=ULTRA 10 UNLIMITED - $69.95"
                        className="btn"
                      >
                        Order Now
                      </a>
                    </div>
                  </div>
                  {/* SOF POP UP BOX */}
                  <div id="popup3" className="overlay">
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
                                ULTRA 10 UNLIMITED
                              </span>
                              <br />
                            </p>
                            <h6>Account Includes:</h6>
                            <ul>
                              <li>
                                Up to 10.0 Mbps download speed, 1 Mbps upload
                                speed
                              </li>
                              <li>Unlimited data transfer per month</li>
                              <li>Free spam and virus protection</li>
                              <li>
                                Five e-mail addresses with web e-mail, IMAP4, or
                                POP3 access
                              </li>
                              <li>20 hours of dial-up access provided</li>
                              <li>Access to value-added services</li>
                              <li>Technical support with office repair</li>
                              <li>Access to web-based e-mail</li>
                            </ul>
                            <p>4) 12 month contract</p>
                            <p>5) Modem Rental Included</p>
                            <p>6) Only in regions where technology permits</p>
                            <p>11) $95 Setup Fee</p>
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
                  <div className="number">5</div>
                  <div className="pricing-block__top">
                    <div className="pricing-block__price">
                      <div className="vert-wrapper">
                        <div className="vert">
                          <div style={{ margin: "0 0" }}>
                            <span
                              style={{ fontSize: "36px", fontWeight: "bold" }}
                            >
                              ULTRA 16 UNLIMITED
                            </span>
                          </div>
                          <div>
                            <br />
                            <span
                              style={{ fontSize: "36px", fontWeight: "bold" }}
                            >
                              $89
                            </span>
                            <sup>.95</sup>
                            <br />
                            per month{" "}
                            <sup>
                              <a
                                href="#4"
                                style={{
                                  color: "#ffffff",
                                  textDecoration: "underline",
                                }}
                              >
                                4
                              </a>{" "}
                              <a
                                href="#5"
                                style={{
                                  color: "#ffffff",
                                  textDecoration: "underline",
                                }}
                              >
                                5
                              </a>{" "}
                              <span
                                style={{
                                  color: "#ffffff",
                                  textDecoration: "underline",
                                }}
                              />{" "}
                              <span
                                style={{
                                  color: "#ffffff",
                                  textDecoration: "underline",
                                }}
                              />{" "}
                            </sup>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="pricing-block__bottom">
                    <span style={{ fontSize: "26px", color: "#005395" }}>
                      UP TO 16.0 MBPS DOWNLOAD SPEED
                    </span>
                    <br />
                    <br />
                    <span style={{ fontSize: "26px", color: "#005395" }}>
                      UNLIMITED DATA TRANSFER PER MONTH
                    </span>
                    <br />
                    <br />
                    <h6 className="title2">ULTRA 16 UNLIMITED</h6>
                    <p style={{}}>
                      A fast Unlimited Internet package that offers web, e-mail
                      and regular Internet services to your network.
                    </p>
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
                      <a
                        style={{
                          color: "#28BCEB",
                          textDecoration: "underline",
                          fontWeight: "bold",
                        }}
                        href="#popup4"
                      >
                        click here for full details
                      </a>
                    </p>
                    <div className="text-center">
                      <a
                        href="/order/?env=bus&type=dsl&plan=ULTRA 16 UNLIMITED - $89.95"
                        className="btn"
                      >
                        Order Now
                      </a>
                    </div>
                  </div>
                  {/* SOF POP UP BOX */}
                  <div id="popup4" className="overlay">
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
                                ULTRA 16 UNLIMITED
                              </span>
                              <br />
                            </p>
                            <h6>Account Includes:</h6>
                            <ul>
                              <li>
                                Up to 16.0 Mbps download speed, 1.0 Mbps upload
                                speed
                              </li>
                              <li>Unlimited data transfer per month</li>
                              <li>Includes Modem</li>
                              <li>Free spam and virus protection</li>
                              <li>
                                Five e-mail addresses with web e-mail, IMAP4, or
                                POP3 access
                              </li>
                              <li>20 hours of dial-up access provided</li>
                              <li>Access to value-added services</li>
                              <li>Technical support with office repair</li>
                              <li>Access to web-based e-mail</li>
                            </ul>
                            <p>4) 12 month contract</p>
                            <p>5) Modem Rental Included</p>
                            <p>6) Only in regions where technology permits</p>
                            <p>11) $95 Setup Fee</p>
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
                  <div className="number">6</div>
                  <div className="pricing-block__top">
                    <div className="pricing-block__price">
                      <div className="vert-wrapper">
                        <div className="vert">
                          <div style={{ margin: "0 0" }}>
                            <span
                              style={{ fontSize: "36px", fontWeight: "bold" }}
                            >
                              ULTRA 25 UNLIMITED
                            </span>
                          </div>
                          <div>
                            <br />
                            <span
                              style={{ fontSize: "36px", fontWeight: "bold" }}
                            >
                              $109
                            </span>
                            <sup>.95</sup>
                            <br />
                            per month{" "}
                            <sup>
                              <a
                                href="#4"
                                style={{
                                  color: "#ffffff",
                                  textDecoration: "underline",
                                }}
                              >
                                4
                              </a>{" "}
                              <a
                                href="#6"
                                style={{
                                  color: "#ffffff",
                                  textDecoration: "underline",
                                }}
                              >
                                6
                              </a>{" "}
                              <a
                                href="#1"
                                style={{
                                  color: "#ffffff",
                                  textDecoration: "underline",
                                }}
                              >
                                1
                              </a>{" "}
                              <span
                                style={{
                                  color: "#ffffff",
                                  textDecoration: "underline",
                                }}
                              />{" "}
                            </sup>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="pricing-block__bottom">
                    <span style={{ fontSize: "26px", color: "#005395" }}>
                      UP TO 25.0 MBPS DOWNLOAD SPEED
                    </span>
                    <br />
                    <br />
                    <span style={{ fontSize: "26px", color: "#005395" }}>
                      UNLIMITED DATA TRANSFER PER MONTH
                    </span>
                    <br />
                    <br />
                    <h6 className="title2">ULTRA 25 UNLIMITED</h6>
                    <p style={{}}>
                      A fast Unlimited Internet package that offers web, e-mail
                      and regular Internet services to your network.
                    </p>
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
                      <a
                        style={{
                          color: "#28BCEB",
                          textDecoration: "underline",
                          fontWeight: "bold",
                        }}
                        href="#popup5"
                      >
                        click here for full details
                      </a>
                    </p>
                    <div className="text-center">
                      <a
                        href="/order/?env=bus&type=dsl&plan=ULTRA 25 UNLIMITED - $109.95"
                        className="btn"
                      >
                        Order Now
                      </a>
                    </div>
                  </div>
                  {/* SOF POP UP BOX */}
                  <div id="popup5" className="overlay">
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
                                ULTRA 25 UNLIMITED
                              </span>
                              <br />
                            </p>
                            <h6>Account Includes:</h6>
                            <ul>
                              <li>
                                Up to 25.0 Mbps download speed, 1.0 Mbps upload
                                speed
                              </li>
                              <li>200 GB of data transfer per month</li>
                              <li>Free spam and virus protection</li>
                              <li>
                                Five e-mail addresses with web e-mail, IMAP4, or
                                POP3 access
                              </li>
                              <li>20 hours of dial-up access provided</li>
                              <li>
                                100 MB of Personal Web Space available for use
                              </li>
                              <li>Access to value-added services</li>
                              <li>Technical support with office repair</li>
                              <li>Access to web-based e-mail</li>
                            </ul>
                            <p>4) 12 month contract</p>
                            <p>6) Only in regions where technology permits</p>
                            <p>11) $95 Setup Fee</p>
                            <p>12)Modem rental $8.95/month</p>
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
            }}
          >
            1) Requires Modem rental or purchase.
            <br />
            2) For residential purposes only, must not exceed a reasonable
            amount of usage
            <br />
            3) $50 Setup Fee&nbsp;
            <br />
            4) 12 month contract&nbsp;
            <br />
            5) Modem Rental Included&nbsp;
            <br />
            6) Only in regions where technology permits
            <br />
            11) $95 Setup Fee
            <br />
            12)Modem rental $8.95/month
          </p>
          <div className="block" style={{ marginBottom: "90px" }}>
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
              <div
                style={{
                  color: "#000000",
                  fontFamily: '"Open Sans", sans-serif',
                  fontSize: "15px",
                  backgroundColor: "#ffffff",
                }}
              >
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
                  color: "#000000",
                  fontFamily: '"Open Sans", sans-serif',
                  fontSize: "15px",
                  backgroundColor: "#ffffff",
                }}
              >
                <div
                  className="price-cell"
                  style={{
                    display: "table-cell",
                    padding: "22px 15px 50px",
                    width: "293px",
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
                    <li>Static IP Address, $15 per month/$180.00 yearly</li>
                    <li>Additional E-Mail boxes, $4.95 per month, each</li>
                    <li>Optional VIP E-mail boxes, $6.95 per month, each</li>
                    <li>
                      Additional 1000MB (1GB) transfer available for $1.95
                    </li>
                    <li>Opt-out for automatic spam protection</li>
                    <li>All accounts allow upgrades with no service fee</li>
                    <li>All accounts allow concurrent phone service</li>
                    <li>Additional Line Filters $5.00 each</li>
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
                    width: "292px",
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
                    MODEM OPTIONS
                  </h6>
                  <p
                    style={{
                      marginTop: "0px",
                      marginBottom: "5px",
                      lineHeight: "22px",
                    }}
                  >
                    Automatic payment methods are required.
                  </p>
                  <ul style={{ marginBottom: "10px" }}>
                    <li>Monthly rental, $5.00 with two line filters</li>
                    <li>Thomson SpeedTouch, $79.95 with two line filters</li>
                    <li>Line Filter, $5.00 each</li>
                    <li>Call for Payment Plan Options</li>
                  </ul>
                </div>
                <div
                  className="price-cell"
                  style={{
                    display: "table-cell",
                    padding: "22px 15px 50px",
                    width: "292px",
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
                    REQUIREMENTS
                  </h6>
                  <p
                    style={{
                      marginTop: "0px",
                      marginBottom: "5px",
                      lineHeight: "22px",
                    }}
                  >
                    To access the Internet with KOS DSL, you will need:
                  </p>
                  <ul style={{ marginBottom: "10px" }}>
                    <li>Business telephone service or dry loop</li>
                    <li>Modern 32-bit or 64-bit Operating System</li>
                    <li>Minimum of 2.0Ghz processor required</li>
                    <li>56K modem suggested for dial-up</li>
                  </ul>
                </div>
                <div
                  className="price-cell"
                  style={{
                    display: "table-cell",
                    padding: "22px 15px 50px",
                    width: "292px",
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
                    DRY LOOP
                  </h6>
                  <p
                    style={{
                      marginTop: "0px",
                      marginBottom: "5px",
                      lineHeight: "22px",
                    }}
                  >
                    Don’t have an active phone line?
                  </p>
                  <p
                    style={{
                      marginTop: "0px",
                      marginBottom: "5px",
                      lineHeight: "22px",
                    }}
                  >
                    Dry loop services can be ordered to provide high speed
                    internet services. A one time setup fee $90.65 plus a
                    monthly rate band cost depending on your area.
                  </p>
                  <p
                    style={{
                      marginTop: "0px",
                      marginBottom: "5px",
                      lineHeight: "22px",
                    }}
                  >
                    &nbsp;
                  </p>
                  <div className="price-action">
                    <a
                      className="btn btn-orange"
                      style={{
                        backgroundImage:
                          "linear-gradient(#b0243d 0%, #740018 100%)",
                        backgroundRepeat: "initial",
                        color: "#ffffff",
                        textDecorationLine: "none",
                        display: "inline-block",
                        padding: "15px 22px",
                        fontSize: "16px",
                        fontWeight: "bold",
                        lineHeight: "19px",
                        textAlign: "center",
                        whiteSpace: "nowrap",
                        verticalAlign: "top",
                        touchAction: "manipulation",
                        cursor: "pointer",
                        userSelect: "none",
                        borderRadius: "10px",
                        fontFamily: "Lato, sans-serif",
                        height: "51px",
                        textTransform: "uppercase",
                        transition: "all 300ms ease",
                        boxShadow: "rgba(0, 0, 0, 0.2) 0px 1px 1px",
                      }}
                      href="https://www.kos.net/order/"
                    >
                      ORDER NOW
                    </a>
                  </div>
                  <p>&nbsp;</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
