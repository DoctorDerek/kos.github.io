import { addLinkToTextIfPresent } from "@/lib/utils"

export default function HeadingsH2({
  headings,
}: {
  headings?: string | string[]
}) {
  // support string | string[] for convenience by wrapping strings with an array
  if (!Array.isArray(headings)) {
    headings = headings === undefined ? [] : [headings]
  }
  if (!(headings && Array.isArray(headings) && headings.length > 0)) return null
  return (
    <div className="flex flex-col space-y-6">
      {(headings as string[]).map((headingString: string) => (
        <h2 className="text-xl text-left" key={headingString}>
          {/*Up to one <a> or <Link> is supported in {headingString}*/}
          {addLinkToTextIfPresent(headingString)}
        </h2>
      ))}
    </div>
  )
}
