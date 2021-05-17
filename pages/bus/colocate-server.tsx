import { InternalTemplate } from "@/components/InternalTemplate"
import { BulletNavMenu } from "@/components/BulletNavMenu"

export default function ColateServer(): JSX.Element {
  const title = (
    <>
      <span style={{ color: "#A80532" }}>CO LOCATE SERVER</span> Packages for
      Businesses in Kingston & Belleville, Ontario
    </>
  )
  // "CO LOCATE SERVER Packages"
  const slug = "cocolate-server"
  // "bus/colocate-server"
  const bulletNavMenu = <BulletNavMenu type="Business" />

  return (
    <InternalTemplate title={title} slug={slug} bulletNavMenu={bulletNavMenu}>
      <ColateServerContent />
    </InternalTemplate>
  )
}

function ColateServerContent() {
  return (
    <>
      <div id="page-content">
        {/* Block */}
        <div className="block">
          <div className="container">
            <span className="text-center" style={{ fontSize: "20px" }}>
              Rack space and a direct Ethernet connection to Kingston Online’s
              ATM backbone. Meant for IPPs and other businesses where
              reliability is required and low costs are key.
            </span>{" "}
            <br />
            <br />
            <span className="text-center" style={{ fontSize: "20px" }}>
              Kingston Online provides a secured data centre on an upper floor
              of its building with only employee access, and meets a
              multiple-lock entry-point requirement. With co-location, we offer
              UPS power with battery backup, 24 hour monitoring, a customer
              monitoring service, and climate control.
            </span>{" "}
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
                              2TB
                            </span>
                          </div>
                          <div>
                            <br />
                            <span
                              style={{ fontSize: "36px", fontWeight: "bold" }}
                            >
                              $149
                            </span>
                            <sup>.00</sup>
                            <br />
                            per month
                            <br />
                            <br />
                            <span
                              style={{ fontSize: "36px", fontWeight: "bold" }}
                            >
                              $250
                            </span>
                            <sup>.00</sup>
                            <br />
                            Setup Fee
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="pricing-block__bottom">
                    <span style={{ fontSize: "26px", color: "#005395" }}>
                      2TB/MO. DATA TRAFFIC
                    </span>
                    <br />
                    <br />
                    <span style={{ fontSize: "26px", color: "#005395" }}>
                      10 MBIT/SEC MAX. BURST RATE
                    </span>
                    <br />
                    <br />
                    <h6 className="title2">2TB</h6>
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
                    <div className="text-center">
                      <a
                        href="/order/?env=bus&type=&plan=2TB - $149.00250.00"
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
                                2TB
                              </span>
                              <br />
                            </p>
                            <h6 style={{ textAlign: "left" }}>
                              Account Includes:
                            </h6>
                            <ul style={{ textAlign: "left" }}>
                              <li>2TB data traffic per month</li>
                              <li>10 Mbit/sec Maximum burst rate</li>
                              <li>10 bT Interface Type</li>
                            </ul>
                            <p style={{ textAlign: "left" }}>&nbsp;</p>
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
                              4TB
                            </span>
                          </div>
                          <div>
                            <br />
                            <span
                              style={{ fontSize: "36px", fontWeight: "bold" }}
                            >
                              $199
                            </span>
                            <sup>.00</sup>
                            <br />
                            per month
                            <br />
                            <br />
                            Dedicated
                            <br />
                            <br />
                            <span
                              style={{ fontSize: "36px", fontWeight: "bold" }}
                            >
                              $250
                            </span>
                            <sup>.00</sup>
                            <br />
                            Setup Fee
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="pricing-block__bottom">
                    <span style={{ fontSize: "26px", color: "#005395" }}>
                      4TB/MO. DATA TRAFFIC
                    </span>
                    <br />
                    <br />
                    <span style={{ fontSize: "26px", color: "#005395" }}>
                      10 MBIT/SEC MAX. BURST RATE
                    </span>
                    <br />
                    <br />
                    <h6 className="title2">4TB</h6>
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
                    <div className="text-center">
                      <a
                        href="/order/?env=bus&type=&plan=4TB - $199.00250.00"
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
                                4TB
                              </span>
                              <br />
                            </p>
                            <h6 style={{ textAlign: "left" }}>
                              Account Includes:
                            </h6>
                            <ul>
                              <li style={{ textAlign: "left" }}>
                                4TB data traffic per month
                              </li>
                              <li style={{ textAlign: "left" }}>
                                10 Mbit/sec Maximum burst rate
                              </li>
                              <li style={{ textAlign: "left" }}>
                                10 bT Interface Type
                              </li>
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
                              10 TB
                            </span>
                          </div>
                          <div>
                            <br />
                            <span
                              style={{ fontSize: "36px", fontWeight: "bold" }}
                            >
                              $299
                            </span>
                            <sup>.00</sup>
                            <br />
                            per month
                            <br />
                            <br />
                            <span
                              style={{ fontSize: "36px", fontWeight: "bold" }}
                            >
                              $250
                            </span>
                            <sup>.00</sup>
                            <br />
                            Setup Fee
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="pricing-block__bottom">
                    <span style={{ fontSize: "26px", color: "#005395" }}>
                      10TB/MO. DATA TRAFFIC
                    </span>
                    <br />
                    <br />
                    <span style={{ fontSize: "26px", color: "#005395" }}>
                      10 MBIT/SEC MAX. BURST RATE
                    </span>
                    <br />
                    <br />
                    <h6 className="title2">10 TB</h6>
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
                    <div className="text-center">
                      <a
                        href="/order/?env=bus&type=&plan=10 TB - $299.00250.00"
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
                                10 TB
                              </span>
                              <br />
                            </p>
                            <h6 style={{ textAlign: "left" }}>
                              Account Includes:
                            </h6>
                            <ul>
                              <li style={{ textAlign: "left" }}>
                                10TB data traffic per month
                              </li>
                              <li style={{ textAlign: "left" }}>
                                10 Mbit/sec Maximum burst rate
                              </li>
                              <li style={{ textAlign: "left" }}>
                                10 bT Interface Type
                              </li>
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
                              10TB PLUS
                            </span>
                          </div>
                          <div>
                            <br />
                            <span
                              style={{ fontSize: "36px", fontWeight: "bold" }}
                            >
                              $CALL
                            </span>
                            <sup>.00</sup>
                            <br />
                            per month
                            <br />
                            <br />
                            <span
                              style={{ fontSize: "36px", fontWeight: "bold" }}
                            >
                              $250
                            </span>
                            <sup>.00</sup>
                            <br />
                            Setup Fee
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="pricing-block__bottom">
                    <span style={{ fontSize: "26px", color: "#005395" }}>
                      10TB+/MO. DATA TRAFFIC
                    </span>
                    <br />
                    <br />
                    <span style={{ fontSize: "26px", color: "#005395" }}>
                      100 MBIT/SEC MAX. BURST RATE
                    </span>
                    <br />
                    <br />
                    <h6 className="title2">10TB PLUS</h6>
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
                        href="#popup3"
                      >
                        click here for full details
                      </a>
                    </p>
                    <div className="text-center">
                      <a
                        href="/order/?env=bus&type=&plan=10TB PLUS - $.00250.00"
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
                                10TB PLUS
                              </span>
                              <br />
                            </p>
                            <h6 style={{ textAlign: "left" }}>
                              Account Includes:
                            </h6>
                            <ul>
                              <li style={{ textAlign: "left" }}>
                                10TB+ data traffic per month
                              </li>
                              <li style={{ textAlign: "left" }}>
                                100 Mbit/sec Maximum burst rate
                              </li>
                              <li style={{ textAlign: "left" }}>
                                100 bT Interface Type
                              </li>
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
                  <div className="number">5</div>
                  <div className="pricing-block__top">
                    <div className="pricing-block__price">
                      <div className="vert-wrapper">
                        <div className="vert">
                          <div style={{ margin: "0 0" }}>
                            <span
                              style={{ fontSize: "36px", fontWeight: "bold" }}
                            >
                              1U
                              <br />
                              DB SYSTEM
                            </span>
                          </div>
                          <div>
                            <br />
                            <span
                              style={{ fontSize: "36px", fontWeight: "bold" }}
                            >
                              $79
                            </span>
                            <sup>.00</sup>
                            <br />
                            per month
                            <br />
                            <br />
                            <span
                              style={{ fontSize: "36px", fontWeight: "bold" }}
                            >
                              $200
                            </span>
                            <sup>.00</sup>
                            <br />
                            Setup Fee
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="pricing-block__bottom">
                    <span style={{ fontSize: "26px", color: "#005395" }}>
                      1U DB System
                    </span>
                    <br />
                    <br />
                    <span style={{ fontSize: "26px", color: "#005395" }}>
                      LOOP 100bT
                    </span>
                    <br />
                    <br />
                    <h6 className="title2">1U DB SYSTEM</h6>
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
                        href="#popup4"
                      >
                        click here for full details
                      </a>
                    </p>
                    <div className="text-center">
                      <a
                        href="/order/?env=bus&type=&plan=1U<br>DB SYSTEM - $79.00200.00"
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
                                1U
                                <br />
                                DB SYSTEM
                              </span>
                              <br />
                            </p>
                            <h6 style={{ textAlign: "left" }}>
                              Account Includes:
                            </h6>
                            <ul>
                              <li style={{ textAlign: "left" }}>
                                1U DB System
                              </li>
                              <li style={{ textAlign: "left" }}>
                                10 Mbit/sec Maximum burst rate
                              </li>
                              <li style={{ textAlign: "left" }}>
                                Loop 100bT Interface Type
                              </li>
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
      </div>

      <div className="block">
        <div className="container">
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
                padding: "22px 15px 20px",
                width: "389px",
                position: "relative",
                backgroundColor: "#f7f8f8",
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
                <li style={{ textAlign: "left" }}>
                  Additional 15GB Transfer Package, $50.00
                </li>
                <li style={{ textAlign: "left" }}>
                  Secondary name service, $25.00 per domain, per year
                </li>
                <li style={{ textAlign: "left" }}>
                  Backup MX handling, $25.00 per domain, per month
                </li>
                <li style={{ textAlign: "left" }}>
                  Additional IP addresses, $25.00 one-time setup
                </li>
                <li style={{ textAlign: "left" }}>
                  Battery Filtered Power, $15.00 per month, each
                </li>
                <li style={{ textAlign: "left" }}>
                  Unfiltered Power, $10.00 per month, each
                </li>
                <li style={{ textAlign: "left" }}>
                  2U Server Option, $50.00 per month
                </li>
                <li style={{ textAlign: "left" }}>
                  3U Server Option, $75.00 per month
                </li>
                <li style={{ textAlign: "left" }}>
                  4U Server Option, $100.00 per month
                </li>
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
                padding: "22px 15px 20px",
                width: "390px",
                position: "relative",
                backgroundColor: "#ffffff",
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
                  textAlign: "left",
                }}
              >
                Customer equipment must be able to fit requirements, and be
                configured in such a way that it neither requires in-person
                manipulation nor a monitor or keyboard for normal operation.
              </p>
              <p
                style={{
                  marginTop: "0px",
                  marginBottom: "5px",
                  lineHeight: "22px",
                  textAlign: "left",
                }}
              >
                Customer will be expected to use Virtual Server hosting, to
                preserve IP addresses. One IP address is initially provided,
                with other addresses issued on an as-needed basic, with full
                justification requirements.
              </p>
            </div>
            <div
              className="price-cell"
              style={{
                display: "table-cell",
                padding: "22px 15px 20px",
                width: "390px",
                position: "relative",
                backgroundColor: "#f7f8f8",
                transition: "0.2s",
                boxShadow: "rgba(0, 0, 0, 0.2) 0px 0px 10px",
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
                FEATURES
              </h6>
              <ul style={{ marginBottom: "10px" }}>
                <li style={{ textAlign: "left" }}>
                  One standard 19″ (1U) rack with power &amp; ethernet port
                </li>
                <li style={{ textAlign: "left" }}>
                  Secured facility protection
                </li>
                <li style={{ textAlign: "left" }}>
                  Single IP address suitable for virtual hosting
                </li>
                <li style={{ textAlign: "left" }}>
                  Secondary MX record handling for one domain
                </li>
                <li style={{ textAlign: "left" }}>
                  Primary DNS for one domain
                </li>
                <li style={{ textAlign: "left" }}>
                  Secondary name service for three domains
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
