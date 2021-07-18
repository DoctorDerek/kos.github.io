import HomeCategoryCarousel from "@/components/Home/HomeCategoryCarousel"
import HomeFormBlock from "@/components/Home/HomeFormBlock"
import HomeNewsAndEvents from "@/components/Home/HomeNewsAndEvents"
import HomePricing from "@/components/Home/HomePricing"
import HomeServicesCarousel from "@/components/Home/HomeServicesCarousel"
import HomeSlideshow from "@/components/Home/HomeSlideshow"
import HomeTestimonials from "@/components/Home/HomeTestimonials"
import HomeTextIconCarousel from "@/components/Home/HomeTextIconCarousel"

export default function HomePageLayout({
  newsAndEventsIndexFrontMatter,
  newsAndEventsPostsFrontMatter,
}: {
  newsAndEventsIndexFrontMatter: PageFrontMatter
  newsAndEventsPostsFrontMatter: PageFrontMatter[]
}) {
  return (
    <>
      <HomeSlideshow />
      <div className="mx-auto max-w-7xl">
        <HomeServicesCarousel />
        <HomeCategoryCarousel />
      </div>
      <HomePricing />
      <div className="mx-auto max-w-7xl">
        <HomeTextIconCarousel />
      </div>
      <HomeFormBlock />
      <div className="mx-auto max-w-7xl">
        <HomeNewsAndEvents
          newsAndEventsIndexFrontMatter={newsAndEventsIndexFrontMatter}
          newsAndEventsPostsFrontMatter={newsAndEventsPostsFrontMatter}
        />
        <HomeTestimonials />
      </div>
    </>
  )
}
