import { getAllFilesFrontMatter } from "@/lib/mdx"
import siteMetadata from "@/data/siteMetadata.json"
import ListLayout from "@/layouts/ListLayout"
import { PageSeo } from "@/components/SEO"

export async function getStaticProps() {
  const posts = (await getAllFilesFrontMatter("blog")) as FrontMatter[]

  return { props: { posts } }
}

export default function Blog({ posts }: { posts: any }) {
  return (
    <>
      <PageSeo
        title={`Blog - ${siteMetadata.author}`}
        description={siteMetadata.description}
        url={`${siteMetadata.siteUrl}/blog`}
      />
      <ListLayout posts={posts} title="All Posts" />
    </>
  )
}
