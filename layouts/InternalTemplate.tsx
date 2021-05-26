import { PageSeo } from "@/components/SEO"
import siteMetadata from "@/data/siteMetadata.json"
import Image from "@/components/CustomImage"
import innerText from "react-innertext"
import Link from "@/components/Link"
import { BUTTON, DIVIDER } from "@/components/UTILS"
import { classNames } from "@/lib/utils"

export function InternalTemplate({
  title,
  slug,
  fullWidth = false,
  pricingSection = null,
  hoverBulletNavMenu = null,
  footnotesSection = null,
  showOrderNowButton = false,
  children,
}: {
  title: string | JSX.Element
  slug: string
  fullWidth?: boolean
  pricingSection?: JSX.Element | null
  hoverBulletNavMenu?: JSX.Element | null
  footnotesSection?: JSX.Element | null
  showOrderNowButton?: boolean
  children: JSX.Element | JSX.Element[]
}): JSX.Element {
  const HoverBulletNavMenu = () => (
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
      )}{" "}
    </div>
  )
  function TitleH1AndChildren() {
    return (
      <div
        className={classNames(
          fullWidth ? "max-w-5xl md:px-6 lg:px-12" : "max-w-xl md:px-0",
          "px-4 mx-auto"
        )}
      >
        <h1 className="text-left color decor">{title}</h1>
        <DIVIDER />
        {children}
      </div>
    )
  }
  function PricingSection() {
    return (
      <>
        <div className="pt-6">{pricingSection}</div>
        <div className="py-6">{footnotesSection}</div>
      </>
    )
  }

  return (
    <>
      <PageSeo
        title={innerText(title)}
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
        <TitleH1AndChildren />
        {pricingSection && <PricingSection />}
        <HoverBulletNavMenu />
      </div>
    </>
  )
}
