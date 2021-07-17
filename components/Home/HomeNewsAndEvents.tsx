import Image from "@/components/Utils/CustomImage"
import Link from "@/components/Utils/CustomLink"
import DIVIDER from "@/components/Utils/DECOR/DIVIDER"

export default function HomeNewsAndEvents() {
  return (
    <div className="mb-16">
      <div className="mx-auto">
        <h2 className="text-center">
          News and Events
          <DIVIDER />
        </h2>
        <div className="flex flex-wrap news-item-row">
          <HomeNewsAndEventsItem />
          <HomeNewsAndEventsItem />
          <HomeNewsAndEventsItem />
        </div>
      </div>
    </div>
  )

  function HomeNewsAndEventsItem() {
    return (
      <div className="pl-4 pr-4 sm:w-1/2 md:w-1/3">
        <div
          className="news-item"
          data-animation="fadeInLeft"
          data-animation-delay="0s"
        >
          <div className="news-item-image">
            <div className="grid w-full h-40">
              <Image src="/assets/images/news/logo.png" alt="Decoration" />
            </div>
          </div>
          <div className="news-item-text">
            <h5 className="news-item-title">
              Fibre cut causing major outage **RESOLVED**
            </h5>
            <p>
              Today's outage was resolved at 6:15pm. All towers are back online
              and are fully functional.
              <Link
                href="/news/events/#57"
                className="underline text-blue-brand"
              >
                more...
              </Link>
            </p>
            <span className="news-item-more-link">
              <Link href="/news/events/#57">
                <span className="flex-wrap icon icon-right-arrow" />
              </Link>
            </span>
          </div>
        </div>
      </div>
    )
  }
}
