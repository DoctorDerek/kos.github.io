import getFilesRecursively from "@/lib/utils/files"
import { getFileBySlug } from "@/lib/mdx"
import NewsEventsLayout from "@/layouts/NewsEventsLayout"

export async function getStaticProps({ params }: { params: { slug: string } }) {
  // search recursively in @/data/news/events/**
  const newsEventsRegExpMarkdown = /data\\news\\events\\(.+)?\.md/
  const slugs: string[] = getFilesRecursively("data")
    .map((path: string) => newsEventsRegExpMarkdown.exec(path))
    .filter((matchItem: any[]) => Boolean(matchItem)) // remove falsy
    .map((matchItem: any[]) => matchItem[1])
    .filter((slug: string) => !slug.includes("index")) // remove index.md

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
