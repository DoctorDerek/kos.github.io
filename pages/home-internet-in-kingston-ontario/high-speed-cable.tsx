import { InternalTemplate } from "@/components/InternalTemplate"
import { BulletNavMenu } from "@/components/BulletNavMenu"

export default function HighSpeedCable(): JSX.Element {
  const title = (
    <>
      Residential <span style={{ color: "#A80532" }}>High Speed Cable</span>{" "}
      Packages in Kingston & Belleville, Ontario
    </>
  )
  // "Residential High Speed Cable Packages"
  const slug = "home-internet-in-kingston-ontario/high-speed-cable"
  // "res/high-speed-cable"
  const bulletNavMenu = <BulletNavMenu type="Residential" />

  return (
    <InternalTemplate
      title={title}
      slug={slug}
      bulletNavMenu={bulletNavMenu}
      fullWidth={true}
    >
      <HighSpeedCableContent />
    </InternalTemplate>
  )
}

function HighSpeedCableContent() {
  return (
    <div>
      <span className="text-xl text-center">
        Get an instant connection with Internet over cable at a price that suits
        your needs.
      </span>
      <div>
        <iframe
          frameBorder={0}
          height={250}
          width="100%"
          scrolling="no"
          src="https://kos.net/dslavail/dslavail.php"
          title="Postal Code Search"
        />
      </div>
      <div className="divider" />
      <div className="flex flex-wrap">
        <div className="w-1/3">
          <div className="relative flex flex-col h-full shadow-2xl">
            <div className="absolute z-20 text-6xl font-bold text-white left-2 top-2">
              1
            </div>
            <div className="flex flex-col items-center justify-center h-48 bg-gray-200">
              <div className="absolute flex flex-col justify-center bg-blue-700 border-gray-200 border-solid rounded-full shadow-xl top-4 w-92 h-92 border-20">
                <div className="z-10 flex flex-col justify-center flex-shrink-0 mx-auto text-center text-white bg-blue-700 border-blue-800 border-solid rounded-full top-4 w-84 h-84 border-20">
                  <span className="text-5xl font-bold">CABLE 15</span>
                  <span className="mt-6">
                    <span className="text-5xl font-bold">$39</span>
                    <sup className="text-xl">.95</sup>
                  </span>
                  <span className="mt-0 text-xl">
                    per month
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
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="pricing-block__bottom">
            <span style={{ fontSize: 26, color: "#005395" }}>
              UP TO 15.0 MBPS DOWNLOAD SPEED
            </span>
            <br />
            <br />
            <span style={{ fontSize: 26, color: "#005395" }}>
              200 GB OF DATA TRANSFER PER MONTH
            </span>
            <br />
            <br />
            <h6 className="title2">CABLE 15</h6>
            <p style={{}}>
              Surf, shop, stream music and video, stay connected with family and
              friends.
            </p>
            <p>
              <span
                style={{ color: "#28BCEB", fontSize: 12, fontWeight: "bold" }}
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
                      fontSize: 26,
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
                href="/order/?env=res&type=cable&plan=CABLE 15 - $39.95"
                className="btn"
              >
                Order Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
/*
const PopupBox = () => (
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
                  fontSize: 28,
                }}
              >
                CABLE 15
              </span>
              <br />
            </p>
            <h6 style={{ textAlign: "left" }}>Account Includes:</h6>
            <ul style={{ textAlign: "left" }}>
              <li>Up to 15.0 Mbps download speed, 2.0 Mbps upload speed</li>
              <li>200 GB of data transfer per month</li>
              <li>Free spam and virus protection</li>
              <li>
                Two e-mail addresses with web e-mail, IMAP4, or POP3 access
              </li>
              <li>5 hours of dial-up access provided</li>
              <li>100 MB of Personal Web Space available for use</li>
              <li>Access to value-added services</li>
              <li>Technical support with office repair</li>
              <li>Access to web-based e-mail</li>
            </ul>
            <ol>
              <li style={{ textAlign: "left" }}>
                Requires Modem rental or purchase.
              </li>
              <li style={{ textAlign: "left" }}>
                For residential purposes only, must not exceed a reasonable
                amount of usage
              </li>
              <li style={{ textAlign: "left" }}>
                $50 Setup Fee (waived for existing Cable Internet Subscribers
                for service at their existing location)&nbsp;
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
)*/
