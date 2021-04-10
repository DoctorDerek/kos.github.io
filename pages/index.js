import Image from "@/components/Image"
import ImageFixed from "next/image"
/*
import Link from "@/components/Link"
import { PageSeo } from "@/components/SEO"
import Tag from "@/components/Tag"
import siteMetadata from "@/data/siteMetadata"
const MAX_DISPLAY = 5
const postDateTemplate = { year: "numeric", month: "long", day: "numeric" }
*/
import { getAllFilesFrontMatter } from "@/lib/mdx"

import Slideshow from "@/components/Slideshow"
import ServicesCarousel from "@/components/ServicesCarousel"
import CategoryCarousel from "@/components/CategoryCarousel"
import Pricing from "@/components/Pricing"
import TextIconCarousel from "@/components/TextIconCarousel"

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
  /*
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
  useScript("js/theWeatherNetwork.js")*/

  return (
    <>
      <Slideshow />
      <ServicesCarousel />
      <CategoryCarousel />
      <Pricing />
      <TextIconCarousel />
      <div className="block-class bg-1">
        <div className="grid w-full h-[1000px]">
          <Image src="/images/block-bg.jpg" alt />
        </div>
        <div className="container absolute transform-gpu left-1/2 translate-x-[-50%] translate-y-[-900px]">
          <h2 className="text-center decor decor-white">
            Let's Get Started
            <div className="block mx-auto">
              <ImageFixed
                src="/images/h-decor-white.png"
                height="4px"
                width="64px"
                alt
              />
            </div>
          </h2>
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
      <div className="block-class bottom-sm-margin">
        <div className="container mx-auto">
          <h2 className="text-center decor flex-growor">
            News and Events
            <div className="block mx-auto">
              <ImageFixed
                src="/images/h-decor.png"
                height="4px"
                width="64px"
                alt
              />
            </div>
          </h2>
          <div className="flex flex-wrap news-item-row">
            <div className="pl-4 pr-4 sm:w-1/2 md:w-1/3">
              <div
                className="news-item"
                data-animation="fadeInLeft"
                data-animation-delay="0s"
              >
                <div className="news-item-image">
                  <div className="grid w-full h-40">
                    <Image src="/assets/images/news/logo.png" alt />
                  </div>
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
                className="news-item"
                data-animation="fadeInLeft"
                data-animation-delay="0s"
              >
                <div className="news-item-image">
                  <div className="grid w-full h-40">
                    <Image src="/assets/images/news/logo.png" alt />
                  </div>
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
                className="news-item"
                data-animation="fadeInLeft"
                data-animation-delay="0s"
              >
                <div className="news-item-image">
                  <div className="grid w-full h-40">
                    <Image
                      src="/assets/images/news/814185689_news-unlimited-packages.jpg"
                      alt
                    />
                  </div>
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
      <div className="block-class bottom-md-margin">
        <div className="container mx-auto">
          <div className="flex flex-wrap">
            <div className="w-full">
              <div className="testimonials" data-animation="fadeInLeft">
                <h3 className="text-center color decor">
                  What our customers are saying
                  <div className="block mx-auto">
                    <ImageFixed
                      src="/images/h-decor.png"
                      height="4px"
                      width="64px"
                      alt
                    />
                  </div>
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
      <div className="page-footer w-full h-[380px]">
        <div className="grid w-full h-[380px]">
          <Image src="/images/footer-bg.jpg" alt />
        </div>
        <div className="back-to-top hidden-xs">
          <a href="#top">
            <span className="flex-wrap icon icon-up-arrow" />
          </a>
        </div>
        <div className="container absolute transform-gpu left-1/2 translate-x-[-50%] translate-y-[-360px]">
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
            <div className="pl-4 pr-4 sm:w-1/3">
              <div className="logo">
                <a href="/">
                  <div className="grid w-[300px] h-[125px]">
                    <Image src="/images/logo-invert.png" alt="Logo" />
                  </div>
                </a>
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
            </div>{" "}
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
