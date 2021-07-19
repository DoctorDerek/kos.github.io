import Image from "@/components/Utils/CustomImage"
import Link from "@/components/Utils/CustomLink"
import DIVIDER from "@/components/Utils/DECOR/DIVIDER"

export default function HomeCategoryCarousel() {
  return (
    <div className="mb-16">
      <div className="mx-auto">
        <h2 className="mb-2 text-5xl font-semibold text-center text-gray-700 md:mb-5">
          Internet Packages
          <DIVIDER />
        </h2>
        <div className="flex flex-wrap category-carousel font-lato">
          <div className="pl-4 pr-4 sm:w-1/2 md:w-1/3">
            <Link
              href="/res/high-speed-cable/"
              className="block mb-10 no-underline group"
              data-animation="fadeInLeft"
              data-animation-delay="0s"
            >
              <div className="relative mb-5 overflow-hidden rounded-3xl">
                <div className="grid w-48 h-48">
                  <Image src="/assets/images/cable.jpg" alt="Decoration" />
                </div>
                <div className="absolute p-0 m-0 mb-5 text-xl font-bold text-white uppercase font-lato bottom-4 left-5">
                  <span
                    style={{
                      textShadow: "2px 2px rgba(0, 0, 0, 0.5)",
                      backgroundColor: "rgba(0, 0, 0, 0.5)",
                      padding: 5,
                    }}
                  >
                    Cable
                  </span>
                </div>
                <div className="bg-teal-light transform skew-[59deg] translate-x-[-75%] duration-300 absolute top-0 bottom-0 w-full opacity-0 left--1/2 right-1/2 hover:opacity-100 hover:left-1/4 hover:right-1/2 transition-all duration-600">
                  <div className="wave" />
                </div>
              </div>
              <div className="relative mr-11">
                Surf, shop, stream music. Stay connected with family and
                friends.
                <span className="transition-all duration-300">
                  <span className="flex-wrap icon icon-right-arrow" />
                </span>
              </div>
            </Link>
          </div>
          <div
            className="pl-4 pr-4 sm:w-1/2 md:w-1/3"
            data-animation="fadeIn"
            data-animation-delay="0s"
          >
            <Link
              href="/res/wireless-broadband/"
              className="block mb-10 no-underline group"
            >
              <div className="relative mb-5 overflow-hidden rounded-3xl">
                <div className="grid w-48 h-48">
                  <Image src="/assets/images/wireless.jpg" alt="Decoration" />
                </div>
                <div className="absolute p-0 m-0 mb-5 text-xl font-bold text-white uppercase font-lato bottom-4 left-5">
                  <span
                    style={{
                      textShadow: "2px 2px rgba(0, 0, 0, 0.5)",
                      backgroundColor: "rgba(0, 0, 0, 0.5)",
                      padding: 5,
                    }}
                  >
                    Wireless
                  </span>
                </div>
                <div className="bg-teal-light transform skew-[59deg] translate-x-[-75%] duration-300 absolute top-0 bottom-0 w-full opacity-0 left--1/2 right-1/2 hover:opacity-100 hover:left-1/4 hover:right-1/2 transition-all duration-600">
                  <div className="wave" />
                </div>
              </div>
              <div className="relative mr-11">
                High speed rural internet at a price that suits your needs.
                <span className="transition-all duration-300">
                  <span className="flex-wrap icon icon-right-arrow" />
                </span>
              </div>
            </Link>
          </div>
          <div
            className="pl-4 pr-4 sm:w-1/2 md:w-1/3"
            data-animation="fadeInRight"
            data-animation-delay="0s"
          >
            <Link
              href="/res/high-speed-dsl/"
              className="block mb-10 no-underline group"
            >
              <div className="relative mb-5 overflow-hidden rounded-3xl">
                <div className="grid w-48 h-48">
                  <Image src="/assets/images/dsl.jpg" alt="Decoration" />
                </div>
                <div className="absolute p-0 m-0 mb-5 text-xl font-bold text-white uppercase font-lato bottom-4 left-5">
                  <span
                    style={{
                      textShadow: "2px 2px rgba(0, 0, 0, 0.5)",
                      backgroundColor: "rgba(0, 0, 0, 0.5)",
                      padding: 5,
                    }}
                  >
                    DSL
                  </span>
                </div>
                <div className="bg-teal-light transform skew-[59deg] translate-x-[-75%] duration-300 absolute top-0 bottom-0 w-full opacity-0 left--1/2 right-1/2 hover:opacity-100 hover:left-1/4 hover:right-1/2 transition-all duration-600">
                  <div className="wave" />
                </div>
              </div>
              <div className="relative mr-11">
                High speed internet plans beginning at only $26.95 / month!
                <span className="transition-all duration-300">
                  <span className="flex-wrap icon icon-right-arrow" />
                </span>
              </div>
            </Link>
          </div>
          <div className="pl-4 pr-4 sm:w-1/2 md:w-1/3">
            <Link
              href="/res/voip/"
              className="block mb-10 no-underline group"
              data-animation="fadeInLeft"
              data-animation-delay="0s"
            >
              <div className="relative mb-5 overflow-hidden rounded-3xl">
                <div className="grid w-48 h-48">
                  <Image src="/assets/images/voip.jpg" alt="Decoration" />
                </div>
                <div className="absolute p-0 mb-5 text-xl font-bold text-white uppercase font-lato bottom-4 left-5">
                  <span
                    style={{
                      textShadow: "2px 2px rgba(0, 0, 0, 0.5)",
                      backgroundColor: "rgba(0, 0, 0, 0.5)",
                      padding: 5,
                    }}
                  >
                    VOIP
                  </span>
                </div>
                <div className="bg-teal-light transform skew-[59deg] translate-x-[-75%] duration-300 absolute top-0 bottom-0 w-full opacity-0 left--1/2 right-1/2 hover:opacity-100 hover:left-1/4 hover:right-1/2 transition-all duration-600">
                  <div className="wave" />
                </div>
              </div>
              <div className="relative mr-11">
                Premium phone service over your high speed internet connection.
                <span className="transition-all duration-300">
                  <span className="flex-wrap icon icon-right-arrow" />
                </span>
              </div>
            </Link>
          </div>
          <div className="pl-4 pr-4 sm:w-1/2 md:w-1/3">
            <Link
              href="/res/mail/"
              className="block mb-10 no-underline group"
              data-animation="fadeIn"
              data-animation-delay="0s"
            >
              <div className="relative mb-5 overflow-hidden rounded-3xl">
                <div className="grid w-48 h-48">
                  <Image src="/assets/images/mail.jpg" alt="Decoration" />
                </div>
                <div className="absolute p-0 mb-5 text-xl font-bold text-white uppercase font-lato bottom-4 left-5">
                  <span
                    style={{
                      textShadow: "2px 2px rgba(0, 0, 0, 0.5)",
                      backgroundColor: "rgba(0, 0, 0, 0.5)",
                      padding: 5,
                    }}
                  >
                    Mail
                  </span>
                </div>
                <div className="bg-teal-light transform skew-[59deg] translate-x-[-75%] duration-300 absolute top-0 bottom-0 w-full opacity-0 left--1/2 right-1/2 hover:opacity-100 hover:left-1/4 hover:right-1/2 transition-all duration-600">
                  <div className="wave" />
                </div>
              </div>
              <div className="relative mr-11">
                Excellent, dynamic e-mail service with automatic spam and virus
                protection.
                <span className="transition-all duration-300">
                  <span className="flex-wrap icon icon-right-arrow" />
                </span>
              </div>
            </Link>
          </div>
          <div className="pl-4 pr-4 sm:w-1/2 md:w-1/3">
            <Link
              href="/hosting/packages/"
              className="block mb-10 no-underline group"
              data-animation="fadeInRight"
              data-animation-delay="0s"
            >
              <div className="relative mb-5 overflow-hidden rounded-3xl">
                <div className="grid w-48 h-48">
                  <Image src="/assets/images/hosting.jpg" alt="Decoration" />
                </div>
                <div className="absolute p-0 m-0 mb-5 text-xl font-bold text-white uppercase font-lato bottom-4 left-5">
                  <span
                    style={{
                      textShadow: "2px 2px rgba(0, 0, 0, 0.5)",
                      backgroundColor: "rgba(0, 0, 0, 0.5)",
                      padding: 5,
                    }}
                  >
                    HOSTING
                  </span>
                </div>
                <div className="bg-teal-light transform skew-[59deg] translate-x-[-75%] duration-300 absolute top-0 bottom-0 w-full opacity-0 left--1/2 right-1/2 hover:opacity-100 hover:left-1/4 hover:right-1/2 transition-all duration-600">
                  <div className="wave" />
                </div>
              </div>
              <div className="relative mr-11">
                A variety of options for getting your information out onto the
                Internet in style.
                <span className="transition-all duration-300">
                  <span className="flex-wrap icon icon-right-arrow" />
                </span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
