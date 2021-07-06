import fs from "fs"
import matter from "gray-matter"
import { serialize } from "next-mdx-remote/serialize"
import path from "path"
import visit from "unist-util-visit"

import MDXComponents from "@/components/MDXComponents"
import imgToJsx from "@/lib/img-to-jsx"
import getAllFilesRecursively from "@/lib/utils/files"

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

export function getFiles(type: string) {
  const prefixPaths = path.join(root, "data", type)
  const files = getAllFilesRecursively(prefixPaths)
  // Only want to return blog/path and ignore root, replace is needed to work on Windows
  return files.map((file: any) =>
    file.slice(prefixPaths.length + 1).replace(/\\/g, "/")
  )
}

export function formatSlug(slug: string) {
  return slug.replace(/\.(mdx|md)/, "")
}

export function dateSortDesc(a: Date, b: Date) {
  if (a > b) return -1
  if (a < b) return 1
  return 0
}

export async function getFileBySlug(slug: string | string[]) {
  slug = Array.isArray(slug) ? slug.join("/") : slug
  // the slug "hosting/campgrounds.md" is the entire path in the /data folder
  const mdxPath = path.join(root, "data", `${slug}.mdx`)
  const mdPath = path.join(root, "data", `${slug}.md`)
  const source = fs.existsSync(mdxPath)
    ? fs.readFileSync(mdxPath, "utf8")
    : fs.readFileSync(mdPath, "utf8")

  const { data, content } = matter(source)
  const mdxSource = await serialize(content, {
    components: MDXComponents,
    mdxOptions: {
      remarkPlugins: [
        require("remark-slug"),
        require("remark-autolink-headings"),
        require("remark-code-titles"),
        require("remark-math"),
        imgToJsx,
      ],
      // @ts-expect-error
      inlineNotes: true,
      rehypePlugins: [
        require("rehype-katex"),
        require("@mapbox/rehype-prism"),
        () => {
          return (tree) => {
            visit(tree, "element", (node, index, parent) => {
              // @ts-expect-error
              let [token, type] = node.properties.className || []
              if (token === "token") {
                // @ts-expect-error
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
      slug: slug || null,
      fileName: fs.existsSync(mdxPath) ? `${slug}.mdx` : `${slug}.md`,
      ...data,
    },
  }
}
