/*
import Link from "@/components/Link"
import { PageSeo } from "@/components/SEO"
import Tag from "@/components/Tag"
import siteMetadata from "@/data/siteMetadata"
const MAX_DISPLAY = 5
const postDateTemplate = { year: "numeric", month: "long", day: "numeric" }
*/
import { getAllFilesFrontMatter } from "@/lib/mdx"

//import Slideshow from "@/components/Slideshow"

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter("blog")

  return { props: { posts } }
}

import { useEffect } from "react"

const useScript = (url) => {
  useEffect(() => {
    const script = document.createElement("script")

    script.src = url
    script.async = true

    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [url])
}

//export default function Home({ posts }) {
export default function Home() {
  useScript("js/jquery.js")
  useScript("js/plugins/bootstrap.min.js")
  useScript("js/plugins/jquery.nivo.slider.js")
  useScript("js/plugins/slick.min.js")
  useScript("js/plugins/jquery.magnific-popup.min.js")
  useScript("js/plugins/jquery.waypoints.min.js")
  useScript("js/plugins/jquery.countTo.js")
  useScript("js/plugins/jquery.form.js")
  useScript("js/plugins/jquery.validate.min.js")
  useScript("js/custom.js")
  useScript("js/accessibilitymenu.js")
  useScript("js/theWeatherNetwork.js")

  return (
    <>
      <div className="slider-wrapper theme-default">
        <div id="slider" className="nivoSlider">
          <img
            src="/images/slider/slide1.jpg"
            title="#htmlcaption1"
            data-thumb="/images/slider/slide1.jpg"
            alt
          />
          <img
            src="/images/slider/slide2.jpg"
            title="#htmlcaption2"
            data-thumb="/images/slider/slide2.jpg"
            alt
          />
        </div>
        <canvas id="sea" />
        <div id="htmlcaption1" className="nivo-caption">
          <div className="vert-wrapper">
            <div className="vert">
              <div className="text text1">
                <span style={{ textShadow: "2px 2px rgba(0, 0, 0, 0.5)" }}>
                  We get you connected and keep you connected
                </span>
              </div>
              <div className="text text2">
                <strong>
                  <span style={{ textShadow: "2px 2px rgba(0, 0, 0, 0.5)" }}>
                    worry-free connectivity
                  </span>
                </strong>
              </div>
              <div className="text text3">
                <a
                  href="/order/"
                  className="!mt-10 text-white hover:active:focus:outline-none hover:active:focus:shadow-none py-4 px-6 leading-normal h-[51px] rounded-xl align-top font-bold border-none uppercase transition-all duration-300 no-underline btn btn-orange focus:active:bg-[#005395] bg-[#b0243d] shadow-xl border:none"
                >
                  Get connected!
                </a>
              </div>
            </div>
          </div>
        </div>
        <div id="htmlcaption2" className="nivo-caption">
          <div className="vert-wrapper">
            <div className="vert">
              <div className="text text1">
                <span style={{ textShadow: "2px 2px rgba(0, 0, 0, 0.5)" }}>
                  Reliable service for 100% internet enjoyment
                </span>
              </div>
              <div className="text text2">
                <strong>
                  <span style={{ textShadow: "2px 2px rgba(0, 0, 0, 0.5)" }}>
                    worry-free connectivity
                  </span>
                </strong>
              </div>
              <div className="text text3">
                <a
                  href="/order/"
                  className="inline-block px-4 py-2 text-base font-normal leading-normal text-center no-underline whitespace-no-wrap align-middle border rounded select-none btn btn-orange"
                >
                  Get connected!
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="block">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-between services-carousel">
            <div
              className="pl-4 pr-4 sm:w-1/2 animation"
              data-animation="fadeInLeft"
              data-animation-delay="0s"
            >
              <div className="service-item">
                <a href="/residential/" className="icon-circle">
                  <div className="icon-hover" />
                  <img
                    src="/assets/images/home/icon-home.png"
                    width={196}
                    height={196}
                    alt
                  />
                </a>
                <div className="service-title">
                  <h4>
                    <a href="/residential/">
                      RESIDENTIAL <br />
                      SERVICES
                    </a>
                  </h4>
                </div>
                <div className="service-text">Stay connected with family</div>
              </div>
            </div>
            <div
              className="pl-4 pr-4 sm:w-1/2 animation"
              data-animation="fadeInUp"
              data-animation-delay="0s"
            >
              <div className="service-item">
                <a href="/business/" className="icon-circle">
                  <div className="icon-hover" />
                  <img
                    src="/assets/images/home/icon-business.png"
                    width={196}
                    height={196}
                    alt
                  />
                </a>
                <div className="service-title">
                  <h4>
                    <a href="/business/">
                      BUSINESS <br />
                      SERVICES
                    </a>
                  </h4>
                </div>
                <div className="service-text">Keep your business connected</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="block bottom-sm-margin">
        <div className="container mx-auto">
          <h2 className="text-center decor flex-growor">Internet Packages</h2>
          <div className="flex flex-wrap category-carousel">
            <div className="pl-4 pr-4 sm:w-1/2 md:w-1/3">
              <a
                href="/res/high-speed-cable/"
                className="category-item animation"
                data-animation="fadeInLeft"
                data-animation-delay="0s"
              >
                <div className="category-image">
                  <img
                    src="/assets/images/cable.jpg"
                    alt
                    className="img-responsive"
                  />
                  <h5 className="category-title">
                    <span
                      style={{
                        textShadow: "2px 2px rgba(0, 0, 0, 0.5)",
                        backgroundColor: "rgba(0, 0, 0, 0.5)",
                        padding: 5,
                      }}
                    >
                      Cable
                    </span>
                  </h5>
                  <div className="wave-wrapper">
                    <div className="wave" />
                  </div>
                </div>
                <div className="category-text">
                  Surf, shop, stream music. Stay connected with family and
                  friends.
                  <span className="category-more-link">
                    <span className="flex-wrap icon icon-right-arrow" />
                  </span>
                </div>
              </a>
            </div>
            <div
              className="pl-4 pr-4 sm:w-1/2 md:w-1/3 animation"
              data-animation="fadeIn"
              data-animation-delay="0s"
            >
              <a href="/res/wireless-broadband/" className="category-item">
                <div className="category-image">
                  <img
                    src="/assets/images/wireless.jpg"
                    alt
                    className="img-responsive"
                  />
                  <h5 className="category-title">
                    <span
                      style={{
                        textShadow: "2px 2px rgba(0, 0, 0, 0.5)",
                        backgroundColor: "rgba(0, 0, 0, 0.5)",
                        padding: 5,
                      }}
                    >
                      Wireless
                    </span>
                  </h5>
                  <div className="wave-wrapper">
                    <div className="wave" />
                  </div>
                </div>
                <div className="category-text">
                  High speed rural internet at a price that suits your needs.
                  <span className="category-more-link">
                    <span className="flex-wrap icon icon-right-arrow" />
                  </span>
                </div>
              </a>
            </div>
            <div
              className="pl-4 pr-4 sm:w-1/2 md:w-1/3 animation"
              data-animation="fadeInRight"
              data-animation-delay="0s"
            >
              <a href="/res/high-speed-dsl/" className="category-item">
                <div className="category-image">
                  <img
                    src="/assets/images/dsl.jpg"
                    alt
                    className="img-responsive"
                  />
                  <h5 className="category-title">
                    <span
                      style={{
                        textShadow: "2px 2px rgba(0, 0, 0, 0.5)",
                        backgroundColor: "rgba(0, 0, 0, 0.5)",
                        padding: 5,
                      }}
                    >
                      DSL
                    </span>
                  </h5>
                  <div className="wave-wrapper">
                    <div className="wave" />
                  </div>
                </div>
                <div className="category-text">
                  High speed internet plans beginning at only $26.95 / month!
                  <span className="category-more-link">
                    <span className="flex-wrap icon icon-right-arrow" />
                  </span>
                </div>
              </a>
            </div>
            <div className="pl-4 pr-4 sm:w-1/2 md:w-1/3">
              <a
                href="/res/voip/"
                className="category-item animation"
                data-animation="fadeInLeft"
                data-animation-delay="0s"
              >
                <div className="category-image">
                  <img
                    src="/assets/images/voip.jpg"
                    alt
                    className="img-responsive"
                  />
                  <h5 className="category-title">
                    <span
                      style={{
                        textShadow: "2px 2px rgba(0, 0, 0, 0.5)",
                        backgroundColor: "rgba(0, 0, 0, 0.5)",
                        padding: 5,
                      }}
                    >
                      VOIP
                    </span>
                  </h5>
                  <div className="wave-wrapper">
                    <div className="wave" />
                  </div>
                </div>
                <div className="category-text">
                  Premium phone service over your high speed internet
                  connection.
                  <span className="category-more-link">
                    <span className="flex-wrap icon icon-right-arrow" />
                  </span>
                </div>
              </a>
            </div>
            <div className="pl-4 pr-4 sm:w-1/2 md:w-1/3">
              <a
                href="/res/mail/"
                className="category-item animation"
                data-animation="fadeIn"
                data-animation-delay="0s"
              >
                <div className="category-image">
                  <img
                    src="/assets/images/mail.jpg"
                    alt
                    className="img-responsive"
                  />
                  <h5 className="category-title">
                    <span
                      style={{
                        textShadow: "2px 2px rgba(0, 0, 0, 0.5)",
                        backgroundColor: "rgba(0, 0, 0, 0.5)",
                        padding: 5,
                      }}
                    >
                      Mail
                    </span>
                  </h5>
                  <div className="wave-wrapper">
                    <div className="wave" />
                  </div>
                </div>
                <div className="category-text">
                  Excellent, dynamic e-mail service with automatic spam and
                  virus protection.
                  <span className="category-more-link">
                    <span className="flex-wrap icon icon-right-arrow" />
                  </span>
                </div>
              </a>
            </div>
            <div className="pl-4 pr-4 sm:w-1/2 md:w-1/3">
              <a
                href="/hosting/packages/"
                className="category-item animation"
                data-animation="fadeInRight"
                data-animation-delay="0s"
              >
                <div className="category-image">
                  <img
                    src="/assets/images/hosting.jpg"
                    alt
                    className="img-responsive"
                  />
                  <h5 className="category-title">
                    <span
                      style={{
                        textShadow: "2px 2px rgba(0, 0, 0, 0.5)",
                        backgroundColor: "rgba(0, 0, 0, 0.5)",
                        padding: 5,
                      }}
                    >
                      HOSTING
                    </span>
                  </h5>
                  <div className="wave-wrapper">
                    <div className="wave" />
                  </div>
                </div>
                <div className="category-text">
                  A variety of options for getting your information out onto the
                  Internet in style.
                  <span className="category-more-link">
                    <span className="flex-wrap icon icon-right-arrow" />
                  </span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="block bg-2">
        <div className="container mx-auto">
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
      <div className="block bottom-sm-margin">
        <div className="container mx-auto">
          <h2 className="text-center decor flex-growor">Why choose us?</h2>
          <div className="flex flex-wrap text-icon-carousel step-animation-container">
            <div className="pl-4 pr-4 sm:w-1/3">
              <div
                className="text-icon step-animation"
                data-animation="fadeInUp"
                data-animation-delay="0s"
              >
                <div className="text-icon-icon">
                  <span>
                    <i className="icon icon-medal" />
                    <span className="icon-hover" />
                  </span>
                </div>
                <h5 className="text-icon-title">Excellent Customer Service</h5>
                <div className="text-icon-text">
                  Contact our friendly, local and knowledgeable staff today
                </div>
              </div>
            </div>
            <div className="pl-4 pr-4 sm:w-1/3">
              <div
                className="text-icon step-animation"
                data-animation="fadeInUp"
                data-animation-delay="0.2s"
              >
                <div className="text-icon-icon">
                  <span>
                    <i className="icon icon-wrench" />
                    <span className="icon-hover" />
                  </span>
                </div>
                <h5 className="text-icon-title">Quick, Easy Installations</h5>
                <div className="text-icon-text">
                  Switch to KOS for worry-free connectivity
                </div>
              </div>
            </div>
            <div className="pl-4 pr-4 sm:w-1/3">
              <div
                className="text-icon step-animation"
                data-animation="fadeInUp"
                data-animation-delay="0.4s"
              >
                <div className="text-icon-icon">
                  <span>
                    <i className="icon icon-menu" />
                    <span className="icon-hover" />
                  </span>
                </div>
                <h5 className="text-icon-title">We Offer More Options</h5>
                <div className="text-icon-text">
                  Cable, DSL, Wireless Broadband, Hosting, E-mail, VoIP services
                  and more!
                </div>
              </div>
            </div>
            <div className="clearfix hidden-xs" />
            <div className="pl-4 pr-4 sm:w-1/3">
              <div
                className="text-icon step-animation"
                data-animation="fadeInUp"
                data-animation-delay="0.6s"
              >
                <div className="text-icon-icon">
                  <span>
                    <i className="icon icon-cart" />
                    <span className="icon-hover" />
                  </span>
                </div>
                <h5 className="text-icon-title">Customized Packages</h5>
                <div className="text-icon-text">
                  Choose the right internet package with the data that you need
                </div>
              </div>
            </div>
            <div className="pl-4 pr-4 sm:w-1/3">
              <div
                className="text-icon step-animation"
                data-animation="fadeInUp"
                data-animation-delay="0.8s"
              >
                <div className="text-icon-icon">
                  <span>
                    <i className="icon icon-clock" />
                    <span className="icon-hover" />
                  </span>
                </div>
                <h5 className="text-icon-title">
                  Pay only for the SPEED YOU NEED
                </h5>
                <div className="text-icon-text">
                  Let us help you choose the service that’s best for you
                </div>
              </div>
            </div>
            <div className="pl-4 pr-4 sm:w-1/3">
              <div
                className="text-icon step-animation"
                data-animation="fadeInUp"
                data-animation-delay="1s"
              >
                <div className="text-icon-icon">
                  <span>
                    <i className="icon icon-location" />
                    <span className="icon-hover" />
                  </span>
                </div>
                <h5 className="text-icon-title">Locally Owned and Operated</h5>
                <div className="text-icon-text">
                  KOS has supported Eastern Ontario communities since 1993
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="block bg-1">
        <div className="container mx-auto">
          <h2 className="text-center decor decor-white">Let's Get Started</h2>
          <div className="flex flex-wrap lg:flex-nowrap">
            <div className="pl-4 pr-4 sm:w-1/2">
              <div
                className="text-num step-animation"
                data-animation="fadeInLeft"
                data-animation-delay="0s"
              >
                <div className="text-num-num">
                  <span>1</span>
                </div>
                <div className="text-num-info">
                  <h5 className="text-num-title">Fill out the form</h5>
                  <p>Tell us who you are and how we can reach you.</p>
                </div>
              </div>
              <div
                className="text-num step-animation"
                data-animation="fadeInRight"
                data-animation-delay="0s"
              >
                <div className="text-num-num">
                  <span>2</span>
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
                className="text-num step-animation"
                data-animation="fadeInRight"
                data-animation-delay="0s"
              >
                <div className="text-num-num">
                  <span>3</span>
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
                className="text-num last step-animation"
                data-animation="fadeInLeft"
                data-animation-delay="0.8s"
              >
                <div className="text-num-num">
                  <span>4</span>
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
                <div name="residential_options" className="margin10">
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
                    <option value>Please select one...</option>
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
                  type="text"
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
      <div className="block bottom-sm-margin">
        <div className="container mx-auto">
          <h2 className="text-center decor flex-growor">News and Events</h2>
          <div className="flex flex-wrap news-item-row">
            <div className="pl-4 pr-4 sm:w-1/2 md:w-1/3">
              <div
                className="news-item animation"
                data-animation="fadeInLeft"
                data-animation-delay="0s"
              >
                <div className="news-item-image">
                  <img
                    src="/assets/images/news/logo.png"
                    alt
                    className="img-responsive"
                    style={{ maxHeight: 230, width: "100%" }}
                  />
                </div>
                <div className="news-item-text">
                  <h5 className="news-item-title">
                    Fibre cut causing major outage **RESOLVED**
                  </h5>
                  <p>
                    Today's outage was resolved at 6:15pm. All towers are back
                    online and are fully functional.
                    <a
                      href="/news/events/#57"
                      style={{ color: "#005395", textDecoration: "underline" }}
                    >
                      more...
                    </a>
                  </p>
                  <span className="news-item-more-link">
                    <a href="/news/events/#57">
                      <span className="flex-wrap icon icon-right-arrow" />
                    </a>
                  </span>
                </div>
              </div>
            </div>
            <div className="pl-4 pr-4 sm:w-1/2 md:w-1/3">
              <div
                className="news-item animation"
                data-animation="fadeInLeft"
                data-animation-delay="0s"
              >
                <div className="news-item-image">
                  <img
                    src="/assets/images/news/logo.png"
                    alt
                    className="img-responsive"
                    style={{ maxHeight: 230, width: "100%" }}
                  />
                </div>
                <div className="news-item-text">
                  <h5 className="news-item-title">COVID-19</h5>
                  <p>
                    With the significant and growing concern across North
                    America of the COVID-19 (“coronavirus”) situation, we wishto
                    provide you on an update on how KOS is handling this
                    situation as it relates to our customers and employees.We
                    will remain fully operational.
                    <a
                      href="/news/events/#51"
                      style={{ color: "#005395", textDecoration: "underline" }}
                    >
                      more...
                    </a>
                  </p>
                  <span className="news-item-more-link">
                    <a href="/news/events/#51">
                      <span className="flex-wrap icon icon-right-arrow" />
                    </a>
                  </span>
                </div>
              </div>
            </div>
            <div className="pl-4 pr-4 sm:w-1/2 md:w-1/3">
              <div
                className="news-item animation"
                data-animation="fadeInLeft"
                data-animation-delay="0s"
              >
                <div className="news-item-image">
                  <img
                    src="/assets/images/news/814185689_news-unlimited-packages.jpg"
                    alt
                    className="img-responsive"
                    style={{ maxHeight: 230, width: "100%" }}
                  />
                </div>
                <div className="news-item-text">
                  <h5 className="news-item-title">
                    Unlimited Packages Now Available
                  </h5>
                  <p>
                    Enjoy unlimited data on our Cable and DSL services.
                    <a
                      href="/news/events/#21"
                      style={{ color: "#005395", textDecoration: "underline" }}
                    >
                      more...
                    </a>
                  </p>
                  <span className="news-item-more-link">
                    <a href="/news/events/#21">
                      <span className="flex-wrap icon icon-right-arrow" />
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="block bottom-md-margin">
        <div className="container mx-auto">
          <div className="flex flex-wrap">
            <div className="w-full">
              <div
                className="testimonials animation"
                data-animation="fadeInLeft"
              >
                <h3 className="text-center color decor">
                  What our customers are saying
                </h3>
                <div className="testimonials-carousel">
                  <div className="testimonials-item">
                    <div className="testimonials-text">
                      <p>
                        I have been a business customer of KOS for over 10
                        years. I rely on my web site to drive traffic to my
                        business and I depend on KOS to make sure that my site
                        is up and running 24/7. When I do have any technical
                        problems they are only a phone call away. The staff is
                        wonderful to deal with.
                      </p>
                    </div>
                    <div className="testimonials-username">
                      Donna,
                      <em style={{ fontWeight: 100 }}> Creative Effects</em>
                    </div>
                  </div>
                  <div className="testimonials-item">
                    <div className="testimonials-text">
                      <p>
                        I have been a business customer of KOS for over 10
                        years. I rely on my web site to drive traffic to my
                        business and I depend on KOS to make sure that my site
                        is up and running 24/7. When I do have any technical
                        problems they are only a phone call away. The staff is
                        wonderful to deal with.
                      </p>
                    </div>
                    <div className="testimonials-username">
                      Donna,
                      <em style={{ fontWeight: 100 }}> Creative Effects</em>
                    </div>
                  </div>
                  <div className="testimonials-item">
                    <div className="testimonials-text">
                      <p>
                        I have been a business customer of KOS for over 10
                        years. I rely on my web site to drive traffic to my
                        business and I depend on KOS to make sure that my site
                        is up and running 24/7. When I do have any technical
                        problems they are only a phone call away. The staff is
                        wonderful to deal with.
                      </p>
                    </div>
                    <div className="testimonials-username">
                      Donna,
                      <em style={{ fontWeight: 100 }}> Creative Effects</em>
                    </div>
                  </div>
                  <div className="testimonials-item">
                    <div className="testimonials-text">
                      <p>
                        I have been a business customer of KOS for over 10
                        years. I rely on my web site to drive traffic to my
                        business and I depend on KOS to make sure that my site
                        is up and running 24/7. When I do have any technical
                        problems they are only a phone call away. The staff is
                        wonderful to deal with.
                      </p>
                    </div>
                    <div className="testimonials-username">
                      Donna,
                      <em style={{ fontWeight: 100 }}> Creative Effects</em>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="page-footer">
        <div className="back-to-top hidden-xs">
          <a href="#top">
            <span className="flex-wrap icon icon-up-arrow" />
          </a>
        </div>
        <div className="container mx-auto">
          <div className="flex flex-wrap footer-row">
            <div className="pl-4 pr-4 sm:w-1/3">
              <div className="location">
                <i className="icon icon-location" />
                The LaSalle Mews
                <br />
                303 Bagot Street, 16A
                <br />
                Kingston, ON K7K 5W7
                <br />
                <br />
                <span
                  style={{
                    fontSize: 26,
                    fontWeight: "bolder",
                    color: "#c70000",
                  }}
                >
                  613-549-8667
                </span>
              </div>
            </div>
            <div className="pl-4 pr-4 sm:w-1/3 first-mobile">
              <div className="location">
                <i className="icon icon-location" />
                183 Front Street
                <br />
                (near City Hall)
                <br />
                Belleville, ON K8N 2Y9 <br />
                <br />
                <span
                  style={{
                    fontSize: 26,
                    fontWeight: "bolder",
                    color: "#c70000",
                  }}
                >
                  613-968-7137
                </span>
              </div>
            </div>
            <div className="pl-4 pr-4 sm:w-1/3">
              <div className="logo">
                <a href="/">
                  <img src="/images/logo-invert.png" alt="Logo" />
                </a>
              </div>
            </div>
          </div>
          <div className="footer-bot">
            <div>
              <div id="plemx-root" />
              <a href="http://www.theweathernetwork.com">The Weather Network</a>
            </div>
            <div className="copyright">
              Copyright © KOS - 2021 {" | "}
              <a style={{ color: "#ffffff" }} href="/policies/">
                KOS Policies
              </a>
              {" | "}
              <a style={{ color: "#ffffff" }} href="/tac/">
                Terms and Conditions
              </a>
              {" | "}
              <a style={{ color: "#ffffff" }} href="/e911">
                e911
              </a>
              {" | "}
              <a style={{ color: "#ffffff" }} href="/wst/">
                Personal Web Space TAC
              </a>
              <br />
              <div align="center">
                <span style={{ color: "#ffffff" }}>
                  <strong>Serving Eastern Ontario: </strong>
                </span>
                <a
                  style={{ color: "#fff" }}
                  href="/kingston-internet-services/"
                >
                  Kingston
                </a>
                {" | "}
                <a
                  style={{ color: "#fff" }}
                  href="/gananoque-internet-services/"
                >
                  Gananoque
                </a>
                {" | "}
                <a style={{ color: "#fff" }} href="/picton-internet-services/">
                  Picton
                </a>
                {" | "}
                <a
                  style={{ color: "#fff" }}
                  href="/brighton-internet-services/"
                >
                  Brighton
                </a>
                {" | "}
                <a style={{ color: "#fff" }} href="/trenton-internet-services/">
                  Trenton
                </a>
                {" | "}
                <a
                  style={{ color: "#fff" }}
                  href="/belleville-internet-services/"
                >
                  Belleville{" "}
                </a>
                {" | "}
                <a style={{ color: "#fff" }} href="/napanee-internet-services/">
                  Napanee
                </a>
              </div>
            </div>
            <div className="social-links">
              <ul>
                <li>
                  <a
                    className="icon icon-social-facebook"
                    href="https://www.facebook.com/Kingston-Online-Services-120301901358202/"
                    target="_blank"
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
        <canvas id="footerSea" />
      </div>
    </>
  )
}
