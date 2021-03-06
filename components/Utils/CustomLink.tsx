/* eslint-disable jsx-a11y/anchor-has-content */
import Link from "next/link"

import { classNames } from "@/lib/utils"

const CustomLink = ({
  href,
  children,
  className,
  onClick,
  ...rest
}: {
  href: string
  children?: any
  className?: string
  onClick?: () => void
}) => {
  const isInternalLink = href && href.startsWith("/")
  const isAnchorLink = href && href.startsWith("#")

  // add default Tailwind classes to Link styles
  className = className ? className : "" // handle undefined
  className = className.includes("underline") // handle "underline"
    ? className
    : classNames(className, "no-underline hover:underline")
  className = className.includes("text-") // handle "text-black"
    ? className
    : classNames(className, "text-blue-brand")

  if (isInternalLink) {
    return (
      <Link href={href}>
        <a {...rest} className={className}>
          {children}
        </a>
      </Link>
    )
  }

  if (isAnchorLink) {
    return (
      <a href={href} className={className} {...rest}>
        {children}
      </a>
    )
  }

  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      href={href}
      className={className}
      {...rest}
    >
      {children}
    </a>
  )
}

export default CustomLink
