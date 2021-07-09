import {
  CheckIcon,
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
  check: CheckIcon,
  clock: ClockIcon,
  cog: CogIcon,
  "location-marker": LocationMarkerIcon,
  phone: PhoneIcon,
  "user-group": UserGroupIcon,
}

type HeroIconFunction = (props: React.ComponentProps<"svg">) => JSX.Element

export default HeroIcons
