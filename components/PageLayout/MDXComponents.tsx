import CustomLink from "@/components/Utils/CustomLink"
import DynamicImage from "@/components/Utils/DynamicImage"

const MDXComponents = {
  a: CustomLink,
  Link: CustomLink,
  img: DynamicImage,
  Image: DynamicImage,
  ImageFixed: DynamicImage,
  DynamicImage: DynamicImage,
}

export default MDXComponents
