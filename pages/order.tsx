export default function index() {
  return (
    <div id="page-content">
      {/* SOF Contact Block */}
      <div className="block">
        <div className="container">
          <h1 className="text-center decor color">Order Form</h1>
          <div>
            <div className="container">
              <div className="row">
                <div className="col-sm-12">
                  {/* SOF FORM */}
                  <h4>
                    <span className="text-white">ORDER FORM</span>
                  </h4>
                  <p>
                    Place your order and a KOS sales specialist will contact you
                    shortly to get your payment information and book your
                    service appointment. Thank you for choosing KOS Internet.
                  </p>
                  <form
                    className="order-request-form-js"
                    id="orderRequestFormSimple"
                    method="post"
                  >
                    <input
                      type="hidden"
                      id="formtype"
                      defaultValue="orderform"
                    />
                    <div className="successform">
                      <p>Your message was sent successfully!</p>
                    </div>
                    <div className="errorform">
                      <p>
                        Something went wrong, try refreshing and submitting the
                        form again.
                      </p>
                    </div>
                    <input
                      className="input-custom input-full"
                      type="text"
                      id="name"
                      placeholder="Name:"
                    />
                    <input
                      className="input-custom input-full"
                      type="text"
                      id="address"
                      placeholder="Address:"
                    />
                    <input
                      className="input-custom input-full"
                      type="text"
                      id="city"
                      placeholder="City:"
                    />
                    <input
                      className="input-custom input-full"
                      type="text"
                      id="postal"
                      placeholder="Postal Code:"
                    />
                    <input
                      className="input-custom input-full"
                      type="text"
                      id="phone"
                      placeholder="Phone:"
                    />
                    <input
                      className="input-custom input-full"
                      type="text"
                      id="email"
                      placeholder="Email:"
                    />
                    <div className="margin10">
                      <label>
                        <input
                          type="radio"
                          id="customer_type"
                          defaultValue="Residential Customer"
                          style={{
                            border: "2px dotted #00f",
                            background: "#ff0000",
                          }}
                        />{" "}
                        <span style={{ fontSize: "16px", fontWeight: 400 }}>
                          RESIDENTIAL
                        </span>{" "}
                        &nbsp;{" "}
                      </label>
                      <label>
                        <input
                          type="radio"
                          id="customer_type"
                          name="customer_type"
                          defaultValue="Business Customer"
                          style={{
                            border: "2px dotted #00f",
                            background: "#ff0000",
                          }}
                        />{" "}
                        <span style={{ fontSize: "16px", fontWeight: 400 }}>
                          BUSINESS
                        </span>{" "}
                        &nbsp;{" "}
                      </label>
                    </div>
                    <div id="residential_options" className="margin10">
                      <label>
                        <input
                          type="checkbox"
                          id="customer_option_dsl"
                          name="customer_option_dsl"
                          defaultValue="DSL Information Selected"
                          style={{
                            border: "2px dotted #00f",
                            background: "#ff0000",
                          }}
                        />{" "}
                        DSL &nbsp;{" "}
                      </label>
                      <label>
                        <input
                          type="checkbox"
                          id="customer_option_cab"
                          name="customer_option_cab"
                          defaultValue="Cable Information Selected"
                          style={{
                            border: "2px dotted #00f",
                            background: "#ff0000",
                          }}
                        />{" "}
                        CABLE &nbsp;{" "}
                      </label>
                      <label>
                        <input
                          type="checkbox"
                          id="customer_option_wir"
                          name="customer_option_wir"
                          defaultValue="Wireless Information Selected"
                          style={{
                            border: "2px dotted #00f",
                            background: "#ff0000",
                          }}
                        />{" "}
                        WIRELESS &nbsp;{" "}
                      </label>
                      <label>
                        <input
                          type="checkbox"
                          id="customer_option_voi"
                          defaultValue="VoIP Information Selected"
                          style={{
                            border: "2px dotted #00f",
                            background: "#ff0000",
                          }}
                        />{" "}
                        VoIP &nbsp;{" "}
                      </label>
                      <label>
                        <input
                          type="checkbox"
                          id="customer_option_dia"
                          name="customer_option_dia"
                          defaultValue="Dial Up Information Selected"
                          style={{
                            border: "2px dotted #00f",
                            background: "#ff0000",
                          }}
                        />{" "}
                        DIAL UP &nbsp;{" "}
                      </label>
                      <label>
                        <input
                          type="checkbox"
                          id="customer_option_hos"
                          defaultValue="Hosting Information Selected"
                          style={{
                            border: "2px dotted #00f",
                            background: "#ff0000",
                          }}
                        />{" "}
                        HOSTING &nbsp;{" "}
                      </label>
                    </div>
                    <div
                      id="business_options"
                      style={{ display: "none" }}
                      className="margin10"
                    >
                      <label>
                        <input
                          type="checkbox"
                          id="bus_customer_option_dsl"
                          name="bus_customer_option_dsl"
                          defaultValue="DSL Information Selected"
                          style={{
                            border: "2px dotted #00f",
                            background: "#ff0000",
                          }}
                        />{" "}
                        DSL &nbsp;{" "}
                      </label>
                      <label>
                        <input
                          type="checkbox"
                          id="bus_customer_option_cab"
                          defaultValue="Cable Information Selected"
                          style={{
                            border: "2px dotted #00f",
                            background: "#ff0000",
                          }}
                        />{" "}
                        CABLE &nbsp;{" "}
                      </label>
                      <label>
                        <input
                          type="checkbox"
                          id="bus_customer_option_wir"
                          defaultValue="Wireless Information Selected"
                          style={{
                            border: "2px dotted #00f",
                            background: "#ff0000",
                          }}
                        />{" "}
                        WIRELESS &nbsp;{" "}
                      </label>
                      <label>
                        <input
                          type="checkbox"
                          id="bus_customer_option_voi"
                          defaultValue="VoIP Information Selected"
                          style={{
                            border: "2px dotted #00f",
                            background: "#ff0000",
                          }}
                        />{" "}
                        VoIP &nbsp;{" "}
                      </label>
                      <label>
                        <input
                          type="checkbox"
                          id="bus_customer_option_hos"
                          name="bus_customer_option_hos"
                          defaultValue="Hosting Information Selected"
                          style={{
                            border: "2px dotted #00f",
                            background: "#ff0000",
                          }}
                        />{" "}
                        HOSTING &nbsp;{" "}
                      </label>
                    </div>
                    <div id="option_bus_dsl" style={{ display: "none" }}>
                      <b>High Speed DSL Plans for Business</b>
                      <select
                        className="input-custom input-full"
                        id="bus_customer_option_dsl_select"
                        name="bus_customer_option_dsl_select"
                      >
                        <option value="">Please select one...</option>
                        <option value="LITE 6 - $59.95">
                          LITE 6 - $59.95, 60 GB OF DATA TRANSFER PER MONTH
                        </option>
                        <option value="REGULAR 6 UNLIMITED - $69.95">
                          REGULAR 6 UNLIMITED - $69.95, UNLIMITED DATA TRANSFER
                          PER MONTH
                        </option>
                        <option value="ULTRA 6 UNLIMITED - $99.95">
                          ULTRA 6 UNLIMITED - $99.95, UNLIMITED DATA TRANSFER
                          PER MONTH
                        </option>
                        <option value="ULTRA 10 UNLIMITED - $69.95">
                          ULTRA 10 UNLIMITED - $69.95, UNLIMITED DATA TRANSFER
                          PER MONTH
                        </option>
                        <option value="ULTRA 16 UNLIMITED - $89.95">
                          ULTRA 16 UNLIMITED - $89.95, UNLIMITED DATA TRANSFER
                          PER MONTH
                        </option>
                        <option value="ULTRA 25 UNLIMITED - $109.95">
                          ULTRA 25 UNLIMITED - $109.95, UNLIMITED DATA TRANSFER
                          PER MONTH
                        </option>{" "}
                        {/*
                      <option value="High Speed DSL Lite - $59.95/month 25GB">High Speed DSL Lite - $59.95/month 25GB</option>
                      <option value="High Speed DSL Regular 6 - $69.95/month 60GB">High Speed DSL Regular 6 - $69.95/month 60GB</option>
                      <option value="High Speed DSL Ultra 6 - $99.95/month Unlimited">High Speed DSL Ultra 6 - $99.95/month Unlimited</option>
                      <option value="High Speed ADSL2+ Ultra 10 - $69.95/month UNL">High Speed ADSL2+ Ultra 10 - $69.95/month UNL</option>
                      <option value="High Speed ADSL2+ Ultra 16 - $89.95/month UNL">High Speed ADSL2+ Ultra 16 - $89.95/month UNL</option>
                      <option value="High Speed ADSL2+ Ultra 25 - $109.95/month UNL">High Speed ADSL2+ Ultra 25 - $109.95/month UNL</option>
                      */}
                      </select>
                    </div>
                    <div id="option_bus_cab" style={{ display: "none" }}>
                      <b>High Speed Cable Plans for Business</b>
                      <select
                        className="input-custom input-full"
                        id="bus_customer_option_cable_select"
                        name="bus_customer_option_cable_select"
                      >
                        <option value="">Please select one...</option>
                        <option value="CABLE 15 - $39.95">
                          CABLE 15 - $39.95, 200 GB OF DATA TRANSFER PER MONTH
                        </option>
                        <option value="CABLE 40 - $54.95">
                          CABLE 40 - $54.95, 300 GB TRANSFER PER MONTH
                        </option>
                        <option value="CABLE 60 - $74.95">
                          CABLE 60 - $74.95, 300 GB OF DATA TRANSFER PER MONTH
                        </option>{" "}
                        {/*
                      <option value="Cable 15 - $39.95/month 200GB">Cable 15 - $39.95/month 200GB</option>
                      <option value="Cable 15 UNL - $54.95/month UNL">Cable 15 UNL - $54.95/month UNL</option>
                      <option value="Cable 40 - $54.95/month 300GB">Cable 40 - $54.95/month 300GB</option>
                      <option value="Cable 40 UNL - $69.95/month UNL">Cable 40 UNL - $69.95/month UNL</option>
                      <option value="Cable 60 - $74.95/month 300GB">Cable 60 - $74.95/month 300GB</option>
                      <option value="Cable 60 UNL - $89.95/month">Cable 60 UNL - $89.95/month</option>
                      */}
                      </select>
                    </div>
                    <div id="option_bus_wir" style={{ display: "none" }}>
                      <b>Wireless Internet Plans for Business</b>
                      <select
                        className="input-custom input-full"
                        id="bus_customer_option_wireless_select"
                        name="bus_customer_option_wireless_select"
                      >
                        <option value="">Please select one...</option>
                        <option value="BIZ 4 - $71.95">
                          BIZ 4 - $71.95, 100 GB OF DATA TRANSFER PER MONTH
                        </option>
                        <option value="BIZ 6 - $81.95">
                          BIZ 6 - $81.95, 150 GB DATA TRANSFER PER MONTH
                        </option>
                        <option value="BIZ 10 - $99.95">
                          BIZ 10 - $99.95, 200 GB DATA TRANSFER PER MONTH
                        </option>{" "}
                        {/*
                      <option value="Biz 4 - $71.95 100GB">Biz 4 - $71.95 100GB </option>
                      <option value="Biz 6 - $81.95 150GB">Biz 6 - $81.95 150GB </option>
                      <option value="Biz 10 - $99.95 200GB">Biz 10 - $99.95 200GB</option>
                      */}
                      </select>
                    </div>
                    <div id="option_bus_voip" style={{ display: "none" }}>
                      <b>VoIP Plans for Business</b>
                      <select
                        className="input-custom input-full"
                        id="bus_customer_option_voip_select"
                        name="bus_customer_option_voip_select"
                      >
                        <option value="">Please select one...</option>
                        <option value="CANADA WIDE - $14.95">
                          CANADA WIDE - $14.95, REQUIRED HARDWARE INCLUDED
                        </option>
                        <option value="NORTH AMERICA - $19.95">
                          NORTH AMERICA - $19.95, REQUIRED HARDWARE INCLUDED
                        </option>
                        <option value="GLOBAL - $29.95">
                          GLOBAL - $29.95, 2000 MINUTES TO 51 COUNTRIES
                        </option>{" "}
                        {/*
                      <option value="Canada Wide - $14.95">Canada Wide - $14.95</option>
                      <option value="North America Continental - $19.95">North America Continental - $19.95</option>
                      <option value="Global - $29.95">Global - $29.95</option>
                      */}
                      </select>
                    </div>
                    <div id="option_bus_hos" style={{ display: "none" }}>
                      <b>Hosting Package Plans for Business</b>
                      <select
                        className="input-custom input-full"
                        id="bus_customer_option_hosting"
                        name="bus_customer_option_hosting"
                      >
                        <option value="">Please select one...</option>
                        <option value="Package 1 - $20.00">
                          Package 1 - $20.00, 20 GB
                        </option>
                        <option value="Package 2 - $30.00">
                          Package 2 - $30.00, 30 GB
                        </option>
                        <option value="Package 3 - $40.00">
                          Package 3 - $40.00, 100 GB
                        </option>
                        <option value="Package 4 - $60.00">
                          Package 4 - $60.00, 200 GB
                        </option>{" "}
                        {/*
                      <option value="">Please select one...</option>
                      <option value="PKG1 - $20/month, 1GB SPACE, 20GB TRANSFER, FREE SETUP">PKG1 - $20/month, 1GB SPACE, 20GB TRANSFER, FREE SETUP </option>
                      <option value="PKG2 - $30/month, 2GB SPACE, 30GB TRANSFER, FREE SETUP">PKG2 - $30/month, 2GB SPACE, 30GB TRANSFER, FREE SETUP </option>
                      <option value="PKG3 - $40/month, 5GB SPACE, 40GB TRANSFER, FREE SETUP">PKG3 - $40/month, 5GB SPACE, 40GB TRANSFER, FREE SETUP </option>
                      <option value="PKG4 - $60/month, 10GB SPACE, 50GB TRANSFER, FREE SETUP">PKG4 - $60/month, 10GB SPACE, 50GB TRANSFER, FREE SETUP</option>
                      */}
                      </select>
                    </div>
                    <div id="option_dsl" style={{ display: "none" }}>
                      <b>High Speed DSL Plans for Residential</b>
                      <select
                        className="input-custom input-full"
                        id="customer_option_dsl_select"
                        name="customer_option_dsl_select"
                      >
                        <option value="">Please select one...</option>
                        <option value="LITE 6 - $26.95">
                          LITE 6 - $26.95, 25 GB DATA TRANSFER PER MONTH
                        </option>
                        <option value="MEGA 6 - $39.95">
                          MEGA 6 - $39.95, 200 GB DATA TRANSFER PER MONTH
                        </option>
                        <option value="ULTRA 10 - $49.95">
                          ULTRA 10 - $49.95, 200 GB DATA TRANSFER PER MONTH
                        </option>
                        <option value="ULTRA 15 - $54.95">
                          ULTRA 15 - $54.95, 200 GB DATA TRANSFER PER MONTH
                        </option>{" "}
                        {/*
                      <option value="">Please select one...</option>
                      <option value="High Speed DSL Lite - $26.95/month 25GB">High Speed DSL Lite - $26.95/month 25GB          </option>
                      <option value="High Speed DSL Mega 6 - $39.95/month 200GB">High Speed DSL Mega 6 - $39.95/month 200GB       </option>
                      <option value="High Speed DSL Mega 6 UNL - $49.95/month UNL">High Speed DSL Mega 6 UNL - $49.95/month UNL     </option>
                      <option value="High Speed ADSL2+ Ultra 10 - $49.95/month 200GB">High Speed ADSL2+ Ultra 10 - $49.95/month 200GB  </option>
                      <option value="High Speed ADSL2+ Ultra 10 UNL - $59.95/month UNL">High Speed ADSL2+ Ultra 10 UNL - $59.95/month UNL</option>
                      <option value="High Speed ADSL2+ Ultra 15 - $54.95/month 200GB">High Speed ADSL2+ Ultra 15 - $54.95/month 200GB  </option>
                      <option value="High Speed ADSL2+ Ultra 15 UNL - $69.95/month UNL">High Speed ADSL2+ Ultra 15 UNL - $69.95/month UNL</option>
                      <option value="High Speed ADSL2+ Ultra 25 - $64.95/month 300GB">High Speed ADSL2+ Ultra 25 - $64.95/month 300GB  </option>
                      <option value="High Speed ADSL2+ Ultra 25 UNL - $79.95/month UNL">High Speed ADSL2+ Ultra 25 UNL - $79.95/month UNL</option>
                      */}
                      </select>
                    </div>
                    <div id="option_cab" style={{ display: "none" }}>
                      <b>High Speed Cable Plans for Residential</b>
                      <select
                        className="input-custom input-full"
                        id="customer_option_cable_select"
                        name="customer_option_cable_select"
                      >
                        <option value="">Please select one...</option>
                        <option value="CABLE 15 - $39.95">
                          CABLE 15 - $39.95, 200 GB OF DATA TRANSFER PER MONTH
                        </option>
                        <option value="CABLE 40 - $54.95">
                          CABLE 40 - $54.95, 300 GB DATA TRANSFER PER MONTH
                        </option>
                        <option value="CABLE 60 - $74.95">
                          CABLE 60 - $74.95, 300 GB DATA TRANSFER PER MONTH
                        </option>{" "}
                        {/*
                      <option value="">Please select one...</option>
                      <option value="Cable 15 - $39.95/month 200GB">Cable 15 - $39.95/month 200GB    </option>
                      <option value="Cable 15 UNL - $54.95/month UNL">Cable 15 UNL - $54.95/month UNL</option>
                      <option value="Cable 40 - $54.95/month 300GB">Cable 40 - $54.95/month 300GB  </option>
                      <option value="Cable 40 UNL - $69.95/month UNL">Cable 40 UNL - $69.95/month UNL</option>
                      <option value="Cable 60 - $74.95/month 300GB">Cable 60 - $74.95/month 300GB  </option>
                      <option value="Cable 60 UNL - $89.95/month">Cable 60 UNL - $89.95/month    </option>
                      */}
                      </select>
                    </div>
                    <div id="option_wir" style={{ display: "none" }}>
                      <b>Wireless Internet Plans for Residential</b>
                      <select
                        className="input-custom input-full"
                        id="customer_option_wireless_select"
                        name="customer_option_wireless_select"
                      >
                        <option value="">Please select one...</option>
                        <option value="LITE 4 - $46.95">
                          LITE 4 - $46.95, 50 GB TRANSFER PER MONTH
                        </option>
                        <option value="REGULAR 6 - $56.95">
                          REGULAR 6 - $56.95, 100 GB TRANSFER PER MONTH
                        </option>
                        <option value="MEGA 6 - $59.95">
                          MEGA 6 - $59.95, 250 GB TRANSFER PER MONTH
                        </option>
                        <option value="ULTRA 10 - $69.95">
                          ULTRA 10 - $69.95, 350 GB TRANSFER PER MONTH
                        </option>{" "}
                        {/*
                      <option value="">Please select one...</option>
                      <option value="Lite 4 - $46.95 50GB">Lite 4 - $46.95 50GB    </option>
                      <option value="Regular 6 - $56.95 100GB">Regular 6 - $56.95 100GB</option>
                      <option value="Mega 6 - $59.95 250GB">Mega 6 - $59.95 250GB   </option>
                      <option value="Ultra 10 - $69.95 300GB">Ultra 10 - $69.95 300GB </option>
                      */}
                      </select>
                    </div>
                    <div id="option_voi" style={{ display: "none" }}>
                      <b>VoIP Plans for Residential</b>
                      <select
                        className="input-custom input-full"
                        id="customer_option_voip_select"
                        name="customer_option_voip_select"
                      >
                        <option value="">Please select one...</option>
                        <option value="CANADA WIDE - $14.95">
                          CANADA WIDE - $14.95, REQUIRED HARDWARE INCLUDED
                        </option>
                        <option value="NORTH AMERICA - $19.95">
                          NORTH AMERICA - $19.95, UNLIMITED CONTINENTAL UNITED
                          STATES SERVICEREQUIRED HARDWARE INCLUDED
                        </option>
                        <option value="GLOBAL - $29.95">
                          GLOBAL - $29.95, UNLIMITED CONTINENTAL UNITED STATES
                          SERVICE 2000 MINUTES TO 51 COUNTRIES
                        </option>{" "}
                        {/*
                      <option value="">Please select one...</option>
                      <option value="Canada Wide - $14.95">Canada Wide - $14.95</option>
                      <option value="North America Continental - $19.95">North America Continental - $19.95</option>
                      <option value="Global $29.95">Global - $29.95</option>
                      */}
                      </select>
                    </div>
                    <div id="option_dia" style={{ display: "none" }}>
                      <b>Dial Up Plans for Residential</b>
                      <select
                        className="input-custom input-full"
                        id="customer_option_dialup_select"
                        name="customer_option_dialup_select"
                      >
                        <option value="">Please select one...</option>
                        <option value="EXTRA-LITE<br>DIAL UP - $90.00">
                          EXTRA-LITEDIAL UP - $90.00, V.90 MODEM ACCESS UP TO 56
                          KBPS
                        </option>
                        <option value="LITE<br>DIAL UP - $14.95159.50">
                          LITEDIAL UP - $14.95159.50, V.90 MODEM ACCESS UP TO 56
                          KBPS
                        </option>
                        <option value="SURFER<br>DIAL UP - $19.95199.50">
                          SURFERDIAL UP - $19.95199.50, V.90 MODEM ACCESS UP TO
                          56 KBPS
                        </option>
                        <option value="UNLIMITED<br>DIAL UP - $24.95264.50">
                          UNLIMITEDDIAL UP - $24.95264.50, V.90 MODEM ACCESS UP
                          TO 56 KBPS
                        </option>{" "}
                        {/*
                      <option value="">Please select one...</option>
                      <option value="Extra-Lite Dialup - $90.00 yearly">Extra-Lite Dialup - $90.00 yearly</option>
                      <option value="Lite Dialup - $14.95/month or $149.50 yearly">Lite Dialup - $14.95/month or $149.50 yearly</option>
                      <option value="Surfer Dialup - $19.95/month or $199.50 yearly">Surfer Dialup - $19.95/month or $199.50 yearly</option>
                      <option value="Unlimited Dialup - $24.95/month or $264.50 yearly">Unlimited Dialup - $24.95/month or $264.50 yearly</option>
                      */}
                      </select>
                    </div>
                    <div id="option_hos" style={{ display: "none" }}>
                      <b>Hosting Packages</b>
                      <select
                        className="input-custom input-full"
                        id="customer_option_hosting"
                        name="customer_option_hosting"
                      >
                        <option value="">Please select one...</option>
                        <option value="Package 1 - $20.00">
                          Package 1 - $20.00, 20 GB
                        </option>
                        <option value="Package 2 - $30.00">
                          Package 2 - $30.00, 30 GB
                        </option>
                        <option value="Package 3 - $40.00">
                          Package 3 - $40.00, 100 GB
                        </option>
                        <option value="Package 4 - $60.00">
                          Package 4 - $60.00, 200 GB
                        </option>{" "}
                        {/*
                      <option value="">Please select one...</option>
                      <option value="PKG1 - $20/month, 1GB SPACE, 20GB TRANSFER, FREE SETUP">PKG1 - $20/month, 1GB SPACE, 20GB TRANSFER, FREE SETUP </option>
                      <option value="PKG2 - $30/month, 2GB SPACE, 30GB TRANSFER, FREE SETUP">PKG2 - $30/month, 2GB SPACE, 30GB TRANSFER, FREE SETUP </option>
                      <option value="PKG3 - $40/month, 5GB SPACE, 40GB TRANSFER, FREE SETUP">PKG3 - $40/month, 5GB SPACE, 40GB TRANSFER, FREE SETUP </option>
                      <option value="PKG4 - $60/month, 10GB SPACE, 50GB TRANSFER, FREE SETUP">PKG4 - $60/month, 10GB SPACE, 50GB TRANSFER, FREE SETUP</option>
                      */}
                      </select>
                    </div>
                    <div>
                      <b>How did you hear about us:</b>
                      <select className="input-custom input-full" id="how">
                        <option value="">Please select one...</option>
                        <option value="Current KOS user">
                          Current KOS user
                        </option>
                        <option value="Family or Friend">
                          Family or Friend
                        </option>
                        <option value="Radio Ad">Radio Ad</option>
                        <option value="Print Ad">Print Ad</option>
                        <option value="Internet Search">Internet Search</option>
                        <option value="Social Media">Social Media</option>
                        <option value="Direct Mail">Direct Mail</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                    <label htmlFor="comments">Comments</label>
                    <textarea
                      className="input-custom input-full"
                      id="comments"
                      name="comments"
                      placeholder="Comments:"
                      defaultValue={""}
                    />
                    <button type="submit" className="btn btn-orange">
                      Submit Order Form
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* // EOF Block */}
    </div>
  )
}
