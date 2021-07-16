import Image from "@/components/Utils/CustomImage"
import Link from "@/components/Utils/CustomLink"

export default function HomeServicesCarousel({ children }: { children?: any }) {
  return (
    <div className="pt-20 mb-24">
      <div className="mx-auto">
        <div className="flex flex-wrap justify-between services-carousel">
          <div
            className="pl-4 pr-4 sm:w-1/2"
            data-animation="fadeInLeft"
            data-animation-delay="0s"
          >
            <div className="service-item">
              <Link href="/residential/" className="icon-circle">
                <div className="icon-hover" />
                <div className="grid w-48 h-48">
                  <Image
                    src="/assets/images/home/icon-home.png"
                    alt="Decoration"
                  />
                </div>
              </Link>
              <div className="service-title">
                <h4>
                  <Link href="/residential/">
                    RESIDENTIAL <br />
                    SERVICES
                  </Link>
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
              <Link href="/business/" className="icon-circle">
                <div className="icon-hover" />
                <div className="grid w-48 h-48">
                  <Image
                    src="/assets/images/home/icon-business.png"
                    alt="Decoration"
                  />
                </div>
              </Link>
              <div className="service-title">
                <h4>
                  <Link href="/business/">
                    BUSINESS <br />
                    SERVICES
                  </Link>
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
    <div className="mb-24">
      <div className="mx-auto">
        <div className="flex flex-wrap justify-between services-carousel">
          <div
            className="pl-4 pr-4 sm:w-1/2 animation"
            data-animation="fadeInLeft"
            data-animation-delay="0s"
          >
            <div className="service-item">
              <Link href="/residential/" className="icon-circle">
                <div className="icon-hover" />
                <div className="grid w-48 h-48">
                  <Image src="/assets/images/home/icon-home.png" alt="Decoration" />
                </div>
              </Link>
              <div className="service-title">
                <h4>
                  <Link href="/residential/">
                    RESIDENTIAL <br />
                    SERVICES
                  </Link>
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
              <Link href="/business/" className="icon-circle">
                <div className="icon-hover" />
                <div className="grid w-48 h-48">
                  <Image src="/assets/images/home/icon-business.png" alt="Decoration" />
                </div>
              </Link>
              <div className="service-title">
                <h4>
                  <Link href="/business/">
                    BUSINESS <br />
                    SERVICES
                  </Link>
                </h4>
              </div>
              <div className="service-text">Keep your business connected</div>
            </div>
          </div>
        </div>
      </div>
    </div>*/
