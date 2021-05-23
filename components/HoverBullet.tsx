import { useState } from "react"
import { BULLET } from "@/components/UTILS"
import { classNames } from "@/lib/utils"
import Link from "@/components/Link"
export default function HoverBullet({
  text = "isRequired",
  href = "",
  isCurrentPage = false,
  customIcon = null,
  responsive = true,
}: {
  text: string
  href?: string
  isCurrentPage?: boolean
  customIcon?: JSX.Element | null
  responsive?: boolean
}): JSX.Element {
  const [hover, setHover] = useState(false)
  return (
    <li
      className="flex items-center"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <BULLET
        hover={hover}
        isCurrentPage={isCurrentPage}
        customIcon={customIcon}
        responsive={responsive}
      />
      {href ? (
        <Link
          href={href as string}
          className={classNames(
            hover || isCurrentPage ? "underline" : "no-underline"
          )}
        >
          {text}
        </Link>
      ) : (
        text
      )}
    </li>
  )
}
