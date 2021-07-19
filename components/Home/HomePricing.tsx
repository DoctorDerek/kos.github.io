import "keen-slider/keen-slider.min.css"

import { useKeenSlider } from "keen-slider/react"
import { useEffect, useRef, useState } from "react"

import Image from "@/components/Utils/CustomImage"
import Link from "@/components/Utils/CustomLink"

export default function HomePricing() {
  const [pause, setPause] = useState(false)
  const timer = useRef() as React.MutableRefObject<NodeJS.Timeout>
  const [sliderRef, slider] = useKeenSlider({
    loop: true,
    duration: 1000,
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
    }, 6000)
    return () => {
      clearInterval(timer.current)
    }
  }, [pause, slider])

  return (
    <div className="mb-24 bg-2">
      <div className="grid w-full h-[615px]">
        <Image src="/images/block-bg-2.jpg" alt="Decoration" />
      </div>
      <div className="absolute transform-gpu right-[15%] translate-y-[-615px]">
        <div className="relative w-full text-white min-h-[39rem] before:absolute before:top-0 before:bottom-0 before:z-0 before:text-base befobefore:bg-white before:opacity-0 before:right-[-6rem] before:w-160 px-15 py-24 before:transform before:skew-[-15deg] before:duration-300 before:transition-all hover:before:opacity-20 hover:before:right-[-3rem] font-lato">
          <div className="absolute top-0 bottom-0 right-0 z-0 text-base w-128 pt-17 pr-24 pb-15 pl-32 bg-teal-light transform skew-[-15deg] text-white">
            <div className="inside">
              <h3 className="pb-8 mb-12 text-4xl font-semibold text-white">
                Special Offer
              </h3>

              <div className="price-carousel">
                <div
                  ref={sliderRef as React.RefObject<HTMLDivElement>}
                  className="keen-slider font-lato"
                >
                  <div className="keen-slider__slide number-slide1">
                    <div className="price-item">
                      <div className="p-0 mb-3 text-lg font-bold text-white uppercase font-lato">
                        KOS Wireless Special
                      </div>
                      <div className="pb-8 mb-6 border-solid border-b-1 border-teal-light">
                        <p>250GB, 2 Year Contract, No set up fees.</p>
                        <hr />
                        <p className="mt-2">
                          <span style={{ fontSize: "24pt" }}>
                            <strong>$59.95</strong>
                          </span>{" "}
                          a month
                        </p>
                      </div>
                      <div className="mt-6">
                        <Link
                          href="/order/"
                          className="inline-block px-4 py-2 text-base font-normal leading-normal text-center no-underline whitespace-no-wrap align-middle border rounded select-none btn btn-orange"
                        >
                          Order now
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="keen-slider__slide number-slide2">
                    <div className="price-item">
                      <div className="p-0 mb-3 text-lg font-bold text-white uppercase font-lato">
                        HOME PHONE SERVICES
                      </div>
                      <div className="pb-8 mb-6 border-solid border-b-1 border-teal-light">
                        <p>
                          Add home phone services to your KOS high speed
                          internet account.
                        </p>
                        <hr />
                        <p>Pay only</p>
                        <p>
                          <strong>
                            <span style={{ fontSize: "24pt" }}>$9.95</span>
                          </strong>{" "}
                          a month
                        </p>
                      </div>
                      <div className="mt-6">
                        <Link
                          href="/order/"
                          className="inline-block px-4 py-2 text-base font-normal leading-normal text-center no-underline whitespace-no-wrap align-middle border rounded select-none btn btn-orange"
                        >
                          Order now
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="keen-slider__slide number-slide3">
                    <div className="price-item">
                      <div className="p-0 mb-3 text-lg font-bold text-white uppercase font-lato">
                        High Speed Cable Internet
                      </div>
                      <div className="pb-8 mb-6 border-solid border-b-1 border-teal-light">
                        <p>
                          Add unlimited data to any plan for only $15. No phone
                          needed.
                        </p>
                        <hr />
                        <p>Starting at</p>
                        <p>
                          <span style={{ fontSize: "24pt" }}>
                            <strong>$39.95</strong>
                          </span>{" "}
                          a month
                        </p>
                      </div>
                      <div className="mt-6">
                        <Link
                          href="/order/"
                          className="inline-block px-4 py-2 text-base font-normal leading-normal text-center no-underline whitespace-no-wrap align-middle border rounded select-none btn btn-orange"
                        >
                          Order now
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
