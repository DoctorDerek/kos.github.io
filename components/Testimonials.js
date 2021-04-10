import React from "react"
import ImageFixed from "next/image"

export default function Testimonials() {
  return (
    <div className="block-class bottom-md-margin">
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
                    alt
                  />
                </div>
              </h3>
              <div className="testimonials-carousel">
                <div className="testimonials-item">
                  <div className="testimonials-text">
                    <p>
                      I have been a business customer of KOS for over 10 years.
                      I rely on my web site to drive traffic to my business and
                      I depend on KOS to make sure that my site is up and
                      running 24/7. When I do have any technical problems they
                      are only a phone call away. The staff is wonderful to deal
                      with.
                    </p>
                  </div>
                  <div className="testimonials-username">
                    Donna,
                    <em style={{ fontWeight: 100 }}> Creative Effects</em>
                  </div>
                </div>
                <div className="testimonials-item">
                  <div className="testimonials-text">
                    <p>
                      I have been a business customer of KOS for over 10 years.
                      I rely on my web site to drive traffic to my business and
                      I depend on KOS to make sure that my site is up and
                      running 24/7. When I do have any technical problems they
                      are only a phone call away. The staff is wonderful to deal
                      with.
                    </p>
                  </div>
                  <div className="testimonials-username">
                    Donna,
                    <em style={{ fontWeight: 100 }}> Creative Effects</em>
                  </div>
                </div>
                <div className="testimonials-item">
                  <div className="testimonials-text">
                    <p>
                      I have been a business customer of KOS for over 10 years.
                      I rely on my web site to drive traffic to my business and
                      I depend on KOS to make sure that my site is up and
                      running 24/7. When I do have any technical problems they
                      are only a phone call away. The staff is wonderful to deal
                      with.
                    </p>
                  </div>
                  <div className="testimonials-username">
                    Donna,
                    <em style={{ fontWeight: 100 }}> Creative Effects</em>
                  </div>
                </div>
                <div className="testimonials-item">
                  <div className="testimonials-text">
                    <p>
                      I have been a business customer of KOS for over 10 years.
                      I rely on my web site to drive traffic to my business and
                      I depend on KOS to make sure that my site is up and
                      running 24/7. When I do have any technical problems they
                      are only a phone call away. The staff is wonderful to deal
                      with.
                    </p>
                  </div>
                  <div className="testimonials-username">
                    Donna,
                    <em style={{ fontWeight: 100 }}> Creative Effects</em>
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
