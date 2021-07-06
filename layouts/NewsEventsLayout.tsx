import { PageSeo } from "@/components/SEO"
import siteMetadata from "@/data/siteMetadata.json"
import Image from "@/components/CustomImage"
import HoverBulletNavMenuAndGetConnectedButton from "@/components/HoverBulletNavMenuAndGetConnectedButton"
import { MDXRemote } from "next-mdx-remote"
import MDXComponents from "@/components/MDXComponents"
import { Fragment } from "react"
import ImageFixed from "next/image"
import { DIVIDER } from "@/components/UTILS"
import TitleJSXWithOptionalHighlighting from "@/components/TitleJSXWithOptionalHighlighting"
import HeadingsH2 from "@/components/HeadingsH2"
import HoverBullet from "@/components/HoverBullet"

export default function NewsEventsLayout({
  posts,
  indexPost,
}: {
  posts: Post[]
  indexPost: Post
}) {
  const { mdxSource, frontMatter } = indexPost
  // generate the {children} props for the layout:
  frontMatter.children = (
    <MDXRemote {...mdxSource} components={{ components: MDXComponents }} />
  )

  // Get the slug, title, and featured image from the news/events/index.md file
  const { slug, title, featuredImage } = indexPost.frontMatter
  const indexSlug = slug && slug.replace("/index", "") // remove /index
  const indexTitle = title
  const indexFeaturedImage = featuredImage
  const url = `${siteMetadata.siteUrl}/${slug}`

  // anchor text is #slug, e.g. /news/events#2021-07-01
  const generateAnchorLink = (targetSlug: string | null) =>
    targetSlug && indexSlug
      ? "/" + indexSlug + "#" + generateAnchorID(targetSlug)
      : ""
  const generateAnchorID = (targetSlug: string | null) =>
    targetSlug && indexSlug ? targetSlug.replace(indexSlug + "/", "") : ""

  return (
    <>
      <PageSeo title={indexTitle} description="" url={url} />
      <div className="grid w-full xl:h-32 lg:h-28 md:h-24 sm:h-20 h-16 border-blue-brand border-solid border-t-[6px]">
        <Image src="/images/footer-bg.jpg" alt="" />
        {/* alt="" acceptable for purely decorative elements */}
      </div>
      <div className="px-6 py-8 mx-auto xl:py-16 lg:py-14 md:py-12 sm:py-10 md:px-8 lg:px-10">
        <div className="grid max-w-5xl grid-cols-4 mx-auto space-x-4">
          <div className="col-span-1">
            <div className="pl-4 mb-6 font-semibold text-gray-700 uppercase border-l-2 border-solid border-blue-light">
              {indexTitle}
            </div>
            {posts.map((post: Post) => {
              const { title, slug } = post.frontMatter
              const linkTitle = title
              const linkSlug = slug
              const href = generateAnchorLink(linkSlug)
              return (
                <Fragment key={linkTitle}>
                  <HoverBullet text={linkTitle} href={href} />
                </Fragment>
              )
            })}
          </div>
          <div className="col-span-3">
            {indexFeaturedImage && (
              <div className="grid w-full h-48 mb-8">
                <Image
                  alt={indexFeaturedImage.alt}
                  src={indexFeaturedImage.src}
                />
              </div>
            )}
            <h1 className="text-center color decor">
              <TitleJSXWithOptionalHighlighting title={title} />
              <DIVIDER />
            </h1>
            {posts.map((post: Post) => (
              <Fragment key={post.frontMatter.title}>
                <NewsEventsIndividualPost post={post} />
              </Fragment>
            ))}
            <HoverBulletNavMenuAndGetConnectedButton
              showGetConnectedButton={true}
            />
          </div>
        </div>
      </div>
    </>
  )

  function NewsEventsIndividualPost({ post }: { post: Post }) {
    const { mdxSource, frontMatter } = post

    // generate the {children} props for the layout:
    frontMatter.children = (
      <MDXRemote {...mdxSource} components={{ components: MDXComponents }} />
    )

    const { title, headings, featuredImage, children, slug } = frontMatter

    if (!title) throw new Error("title is a required field in Markdown files")

    return (
      <div id={generateAnchorID(slug)}>
        <h6 className="text-left uppercase color decor">
          <TitleJSXWithOptionalHighlighting title={title} />
        </h6>
        <div className="mb-8">
          <HeadingsH2 headings={headings} />
        </div>
        {featuredImage && (
          <div className="mb-8">
            <ImageFixed {...featuredImage} />
          </div>
        )}
        {children && <div className="mb-4 prose">{children}</div>}
        <hr />
      </div>
    )
  }
}
