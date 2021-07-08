import HERO_ICONS from "@/lib/HERO_ICONS"
import { addPhoneLinkToTextIfPresent, classNames } from "@/lib/utils"

export default function IconCard({
  icon,
  label,
  text,
}: {
  icon: HeroIcon
  label: string | string[]
  text: string | string[]
}) {
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
    <div className="flex mb-6 group">
      <div
        className={classNames(
          "grid self-start flex-shrink-0 w-12 h-12 p-1 mx-3",
          icon
            ? "transition-all duration-500 border-4 border-blue-brand border-solid rounded-full fill-current group-hover:bg-blue-brand group-hover:text-gray-100 text-blue-brand"
            : ""
        )}
      >
        <HeroIconComponent />
      </div>
      <div>
        <div className="text-xl font-semibold text-gray-900 uppercase">
          {label.map((line) => (
            <div key={line}>
              {addPhoneLinkToTextIfPresent({ stringToTest: line })}
            </div>
          ))}
        </div>
        <div className="leading-6">
          {text.map((line) => (
            <div key={line}>
              {addPhoneLinkToTextIfPresent({ stringToTest: line })}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
