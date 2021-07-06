import CategoryCarousel from "@/components/CategoryCarousel"
import FormBlock from "@/components/FormBlock"
import Pricing from "@/components/HomepagePricing"
import NewsAndEvents from "@/components/NewsAndEvents"
import ServicesCarousel from "@/components/ServicesCarousel"
/*
import Link from "@/components/Link"
import { PageSeo } from "@/components/SEO"
import Tag from "@/components/Tag"
import siteMetadata from "@/data/siteMetadata.json"
const MAX_DISPLAY = 5
const postDateTemplate = { year: "numeric", month: "long", day: "numeric" }
*/
import Slideshow from "@/components/Slideshow"
import Testimonials from "@/components/Testimonials"
import TextIconCarousel from "@/components/TextIconCarousel"

/*
//import { getAllFilesFrontMatter } from "@/lib/mdx"
export async function getStaticProps() {
  //const posts = (await getAllFilesFrontMatter("blog")) as FrontMatter[]
  return { props: { posts: [] } }
}}*/

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
