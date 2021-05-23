/// <reference types="next" />
/// <reference types="next/types/global" />
declare module "*.svg" {
  const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>
  export default content
}

/**
 * Recursive navigation menu type
 *
 * @typeParam title - The title of the link to display in the nav menu.
 * @typeParam href_or_submenu - The actual href (absolute URL) for a link,
 *                              OR another NAVIGATION_MENU (a submenu).
 *
 * @remarks
 * This type expects an array of tuples, where each array has a "title"
 * for the navigation menu that either points to a link or submenu. The
 * link ("href") is a plain string. The submenu is this type, recursively.
 *
 * Reference:
 * https://www.typescriptlang.org/play#example/recursive-type-references
 *
 */
type NAVIGATION_MENU_TYPE =
  | [
      title: string,
      href_or_submenu: string | NAVIGATION_MENU_TYPE | NAVIGATION_MENU_TYPE[]
    ]
  | NAVIGATION_MENU_TYPE[]

/**
 * Frontmatter type used as posts array in ListLayout.tsx & PostLayout.tsx
 *
 * @typeParam slug - The URL slug
 * @typeParam date - The publication date
 * @typeParam title - The post title
 * @typeParam summary - The post summary
 * @typeParam tags - The tags as a string array
 *
 * @remarks
 * This type is used for the blog posts in the site with their associated
 * mdx Markdown content.
 */
type FrontMatter = {
  slug: string
  date: string | Date
  title: string
  summary: string
  tags: string[]
  fileName: string
  lastmod: string | Date
  url: string
  tags: string[]
  images: OpenGraphImages[]
  draft: boolean
}

/**
 * Available packages & prices for display the sales pages using
 * <PricingPackageColumn />
 *
 * @typeParam packageName - The name of the package being advertised
 * @typeParam pricePerMonthDollars - The price/mo. in Canadian dollars
 * @typeParam pricePerMonthCents - The # of cents in the monthly price e.g. $.95
 * @typeParam downloadSpeed - The download speed (e.g. "10.0 MBPS")
 * @typeParam dataTransfer - The amount of data transfer
 * @typeParam description - The paragraph <p> description of the package
 * @typeParam priceFootnotes - The footnotes as a string with spaces e.g. "1 2"
 *
 * @remarks
 * This type contains the prices listed for sale to consumers on the site.
 */
type PricingPackage = {
  packageName: string
  pricePerMonthDollars: string
  pricePerMonthCents: string
  downloadSpeed: string
  dataTransfer: string
  description: string
  priceFootnotes: string
}

/**
 * These are the footnotes that are clickable links (1, 2, 3, etc.) on the sales
 * pages and displayed at the bottom of a <PricingPackageColumn />
 *
 * @typeParam id - The number of the footnote, e.g. 1
 * @typeParam description - The full text of the footnote
 *
 * @remarks
 * This type contains the footnotes for the sale prices listed on the website.
 */
type PricingPackageFootnote = {
  id: string
  description: string
}

/**
 * These are the details for the <HoverBox /> sections that appear on the sales
 * pages and are displayed at the bottom of a <PricingPackageColumn />
 *
 * @remarks
 * This type allows 1 layer of nested items, such that multiple PricingPackageDetailsItem types can be displayed as one block or <HoverBox>
 */
type PricingPackageDetails = Array<
  PricingPackageDetailsItem | PricingPackageDetailsItem[]
>

/**
 * These are the individual detail items for the <HoverBox /> sections that
 * appear on the sales pages and are displayed at the bottom of a
 * <PricingPackageColumn />
 *
 * @typeParam detailsSectionHeading - The <PricingPackageDetailsSection> heading
 * @typeParam detailsSectionDescription - Optional <p> paragraph description
 * @typeParam detailsSectionList - Optional <ul> list items for section bullets
 *
 * @remarks
 * This type contains the additional details listed for packages on the website.
 */
type PricingPackageDetailsItem = {
  detailsSectionHeading: string
  detailsSectionDescription: string | JSX.Element
  detailsSectionList: string[]
}
