import { InternalTemplate } from "@/components/InternalTemplate"

export default function Events(): JSX.Element {
  const title = (
    <>
      <span style={{ color: "#A80532" }}>News</span> & Events
    </>
  )
  // ???
  const slug = "news/events"
  // "news/events"

  return (
    <InternalTemplate title={title} slug={slug}>
      <EventsContent />
    </InternalTemplate>
  )
}

function EventsContent() {
  return (
    <div id="page-content">
      {/*Two Columns*/}
      <div className="block">
        <div className="container">
          <div className="flex flex-wrap">
            <div className="col-md-4 col-lg-3 asideColumn">
              <h4>News &amp; Events</h4>
              <ul className="service-list">
                <li>
                  <a href="#57">Fibre cut causing major outage **RESOLVED**</a>
                </li>
                <li>
                  <a href="#51">COVID-19</a>
                </li>
                <li>
                  <a href="#21">Unlimited Packages Now Available</a>
                </li>
                <li>
                  <a href="#19">Protect Your Identity</a>
                </li>
                <li>
                  <a href="#20">25 Years in Business</a>
                </li>
                <li>
                  <a href="#55">Thanksgiving</a>
                </li>
                <li>
                  <a href="#53">Canada Day</a>
                </li>
                <li>
                  <a href="#50">Family Day - Monday, February 17</a>
                </li>
                <li>
                  <a href="#56">Holiday Hours</a>
                </li>
                <li>
                  <a href="#49">Holiday Hours</a>
                </li>{" "}
              </ul>
            </div>
            <div className="divider-lg visible-xs" />
            <div className="col-md-8 col-lg-9">
              <div>
                <img
                  src="/assets/images/news/img_news.jpg"
                  className="img-responsive"
                  alt=""
                />
              </div>
              <div className="divider-xl" />
              <h1 className="text-center decor color">News &amp; Events</h1>
              <div className="divider" />
              <h5 className="color" id="57">
                Fibre cut causing major outage **RESOLVED**
              </h5>
              <p>
                Today's outage was resolved at 6:15pm. All towers are back
                online and are fully functional.
              </p>
              <div className="divider-line-sm" />
              <h5 className="color" id="51">
                COVID-19
              </h5>
              <p>
                With the significant and growing concern across North America of
                the COVID-19 (“coronavirus”) situation, we wish
                <br />
                to provide you on an update on how KOS is handling this
                situation as it relates to our customers and employees.
                <br />
                <br />
                We will remain fully operational. Our employees are equipped to
                work remotely from home. Our offices will be locked and we will
                only have limited staff members in our offices for equipement
                exchange and pick up only. Times for equipment exchanges and
                pick up must be arranged over the phone prior to coming to the
                office. <br />
                <br />
                During this unprecedented event, we will help to slow the spread
                of the virus by limiting our employees attending the workplace.
                We will be communicating with our employees on a regular basis,
                promoting social distancing and cancelling our business travel.
                <br />
                <br />
                We will reassess the COVID-19 situation and will provide an
                update if and when this situation changes.
              </p>
              <div className="divider-line-sm" />
              <h5 className="color" id="21">
                Unlimited Packages Now Available
              </h5>
              <p>
                <span
                  style={{
                    color: "#000000",
                    fontFamily: '"Open Sans", sans-serif',
                    fontSize: "15px",
                    backgroundColor: "#ffffff",
                  }}
                >
                  Enjoy unlimited data on our Cable and DSL services.
                </span>
              </p>
              <div className="divider-line-sm" />
              <h5 className="color" id="19">
                Protect Your Identity
              </h5>
              <p>
                Keep your identity safe!&nbsp;
                <span
                  style={{
                    color: "#000000",
                    fontFamily: '"Open Sans", sans-serif',
                    fontSize: "15px",
                  }}
                >
                  KOS will never ask for passwords, banking information or any
                  other personal data in unsolicited email.
                </span>
              </p>
              <p
                style={{
                  marginTop: "0px",
                  marginBottom: "22px",
                  fontSize: "15px",
                  lineHeight: "22px",
                  color: "#000000",
                  fontFamily: '"Open Sans", sans-serif',
                }}
              >
                If you receive such an email, it is&nbsp;
                <span style={{ fontWeight: "bold" }}>NOT</span>&nbsp;from KOS.
                Do not respond to it, just delete it.
              </p>
              <p
                style={{
                  marginTop: "0px",
                  marginBottom: "22px",
                  fontSize: "15px",
                  lineHeight: "22px",
                  color: "#000000",
                  fontFamily: '"Open Sans", sans-serif',
                }}
              >
                If you are unsure, please contact our office.
              </p>
              <div className="divider-line-sm" />
              <h5 className="color" id="20">
                25 Years in Business
              </h5>
              <p>
                <a
                  style={{
                    boxSizing: "border-box",
                    backgroundColor: "#ffffff",
                    color: "#000000",
                    textDecoration: "none",
                    fontFamily: '"Open Sans", sans-serif',
                    fontSize: "15px",
                    fontStyle: "normal",
                    fontVariantLigatures: "normal",
                    fontVariantCaps: "normal",
                    fontWeight: 500,
                    letterSpacing: "normal",
                    orphans: 2,
                    textAlign: "start",
                    textIndent: "0px",
                    textTransform: "none",
                    whiteSpace: "normal",
                    widows: 2,
                    wordSpacing: "0px",
                  }}
                  id="packages"
                >
                  packages
                </a>
              </p>
              <p>
                <span
                  style={{
                    color: "#000000",
                    fontFamily: '"Open Sans", sans-serif',
                    fontSize: "15px",
                    backgroundColor: "#ffffff",
                  }}
                >
                  We would like to extend a warm thank you to our loyal
                  customers and welcome new customers like you.
                </span>
              </p>
              <div className="divider-line-sm" />
              <h5 className="color" id="55">
                Thanksgiving
              </h5>
              <p>
                KOS will be limited to technical support only on Monday, October
                12 for Thanksgiving. Technical support will be available from
                10:00am - 4:00pm. Our{" "}
                <a
                  href="https://kos.net/contact.php"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span style={{ color: "#0000ff" }}>
                    regular business hours
                  </span>
                </a>{" "}
                will resume Tuesday, October 13.
              </p>
              <div className="divider-line-sm" />
              <h5 className="color" id="53">
                Canada Day
              </h5>
              <p>
                KOS will be limited to technical support only on Wednesday, July
                1 for the Canada Day holiday. Our technical support hours will
                be 10am - 4pm. Our{" "}
                <a
                  href="https://kos.net/contact.php"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span style={{ color: "#0000ff" }}>
                    regular business hours
                  </span>
                </a>{" "}
                will resume July 2, 2020
              </p>
              <div className="divider-line-sm" />
              <h5 className="color" id="50">
                Family Day - Monday, February 17
              </h5>
              <p>
                Our offices will be closed on Monday, February 17, 2020 for
                Family Day. Technical Support will be available from 10am - 4pm.
                Our{" "}
                <a href="../contact.php">
                  <span style={{ color: "#0000ff" }}>
                    regular business hours
                  </span>
                </a>{" "}
                will resume on Tuesday, February 18, 2020.
              </p>
              <div className="divider-line-sm" />
              <h5 className="color" id="56">
                Holiday Hours
              </h5>
              <p>
                We will have reduced office hours over the holidays. Technical
                support will be available by phone or email on December 26, 2020
                and January 1, 2021.
                <br />
                <br />
                December 24 9:00am - 2:00pm
                <br />
                <br />
                December 25 CLOSED
                <br />
                <br />
                December 26 10am - 4pm Technical Support Only
                <br />
                <br />
                December 27{" "}
                <span style={{ color: "#0000ff" }}>
                  <a style={{ color: "#0000ff" }} href="../contact.php">
                    Regular Business Hours
                  </a>
                </span>
              </p>
              <p>December 28 10am - 2pm Accounts / 10am - 4pm Tech Support</p>
              <p>
                December 29 and 30{" "}
                <span style={{ color: "#0000ff" }}>
                  <a style={{ color: "#0000ff" }} href="../contact.php">
                    Regular Business Hours
                  </a>
                </span>
              </p>
              <p>
                December 31 9:00am - 3:00pm
                <br />
                <br />
                January 1&nbsp; 10am - 4pm Technical Support Only
                <br />
                <br />
                January 2 -{" "}
                <a href="../contact.php">
                  <span style={{ color: "#0000ff" }}>
                    Regular Business Hours
                  </span>
                </a>{" "}
                Resume
              </p>
              <div className="divider-line-sm" />
              <h5 className="color" id="49">
                Holiday Hours
              </h5>
              <p>
                We will have reduced office hours over the holidays. Technical
                support will be available by phone or email on December 26, 2019
                and January 1, 2020.
                <br />
                <br />
                December 24 9:00am - 2:00pm
                <br />
                <br />
                December 25 CLOSED
                <br />
                <br />
                December 26 10am - 4pm Technical Support Only
                <br />
                <br />
                December 27{" "}
                <span style={{ color: "#0000ff" }}>
                  <a style={{ color: "#0000ff" }} href="../contact.php">
                    Regular Business Hours
                  </a>
                </span>{" "}
                Resume Until December 31st
                <br />
                <br />
                December 31 9:00am - 3:00pm
                <br />
                <br />
                January 1&nbsp; 10am - 4pm Technical Support Only
                <br />
                <br />
                January 2 -{" "}
                <a href="../contact.php">
                  <span style={{ color: "#0000ff" }}>
                    Regular Business Hours
                  </span>
                </a>{" "}
                Resume
              </p>
              <div className="divider-line-sm" />
              <div className="form-popup-wrap form-popup-wrap-full">
                <div className="text-center">
                  <a href="/order/" className="btn btn-orange">
                    <span>Get Connected</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* //Two Columns*/}
    </div>
  )
}
