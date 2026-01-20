'use client'
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 2,
    // spaceBetween: 30,
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
            slidesPerView: 1,
            // spaceBetween: 30,
        },
    }
}
export default function TestimonialSlider2() {
    return (
        <>
            <Swiper {...swiperOptions} className="theme_carousel owl-theme">
                <SwiperSlide className="slide-item">
                    <div className="testimonials__block">
                    <div className="test__rating">
                        <ul>
                        <li>
                            <span className="icon-54" />
                        </li>
                        <li>
                            <span className="icon-54" />
                        </li>
                        <li>
                            <span className="icon-54" />
                        </li>
                        <li>
                            <span className="icon-54" />
                        </li>
                        <li>
                            <span className="icon-55" />
                        </li>
                        </ul>
                    </div>
                    <div className="testimonials__info">
                        <div className="testimonials__text p_relative">
                        <p>
                            “Blandit aliquet varius id malesuada nunc euismod id
                            tempor malesuada sollicitudin sit nisi tellus auctor
                            vitae dignissim lacinia convallis dictum.”
                        </p>
                        <div className="quote">
                            <span className="icon-22" />
                        </div>
                        </div>
                        <div className="authore__info">
                        <div className="authore__img">
                            <figure className="image">
                            <img
                                src="assets/images/resource/author-04.png"
                                alt=""
                            />
                            </figure>
                        </div>
                        <div className="authore__des">
                            <h5>Leslie Alexander</h5>
                            <p>Manager</p>
                        </div>
                        </div>
                    </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="slide-item">
                    <div className="testimonials__block">
                    <div className="test__rating">
                        <ul>
                        <li>
                            <span className="icon-54" />
                        </li>
                        <li>
                            <span className="icon-54" />
                        </li>
                        <li>
                            <span className="icon-54" />
                        </li>
                        <li>
                            <span className="icon-54" />
                        </li>
                        <li>
                            <span className="icon-55" />
                        </li>
                        </ul>
                    </div>
                    <div className="testimonials__info">
                        <div className="testimonials__text p_relative">
                        <p>
                            “Blandit aliquet varius id malesuada nunc euismod id
                            tempor malesuada sollicitudin sit nisi tellus auctor
                            vitae dignissim lacinia convallis dictum.”
                        </p>
                        <div className="quote">
                            <span className="icon-22" />
                        </div>
                        </div>
                        <div className="authore__info">
                        <div className="authore__img">
                            <figure className="image">
                            <img
                                src="assets/images/resource/author-05.png"
                                alt=""
                            />
                            </figure>
                        </div>
                        <div className="authore__des">
                            <h5>Dev Alexander</h5>
                            <p>Ex CTO</p>
                        </div>
                        </div>
                    </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="slide-item">
                    <div className="testimonials__block">
                    <div className="test__rating">
                        <ul>
                        <li>
                            <span className="icon-54" />
                        </li>
                        <li>
                            <span className="icon-54" />
                        </li>
                        <li>
                            <span className="icon-54" />
                        </li>
                        <li>
                            <span className="icon-54" />
                        </li>
                        <li>
                            <span className="icon-55" />
                        </li>
                        </ul>
                    </div>
                    <div className="testimonials__info">
                        <div className="testimonials__text p_relative">
                        <p>
                            “Blandit aliquet varius id malesuada nunc euismod id
                            tempor malesuada sollicitudin sit nisi tellus auctor
                            vitae dignissim lacinia convallis dictum.”
                        </p>
                        <div className="quote">
                            <span className="icon-22" />
                        </div>
                        </div>
                        <div className="authore__info">
                        <div className="authore__img">
                            <figure className="image">
                            <img
                                src="assets/images/resource/author-06.png"
                                alt=""
                            />
                            </figure>
                        </div>
                        <div className="authore__des">
                            <h5>Johan Exy</h5>
                            <p>Ex CEO</p>
                        </div>
                        </div>
                    </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    )
}
