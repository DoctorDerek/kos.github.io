export default function ResolutionServices() {
  return (
    <div className="container">
      <h1 className="text-center decor color">Resolution Services</h1>
      <div>
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <h4>
                <span style={undefined}>Resolution Form</span>
              </h4>
              <p>
                At KOS we are constantly striving to provide our customers with
                excellent local support and service. If you feel that you have
                an issue with your service that you would like to address with
                us, please follow the steps below so that we can work together
                to reach a resolution. We value our customers and their input.
                We listen carefully to your concerns in order to provide you
                with the best direction and support that we can.
              </p>

              <p>
                <u>
                  <b>Step 1.</b>
                </u>
              </p>

              <p>
                <b>Contact our local Customer Service team.</b> To start the
                process immediately and help us address your concern, please
                contact our friendly and knowledgeable local customer service
                team. Our hours of operation and contact information can be
                found{" "}
                <a href="https://www.kos.net/contact.php">
                  <font color="#0000ff">here</font>
                </a>{" "}
                You may also email your concern to
                <a href="mailto:resolution@kos.net">
                  <font color="#0000ff">resolution@kos.net</font>
                </a>{" "}
                where it will be reviewed promptly.
              </p>

              <p>
                <b>Open a technical support ticket.</b> If your concern is of a
                technical nature and you require technical support, the hours of
                operation and contact information for our technical support team
                can be found{" "}
                <a href="https://www.kos.net/contact.php">
                  <font color="#0000ff">here</font>
                </a>
                . Alternatively, you may send an e-mail to the technical support
                team. Current KOS customers can quickly and easily open a
                support ticket{" "}
                <a href="https://support.kos.net/helpdesk/index.php?action=submit">
                  here
                </a>{" "}
                for our team to review. Please include as much relevant detail
                in your e-mail as you can to help our team assess your concern.
              </p>
              <p>
                {" "}
                Sometimes technical issues can be a result of a device or a
                service that is part of your own personal home network. Please
                check your devices to make sure they are functioning properly.
                If you are not sure, you can contact the device manufacturer or
                service provider (for services not provided by KOS) for
                additional support.
              </p>

              <p>
                <b>Concerns about your bill?</b> If you have questions or
                concerns about your bill, you can contact our billing team by
                phone
                <a href="https://www.kos.net/contact.php">
                  <font color="#0000ff">https://www.kos.net/contact.php</font>
                </a>{" "}
                or by sending us an e-mail to
                <a href="mailto:resolution@kos.net">
                  <font color="#0000ff">resolution@kos.net</font>
                </a>
                . Please be as specific as you can so that our service team can
                begin to review your account and account details right away.
                We've built our service agreements to be helpful and
                user-friendly, so reviewing your agreement with KOS may help
                clarify some of the billing terms for you.
              </p>
              <p>
                <u>
                  <b>Step 2.</b>
                </u>
              </p>

              <p>
                <b>Escalation to a Senior Team Member.</b> If you feel that you
                have not received a satisfactory resolution after working
                through the appropriate previous step in this process you may
                ask a member of the service team to escalate your concern to a
                senior service team member. A member of this team will be in
                touch with you in 1 to 2 business days upon receipt of your
                escalation request to discuss your concern and to do their best
                to find an appropriate resolution. Most concerns we receive are
                resolved by a Senior Team Member. If your issue cannot be
                resolved by this team, please proceed to Step #3 of this
                process.
              </p>

              <p>
                <u>
                  <b>Step 3.</b>
                </u>
              </p>

              <p>
                <b>Escalation to a Manager.</b> If you are still dissatisfied
                after speaking with a Senior Team member, you can send your
                concern to a Manager by completing the form below. The
                appropriate Manager will review your submission and will provide
                a response within 3 business days.
              </p>
              <form
                name="contactform"
                method="post"
                action="/send_form_email.php"
              >
                <div className="inputs-col">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="input-wrapper">
                        <label>
                          Account Holder Name{" "}
                          <span className="required">*</span>
                        </label>
                        <input
                          type="text"
                          className="input-custom input-full"
                          name="name"
                          placeholder="Your name"
                          style='background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAfBJREFUWAntVk1OwkAUZkoDKza4Utm61iP0AqyIDXahN2BjwiHYGU+gizap4QDuegWN7lyCbMSlCQjU7yO0TOlAi6GwgJc0fT/fzPfmzet0crmD7HsFBAvQbr /crw+Gw5fu+AfOYvgylJ4TwCoVCs1ardYTruqfj8fgV5OUMSVVT93VdP9dAzpVvm5wJHZFbg2LQ2pEYOlZ/oiDvwNcsFoseY4PBwMCrhaeCJyKWZU37KOJcYdi27QdhcuuBIb073BvTNL8ln4NeeR6NRi/wxZKQcGurQs5oNhqLshzVTMBewW/LMU3TTNlO0ieTiStjYhUIyi6DAp0xbEdgTt+LE0aCKQw24U4llsCs4ZRJrYopB6RwqnpA1YQ5NGFZ1YQ41Z5S8IQQdP5laEbr /JcD4Vj5DEsW2gE6s6g3d/YP/g+BDnT7GNi2qCjTwGd6riBzHaaCEd3Js01vwCPIbmWbr /x1nwAN/1ov+/drgFWIlfKpVukyYihtgkXNp4mABK+1GtVr+SBhJDbBIubVw+Cd/TDgKO2DPiN3YUo6y/nDCNEIsqTKH1en2tcwA9FKEItyDi3aIh8Gl1sRrVnSDzNFDJT1bAy5xpOYGn5fP5JuL95ZjMIn1ya7j5dPGfv0A5eAnpZUY3n5jXcoec5J67D9q+VuAPM47D3XaSeL4AAAAASUVORK5CYII="); background-repeat: no-repeat; background-attachment: scroll; background-size: 16px 18px; background-position: 98% 50%;'
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="input-wrapper">
                        <label>
                          Phone <span className="required">*</span>
                        </label>
                        <input
                          type="text"
                          className="input-custom input-full"
                          name="phone"
                          placeholder="(555) 555-5555"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="input-wrapper">
                    <label>
                      Email <span className="required">*</span>
                    </label>
                    <input
                      type="text"
                      className="input-custom input-full"
                      name="email"
                      placeholder="xxxx@xxxx.xxx"
                    />
                  </div>
                </div>
                <div>
                  <label>
                    Message <span className="required">*</span>
                  </label>
                  <textarea
                    className="textarea-custom input-full"
                    name="message"
                  ></textarea>
                </div>

                <button type="submit" id="submit" className="btn">
                  Send Message
                </button>
              </form>

              <p style={undefined}>
                <font face="Times New Roman, serif">
                  <font size="3" style={undefined}>
                    <font face="Arial, serif">
                      <font size="2" style={undefined}>
                        <br />
                        <img
                          src="data:image/png;base64,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"
                          name="Picture 1"
                          align="bottom"
                          width="170"
                          height="52"
                          border="0"
                        />
                        <br />
                      </font>
                    </font>
                    <b>
                      <font face="Arial, serif">
                        <font size="2" style={undefined}>
                          Commission for Complaints for Telecom-television
                          Services (CCTS){" "}
                        </font>
                      </font>
                    </b>
                    <font face="Arial, serif">
                      <font size="2" style={undefined}>
                        <br />
                      </font>
                    </font>
                    <em>
                      <font face="Arial, serif">
                        <font size="2" style={undefined}>
                          CCTS is an independent agency whose mandate is to
                          resolve complaints of consumers about their telecom
                          and TV services, and complaints of small business
                          customers about their telecom services, free of
                          charge. If you have a complaint about your telephone,
                          wireless, internet or TV service, you must first try
                          to resolve it directly with your service provider. If
                          you have done so and have been unable to reach a
                          satisfactory resolution, CCTS may be able to help you.
                        </font>
                      </font>
                    </em>
                  </font>
                </font>
              </p>
              <p style={undefined}>
                <font face="Times New Roman, serif">
                  <font size="3" style={undefined}>
                    <em>
                      <font face="Arial, serif">
                        <font size="2" style={undefined}>
                          To learn more about CCTS, you may visit its website
                          at&nbsp;
                        </font>
                      </font>
                    </em>
                    <em>
                      <a href="http://www.ccts-cprst.ca">
                        <font color="#0000ff">
                          <font face="Arial, serif">
                            <font size="2" style={undefined}>
                              <u>www.ccts-cprst.ca&nbsp;</u>
                            </font>
                          </font>
                        </font>
                      </a>
                    </em>
                    <em>
                      <font face="Arial, serif">
                        <font size="2" style={undefined}>
                          or call toll-free at 1-888-221-1687.
                        </font>
                      </font>
                    </em>
                  </font>
                </font>
              </p>
              <p style={undefined}>
                <br />
                <br />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
