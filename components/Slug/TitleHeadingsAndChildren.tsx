import HeadingsH2 from "@/components/Slug/HeadingsH2"
import PostalCodeCheckForm from "@/components/Slug/PostalCodeCheckForm"
import DIVIDER from "@/components/Utils/DECOR/DIVIDER"
import DynamicImage from "@/components/Utils/DynamicImage"
import TitleJSXWithOptionalHighlighting from "@/components/Utils/TitleJSXWithOptionalHighlighting"
import { classNames } from "@/lib/utils"

export default function TitleHeadingsAndChildren({
  title,
  headings,
  centerTitle,
  centerHeadings,
  fullWidth,
  showAvailabilityTool,
  featuredImage,
  children,
}: {
  title: string
  headings?: string | string[]
  centerTitle?: boolean
  centerHeadings?: boolean
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
          "text-blue-brand decor",
          centerTitle ? "text-center" : "text-left"
        )}
      >
        <TitleJSXWithOptionalHighlighting title={title} />
        <DIVIDER />
      </h1>
      {headings && (
        <div className="mb-8">
          <HeadingsH2 headings={headings} centerHeadings={centerHeadings} />
        </div>
      )}
      {featuredImage && (
        <div className="mb-8">
          <DynamicImage {...featuredImage} />
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
