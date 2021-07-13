import CategoryCarousel from "@/components/CategoryCarousel"
import FormBlock from "@/components/FormBlock"
import Pricing from "@/components/HomepagePricing"
import NewsAndEvents from "@/components/NewsAndEvents"
import ServicesCarousel from "@/components/ServicesCarousel"
import Slideshow from "@/components/Slideshow"
import Testimonials from "@/components/Testimonials"
import TextIconCarousel from "@/components/TextIconCarousel"

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
