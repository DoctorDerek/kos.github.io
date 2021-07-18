import { MDXRemote } from "next-mdx-remote"

import MDXComponents from "@/components/PageLayout/MDXComponents"
import NewsEventsLayout from "@/layouts/NewsEventsLayout"
import getFilesRecursively from "@/lib/files"
import { getFileBySlug } from "@/lib/mdx"

export async function getStaticProps({ params }: { params: { slug: string } }) {
  // search recursively in @/data/news/events/**
  const newsEventsRegExpMarkdown = /data\\news\\events\\(.+)?\.md/
  const slugs: string[] = getFilesRecursively("data")
    .map((path: string) => newsEventsRegExpMarkdown.exec(path))
    .filter((matchItem: RegExpExecArray | null) => Boolean(matchItem))
    // remove falsy
    .map(
      (matchItem: RegExpExecArray | null) => (matchItem as RegExpExecArray)[1]
    ) // extract the filename
    .filter((slug: string) => !slug.includes("index")) // remove index.md
    .reverse()

  const posts = await Promise.all(
    slugs.map(async (slug) => await getFileBySlug(["news", "events", slug]))
  )

  const indexPost = await getFileBySlug(["news", "events", "index"])

  return { props: { posts, indexPost } }
}

export default function NewsEvents({
  indexPost,
  posts,
}: {
  indexPost: Post
  posts: Post[]
}) {
  const { mdxSource, frontMatter } = indexPost
  const indexFrontMatter = frontMatter
  // generate the {children} props for the index layout:
  indexFrontMatter.children = (
    <MDXRemote {...mdxSource} components={{ components: MDXComponents }} />
  )

  const postsFrontMatter = posts.map(({ mdxSource, frontMatter }: Post) => {
    // generate the {children} props for the each post's layout:
    frontMatter.children = (
      <MDXRemote {...mdxSource} components={{ components: MDXComponents }} />
    )
    return frontMatter
  })

  return (
    <NewsEventsLayout
      indexFrontMatter={indexFrontMatter}
      postsFrontMatter={postsFrontMatter}
    />
  )
}
