import Link from "@/components/CustomLink"

export default function WebsitePrivacyPolicy() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4 col-lg-3 asideColumn">
          <h4>Policies</h4>
          <ul className="service-list">
            <li>
              <Link href="/aup/">Acceptable Use Policy</Link>
            </li>
            <li>
              <Link href="/pp/">Privacy Policy</Link>
            </li>
            <li>
              <Link href="/tsp/">Technical Support Policy</Link>
            </li>
            <li className="active">
              <Link href="/wpp/">Website Privacy Policy</Link>
            </li>
          </ul>
        </div>
        <div className="divider-lg visible-xs"></div>
        <div className="col-md-8 col-lg-9">
          <h1 className="text-center decor color">
            Privacy of Kingston Online Service’s Website
          </h1>

          <br />
          <p className="text-left font18"></p>
          <ul>
            <li>
              Kingston Online Services endeavours to ensure the security of the
              data stored and transmitted to and from its services.
            </li>
            <li>
              Some of the information entered is encrypted, using standard
              Internet protocol (HTTP). Regular security audits are performed on
              all of Kingston Online Service’s computer systems, and all are
              regularly updated when accessing sites through links included on
              our website.
            </li>
            <li>
              Kingston Online Services cannot assure security and privacy of
              information when accessing sites through links included on our
              website.
            </li>
            <li>
              Kingston Online Services may on occasion log technical information
              from your computer’s Web br /owser when you visit us on the
              Internet. Our technical logs do not record personal information,
              can be accessed only by our administrators, and are used solely
              for internal purposes. Non-confidential information may be
              gathered autonomously, by way of cookies.
            </li>
            <li>
              Kingston Online Services’ administrators of their authorized
              agents, may, at any time, monitor, examine, or read any
              connections, transmissions or data sent from or received by any of
              Kingston Online Services’ equipment. We do not attempt to track
              this information to the individuals visiting our website, with the
              exception of investigating a security br /each.
            </li>
            <li>
              Unauthorized access to any of our computers resources may result
              in prosecution.
            </li>
            <li>
              Kingston Online Services reserves the right to examine any and all
              materials supplied by its clients for posting to the Internet, to
              ensure that they comply with privacy policies.
            </li>
            <li>
              Kingston Online Services respects the privacy of visitors to our
              website. Personal information is collected, used, and disclosed
              only in accordance with our privacy policy.
            </li>
          </ul>

          <p></p>
        </div>
      </div>
    </div>
  )
}
