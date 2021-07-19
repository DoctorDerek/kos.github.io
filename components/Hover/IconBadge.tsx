import HERO_ICONS from "@/lib/HERO_ICONS"
import { classNames } from "@/lib/utils"

export default function IconBadge({
  icon,
  label,
  text,
  size,
  uppercase,
}: IconBadge) {
  // support string | string[] for convenience by wrapping strings with an array
  if (!Array.isArray(label)) {
    label = label === undefined ? [] : [label]
  }
  if (!Array.isArray(text)) {
    text = text === undefined ? [] : [text]
  }

  // One of either label and/or text are required; icon is optional
  if (label.length === 0 && text.length === 0) return null

  // If an unknown icon is given, then the component should not be shown
  if (icon && !HERO_ICONS[icon]) return null

  // Handle a falsy icon, i.e. the empty string "" or undefined (not given).
  const HeroIconComponent = icon ? HERO_ICONS[icon] : () => null

  return (
    <div
      className={classNames(
        "pl-4 pr-4 sm:w-1/3 mb-6 text-center space-y-4 group",
        size === "large" ? "sm:w-1/2" : "sm:w-1/3",
        uppercase ? "uppercase" : ""
      )}
    >
      <div className="relative flex items-center justify-center w-20 h-20 mx-auto bg-blue-800 rounded-full">
        <div className="absolute w-full h-full transition-all duration-300 rounded-full bg-gradient-to-b to-blue-light from-teal-brand group-hover:opacity-0" />
        <div className="absolute w-12 h-12 text-white fill-current">
          {<HeroIconComponent aria-hidden="true" />}
        </div>
      </div>
      <div
        className={classNames(
          "p-0 mb-5 text-xl font-bold uppercase font-lato",
          "text-black",
          uppercase ? "uppercase" : ""
        )}
      >
        {label.map((line) => (
          <div key={line}>{line}</div>
        ))}
      </div>
      <div className="text-base">
        {text.map((line) => (
          <div key={line}>{line}</div>
        ))}
      </div>
    </div>
  )
}
