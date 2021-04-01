import React, { useEffect, useState, useRef } from "react"
import { useKeenSlider } from "keen-slider/react"
import SlideshowSlides from "@/components/SlideshowSlides"

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
    <div
      ref={sliderRef}
      className="grid w-full grid-cols-1 border-2 border-black border-solid h-60 keen-slider"
    >
      <SlideshowSlides />
    </div>
  )
}

export default Slideshow
