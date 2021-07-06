import HoverBullet from "@/components/HoverBullet"
import { useCurrentPath } from "@/lib/utils"
import { BriefcaseIcon, HomeIcon } from "@heroicons/react/outline"

export default function HoverBulletNavItem({
  item,
  responsive = true,
}: {
  item: NAVIGATION_MENU_TYPE
  responsive?: boolean
}) {
  const [title, href] = item as NAVIGATION_MENU_TYPE
  // isCurrentPage uses .includes() to account for # anchors in the URL
  const isCurrentPage = useCurrentPath().includes(href as string)
  const CUSTOM_ICONS = {
    residential: <HomeIcon aria-hidden="true" />,
    business: <BriefcaseIcon aria-hidden="true" />,
  }
  const titleIncludes = (keyword: string) =>
    new RegExp(keyword, "i").exec(title as string)
  const customIcon =
    titleIncludes("residential") || titleIncludes("home")
      ? CUSTOM_ICONS["residential"]
      : titleIncludes("business")
      ? CUSTOM_ICONS["business"]
      : null

  return (
    <HoverBullet
      isCurrentPage={isCurrentPage}
      text={title as string}
      href={href as string}
      customIcon={customIcon}
      responsive={responsive}
    />
  )
}
