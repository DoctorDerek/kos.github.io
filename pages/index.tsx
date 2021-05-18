/*
import Link from "@/components/Link"
import { PageSeo } from "@/components/SEO"
import Tag from "@/components/Tag"
import siteMetadata from "@/data/siteMetadata.json"
const MAX_DISPLAY = 5
const postDateTemplate = { year: "numeric", month: "long", day: "numeric" }
*/
import Slideshow from "@/components/Slideshow"
import ServicesCarousel from "@/components/ServicesCarousel"
import CategoryCarousel from "@/components/CategoryCarousel"
import Pricing from "@/components/Pricing"
import TextIconCarousel from "@/components/TextIconCarousel"
import FormBlock from "@/components/FormBlock"
import NewsAndEvents from "@/components/NewsAndEvents"
import Testimonials from "@/components/Testimonials"

import { getAllFilesFrontMatter } from "@/lib/mdx"

export async function getStaticProps() {
  /*const posts = (await getAllFilesFrontMatter("blog")) as FrontMatter[]

  return { props: { posts } }*/
}

//export default function Home({ posts }) {
export default function Home() {
  return (
    <>
      <Slideshow />
      <ServicesCarousel />
      <CategoryCarousel />
      <Pricing />
      <TextIconCarousel />
      <FormBlock />
      <NewsAndEvents />
      <Testimonials />
    </>
  )
}
