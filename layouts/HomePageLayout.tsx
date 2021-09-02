import HomeCategoryCarousel from "@/components/Home/HomeCategoryCarousel"
import HomeFormBlock from "@/components/Home/HomeFormBlock"
import HomeNewsAndEvents from "@/components/Home/HomeNewsAndEvents"
import HomePricing from "@/components/Home/HomePricing"
import HomeServicesCarousel from "@/components/Home/HomeServicesCarousel"
import HomeSlideshow from "@/components/Home/HomeSlideshow"
import HomeTestimonials from "@/components/Home/HomeTestimonials"
import HomeTextIconCarousel from "@/components/Home/HomeTextIconCarousel"
import SectionWrapper from "@/components/Utils/SectionWrapper"

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
      <SectionWrapper useMaxWidth={true}>
        <HomeServicesCarousel />
        <HomeCategoryCarousel />
      </SectionWrapper>
      <SectionWrapper>
        <HomePricing />
      </SectionWrapper>
      <SectionWrapper useMaxWidth={true}>
        <HomeTextIconCarousel />
      </SectionWrapper>
      <SectionWrapper>
        <HomeFormBlock />
      </SectionWrapper>
      <SectionWrapper useMaxWidth={true}>
        <HomeNewsAndEvents
          newsAndEventsIndexFrontMatter={newsAndEventsIndexFrontMatter}
          newsAndEventsPostsFrontMatter={newsAndEventsPostsFrontMatter}
        />
        <HomeTestimonials />
      </SectionWrapper>
    </>
  )
}
