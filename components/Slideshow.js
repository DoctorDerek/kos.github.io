import React, { useEffect, useState, useRef } from "react"
import { useKeenSlider } from "keen-slider/react"
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
  /*
  useEffect(() => {
    sliderRef.current.addEventListener("mouseover", () => {
      setPause(true)
    })
    sliderRef.current.addEventListener("mouseout", () => {
      setPause(false)
    })
  }, [sliderRef])*/

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
    <div className="grid w-full slider-wrapper theme-default h-112">
      <div id="slider" className="nivoSlider">
        <Image
          src="/images/slider/slide1.jpg"
          title="#htmlcaption1"
          data-thumb="/images/slider/slide1.jpg"
          alt
        />
        <Image
          src="/images/slider/slide2.jpg"
          title="#htmlcaption2"
          data-thumb="/images/slider/slide2.jpg"
          alt
        />
      </div>
      <canvas id="sea" />
      <div id="htmlcaption1" className="nivo-caption">
        <div className="vert-wrapper">
          <div className="vert">
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
      </div>
      <div id="htmlcaption2" className="nivo-caption">
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
      </div>
    </div>
  )
}

export default Slideshow

/*    <div
      ref={sliderRef}
      className="grid w-full grid-cols-1 border-2 border-black border-solid h-60 keen-slider"
    >
      <SlideshowSlides />
    </div>
  */
