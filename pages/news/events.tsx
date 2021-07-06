import getFilesRecursively from "@/lib/utils/files"
import { getFileBySlug } from "@/lib/mdx"
import NewsEventsLayout from "@/layouts/NewsEventsLayout"

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
  posts,
  indexPost,
}: {
  posts: Post[]
  indexPost: Post
}) {
  return <NewsEventsLayout posts={posts} indexPost={indexPost} />
}
