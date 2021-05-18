import React from "react"
import ImageFixed from "next/image"
import Image from "@/components/CustomImage"

export default function CategoryCarousel() {
  return (
    <div className="block-class bottom-sm-margin">
      <div className="container mx-auto">
        <h2 className="text-center decor flex-growor">
          Internet Packages
          <div className="block mx-auto">
            <ImageFixed
              src="/images/h-decor.png"
              height="4px"
              width="64px"
              alt="ocean"
            />
          </div>
        </h2>
        <div className="flex flex-wrap category-carousel">
          <div className="pl-4 pr-4 sm:w-1/2 md:w-1/3">
            <a
              href="/res/high-speed-cable/"
              className="category-item"
              data-animation="fadeInLeft"
              data-animation-delay="0s"
            >
              <div className="category-image">
                <div className="grid w-48 h-48">
                  <Image src="/assets/images/cable.jpg" alt="ocean" />
                </div>
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
            className="pl-4 pr-4 sm:w-1/2 md:w-1/3"
            data-animation="fadeIn"
            data-animation-delay="0s"
          >
            <a href="/res/wireless-broadband/" className="category-item">
              <div className="category-image">
                <div className="grid w-48 h-48">
                  <Image src="/assets/images/wireless.jpg" alt="ocean" />
                </div>
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
            className="pl-4 pr-4 sm:w-1/2 md:w-1/3"
            data-animation="fadeInRight"
            data-animation-delay="0s"
          >
            <a href="/res/high-speed-dsl/" className="category-item">
              <div className="category-image">
                <div className="grid w-48 h-48">
                  <Image src="/assets/images/dsl.jpg" alt="ocean" />
                </div>
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
              className="category-item"
              data-animation="fadeInLeft"
              data-animation-delay="0s"
            >
              <div className="category-image">
                <div className="grid w-48 h-48">
                  <Image src="/assets/images/voip.jpg" alt="ocean" />
                </div>
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
                Premium phone service over your high speed internet connection.
                <span className="category-more-link">
                  <span className="flex-wrap icon icon-right-arrow" />
                </span>
              </div>
            </a>
          </div>
          <div className="pl-4 pr-4 sm:w-1/2 md:w-1/3">
            <a
              href="/res/mail/"
              className="category-item"
              data-animation="fadeIn"
              data-animation-delay="0s"
            >
              <div className="category-image">
                <div className="grid w-48 h-48">
                  <Image src="/assets/images/mail.jpg" alt="ocean" />
                </div>
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
                Excellent, dynamic e-mail service with automatic spam and virus
                protection.
                <span className="category-more-link">
                  <span className="flex-wrap icon icon-right-arrow" />
                </span>
              </div>
            </a>
          </div>
          <div className="pl-4 pr-4 sm:w-1/2 md:w-1/3">
            <a
              href="/hosting/packages/"
              className="category-item"
              data-animation="fadeInRight"
              data-animation-delay="0s"
            >
              <div className="category-image">
                <div className="grid w-48 h-48">
                  <Image src="/assets/images/hosting.jpg" alt="ocean" />
                </div>
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
  )
}
