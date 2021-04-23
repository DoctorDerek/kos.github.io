import ImageFixed from "next/image"
import { PageSeo } from "@/components/SEO"
import siteMetadata from "@/data/siteMetadata"
import RightArrow from "@/data/material-icons/keyboard_arrow_right_black_48dp.svg"

export default function InternalTemplate() {
  const title =
    "Home Internet Service Provider in Kingston & Belleville, Ontario"
  // "Residential Services"
  const slug = "residential-services"
  // "residential"

  const BULLET = () => (
    <div className="inline-block w-3 h-3 text-blue-800 border-current border-solid rounded-full fill-current border-[1px] mx-4">
      <RightArrow />
    </div>
  )

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
      <div className="max-w-xl px-4 mx-auto md:px-0">
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
        <p>
          Kingston Online Services offers Internet for the home (or home office)
          at speeds starting from dial-up connectivity to high speed services
          intended for video and telephony.
        </p>
        <p>
          Kingston Online Services also provides innovative solutions for rural
          connectivity where conventional Internet services are not available.
        </p>
        <h2 className="text-2xl tracking-tight color">
          Please <a href="/contact.php">contact our office</a> for more
          information, or select from one of our services below.
        </h2>
        <div className="flex flex-col pt-4 md:space-x-16 md:flex-row md:pt-0">
          <ul>
            <li>
              <BULLET />
              <a href="/res/high-speed-cable/">High Speed Cable</a>
            </li>
            <li>
              <BULLET />
              <a href="/res/wireless-broadband/">Wireless Broadband</a>
            </li>
            <li>
              <BULLET />
              <a href="/res/high-speed-dsl/">High Speed DSL</a>
            </li>
          </ul>
          <ul>
            <li>
              <BULLET />
              <a href="/res/voip/">VoIP</a>
            </li>
            <li>
              <BULLET />
              <a href="/res/mail/">Mail</a>
            </li>
            <li>
              <BULLET />
              <a href="/res/dial-up/">Dial Up</a>
            </li>
          </ul>
        </div>
        <div className="py-6">
          <BUTTON href="/order/" text="Get connected" />
        </div>
      </div>
    </>
  )
}
