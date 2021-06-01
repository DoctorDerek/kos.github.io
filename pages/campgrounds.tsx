import Link from "@/components/Link"
export default function Campgrounds() {
  return (
    <div className="container">
      <h1 className="text-center decor color">Campgrounds</h1>

      <p className="text-center font18">
        <span>
          KOS is now offering Internet service at the following Campgrounds:
        </span>
      </p>
      <p>
        <span>•</span>
        <span>Quinte’s Isle Campark</span>
        <br />
        <span>•</span>
        <span>Wesley Acres</span>
        <br />
        <span>•</span>
        <span>Edgewater</span>
      </p>
      <p className="text-center font18">
        <span>KOS now offers 4 great Wi-Fi Packages</span>
        <br />
        Simply look for the campground network on your wireless compatible
        device when you are at the park and self-register for the Wi-Fi package
        of your choice.
      </p>
      <div className="row">
        <div className="col-sm-6 col-md-3">
          <div className="contact-box">
            <div className="contact-box-title">DAILY*</div>
            <div className="contact-box-row">
              <div className="contact-box-row-title">
                <span>$7.95</span>
              </div>
              <div>plus tax</div>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-md-3">
          <div className="contact-box">
            <div className="contact-box-title">3 DAY WEEKEND*</div>
            <div className="contact-box-row">
              <div className="contact-box-row-title">
                <span>$14.95</span>
              </div>
              <div>plus tax</div>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-md-3">
          <div className="contact-box">
            <div className="contact-box-title">WEEKLY*</div>
            <div className="contact-box-row">
              <div className="contact-box-row-title">
                <span>$26.95</span>
              </div>
              <div>plus tax</div>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-md-3">
          <div className="contact-box">
            <div className="contact-box-title">MONTHLY**</div>
            <div className="contact-box-row">
              <div className="contact-box-row-title">
                <span>$46.95</span>
              </div>
              <div>plus tax</div>
            </div>
          </div>
        </div>
      </div>
      <p className="text-center font18">
        Credit Card required * Connection limited to one device ** Connection
        limited to two devices – Please&nbsp;
        <Link href="/contact">call to activate</Link>
        &nbsp;second device
      </p>
      <p className="text-center font18">&nbsp;</p>
      <div className="contact-box">
        <div className="contact-box-title">
          SEASONAL FIXED WIRELESS INTERNET SERVICE
        </div>
        <div className="contact-box-row">
          <div className="contact-box-row-title">
            <span>$59.99</span>
          </div>
          <div>
            <ul>
              <li>250 GB per month, up to 6 Mbps</li>
              <li>
                Friendly technical support 7 days a week. Seasonal billing
                options are available.
              </li>
              <li>
                <Link href="https://www.kos.net/contact.php">
                  Contact us today
                </Link>
                &nbsp;and ask about our free installation
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
