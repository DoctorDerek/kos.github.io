import { InternalTemplate } from "@/components/InternalTemplate"

export default function E911Travel(): JSX.Element {
  const title = "e911 Travelling"
  // "e911 Travelling"
  const slug = "e911/travel"
  // "e911/travel"

  return (
    <InternalTemplate title={title} slug={slug}>
      <E911TravelContent />
    </InternalTemplate>
  )
}

function E911TravelContent() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4 col-lg-3 asideColumn">
          <h4>e911</h4>
          <ul className="service-list">
            <li className="active">
              <a href="/e911/">e911 General</a>
            </li>
            <li>
              <a href="/e911/faqs/">e911 FAQs</a>
            </li>
            <li>
              <a href="/e911/tips/">e911 Tips</a>
            </li>
            <li>
              <a href="/e911/travel/">e911 Travelling</a>
            </li>
          </ul>
        </div>
        <div className="divider-lg visible-xs"></div>
        <div className="col-md-8 col-lg-9">
          <p className="text-left font18">
            <strong>Travelling with 911</strong>
          </p>

          <p className="text-left font18">
            {" "}
            • Unlike traditional phone lines, you can use your KOS VoIP phone
            almost anywhere. KOS VoIP service is portable to any location with
            broadband Internet access. Since KOS uses the address you provide to
            determine the nearest emergency response centre, when you move or
            travel with your phone adapter within Canada, you must update your
            new location. Regardless of the internet connection you may have
            while traveling, the emergency response centre may not receive your
            phone number or correct physical location information when you place
            a 9-1-1 call, so it is important you are ready to give them your
            current location.{" "}
          </p>

          <p className="text-left font18">
            {" "}
            • Kingston Online Services will provide you with a web portal to
            temporarily update you information should you choose to travel with
            your KOS phone. For temporary changes, the effects will only last
            for a maximum of 7 days. For permanent address changes you will need
            to contact Kingston Online Services directly, either by telephone or
            e-mail to update your permanent address information.
          </p>

          <p className="text-left font18">
            {" "}
            • It is also important to note that for customers traveling outside
            of Canada dialing 911 may not work and/or your address information
            may not be sent to the emergency response personnel, thus it is
            recommended you keep an additional method of contacting emergency
            services, or be prepared to tell the emergency services operator
            what your current location is.
          </p>

          <p className="text-left font18">
            {" "}
            • Please note that it can up 48 hours before your new settings take
            effect. Remember, when you make changes to your location, you will
            need to update your 911 information again.
          </p>
        </div>
      </div>
    </div>
  )
}
