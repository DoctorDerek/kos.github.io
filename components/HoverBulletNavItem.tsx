import { useCurrentPath } from "@/lib/utils"
import { HomeIcon, BriefcaseIcon } from "@heroicons/react/outline"
import HoverBullet from "@/components/HoverBullet"
export default function HoverBulletNavItem({
  item,
  responsive = true,
}: {
  item: NAVIGATION_MENU_TYPE
  responsive?: boolean
}) {
  const [title, href] = item as NAVIGATION_MENU_TYPE
  const isCurrentPage = true
  console.log(href, useCurrentPath(), isCurrentPage)
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

  return (
    <HoverBullet
      isCurrentPage={useCurrentPath().includes(href as string)}
      text={title as string}
      href={href as string}
      customIcon={customIcon}
      responsive={responsive}
    />
  )
}
