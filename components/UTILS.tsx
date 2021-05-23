import { classNames } from "@/lib/utils"
import RightArrow from "@/data/material-icons/keyboard_arrow_right_black_48dp.svg"
import { CheckIcon } from "@heroicons/react/solid"
import Link from "@/components/Link"

export const BULLET = ({
  hover = false,
  isCurrentPage = false,
  customIcon = null,
  responsive = false,
}: {
  hover?: boolean
  isCurrentPage?: boolean
  customIcon?: JSX.Element | null
  responsive?: boolean
}) => {
  function CustomIcon() {
    return <>{customIcon}</>
  }
  // highlight for hover or current page bullets
  const isHighlightedBullet = hover || isCurrentPage
  return (
    <div
      className={classNames(
        "inline-block w-3 h-3 border-solid rounded-full fill-current border mx-2 transition duration-300 flex-shrink-0",
        responsive ? "md:w-4 md:h-4 xl:w-5 xl:h-5" : "",
        isHighlightedBullet
          ? "bg-blue-800 text-white border-blue-800"
          : "bg-transparent text-blue-800 border-blue-800"
      )}
    >
      {customIcon && <CustomIcon />}
      {!customIcon && (
        <>
          {isHighlightedBullet && (
            <CheckIcon
              aria-label={isCurrentPage ? "Current page" : ""}
              aria-hidden={!isCurrentPage ? "true" : "false"}
            />
          )}
          {!isHighlightedBullet && <RightArrow aria-hidden="true" />}
        </>
      )}
    </div>
  )
}

export const BUTTON = ({ href, text }: { href: string; text: string }) => (
  <Link
    href={href}
    className="inline-block px-4 py-2 text-base font-normal leading-normal text-center no-underline whitespace-no-wrap align-middle border rounded select-none btn btn-orange"
  >
    {text}
  </Link>
)
