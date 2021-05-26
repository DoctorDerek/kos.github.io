import fs from "fs"
import hydrate from "next-mdx-remote/hydrate"
import {
  getFiles,
  getFileBySlug,
  getAllPagesFrontMatter,
  formatSlug,
} from "@/lib/mdx"
import PageLayout from "@/layouts/PageLayout"
import MDXComponents from "@/components/MDXComponents"
import PageTitle from "@/components/PageTitle"
import generateRss from "@/lib/generate-rss"

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
  const allPosts = await getAllPagesFrontMatter(PATH)
  const postIndex =
    allPosts.findIndex &&
    allPosts.findIndex((page: PageFrontMatter) => page.slug === params.slug)
  const prev = allPosts[postIndex + 1] || null
  const next = allPosts[postIndex - 1] || null
  const post = await getFileBySlug(PATH, params.slug)

  // rss
  const rss = generateRss(allPosts)
  fs.writeFileSync("./public/index.xml", rss)

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
  const content = hydrate(mdxSource, {
    components: MDXComponents,
  })

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
