
'use client'
import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
  slidesPerView: 1,
  spaceBetween: 0,
  autoplay: {
    delay: 8000,
    disableOnInteraction: false,
  },
  loop: true,

  // Navigation
  navigation: {
    nextEl: '.h1n',
    prevEl: '.h1p',
  },

  // Pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },



}

export default function Banner() {
  return (

    <>
      {/* banner-one */}
      <section className="banner style__one">
        <Swiper {...swiperOptions} className="banner-carousel">
          <SwiperSlide className="slide-item">
            <div
              className="slide__item__content"
              style={{ backgroundImage: "url(assets/images/banner/banner-6.jpg)" }}
            >
              <div
                className="banner__left__content"
                style={{ backgroundImage: "url(assets/images/shape/shape-16.png)" }}
              >
                <div className="auto_container">
                  <div className="anim-icon">
                    <div
                      className="icon icons-1 "
                      data-parallax='{"x": 100}'
                      style={{
                        backgroundImage: "url(assets/images/shape/shape-16.png)"
                      }}
                    />
                  </div>
                  <div className="content-inner">
                    <div className="col-xl-6">
                      <div className="content__box">
                        <div className="sub__title">
                          <h6>Over 15 years of experience </h6>
                        </div>
                        <h1>
                          ROOFING CONTRACTOR IN <span>SOUTHEASTERN MA & RHODE ISLAND </span>
                        </h1>
                        <p>
                          At <strong>E&amp;B ROOFING LLC</strong>, we provide professional roof replacement and roof repair for homes and businesses in Pawtucket, Cranston, East Providence, Attleboro and surrounding areas.
                        </p>

                        <div className="btn-box">
                          <Link href="/" className="btn-two">
                            GET A FREE ESTIMATE
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="slide-item">
            <div
              className="slide__item__content"
              style={{ backgroundImage: "url(assets/images/banner/banner-1.jpg)" }}
            >
              <div
                className="banner__left__content"
                style={{ backgroundImage: "url(assets/images/shape/shape-39.png)" }}
              >
                <div className="auto_container">
                  <div className="anim-icon">
                    <div
                      className="icon icons-1 "
                      data-parallax='{"x": 100}'
                      style={{
                        backgroundImage: "url(assets/images/shape/shape-08.png)"
                      }}
                    />
                  </div>
                  <div className="content-inner">
                    <div className="col-xl-6">
                      <div className="content__box">
                        <div className="sub__title">
                          <h6>Over 15 years of experience</h6>
                        </div>
                        <h1>
                          Siding Windows &amp; <span>Gutters that protect your home</span>
                        </h1>
                        <p>
                          Upgrade your home’s curb appeal and energy efficiency with expert installation of vinyl siding, replacement windows, seamless gutters, skylights and exterior painting.
                          Our certified team delivers clean, on-time work and strong manufacturer warranties.
                        </p>
                        <div className="btn-box">
                          <Link href="/" className="btn-two">
                            GET A FREE ESTIMATE
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="slide-item">
            <div
              className="slide__item__content"
              style={{ backgroundImage: "url(assets/images/banner/banner-2.jpg)" }}
            >
              <div
                className="banner__left__content"
                style={{ backgroundImage: "url(assets/images/shape/shape-07.png)" }}
              >
                <div className="auto_container">
                  <div className="anim-icon">
                    <div
                      className="icon icons-1 "
                      data-parallax='{"x": 200}'
                      style={{
                        backgroundImage: "url(assets/images/shape/shape-39.png)"
                      }}
                    />
                  </div>
                  <div className="content-inner">
                    <div className="col-xl-6">
                      <div className="content__box">
                        <div className="sub__title">
                          <h6>STORM DAMAGE & EMERGENCY LEAKS</h6>
                        </div>
                        <h1>
                          24/7 EMERGENCY ROOF REPAIR
                          &amp; <span>TARPING SERVICE</span>
                        </h1>
                        <p>
                          Fast response for roof leaks, wind and hail damage across Southeastern Massachusetts and Rhode Island. We document the damage and coordinate with your insurance company so you can protect your property quickly.
                        </p>
                        <div className="btn-box">
                          <Link href="tel:+774-300-1932" className="btn-two">
                            REQUEST EMERGENCY HELP
                            o
                            CALL NOW                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>
      {/* banner-one */}
    </>
  )
}
