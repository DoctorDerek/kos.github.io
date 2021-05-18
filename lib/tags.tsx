import fs from "fs"
import matter from "gray-matter"
import path from "path"
import { kebabCase } from "./utils"

const root = process.cwd()

export async function getAllTags(type: string) {
  const files = fs.readdirSync(path.join(root, "data", type))

  let tagCount = new Map()
  // Iterate through each post, putting all found tags into `tags`
  files.forEach((file) => {
    const source = fs.readFileSync(path.join(root, "data", type, file), "utf8")
    const { data } = matter(source)
    if (data.tags && data.draft !== true) {
      data.tags.forEach((tag: string) => {
        const formattedTag = kebabCase(tag) as string
        if (formattedTag in tagCount) {
          tagCount.set(formattedTag, tagCount.get(formattedTag) + 1)
        } else {
          tagCount.set(formattedTag, 1)
        }
      })
    }
  })

  return tagCount
}
