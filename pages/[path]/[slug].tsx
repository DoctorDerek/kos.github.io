import { MDXRemote } from "next-mdx-remote"
import { getFiles, getFileBySlug, formatSlug } from "@/lib/mdx"
import PricingPageLayout from "@/layouts/PricingPageLayout"
import MDXComponents from "@/components/MDXComponents"
import PageTitle from "@/components/PageTitle"

const PATHS = [
  "home-internet-in-kingston-ontario",
  "business-internet-in-kingston-ontario",
]

export async function getStaticPaths() {
  let posts: string[] = []
  let paths: any[] = []
  PATHS.forEach(async (path: string) => {
    posts = await getFiles(path)
    posts.forEach((postSlug: string) => {
      paths.push({
        params: {
          path: path,
          slug: formatSlug(postSlug),
        },
      })
    })
  })

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
