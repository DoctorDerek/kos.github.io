import "keen-slider/keen-slider.min.css"

import { useKeenSlider } from "keen-slider/react"
import { useEffect, useRef, useState } from "react"

import DIVIDER from "@/components/Utils/DECOR/DIVIDER"
import FormatQuoteRoundedIcon from "@/data/material-icons/format_quote_black_48dp.svg"

export default function Testimonials() {
  const [pause, setPause] = useState(false)
  const timer: React.MutableRefObject<NodeJS.Timeout> =
    useRef() as React.MutableRefObject<NodeJS.Timeout>
  const [sliderRef, slider] = useKeenSlider({
    loop: true,
    duration: 5000,
    dragStart: () => {
      setPause(true)
    },
    dragEnd: () => {
      setPause(false)
    },
  })

  useEffect(() => {
    sliderRef.current &&
      sliderRef.current.addEventListener("mouseover", () => {
        setPause(true)
      })
    sliderRef.current &&
      sliderRef.current.addEventListener("mouseout", () => {
        setPause(false)
      })
  }, [sliderRef])

  useEffect(() => {
    timer.current = setInterval(() => {
      if (!pause && slider) {
        slider.next()
      }
    }, 10000)
    return () => {
      clearInterval(timer.current)
    }
  }, [pause, slider])

  const testimonialsData = [
    {
      testimonial:
        "I have been a business customer of KOS for over 10 years. I rely on my web site to drive traffic to my business and I depend on KOS to make sure that my site is up and running 24/7. When I do have any technical problems they are only a phone call away. The staff is wonderful to deal with.",
      author: "Donna",
      business: "Creative Effects",
    },
    {
      testimonial:
        "Kingston Online Services is a very forward thinking company and their innovative and up-to-date technology keeps our business running smoothly. We rely on our internet for several applications and any questions or concerns that I have are answered quickly and professionally. Their service people are always very prompt and courteous. We are proud to have KOS as a member of our team and would not hesitate to recommend them to anyone as a high speed internet provider.",
      author: "Brenda",
      business: "Chalk Well Drilling",
    },
    {
      testimonial:
        "Limestone Property Management has been a customer of KOS since 2001. We're very pleased with their fast, friendly and courteous service. We're happy with the services that we have with them, and enjoy partnering with a local company that works hard to support the communities they work in. I would highly recommend that you make KOS your first call if you are looking for internet service options.",
      author: "Jason Ruffolo",
      business: "Limestone Property Management (President)",
    },
    {
      testimonial:
        "We love K.O.S.! We wanted something local, reliable and affordable with no hidden surprises on our bill each month. Kingston Online Services provided all of that and more including fabulous customer service!",
      author: "Kim and Jim Long",
      business: "Must Love Chocolate",
    },
  ]

  const QuoteIcon = () => (
    <div className="grid self-center w-30 h-30 p-1 mx-3 transition-all duration-500 rounded-full fill-current scale-x-[-1] text-blue-brand absolute left-8 top-[-1rem] z-10">
      <FormatQuoteRoundedIcon aria-hidden="true" className="w-full h-full" />
    </div>
  )

  return (
    <div className="flex flex-wrap w-full mb-4">
      <h3 className="p-0 mx-auto mb-8 text-4xl font-semibold text-center md:mb-10 text-blue-brand">
        What our customers are saying
        <DIVIDER />
      </h3>
      <div
        ref={sliderRef as React.RefObject<HTMLDivElement>}
        className="keen-slider font-lato"
      >
        {testimonialsData.map(({ testimonial, author, business }) => (
          <div className="px-6 keen-slider__slide" key={testimonial}>
            <QuoteIcon />
            <div className="pt-8 mx-5 my-3 text-center">
              <div className="relative p-6 font-serif text-lg italic text-gray-600 bg-gray-200 md:text-xl md:p-13 rounded-3xl">
                {testimonial}
              </div>
              <div className="mt-10 mb-3 font-bold text-gray-700 md:text-xl">
                {author}, <span className="italic font-thin">{business}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
