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
 * @typeParam fileName - The filename of the Markdown file
 * @typeParam lastmod - The date the post was last modified
 * @typeParam url - The URL for the post
 * @typeParam images - The images as an OpenGraphImages[]
 * @typeParam draft - Is the post a draft? (true or false)
 *
 * @remarks
 * This type is used for the blog posts in the site with their associated
 * mdx Markdown content.
 */
type BlogPostFrontMatter = {
  slug: string
  // slug is detected automatically from the filename of the Markdown file
  date: string | Date
  title: string
  summary: string
  tags: string[]
  fileName: string
  lastmod: string | Date
  url: string
  images: OpenGraphImages[]
  draft: boolean
}

/**
 * Frontmatter type used as pages array in PageLayout.tsx
 *
 * @typeParam slug - The URL slug
 * @typeParam title - The page title
 * @typeParam heading - The page heading
 * @typeParam fullWidth? - Whether to be wide like the pricing pages (true)
 *                        or narrow like the informational pages (false)
 * @typeParam hoverBulletNavMenu? - Whether to show the HoverBulletNavMenu
 * @typeParam showOrderNowButton - Whether to show "Order Now" at the bottom
 * @typeParam pricingPackages - The page title
 * @typeParam pricingPackagesSectionFootnotes - The page heading
 *
 * @remarks
 * This type is used for the Markdown for pricing pages of the site like
 * /home-internet-in-kingston-and-belleville-ontario/high-speed-cable
 */
type PageFrontMatter = {
  slug: string
  // slug is detected automatically from the filename of the Markdown file
  title: string
  heading: string
  fullWidth?: boolean
  hoverBulletNavMenu?: "Residential" | "Business"
  showOrderNowButton?: boolean
  pricingPackages: PricingPackage[]
  pricingPackagesSectionFootnotes: PricingPackagesSectionFootnote[]
  pricingPackagesSectionDetails: PricingPackagesSectionDetail[]
}

/**
 * Available packages & prices for display the sales pages using
 * <PricingPackageColumn />
 *
 * @typeParam packageName - The name of the package being advertised
 * @typeParam pricePerMonth - If present, price/month^footnotes ("$39.95^1,2")
 * @typeParam packageHeadings - An array of headings (["UP TO 10.0 ...","DATA"])
 * @typeParam packageDescription - The description paragraph for the package
 * @typeParam promotionHeading - If present, the promotion ("Make It Unlimited")
 * @typeParam promotionSubheading: The second line of the promotion ("Add...")
 * @typeParam promotionPricePerMonth: The price/mo. of the promotion ("10.00")
 * @typeParam promotionFootnotes: The promotion footnotes w/spaces e.g. "2 3"
 *
 * @remarks
 * This type contains the prices listed for sale to consumers on the site. If a
 * package shouldn't have a promotion (like an unlimited data package), none
 * will be displayed if promotionHeading is an empty string "".
 */
type PricingPackage = {
  packageName: string
  pricePerMonth: string
  packageHeadings: string[]
  packageDescription: string
  promotionHeading: string
  promotionSubheading: string
  promotionPricePerMonth: string
  promotionFootnotes: string
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
type PricingPackagesSectionFootnote = {
  id: string
  description: string
}

/**
 * These are the details for the <HoverBox /> sections that appear on the sales
 * pages and are displayed at the bottom of a <PricingPackageColumn />
 *
 * All the parameters are optional and will only be shown if present and not "".
 *
 * @typeParam detailsSectionHeading1 - The 1st heading at the top
 * @typeParam detailsSectionDescription1 - The description under the heading
 * @typeParam detailsSectionList1 - The details section bullets for the top part
 * @typeParam detailsSectionHeading2 - A 2nd heading in the middle
 * @typeParam detailsSectionDescription2 - The description under the 2nd heading
 * @typeParam detailsSectionList2 - The details section bullets for the part 2
 * @typerParam wrapWithHoverBox - Wrap with a <HoverBox> or display full-width
 *
 * @remarks
 * This type contains the additional details listed for packages on the website.
 */
type PricingPackagesSectionDetail = {
  detailsSectionHeading1?: string
  detailsSectionDescription1?: string | JSX.Element
  detailsSectionList1?: string[]
  detailsSectionHeading2?: string
  detailsSectionDescription2?: string | JSX.Element
  detailsSectionList2?: string[]
  wrapWithHoverBox: boolean
}
