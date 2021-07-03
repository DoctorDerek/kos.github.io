import { Fragment } from "react"
import ImageFixed from "next/image"
import { DIVIDER } from "@/components/UTILS"

export default function OurTeamSection({
  ourTeamSection,
}: {
  ourTeamSection?: {
    heading: string
    teamHeadshots: TeamHeadshot[]
  }
}) {
  if (!ourTeamSection) return null

  const { heading, teamHeadshots } = ourTeamSection
  if (!(heading && teamHeadshots)) return null

  return (
    <div className="mx-auto text-center">
      <h2 className="text-blue-brand">{heading}</h2>
      <DIVIDER />
      <div className="flex flex-wrap justify-center">
        {teamHeadshots.map(({ name, image }) => {
          return (
            <Fragment key={name}>
              <TeamHeadshot name={name} image={image} />
            </Fragment>
          )
        })}
      </div>
    </div>
  )

  function TeamHeadshot({
    name,
    image,
  }: {
    name: string
    image: FeaturedImage
  }) {
    if (!(name && image)) return null
    return (
      <div className="mx-8 my-2 group">
        <ImageFixed
          {...image}
          className="transition-all duration-700 ease-out rounded-full group-hover:rounded-3xl transform-gpu"
        />
        {/* hover effect to transform from rounded-full to rounded-3xl */}
        <div className="my-1 text-xl font-semibold text-blue-brand">{name}</div>
      </div>
    )
  }
}
