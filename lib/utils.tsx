import { useRouter } from "next/router"
import Link from "@/components/Link"

export const kebabCase = (str: string) => {
  const result =
    str &&
    str.match(
      /[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g
    )

  return result && result.map((x: string) => x.toLowerCase()).join("-")
}

export const useCurrentPath = () => {
  // fetch current page URL
  const router = useRouter() // next/router
  const currentPagePath = router.asPath

  return currentPagePath
}

export const classNames = (...classes: string[]) => classes.join(" ")

/**
 * Extract the dollars, cents, comma-separated footnotes (if any), and duration
 * from the given price string. If the format is not met, then the entire price * will be returned as the duration, which enables uses such as "No Setup Fee".
 *
 * The correct format is given as "$dollars.cents^footnotes duration"
 * e.g. "$39.95^1,2 per month"
 * where the comma-separated "footnotes" are optional and everything after
 * the price is used as the "duration" appearing on the second line.
 */
export const extractDollarsCentsAndFootnotesFromPrice = (price: string) => {
  const priceMatchArray = /\$(\d+)\.?(\d+)?\^?([\d,]+)?(.+)?/.exec(price)
  if (priceMatchArray) {
    // [, dollars, cents, footnotes, duration]
    return Array.from(priceMatchArray)
  }
  return [price, undefined, undefined, undefined, price] // "No setup fee"
}

/**
 * Add a Next.js <Link> to replace a single <a> or <Link> found in the
 * given string, if any. Full Markdown support is not wanted here.
 */
export const addLinkToTextIfPresent = (stringToTest: string) => {
  //  // if any. For example a Markdown file might read `title: "Residential
  // **High Speed Cable** Packages in Kingston & Belleville, Ontario"`
  const linkRegExp =
    /(.*)<[aL]i?n?k?.+href=['"](.+)['"].*>(.+)<\/[aL]i?n?k?>(.*)/
  const matchResults = linkRegExp.exec(stringToTest)
  if (matchResults) {
    const [, before, href, linkText, after] = matchResults
    return (
      <>
        {before}
        <Link href={href} className="underline text-blue-brand">
          {linkText}
        </Link>
        {after}
      </>
    )
  } else return <>{stringToTest}</>
}
