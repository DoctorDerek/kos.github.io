import {
  ClockIcon,
  CogIcon,
  LocationMarkerIcon,
  PhoneIcon,
  UserGroupIcon,
} from "@heroicons/react/outline"

// New icons also needed to be added to the <HeroIcon> type in next-env.d.ts
const HeroIcons: {
  [key in HeroIcon]: HeroIconFunction
} = {
  // "kebab-case": CamelCase
  "user-group": UserGroupIcon,
  cog: CogIcon,
  clock: ClockIcon,
  "location-marker": LocationMarkerIcon,
  phone: PhoneIcon,
}

type HeroIconFunction = (props: React.ComponentProps<"svg">) => JSX.Element

export default HeroIcons
