import fs from "fs"
import matter from "gray-matter"
import path from "path"
import { kebabCase } from "./utils"

const root = process.cwd()

export async function getAllTags(type: string) {
  const files = fs.readdirSync(path.join(root, "data", type))

  let tagCount = {}
  // Iterate through each post, putting all found tags into `tags`
  files.forEach((file) => {
    const source = fs.readFileSync(path.join(root, "data", type, file), "utf8")
    const { data } = matter(source)
    if (data.tags && data.draft !== true) {
      data.tags.forEach((tag: string) => {
        const formattedTag = kebabCase(tag) as string
        if (formattedTag in tagCount) {
          //@ts-expect-error
          tagCount[formattedTag] += 1
        } else {
          //@ts-expect-error
          tagCount[formattedTag] = 1
          /* Element implicitly has an 'any' type because expression of type 'string' can't be used to index type '{}'. */
        }
      })
    }
  })

  return tagCount
}
