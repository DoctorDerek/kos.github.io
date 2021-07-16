import HoverBulletNavMenu from "@/components/Hover/HoverBulletNavMenu"
import Link from "@/components/Utils/CustomLink"
import BUTTON from "@/components/Utils/DECOR/BUTTON"
import DIVIDER from "@/components/Utils/DECOR/DIVIDER"

export default function HoverBulletNavMenuAndGetConnectedButton({
  hoverBulletNavMenu,
  showGetConnectedButton,
}: {
  hoverBulletNavMenu?: "Business" | "Residential"
  showGetConnectedButton?: boolean
}) {
  if (!(hoverBulletNavMenu || showGetConnectedButton)) return null
  return (
    <div className="max-w-xl mx-auto">
      <DIVIDER />
      {hoverBulletNavMenu && (
        <>
          <div className="pb-4 text-2xl font-semibold tracking-tight color">
            Please{" "}
            <Link href="/contact" className="text-black">
              contact our office
            </Link>{" "}
            for more information, or select from one of our services below.
          </div>
          <HoverBulletNavMenu type={hoverBulletNavMenu} />
        </>
      )}
      {showGetConnectedButton && (
        <div className="py-6">
          <BUTTON href="/order/" text="Get connected" />
        </div>
      )}
    </div>
  )
}
