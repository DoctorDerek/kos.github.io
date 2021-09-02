import "keen-slider/keen-slider.min.css"

import { useKeenSlider } from "keen-slider/react"
import { useEffect, useRef } from "react"

import SlideshowSlide from "@/components/Home/HomeSlideshowSlide"

export default function HomeSlideshow() {
  const timer = useRef() as React.MutableRefObject<NodeJS.Timeout>
  const [sliderRef, slider] = useKeenSlider({
    loop: true,
    duration: 3000, // animation duration in milliseconds for slide transition
  })

  useEffect(() => {
    timer.current = setInterval(() => {
      if (slider) slider.next()
    }, 5000) // autoplay interval in milliseconds (time between slides)
    // note: autoplay interval should be the same as in @/tailwind.config.js
    return () => {
      clearInterval(timer.current)
    }
  }, [slider])

  return (
    <>
      <div
        ref={sliderRef as React.RefObject<HTMLDivElement>}
        className="w-full text-white keen-slider font-lato h-80 sm:h-128"
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
