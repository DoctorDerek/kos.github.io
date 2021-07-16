import HomeCategoryCarousel from "@/components/Home/HomeCategoryCarousel"
import HomeFormBlock from "@/components/HomeFormBlock"
import HomePricing from "@/components/HomePricing"
import HomeServicesCarousel from "@/components/HomeServicesCarousel"
import HomeSlideshow from "@/components/HomeSlideshow"
import HomeTestimonials from "@/components/HomeTestimonials"
import HomeTextIconCarousel from "@/components/HomeTextIconCarousel"
import HomeNewsAndEvents from "@/components/NewsAndEvents"

export default function HomePageOrder() {
  return (
    <>
      <HomeSlideshow />
      <HomeServicesCarousel />
      <HomeCategoryCarousel />
      <HomePricing />
      <HomeTextIconCarousel />
      <HomeFormBlock />
      <HomeNewsAndEvents />
      <HomeTestimonials />
    </>
  )
}
