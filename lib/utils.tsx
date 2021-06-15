import { useRouter } from "next/router"

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

export const extractDollarsCentsAndFootnotesFromPrice = (price: string) => {
  const priceMatchArray = /\$(\d+)\.?(\d+)?\^?([\d,]+)?(.+)?/.exec(price)
  if (priceMatchArray) {
    // [, dollars, cents, footnotes, duration]
    return Array.from(priceMatchArray)
  }
  return [price, undefined, undefined, undefined, price] // "No setup fee"
  /*
    throw new Error(
      `${price} does not match the specified format in <PricingPackageColumn />. The correct format is "$dollars.cents^footnotes duration" e.g. "$39.95^1,2 per month" where the comma-separated "footnotes" are optional and everything after the price is used as the "duration" appearing on the second line`
    )*/
}
