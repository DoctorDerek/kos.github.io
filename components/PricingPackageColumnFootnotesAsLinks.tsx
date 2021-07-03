import Link from "@/components/CustomLink"
import { classNames } from "@/lib/utils"

/**
 * @param footnotes
 * a string of unique footnotes that will be split on commas
 * i.e. "1,2" will be split to [1,2]
 */
export default function PricingPackageColumnFootnotesAsLinks({
  footnotes,
  color,
}: {
  footnotes: string
  color: "white" | "black"
}) {
  const footnotesArray = footnotes.split(",")
  if (Array.from(new Set(footnotesArray)).length !== footnotesArray.length)
    throw new Error(
      `Duplicate footnotes string "${footnotes}" found in <PricingPackageFootnotes /> e.g. "2,2" instead of "2" or "1,2"`
    )
  return (
    <sup>
      <ol className="inline">
        {footnotesArray.map((footnote, index) => (
          <li key={footnote} className="inline">
            <Link
              href={`#${footnote}`}
              className={classNames(
                color === "white" ? "text-white" : "text-black",
                "underline"
              )}
            >
              {footnote}
            </Link>
            {index === footnotes.length - 1 ? "" : " "}
            {/* join footnotes with " " between items, except last item */}
          </li>
        ))}
      </ol>
    </sup>
  )
}
