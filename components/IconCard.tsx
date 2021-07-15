import HERO_ICONS from "@/lib/HERO_ICONS"
import { addPhoneLinkToTextIfPresent, classNames } from "@/lib/utils"

export default function IconCard({
  icon,
  label,
  text,
  location,
}: IconCard & { location?: "" | "footer" }) {
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
      className={classNames("flex group", location === "footer" ? "" : "mb-6")}
    >
      <div
        className={classNames(
          "grid self-start flex-shrink-0 w-12 h-12 p-1 mx-3",
          location === "footer" ? "mt-4" : "",
          icon
            ? classNames(
                "transition-all duration-500 border-solid rounded-full fill-current border-2",
                location === "footer"
                  ? "border-white group-hover:bg-white bg-transparent text-white group-hover:text-blue-brand"
                  : "group-hover:text-white group-hover:bg-blue-brand group-hover:border-blue-brand border-blue-brand text-blue-brand"
              )
            : ""
        )}
      >
        <HeroIconComponent aria-hidden="true" />
      </div>
      <div>
        <div
          className={classNames(
            location === "footer"
              ? "font-normal text-white pb-4"
              : "font-semibold text-black",
            "uppercase text-xl"
          )}
        >
          {label.map((line) => (
            <div key={line}>
              {addPhoneLinkToTextIfPresent({
                stringToTest: line,
                color: location === "footer" ? "red-light" : "red",
              })}
            </div>
          ))}
        </div>
        <div
          className={classNames(
            location === "footer" ? "text-3xl" : "",
            "leading-6"
          )}
        >
          {text.map((line) => (
            <div key={line}>
              {addPhoneLinkToTextIfPresent({
                stringToTest: line,
                color: location === "footer" ? "red-light" : "red",
              })}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
