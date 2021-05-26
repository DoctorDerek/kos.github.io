import { InternalTemplate } from "@/layouts/InternalTemplate"
import HoverBulletNavMenu from "@/components/HoverBulletNavMenu"

export default function HighSpeedCable(): JSX.Element {
  const title = (
    <>
      Residential <span className="text-red-brand">VoIP</span> Packages in
      Kingston & Belleville, Ontario
    </>
  )
  // "Resident VoIP Packages"
  const slug = "home-internet-in-kingston-ontario/voip"
  // "res/voip"
  const bulletNavMenu = <HoverBulletNavMenu type="Residential" />

  return (
    <InternalTemplate
      title={title}
      slug={slug}
      hoverBulletNavMenu={bulletNavMenu}
    >
      <VoipContent />
    </InternalTemplate>
  )
}

function VoipContent() {
  return (
    <>
      <div id="page-content">
        {/* Block */}
        <div className="block">
          <div className="container">
            <span className="text-center" style={{ fontSize: "20px" }}>
              KOS VoIP brings you inexpensive, convenient premium phone service
              over your High Speed Internet connection!
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
                              CANADA WIDE
                            </span>
                          </div>
                          <div>
                            <br />
                            <span
                              style={{ fontSize: "36px", fontWeight: "bold" }}
                            >
                              $14
                            </span>
                            <sup>.95</sup>
                            <br />
                            per month{" "}
                            <sup>
                              <a
                                href="#7"
                                style={{
                                  color: "#ffffff",
                                  textDecoration: "underline",
                                }}
                              >
                                7
                              </a>{" "}
                              <a
                                href="#8"
                                style={{
                                  color: "#ffffff",
                                  textDecoration: "underline",
                                }}
                              >
                                8
                              </a>{" "}
                            </sup>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="pricing-block__bottom">
                    <span style={{ fontSize: "26px", color: "#005395" }}>
                      UNLIMITED LOCAL AND CANADA-WIDE CALLING7{" "}
                    </span>
                    <br />
                    <br />
                    <span style={{ fontSize: "26px", color: "#005395" }}>
                      REQUIRED HARDWARE INCLUDED
                    </span>
                    <br />
                    <br />
                    <h6 className="title2">CANADA WIDE</h6>
                    <p style={{}}>
                      Call your friends, family and business prospects anywhere
                      in Canada, talk as long as you want!
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
                        href="/order/?env=res&type=voip&plan=CANADA WIDE - $14.95"
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
                                CANADA WIDE
                              </span>
                              <br />
                            </p>
                            <h6 style={{ textAlign: "left" }}>
                              Account Includes:
                            </h6>
                            <ul style={{ textAlign: "left" }}>
                              <li>Unlimited local and Canada-wide calling7</li>
                              <li>Required Hardware</li>
                              <li>Canadian local telephone number</li>
                              <li>
                                Voice mail with ability to forward audio files
                                to email
                              </li>
                              <li>Call Waiting, Call Forwarding, Caller ID</li>
                              <li>Manage your account features online</li>
                              <li>Call History / Logs</li>
                              <li>911 services included</li>
                              <li>
                                Use with your smartphone, with a free phone app!
                                Android, iOS
                              </li>
                              <li>
                                Keep your current phone number for a onetime fee
                                of $15.00!
                                <ul>
                                  <li>
                                    Please provide a copy of your current phone
                                    bill
                                  </li>
                                </ul>
                              </li>
                            </ul>
                            <p style={{ textAlign: "left" }}>
                              7) Does not include Yukon, North West Territories
                              or Nunavut
                            </p>
                            <p style={{ textAlign: "left" }}>
                              8) Minimum 3 month commitment
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
                              NORTH AMERICA
                            </span>
                          </div>
                          <div>
                            <br />
                            <span
                              style={{ fontSize: "36px", fontWeight: "bold" }}
                            >
                              $19
                            </span>
                            <sup>.95</sup>
                            <br />
                            per month{" "}
                            <sup>
                              <a
                                href="#7"
                                style={{
                                  color: "#ffffff",
                                  textDecoration: "underline",
                                }}
                              >
                                7
                              </a>{" "}
                              <a
                                href="#8"
                                style={{
                                  color: "#ffffff",
                                  textDecoration: "underline",
                                }}
                              >
                                8
                              </a>{" "}
                            </sup>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="pricing-block__bottom">
                    <span style={{ fontSize: "26px", color: "#005395" }}>
                      UNLIMITED LOCAL AND CANADA-WIDE CALLING
                    </span>
                    <br />
                    <br />
                    <span style={{ fontSize: "26px", color: "#005395" }}>
                      UNLIMITED CONTINENTAL UNITED STATES SERVICE
                      <br />
                      <br />
                      REQUIRED HARDWARE INCLUDED
                    </span>
                    <br />
                    <br />
                    <h6 className="title2">NORTH AMERICA</h6>
                    <p style={{}}>
                      Call your friends, family and business prospects anywhere
                      across Canada and the Continental United States. Talk as
                      long as you need!
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
                        href="/order/?env=res&type=voip&plan=NORTH AMERICA - $19.95"
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
                                NORTH AMERICA
                              </span>
                              <br />
                            </p>
                            <h6 style={{ textAlign: "left" }}>
                              Account Includes:
                            </h6>
                            <ul style={{ textAlign: "left" }}>
                              <li>Unlimited local and Canada-wide calling7</li>
                              <li>
                                Unlimited Continental United States Service
                              </li>
                              <li>Required Hardware</li>
                              <li>Canadian local telephone number</li>
                              <li>
                                Voice mail with ability to forward audio files
                                to email
                              </li>
                              <li>Call Waiting, Call Forwarding, Caller ID</li>
                              <li>Manage your account features online</li>
                              <li>Call History / Logs</li>
                              <li>911 services included</li>
                              <li>
                                Use with your smartphone, with a free phone app!
                                Android, iOS
                              </li>
                              <li>
                                Keep your current phone number for a onetime fee
                                of $15.00!
                              </li>
                              <li>
                                Please provide a copy of your current phone bill
                              </li>
                            </ul>
                            <p style={{ textAlign: "left" }}>
                              7) Does not include Yukon, North West Territories
                              or Nunavut
                            </p>
                            <p style={{ textAlign: "left" }}>
                              8) Minimum 3 month commitment
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
                              GLOBAL
                            </span>
                          </div>
                          <div>
                            <br />
                            <span
                              style={{ fontSize: "36px", fontWeight: "bold" }}
                            >
                              $29
                            </span>
                            <sup>.95</sup>
                            <br />
                            per month{" "}
                            <sup>
                              <a
                                href="#7"
                                style={{
                                  color: "#ffffff",
                                  textDecoration: "underline",
                                }}
                              >
                                7
                              </a>{" "}
                              <a
                                href="#8"
                                style={{
                                  color: "#ffffff",
                                  textDecoration: "underline",
                                }}
                              >
                                8
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
                      UNLIMITED LOCAL AND CANADA-WIDE CALLING
                    </span>
                    <br />
                    <br />
                    <span style={{ fontSize: "26px", color: "#005395" }}>
                      UNLIMITED CONTINENTAL UNITED STATES SERVICE <br />
                      <br />
                      2000 MINUTES TO 51 COUNTRIES
                    </span>
                    <br />
                    <br />
                    <h6 className="title2">GLOBAL</h6>
                    <p style={{}}>
                      Call your friends, family and business prospects anywhere
                      across Canada and the Continental United States. Talk as
                      long as you need! Overseas and South American calls at a
                      fraction of regular telephone costs.
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
                        href="/order/?env=res&type=voip&plan=GLOBAL - $29.95"
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
                                GLOBAL
                              </span>
                              <br />
                            </p>
                            <h6 style={{ textAlign: "left" }}>
                              Account Includes:
                            </h6>
                            <ul style={{ textAlign: "left" }}>
                              <li>Unlimited local and Canada-wide calling7</li>
                              <li>
                                Unlimited Continental United States Service
                              </li>
                              <li>2000 minutes to 51 countries included</li>
                              <li>Required Hardware</li>
                              <li>Canadian local telephone number</li>
                              <li>
                                Voice mail with ability to forward audio files
                                to email
                              </li>
                              <li>Call Waiting, Call Forwarding, Caller ID</li>
                              <li>Manage your account features online</li>
                              <li>Call History / Logs</li>
                              <li>911 services included</li>
                              <li>
                                Use with your smartphone, with a free phone app!
                                Android, iOS
                              </li>
                              <li>
                                Keep your current phone number for a onetime fee
                                of $15.00!
                                <ul>
                                  <li>
                                    Please provide a copy of your current phone
                                    bill
                                  </li>
                                </ul>
                              </li>
                            </ul>
                            <p style={{ textAlign: "left" }}>
                              7) Does not include Yukon, North West Territories
                              or Nunavut
                            </p>
                            <p style={{ textAlign: "left" }}>
                              8) Minimum 3 month commitment
                            </p>
                            <p style={{ textAlign: "left" }}>
                              9) Extra minute charges may vary by country
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
      <p className="text-center">
        <span
          style={{
            color: "#000000",
            fontFamily: '"Open Sans", sans-serif',
            fontSize: "15px",

            backgroundColor: "#ffffff",
          }}
        >
          7) Does not include Yukon, North West Territories or Nunavut
        </span>
        <br
          style={{
            color: "#000000",
            fontFamily: '"Open Sans", sans-serif',
            fontSize: "15px",

            backgroundColor: "#ffffff",
          }}
        />
        <span
          style={{
            backgroundColor: "#ffffff",
            color: "#000000",
            fontFamily: '"Open Sans", sans-serif',
            fontSize: "15px",
          }}
          /* name={8} */
        />
        <span
          style={{
            color: "#000000",
            fontFamily: '"Open Sans", sans-serif',
            fontSize: "15px",

            backgroundColor: "#ffffff",
          }}
        >
          8) Minimum 3 month commitment
        </span>
        <br
          style={{
            color: "#000000",
            fontFamily: '"Open Sans", sans-serif',
            fontSize: "15px",

            backgroundColor: "#ffffff",
          }}
        />
        <span
          style={{
            backgroundColor: "#ffffff",
            color: "#000000",
            fontFamily: '"Open Sans", sans-serif',
            fontSize: "15px",
          }}
          /* name={9}*/
        />
        <span
          style={{
            color: "#000000",
            fontFamily: '"Open Sans", sans-serif',
            fontSize: "15px",
            backgroundColor: "#ffffff",
          }}
        >
          9) Extra minute charges may vary by country
        </span>
      </p>
    </>
  )
}
