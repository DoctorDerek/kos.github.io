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
        <div className="flex mx-4 space-x-4 justify-evenly">
          <HomeNewsAndEventsItem />
          <HomeNewsAndEventsItem />
          <HomeNewsAndEventsItem />
        </div>
      </div>
    </div>
  )

  function HomeNewsAndEventsItem() {
    return (
      <Link href="/news/events/#57" className="text-black hover:no-underline">
        <div className="relative flex flex-col p-4 shadow-outer group rounded-2xl">
          <h5 className="mb-2 text-blue-brand">
            Fibre cut causing major outage **RESOLVED**
          </h5>
          <p className="pr-4 mb-3">
            Today's outage was resolved at 6:15pm. All towers are back online
            and are fully functional.
            <Link href="/news/events/#57" className="group-hover:underline">
              more...
            </Link>
          </p>
          <div className="absolute w-8 h-8 transition-all duration-500 border-2 border-solid rounded-full right-4 bottom-4 group-hover:bg-blue-brand border-blue-brand">
            <Link
              href="/news/events/#57"
              className="fill-current group-hover:text-white text-blue-brand"
            >
              <ChevronRightIconComponent />
            </Link>
          </div>
        </div>
      </Link>
    )
  }
}
