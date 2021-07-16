import "keen-slider/keen-slider.min.css"

import { useKeenSlider } from "keen-slider/react"
import { useEffect, useRef, useState } from "react"

import SlideshowSlide from "@/components/Home/HomeSlideshowSlide"

const Slideshow = () => {
  const [pause, setPause] = useState(false)
  const timer = useRef() as React.MutableRefObject<NodeJS.Timeout>
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
    sliderRef.current &&
      sliderRef.current.addEventListener("mouseover", () => {
        setPause(true)
      })
    sliderRef.current &&
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
        ref={sliderRef as React.RefObject<HTMLDivElement>}
        className="text-white keen-slider h-80 sm:h-128"
      >
        <SlideshowSlide
          src="/images/slider/slide1.jpg"
          alt="Decoration"
          text1="We get you connected and keep you connected"
          text2="worry-free connectivity"
          href="/order/"
          text3="Get connected!"
          preload="true"
        />
        <SlideshowSlide
          src="/images/slider/slide2.jpg"
          alt="Decoration"
          text1="Reliable service for 100% internet enjoyment"
          text2="worry-free connectivity"
          href="/order/"
          text3="Get connected!"
        />
        {/* <canvas id="sea" /> */}
      </div>
    </>
  )
}

export default Slideshow

/*             */
