import React, { useEffect, useState, useRef } from "react"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import SlideshowSlide from "./SlideshowSlide"

const Slideshow = () => {
  const [pause, setPause] = useState(false)
  const timer = useRef()
  const [sliderRef, slider] = useKeenSlider({
    loop: true,
    duration: 10000, // animation duration in ms
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
    }, 15000) // autoplay interval in ms
    return () => {
      clearInterval(timer.current)
    }
  }, [pause, slider])

  const [loaded, setLoaded] = useState(false)
  useEffect(() => {
    setLoaded(true)
  }, [])

  return (
    <>
      <div
        ref={sliderRef}
        className="overflow-hidden text-white keen-slider h-60 sm:h-80 md:h-112 lg:h-112 xl:h-128"
      >
        <SlideshowSlide
          src="/images/slider/slide1.jpg"
          alt="ocean"
          text1="We get you connected and keep you connected"
          text2="worry-free connectivity"
          href="/order/"
          text3="Get connected!"
        />
        <SlideshowSlide
          src="/images/slider/slide2.jpg"
          alt="ocean"
          text1="Reliable service for 100% internet enjoyment"
          text2="worry-free connectivity"
          href="/order/"
          text3="Get connected!"
          hidden={!loaded}
        />
        {/* <canvas id="sea" /> */}
      </div>
    </>
  )
}

export default Slideshow

/*             */
