import Image from "next/image"

import { classNames } from "@/lib/utils"

enum ValidSizes {
  screen = "100vw", // full screen size

  // 3-column layout: portrait image -> portrait crop
  portrait = "33vw",
  // "(max-width: 1280px) 384px, (max-width: 768px) 256px, 128px"

  // 3-column layout: landscape image -> portrait crop (should be 1.5x larger)
  landscape = "50vw",
  //"(max-width: 1280px) 576px, (max-width: 768px) 384px, 50vw"
}

export default function CustomImage({
  alt,
  src,
  layout = "fill", // Assume dynamic sizing
  className = "object-cover", // Assume dynamic sizing
  sizes = ValidSizes.screen, // Next.js default
  quality = "75", // Next.js default
}: {
  alt: string
  src: string
  layout?: "fill"
  // "fixed" | "intrinsic" | "responsive" | "fill" | undefined
  className?: string
  sizes?: ValidSizes
  quality?: string
}) {
  if (!alt || !src) {
    throw new Error(
      `Both src and alt parameters are required in <CustomImage>;src was given as ${src} and alt was given as ${alt}`
    )
  }

  // Add object-cover to className if other classes were added like rounded-full
  if (className !== "object-cover") {
    className = classNames(className ? className : "", "object-cover")
  }

  const resultingProps = {
    alt,
    src,
    layout,
    className,
    sizes,
    quality,
  }

  // We need a wrapper div with position: relative for dynamic sizing
  return (
    <div className="relative">
      <Image {...resultingProps} />
    </div>
  )
}
