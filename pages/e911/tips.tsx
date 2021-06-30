import Link from "@/components/CustomLink"
import { InternalTemplate } from "@/layouts/InternalTemplate"

export default function E911Tips(): JSX.Element {
  const title = "e911 Tips"
  // "e911 Tips"
  const slug = "e911/tips"
  // "e911/tips"

  return (
    <InternalTemplate title={title} slug={slug}>
      <E911TipsContent />
    </InternalTemplate>
  )
}

function E911TipsContent() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4 col-lg-3 asideColumn">
          <h4>e911</h4>
          <ul className="service-list">
            <li className="active">
              <Link href="/e911/">e911 General</Link>
            </li>
            <li>
              <Link href="/e911/faqs/">e911 FAQs</Link>
            </li>
            <li>
              <Link href="/e911/tips/">e911 Tips</Link>
            </li>
            <li>
              <Link href="/e911/travel/">e911 Travelling</Link>
            </li>
          </ul>
        </div>
        <div className="divider-lg visible-xs"></div>
        <div className="col-md-8 col-lg-9">
          <p className="text-left font18">
            <strong>
              The following are some User Tips which should help you along the
              way in your understanding of the KOS VoIP 911 service.
            </strong>
          </p>

          <p className="text-left font18">
            {" "}
            • It is important to note that VoIP 911 service you have subscribed
            to has certain limitations relative to Enhanced 911 service that is
            available on most traditional telephone services.
          </p>

          <p className="text-left font18">
            {" "}
            • Be prepared to confirm your location and call-back number with the
            operator who answers the 911 call since the operator may not have
            this information easily available.
          </p>

          <p className="text-left font18">
            {" "}
            • Be aware that the VoIP 911 service may not be available during a
            power outage, environmental circumstances and will be unavailable
            during a broadband Internet outage.
          </p>

          <p className="text-left font18">
            {" "}
            • Make sure that your location information is kept current with your
            VoIP service provider since the operator may assume that you are at
            the last registered address if you are not able to speak during a
            911 call.
          </p>

          <p className="text-left font18">
            {" "}
            • Make sure not to hang up until told to do so, and to call back as
            soon as possible if you get disconnected.
          </p>

          <p className="text-left font18">
            {" "}
            • Lastly you need to ensure that you understand any 911 limitations
            of your VoIP service and that you make all other potential users of
            the service aware of these limitations.
          </p>

          <p className="text-left font18">
            If you still have further questions visit our 911 FAQ and Support
            page, or contact our support team to assist you.
          </p>
          <div className="divider-line-sm"></div>
        </div>
      </div>
    </div>
  )
}
