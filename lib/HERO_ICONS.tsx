import {
  ArrowUpIcon,
  CheckIcon,
  ClockIcon,
  CogIcon,
  LocationMarkerIcon,
  MenuIcon,
  PhoneIcon,
  ShoppingCartIcon,
  TruckIcon,
  UserCircleIcon,
  UserGroupIcon,
} from "@heroicons/react/outline"

// New icons also needed to be added to the <HeroIcon> type in next-env.d.ts
const HERO_ICONS: {
  [key in HeroIcon]: HeroIconFunction
} = {
  // Format: "kebab-case": CamelCaseIcon
  "arrow-up": ArrowUpIcon,
  check: CheckIcon,
  clock: ClockIcon,
  cog: CogIcon,
  "location-marker": LocationMarkerIcon,
  menu: MenuIcon,
  phone: PhoneIcon,
  "shopping-cart": ShoppingCartIcon,
  truck: TruckIcon,
  "user-circle": UserCircleIcon,
  "user-group": UserGroupIcon,
}

type HeroIconFunction = (props: React.ComponentProps<"svg">) => JSX.Element

export default HERO_ICONS
