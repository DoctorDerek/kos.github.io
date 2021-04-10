import React from "react"
import Image from "@/components/Image"

export default function Pricing() {
  return (
    <div className="block-class bg-2">
      <div className="grid w-full h-[615px]">
        <Image src="/images/block-bg-2.jpg" alt />
      </div>
      <div className="container absolute transform-gpu left-1/2 translate-x-[-50%] translate-y-[-615px]">
        <div className="pricing">
          <div className="pricing-box">
            <div className="inside">
              <h3>Special Offer</h3>
              <div className="price-carousel">
                <div className="price-item">
                  <h6 className="price-title">KOS Wireless Special</h6>
                  <div className="price-text">
                    <p>250GB, 2 Year Contract, No set up fees.</p>
                    <hr />
                    <p>
                      <span style={{ fontSize: "24pt" }}>
                        <strong>$59.95</strong>
                      </span>
                      a month
                    </p>
                  </div>
                  <div className="price-action">
                    <a
                      href="/order/"
                      className="inline-block px-4 py-2 text-base font-normal leading-normal text-center no-underline whitespace-no-wrap align-middle border rounded select-none btn btn-orange"
                    >
                      Order now
                    </a>
                  </div>
                </div>
                <div className="price-item">
                  <h6 className="price-title">HOME PHONE SERVICES</h6>
                  <div className="price-text">
                    <p>
                      Add home phone services to your KOS high speed internet
                      account.
                    </p>
                    <hr />
                    <p>Pay only</p>
                    <p>
                      <strong>
                        <span style={{ fontSize: "24pt" }}>$9.95</span>
                      </strong>
                      a month
                    </p>
                  </div>
                  <div className="price-action">
                    <a
                      href="/order/"
                      className="inline-block px-4 py-2 text-base font-normal leading-normal text-center no-underline whitespace-no-wrap align-middle border rounded select-none btn btn-orange"
                    >
                      Order now
                    </a>
                  </div>
                </div>
                <div className="price-item">
                  <h6 className="price-title">High Speed Cable Internet</h6>
                  <div className="price-text">
                    <p>
                      Add unlimited data to any plan for only $15. No phone
                      needed.
                    </p>
                    <hr />
                    <p>Starting at</p>
                    <p>
                      <span style={{ fontSize: "24pt" }}>
                        <strong>$39.95</strong>
                      </span>
                      a month
                    </p>
                  </div>
                  <div className="price-action">
                    <a
                      href="/order/"
                      className="inline-block px-4 py-2 text-base font-normal leading-normal text-center no-underline whitespace-no-wrap align-middle border rounded select-none btn btn-orange"
                    >
                      Order now
                    </a>
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
