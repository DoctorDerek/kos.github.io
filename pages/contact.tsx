export default function index() {
  return (
    <div id="page-content">
      {/* SOF Contact Block */}
      <div className="block">
        <div className="container">
          <h1 className="text-center decor color">Contact Us</h1>
          <h4 className="text-center">
            Our offices are currently closed to walk-in traffic
          </h4>
          <h5 className="text-center">
            Technical Support will be available on Family Day (Monday, February
            15) from 10:00am - 4:00pm.
          </h5>
          <div className="row">
            <div className="col-sm-3 col-md-3">
              <div className="address">
                {/* <div><img src="https://kos.net/images/logo.png" class="img-responsive" alt="" /></div> */}
                <div className="divider-sm" />
                <div className="address-block">
                  <i className="icon icon-location" />
                  <h6 className="text-uppercase">Kingston</h6>
                  The LaSalle Mews
                  <br />
                  303 Bagot Street, 16A
                  <br />
                  Kingston, ON K7K 5W7 <br />
                </div>
                <div className="address-block">
                  <i className="icon icon-call-telephone" />
                  <h6 className="text-uppercase">Call us</h6>
                  <strong>613-549-8667</strong>
                </div>
                <div className="divider-sm" />
                <div className="address-block">
                  <i className="icon icon-clock-round" />
                  <h6 className="text-uppercase">Office Hours</h6>
                  Monday-Friday: 9am – 6pm
                  <br />
                  Saturday: Closed <br />
                  Sunday: Closed <br />
                  <br />
                  <h6 className="text-uppercase">Tech Support</h6>
                  Monday-Friday: 9am – 8pm
                  <br />
                  Saturday: 10am – 4:30pm
                  <br />
                  Sunday: 12pm – 6pm{" "}
                </div>
              </div>
              <div className="divider" />
            </div>
            <div className="col-sm-1 visible-lg" />
            <div className="col-sm-4 col-md-4">
              <form
                id="contactform"
                className="contact-form"
                name="contactform"
                method="post"
              >
                <div id="success">
                  <p>Your message was sent successfully!</p>
                </div>
                <div id="error">
                  <p>
                    Something went wrong, try refreshing and submitting the form
                    again.
                  </p>
                </div>
                <div className="inputs-col">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="input-wrapper">
                        <label htmlFor="name">
                          Name <span className="required">*</span>
                        </label>
                        <input
                          type="text"
                          className="input-custom input-full"
                          name="name"
                          id="name"
                          placeholder="Your name"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="input-wrapper">
                        <label htmlFor="phone">Phone</label>
                        <input
                          type="text"
                          className="input-custom input-full"
                          name="phone"
                          id="phone"
                          placeholder="(555) 555-5555"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="input-wrapper">
                    <label htmlFor="email">Email</label>
                    <input
                      type="text"
                      className="input-custom input-full"
                      name="email"
                      id="email"
                      placeholder="xxxx@xxxx.xxx"
                    />
                  </div>
                </div>
                <div>
                  <b>How did you hear about us:</b>
                  <select className="input-custom input-full" name="how">
                    <option value="">Please select one...</option>
                    <option value="Current KOS user">Current KOS user</option>
                    <option value="Family or Friend">Family or Friend</option>
                    <option value="Radio Ad">Radio Ad</option>
                    <option value="Print Ad">Print Ad</option>
                    <option value="Internet Search">Internet Search</option>
                    <option value="Social Media">Social Media</option>
                    <option value="Direct Mail">Direct Mail</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message">Message</label>
                  <textarea
                    className="textarea-custom input-full"
                    name="message"
                    id="message"
                    defaultValue={""}
                  />
                </div>
                <button type="submit" id="submit" className="btn">
                  Send Message
                </button>
              </form>
            </div>
            <div className="col-sm-1 visible-lg" />
            <div className="col-sm-4 col-md-3">
              <div className="address">
                {/* <div><img src="https://kos.net/images/logo.png" class="img-responsive" alt="" /></div> */}
                <div className="divider-sm" />
                <div className="address-block">
                  <i className="icon icon-location" />
                  <h6 className="text-uppercase">Belleville</h6>
                  183 Front Street
                  <br />
                  (near City Hall)
                  <br />
                  Belleville, ON K8N 2Y9
                </div>
                <div className="address-block">
                  <i className="icon icon-call-telephone" />
                  <h6 className="text-uppercase">Call us</h6>
                  <strong>613-968-7137</strong>
                </div>
                <div className="divider-sm" />
                <div className="address-block">
                  <i className="icon icon-clock-round" />
                  <h6 className="text-uppercase">Office Hours</h6>
                  Monday-Friday: 9am – 5:30pm (Closed 12:30pm - 1pm)
                  <br />
                  Saturday: Closed <br />
                  Sunday: Closed <br />
                  <br />
                  <h6 className="text-uppercase">Tech Support</h6>
                  Monday-Friday: 9am – 8pm
                  <br />
                  Saturday: 10am – 4:30pm
                  <br />
                  Sunday: 12pm – 6pm <br />
                </div>
              </div>
              <div className="divider" />
            </div>
          </div>
        </div>
      </div>
      {/* // EOF Block */}
    </div>
  )
}
