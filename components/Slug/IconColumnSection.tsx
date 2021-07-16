import ImageFixed from "next/image"
import { Fragment } from "react"

import Image from "@/components/Utils/CustomImage"
import HERO_ICONS from "@/lib/HERO_ICONS"

export default function IconColumnSection({
  iconColumnSection,
}: {
  iconColumnSection?: { heading: string; iconColumns: IconColumn[] }
}) {
  if (!iconColumnSection) return null

  const { heading, iconColumns } = iconColumnSection
  if (!(heading && iconColumns)) return null

  return (
    <div className="my-16 text-center text-white">
      <div className="grid w-full h-[600px]">
        <Image src="/images/block-bg.jpg" alt="Decoration" />
      </div>
      <div className="absolute transform-gpu left-1/2 translate-x-[-50%] translate-y-[-490px]">
        {heading && (
          <div className="text-5xl font-semibold">
            {heading}
            <div className="block mx-auto">
              <ImageFixed
                src="/images/h-decor-white.png"
                height="4px"
                width="64px"
                alt="Decoration"
              />
              {/* alt="" acceptable for purely decorative items */}
            </div>
          </div>
        )}
        {iconColumns && (
          <div className="grid md:grid-cols-3">
            {iconColumns.map((iconColumn) => (
              <Fragment key={iconColumn.heading}>
                <IconColumn {...iconColumn} />
              </Fragment>
            ))}
          </div>
        )}
      </div>
    </div>
  )

  function IconColumn({
    icon,
    heading,
    subheading,
  }: {
    icon: HeroIcon
    heading: string
    subheading: string
  }) {
    if (!(icon && heading && subheading)) return null

    const HeroIconComponent = HERO_ICONS[icon]
    if (!HeroIconComponent) return null

    return (
      <div className="text-center">
        <div className="w-16 h-16 mx-auto mt-6 mb-8">
          <HeroIconComponent aria-hidden="true" />
        </div>
        <div className="mb-3 text-4xl font-semibold">{heading}</div>
        <div className="text-lg font-semibold leading-5">{subheading}</div>
      </div>
    )
  }
}
