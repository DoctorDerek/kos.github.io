import React from "react"
import ImageFixed from "next/image"

export default function TextIconCarousel() {
  return (
    <div className="block-class bottom-sm-margin">
      <div className="container mx-auto">
        <h2 className="text-center decor flex-growor">
          Why choose us?
          <div className="block mx-auto">
            <ImageFixed
              src="/images/h-decor.png"
              height="4px"
              width="64px"
              alt
            />
          </div>
        </h2>
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
  )
}
