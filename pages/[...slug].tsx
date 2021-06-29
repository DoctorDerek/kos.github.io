import { MDXRemote } from "next-mdx-remote"
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
  const paths: any[] = getFilesRecursively("data")
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

export default function Blog({ post }: { post: any }) {
  const { mdxSource, frontMatter } = post
  const content = (
    <MDXRemote {...mdxSource} components={{ components: MDXComponents }} />
  )

  return (
    <>
      {frontMatter.draft !== true ? (
        <PricingPageLayout frontMatter={frontMatter}>
          {content}
        </PricingPageLayout>
      ) : (
        <div className="mt-24 text-center">
          <PageTitle>
            Under Construction{" "}
            <span role="img" aria-label="roadwork sign">
              🚧
            </span>
          </PageTitle>
        </div>
      )}
    </>
  )
}
