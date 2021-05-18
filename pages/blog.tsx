import siteMetadata from "@/data/siteMetadata.json"
import ListLayout from "@/layouts/ListLayout"
import { PageSeo } from "@/components/SEO"

//import { getAllFilesFrontMatter } from "@/lib/mdx"
export async function getStaticProps() {
  /*const posts = (await getAllFilesFrontMatter("blog")) as FrontMatter[]

  return { props: { posts } }*/
  return { props: [] }
}

export default function Blog({ posts }: { posts: FrontMatter[] }) {
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
