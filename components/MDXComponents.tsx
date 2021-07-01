import ImageFixed from "next/image"
import Image from "@/components/CustomImage"
import CustomLink from "@/components/CustomLink"

const MDXComponents = {
  Image,
  a: CustomLink,
  Link: CustomLink,
  img: ImageFixed,
  ImageFixed: ImageFixed,
}

export default MDXComponents
