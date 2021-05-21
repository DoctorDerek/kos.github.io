import { classNames } from "@/lib/utils"
import RightArrow from "@/data/material-icons/keyboard_arrow_right_black_48dp.svg"
import { CheckIcon } from "@heroicons/react/solid"

export const BULLET = ({
  hover = false,
  customIcon = null,
  responsive = false,
}: {
  hover?: boolean
  customIcon?: JSX.Element | null
  responsive?: boolean
}) => {
  return (
    <div
      className={classNames(
        "inline-block w-3 h-3 border-solid rounded-full fill-current border mx-2 transition duration-300 flex-shrink-0",
        responsive ? "md:w-4 md:h-4 xl:w-5 xl:h-5" : "",
        hover
          ? "bg-blue-800 text-white border-blue-800"
          : "bg-transparent text-blue-800 border-blue-800"
      )}
    >
      {customIcon ? (
        customIcon
      ) : hover ? (
        <CheckIcon aria-label="Current page" />
      ) : (
        <RightArrow aria-hidden="true" />
      )}
    </div>
  )
}
