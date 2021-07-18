import Link from "@/components/Utils/CustomLink"
import { classNames } from "@/lib/utils"

export default function BUTTON({
  href,
  text,
  color = "red",
}: {
  href: string
  text: string
  color?: "red" | "blue"
}) {
  return (
    <div className="flex items-center">
      <Link
        href={href}
        className={classNames(
          "relative px-4 py-3 font-bold text-center text-white no-underline uppercase shadow-md select-none font-lato rounded-xl",
          color === "red"
            ? "bg-red-button-dark bg-gradient-to-t from-red-button-light to-red-button-dark"
            : "border border-solid border-blue-brand transition-all duration-500 bg-blue-brand hover:bg-white hover:text-blue-brand"
        )}
      >
        {text}
        {color === "red" && (
          <div
            className="absolute w-full h-full translate-x-[-50%] translate-y-[-50%] left-1/2 top-1/2 rounded-xl opacity-100 hover:opacity-0 transition-opacity duration-500 flex items-center justify-center bg-gradient-to-b from-red-button-light to-red-button-dark"
            aria-hidden="true"
          >
            {/* second <div> is necessary for duration-500 hover effect as */}
            {/* the browser can transition opacity but not the bg-gradient */}
            {text}
          </div>
        )}
      </Link>
    </div>
  )
}
