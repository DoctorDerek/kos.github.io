import React, { useEffect, useState, useRef } from "react"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import SlideshowSlide from "./SlideshowSlide"

const Slideshow = () => {
  const [pause, setPause] = useState(false)
  const [currentSlide, setCurrentSlide] = React.useState(0)
  const timer = useRef()
  const [sliderRef, slider] = useKeenSlider({
    loop: true,
    duration: 3000, // animation duration in ms
    dragStart: () => {
      setPause(true)
    },
    move(s) {
      setCurrentSlide(s.details().relativeSlide)
    },
    dragEnd: (s) => {
      setPause(false)
      setCurrentSlide(s.details().relativeSlide)
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
    }, 15000) // autoplay interval in ms
    return () => {
      clearInterval(timer.current)
    }
  }, [pause, slider])

  return (
    <>
      <div
        ref={sliderRef}
        className="text-white keen-slider h-112 mb-8 lg:mb-0 sm:h-112 md:h-[32rem] lg:h-[36rem] xl:h-[40rem]"
      >
        <SlideshowSlide
          src="/images/slider/slide1.jpg"
          alt="ocean"
          text1="We get you connected and keep you connected"
          className="!opacity-0"
          text2="worry-free connectivity"
          href="/order/"
          text3="Get connected!"
          currentSlide={currentSlide == 0}
        />
        <SlideshowSlide
          src="/images/slider/slide2.jpg"
          alt="ocean"
          text1="Reliable service for 100% internet enjoyment"
          text2="worry-free connectivity"
          href="/order/"
          text3="Get connected!"
          currentSlide={currentSlide == 1}
        />
        {/* <canvas id="sea" /> */}
      </div>
    </>
  )
}

export default Slideshow

/*             */
