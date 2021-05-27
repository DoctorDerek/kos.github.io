import { PageSeo } from "@/components/SEO"
import siteMetadata from "@/data/siteMetadata.json"
import Image from "@/components/CustomImage"
import Link from "@/components/Link"
import { BUTTON, DIVIDER } from "@/components/UTILS"
import { classNames } from "@/lib/utils"
import PostalCodeCheckForm from "@/components/PostalCodeCheckForm"

export function InternalTemplate({
  title,
  slug,
  heading,
  fullWidth = false,
  pricingSection = null,
  hoverBulletNavMenu = null,
  pricingFootnotesSection = null,
  showOrderNowButton = false,
  children,
}: {
  title: string | JSX.Element
  slug: string
  heading: string
  fullWidth?: boolean
  pricingSection?: JSX.Element | null
  hoverBulletNavMenu?: JSX.Element | null
  pricingFootnotesSection?: JSX.Element | null
  showOrderNowButton?: boolean
  children?: JSX.Element | JSX.Element[] | React.ReactNode
}): JSX.Element {
  if (typeof title === "string" && title.includes("*")) {
    // Highlight the part of the title marked with * asterisks (Markdown bold)
    // if any. For example a Markdown file might read `title: "Residential
    // *High Speed Cable* Packages in Kingston & Belleville, Ontario"`
    const highlightRegExp = /(.+)\*(.+)\*(.+)/
    title = (
      <>
        {title.replace(highlightRegExp, "$1")}
        <span className="text-red-brand">
          {title.replace(highlightRegExp, "$2")}
        </span>
        {title.replace(highlightRegExp, "$3")}
      </>
    )
  }

  function TitleHeadingAndChildren() {
    return (
      <div
        className={classNames(
          fullWidth ? "max-w-5xl md:px-6 lg:px-12" : "max-w-xl md:px-0",
          "px-4 mx-auto"
        )}
      >
        <TitleH1WithOptionalHighlighting />
        <HeadingH2AndPostalCodeCheck />
        <div className="prose">{children}</div>
      </div>
    )
  }

  function TitleH1WithOptionalHighlighting() {
    return (
      <>
        <h1 className="text-left color decor">{title}</h1>
        <DIVIDER />
      </>
    )
  }

  function HeadingH2AndPostalCodeCheck() {
    return (
      <div className="flex flex-col space-y-6">
        <h2 className="text-xl text-left">{heading}</h2>
        <PostalCodeCheckForm />
      </div>
    )
  }

  function PricingSection() {
    return (
      <>
        <div className="pt-6">{pricingSection}</div>
        <div className="py-6">{pricingFootnotesSection}</div>
      </>
    )
  }

  function HoverBulletNavMenu() {
    return (
      <div className="max-w-xl mx-auto">
        <DIVIDER />
        {hoverBulletNavMenu && (
          <>
            <div className="pb-4 text-2xl font-semibold tracking-tight color">
              Please <Link href="/contact">contact our office</Link> for more
              information, or select from one of our services below.
            </div>
            {hoverBulletNavMenu}
          </>
        )}
        {showOrderNowButton && (
          <div className="py-6">
            <BUTTON href="/order/" text="Get connected" />
          </div>
        )}
      </div>
    )
  }

  return (
    <>
      <PageSeo
        title={title as string}
        description=""
        url={`${siteMetadata.siteUrl}/${slug}`}
      />
      <div className="grid w-full xl:h-32 lg:h-28 md:h-24 sm:h-20 h-16 border-blue-brand border-solid border-t-[6px]">
        <Image src="/images/footer-bg.jpg" alt="" />
        {/* alt="" acceptable for purely decorative elements */}
      </div>
      <div
        className={classNames(
          "py-8 mx-auto xl:py-16 lg:py-14 md:py-12 sm:py-10"
        )}
      >
        <TitleHeadingAndChildren />
        {pricingSection && <PricingSection />}
        <HoverBulletNavMenu />
      </div>
    </>
  )
}
