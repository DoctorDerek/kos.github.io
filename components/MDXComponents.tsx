import CustomLink from "@/components/CustomLink"
import DynamicImage from "@/components/DynamicImage"

const MDXComponents = {
  a: CustomLink,
  Link: CustomLink,
  img: DynamicImage,
  Image: DynamicImage,
  ImageFixed: DynamicImage,
}

export default MDXComponents
