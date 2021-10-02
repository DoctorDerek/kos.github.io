import ImageFixed from "next/image"

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
  src,
  alt,
  layout = "fill", // Assume dynamic sizing
  className = "object-cover", // Assume dynamic sizing
  sizes = ValidSizes.screen, // Next.js default, 100vw
  quality = "75", // Next.js default, 75/100
  preload = "false", // Next.js default, false
}: {
  src: string
  alt: string
  layout?: "fill" // "fixed" | "intrinsic" | "responsive" | "fill" | undefined
  className?: string
  sizes?: ValidSizes
  quality?: string
  preload?: string
}) {
  if (!src || (!alt && alt !== "")) {
    // alt === "" is valid for purely decorative items
    throw new Error(
      `Both src and alt parameters are required in <CustomImage>; src was given as ${src} and alt was given as ${alt}`
    )
  }

  if (!className) className = "object-cover" // default className
  // Add object-cover to className if other classes were added like rounded-full
  if (typeof className === "string" && !className.includes("object-")) {
    className = classNames(className, "object-cover")
  }
  // Note: Other object- classNames such as object-contain are allowed here.

  // We need a wrapper div with position: relative for dynamic sizing
  return (
    <div className="relative">
      <ImageFixed
        {...{
          alt,
          src,
          layout,
          className,
          sizes,
          quality,
          preload,
        }}
      />
    </div>
  )
}
