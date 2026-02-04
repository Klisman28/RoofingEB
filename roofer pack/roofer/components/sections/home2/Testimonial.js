import TestimonialSlider2 from '@/components/slider/TestimonialSlider2'
export default function Testimonial() {
    return (
        <>
        {/* testimonials-two */}
        <section className="testimonials__two p_relative">
          <div className="testimonials__two__content">
            <div className="auto_container">
              <div className="row">
                <div className="col-lg-6 col-md-12 pe-lg-0">
                  <div className="testimonials__two__left">
                    <div className="tastimonials__title">
                      <div className="test__sub__title">
                        <span>Testimonials</span>
                      </div>
                      <div className="test__title">
                        <h2>What People’s Say</h2>
                      </div>
                    </div>
                    <TestimonialSlider2/>
                  </div>
                </div>
                <div className="col-lg-6 col-md-12 ps-lg-0">
                  <div
                    className="testimonials__right"
                    style={{
                      backgroundImage:
                        "url(assets/images/resource/testimonial-two.png)"
                    }}
                  >
                    <div className="testimonials__right__feature">
                      <img
                        className="d-block d-lg-none"
                        src="assets/images/resource/testimonial-two.png"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* testimonials-two-end */}
      </>
      
    )
}
