import { useState } from "react"
import { BULLET } from "@/components/UTILS"
import { classNames, formatFootnotesAsSuperscriptIfPresent } from "@/lib/utils"
import Link from "@/components/Link"
export default function HoverBullet({
  text,
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
            "text-black",
            hover || isCurrentPage ? "underline" : "no-underline"
          )}
        >
          {text}
        </Link>
      ) : (
        // wrap any footnotes found in {text} in a <sup> superscript tag
        // these footnotes are used in modalBullets <PricingPackageModal/>
        formatFootnotesAsSuperscriptIfPresent(text)
      )}
    </li>
  )
}
