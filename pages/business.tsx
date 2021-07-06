import Link from "@/components/CustomLink"

export default function BusinessServices() {
  return (
    <div className="container">
      <div className="row">
        <div className="divider-lg visible-xs"></div>
        <div className="col-md-8 col-lg-9">
          <h1 className="text-center decor color">Business Services</h1>

          <div id="page-content">
            <div className="block">
              <div className="container">
                <div className="row">
                  <div className="col-md-8 col-lg-9">
                    <p>
                      <span>
                        Kingston Online Services offers Internet for your
                        business at speeds starting from dial-up connectivity to
                        high speed services intended for video and telephony.
                        Kingston Online Services also provides innovative
                        solutions for rural connectivity where conventional
                        Internet services are not available.
                      </span>
                    </p>
                    <h5 className="color">
                      PLEASE CONTACT OUR OFFICE FOR MORE INFORMATION, OR SELECT
                      FROM ONE OF OUR SERVICES BELOW.
                    </h5>
                    <div className="row">
                      <div className="col-sm-6">
                        <ul className="marker-list pad-left">
                          <li>
                            <Link href="https://www.kos.net/bus/high-speed-cable/">
                              High Speed Cable
                            </Link>
                          </li>
                          <li>
                            <Link href="https://www.kos.net/bus/wireless-broadband/">
                              Wireless Broadband
                            </Link>
                          </li>
                          <li>
                            <Link href="https://www.kos.net/bus/high-speed-dsl/">
                              High Speed DSL
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <div className="col-sm-6">
                        <ul className="marker-list pad-left">
                          <li>
                            <Link href="https://www.kos.net/bus/voip/">
                              VoIP
                            </Link>
                          </li>
                          <li>
                            <Link href="https://www.kos.net/bus/dial-up/">
                              Dial Up
                            </Link>
                          </li>
                          <li>
                            <Link href="https://www.kos.net/bus/mail/">
                              Mail
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <Link href="/order/" className="btn btn-orange">
              Get Connected
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
