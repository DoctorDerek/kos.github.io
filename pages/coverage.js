import React from "react"

export default function index() {
  return (
    <div id="page-content">
      <div className="block">
        <div className="container">
          <h1 className="text-center decor color">Coverage</h1>
          <p style={{ textAlign: "center" }}>
            <span
              style={{
                color: "#000000",
                fontFamily: '"Open Sans", sans-serif',
                fontSize: "18px",
                textAlign: "center",
                backgroundColor: "#ffffff",
              }}
            >
              We provide services from Brighton to Gananoque, including Prince
              Edward County, Napanee, Belleville, Trenton and Picton as well as
              some of the St. Lawrence Islands. KOS also provides DSL and CABLE
              services to most of Ontario and Quebec, so we can often move with
              you. Thank you for taking an interest in our company.
            </span>
          </p>
          <div className="divider" />
          <div>
            <img
              src="https://kos.net/assets/images/about/coverage.jpg"
              className="img-responsive img-rounded"
              style={{ alignContent: "center" }}
              alt=""
            />
          </div>
        </div>
      </div>
      {/* //Block */}
    </div>
  )
}
