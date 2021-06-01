import Link from "@/components/Link"
import { InternalTemplate } from "@/components/InternalTemplate"
import { BulletNavMenu } from "@/components/BulletNavMenu"

export default function HighSpeedCable(): JSX.Element {
  const title = (
    <>
      Residential <span style={{ color: "#A80532" }}>Mail</span> Packages in
      Kingston & Belleville, Ontario
    </>
  )
  // "Residential Mail Packages"
  const slug = "home-internet-in-kingston-ontario/mail"
  // "res/mail"
  const bulletNavMenu = <BulletNavMenu type="Residential" />

  return (
    <InternalTemplate title={title} slug={slug} bulletNavMenu={bulletNavMenu}>
      <MailContent />
    </InternalTemplate>
  )
}

function MailContent() {
  return (
    <>
      <div id="page-content">
        {/* Block */}
        <div>
          <div className="container">
            <span className="text-center" style={{ fontSize: "20px" }}>
              Advanced Mail (VIP) services provide an outsourced e-mail solution
              with scalability, security and performance required by businesses
              that wish to offload the costs of company mail services to their
              ISP. This service offers remote relaying using authentication,
              large mailboxes, web-based domain administration, SSL support for
              security, as well as an advanced suite of mail protection from
              viruses and unsolicited bulk email. Also available for individual
              mailboxes.
              <br />
              <br />
              KOS offers an advanced mail service for individuals or companies
              who wish to administrate their own mail with a secured web
              service, and who have the need for larger attachments and/or
              mailboxes than standard accounts include. This service offers an
              economical way to outsource corporate e-mail.
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
                              INDIVIDUAL MAILBOXES
                            </span>
                          </div>
                          <div>
                            <br />
                            <span
                              style={{ fontSize: "36px", fontWeight: "bold" }}
                            >
                              $4
                            </span>
                            <sup>.95</sup>
                            <br />
                            per month
                            <br />
                            No Setup Fee
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="pricing-block__bottom">
                    <h6 className="title2">INDIVIDUAL MAILBOXES</h6>
                    <p style={{}}>
                      An account for individuals with a need for more e-mail
                      boxes than are included in a standard account.
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
                      <Link
                        className="text-teal-brand underline font-bold"
                        href="#popup0"
                      >
                        click here for full details
                      </Link>
                    </p>
                    <div className="text-center">
                      <Link
                        href="/order/?env=res&type=mail&plan=INDIVIDUAL MAILBOXES - $4.95"
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
                                INDIVIDUAL MAILBOXES
                              </span>
                              <br />
                            </p>
                            <h6 style={{ textAlign: "left" }}>
                              Account Includes:
                            </h6>
                            <ul>
                              <li style={{ textAlign: "left" }}>
                                Single mailbox with Basic Account Features
                              </li>
                              <li style={{ textAlign: "left" }}>
                                username@kos.net, up to 32 letters per username
                              </li>
                              <li>
                                Administration for mailbox features, including:
                                <ul>
                                  <li style={{ textAlign: "left" }}>
                                    autoresponder/vacation “robot” with copy
                                  </li>
                                  <li style={{ textAlign: "left" }}>
                                    forwarding capability
                                  </li>
                                  <li style={{ textAlign: "left" }}>
                                    real name
                                  </li>
                                  <li style={{ textAlign: "left" }}>
                                    account password administration
                                  </li>
                                </ul>
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
                              STANDARD BUSINESS DOMAIN
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
                            No Setup Fee*
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="pricing-block__bottom">
                    <h6 className="title2">STANDARD BUSINESS DOMAIN</h6>
                    <p style={{}}>
                      An account for small businesses with a domain (or a
                      subdomain.kos.net address) with a need for a additional
                      e-mail addresses using their own domain. Features
                      “postmaster” accounts for monitoring bounces and
                      administration of all mailboxes.
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
                      <Link
                        className="text-teal-brand underline font-bold"
                        href="#popup1"
                      >
                        click here for full details
                      </Link>
                    </p>
                    <div className="text-center">
                      <Link
                        href="/order/?env=res&type=mail&plan=STANDARD BUSINESS DOMAIN - $19.95"
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
                                STANDARD BUSINESS DOMAIN
                              </span>
                              <br />
                            </p>
                            <h6 style={{ textAlign: "left" }}>
                              Account Includes:
                            </h6>
                            <ul style={{ textAlign: "left" }}>
                              <li>
                                10 e-mail addresses and “postmaster” account
                              </li>
                              <li>Up to four (4) mail forwards</li>
                              <li>Up to ten (10) mail aliases</li>
                              <li>Up to four (4) mail robots</li>
                              <li>
                                username@domain, up to 32 letters per username
                              </li>
                              <li>
                                choice of your domain or subdomain.kos.net
                              </li>
                              <li>spam and virus protection</li>
                              <li>
                                Administration for domain features, including:
                                <ul>
                                  <li>mailbox setup, deletion, et al</li>
                                  <li>
                                    “catch-all” support to catch anything@domain
                                  </li>
                                  <li>
                                    autoresponder/vacation “robots” with copy
                                  </li>
                                  <li>aliasing capability</li>
                                  <li>forwarding capability</li>
                                  <li>real name for each account</li>
                                  <li>account password administration</li>
                                  <li>individual mailbox configuration</li>
                                </ul>
                              </li>
                              <li>Support for additional domain mappings*</li>
                              <li>Support for full-featured mailing lists*</li>
                            </ul>
                            <p style={{ textAlign: "left" }}>
                              * Does not include cost of yearly domain
                              registration if required
                            </p>
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
            </div>
          </div>
        </div>
      </div>

      <div className="block">
        <div className="container">
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
                <p>
                  <span
                    style={{ color: "#000000", backgroundColor: "#ffffff" }}
                  >
                    * Does not include cost of yearly domain registration if
                    required
                  </span>
                </p>
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
                    <li style={{ textAlign: "left" }}>
                      Additional 10 e-mail boxes for domain, $19.95 per month
                    </li>
                    <li style={{ textAlign: "left" }}>
                      Additional 50 e-mail boxes for domain, $89.95 per month
                    </li>
                    <li style={{ textAlign: "left" }}>
                      Additional 200MB of space per mailbox, $4.95 per month
                    </li>
                    <li style={{ textAlign: "left" }}>
                      Full-featured double-opt-in mailing list, $19.95 per month
                      <ul style={{ marginBottom: "0px" }}>
                        <li>supports digesting and archive retrieval</li>
                        <li>supports multiple remote moderators</li>
                        <li>supports message moderation if desired</li>
                        <li>supports subscription confirmation</li>
                        <li>supports information text modification</li>
                        <li>supports MIME stripping</li>
                        <li>supports trailers</li>
                      </ul>
                    </li>
                  </ul>
                  <p
                    style={{
                      marginTop: "0px",
                      marginBottom: "5px",
                      lineHeight: "22px",
                      textAlign: "left",
                    }}
                  >
                    &nbsp;
                  </p>
                  <p
                    style={{
                      marginTop: "0px",
                      marginBottom: "5px",
                      lineHeight: "22px",
                      textAlign: "left",
                    }}
                  >
                    Additional domains mapped, one-time $9.95
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
                    FEATURES
                  </h6>
                  <p
                    style={{
                      marginTop: "0px",
                      marginBottom: "5px",
                      lineHeight: "22px",
                    }}
                  >
                    All Standard Mail Accounts include:
                  </p>
                  <ul style={{ marginBottom: "10px" }}>
                    <li style={{ textAlign: "left" }}>
                      500 Megabytes of storage per mailbox with notification
                    </li>
                    <li style={{ textAlign: "left" }}>
                      Support for up to 3600 messages per mailbox
                    </li>
                    <li style={{ textAlign: "left" }}>
                      Support for up to 20 Megabytes per relayed message
                    </li>
                    <li style={{ textAlign: "left" }}>
                      Up to 128 Megabytes per message to multiple recipients
                    </li>
                    <li style={{ textAlign: "left" }}>
                      Self-administration with vacation messages, etc.
                    </li>
                    <li style={{ textAlign: "left" }}>
                      Spam and Virus protection with Per-User Preferences
                    </li>
                    <li style={{ textAlign: "left" }}>
                      Up to 32 characters per username for customizing
                    </li>
                    <li style={{ textAlign: "left" }}>
                      SSL-protected web-mail access
                    </li>
                  </ul>
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
                    REQUIREMENTS
                  </h6>
                  <ul style={{ marginBottom: "10px" }}>
                    <li style={{ textAlign: "left" }}>
                      A connection to the Internet
                    </li>
                    <li style={{ textAlign: "left" }}>
                      A kos.net mailbox or your own domain name
                    </li>
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
