import TestimonialSlider1 from '@/components/slider/TestimonialSlider1'

export default function Testimonial() {
  return (
    <>
      {/* testimonials-section */}
      <section className="testimonials__section p_relative">
        <div className="anim-icon">
          <div className="parallax-scene parallax-scene-3 ">
            <div
              data-depth="0.30"
              className="icon layer-bg"
              style={{ backgroundImage: "url(assets/images/icons/icon-01.svg)" }}
            />
          </div>
          <div
            className="icon icon-03 wow zoomIn animated"
            data-wow-delay="100ms"
            data-wow-duration="1500ms"
            style={{ backgroundImage: "url(assets/images/shape/shape-20.png)" }}
          />
        </div>
        <div className="auto_container">
          <div className="testimonials__content p_relative">
            <div className="row">
              <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                <div className="testimonials__content__one">
                  <div className="title">
                    <div className="sub__title">
                      <h6>Review Google</h6>
                    </div>
                    <div className="main__title">
                      <h2>
                        What Our Customers <br /> Are Saying
                      </h2>
                    </div>
                  </div>
                  <div className="testimonials__text">
                    <p>
                      We take pride in our work and our customers' satisfaction is our top priority.
                      Check out some of our latest 5-star Google Reviews.
                    </p>
                  </div>
                  <div className="slider_dots">
                    <div className="slider_control">
                      <div className="slider__pagination" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-5 col-lg-6 col-md-6 col-sm-12">
                <div className="testimonials__middle">
                  <div
                    className="image__layer"
                    style={{
                      backgroundImage: "url(assets/images/shape/shape-21.png)"
                    }}
                  />
                  <TestimonialSlider1 />
                </div>
              </div>
            </div>
            <div
              className="test__right__image wow slideInUp animated"
              data-wow-delay="100ms"
              data-wow-duration="1500ms"
            >
              <figure className="image">
              </figure>
            </div>
          </div>
        </div>
      </section>
      {/* testimonials-section-end */}
    </>
  )
}
