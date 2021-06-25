import Link from "@/components/Link"
import { InternalTemplate } from "@/layouts/InternalTemplate"

export default function SupportFAQs(): JSX.Element {
  const title = (
    <>
      Support <span style={{ color: "#A80532" }}>FAQs</span>
    </>
  )
  // "" [no page title previously]
  const slug = "support/faqs"
  // "support/faqs"

  return (
    <InternalTemplate title={title} slug={slug}>
      <SupportFAQsContent />
    </InternalTemplate>
  )
}

function SupportFAQsContent() {
  return (
    <div className="container">
      <h1 className="text-center decor color">Quick Support / FAQs</h1>
      <div className="panel-group">
        <div className="faq-item">
          <div className="panel">
            <div className="panel-heading">
              <h4 className="panel-title">
                <Link className="button" href="#faq1">
                  Protect Your Identity
                  <span className="caret-toggle closed">–</span>
                  <span className="caret-toggle opened">+</span>
                  <span className="number">1</span>
                </Link>
              </h4>
            </div>
            <div id="faq1" className="panel-collapse collapse in">
              <div className="panel-body">
                <p>
                  KOS will never ask for passwords, banking information or any
                  other personal data in unsolicited email. If you recevie such
                  an email, it is NOT from KOS. Do not respond to it and delete
                  it. If you are unsure, please contact our office.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="faq-item">
          <div className="panel">
            <div className="panel-heading">
              <h4 className="panel-title">
                <Link href="#faq2" className="collapsed">
                  How do I check my data usage?
                  <span className="caret-toggle closed">–</span>
                  <span className="caret-toggle opened">+</span>
                  <span className="number">2</span>
                </Link>
              </h4>
            </div>
            <div id="faq2" className="panel-collapse collapse ">
              <div className="panel-body">
                <p>
                  To check your monthly bandwidth usage, you can do so by going
                  to{" "}
                  <Link
                    href="https://usage.kos.net/"
                    aria-label="KOS Data Usage"
                  >
                    https://usage.kos.net (KOS Data Usage)
                  </Link>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="faq-item">
          <div className="panel">
            <div className="panel-heading">
              <h4 className="panel-title">
                <Link href="#faq3" className="collapsed">
                  Dial-Up Connection Phone Numbers
                  <span className="caret-toggle closed">–</span>
                  <span className="caret-toggle opened">+</span>
                  <span className="number">3</span>
                </Link>
              </h4>
            </div>
            <div id="faq3" className="panel-collapse collapse ">
              <div className="panel-body">
                <p>
                  Kingston Online Services has a local number in Kingston and
                  Belleville.&nbsp;
                </p>
                <p>
                  <strong>Kingston</strong>: 613.547.3005
                </p>
                <p>
                  <strong>Belleville</strong>: 613.969.1435
                </p>
                <p>
                  <em>
                    <strong>Please note</strong>
                  </em>
                  : Adding 1 to the beginning of the phone numbers, may result
                  in long distance charges.
                </p>
                <p>&nbsp;</p>
              </div>
            </div>
          </div>
        </div>
        <div className="faq-item">
          <div className="panel">
            <div className="panel-heading">
              <h4 className="panel-title">
                <Link href="#faq4" className="collapsed">
                  What is a GB?
                  <span className="caret-toggle closed">–</span>
                  <span className="caret-toggle opened">+</span>
                  <span className="number">4</span>
                </Link>
              </h4>
            </div>
            <div id="faq4" className="panel-collapse collapse ">
              <div className="panel-body">
                <p>A gigabyte is approximately 1,000 megabytes.</p>
                <p>
                  Each of these activities represents approximately 1 gigabyte
                  of usage:&nbsp;
                </p>
                <ul>
                  <li>View 26,000 Web pages OR</li>
                  <li>Send 105,000 e-mails OR</li>
                  <li>
                    Attach over 2,000 Microsoft Word documents (of about 10
                    pages each) OR
                  </li>
                  <li>Receive up to 500 digital photos OR</li>
                  <li>Download more than 200 songs OR</li>
                  <li>Stream 18 hours of music from the Web OR</li>
                  <li>
                    Download 1.5 movies (or 2/3 of a movie in high definition)
                    OR
                  </li>
                  <li>Play games online for 240 hours (or 10 days) OR</li>
                  <li>Stream 1 hour of Netfiix Standard Definition Video</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
