import ImageFixed from "next/image"

import HeadingsH2 from "@/components/HeadingsH2"
import PostalCodeCheckForm from "@/components/PostalCodeCheckForm"
import TitleJSXWithOptionalHighlighting from "@/components/TitleJSXWithOptionalHighlighting"
import { DIVIDER } from "@/components/UTILS"
import { classNames } from "@/lib/utils"

export default function TitleHeadingsAndChildren({
  title,
  headings,
  fullWidth,
  showAvailabilityTool,
  featuredImage,
  children,
}: {
  title: string
  headings?: string[]
  fullWidth?: boolean
  showAvailabilityTool?: boolean
  featuredImage?: FeaturedImage
  children?: JSX.Element | JSX.Element[] | React.ReactNode
}) {
  return (
    <div
      className={classNames(
        fullWidth ? "max-w-5xl md:px-6 lg:px-12" : "max-w-xl md:px-0",
        "px-4 mx-auto"
      )}
    >
      <h1 className="text-left color decor">
        <TitleJSXWithOptionalHighlighting title={title} />
        <DIVIDER />
      </h1>
      {headings && headings.length > 0 && (
        <div className="mb-8">
          <HeadingsH2 headings={headings} />
        </div>
      )}
      {featuredImage && (
        <div className="mb-8">
          <ImageFixed {...featuredImage} />
        </div>
      )}
      {children && <div className="mb-4 prose">{children}</div>}
      {showAvailabilityTool && (
        <div className="mb-4">
          <PostalCodeCheckForm />
        </div>
      )}
    </div>
  )
}
