import React from "react"
import ImageFixed from "next/image"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"

export default function Testimonials() {
  const [pause, setPause] = React.useState(false)
  const timer: React.MutableRefObject<NodeJS.Timeout> = React.useRef() as React.MutableRefObject<NodeJS.Timeout>
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

  React.useEffect(() => {
    sliderRef.current &&
      sliderRef.current.addEventListener("mouseover", () => {
        setPause(true)
      })
    sliderRef.current &&
      sliderRef.current.addEventListener("mouseout", () => {
        setPause(false)
      })
  }, [sliderRef])

  React.useEffect(() => {
    timer.current = setInterval(() => {
      if (!pause && slider) {
        slider.next()
      }
    }, 10000)
    return () => {
      clearInterval(timer.current)
    }
  }, [pause, slider])

  return (
    <div className="">
      <div className="container mx-auto">
        <div className="flex flex-wrap">
          <div className="w-full">
            <div className="testimonials" data-animation="fadeInLeft">
              <h3 className="text-center color decor">
                What our customers are saying
                <div className="block mx-auto">
                  <ImageFixed
                    src="/images/h-decor.png"
                    height="4px"
                    width="64px"
                    alt="ocean"
                  />
                </div>
              </h3>
              <div className="testimonials-carousel">
                <div
                  ref={sliderRef as React.RefObject<HTMLDivElement>}
                  className="keen-slider"
                >
                  <div className="keen-slider__slide number-slide1">
                    <div className="testimonials-item">
                      <div className="testimonials-text">
                        <p>
                          I have been a business customer of KOS for over 10
                          years. I rely on my web site to drive traffic to my
                          business and I depend on KOS to make sure that my site
                          is up and running 24/7. When I do have any technical
                          problems they are only a phone call away. The staff is
                          wonderful to deal with.
                        </p>
                      </div>
                      <div className="testimonials-username">
                        Donna,{" "}
                        <em style={{ fontWeight: 100 }}> Creative Effects</em>
                      </div>
                    </div>
                  </div>
                  <div className="keen-slider__slide number-slide2">
                    <div className="testimonials-item">
                      <div className="testimonials-text">
                        <p>
                          Kingston Online Services is a very forward thinking
                          company and their innovative and up-to-date technology
                          keeps our business running smoothly.&nbsp; We rely on
                          our internet for several applications and any
                          questions or concerns that I have are answered quickly
                          and professionally.&nbsp; &nbsp;Their service people
                          are always very prompt and courteous.&nbsp; We are
                          proud to have KOS as a member of our team and would
                          not hesitate to recommend them to anyone as a high
                          speed internet provider.
                        </p>
                      </div>
                      <div className="testimonials-username">
                        Brenda,{" "}
                        <em style={{ fontWeight: 100 }}>Chalk Well Drilling</em>
                      </div>
                    </div>
                  </div>

                  <div className="keen-slider__slide number-slide3">
                    <div className="testimonials-item">
                      <div className="testimonials-text">
                        <p>
                          Limestone Property Management has been a customer of
                          KOS since 2001.&nbsp; We&rsquo;re very pleased with
                          their fast, friendly and courteous service.&nbsp;
                          We&rsquo;re happy with the services that we have with
                          them, and enjoy partnering with a local company that
                          works hard to support the communities they work
                          in.&nbsp; I would highly recommend that you make KOS
                          your first call if you are looking for internet
                          service options.
                        </p>
                      </div>
                      <div className="testimonials-username">
                        Jason Ruffolo,{" "}
                        <em style={{ fontWeight: 100 }}>
                          Limestone Property Management (President)
                        </em>
                      </div>
                    </div>
                  </div>
                  <div className="keen-slider__slide number-slide4">
                    <div className="testimonials-item">
                      <div className="testimonials-text">
                        <p>
                          We love K.O.S.! We wanted something local, reliable
                          and affordable with no hidden surprises on our bill
                          each month. Kingston Online Services provided all of
                          that and more including fabulous customer service!
                        </p>
                      </div>
                      <div className="testimonials-username">
                        Kim and Jim Long,{" "}
                        <em style={{ fontWeight: 100 }}>Must Love Chocolate</em>
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