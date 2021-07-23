import Link from "@/components/Utils/CustomLink"
import HERO_ICONS from "@/lib/HERO_ICONS"
import { classNames } from "@/lib/utils"

export default function IconBadge({
  icon,
  label,
  text,
  href,
  size,
  uppercase,
  color,
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
    <div className="pl-4 pr-4 mb-6 space-y-4 text-center group sm:w-1/3">
      <LinkWrapper href={href}>
        <div
          className={classNames(
            "relative flex items-center justify-center mx-auto rounded-full bg-blue-brand",
            size ? "w-40 h-40" : "w-24 h-24"
          )}
        >
          <div className="absolute w-full h-full transition-all duration-500 rounded-full bg-gradient-to-b to-blue-light from-teal-brand group-hover:opacity-0" />
          {/* position: absolute for gradient hover fade-opacity effect */}
          <div
            className={classNames(
              "absolute text-white fill-current",
              size ? "w-24 h-24" : "w-12 h-12"
            )}
          >
            {<HeroIconComponent aria-hidden="true" />}
          </div>
        </div>
      </LinkWrapper>
      <div
        className={classNames(
          "p-0 mb-5 text-3xl font-bold uppercase font-lato",
          uppercase ? "uppercase" : "",
          color === "gray" ? "text-gray-600" : "text-black"
        )}
      >
        <LinkWrapper href={href}>
          {label.map((line) => (
            <div key={line}>{line}</div>
          ))}
        </LinkWrapper>
      </div>
      <div className="text-xl">
        {text.map((line) => (
          <div key={line}>{line}</div>
        ))}
      </div>
    </div>
  )

  function LinkWrapper({
    href,
    children,
  }: {
    href: string | undefined
    children: React.ReactNode
  }) {
    return (
      <>
        {href && (
          <Link
            href={href}
            className={classNames(
              "hover:text-blue-brand hover:no-underline group-hover:text-blue-brand",
              color === "gray" ? "text-gray-600" : "text-black"
            )}
          >
            {children}
          </Link>
        )}
        {!href && <>{children}</>}
      </>
    )
  }
}
