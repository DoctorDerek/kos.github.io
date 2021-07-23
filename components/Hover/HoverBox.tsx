import { classNames } from "@/lib/utils"

export default function HoverBox({
  className = "",
  children,
}: {
  className?: string
  children: React.ReactNode
}) {
  return (
    <div
      className={classNames(
        className,
        "transition duration-500",
        "border border-gray-300 border-solid",
        "hover:shadow-md"
      )}
    >
      <div className="flex flex-col py-4 space-y-2 transition duration-500 border-t-4 border-transparent border-solid hover:shadow-sm hover:border-blue-brand">
        {children}
      </div>
    </div>
  )
}
