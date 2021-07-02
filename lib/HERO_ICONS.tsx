import { UserGroupIcon, CogIcon, ClockIcon } from "@heroicons/react/outline"

// New icons also needed to be added to the <HeroIcon> type in next-env.d.ts
const HeroIcons: {
  [key in HeroIcon]: HeroIconFunction
} = {
  // "kebab-case": CamelCase
  "user-group": UserGroupIcon,
  cog: CogIcon,
  clock: ClockIcon,
}

type HeroIconFunction = (props: React.ComponentProps<"svg">) => JSX.Element

export default HeroIcons
