import Link from "@/components/Link"
export default function LocalInternetServices() {
  return (
    <div className="container">
      <div className="row">
        <div className="divider-lg visible-xs"></div>
        <div className="col-md-8 col-lg-9">
          <h1 className="text-center decor color">
            Picton Residential Services
          </h1>
          <p>
            Kingston Online Services offers Internet for the home (or home
            office) at speeds starting from dial-up connectivity to high speed
            services intended for video and telephony. Kingston Online Services
            also provides innovative solutions for rural connectivity where
            conventional Internet services are not available.{" "}
          </p>
          <div className="divider-sm"></div>
          <h5 className="color">
            Please <Link href="//contact">contact our office</Link> for more
            information, or select from one of our services below.
          </h5>
          <div className="row">
            <div className="col-sm-6">
              <ul className="marker-list pad-left">
                <li>
                  <Link href="/res/high-speed-cable/">High Speed Cable</Link>
                </li>
                <li>
                  <Link href="/res/wireless-broadband/">
                    Wireless Broadband
                  </Link>
                </li>
                <li>
                  <Link href="/res/high-speed-dsl/">High Speed DSL</Link>
                </li>
              </ul>
            </div>
            <div className="col-sm-6">
              <ul className="marker-list pad-left">
                <li>
                  <Link href="/res/voip/">VoIP</Link>
                </li>
                <li>
                  <Link href="/res/mail/">Mail</Link>
                </li>
                <li>
                  <Link href="/res/dial-up/">Dial Up</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="divider"></div>
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
