const visit = require("unist-util-visit")
const sizeOf = require("image-size")
const fs = require("fs")

const imgToJSX = (options: any) => (tree: any) => {
  visit(
    tree,
    // only visit p tags that contain an img element
    (node: any) =>
      node.type === "paragraph" &&
      node.children.some((n: any) => n.type === "image"),
    (node: any) => {
      const imageNode = node.children.find((n: any) => n.type === "image")

      // only local files
      if (fs.existsSync(`${process.cwd()}/public${imageNode.url}`)) {
        const dimensions = sizeOf(`${process.cwd()}/public${imageNode.url}`)

        // Convert original node to next/image
        imageNode.type = "jsx"
        imageNode.value = `<Image
          alt={\`${imageNode.alt}\`}
          src={\`${imageNode.url}\`}
          width={${dimensions.width}}
          height={${dimensions.height}}
      />`

        // Change node type from p to div to avoid nesting error
        node.type = "div"
        node.children = [imageNode]
      }
    }
  )
}

export default imgToJSX
