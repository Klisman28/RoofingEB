
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
            <section className="banner style__three">
                <Swiper {...swiperOptions} className="banner-carousel">
                <SwiperSlide className="slide-item">
                <div
                    className="slide__item__content"
                    style={{ backgroundImage: "url(assets/images/banner/banner-07.png)" }}
                >
                    <div className="auto_container">
                    <div className="content-inner">
                        <div className="content__box text-center">
                        <div className="sub__title">
                            <h6>20 Years Of Experience</h6>
                        </div>
                        <h1>
                            Best Roofing Service <br /> &amp; Consulting
                        </h1>
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
                    style={{ backgroundImage: "url(assets/images/banner/banner-08.png)" }}
                >
                    <div className="auto_container">
                    <div className="content-inner">
                        <div className="content__box text-center">
                        <div className="sub__title">
                            <h6>20 Years Of Experience</h6>
                        </div>
                        <h1>
                            Best Roofing Service <br /> &amp; Consulting
                        </h1>
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
                    style={{ backgroundImage: "url(assets/images/banner/banner-09.png)" }}
                >
                    <div className="auto_container">
                    <div className="content-inner">
                        <div className="content__box text-center">
                        <div className="sub__title">
                            <h6>20 Years Of Experience</h6>
                        </div>
                        <h1>
                            Best Roofing Service <br /> &amp; Consulting
                        </h1>
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
