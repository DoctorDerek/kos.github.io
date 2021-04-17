import React from "react"
import Image from "@/components/Image"
import ImageFixed from "next/image"

export default function NewsAndEvents() {
  return (
    <div className=" block-class bottom-sm-margin">
      <div className="container mx-auto">
        <h2 className="flex-grow text-center decor">
          News and Events
          <div className="block mx-auto">
            <ImageFixed
              src="/images/h-decor.png"
              height="4px"
              width="64px"
              alt="ocean"
            />
          </div>
        </h2>
        <div className="flex flex-wrap news-item-row">
          <div className="w-full pl-4 pr-4 sm:w-1/2 md:w-1/3">
            <div
              className="news-item"
              data-animation="fadeInLeft"
              data-animation-delay="0s"
            >
              <div className="news-item-image">
                <div className="grid w-full h-40">
                  <Image src="/assets/images/news/logo.png" alt="ocean" />
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
          <div className="w-full pl-4 pr-4 sm:w-1/2 md:w-1/3">
            <div
              className="news-item"
              data-animation="fadeInLeft"
              data-animation-delay="0s"
            >
              <div className="news-item-image">
                <div className="grid w-full h-40">
                  <Image src="/assets/images/news/logo.png" alt="ocean" />
                </div>
              </div>
              <div className="news-item-text">
                <h5 className="news-item-title">COVID-19</h5>
                <p>
                  With the significant and growing concern across North America
                  of the COVID-19 (“coronavirus”) situation, we wishto provide
                  you on an update on how KOS is handling this situation as it
                  relates to our customers and employees.We will remain fully
                  operational.
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
          <div className="w-full pl-4 pr-4 sm:w-1/2 md:w-1/3">
            <div
              className="news-item"
              data-animation="fadeInLeft"
              data-animation-delay="0s"
            >
              <div className="news-item-image">
                <div className="grid w-full h-40">
                  <Image
                    src="/assets/images/news/814185689_news-unlimited-packages.jpg"
                    alt="ocean"
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
  )
}
