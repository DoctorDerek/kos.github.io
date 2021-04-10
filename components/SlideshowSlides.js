import React from "react"
import Image from "@/components/Image"
import SlideshowSlide from "@/components/SlideshowSlide"

const SlideshowSlides = () => (
  <>
    <div className="grid grid-cols-1 transform-gpu keen-slider__slide">
      <Image src="/images/slider/slide1.jpg" alt="" />
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="text text1">
          <span style={{ textShadow: "2px 2px rgba(0, 0, 0, 0.5)" }}>
            We get you connected and keep you connected
          </span>
        </div>
        <div className="text text2">
          <strong>
            <span style={{ textShadow: "2px 2px rgba(0, 0, 0, 0.5)" }}>
              worry-free connectivity
            </span>
          </strong>
        </div>
        <div className="text text3">
          <a
            href="/order/"
            className="!mt-10 text-white hover:active:focus:outline-none hover:active:focus:shadow-none py-4 px-6 leading-normal h-[51px] rounded-xl align-top font-bold border-none uppercase transition-all duration-300 no-underline btn btn-orange focus:active:bg-[#005395] bg-[#b0243d] shadow-xl border:none"
          >
            Get connected!
          </a>
        </div>
      </div>
    </div>
  </>
)

export default SlideshowSlides

/*       <div>
        
      </div>
      <div>
        <div className="vert-wrapper">
          <div className="vert">
            <div className="text text1">
              <span style={{ textShadow: "2px 2px rgba(0, 0, 0, 0.5)" }}>
                Reliable service for 100% internet enjoyment
              </span>
            </div>
            <div className="text text2">
              <strong>
                <span style={{ textShadow: "2px 2px rgba(0, 0, 0, 0.5)" }}>
                  worry-free connectivity
                </span>
              </strong>
            </div>
            <div className="text text3">
              <a
                href="/order/"
                className="inline-block px-4 py-2 text-base font-normal leading-normal text-center no-underline whitespace-no-wrap align-middle border rounded select-none btn btn-orange"
              >
                Get connected!
              </a>
            </div>
          </div>
        </div>
      </div> */
