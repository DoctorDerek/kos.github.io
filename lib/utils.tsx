import { useRouter } from "next/router"

import Link from "@/components/CustomLink"

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
 * Wrap the given footnote or comma-separated footnotes in a <sup> superscript * tag, if footnotes are present in the format "Up to 4 Mbps performance^6"
 * where ^6 or ^1,2 are footnotes. Full Markdown support is not wanted here.
 * @returns JSX Element with the footnotes separated by spaces in a <sup> tag
 */
export const formatFootnotesAsSuperscriptIfPresent = (stringToTest: string) => {
  const footnotesMatchArray = /(.*)\^([\d,]+)?(.*)?/.exec(stringToTest)
  if (footnotesMatchArray) {
    const [, before, footnotesWithCommas, after] = footnotesMatchArray
    if (footnotesWithCommas) {
      const footnotesWithSpaces = footnotesWithCommas.replace(/,/g, " ")
      return (
        <>
          {before}
          <sup>{footnotesWithSpaces}</sup>
          {after}
        </>
      )
    }
  }
  return <>{stringToTest}</>
}

/**
 * Add a Next.js <Link> to replace a single <a> or <Link> found in the
 * given string, if any. Full Markdown support is not wanted here, but
 * Markdown format of [title](https://www.example.com) is supported.
 *
 * @returns JSX Element including the correct <Link href=""> element
 */
export const addLinkToTextIfPresent = (stringToTest: string) => {
  const linkRegExp =
    /(.*)<[aL]i?n?k?.+href=['"](.+)['"].*>(.+)<\/[aL]i?n?k?>(.*)/
  const linkMatchResults = linkRegExp.exec(stringToTest)
  if (linkMatchResults) {
    const [, before, href, linkText, after] = linkMatchResults
    if (href && linkText) {
      return (
        <>
          {before}
          <Link href={href}>{linkText}</Link>
          {after}
        </>
      )
    }
  }

  const markdownRegExp = /(.*)\[(.+)\]\((.+)\)(.*)/
  const markdownMatchResults = markdownRegExp.exec(stringToTest)
  if (markdownMatchResults) {
    const [, before, linkText, href, after] = markdownMatchResults
    if (href && linkText) {
      return (
        <>
          {before}
          <Link href={href}>{linkText}</Link>
          {after}
        </>
      )
    }
  }

  return <>{stringToTest}</>
}

/**
 * Add a phone number link in the format <a href="tel:+1-613-549-8667"> to
 * replace a single phone number found in the given string, if any.
 *
 * @returns JSX Element including the correct <a href=""> element
 */
export const addPhoneLinkToTextIfPresent = ({
  stringToTest,
  color = "black",
  bold = "bold",
}: {
  stringToTest: string
  color?: "red" | "black"
  bold?: "bold" | "semibold" | "normal"
}) => {
  const phoneLinkRegExp = /(.*)1?-?(\d\d\d-\d\d\d-\d\d\d\d)(.*)/
  const phoneLinkMatchResults = phoneLinkRegExp.exec(stringToTest)
  if (phoneLinkMatchResults) {
    const [, before, phoneNumber, after] = phoneLinkMatchResults
    if (phoneNumber) {
      return (
        <>
          {before}
          <a
            href={`tel:+1-${phoneNumber}`}
            className={classNames(
              color === "red"
                ? "text-red-brand"
                : color === "black"
                ? "text-black"
                : "",
              bold === "bold"
                ? "font-bold"
                : bold === "semibold"
                ? "font-semibold"
                : "font-normal",
              "hover:underline"
            )}
          >
            {phoneNumber}
          </a>
          {after}
        </>
      )
    }
  }

  return <>{stringToTest}</>
}
