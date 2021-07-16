/**
 * Highlight the part of the title marked with * asterisks (Markdown bold)
 * if any. For example a Markdown file might read `title: "Residential
 * **High Speed Cable** Packages in Kingston & Belleville, Ontario"`
 */
export default function TitleJSXWithOptionalHighlighting({
  title,
}: {
  title: string
}) {
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
