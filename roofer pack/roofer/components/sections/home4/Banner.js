
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
        <section className="banner style__four">
            <Swiper {...swiperOptions} className="banner-carousel">
            <SwiperSlide className="slide-item">
            <div
                className="slide__item__content"
                style={{ backgroundImage: "url(assets/images/banner/banner-10.png)" }}
                >
                <div className="auto_container">
                    <div className="content-inner">
                    <div className="content__box">
                        <div className="sub__title">
                        <h6>20 Years Of Experience</h6>
                        </div>
                        <h1>
                        Best Roofing Service <br /> &amp; Consulting
                        </h1>
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit <br /> Turpis
                        ridiculus tellus.
                        </p>
                        <div className="btn-box">
                        <Link className="btn-one" href="/service-details">
                            <em>
                            <i />
                            <i />
                            <i />
                            <i />
                            <i />
                            <i />
                            <i />
                            </em>
                            <span>Take Our Service</span>
                        </Link>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            </SwiperSlide>
            <SwiperSlide className="slide-item">
                <div
                    className="slide__item__content"
                    style={{ backgroundImage: "url(assets/images/banner/banner-11.png)" }}
                    >
                    <div className="auto_container">
                        <div className="content-inner">
                        <div className="content__box">
                            <div className="sub__title">
                            <h6>20 Years Of Experience</h6>
                            </div>
                            <h1>
                            Best Roofing Service <br /> &amp; Consulting
                            </h1>
                            <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit <br /> Turpis
                            ridiculus tellus.
                            </p>
                            <div className="btn-box">
                            <Link className="btn-one" href="/service-details">
                                <em>
                                <i />
                                <i />
                                <i />
                                <i />
                                <i />
                                <i />
                                <i />
                                </em>
                                <span>Take Our Service</span>
                            </Link>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide className="slide-item">
                <div
                    className="slide__item__content"
                    style={{ backgroundImage: "url(assets/images/banner/banner-12.png)" }}
                    >
                    <div className="auto_container">
                        <div className="content-inner">
                        <div className="content__box">
                            <div className="sub__title">
                            <h6>20 Years Of Experience</h6>
                            </div>
                            <h1>
                            Best Roofing Service <br /> &amp; Consulting
                            </h1>
                            <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit <br /> Turpis
                            ridiculus tellus.
                            </p>
                            <div className="btn-box">
                            <Link className="btn-one" href="/service-details">
                                <em>
                                <i />
                                <i />
                                <i />
                                <i />
                                <i />
                                <i />
                                <i />
                                </em>
                                <span>Take Our Service</span>
                            </Link>
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
