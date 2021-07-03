import ImageFixed from "next/image"
import { DIVIDER } from "@/components/UTILS"
import { classNames, addLinkToTextIfPresent } from "@/lib/utils"
import PostalCodeCheckForm from "@/components/PostalCodeCheckForm"

export default function TitleHeadingAndChildren({
  title,
  headings,
  fullWidth,
  showAvailabilityTool,
  featuredImage,
  children,
}: {
  title: string
  headings?: string | string[]
  fullWidth?: boolean
  showAvailabilityTool?: boolean
  featuredImage?: FeaturedImage
  children?: JSX.Element | JSX.Element[] | React.ReactNode
}) {
  // support string | string[] for convenience by wrapping strings with an array
  if (!Array.isArray(headings)) {
    headings = headings === undefined ? [] : [headings]
  }

  return (
    <div
      className={classNames(
        fullWidth ? "max-w-5xl md:px-6 lg:px-12" : "max-w-xl md:px-0",
        "px-4 mx-auto"
      )}
    >
      <h1 className="text-left color decor">
        <TitleJSXWithOptionalHighlighting />
        <DIVIDER />
      </h1>
      <HeadingH2 />
      {featuredImage && (
        <div className="mb-8">
          <ImageFixed {...featuredImage} />
        </div>
      )}
      {children && <div className="mb-4 prose">{children}</div>}
      {showAvailabilityTool && (
        <div className="mb-4">
          <DIVIDER />
          <PostalCodeCheckForm />
        </div>
      )}
    </div>
  )

  /**
   * Highlight the part of the title marked with * asterisks (Markdown bold)
   * if any. For example a Markdown file might read `title: "Residential
   * **High Speed Cable** Packages in Kingston & Belleville, Ontario"`
   */
  function TitleJSXWithOptionalHighlighting() {
    if (!title) return null
    if (title.includes("**")) {
      const highlightRegExp = /(.*)\*\*(.+)\*\*(.*)/
      return (
        <>
          {title.replace(highlightRegExp, "$1")}
          <span className="text-red-brand">
            {title.replace(highlightRegExp, "$2")}
          </span>
          {title.replace(highlightRegExp, "$3")}
        </>
      )
    } else return <>{title}</>
  }

  function HeadingH2() {
    if (!(headings && Array.isArray(headings) && headings.length > 0))
      return null
    return (
      <div className="flex flex-col mb-8 space-y-6">
        {(headings as string[]).map((headingString: string) => (
          <h2 className="text-xl text-left" key={headingString}>
            {/*Up to one <a> or <Link> is supported in {headingString}*/}
            {addLinkToTextIfPresent(headingString)}
          </h2>
        ))}
      </div>
    )
  }
}
