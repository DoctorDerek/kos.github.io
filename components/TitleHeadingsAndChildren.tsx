import ImageFixed from "next/image"

import HeadingsH2 from "@/components/HeadingsH2"
import PostalCodeCheckForm from "@/components/PostalCodeCheckForm"
import TitleJSXWithOptionalHighlighting from "@/components/TitleJSXWithOptionalHighlighting"
import { DIVIDER } from "@/components/UTILS"
import { classNames } from "@/lib/utils"

export default function TitleHeadingsAndChildren({
  title,
  headings,
  centerTitleAndHeadings,
  fullWidth,
  showAvailabilityTool,
  featuredImage,
  children,
}: {
  title: string
  headings?: string | string[]
  centerTitleAndHeadings?: boolean
  fullWidth?: boolean
  showAvailabilityTool?: boolean
  featuredImage?: FeaturedImage
  children?: JSX.Element | JSX.Element[] | React.ReactNode
}) {
  if (!title) return null

  return (
    <div
      className={classNames(
        fullWidth ? "max-w-5xl md:px-6 lg:px-12" : "max-w-xl md:px-0",
        "px-4 mx-auto"
      )}
    >
      <h1
        className={classNames(
          "color decor",
          centerTitleAndHeadings ? "text-center" : "text-left"
        )}
      >
        <TitleJSXWithOptionalHighlighting title={title} />
        <DIVIDER />
      </h1>
      {headings && (
        <div className="mb-8">
          <HeadingsH2
            headings={headings}
            centerTitleAndHeadings={centerTitleAndHeadings}
          />
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
