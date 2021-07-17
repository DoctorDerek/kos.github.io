import Image from "@/components/Utils/CustomImage"
import Link from "@/components/Utils/CustomLink"
import DIVIDER from "@/components/Utils/DECOR/DIVIDER"
import HERO_ICONS from "@/lib/HERO_ICONS"

export default function HomeNewsAndEvents() {
  const ChevronRightIconComponent = HERO_ICONS["chevron-right"]
  return (
    <div className="mb-16">
      <div className="mx-auto">
        <h2 className="text-center">
          News and Events
          <DIVIDER />
        </h2>
        <div className="flex justify-evenly">
          <HomeNewsAndEventsItem />
          <HomeNewsAndEventsItem />
          <HomeNewsAndEventsItem />
        </div>
      </div>
    </div>
  )

  function HomeNewsAndEventsItem() {
    return (
      <div className="flex flex-col p-4 mx-4 shadow-outer group rounded-2xl">
        <h5 className="mb-2 text-blue-brand">
          Fibre cut causing major outage **RESOLVED**
        </h5>
        <p className="pr-4 mb-3">
          Today's outage was resolved at 6:15pm. All towers are back online and
          are fully functional.
          <Link href="/news/events/#57" className="">
            more...
          </Link>
        </p>
        <div className="absolute w-8 h-8 transition-all duration-500 border-2 border-solid rounded-full fill-curren right-4 bottom-4 group-hover:text-white group-hover:bg-blue-brand group-hover:border-blue-brand border-blue-brand text-blue-brand">
          <Link href="/news/events/#57">
            <ChevronRightIconComponent />
          </Link>
        </div>
      </div>
    )
  }
}
