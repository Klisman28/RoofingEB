'use client'
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 2,
    spaceBetween: 30,
    autoplay: {
        delay: 2500,
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

    breakpoints: {
        320: {
            slidesPerView: 1,
            // spaceBetween: 30,
        },
        575: {
            slidesPerView: 1,
            // spaceBetween: 30,
        },
        767: {
            slidesPerView: 1,
            // spaceBetween: 30,
        },
        991: {
            slidesPerView: 1,
            // spaceBetween: 30,
        },
        1199: {
            slidesPerView: 1,
            // spaceBetween: 30,
        },
        1350: {
            slidesPerView: 2,
            // spaceBetween: 30,
        },
    }
}
export default function TestimonialSlider6() {
    return (
        <>
            <Swiper {...swiperOptions} className="theme_carousel owl-theme">
                <SwiperSlide className="slide">
                    <div className="project__block__one">
                        <div className="inner__box">
                        <div className="image__box">
                            <figure className="image">
                            <img src="assets/images/resource/rooftox-01.png" alt="" />
                            </figure>
                        </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="slide">
                    <div className="project__block__one">
                        <div className="inner__box">
                        <div className="image__box">
                            <figure className="image">
                            <img src="assets/images/resource/rooftox-02.png" alt="" />
                            </figure>
                        </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="slide">
                    <div className="project__block__one">
                        <div className="inner__box">
                        <div className="image__box">
                            <figure className="image">
                            <img src="assets/images/resource/rooftox-03.png" alt="" />
                            </figure>
                        </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>

        </>
    )
}
