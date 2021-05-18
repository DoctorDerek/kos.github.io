import React from "react"
import Image from "@/components/CustomImage"

const isRequired = () => {
  throw new Error("Missing required attribute in SlideshowSlide component")
}

const SlideshowSlide = ({
  src = isRequired(),
  alt = isRequired(),
  text1 = isRequired(),
  text2 = isRequired(),
  href = isRequired(),
  text3 = isRequired(),
}: {
  src: string | never
  alt: string | never
  text1: string | never
  text2: string | never
  href: string | never
  text3: string | never
}) => {
  // Both transform-gpu and style={{ minWidth: 0, maxWidth: 0 }}
  // are required to eliminate Cumulative Layout Shift (CLS) here.
  return (
    <div
      className="grid grid-cols-1 transform-gpu keen-slider__slide"
      style={{ minWidth: 0, maxWidth: 0 }}
    >
      <div className="grid w-full h-full">
        <Image src={src} alt={alt} />
      </div>
      <div className="absolute flex flex-col content-center justify-center w-full h-full text-center opacity-80">
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
          <a
            href={href}
            className="text-white active:focus:hover:outline-none active:focus:hover:shadow-none py-4 px-6 leading-normal h-[51px] rounded-xl align-top font-bold border-none uppercase no-underline btn btn-orange focus:a
            ctive:bg-[#005395] bg-[#b0243d] shadow-xl"
          >
            {text3}
          </a>
        </div>
      </div>
    </div>
  )
}

export default SlideshowSlide
