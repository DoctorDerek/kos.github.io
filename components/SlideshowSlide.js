import React from "react"
import Image from "@/components/Image"

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
}) => {
  // Both transform-gpu and style={{ minWidth: 0, maxWidth: 0 }}
  // are required to eliminate Cumulative Layout Shift (CLS) here.
  return (
    <div
      className="grid grid-cols-1 transform-gpu keen-slider__slide h-96"
      style={{ minWidth: 0, maxWidth: 0 }}
    >
      <Image src={src} alt={alt} className="h-full" />
      <div className="absolute flex flex-col items-center justify-center w-full h-full opacity-80">
        <div className="text text1 transform-gpu">
          <span style={{ textShadow: "2px 2px rgba(0, 0, 0, 0.5)" }}>
            {text1}
          </span>
        </div>
        <div className="text text2 transform-gpu">
          <strong>
            <span style={{ textShadow: "2px 2px rgba(0, 0, 0, 0.5)" }}>
              {text2}
            </span>
          </strong>
        </div>
        <div className="text text3 transform-gpu">
          <button
            href={href}
            className="!mt-10 text-white hover:active:focus:outline-none hover:active:focus:shadow-none py-4 px-6 leading-normal h-[51px] rounded-xl align-top font-bold border-none uppercase no-underline btn btn-orange focus:active:bg-[#005395] bg-[#b0243d] shadow-xl border:none"
          >
            {text3}
          </button>
        </div>
      </div>
    </div>
  )
}

export default SlideshowSlide
