import { InternalTemplate } from "@/components/InternalTemplate"
import { BulletNavMenu } from "@/components/BulletNavMenu"

export default function HighSpeedDsl(): JSX.Element {
  const title = (
    <>
      Residential <span style={{ color: "#A80532" }}>High Speed DSL</span>{" "}
      Packages in Kingston, ON
    </>
  )
  // "Residential High Speed DSL Services"
  const slug = "high-speed-dsl"
  // "high-speed-dsl"
  const bulletNavMenu = <BulletNavMenu />

  return (
    <InternalTemplate title={title} slug={slug} bulletNavMenu={bulletNavMenu}>
      <HighSpeedDslContent />
    </InternalTemplate>
  )
}

function HighSpeedDslContent() {
  return (
    <div id="page-content">
      {/* Block */}
      <div>
        <div className="container">
          <h1 className="text-center decor color">
            Residential <span style={{ color: "#A80532" }}>High Speed DSL</span>{" "}
            Packages
          </h1>
          <span className="text-center" style={{ fontSize: "20px" }}>
            KOS DSL uses fast, reliable digital connections over your phone
            circuit, to let you talk on the phone and use the Internet at the
            same time. Ask about dry loop services, if you do not have an active
            phone line.
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
                            $26
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
                    UP TO 6.0 MBPS DOWNLOAD SPEED
                  </span>
                  <br />
                  <br />
                  <span style={{ fontSize: "26px", color: "#005395" }}>
                    25 GB DATA TRANSFER PER MONTH
                  </span>
                  <br />
                  <br />
                  <h6 className="title2">LITE 6</h6>
                  <p style={{}}>
                    An account for regular surfing needs with e-mail, browsing
                    and general Internet usage. Better than most “lite” plans
                    because this service operates at full DSL speed!
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
                      href="/order/?env=res&type=dsl&plan=LITE 6 - $26.95"
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
                          <h6 style={{ textAlign: "left" }}>
                            Account Includes:
                          </h6>
                          <ul style={{ textAlign: "left" }}>
                            <li>
                              Up to 6.0 Mbps download speed, 800 Kbps upload
                              speed
                            </li>
                            <li>25 GB of data transfer per month</li>
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
                          <ol>
                            <li style={{ textAlign: "left" }}>
                              Requires Modem rental or purchase.
                            </li>
                            <li style={{ textAlign: "left" }}>
                              For residential purposes only, must not exceed a
                              reasonable amount of usage
                            </li>
                            <li style={{ textAlign: "left" }}>
                              Only in regions where technology
                            </li>
                          </ol>
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
                            MEGA 6
                          </span>
                        </div>
                        <div>
                          <br />
                          <span
                            style={{ fontSize: "36px", fontWeight: "bold" }}
                          >
                            $39{" "}
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
                    UP TO 6.0 MBPS DOWNLOAD SPEED{" "}
                  </span>
                  <br />
                  <br />
                  <span style={{ fontSize: "26px", color: "#005395" }}>
                    200 GB DATA TRANSFER PER MONTH
                  </span>
                  <br />
                  <br />
                  <h6 className="title2">MEGA 6</h6>
                  <p style={{}}>
                    An account for extended surfing needs with e-mail, browsing
                    and general Internet usage. An excellent plan for occasional
                    large downloads and supporting multiple users in a home.
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
                      href="/order/?env=res&type=dsl&plan=MEGA 6 - $39.95"
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
                              MEGA 6
                            </span>
                            <br />
                          </p>
                          <h6 style={{ textAlign: "left" }}>
                            Account Includes:
                          </h6>
                          <ul style={{ textAlign: "left" }}>
                            <li>
                              Up to 6.0 Mbps download speed, 800 Kbps upload
                              speed
                            </li>
                            <li>200 GB data transfer per month</li>
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
                          <p style={{ textAlign: "left" }}>
                            1. Requires Modem rental or purchase.
                          </p>
                          <p style={{ textAlign: "left" }}>
                            2. For residential purposes only, must not exceed a
                            reasonable amount of usage
                          </p>
                          <p style={{ textAlign: "left" }}>
                            6. Only in regions where technology permits
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
                            ULTRA 10
                          </span>
                        </div>
                        <div>
                          <br />
                          <span
                            style={{ fontSize: "36px", fontWeight: "bold" }}
                          >
                            $49
                          </span>
                          <sup>.95</sup>
                          <br />
                          per month{" "}
                          <sup>
                            <a
                              href="#2"
                              style={{
                                color: "#ffffff",
                                textDecoration: "underline",
                              }}
                            >
                              2
                            </a>{" "}
                            <a
                              href="#3"
                              style={{
                                color: "#ffffff",
                                textDecoration: "underline",
                              }}
                            >
                              3
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
                    200 GB DATA TRANSFER PER MONTH
                  </span>
                  <br />
                  <br />
                  <h6 className="title2">ULTRA 10</h6>
                  <p style={{}}>
                    An extremely fast Internet account for extended surfing
                    needs with e-mail, browsing and general Internet usage. An
                    excellent plan for large downloads, video and supporting
                    multiple users in a home.
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
                      href="/order/?env=res&type=dsl&plan=ULTRA 10 - $49.95"
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
                              ULTRA 10
                            </span>
                            <br />
                          </p>
                          <h6 style={{ textAlign: "left" }}>
                            Account Includes:
                          </h6>
                          <ul style={{ textAlign: "left" }}>
                            <li>
                              Up to 10.0 Mbps download speed,&nbsp;1.0 Mbps
                              upload speed
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
                            <li>
                              2) For residential purposes only, must not exceed
                              a reasonable amount of usage
                            </li>
                          </ul>
                          <p style={{ textAlign: "left" }}>3) $50 Setup Fee</p>
                          <p style={{ textAlign: "left" }}>
                            4) 12 month contract 5) Modem Rental Included
                          </p>
                          <p style={{ textAlign: "left" }}>
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
                            ULTRA 15
                          </span>
                        </div>
                        <div>
                          <br />
                          <span
                            style={{ fontSize: "36px", fontWeight: "bold" }}
                          >
                            $54{" "}
                          </span>
                          <sup>.95</sup>
                          <br />
                          per month{" "}
                          <sup>
                            <a
                              href="#2"
                              style={{
                                color: "#ffffff",
                                textDecoration: "underline",
                              }}
                            >
                              2
                            </a>{" "}
                            <a
                              href="#3"
                              style={{
                                color: "#ffffff",
                                textDecoration: "underline",
                              }}
                            >
                              3
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
                    200 GB DATA TRANSFER PER MONTH
                  </span>
                  <br />
                  <br />
                  <h6 className="title2">ULTRA 15</h6>
                  <p style={{}}>
                    An extremely fast Internet account for extended surfing
                    needs with e-mail, browsing and general Internet usage.An
                    excellent plan for large downloads, video and supporting
                    multiple users in a home.
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
                          $15.00
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
                      href="/order/?env=res&type=dsl&plan=ULTRA 15 - $54.95"
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
                              ULTRA 15
                            </span>
                            <br />
                          </p>
                          <h6 style={{ textAlign: "left" }}>
                            Account Includes:
                          </h6>
                          <ul style={{ textAlign: "left" }}>
                            <li>
                              Up to 15.0 Mbps download speed, 1.0 Mbps upload
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
                          <p style={{ textAlign: "left" }}>
                            2) For residential purposes only, must not exceed a
                            reasonable amount of usage
                          </p>
                          <p style={{ textAlign: "left" }}>3) $50 Setup Fee</p>
                          <p style={{ textAlign: "left" }}>
                            4) 12 month contract
                          </p>
                          <p style={{ textAlign: "left" }}>
                            5) Modem Rental Included
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
    </div>
  )
}
