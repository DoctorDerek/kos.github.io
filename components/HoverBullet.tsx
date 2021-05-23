import { useState } from "react"
import { BULLET } from "@/components/UTILS"
export default function HoverBullet({
  bullet,
}: {
  bullet: string
}): JSX.Element {
  const [hover, setHover] = useState(false)
  return (
    <li
      className="flex items-center"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <BULLET hover={hover} responsive={true} />
      {bullet}
    </li>
  )
}
