import HomeCategoryCarousel from "@/components/Home/HomeCategoryCarousel"
import HomeFormBlock from "@/components/Home/HomeFormBlock"
import HomeNewsAndEvents from "@/components/Home/HomeNewsAndEvents"
import HomePricing from "@/components/Home/HomePricing"
import HomeServicesCarousel from "@/components/Home/HomeServicesCarousel"
import HomeSlideshow from "@/components/Home/HomeSlideshow"
import HomeTestimonials from "@/components/Home/HomeTestimonials"
import HomeTextIconCarousel from "@/components/Home/HomeTextIconCarousel"

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
