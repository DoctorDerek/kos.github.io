import { Fragment } from "react"
import HoverBullet from "@/components/HoverBullet"
import HoverBulletNavItem from "@/components/HoverBulletNavItem"
import { classNames } from "@/lib/utils"
export default function HoverBulletList({
  hoverBulletStrings = null,
  hoverBulletNavMenuItems = null,
  responsive = false,
}: {
  hoverBulletStrings?: string[] | null
  hoverBulletNavMenuItems?: NAVIGATION_MENU_TYPE[] | null
  responsive?: boolean
}) {
  if (
    !(hoverBulletStrings || hoverBulletNavMenuItems) ||
    (hoverBulletStrings && hoverBulletNavMenuItems)
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
      {hoverBulletStrings &&
        hoverBulletStrings.map((text: string) => (
          <Fragment key={text}>
            <HoverBullet text={text} responsive={responsive} />
          </Fragment>
        ))}
      {hoverBulletNavMenuItems &&
        hoverBulletNavMenuItems.map((item: NAVIGATION_MENU_TYPE) => {
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
