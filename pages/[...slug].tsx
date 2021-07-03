import { MDXRemote } from "next-mdx-remote"
import type { MDXRemoteSerializeResult } from "next-mdx-remote"
import getFilesRecursively from "@/lib/utils/files"
import { getFileBySlug } from "@/lib/mdx"
import PricingPageLayout from "@/layouts/PricingPageLayout"
import MDXComponents from "@/components/MDXComponents"
import PageTitle from "@/components/PageTitle"

/**
 * [...slug] is a catch-all dynamic route in Next.js that globs all possible
 * paths. The params object needs the query parameter slug as a string[] array.
 */
export async function getStaticPaths() {
  // search recursively in @/data/**
  const dataRegExpMarkdown = /data\\(.+)?\.md/
  // /data\\(.+)?\.md/.exec("data\\hosting\\packages.md")[1].split(/\\/).pop()
  // => ["data\\hosting\\packages.md", "hosting\\packages"]
  const paths: { params: { slug: string } }[] = getFilesRecursively("data")
    .map((path: string) => dataRegExpMarkdown.exec(path))
    .filter((matchItem: any[]) => Boolean(matchItem)) // remove falsy
    .map((matchItem: any[]) => {
      const splitArray = matchItem[1].split("\\") // ["hosting","packages"]
      return {
        params: {
          slug: splitArray,
        },
      }
    })
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
