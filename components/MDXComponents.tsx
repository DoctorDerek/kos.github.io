import Image from "next/image"
import CustomLink from "@/components/Link"

const MDXComponents = {
  Image,
  a: CustomLink,
  Link: CustomLink,
}

export default MDXComponents
