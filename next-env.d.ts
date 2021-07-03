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
 * Frontmatter type used as pages array in PricingPageLayout.tsx
 *
 * @typeParam slug - The URL slug - based on the filename of the Markdown file
 * @typeParam title - The page title as a string ("**Home Internet** in ON")
 * @typeParam heading - The page heading(s) as a string or array (["One","Two"])
 * @typeParam fullWidth? - Whether to be wide like the pricing pages (true)
 *                         or narrow like the informational pages (false).
 *                         Note: for readability "fullWidth" is max-5xl for text
 * @typeParam showAvailabilityTool? - Whether to show the post code search tool
 * @typeParam featuredImage? - If present, show a image that matches "fullWidth"
 * @typeParam hoverBulletNavMenu? - Whether to show the <HoverBulletNavMenu>
 *                                  and if so which: "Residential" or "Business"
 * @typeParam showGetConnectedButton - Whether to show a "Get Connected" button
 * @typeParam pricingPackages - An array of the PricingPackage objects / columns
 * @typeParam pricingPackagesSectionFootnotes - The footnotes before the details
 * @typeParam pricingPackagesSectionDetailsPromotion? - Optional promotion price
 * in the format of "$dollars.cents^footnotes duration" ... for example: ("ADD
 * HOME PHONE SERVICE TO ANY HIGH SPEED INTERNET PACKAGE FOR $9.95^6 / month")
 * @typeParam pricingPackagesBlue - Rounded blue gradient boxes that can be
 * displayed up to 4 per column (like <PricingPackageColumn>) but can also be
 * displayed full-width ala useSmallHoverBox in <PricingPackagesSectionDetails>
 * @typeParam iconColumnSection? - Used to show <IconColumn>s on the /about page
 * @typeParam ourTeamSection? - Used to show <TeamHeadshot>s on the /about page
 *
 * The "children" are the React components generated from any included Markdown:
 * @typeParam children - Any Markdown/MDX will be "prose" (Tailwind typography)
 * Note: prose has "width: 65ch" for readability (720px) so is not "fullWidth"
 *
 * @remarks
 * This type is used for reading the Markdown (.md) files that generate the site
 */
type PageFrontMatter = {
  slug: string
  title: string
  headings?: string | string[]
  fullWidth?: boolean
  showAvailabilityTool?: boolean
  featuredImage?: FeaturedImage
  hoverBulletNavMenu?: "Residential" | "Business"
  showGetConnectedButton?: boolean
  pricingPackages?: PricingPackage[]
  pricingPackagesSectionFootnotes?: PricingPackagesSectionFootnote[]
  pricingPackagesSectionDetails?: PricingPackagesSectionDetail[]
  pricingPackagesSectionDetailsPromotion?: string
  pricingPackagesBlue?: (PricingPackage & { useSmallBlueBox: boolean })[]
  pricingPackagesBlueFootnotes?: PricingPackagesSectionFootnote[]
  iconColumnSection?: { heading: string; iconColumns: IconColumn[] }
  ourTeamSection?: { heading: string; teamHeadshots: TeamHeadshot[] }
}

/**
 * <IconColumn>s display marketing copy with an icon, heading, and subheading.
 *
 * @typeParam icon - The desired icon to be used ("user-group")
 * @typeParam heading - The first line of text ("2500+")
 * @typeParam subheading - The second line of text ("HAPPY CLIENTS")
 */
type IconColumn = { icon: HeroIcon; heading: string; subheading: string }

/**
 * <HeroIcon>s are the supported icons from https://heroicons.com/ (free icons)
 * All icons are used in their normal "outline" form, not their "solid" form.
 * To add new <HeroIcon>s, add them here and in the file /lib/HERO_ICONS.tsx
 *
 * @typeParam icon - The name of the icon, hyphenated; they are imported as
 * camelCase in the file /lib/HERO_ICONS.tsx ("user-group" => "UserGroupIcon")
 */
type HeroIcon = "user-group" | "cog" | "clock"

/**
 * A FeaturedImage will be shown after the heading. All fields are required.
 *
 * @typeParam src - The URL: /public/images/image.jpg => "/images/image.jpg"
 * @typeParam alt - The alternate text describing the image (without "Image of")
 * @typeParam width - The width of the image in pixels ("500" or "500px")
 * @typeParam height - The height of the image in pixels ("500" or "500px")
 */
type FeaturedImage = {
  src: string
  alt: string
  width: string
  height: string
}

/**
 * A TeamHeadshot is an employee's name & headshot for the About page.
 *
 * @typeParam name - Employee's name, as it should be shown on the site
 * @typeParam image - The Employee's headshot with all required fields
 */
type TeamHeadshot = {
  name: string
  image: FeaturedImage
}

/**
 * Available packages & prices for display the sales pages using
 * <PricingPackageColumn />
 *
 * @typeParam packageName - The name of the package being advertised
 * @typeParam packagePrices - An array of "$dollars.cents^footnotes duration"
 *            (["$39.95^1,2 per month","$200.00^1 per year","No setup fee"])
 * @typeParam packageHeadings - An array of headings (["UP TO 10.0 ...","DATA"])
 * If no packageHeadings are desired, use an empty string "" instead of nothing
 * @typeParam packageDescription - The description paragraph for the package
 * @typeParam promotionHeading - If present, the promotion ("Make It Unlimited")
 * @typeParam promotionSubheading: The second line of the promotion ("Add...")
 * @typeParam promotionPrice: The price of the promotion ("$10.00^2 per month")
 * @typeParam modalBullets - An array of bullets for the "details" pop-up modal;
 * headings start with # (["#Account Includes:","Up to 15.0 Mbps...","#Email"])
 * @typeParam modalFootnotes - An array of modal footnotes (["1. ...","* ..."])
 * Note: At least one of modalBullets AND/OR modalFootnotes is required here
 *
 * @remarks
 * A PricingPackage contains the prices listed for sale to consumers on the
 * site, with optional promotion like an unlimited data project. If a package
 * doesn't have a promotion, leave promotionHeading blank (the empty string "").
 *
 * This type is used for each pricing packge on the pricing pages of the site,
 * such as /home-internet-in-kingston-and-belleville-ontario/high-speed-cable
 */
type PricingPackage = {
  packageName: string
  packagePrices: string | string[]
  packageHeadings: string | string[]
  packageDescription?: string
  promotionHeading?: string
  promotionSubheading?: string
  promotionPrice?: string
  modalBullets?: string | string[]
  modalFootnotes?: string | string[]
}

/**
 * These are the footnotes that are clickable links (1, 2, 3, etc.) on the sales
 * pages and displayed at the bottom of a <PricingPackageColumn />
 *
 * @typeParam footnoteLabel - The number of the footnote (such as "1" or "*")
 * @typeParam description - The full text of the footnote
 *
 * @remarks
 * This type contains the footnotes for the sale prices listed on the website.
 */
type PricingPackagesSectionFootnote = {
  footnoteLabel: string
  description: string
}

/**
 * These are the details for the <HoverBox /> sections that appear on the sales
 * pages and are displayed at the bottom of a <PricingPackageColumn />
 *
 * All the parameters are optional and will only be shown if present and not "".
 *
 * @typeParam detailsSectionHeading1 - The 1st heading at the top
 * @typeParam detailsSectionDescription1 - The description paragraph(s) at top
 * @typeParam detailsSectionList1 - The details section bullets for the top part
 * @typeParam detailsSectionListIndent1 - An indented bulleted list for the top
 * @typeParam detailsSectionHeading2 - A 2nd heading in the middle
 * @typeParam detailsSectionDescription2 - The description paragraph(s) below
 * @typeParam detailsSectionList2 - The details section bullets at the bottom
 * @typeParam detailsSectionListIndent2 - An indented bulleted list at bottom
 * @typeParam showOrderNowButton - Show a red "Order Now" button at the bottom
 * @typeParam useSmallHoverBox - Use small <HoverBox> or display full-width
 *
 * @remarks
 * This type contains the additional details listed for packages on the website.
 */
type PricingPackagesSectionDetail = {
  detailsSectionHeading1?: string
  detailsSectionDescription1?: string | string[]
  detailsSectionList1?: string[]
  detailsSectionListIndent1?: string[]
  detailsSectionHeading2?: string
  detailsSectionDescription2?: string | string[]
  detailsSectionList2?: string[]
  detailsSectionListIndent2?: string[]
  showOrderNowButton?: boolean
  useSmallHoverBox?: boolean
}
