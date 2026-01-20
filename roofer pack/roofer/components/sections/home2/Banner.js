
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
            <section className="banner style__two">
            <Swiper {...swiperOptions} className="banner-carousel"> 
                <SwiperSlide className="slide-item">
                <div
                    className="slide__item__content"
                    style={{ backgroundImage: "url(assets/images/banner/banner-04.png)" }}
                >
                    <div className="auto_container">
                    <div className="content-inner">
                        <div className="content__box">
                        <div className="sub__title">
                            <h6>20 Years Of Experience</h6>
                        </div>
                        <h1>
                            Best <span> Roofing </span> Service <br /> &amp;{" "}
                            <span>Consulting</span>
                        </h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit <br />{" "}
                            Turpis ridiculus tellus.
                        </p>
                        <div className="btn-box">
                            <Link className="btn-one" href="/">
                            <em>
                                <i />
                                <i />
                                <i />
                                <i />
                                <i />
                                <i />
                                <i />
                            </em>
                            <span>Make Appointment</span>
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
                    style={{ backgroundImage: "url(assets/images/banner/banner-05.png)" }}
                >
                    <div className="auto_container">
                    <div className="content-inner">
                        <div className="content__box">
                        <div className="sub__title">
                            <h6>20 Years Of Experience</h6>
                        </div>
                        <h1>
                            Best <span> Roofing </span> Service <br /> &amp;{" "}
                            <span>Consulting</span>
                        </h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit <br />{" "}
                            Turpis ridiculus tellus.
                        </p>
                        <div className="btn-box">
                            <Link className="btn-one" href="/">
                            <em>
                                <i />
                                <i />
                                <i />
                                <i />
                                <i />
                                <i />
                                <i />
                            </em>
                            <span>Make Appointment</span>
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
                    style={{ backgroundImage: "url(assets/images/banner/banner-06.png)" }}
                >
                    <div className="auto_container">
                    <div className="content-inner">
                        <div className="content__box">
                        <div className="sub__title">
                            <h6>20 Years Of Experience</h6>
                        </div>
                        <h1>
                            Best <span> Roofing </span> Service <br /> &amp;{" "}
                            <span>Consulting</span>
                        </h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit <br />{" "}
                            Turpis ridiculus tellus.
                        </p>
                        <div className="btn-box">
                            <Link className="btn-one" href="/">
                            <em>
                                <i />
                                <i />
                                <i />
                                <i />
                                <i />
                                <i />
                                <i />
                            </em>
                            <span>Make Appointment</span>
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
