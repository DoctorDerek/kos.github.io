import { MDXRemote } from "next-mdx-remote"
import {
  getFiles,
  getFileBySlug,
  getAllPagesFrontMatter,
  formatSlug,
} from "@/lib/mdx"
import PageLayout from "@/layouts/PageLayout"
import MDXComponents from "@/components/MDXComponents"
import PageTitle from "@/components/PageTitle"

const PATH = "home-internet-in-kingston-ontario"

export async function getStaticPaths() {
  const posts = await getFiles(PATH)

  return {
    paths: posts.map((p) => ({
      params: {
        slug: formatSlug(p),
      },
    })),
    fallback: false,
  }
}

export async function getStaticProps({ params }: { params: any }) {
  const allPages = await getAllPagesFrontMatter(PATH)
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
        <PageLayout frontMatter={frontMatter} prev={prev} next={next}>
          {content}
        </PageLayout>
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
