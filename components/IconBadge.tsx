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
        "pl-4 pr-4 sm:w-1/3 mb-6 text-center space-y-4",
        size === "large" ? "sm:w-1/2" : "sm:w-1/3",
        uppercase ? "uppercase" : ""
      )}
    >
      <div className="flex items-center justify-center w-20 h-20 mx-auto text-xl font-bold text-white rounded-full fill-current bg-gradient-to-b to-blue-light from-teal-brand hover:to-blue-800 transform-gpu">
        <div className="w-12 h-12">{<HeroIconComponent />}</div>
      </div>
      <h5 className={classNames("text-gray-900", uppercase ? "uppercase" : "")}>
        {label.map((line) => (
          <div key={line}>{line}</div>
        ))}
      </h5>
      <div className="text-icon-text">
        {text.map((line) => (
          <div key={line}>{line}</div>
        ))}
      </div>
    </div>
  )
}
