import { addLinkToTextIfPresent, classNames } from "@/lib/utils"

export default function HeadingsH2({
  headings,
  centerTitleAndHeadings,
}: {
  headings?: string | string[]
  centerTitleAndHeadings?: boolean
}) {
  // support string | string[] for convenience by wrapping strings with an array
  if (!Array.isArray(headings)) {
    headings = headings === undefined ? [] : [headings]
  }
  if (!(Array.isArray(headings) && headings.length > 0)) return null
  return (
    <div
      className={classNames(
        "flex flex-col space-y-6",
        centerTitleAndHeadings ? "text-center" : "text-left"
      )}
    >
      {(headings as string[]).map((headingString: string) => (
        <h2 className="text-xl" key={headingString}>
          {/*Up to one <a> or <Link> is supported in {headingString}*/}
          {addLinkToTextIfPresent(headingString)}
        </h2>
      ))}
    </div>
  )
}
