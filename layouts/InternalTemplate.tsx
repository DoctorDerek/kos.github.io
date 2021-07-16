import ImageFixed from "next/image"

import Image from "@/components/Utils/CustomImage"
import Link from "@/components/Utils/CustomLink"
import PageSeo from "@/components/Utils/PageSeo"
import siteMetadata from "@/data/siteMetadata.json"

export function InternalTemplate({
  title,
  slug,
  bulletNavMenu = null,
  children,
}: {
  title: string | JSX.Element
  slug: string
  bulletNavMenu?: JSX.Element | null
  children: JSX.Element | JSX.Element[]
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
    <Link
      href={href}
      className="inline-block px-4 py-2 text-base font-normal leading-normal text-center no-underline whitespace-no-wrap align-middle border rounded select-none btn btn-orange"
    >
      {text}
    </Link>
  )
  return (
    <>
      <PageSeo
        title={`${title}`}
        description=""
        url={`${siteMetadata.siteUrl}/${slug}`}
      />
      <div className="grid w-full xl:h-32 lg:h-28 md:h-24 sm:h-20 h-16 border-[#005395] border-solid border-t-[6px]">
        <Image src="/images/footer-bg.jpg" alt="Decoration" />
        {/* alt="" acceptable for purely decorative elements */}
      </div>
      <div className="max-w-xl px-4 py-8 mx-auto md:px-0 xl:py-16 lg:py-14 md:py-12 sm:py-10">
        <h1 className="text-left text-blue-brand decor">{title}</h1>
        <div className="pb-4 text-center">
          <ImageFixed
            src="/images/h-decor.png"
            height="4px"
            width="64px"
            alt="Decoration"
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
