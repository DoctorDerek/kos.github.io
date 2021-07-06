import { PageSeo } from "@/components/SEO"
import siteMetadata from "@/data/siteMetadata.json"
import Image from "@/components/CustomImage"
import PricingPackagesSection from "@/components/PricingPackagesSection"
import PricingPackagesSectionFootnotesAndDetails from "@/components/PricingPackagesSectionFootnotesAndDetails"
import IconColumnSection from "@/components/IconColumnSection"
import OurTeamSection from "@/components/OurTeamSection"
import PricingPackagesBlueSection from "@/components/PricingPackagesBlueSection"
import HoverBulletNavMenuAndGetConnectedButton from "@/components/HoverBulletNavMenuAndGetConnectedButton"
import TitleHeadingAndChildren from "@/components/TitleHeadingAndChildren"
import { MDXRemote } from "next-mdx-remote"
import MDXComponents from "@/components/MDXComponents"
import { Fragment } from "react"

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
  const {
    slug,
    title,
    headings,
    showAvailabilityTool,
    featuredImage,
    children,
  } = indexPost.frontMatter
  return (
    <>
      <PageSeo
        title={title.replace(/\*/g, "")}
        description=""
        url={`${siteMetadata.siteUrl}/${slug}`}
      />
      <div className="grid w-full xl:h-32 lg:h-28 md:h-24 sm:h-20 h-16 border-blue-brand border-solid border-t-[6px]">
        <Image src="/images/footer-bg.jpg" alt="" />
        {/* alt="" acceptable for purely decorative elements */}
      </div>
      <div className="py-8 mx-auto xl:py-16 lg:py-14 md:py-12 sm:py-10">
        <TitleHeadingAndChildren
          fullWidth={true}
          {...{
            title,
            headings,
            showAvailabilityTool,
            featuredImage,
            children,
          }}
        />
        <>
          {posts.map((post: Post) => (
            <Fragment key={post.frontMatter.title}>
              <NewsEventsIndividualPost post={post} />
            </Fragment>
          ))}
        </>
      </div>
    </>
  )
}

function NewsEventsIndividualPost({ post }: { post: Post }) {
  const { mdxSource, frontMatter } = post

  // generate the {children} props for the layout:
  frontMatter.children = (
    <MDXRemote {...mdxSource} components={{ components: MDXComponents }} />
  )

  const {
    slug,
    title,
    headings,
    fullWidth,
    showAvailabilityTool,
    featuredImage,
    hoverBulletNavMenu,
    showGetConnectedButton,
    pricingPackages,
    pricingPackagesSectionFootnotes,
    pricingPackagesSectionDetails,
    pricingPackagesSectionDetailsPromotion,
    pricingPackagesBlue,
    pricingPackagesBlueFootnotes,
    ourTeamSection,
    iconColumnSection,
    children,
  } = frontMatter

  if (!title) throw new Error("title is a required field in Markdown files")

  return (
    <>
      <PageSeo
        title={title.replace(/\*/g, "")}
        description=""
        url={`${siteMetadata.siteUrl}/${slug}`}
      />
      <div className="grid w-full xl:h-32 lg:h-28 md:h-24 sm:h-20 h-16 border-blue-brand border-solid border-t-[6px]">
        <Image src="/images/footer-bg.jpg" alt="" />
        {/* alt="" acceptable for purely decorative elements */}
      </div>
      <div className="py-8 mx-auto xl:py-16 lg:py-14 md:py-12 sm:py-10">
        <TitleHeadingAndChildren
          {...{
            title,
            headings,
            fullWidth,
            showAvailabilityTool,
            featuredImage,
            children,
          }}
        />
        <PricingPackagesSection pricingPackages={pricingPackages} />
        <PricingPackagesSectionFootnotesAndDetails
          pricingPackagesSectionFootnotes={pricingPackagesSectionFootnotes}
          pricingPackagesSectionDetails={pricingPackagesSectionDetails}
          pricingPackagesSectionDetailsPromotion={
            pricingPackagesSectionDetailsPromotion
          }
        />
        <PricingPackagesBlueSection
          pricingPackagesBlue={pricingPackagesBlue}
          pricingPackagesBlueFootnotes={pricingPackagesBlueFootnotes}
        />
        <IconColumnSection iconColumnSection={iconColumnSection} />
        <OurTeamSection ourTeamSection={ourTeamSection} />
        <HoverBulletNavMenuAndGetConnectedButton
          hoverBulletNavMenu={hoverBulletNavMenu}
          showGetConnectedButton={showGetConnectedButton}
        />
      </div>
    </>
  )
}