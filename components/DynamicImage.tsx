import ImageFixed from "next/image"
import React, { useEffect, useRef, useState } from "react"

import Image from "@/components/CustomImage"

export default function DynamicImage({
  featuredImage,
}: {
  featuredImage?: FeaturedImage
}) {
  const [dynamicWidth, setDynamicWidth] = useState(Number(featuredImage?.width))
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

  if (!featuredImage) return null
  if (
    !featuredImage.alt &&
    !featuredImage.src &&
    !featuredImage.width &&
    !featuredImage.height
  ) {
    throw new Error(
      `All attributes except "fullWidth" are required for the FeaturedImage type, but {src: "${featuredImage.src}", alt: "${featuredImage.alt}", width: "${featuredImage.width}", height: "${featuredImage.height}"} was found. Please correct the Markdown file.`
    )
  }
  if (!featuredImage.fullWidth)
    return (
      <div className="mx-auto">
        <ImageFixed {...featuredImage} />
      </div>
    )
  // Dynamically-sized image
  const width = Number(featuredImage.width.replace(/px/g, ""))
  const height = Number(featuredImage.height.replace(/px/g, ""))
  const dynamicHeight = Math.round((height / width) * dynamicWidth)
  console.log(width, height, dynamicWidth, dynamicHeight)
  return (
    <div
      className="grid w-full mx-auto"
      style={{ height: dynamicHeight }}
      ref={dynamicImageRef}
    >
      <Image src={featuredImage.src} alt={featuredImage.alt} />
    </div>
  )
}
