/*
import Link from "@/components/Link"
import { PageSeo } from "@/components/SEO"
import Tag from "@/components/Tag"
import siteMetadata from "@/data/siteMetadata.json"
const MAX_DISPLAY = 5
const postDateTemplate = { year: "numeric", month: "long", day: "numeric" }
*/
import { getAllFilesFrontMatter } from "@/lib/mdx"

import Slideshow from "@/components/Slideshow"
import ServicesCarousel from "@/components/ServicesCarousel"
import CategoryCarousel from "@/components/CategoryCarousel"
import Pricing from "@/components/Pricing"
import TextIconCarousel from "@/components/TextIconCarousel"
import FormBlock from "@/components/FormBlock"
import NewsAndEvents from "@/components/NewsAndEvents"
import Testimonials from "@/components/Testimonials"

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter("blog")

  return { props: { posts } }
}

/*
import { useEffect } from "react"

const useScript = (url) => {
  useEffect(() => {
    const script = document.createElement("script")

    script.src = url
    script.async = true

    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [url])
}
*/

//export default function Home({ posts }) {
export default function Home() {
  /*
  useScript("js/jquery.js")
  useScript("js/plugins/bootstrap.min.js")
  useScript("js/plugins/jquery.nivo.slider.js")
  useScript("js/plugins/slick.min.js")
  useScript("js/plugins/jquery.magnific-popup.min.js")
  useScript("js/plugins/jquery.waypoints.min.js")
  useScript("js/plugins/jquery.countTo.js")
  useScript("js/plugins/jquery.form.js")
  useScript("js/plugins/jquery.validate.min.js")
  useScript("js/custom.js")
  useScript("js/accessibilitymenu.js")
  */

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
