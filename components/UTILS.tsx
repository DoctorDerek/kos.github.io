import ImageFixed from "next/image"

import Link from "@/components/CustomLink"
import RightArrow from "@/data/material-icons/keyboard_arrow_right_black_48dp.svg"
import { classNames } from "@/lib/utils"
import { CheckIcon } from "@heroicons/react/solid"

export function BULLET({
  hover = false,
  isCurrentPage = false,
  customIcon = null,
  responsive = false,
}: {
  hover?: boolean
  isCurrentPage?: boolean
  customIcon?: JSX.Element | null
  responsive?: boolean
}) {
  function CustomIcon() {
    return <div className="w-full h-full">{customIcon}</div>
  }
  // current page bullets are blue background, white checkmark
  const currentBulletStyles = isCurrentPage
    ? "bg-blue-brand text-white border-blue-brand"
    : "bg-transparent"
  // hover bullets are a lighter shade of blue, except current page
  const hoverBulletStyles =
    hover && !isCurrentPage
      ? "text-blue-light border-blue-light"
      : "text-blue-brand border-blue-brand"
  return (
    <div
      className={classNames(
        "inline-block w-3 h-3 border-solid rounded-full fill-current border mx-2 transition duration-300 flex-shrink-0",
        responsive ? "md:w-4 md:h-4 xl:w-5 xl:h-5" : "",
        currentBulletStyles,
        hoverBulletStyles
      )}
    >
      {customIcon ? (
        <CustomIcon aria-hidden="true" />
      ) : isCurrentPage ? (
        <CheckIcon
          aria-label={isCurrentPage ? "Current page" : ""}
          aria-hidden={!isCurrentPage ? "true" : "false"}
        />
      ) : (
        <RightArrow aria-hidden="true" className="w-full h-full" />
      )}
    </div>
  )
}

export function BUTTON({ href, text }: { href: string; text: string }) {
  return (
    <Link
      href={href}
      className="inline-block px-4 py-2 text-base font-normal leading-normal text-center no-underline whitespace-no-wrap align-middle border rounded select-none btn btn-orange"
    >
      {text}
    </Link>
  )
}

export function DIVIDER() {
  return (
    <div className="pb-4 text-center">
      <ImageFixed
        src="/images/h-decor.png"
        height="4px"
        width="64px"
        alt="Decoration"
      />
      {/* alt="" acceptable for purely decorative elements */}
    </div>
  )
}
