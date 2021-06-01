import Link from "@/components/Link"
import { InternalTemplate } from "@/components/InternalTemplate"
import { HoverBulletNavMenu } from "@/components/HoverBulletNavMenu"

export default function BusinessMail(): JSX.Element {
  const title = (
    <>
      Business <span className="text-red-brand">VIP Mail</span> Packages in
      Kingston & Belleville, Ontario
    </>
  )
  // "Business VIP Mail Packages"
  const slug = "bus/mail"
  // "bus/mail"
  const bulletNavMenu = <HoverBulletNavMenu type="Business" />

  return (
    <InternalTemplate
      title={title}
      slug={slug}
      hoverBulletNavMenu={bulletNavMenu}
    >
      <MailContent />
    </InternalTemplate>
  )
}

function MailContent() {
  return (
    <>
      <div id="page-content">
        {/* Block */}
        {/* //Block */}
        {/* SOF VIP MAIL */}
        {/* Block */}
        <div className="block">
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
                              $6
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
                      An account for individuals with a need for a large storage
                      space, roaming access and large attachments.
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
                        href="/order/?env=bus&type=mail&plan=INDIVIDUAL MAILBOXES - $6.95"
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
                            <h6>Account Includes:</h6>
                            <ul>
                              <li>
                                Single mailbox with Basic Account Features
                              </li>
                              <li>
                                username@kos.net, up to 32 letters per username
                              </li>
                              <li>
                                Administration for mailbox features, including:
                                <ul>
                                  <li>
                                    autoresponder/vacation “robot” with copy
                                  </li>
                                  <li>forwarding capability</li>
                                  <li>real name</li>
                                  <li>account password administration</li>
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
                              ADVANCED BUSINESS DOMAIN
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
                            per month
                            <br />
                            <br />
                            <span
                              style={{ fontSize: "36px", fontWeight: "bold" }}
                            >
                              $24
                            </span>
                            <sup>.95</sup>
                            <br />
                            Setup Fee*
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="pricing-block__bottom">
                    <h6 className="title2">ADVANCED BUSINESS DOMAIN</h6>
                    <p style={{}}>
                      An account for small businesses with a domain (or a
                      subdomain.kos.net address) with a need for a large storage
                      space, roaming access and large attachments. Features
                      “postmaster” accounts for monitoring bounces and
                      administration of all mailbox
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
                        href="/order/?env=bus&type=mail&plan=ADVANCED BUSINESS DOMAIN - $29.9524.95"
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
                                ADVANCED BUSINESS DOMAIN
                              </span>
                              <br />
                            </p>
                            <h6>Account Includes:</h6>
                            <ul>
                              <li>
                                10 e-mail addresses and “postmaster” account
                              </li>
                              <li>Up to four (4) mail forwards</li>
                              <li>Unlimited mail aliases</li>
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
                            <p>
                              * Does not include cost of yearly domain
                              registration if required
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
                  Additional 1GB of space per mailbox, $4.95 per month
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
              Additional domains mapped, one-time $9.95
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
                  textAlign: "left",
                }}
              >
                All VIP Mail Accounts include:
              </p>
              <ul style={{ marginBottom: "10px" }}>
                <li style={{ textAlign: "left" }}>
                  2 Gigabytes of storage per mailbox with notification
                </li>
                <li style={{ textAlign: "left" }}>
                  Support for up to 7200 messages per mailbox
                </li>
                <li style={{ textAlign: "left" }}>
                  Optimization for leaving mail on the server
                </li>
                <li style={{ textAlign: "left" }}>
                  Support for up to 50 Megabytes per relayed message
                </li>
                <li style={{ textAlign: "left" }}>
                  Up to 256 Megabytes per message to multiple recipients
                </li>
                <li style={{ textAlign: "left" }}>
                  Spam and Virus protection with Per-User Preferences
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
                  An E-mail Client (Thunderbird, Outlook Express, Outlook, etc.)
                </li>
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
    </>
  )
}
