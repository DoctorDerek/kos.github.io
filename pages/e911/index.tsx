import { InternalTemplate } from "@/layouts/InternalTemplate"

export default function E911(): JSX.Element {
  const title = "e911"
  // "e911"
  const slug = "e911"
  // "e911"

  return (
    <InternalTemplate title={title} slug={slug}>
      <E911Content />
    </InternalTemplate>
  )
}

function E911Content() {
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
            It is important that you keep your current address up to date, that
            way 911 emergency services will know exactly, where you are calling
            from at all times. Because the phone call is over the internet, the
            method in which your address is sent to the emergency dispatch works
            differently, and relies on the caller to be actively submitting
            accurate and current address information.
          </p>

          <p className="text-left font18">
            All VoIP calls depend on having an active internet connection, this
            includes VoIP 911 calls. Additionally your internet connection is
            dependent on the activity your internet service provides, which too
            can be affected by blackouts, environmental disruption and
            service-wide outages. These effects have the ability to reduce the
            VoIP 911 service to unavailable. Additionally your KOS home phone
            VoIP 911 service will not work in the event of a power outage,
            broadband service outage, or suspension or disconnection of your
            service because of billing issues.
          </p>

          <p className="text-left font18">
            The VoIP 911 service that is provided is a highly tested and
            efficient system and it has been implemented by service
            professionals over several years. The condition for having and
            benefitting from the VoIP 911 service is to keep accurate and up to
            date address information at all time.
          </p>

          <p className="text-left font18">
            The most significant differences between VoIP 911 services and
            standard 911 services are that the actual calls are made using two
            distinctly different methods. VoIP 911 uses the internet as its data
            medium, while standard 911 uses traditional telephone lines. Since
            there are differences between the two 911 services, it is important
            to prepare yourself as these differences could potentially cause a
            problem to your connection. The best and utmost important thing to
            know is always have a plan.
          </p>

          <p className="text-left font18">
            Because of the potential that your information is not current or
            correctly entered the emergency dispatch personnel will ask you for
            your location and situation. This may at the time feel overwhelming,
            but remember to stay calm, others may be counting on you, and the
            emergency dispatch operator is there to help. It is also important
            to remember that in a service or power outages; you will be unable
            to use your VoIP phone, so remember your plan, and what you will be
            asked; where I am, who I am and what’s happening.
          </p>

          <p className="text-left font18">
            In order to subscribe to the VoIP service it is your obligation to
            inform all users or potential users of the VoIP 911 service
            including the nature and limitations which have been outlined, as
            well as keep your address information up to date at all times.
          </p>

          <p className="text-left font18">
            We take absolutely no responsibility should you or anyone with
            contact of the VoIP service or VoIP 911 calls become injured,
            damaged or perishes, to which you or anyone is reporting the damages
            to a third party. Kingston Online Services is absolved of any
            responsibility should the VoIP service including the VoIP 911
            service is abused or mishandled under any circumstances.
            Additionally Kingston Online Services will take no responsibility
            should any user data be incorrect and/or maliciously entered
            resulting in damages or injury including death.
          </p>

          <p className="text-left font18">
            New registrations will result in 911 being available immediately.
            However, for at least 48 hours the user data may not be available.
            Therefore, you may need to confirm your location or have an
            additional method of contacting Emergency Response Personnel.
          </p>
        </div>
      </div>
    </div>
  )
}
