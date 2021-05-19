import { useState } from "react"
import { useCurrentPath } from "@/lib/utils"
import RightArrow from "@/data/material-icons/keyboard_arrow_right_black_48dp.svg"
import { CheckIcon } from "@heroicons/react/solid"
import { HomeIcon, BriefcaseIcon } from "@heroicons/react/outline"
import NAVIGATION_MENU from "@/data/NAVIGATION_MENU"

if (NAVIGATION_MENU[1][1][0][0] !== "Residential") {
  throw new Error(
    "BulletNavMenu was expecting `Residential` in NAVIGATION_MENU"
  )
}
const bulletsResidential = NAVIGATION_MENU[1][1][0][1] as NAVIGATION_MENU_TYPE[]
if (NAVIGATION_MENU[1][1][1][0] !== "Business") {
  throw new Error("BulletNavMenu was expecting `Business` in NAVIGATION_MENU")
}
const bulletsBusiness = NAVIGATION_MENU[1][1][1][1] as NAVIGATION_MENU_TYPE[]
const bullets = { Business: bulletsBusiness, Residential: bulletsResidential }

const classNames = (...classes: string[]) => classes.join(" ")

const BULLET = ({
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
const FormatBullet = ({ item }: { item: NAVIGATION_MENU_TYPE }) => {
  const [title, href] = item as NAVIGATION_MENU_TYPE
  const isCurrentPage = href === useCurrentPath()
  const [hover, setHover] = useState(false)
  const CUSTOM_ICONS = {
    residential: <HomeIcon aria-hidden="true" />,
    business: <BriefcaseIcon aria-hidden="true" />,
  }
  const titleIncludes = (keyword: string) =>
    new RegExp(keyword, "i").exec(title as string)
  const customIcon = titleIncludes("residential")
    ? CUSTOM_ICONS["residential"]
    : titleIncludes("business")
    ? CUSTOM_ICONS["business"]
    : null

  console.log("title", customIcon)

  return (
    <li
      key={(title as string) + "BulletNavMenu"}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <BULLET hover={hover || isCurrentPage} customIcon={customIcon} />
      <a
        href={href as string}
        className={classNames(
          hover || isCurrentPage ? "underline" : "no-underline"
        )}
      >
        {title}
      </a>
    </li>
  )
}
export function BulletNavMenu({
  type = "Residential",
}: {
  type: "Residential" | "Business"
}): JSX.Element {
  return (
    <div className="flex flex-col pt-4 md:space-x-16 md:flex-row md:pt-0">
      <ul key="Left Column">
        {bullets[type].slice(0, 3).map((item) => (
          <FormatBullet item={item} key={Math.random()} />
        ))}
      </ul>
      <ul key="Right Column">
        {bullets[type].slice(4, 7).map((item) => (
          <FormatBullet item={item} key={Math.random()} />
        ))}
      </ul>
    </div>
  )
}
