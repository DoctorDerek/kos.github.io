import { Fragment } from "react"
import HoverBullet from "@/components/HoverBullet"
export default function HoverBulletList({
  hoverBullets,
}: {
  hoverBullets: string[]
}) {
  return (
    <ul className="mt-4 text-sm sm:text-base md:text-lg lg:text-xl">
      {hoverBullets.map((text: string) => (
        <Fragment key={text}>
          <HoverBullet text={text} />
        </Fragment>
      ))}
    </ul>
  )
}
