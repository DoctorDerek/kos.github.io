import { MDXRemote } from "next-mdx-remote"
import getFilesRecursively from "@/lib/utils/files"
import { getFileBySlug } from "@/lib/mdx"
import PricingPageLayout from "@/layouts/PricingPageLayout"
import MDXComponents from "@/components/MDXComponents"
import PageTitle from "@/components/PageTitle"

export async function getStaticPaths() {
  // search 1 level recursively in @/data/
  const dataRegExpMarkdown = /(.+)?\\(.+)?\\(.+)?\.md/
  // ["data\\hosting\\packages.md", "data", "hosting", "packages"]
  const paths: any[] = getFilesRecursively("data")
    .map((path: string) => dataRegExpMarkdown.exec(path))
    .filter((item: any[]) => Boolean(item)) // remove falsy
    .map((item: any[]) => ({
      params: {
        path: item[2], // "hosting" (supports 1 directory)
        slug: item[3], // "packages" (excluding .md or .mdx)
      },
    }))
  return {
    paths: paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }: { params: any }) {
  const post = await getFileBySlug(params.path, params.slug)

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
