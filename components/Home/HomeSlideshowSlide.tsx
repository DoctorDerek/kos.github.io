import Image from "@/components/Utils/CustomImage"
import Link from "@/components/Utils/CustomLink"

const SlideshowSlide = ({
  src,
  alt,
  text1,
  text2,
  href,
  text3,
  preload,
}: {
  src: string
  alt: string
  text1: string
  text2: string
  href: string
  text3: string
  preload?: string
}) => {
  if (!(src && alt && text1 && text2 && href && text3)) {
    throw new Error("Missing required attribute in <SlideshowSlide>")
  }
  // Both transform-gpu and style={{ minWidth: 0, maxWidth: 0 }}
  // are required to eliminate Cumulative Layout Shift (CLS) here.
  return (
    <div
      className="grid grid-cols-1 transform-gpu keen-slider__slide"
      style={{ minWidth: 0, maxWidth: 0 /* needed to eliminate CLS */ }}
    >
      <div className="grid w-full h-full">
        <Image src={src} alt={alt} preload={preload ? preload : ""} />
      </div>
      <div className="absolute flex flex-col justify-center w-full h-full text-center">
        <div className="text text1">
          <span style={{ textShadow: "2px 2px rgba(0, 0, 0, 0.5)" }}>
            {text1}
          </span>
        </div>
        <div className="text text2">
          <strong>
            <span style={{ textShadow: "2px 2px rgba(0, 0, 0, 0.5)" }}>
              {text2}
            </span>
          </strong>
        </div>
        <div className="text text3">
          <Link
            href={href}
            className="text-white active:focus:hover:outline-none active:focus:hover:shadow-none py-4 px-6 leading-normal h-[51px] rounded-xl align-top font-bold border-none uppercase no-underline btn btn-orange focus:a
            ctive:bg-blue-brand bg-[#b0243d] shadow-xl"
          >
            {text3}
          </Link>
        </div>
      </div>
    </div>
  )
}

export default SlideshowSlide
