import fs from "fs"
import matter from "gray-matter"
import visit from "unist-util-visit"
import path from "path"
import readingTime from "reading-time"
import renderToString from "next-mdx-remote/render-to-string"

import MDXComponents from "@/components/MDXComponents"
import imgToJsx from "./img-to-jsx"

const root = process.cwd()

const tokenClassNames = {
  tag: "text-code-red",
  "attr-name": "text-code-yellow",
  "attr-value": "text-code-green",
  deleted: "text-code-red",
  inserted: "text-code-green",
  punctuation: "text-code-white",
  keyword: "text-code-purple",
  string: "text-code-green",
  function: "text-code-blue",
  boolean: "text-code-red",
  comment: "text-gray-400 italic",
}

export async function getFiles(type: any) {
  return fs.readdirSync(path.join(root, "data", type))
}

export function formatSlug(slug: any) {
  return slug.replace(/\.(mdx|md)/, "")
}

export function dateSortDesc(a: any, b: any) {
  if (a > b) return -1
  if (a < b) return 1
  return 0
}

export async function getFileBySlug(type: any, slug: any) {
  const mdxPath = path.join(root, "data", type, `${slug}.mdx`)
  const mdPath = path.join(root, "data", type, `${slug}.md`)
  const source = fs.existsSync(mdxPath)
    ? fs.readFileSync(mdxPath, "utf8")
    : fs.readFileSync(mdPath, "utf8")

  const { data, content } = matter(source)
  const mdxSource = await renderToString(content, {
    components: MDXComponents,
    mdxOptions: {
      remarkPlugins: [
        require("remark-slug"),
        require("remark-autolink-headings"),
        require("remark-code-titles"),
        require("remark-math"),
        imgToJsx,
      ],
      // inlineNotes: true,
      rehypePlugins: [
        require("rehype-katex"),
        require("@mapbox/rehype-prism"),
        () => {
          return (tree) => {
            /*tag: string; "attr-name": string; "attr-value": string; deleted: string; inserted: string; punctuation: string; keyword: string; string: string; function: string; boolean: string; comment*/
            visit(tree, "element", (node: any, index, parent) => {
              let [token, type]: [
                string,
                (
                  | "tag"
                  | "attr-name"
                  | "attr-value"
                  | "deleted"
                  | "inserted"
                  | "punctuation"
                  | "keyword"
                  | "string"
                  | "function"
                  | "boolean"
                  | "comment"
                )
              ] = node.properties.className || []
              if (token === "token" && typeof type === "string") {
                node.properties.className = [tokenClassNames[type]]
              }
            })
          }
        },
      ],
    },
  })

  return {
    mdxSource,
    frontMatter: {
      wordCount: content.split(/\s+/gu).length,
      readingTime: readingTime(content),
      slug: slug || null,
      fileName: fs.existsSync(mdxPath) ? `${slug}.mdx` : `${slug}.md`,
      ...data,
    },
  }
}

export async function getAllFilesFrontMatter(
  type: any
): Promise<FrontMatter[]> {
  const files = fs.readdirSync(path.join(root, "data", type))

  const allFrontMatter = []

  files.forEach((file) => {
    const source = fs.readFileSync(path.join(root, "data", type, file), "utf8")
    const { data } = matter(source)
    if (data.draft !== true) {
      allFrontMatter.push({ ...data, slug: formatSlug(file) })
    }
  })

  //@ts-expect-error
  return getAllFilesFrontMatter
  // Type '(type: any) => Promise<FrontMatter>' is missing the following properties from type 'FrontMatter': slug, date, title, summary, and 5 more.
}
