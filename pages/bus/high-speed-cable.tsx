import { InternalTemplate } from "@/components/InternalTemplate"
import HoverBulletNavMenu from "@/components/HoverBulletNavMenu"

export default function BusinessHighSpeedCable(): JSX.Element {
  const title = (
    <>
      Business <span className="text-red-brand">High Speed Cable</span> Packages
      in Kingston & Belleville, Ontario
    </>
  )
  // "Business High Speed Cable Packages"
  const slug = "bus/high-speed-cable"
  // "bus/high-speed-cable"
  const bulletNavMenu = <HoverBulletNavMenu type="Business" />

  return (
    <InternalTemplate title={title} slug={slug} bulletNavMenu={bulletNavMenu}>
      <HighSpeedCableContent />
    </InternalTemplate>
  )
}

function HighSpeedCableContent() {
  return (
    <>
      <div id="page-content">
        {/* Block */}
        <div className="block">
          <div className="container">
            <span className="text-center" style={{ fontSize: "20px" }}>
              Get an instant connection with Internet over cable at a price that
              suits your needs.
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
                              CABLE 15
                            </span>
                          </div>
                          <div>
                            <br />
                            <span
                              style={{ fontSize: "36px", fontWeight: "bold" }}
                            >
                              $39
                            </span>
                            <sup>.95</sup>
                            <br />
                            per month{" "}
                            <sup>
                              <a
                                href="#1"
                                style={{
                                  color: "#ffffff",
                                  textDecoration: "underline",
                                }}
                              >
                                1
                              </a>{" "}
                              <a
                                href="#2"
                                style={{
                                  color: "#ffffff",
                                  textDecoration: "underline",
                                }}
                              >
                                2
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
                      UP TO 15.0 MBPS DOWNLOAD SPEED
                    </span>
                    <br />
                    <br />
                    <span style={{ fontSize: "26px", color: "#005395" }}>
                      200 GB OF DATA TRANSFER PER MONTH
                    </span>
                    <br />
                    <br />
                    <h6 className="title2">CABLE 15</h6>
                    <p style={{}} />
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
                    <div className="price-cell">
                      <span style={{ color: "#901D3D", fontWeight: "bolder" }}>
                        MAKE IT UNLIMITED
                      </span>{" "}
                      <br />
                      <p>
                        <span style={{ color: "#28BCEB", fontWeight: "bold" }}>
                          Add Unlimited Data for only <br />
                          <span
                            style={{
                              color: "#28BCEB",
                              fontWeight: "bold",
                              fontSize: "26px",
                            }}
                          >
                            $10.00
                          </span>{" "}
                          per month{" "}
                          <sup>
                            <a
                              style={{
                                color: "#000000",
                                textDecoration: "underline",
                              }}
                              href="#2"
                            >
                              2
                            </a>
                          </sup>
                        </span>
                      </p>
                    </div>
                    <br />
                    <div className="text-center">
                      <a
                        href="/order/?env=bus&type=cable&plan=CABLE 15 - $39.95"
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
                                CABLE 15
                              </span>
                              <br />
                            </p>
                            <h6>Account Includes:</h6>
                            <ul>
                              <li>
                                Up to 15.0 Mbps download speed, 2.0 Mbps upload
                                speed
                              </li>
                              <li>200 GB of data transfer per month</li>
                              <li>Free spam and virus protection</li>
                              <li>
                                Two e-mail addresses with web e-mail, IMAP4, or
                                POP3 access
                              </li>
                              <li>5 hours of dial-up access provided</li>
                              <li>
                                100 MB of Personal Web Space available for use
                              </li>
                              <li>Access to value-added services</li>
                              <li>Technical support with office repair</li>
                              <li>Access to web-based e-mail</li>
                            </ul>
                            <p>1) Requires Modem rental or purchase</p>
                            <p>
                              2) For business purposes only, must not exceed a
                              reasonable amount of usage
                            </p>
                            <p>3) $149.50 Setup Fee</p>
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
                              CABLE 40
                            </span>
                          </div>
                          <div>
                            <br />
                            <span
                              style={{ fontSize: "36px", fontWeight: "bold" }}
                            >
                              $54
                            </span>
                            <sup>.95</sup>
                            <br />
                            per month{" "}
                            <sup>
                              <a
                                href="#1"
                                style={{
                                  color: "#ffffff",
                                  textDecoration: "underline",
                                }}
                              >
                                1
                              </a>{" "}
                              <a
                                href="#2"
                                style={{
                                  color: "#ffffff",
                                  textDecoration: "underline",
                                }}
                              >
                                2
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
                      UP TO 40.0 MBPS DOWNLOAD SPEED
                    </span>
                    <br />
                    <br />
                    <span style={{ fontSize: "26px", color: "#005395" }}>
                      300 GB TRANSFER PER MONTH
                    </span>
                    <br />
                    <br />
                    <h6 className="title2">CABLE 40</h6>
                    <p style={{}} />
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
                    <div className="price-cell">
                      <span style={{ color: "#901D3D", fontWeight: "bolder" }}>
                        MAKE IT UNLIMITED
                      </span>{" "}
                      <br />
                      <p>
                        <span style={{ color: "#28BCEB", fontWeight: "bold" }}>
                          Add Unlimited Data for only <br />
                          <span
                            style={{
                              color: "#28BCEB",
                              fontWeight: "bold",
                              fontSize: "26px",
                            }}
                          >
                            $10.00
                          </span>{" "}
                          per month{" "}
                          <sup>
                            <a
                              style={{
                                color: "#000000",
                                textDecoration: "underline",
                              }}
                              href="#2"
                            >
                              2
                            </a>
                          </sup>
                        </span>
                      </p>
                    </div>
                    <br />
                    <div className="text-center">
                      <a
                        href="/order/?env=bus&type=cable&plan=CABLE 40 - $54.95"
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
                                CABLE 40
                              </span>
                              <br />
                            </p>
                            <h6>Account Includes:</h6>
                            <ul>
                              <li>
                                Up to 40.0 Mbps download speed, 10.0 Mbps upload
                                speed
                              </li>
                              <li>300 GB of data transfer per month</li>
                              <li>Free spam and virus protection</li>
                              <li>
                                Two e-mail addresses with web e-mail, IMAP4, or
                                POP3 access
                              </li>
                              <li>5 hours of dial-up access provided</li>
                              <li>
                                100 MB of Personal Web Space available for use
                              </li>
                              <li>Access to value-added services</li>
                              <li>Technical support with office repair</li>
                              <li>Access to web-based e-mail</li>
                            </ul>
                            <p>1) Requires Modem rental or purchase.</p>
                            <p>
                              2) For business purposes only, must not exceed a
                              reasonable amount of usage
                            </p>
                            <p>3) $149.50 Setup Fee&nbsp;</p>
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
                              CABLE 60
                            </span>
                          </div>
                          <div>
                            <br />
                            <span
                              style={{ fontSize: "36px", fontWeight: "bold" }}
                            >
                              $74
                            </span>
                            <sup>.95</sup>
                            <br />
                            per month{" "}
                            <sup>
                              <a
                                href="#1"
                                style={{
                                  color: "#ffffff",
                                  textDecoration: "underline",
                                }}
                              >
                                1
                              </a>{" "}
                              <a
                                href="#2"
                                style={{
                                  color: "#ffffff",
                                  textDecoration: "underline",
                                }}
                              >
                                2
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
                      UP TO 60.0 MBPS DOWNLOAD SPEED
                    </span>
                    <br />
                    <br />
                    <span style={{ fontSize: "26px", color: "#005395" }}>
                      300 GB OF DATA TRANSFER PER MONTH
                    </span>
                    <br />
                    <br />
                    <h6 className="title2">CABLE 60</h6>
                    <p style={{}} />
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
                    <div className="price-cell">
                      <span style={{ color: "#901D3D", fontWeight: "bolder" }}>
                        MAKE IT UNLIMITED
                      </span>{" "}
                      <br />
                      <p>
                        <span style={{ color: "#28BCEB", fontWeight: "bold" }}>
                          Add Unlimited Data for only <br />
                          <span
                            style={{
                              color: "#28BCEB",
                              fontWeight: "bold",
                              fontSize: "26px",
                            }}
                          >
                            $10.00
                          </span>{" "}
                          per month{" "}
                          <sup>
                            <a
                              style={{
                                color: "#000000",
                                textDecoration: "underline",
                              }}
                              href="#2"
                            >
                              2
                            </a>
                          </sup>
                        </span>
                      </p>
                    </div>
                    <br />
                    <div className="text-center">
                      <a
                        href="/order/?env=bus&type=cable&plan=CABLE 60 - $74.95"
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
                                CABLE 60
                              </span>
                              <br />
                            </p>
                            <h6>Account Includes:</h6>
                            <ul>
                              <li>
                                Up to 60.0 Mbps download speed, 10.0 Mbps upload
                                speed
                              </li>
                              <li>300 GB of data transfer per month</li>
                              <li>Free spam and virus protection</li>
                              <li>
                                Two e-mail addresses with web e-mail, IMAP4, or
                                POP3 access
                              </li>
                              <li>5 hours of dial-up access provided</li>
                              <li>
                                100 MB of Personal Web Space available for use
                              </li>
                              <li>Access to value-added services</li>
                              <li>Technical support with office repair</li>
                              <li>Access to web-based e-mail</li>
                            </ul>
                            <p>1) Requires Modem rental or purchase</p>
                            <p>
                              2) For business purposes only, must not exceed a
                              reasonable amount of usage
                            </p>
                            <p>3) $149.50 Setup Fee&nbsp;</p>
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

      <p>
        1) Requires Modem rental or purchase
        <br />
        2) For business purposes only, must not exceed a reasonable amount of
        usage
        <br />
        3) $149.50 Setup Fee
        <br />
      </p>

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
            &nbsp;
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
                    width: "389px",
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
                      Additional 1000MB (1GB) transfer available for $1.00
                    </li>
                    <li>Opt-out for automatic spam protection</li>
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
                    width: "390px",
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
                    <li>Monthly Modem rental, $5.00</li>
                    <li>Buy Modem $79.95 (Hitron CDA-RES)</li>
                    <li>
                      <a
                        style={{ color: "#000000", textDecorationLine: "none" }}
                        href="../contact.php"
                      >
                        Call for payment plan options
                      </a>
                    </li>
                  </ul>
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
                    BRING YOUR OWN MODEM
                  </h6>
                  <p
                    style={{
                      marginTop: "0px",
                      marginBottom: "5px",
                      lineHeight: "22px",
                    }}
                  >
                    You are able to use your own Cable Modem if it is in
                    our&nbsp;
                    <a
                      style={{ color: "#000000", textDecorationLine: "none" }}
                      href="../../modem/list/"
                    >
                      <span style={{ color: "#3366ff" }}>supported</span>{" "}
                      <span style={{ color: "#3366ff" }}>modem list</span>
                    </a>
                    .
                  </p>
                </div>
                <div
                  className="price-cell"
                  style={{
                    display: "table-cell",
                    padding: "22px 15px 50px",
                    width: "390px",
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
                    To access the Internet with KOS CABLE, you will need:
                  </p>
                  <ul style={{ marginBottom: "10px" }}>
                    <li>Supported Cable Modem Required (Rental Available)</li>
                    <li>
                      Modern 32-bit or 64-bit Operating System (Windows 7
                      minimum)
                    </li>
                    <li>Minimum of 2.0Ghz processor required</li>
                    <li>56K modem suggested for dial-up</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
