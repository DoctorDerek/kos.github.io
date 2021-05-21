import { classNames } from "@/lib/utils"
import RightArrow from "@/data/material-icons/keyboard_arrow_right_black_48dp.svg"
import { CheckIcon } from "@heroicons/react/solid"

export const BULLET = ({
  hover = false,
  customIcon = null,
}: {
  hover?: boolean
  customIcon?: JSX.Element | null
}) => {
  return (
    <div
      className={classNames(
        "inline-block w-3 h-3 border-solid rounded-full fill-current border mx-2 transition duration-300",
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
