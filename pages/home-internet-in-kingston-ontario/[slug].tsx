import { MDXRemote } from "next-mdx-remote"
import {
  getFiles,
  getFileBySlug,
  getAllFilesFrontMatter,
  formatSlug,
} from "@/lib/mdx"
import PricingPageLayout from "@/layouts/PricingPageLayout"
import MDXComponents from "@/components/MDXComponents"
import PageTitle from "@/components/PageTitle"

const PATH = "home-internet-in-kingston-ontario"

export async function getStaticPaths() {
  const posts = await getFiles(PATH)

  return {
    paths: posts.map((p: string) => ({
      params: {
        slug: formatSlug(p),
      },
    })),
    fallback: false,
  }
}

export async function getStaticProps({ params }: { params: any }) {
  const allPages = await getAllFilesFrontMatter(PATH)
  const postIndex =
    allPages.findIndex &&
    allPages.findIndex((page: PageFrontMatter) => page.slug === params.slug)
  const prev = allPages[postIndex + 1] || null
  const next = allPages[postIndex - 1] || null
  const post = await getFileBySlug(PATH, params.slug)

  return { props: { post, prev, next } }
}

export default function Blog({
  post,
  prev,
  next,
}: {
  post: any
  prev: any
  next: any
}) {
  const { mdxSource, frontMatter } = post
  const content = (
    <MDXRemote {...mdxSource} components={{ components: MDXComponents }} />
  )

  return (
    <>
      {frontMatter.draft !== true ? (
        <PricingPageLayout frontMatter={frontMatter} prev={prev} next={next}>
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
