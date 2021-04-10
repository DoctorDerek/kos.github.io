import React, { useEffect, useState, useRef } from "react"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import SlideshowSlides from "@/components/SlideshowSlides"
import Image from "@/components/Image"

const Slideshow = () => {
  const [pause, setPause] = useState(false)
  const timer = useRef()
  const [sliderRef, slider] = useKeenSlider({
    loop: true,
    duration: 3000, // animation duration in ms
    dragStart: () => {
      setPause(true)
    },
    dragEnd: () => {
      setPause(false)
    },
  })

  useEffect(() => {
    sliderRef.current.addEventListener("mouseover", () => {
      setPause(true)
    })
    sliderRef.current.addEventListener("mouseout", () => {
      setPause(false)
    })
  }, [sliderRef])

  useEffect(() => {
    timer.current = setInterval(() => {
      if (!pause && slider) {
        slider.next()
      }
    }, 5000) // autoplay interval in ms
    return () => {
      clearInterval(timer.current)
    }
  }, [pause, slider])

  return (
    <>
      <div
        ref={sliderRef}
        className="grid w-full grid-cols-1 text-white border-2 border-black border-solid keen-slider"
      >
        <div className="grid grid-cols-1 bg-blue-500 transform-gpu keen-slider__slide h-96">
          Slide 1
        </div>
        <div className="grid grid-cols-1 bg-red-500 transform-gpu keen-slider__slide h-96">
          Slide 2
        </div>
        {/* <canvas id="sea" /> */}
      </div>
    </>
  )
}

export default Slideshow

/*            <div className="grid grid-cols-1 transform-gpu keen-slider__slide">
          <Image src="/images/slider/slide1.jpg" alt="" className="h-96" />
          <div className="absolute flex flex-col items-center justify-around w-full bg-blue-500 h-96 opacity-80">
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
        <div className="grid grid-cols-1 transform-gpu keen-slider__slide">
          <Image src="/images/slider/slide2.jpg" alt="" className="h-96" />
          <div className="absolute flex flex-col items-center justify-around w-full bg-blue-500 h-96 opacity-80">
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
        </div> */
