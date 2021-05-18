import React from "react"
import Image from "@/components/CustomImage"

export default function ServicesCarousel({ children }: { children: any }) {
  return (
    <div className="pt-20 block-class">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-between services-carousel">
          <div
            className="pl-4 pr-4 sm:w-1/2"
            data-animation="fadeInLeft"
            data-animation-delay="0s"
          >
            <div className="service-item">
              <a href="/residential/" className="icon-circle">
                <div className="icon-hover" />
                <div className="grid w-48 h-48">
                  <Image src="/assets/images/home/icon-home.png" alt="ocean" />
                </div>
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
            className="pl-4 pr-4 sm:w-1/2"
            data-animation="fadeInUp"
            data-animation-delay="0s"
          >
            <div className="service-item">
              <a href="/business/" className="icon-circle">
                <div className="icon-hover" />
                <div className="grid w-48 h-48">
                  <Image
                    src="/assets/images/home/icon-business.png"
                    alt="ocean"
                  />
                </div>
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
  )
}

/*
    <div className="block-class">
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
                <div className="grid w-48 h-48">
                  <Image src="/assets/images/home/icon-home.png" alt="ocean" />
                </div>
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
                <div className="grid w-48 h-48">
                  <Image src="/assets/images/home/icon-business.png" alt="ocean" />
                </div>
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
    </div>*/
