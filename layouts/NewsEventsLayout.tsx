import ImageFixed from "next/image"
import { Fragment } from "react"

import HoverBullet from "@/components/Hover/HoverBullet"
import HeadingsH2 from "@/components/Slug/HeadingsH2"
import Image from "@/components/Utils/CustomImage"
import BUTTON from "@/components/Utils/DECOR/BUTTON"
import DIVIDER from "@/components/Utils/DECOR/DIVIDER"
import DynamicImage from "@/components/Utils/DynamicImage"
import PageSeo from "@/components/Utils/PageSeo"
import TitleJSXWithOptionalHighlighting from "@/components/Utils/TitleJSXWithOptionalHighlighting"
import siteMetadata from "@/data/siteMetadata.json"
import { generateAnchorID, generateAnchorLink } from "@/lib/utils"

export default function NewsEventsLayout({
  indexFrontMatter,
  postsFrontMatter,
}: {
  indexFrontMatter: PageFrontMatter
  postsFrontMatter: PageFrontMatter[]
}) {
  // Get the slug, title, and featured image from the news/events/index.md file
  const { slug, title, featuredImage } = indexFrontMatter
  // remove "/index" from the slug, i.e. "/news/events/index" -> "/news/events"
  const indexSlug = slug && slug.replace("/index", "")
  const indexTitle = title
  const indexFeaturedImage = featuredImage
  const url = `${siteMetadata.siteUrl}/${slug}`

  return (
    <>
      <PageSeo title={indexTitle} description="" url={url} />
      <div className="grid w-full xl:h-32 lg:h-28 md:h-24 sm:h-20 h-16 border-blue-brand border-solid border-t-[6px]">
        <Image src="/images/footer-bg.jpg" alt="Decoration" />
        {/* alt="" acceptable for purely decorative elements */}
      </div>
      <div className="px-6 py-8 mx-auto xl:py-16 lg:py-14 md:py-12 sm:py-10 md:px-8 lg:px-10">
        <div className="grid max-w-5xl grid-cols-1 mx-auto space-x-4 md:grid-cols-4">
          <div className="col-span-1">
            {/* Left side: all news & event posts as <HoverBullet> links */}
            <div className="pl-4 mb-6 text-xl font-semibold text-gray-700 uppercase border-l-2 border-solid border-blue-light">
              {indexTitle}
            </div>
            <div className="border-gray-400 border-solid divide-y-1">
              {postsFrontMatter.map(({ title, slug }) => {
                const linkTitle = title
                const targetSlug = slug
                const href = generateAnchorLink({
                  indexSlug,
                  targetSlug,
                })
                return (
                  <div key={linkTitle} className="py-3">
                    <HoverBullet text={linkTitle} href={href} />
                  </div>
                )
              })}
            </div>
          </div>
          <div className="col-span-3">
            <div className="mb-8">
              {indexFeaturedImage && <DynamicImage {...indexFeaturedImage} />}
            </div>
            <h1 className="pb-0 text-center text-blue-brand">
              <TitleJSXWithOptionalHighlighting title={title} />
              <DIVIDER />
            </h1>
            {/* Right side: all news & event posts with anchors (ids) */}
            <div className="border-gray-400 border-solid divide-y-1">
              {postsFrontMatter.map((postFrontMatter) => (
                <Fragment key={postFrontMatter.title}>
                  <NewsEventsIndividualPost
                    frontMatter={postFrontMatter}
                    indexSlug={indexSlug}
                  />
                </Fragment>
              ))}
            </div>
            <div className="flex justify-center">
              <BUTTON href="/order/" text="Get connected" />
            </div>
          </div>
        </div>
      </div>
    </>
  )

  function NewsEventsIndividualPost({
    frontMatter,
    indexSlug,
  }: {
    frontMatter: PageFrontMatter
    indexSlug: string | null
  }) {
    const { title, headings, featuredImage, children, slug } = frontMatter
    const targetSlug = slug

    if (!title)
      throw new Error(
        "The field title is required in Markdown files in the News and Events section. Please correct the Markdown files."
      )

    return (
      <div
        id={generateAnchorID({ indexSlug, targetSlug })}
        className="pt-6 pb-2"
      >
        <h6 className="mb-5 text-xl text-left uppercase text-blue-brand">
          <TitleJSXWithOptionalHighlighting title={title} />
        </h6>
        {headings && headings.length > 0 && (
          <div className="mb-4">
            <HeadingsH2 headings={headings} />
          </div>
        )}
        {featuredImage && (
          <div className="mb-4">
            <ImageFixed {...featuredImage} />
          </div>
        )}
        {children && <div className="mb-4 prose">{children}</div>}
      </div>
    )
  }
}
