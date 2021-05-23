import { Fragment } from "react"
import HoverBullet from "@/components/HoverBullet"
import HoverBulletNavItem from "@/components/HoverBulletNavItem"
import { classNames } from "@/lib/utils"
export default function HoverBulletList({
  hoverBulletAsStrings = null,
  hoverBulletAsNavMenuItems = null,
  responsive = true,
}: {
  hoverBulletAsStrings?: string[] | null
  hoverBulletAsNavMenuItems?: NAVIGATION_MENU_TYPE[] | null
  responsive?: boolean
}) {
  if (
    !(hoverBulletAsStrings || hoverBulletAsNavMenuItems) ||
    (hoverBulletAsStrings && hoverBulletAsNavMenuItems)
  )
    throw new Error(
      "<HoverBulletList> needs one of either hoverBulletStrings or hoverBulletNavMenuItems props, but not both"
    )
  return (
    <ul
      className={classNames(
        "mt-4",
        responsive ? "text-sm sm:text-base md:text-lg lg:text-xl" : ""
      )}
    >
      {hoverBulletAsStrings &&
        hoverBulletAsStrings.map((text: string) => (
          <Fragment key={text}>
            <HoverBullet text={text} responsive={responsive} />
          </Fragment>
        ))}
      {hoverBulletAsNavMenuItems &&
        hoverBulletAsNavMenuItems.map((item: NAVIGATION_MENU_TYPE) => {
          const [title, href] = item as string[]
          return (
            <Fragment key={title + href}>
              <HoverBulletNavItem item={item} responsive={responsive} />
            </Fragment>
          )
        })}
    </ul>
  )
}
