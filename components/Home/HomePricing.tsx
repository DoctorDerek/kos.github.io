import "keen-slider/keen-slider.min.css"

import { useKeenSlider } from "keen-slider/react"
import { useEffect, useRef, useState } from "react"

import Image from "@/components/CustomImage"
import Link from "@/components/CustomLink"

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
    <div className="block-class bg-2">
      <div className="grid w-full h-[615px]">
        <Image src="/images/block-bg-2.jpg" alt="Decoration" />
      </div>
      <div className="absolute transform-gpu right-[15%] translate-y-[-615px]">
        <div className="pricing">
          <div className="pricing-box">
            <div className="inside">
              <h3>Special Offer</h3>

              <div className="price-carousel">
                <div
                  ref={sliderRef as React.RefObject<HTMLDivElement>}
                  className="keen-slider"
                >
                  <div className="keen-slider__slide number-slide1">
                    <div className="price-item">
                      <h5 className="price-title">KOS Wireless Special</h5>
                      <div className="price-text">
                        <p>250GB, 2 Year Contract, No set up fees.</p>
                        <hr />
                        <p className="mt-2">
                          <span style={{ fontSize: "24pt" }}>
                            <strong>$59.95</strong>
                          </span>{" "}
                          a month
                        </p>
                      </div>
                      <div className="price-action">
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
                      <h6 className="price-title">HOME PHONE SERVICES</h6>
                      <div className="price-text">
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
                      <div className="price-action">
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
                      <h6 className="price-title">High Speed Cable Internet</h6>
                      <div className="price-text">
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
                      <div className="price-action">
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
