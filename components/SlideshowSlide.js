import React from "react"
const SlideshowSlide = ({ children }) => (
  <div className="grid grid-cols-1 transform-gpu keen-slider__slide">
    {children}
  </div>
)

export default SlideshowSlide
