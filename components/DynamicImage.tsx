import ImageFixed from "next/image"
import React, { useEffect, useRef, useState } from "react"

import Image from "@/components/CustomImage"

export default function DynamicImage({
  src,
  alt,
  width,
  height,
  fullWidth,
}: FeaturedImage) {
  const [dynamicWidth, setDynamicWidth] = useState(Number(width))
  const dynamicImageRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    const handleResize = () => {
      if (dynamicImageRef.current) {
        setDynamicWidth(dynamicImageRef.current.clientWidth)
        /**
         * "clientWidth is the inner width (ie. the space inside an element
         * including padding but excluding borders and scrollbars)""
         * https://wincent.com/wiki/clientWidth_vs_offsetWidth_vs_scrollWidth
         */
      }
    }
    handleResize() // run once after the DOM has rendered

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  if (!src) return null // i.e. no featuredImage
  if (!alt && !src && !width && !height) {
    throw new Error(
      `All attributes except "fullWidth" are required for the FeaturedImage type, but {src: "${src}", alt: "${alt}", width: "${width}", height: "${height}"} was found. Please correct the Markdown file.`
    )
  }
  if (!fullWidth)
    return (
      <div className="flex justify-center w-full mx-auto">
        <ImageFixed {...{ alt, src, width, height }} />
      </div>
    )
  // Dynamically-sized image
  const widthNumber = Number(width.replace(/px/g, ""))
  const heightNumber = Number(height.replace(/px/g, ""))
  const dynamicHeight = Math.round((heightNumber / widthNumber) * dynamicWidth)
  console.log(widthNumber, heightNumber, dynamicWidth, dynamicHeight)
  return (
    <div
      className="grid w-full mx-auto"
      style={{ height: dynamicHeight }}
      ref={dynamicImageRef}
    >
      <Image src={src} alt={alt} />
    </div>
  )
}
