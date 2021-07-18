import { MDXRemote } from "next-mdx-remote"
import { getStaticProps as newsEventsGetStaticProps } from "pages/news/events"

import MDXComponents from "@/components/PageLayout/MDXComponents"
import HomePageLayout from "@/layouts/HomePageLayout"

export async function getStaticProps({ params }: { params: { slug: string } }) {
  const {
    props: { posts, indexPost },
  } = await newsEventsGetStaticProps({ params })
  const newsAndEventsPosts = posts.slice(0, 3) // 3 most recent posts
  const newsAndEventsIndexPost = indexPost
  return { props: { newsAndEventsPosts, newsAndEventsIndexPost } }
}

export default function HomePage({
  newsAndEventsIndexPost,
  newsAndEventsPosts,
}: {
  newsAndEventsIndexPost: Post
  newsAndEventsPosts: Post[]
}) {
  const newsAndEventsIndexMdxSource = newsAndEventsIndexPost.mdxSource
  const newsAndEventsIndexFrontMatter = newsAndEventsIndexPost.frontMatter
  // generate the {children} props for the /news/events/index.md layout:
  newsAndEventsIndexFrontMatter.children = (
    <MDXRemote
      {...newsAndEventsIndexMdxSource}
      components={{ components: MDXComponents }}
    />
  )

  const newsAndEventsPostsFrontMatter = newsAndEventsPosts.map(
    ({ mdxSource, frontMatter }: Post) => {
      // generate the {children} props for the each newsAndEventPost's layout:
      frontMatter.children = (
        <MDXRemote {...mdxSource} components={{ components: MDXComponents }} />
      )
      return frontMatter
    }
  )

  return (
    <HomePageLayout
      newsAndEventsIndexFrontMatter={newsAndEventsIndexFrontMatter}
      newsAndEventsPostsFrontMatter={newsAndEventsPostsFrontMatter}
    />
  )
}
