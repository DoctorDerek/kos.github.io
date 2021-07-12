import { MDXRemote } from "next-mdx-remote"

import MDXComponents from "@/components/MDXComponents"
import PageTitle from "@/components/PageTitle"
import PricingPageLayout from "@/layouts/PageLayout"
import { getFileBySlug } from "@/lib/mdx"
import getFilesRecursively from "@/lib/utils/files"

import type { MDXRemoteSerializeResult } from "next-mdx-remote"
/**
 * [...slug] is a catch-all dynamic route in Next.js that globs all possible
 * paths. The params object needs the query parameter slug as a string[] array.
 */
export async function getStaticPaths() {
  // search recursively in @/data/**
  // Note: Windows paths use \\ instead of / (data\\about.md vs. data/about.md)
  const dataRegExpMarkdown = /data[\\/]+(.+)?\.md/
  // /data\\(.+)?\.md/.exec("data\\hosting\\packages.md")[1].split(/\\/).pop()
  // => ["data\\hosting\\packages.md", "hosting\\packages"]
  const paths: any[] = getFilesRecursively("data")
    .map((path: string) => path.replace(/\\/g, "/")) // Windows: \\, Linux: /
    .map((path: string) => dataRegExpMarkdown.exec(path))
    .filter((matchItem: RegExpExecArray | null) => Boolean(matchItem))
    // remove falsy
    .map(
      (matchItem: RegExpExecArray | null) => (matchItem as RegExpExecArray)[1]
    ) // extract the complete path, including the filename
    .map((matchedPath: string) => matchedPath.split("/"))
    // "slug" is the complete path, including the slug, as an array
    .map((slug: string[]) => ({ params: { slug } }))
  return {
    paths: paths,
    fallback: false,
  }
}

export async function getStaticProps({
  params,
}: {
  params: { slug: string[] }
}) {
  const post = await getFileBySlug(params.slug)

  return { props: { post } }
}

export default function PricingPage({
  post,
}: {
  post: {
    mdxSource: MDXRemoteSerializeResult<Record<string, unknown>>
    frontMatter: PageFrontMatter
  }
}) {
  const { mdxSource, frontMatter } = post
  if (frontMatter.draft) return <UnderConstruction /> // hide draft pages

  // generate the {children} props for the layout:
  const content = (
    <MDXRemote {...mdxSource} components={{ components: MDXComponents }} />
  )

  return <PricingPageLayout {...frontMatter}>{content}</PricingPageLayout>

  function UnderConstruction() {
    return (
      <div className="mt-24 text-center">
        <PageTitle>
          Under Construction{" "}
          <span role="img" aria-label="roadwork sign">
            🚧
          </span>
        </PageTitle>
      </div>
    )
  }
}
