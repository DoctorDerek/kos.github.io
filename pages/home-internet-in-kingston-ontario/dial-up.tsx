import { InternalTemplate } from "@/components/InternalTemplate"
import { BulletNavMenu } from "@/components/BulletNavMenu"

export default function DialUp(): JSX.Element {
  const title = (
    <>
      Residential <span style={{ color: "#A80532" }}>Dial Up</span> Services in
      Kingston & Belleville, Ontario
    </>
  )
  // "Residential Dial Up Services"
  const slug = "home-internet-in-kingston-ontario/dial-up"
  // "res/dial-up"
  const bulletNavMenu = <BulletNavMenu />

  return (
    <InternalTemplate title={title} slug={slug} bulletNavMenu={bulletNavMenu}>
      <DialUpContent />
    </InternalTemplate>
  )
}

function DialUpContent() {
  return (
    <>
      <div className="block">
        <div className="container">
          <span className="text-center" style={{ fontSize: "20px" }}>
            Can’t get high speed in your area? Don’t use the internet very much
            but would like an email address? KOS-dial up service will do the
            trick. We offer a local call service area from Brighton to
            Gananoque.
          </span>{" "}
          <br />
          <br />
          <div>
            <form
              action="http://www.kos.net/dslavail-check.php"
              method="post"
              name="dslcheck"
            >
              <input type="hidden" name="minidslc" defaultValue={1} />
              <input type="hidden" name="docheck" defaultValue={1} />
              <div className="price-cell">
                <label>
                  <strong>
                    Enter your Postal Code to check if{" "}
                    <span style={{ color: "#00467E", fontWeight: "bold" }}>
                      DIAL UP
                    </span>{" "}
                    is available in your area:
                  </strong>
                </label>
                <div style={{ paddingTop: "15px", paddingBottom: "1px" }}>
                  <input
                    style={{ width: "80px" }}
                    type="text"
                    placeholder="K7K 5W7"
                    name="postalcode"
                    maxLength={7}
                    size={7}
                  />
                  <input type="submit" defaultValue="Check" name="sub" />
                </div>
              </div>
            </form>
          </div>
          <div className="divider" />
          <div className="flex flex-wrap pricing-block-row">
            <div className="w-full sm:w-1/3">
              <div className="relative pricing-block color1">
                <div className="number">1</div>
                <div className="pricing-block__top">
                  <div className="pricing-block__price">
                    <div className="vert-wrapper">
                      <div className="vert">
                        <div style={{ margin: "0 0" }}>
                          <span
                            style={{ fontSize: "36px", fontWeight: "bold" }}
                          >
                            EXTRA-LITE
                            <br />
                            DIAL UP
                          </span>
                        </div>
                        <div>
                          <br />
                          <span
                            style={{ fontSize: "36px", fontWeight: "bold" }}
                          >
                            $90
                          </span>
                          <sup>.00</sup>
                          <br />
                          per year
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="pricing-block__bottom">
                  <span style={{ fontSize: "26px", color: "#005395" }}>
                    10 HOURS OF ACCESS PER MONTH
                  </span>
                  <br />
                  <br />
                  <span style={{ fontSize: "26px", color: "#005395" }}>
                    V.90 MODEM ACCESS UP TO 56 KBPS
                  </span>
                  <br />
                  <br />
                  <h6 className="title2">EXTRA-LITE DIAL UP</h6>
                  <p style={{}}>
                    An account for very low-use needs that require only a few
                    hours per month of Internet access for e-mail mostly, and
                    perhaps a bit of browsing.
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
                      href="/order/?env=res&type=dialup&plan=EXTRA-LITE<br>DIAL UP - $90.00"
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
                      <div className="relative pricing-block color2">
                        <div className="pricing-block__bottom sm">
                          <p>
                            <span
                              style={{
                                color: "#00539D",
                                fontWeight: "bold",
                                fontSize: "28px",
                              }}
                            >
                              EXTRA-LITE
                              <br />
                              DIAL UP
                            </span>
                            <br />
                          </p>
                          <h6>Account Includes:</h6>
                          <ul>
                            <li>10 hours per month of access</li>
                            <li>V.90 modem access up to 56Kbps</li>
                            <li>
                              One e-mail address with web e-mail, IMAP4, or POP3
                            </li>
                            <li>Spam and Virus protection</li>
                            <li>100 MB of Personal Web Space available</li>
                            <li>Install guide for Windows or Macintosh</li>
                            <li>Technical support (with office repair)</li>
                            <li>Access to web-based e-mail</li>
                            <li>
                              Access to online scheduling, planning, bookmarks
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
            <div className="w-full sm:w-1/3">
              <div className="relative pricing-block color2">
                <div className="number">2</div>
                <div className="pricing-block__top">
                  <div className="pricing-block__price">
                    <div className="vert-wrapper">
                      <div className="vert">
                        <div style={{ margin: "0 0" }}>
                          <span
                            style={{ fontSize: "36px", fontWeight: "bold" }}
                          >
                            LITE
                            <br />
                            DIAL UP
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
                          per month
                          <br />
                          <br />
                          <span
                            style={{ fontSize: "36px", fontWeight: "bold" }}
                          >
                            $159
                          </span>
                          <sup>.50</sup>
                          <br />
                          per year
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="pricing-block__bottom">
                  <span style={{ fontSize: "26px", color: "#005395" }}>
                    50 HOURS PER MONTH OF PEAK ACCESS
                  </span>
                  <br />
                  <br />
                  <span style={{ fontSize: "26px", color: "#005395" }}>
                    V.90 MODEM ACCESS UP TO 56 KBPS
                  </span>
                  <br />
                  <br />
                  <h6 className="title2">LITE DIAL UP</h6>
                  <p style={{}}>
                    An account for moderate needs with 50 hours per month of
                    Internet access for e-mail, browsing and general Internet
                    usage.
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
                      href="/order/?env=res&type=dialup&plan=LITE<br>DIAL UP - $14.95159.50"
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
                      <div className="relative pricing-block color2">
                        <div className="pricing-block__bottom sm">
                          <p>
                            <span
                              style={{
                                color: "#00539D",
                                fontWeight: "bold",
                                fontSize: "28px",
                              }}
                            >
                              LITE
                              <br />
                              DIAL UP
                            </span>
                            <br />
                          </p>
                          <h6>Account Includes:</h6>
                          <ul>
                            <li>50 hours per month of peak access</li>
                            <li>V.90 modem access up to 56Kbps</li>
                            <li>
                              Two e-mail addresses with web e-mail, IMAP4, or
                              POP3 access
                            </li>
                            <li>Spam and Virus protection</li>
                            <li>100 MB of Personal Web Space available</li>
                            <li>Install guide for Windows or Macintosh</li>
                            <li>Technical support with office repair</li>
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
            <div className="w-full sm:w-1/3">
              <div className="relative pricing-block color1">
                <div className="number">3</div>
                <div className="pricing-block__top">
                  <div className="pricing-block__price">
                    <div className="vert-wrapper">
                      <div className="vert">
                        <div style={{ margin: "0 0" }}>
                          <span
                            style={{ fontSize: "36px", fontWeight: "bold" }}
                          >
                            SURFER
                            <br />
                            DIAL UP
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
                          per month
                          <br />
                          <br />
                          <span
                            style={{ fontSize: "36px", fontWeight: "bold" }}
                          >
                            $199
                          </span>
                          <sup>.50</sup>
                          <br />
                          per year
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="pricing-block__bottom">
                  <span style={{ fontSize: "26px", color: "#005395" }}>
                    100 HOURS PER MONTH OF PEAK ACCESS
                  </span>
                  <br />
                  <br />
                  <span style={{ fontSize: "26px", color: "#005395" }}>
                    V.90 MODEM ACCESS UP TO 56 KBPS
                  </span>
                  <br />
                  <br />
                  <h6 className="title2">SURFER DIAL UP</h6>
                  <p style={{}}>
                    An account for regular surfing needs with up to 100 hours
                    per month of Internet access for e-mail, browsing and
                    general Internet usage.
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
                      href="/order/?env=res&type=dialup&plan=SURFER<br>DIAL UP - $19.95199.50"
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
                      <div className="relative pricing-block color2">
                        <div className="pricing-block__bottom sm">
                          <p>
                            <span
                              style={{
                                color: "#00539D",
                                fontWeight: "bold",
                                fontSize: "28px",
                              }}
                            >
                              SURFER
                              <br />
                              DIAL UP
                            </span>
                            <br />
                          </p>
                          <h6>Account Includes:</h6>
                          <ul>
                            <li>100 hours per month of peak access</li>
                            <li>V.90 modem access up to 56Kbps</li>
                            <li>
                              Four e-mail addresses with web e-mail, IMAP4, or
                              POP3 access
                            </li>
                            <li>Spam and Virus protection</li>
                            <li>
                              100 MB of Personal Web Space available for use
                            </li>
                            <li>Install guide for Windows or Macintosh</li>
                            <li>Technical support with office repair</li>
                            <li>Access to web-based e-mail</li>
                            <li>
                              Access to online scheduling, planning, bookmarks
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
            <div className="w-full sm:w-1/3">
              <div className="relative pricing-block color2">
                <div className="number">4</div>
                <div className="pricing-block__top">
                  <div className="pricing-block__price">
                    <div className="vert-wrapper">
                      <div className="vert">
                        <div style={{ margin: "0 0" }}>
                          <span
                            style={{ fontSize: "36px", fontWeight: "bold" }}
                          >
                            UNLIMITED
                            <br />
                            DIAL UP
                          </span>
                        </div>
                        <div>
                          <br />
                          <span
                            style={{ fontSize: "36px", fontWeight: "bold" }}
                          >
                            $24
                          </span>
                          <sup>.95</sup>
                          <br />
                          per month
                          <br />
                          <br />
                          <span
                            style={{ fontSize: "36px", fontWeight: "bold" }}
                          >
                            $264
                          </span>
                          <sup>.50</sup>
                          <br />
                          per year
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="pricing-block__bottom">
                  <span style={{ fontSize: "26px", color: "#005395" }}>
                    UNLIMITED DIAL UP ACCESS
                  </span>
                  <br />
                  <br />
                  <span style={{ fontSize: "26px", color: "#005395" }}>
                    V.90 MODEM ACCESS UP TO 56 KBPS
                  </span>
                  <br />
                  <br />
                  <h6 className="title2">UNLIMITED DIAL UP</h6>
                  <p style={{}}>
                    A high-value account for extended surfing needs with
                    unlimited Internet access for e-mail, browsing and general
                    Internet usage. Great for small home businesses with the
                    need for plenty of research and e-mail access.
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
                      href="/order/?env=res&type=dialup&plan=UNLIMITED<br>DIAL UP - $24.95264.50"
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
                      <div className="relative pricing-block color2">
                        <div className="pricing-block__bottom sm">
                          <p>
                            <span
                              style={{
                                color: "#00539D",
                                fontWeight: "bold",
                                fontSize: "28px",
                              }}
                            >
                              UNLIMITED
                              <br />
                              DIAL UP
                            </span>
                            <br />
                          </p>
                          <h6>Account Includes:</h6>
                          <ul>
                            <li>Unlimited dial-up access</li>
                            <li>V.90 modem access up to 56 Kbps</li>
                            <li>
                              Four e-mail addresses with web e-mail, IMAP4, or
                              POP3 access
                            </li>
                            <li>Spam and Virus protection</li>
                            <li>
                              100 MB of Personal Web Space available for use
                            </li>
                            <li>Install guide for Windows or Macintosh</li>
                            <li>Technical support with office repair</li>
                            <li>Requires auto-debit or credit card</li>
                            <li>Concurrent logins charged at $1.00 per hour</li>
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
    </>
  )
}
