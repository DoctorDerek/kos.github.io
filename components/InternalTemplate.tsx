import ImageFixed from "next/image"
import { PageSeo } from "@/components/SEO"
import siteMetadata from "@/data/siteMetadata.json"
import Image from "@/components/CustomImage"

export function InternalTemplate({
  title,
  slug,
  bulletNavMenu,
  children,
}: {
  title: string
  slug: string
  bulletNavMenu: JSX.Element
  children: JSX.Element[]
}): JSX.Element {
  const isRequired = () => {
    throw new Error("Both href and children props are required in BUTTON")
  }
  const BUTTON = ({
    href = isRequired(),
    text = isRequired(),
  }: {
    href: string
    text: string
  }) => (
    <a
      href={href}
      className="inline-block px-4 py-2 text-base font-normal leading-normal text-center no-underline whitespace-no-wrap align-middle border rounded select-none btn btn-orange"
    >
      {text}
    </a>
  )
  return (
    <>
      <PageSeo
        title={`${title}`}
        description=""
        url={`${siteMetadata.siteUrl}/${slug}`}
      />
      <div className="grid w-full xl:h-32 lg:h-28 md:h-24 sm:h-20 h-16 border-[#005395] border-solid border-t-[6px]">
        <Image src="/images/footer-bg.jpg" alt="" />
        {/* alt="" acceptable for purely decorative elements */}
      </div>
      <div className="max-w-xl px-4 py-8 mx-auto md:px-0 xl:py-16 lg:py-14 md:py-12 sm:py-10">
        <h1 className="text-left color decor">{title}</h1>
        <div className="pb-4 text-center">
          <ImageFixed
            src="/images/h-decor.png"
            height="4px"
            width="64px"
            alt=""
          />
          {/* alt="" acceptable for purely decorative elements */}
        </div>
        {children}
        {bulletNavMenu}
        <div className="py-6">
          <BUTTON href="/order/" text="Get connected" />
        </div>
      </div>
    </>
  )
}