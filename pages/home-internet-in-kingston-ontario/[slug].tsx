import { MDXRemote } from "next-mdx-remote"
import { getFiles, getFileBySlug, formatSlug } from "@/lib/mdx"
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
  const post = await getFileBySlug(PATH, params.slug)

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
