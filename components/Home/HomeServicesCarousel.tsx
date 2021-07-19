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
            <div className="relative mb-5 text-center">
              <Link
                href="/residential/"
                className="relative block w-48 h-48 mx-auto mb-12 overflow-hidden text-white no-underline rounded-full bg-gradient-to-b from-teal-brand to-blue-brand group"
              >
                <div className="absolute top-0 left-0 w-full h-full transition-all duration-500 bg-blue-800 opacity-0 group-hover:opacity-100" />
                <div className="grid w-48 h-48">
                  <Image
                    src="/assets/images/home/icon-home.png"
                    alt="Decoration"
                  />
                </div>
              </Link>
              <div className="p-0 mb-10 text-2xl font-bold text-gray-700 font-lato md:mb-5">
                <Link
                  href="/residential/"
                  className="text-gray-700 no-underline hover:text-blue-brand"
                >
                  RESIDENTIAL
                  <br />
                  SERVICES
                </Link>
              </div>
              <div className="w-4/5 mx-auto my-0">
                Stay connected with family
              </div>
            </div>
          </div>
          <div
            className="pl-4 pr-4 sm:w-1/2"
            data-animation="fadeInUp"
            data-animation-delay="0s"
          >
            <div className="relative mb-5 text-center">
              <Link
                href="/business/"
                className="relative block w-48 h-48 mx-auto mb-12 overflow-hidden text-white no-underline rounded-full bg-gradient-to-b from-teal-brand to-blue-brand group"
              >
                <div className="absolute top-0 left-0 w-full h-full transition-all duration-500 bg-blue-800 opacity-0 group-hover:opacity-100" />
                <div className="grid w-48 h-48">
                  <Image
                    src="/assets/images/home/icon-business.png"
                    alt="Decoration"
                  />
                </div>
              </Link>
              <div className="p-0 mb-10 text-2xl font-bold text-gray-700 font-lato md:mb-5">
                <Link
                  href="/business/"
                  className="text-gray-700 no-underline hover:text-blue-brand"
                >
                  BUSINESS <br />
                  SERVICES
                </Link>
              </div>
              <div className="w-4/5 mx-auto my-0">
                Keep your business connected
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
