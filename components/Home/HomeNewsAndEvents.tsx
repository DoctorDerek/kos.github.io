import Link from "@/components/Utils/CustomLink"
import DIVIDER from "@/components/Utils/DECOR/DIVIDER"
import HERO_ICONS from "@/lib/HERO_ICONS"
import { generateAnchorLink } from "@/lib/utils"

export default function HomeNewsAndEvents({
  newsAndEventsIndexFrontMatter,
  newsAndEventsPostsFrontMatter,
}: {
  newsAndEventsIndexFrontMatter: PageFrontMatter
  newsAndEventsPostsFrontMatter: PageFrontMatter[]
}) {
  const ChevronRightIconComponent = HERO_ICONS["chevron-right"]
  // remove "/index" from the slug, i.e. "/news/events/index" -> "/news/events"
  const indexSlug =
    newsAndEventsIndexFrontMatter.slug &&
    newsAndEventsIndexFrontMatter.slug.replace("/index", "")

  return (
    <div className="mb-16">
      <div className="mx-auto">
        <h2 className="text-5xl text-center text-blue-brand">
          News and Events
          <DIVIDER />
        </h2>
        <div className="grid mx-8 space-y-4 md:space-y-0 md:space-x-8 md:grid-cols-3 justify-evenly">
          {newsAndEventsPostsFrontMatter.map((newsAndEventsPost) => (
            <HomeNewsAndEventsItem
              key={newsAndEventsPost.title}
              indexSlug={indexSlug}
              newsAndEventsPost={newsAndEventsPost}
            />
          ))}
        </div>
      </div>
    </div>
  )

  function HomeNewsAndEventsItem({
    indexSlug,
    newsAndEventsPost,
  }: {
    indexSlug: string | null
    newsAndEventsPost: PageFrontMatter
  }) {
    const targetSlug = newsAndEventsPost.slug
    const href = generateAnchorLink({ indexSlug, targetSlug })
    // e.g. /news/events/#2021-07-01

    // support string | string[] for convenience by wrapping strings with array
    if (!Array.isArray(newsAndEventsPost.headings)) {
      newsAndEventsPost.headings =
        newsAndEventsPost.headings === undefined
          ? []
          : [newsAndEventsPost.headings]
    }

    return (
      <Link href={href} className="col-span-1 text-black hover:no-underline">
        <div className="relative flex flex-col p-8 h-80 shadow-outer group rounded-2xl">
          <div className="line-clamp-7">
            <h5 className="mb-2 text-xl text-blue-brand">
              {newsAndEventsPost.title}
            </h5>
            <div className="pr-4 mb-3 prose prose-lg">
              {newsAndEventsPost.headings.length > 0
                ? newsAndEventsPost.headings.join(" ")
                : null}
              {newsAndEventsPost.children}
            </div>
          </div>
          <div className="absolute w-8 h-8 transition-all duration-500 border-2 border-solid rounded-full right-4 bottom-4 group-hover:bg-blue-brand border-blue-brand">
            <div className="fill-current group-hover:text-white text-blue-brand">
              <ChevronRightIconComponent aria-label="Read more" />
            </div>
          </div>
        </div>
      </Link>
    )
  }
}
