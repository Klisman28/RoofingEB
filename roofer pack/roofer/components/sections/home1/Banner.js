
'use client'
import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 1,
    spaceBetween: 0,
    autoplay: {
        delay: 7000,
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
                style={{ backgroundImage: "url(assets/images/banner/banner-01.png)" }}
              >
                <div
                  className="banner__left__content"
                  style={{ backgroundImage: "url(assets/images/shape/shape-07.png)" }}
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
                            <h6>20 Years Of Experience</h6>
                          </div>
                          <h1>
                            Best Roofing Service &amp; <span>Consulting</span>
                          </h1>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit
                            Turpis ridiculus tellus.
                          </p>
                          <div className="btn-box">
                            <Link href="/" className="btn-two">
                              Make Appointment
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
                style={{ backgroundImage: "url(assets/images/banner/banner-02.png)" }}
              >
                <div
                  className="banner__left__content"
                  style={{ backgroundImage: "url(assets/images/shape/shape-07.png)" }}
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
                            <h6>20 Years Of Experience</h6>
                          </div>
                          <h1>
                            Best Roofing Service &amp; <span>Consulting</span>
                          </h1>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit
                            Turpis ridiculus tellus.
                          </p>
                          <div className="btn-box">
                            <Link href="/" className="btn-two">
                              Make Appointment
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
                style={{ backgroundImage: "url(assets/images/banner/banner-03.png)" }}
              >
                <div
                  className="banner__left__content"
                  style={{ backgroundImage: "url(assets/images/shape/shape-07.png)" }}
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
                            <h6>20 Years Of Experience</h6>
                          </div>
                          <h1>
                            Best Roofing Service &amp; <span>Consulting</span>
                          </h1>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit
                            Turpis ridiculus tellus.
                          </p>
                          <div className="btn-box">
                            <Link href="/" className="btn-two">
                              Make Appointment
                            </Link>
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
