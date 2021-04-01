import React from "react"
import Image from "next/image"

const isRequired = () => {
  throw new Error("Both alt and src parameters are required in CustomImage")
}

const CustomImage = ({
  alt = isRequired(),
  src = isRequired(),
  layout = "fill", // Assume dynamic sizing
  className = "object-cover", // Assume dynamic sizing
  sizes = "100vw", // Next.js default
  quality = "75", // Next.js default
  ...rest
}) => {
  const validSizes = {
    "100vw": "100vw",
    // 3-column layout: portrait image -> portrait crop
    portrait: "33vw", // "(max-width: 1280px) 384px, (max-width: 768px) 256px, 128px"
    // 3-column layout: landscape image -> portrait crop (should be 1.5x larger)
    landscape: "50vw", //"(max-width: 1280px) 576px, (max-width: 768px) 384px, 50vw"
  }
  if (!Object.keys(validSizes).includes(sizes)) {
    throw new Error("An invalid custom sizes prop was passed to CustomImage")
  }
  sizes = validSizes[sizes]

  // Add object-cover to className if other classes were added like rounded-full
  if (className !== "object-cover") {
    className += " object-cover"
  }

  const resultingProps = {
    alt,
    src,
    layout,
    className,
    sizes,
    quality,
    ...rest,
  }

  // We need a wrapper div with position: relative for dynamic sizing
  return (
    <div className="relative">
      <Image {...resultingProps} />
    </div>
  )
}

export default CustomImage
