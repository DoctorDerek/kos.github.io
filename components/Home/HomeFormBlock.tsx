import ImageFixed from "next/image"
import React from "react"

import Image from "@/components/Utils/CustomImage"

export default function HomeFormBlock() {
  return (
    <div className="mb-24 text-white px-18 py-11">
      <div className="grid w-full h-[1000px]">
        <Image src="/images/block-bg.jpg" alt="Decoration" />
      </div>
      <div className="absolute transform-gpu left-1/2 translate-x-[-50%] translate-y-[-900px]">
        <h2 className="text-center decor decor-white">
          Let's Get Started
          <div className="block mx-auto">
            <ImageFixed
              src="/images/h-decor-white.png"
              height="4px"
              width="64px"
              alt="Decoration"
            />
          </div>
        </h2>
        <div className="flex flex-wrap lg:flex-nowrap">
          <div className="pl-4 pr-4 sm:w-1/2">
            <div
              className="text-num"
              data-animation="fadeInLeft"
              data-animation-delay="0s"
            >
              <div className="absolute w-16 text-center top-[-15px]">
                <span className="relative block w-20 h-20 text-4xl font-normal bg-white rounded-full text-blue-brand leading-[74px] transition-all duration-200">
                  1
                </span>
              </div>
              <div className="text-num-info">
                <h5 className="text-num-title">Fill out the form</h5>
                <p>Tell us who you are and how we can reach you.</p>
              </div>
            </div>
            <div
              className="text-num"
              data-animation="fadeInRight"
              data-animation-delay="0s"
            >
              <div className="absolute w-16 text-center top-[-15px]">
                <span className="relative block w-20 h-20 text-4xl font-normal bg-white rounded-full text-blue-brand leading-[74px] transition-all duration-200">
                  2
                </span>
              </div>
              <div className="text-num-info">
                <h5 className="text-num-title">Receive a prompt response</h5>
                <p>
                  A KOS sales specialist WILL REACH OUT TO YOU SHORTLY to get
                  you signed up and book your service appointment.
                </p>
              </div>
            </div>
            <div
              className="text-num"
              data-animation="fadeInRight"
              data-animation-delay="0s"
            >
              <div className="absolute w-16 text-center top-[-15px]">
                <span className="relative block w-20 h-20 text-4xl font-normal bg-white rounded-full text-blue-brand leading-[74px] transition-all duration-200">
                  3
                </span>
              </div>
              <div className="text-num-info">
                <h5 className="text-num-title">Get connected</h5>
                <p>
                  One of our professional technicians will perform an on-site,
                  quick and easy installation to get you set up.
                </p>
              </div>
            </div>
            <div
              className="text-num last"
              data-animation="fadeInLeft"
              data-animation-delay="0.8s"
            >
              <div className="absolute w-16 text-center top-[-15px]">
                <span className="relative block w-20 h-20 text-4xl font-normal bg-white rounded-full text-blue-brand leading-[74px] transition-all duration-200">
                  4
                </span>
              </div>
              <div className="text-num-info">
                <h5 className="text-num-title">Up and running</h5>
                <p>Start enjoying your customized internet package.</p>
              </div>
            </div>
          </div>
          <div className="pl-4 pr-4 sm:w-1/2">
            <p>
              You have choices when it comes to internet. Switching to KOS is
              quick and easy to do. Fill in the form below and get connected
              today!
            </p>
            <form
              className="index-request-form-js"
              id="requestFormSimple"
              method="post"
            >
              <input type="hidden" name="formtype" defaultValue="indexform" />
              <div className="successform">
                <p>Your message was sent successfully!</p>
              </div>
              <div className="errorform">
                <p>
                  Something went wrong, try refreshing and submitting the form
                  again.
                </p>
              </div>
              <input
                className="input-custom input-full"
                type="text"
                name="name"
                placeholder="Name:"
              />
              <input
                className="input-custom input-full"
                type="text"
                name="phone"
                placeholder="Phone:"
              />
              <input
                className="input-custom input-full"
                type="text"
                name="email"
                placeholder="Email:"
              />
              <input
                className="input-custom input-full"
                type="text"
                name="city"
                placeholder="City:"
              />
              <input
                className="input-custom input-full"
                type="text"
                name="postal"
                placeholder="Postal Code:"
              />
              <div className="margin10">
                <label>
                  <input
                    type="checkbox"
                    name="customer_type_res"
                    defaultValue="Residential Customer"
                    style={{
                      border: "2px dotted #00f",
                      background: "#ff0000",
                    }}
                    defaultChecked
                  />
                  <span style={{ fontSize: 16, fontWeight: 400 }}>
                    RESIDENTIAL
                  </span>
                  &nbsp;
                </label>
                <label>
                  <input
                    type="checkbox"
                    name="customer_type_bus"
                    defaultValue="Business Customer"
                    style={{
                      border: "2px dotted #00f",
                      background: "#ff0000",
                    }}
                  />
                  <span style={{ fontSize: 16, fontWeight: 400 }}>
                    BUSINESS
                  </span>
                  &nbsp;
                </label>
              </div>
              <div id="residential_options" className="margin10">
                <label>
                  <input
                    type="checkbox"
                    name="customer_option_dsl"
                    defaultValue="DSL Information Selected"
                    style={{
                      border: "2px dotted #00f",
                      background: "#ff0000",
                    }}
                  />
                  DSL &nbsp;
                </label>
                <label>
                  <input
                    type="checkbox"
                    name="customer_option_cab"
                    defaultValue="Cable Information Selected"
                    style={{
                      border: "2px dotted #00f",
                      background: "#ff0000",
                    }}
                  />
                  CABLE &nbsp;
                </label>
                <label>
                  <input
                    type="checkbox"
                    name="customer_option_wir"
                    defaultValue="Wireless Information Selected"
                    style={{
                      border: "2px dotted #00f",
                      background: "#ff0000",
                    }}
                  />
                  WIRELESS &nbsp;
                </label>
                <label>
                  <input
                    type="checkbox"
                    name="customer_option_voi"
                    defaultValue="VoIP Information Selected"
                    style={{
                      border: "2px dotted #00f",
                      background: "#ff0000",
                    }}
                  />
                  VoIP &nbsp;
                </label>
                <label>
                  <input
                    type="checkbox"
                    name="customer_option_dia"
                    defaultValue="Dial Up Information Selected"
                    style={{
                      border: "2px dotted #00f",
                      background: "#ff0000",
                    }}
                  />
                  DIAL UP &nbsp;
                </label>
                <label>
                  <input
                    type="checkbox"
                    name="customer_option_hos"
                    defaultValue="Hosting Information Selected"
                    style={{
                      border: "2px dotted #00f",
                      background: "#ff0000",
                    }}
                  />
                  HOSTING &nbsp;
                </label>
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
              <textarea
                className="input-custom input-full"
                id="message"
                name="message"
                placeholder="Message:"
                defaultValue={""}
              />
              <button
                type="submit"
                className="inline-block px-4 py-2 text-base font-normal leading-normal text-center no-underline whitespace-no-wrap align-middle border rounded select-none btn btn-orange"
              >
                GET STARTED
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
