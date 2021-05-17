import { InternalTemplate } from "@/components/InternalTemplate"

export default function E911FAQs(): JSX.Element {
  const title = "e911 FAQs"
  // "Registering a Domain"
  const slug = "e911/faqs"
  // "e911/faqs"

  return (
    <InternalTemplate title={title} slug={slug}>
      <E911FAQsContent />
    </InternalTemplate>
  )
}

function E911FAQsContent() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4 col-lg-3 asideColumn">
          <h4>e911</h4>
          <ul className="service-list">
            <li>
              <a href="/e911/">e911 General</a>
            </li>
            <li className="active">
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
          <p>
            The following are some frequently asked questions to help you better
            understand the available VoIP 911 on the (Client) home phone service
            and your responsibilities in having it.
          </p>

          <div className="panel-group">
            <div className="faq-item">
              <div className="panel">
                <div className="panel-heading">
                  <h4 className="panel-title">
                    <a role="button" data-toggle="collapse" href="#faq1">
                      Do I get access to 911 services?
                      <span className="caret-toggle closed">–</span>
                      <span className="caret-toggle opened">+</span>
                      <span className="number">1</span>
                    </a>
                  </h4>
                </div>
                <div id="faq1" className="panel-collapse collapse in">
                  <div className="panel-body">
                    <p>
                      Yes as a (Client) home phone user, you get access to VoIP
                      911 services, only if you have given consent to (Client)
                      to forward your private user data to the emergency
                      dispatch center, provided that data is accurate and
                      correct, which will be certified by our (Client) home
                      phone support staff, once certified you will be able to
                      successfully dial 911 and receive the emergency response
                      services.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="faq-item">
              <div className="panel">
                <div className="panel-heading">
                  <h4 className="panel-title">
                    <a
                      role="button"
                      data-toggle="collapse"
                      href="#faq2"
                      className="collapsed"
                    >
                      What is the difference between VoIP 911 and traditional
                      911?
                      <span className="caret-toggle closed">–</span>
                      <span className="caret-toggle opened">+</span>
                      <span className="number">2</span>
                    </a>
                  </h4>
                </div>
                <div id="faq2" className="panel-collapse collapse">
                  <div className="panel-body">
                    <p>
                      The VoIP 911 service that (Client) home phone provides has
                      certain limitations relative to traditional 911 services
                      that are available on most traditional telephone services,
                      in that your client information is being sent over the
                      internet rather then over a traditional phone line,
                      meaning a different method is required to send this client
                      information accurately.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="faq-item">
              <div className="panel">
                <div className="panel-heading">
                  <h4 className="panel-title">
                    <a
                      role="button"
                      data-toggle="collapse"
                      href="#faq3"
                      className="collapsed"
                    >
                      What should I say to the operator or whoever picks up?
                      <span className="caret-toggle closed">–</span>
                      <span className="caret-toggle opened">+</span>
                      <span className="number">3</span>
                    </a>
                  </h4>
                </div>
                <div id="faq3" className="panel-collapse collapse">
                  <div className="panel-body">
                    <p>
                      Be prepared to confirm your location and telephone number
                      with the operator who answers the 911 call since the
                      operator may not have this information. It is also
                      recommended to keep in mind who your VoIP provider is
                      because if necessary, the central call centers can contact
                      them in severe emergency situations. It is also encouraged
                      to not hang up until told to do so, and to call back if
                      you get disconnected, as immediately as possible.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="faq-item">
              <div className="panel">
                <div className="panel-heading">
                  <h4 className="panel-title">
                    <a
                      role="button"
                      data-toggle="collapse"
                      href="#faq4"
                      className="collapsed"
                    >
                      Is there ever a possibility my 911 service won’t work?
                      <span className="caret-toggle closed">–</span>
                      <span className="caret-toggle opened">+</span>
                      <span className="number">4</span>
                    </a>
                  </h4>
                </div>
                <div id="faq4" className="panel-collapse collapse">
                  <div className="panel-body">
                    <p>
                      VoIP 911 service may not be available during a power
                      outage and will be unavailable during a broadband internet
                      outage.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="faq-item">
              <div className="panel">
                <div className="panel-heading">
                  <h4 className="panel-title">
                    <a
                      role="button"
                      data-toggle="collapse"
                      href="#faq5"
                      className="collapsed"
                    >
                      Why is it important to keep my 911 information up-to-date?
                      <span className="caret-toggle closed">–</span>
                      <span className="caret-toggle opened">+</span>
                      <span className="number">5</span>
                    </a>
                  </h4>
                </div>
                <div id="faq5" className="panel-collapse collapse">
                  <div className="panel-body">
                    <p>
                      Keeping updated information is a way of ensuring that your
                      location information is kept current with your VoIP
                      service provider. Since the operator may assume that you
                      are at the last registered address if you are not able to
                      speak during a 911 call, this information is used to
                      accurately connect you to the appropriate emergency
                      response center, and subsequently the appropriate
                      emergency response.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="faq-item">
              <div className="panel">
                <div className="panel-heading">
                  <h4 className="panel-title">
                    <a
                      role="button"
                      data-toggle="collapse"
                      href="#faq7"
                      className="collapsed"
                    >
                      How do I keep this information up-to-date?
                      <span className="caret-toggle closed">–</span>
                      <span className="caret-toggle opened">+</span>
                      <span className="number">7</span>
                    </a>
                  </h4>
                </div>
                <div id="faq7" className="panel-collapse collapse">
                  <div className="panel-body">
                    <p>
                      As a (Client) home phone user the information is easily
                      changed by calling into the (Client) home phone call
                      center, and or changing and resubmitting the information
                      online.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="faq-item">
              <div className="panel">
                <div className="panel-heading">
                  <h4 className="panel-title">
                    <a
                      role="button"
                      data-toggle="collapse"
                      href="#faq8"
                      className="collapsed"
                    >
                      How do I keep this information up-to-date?
                      <span className="caret-toggle closed">–</span>
                      <span className="caret-toggle opened">+</span>
                      <span className="number">8</span>
                    </a>
                  </h4>
                </div>
                <div id="faq8" className="panel-collapse collapse">
                  <div className="panel-body">
                    <p>
                      E911 stands for Enhance 911. It is an enhanced version of
                      the 911 emergency services, and is provided by the
                      (Client) home phone service. When you use this service,
                      your personal information like name and address are
                      automatically given to your local dispatch center or
                      Public Safety Answering Point (PSAP) over the internet.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
