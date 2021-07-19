import Image from "@/components/Utils/CustomImage"
import BUTTON from "@/components/Utils/DECOR/BUTTON"

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
      <div className="absolute flex flex-col justify-center w-full h-full space-y-8 text-center">
        <div className="text-7xl">
          <span style={{ textShadow: "2px 2px rgba(0, 0, 0, 0.5)" }}>
            {text1}
          </span>
        </div>
        <div className="text-3xl">
          <strong>
            <span style={{ textShadow: "2px 2px rgba(0, 0, 0, 0.5)" }}>
              {text2}
            </span>
          </strong>
        </div>
        <div className="pt-6 mx-auto">
          <BUTTON href={href} text={text3} />
        </div>
      </div>
    </div>
  )
}

export default SlideshowSlide
