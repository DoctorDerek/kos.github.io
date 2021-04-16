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
  currentSlide = isRequired(),
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
        <div className={`animate my-6  ${currentSlide ? "slide-top" : " "} `}>
          <span
            style={{
              textShadow: "2px 2px rgba(0, 0, 0, 0.5)",
              fontSize: "80px",
              lineHeight: "2rem",
              marginBottom: "2rem",
            }}
          >
            {text1}
          </span>
        </div>

        <div
          className={`animate my-6   ${currentSlide ? "slide-right" : " "} `}
        >
          <strong>
            <span
              style={{
                textShadow: "2px 2px rgba(0, 0, 0, 0.5)",
                fontSize: "40px",
                marginBottom: "2rem !important",
              }}
            >
              {text2}
            </span>
          </strong>
        </div>
        <div className={`animate   ${currentSlide ? "slide-bottom" : " "} `}>
          <button
            href={href}
            className="text-white !my-6 hover:active:focus:outline-none hover:active:focus:shadow-none py-4 px-6 leading-normal h-[51px] rounded-xl align-top font-bold border-none uppercase no-underline btn btn-orange focus:active:bg-[#005395] bg-[#b0243d] shadow-xl"
          >
            {text3}
          </button>
        </div>
      </div>
    </div>
  )
}

export default SlideshowSlide
