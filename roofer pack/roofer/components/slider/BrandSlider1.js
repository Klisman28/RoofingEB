'use client'
import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 5,
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
            spaceBetween: 30,
        },
        575: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        767: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        991: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        1199: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
        1350: {
            slidesPerView: 5,
            spaceBetween: 30,
        },
    }
}

export default function BrandSlider1() {
    return (
        <>


            <Swiper {...swiperOptions} className="theme_carousel owl-theme">
                <SwiperSlide>
                    <div className="brand__logo__box">
                        <figure className="image">
                        <Link href="/">
                            <img src="assets/images/brand/brand-01.png" alt="" />
                        </Link>
                        </figure>
                        <figure className="overlay__image">
                        <Link href="/">
                            <img
                            src="assets/images/brand/brand-hover-logo-01.png"
                            alt=""
                            />
                        </Link>
                        </figure>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="brand__logo__box">
                        <figure className="image">
                        <Link href="/">
                            <img src="assets/images/brand/brand-02.png" alt="" />
                        </Link>
                        </figure>
                        <figure className="overlay__image">
                        <Link href="/">
                            <img
                            src="assets/images/brand/brand-hover-logo-02.png"
                            alt=""
                            />
                        </Link>
                        </figure>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="brand__logo__box">
                        <figure className="image">
                        <Link href="/">
                            <img src="assets/images/brand/brand-03.png" alt="" />
                        </Link>
                        </figure>
                        <figure className="overlay__image">
                        <Link href="/">
                            <img
                            src="assets/images/brand/brand-hover-logo-03.png"
                            alt=""
                            />
                        </Link>
                        </figure>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="brand__logo__box">
                        <figure className="image">
                        <Link href="/">
                            <img src="assets/images/brand/brand-04.png" alt="" />
                        </Link>
                        </figure>
                        <figure className="overlay__image">
                        <Link href="/">
                            <img
                            src="assets/images/brand/brand-hover-logo-04.png"
                            alt=""
                            />
                        </Link>
                        </figure>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="brand__logo__box">
                        <figure className="image">
                        <Link href="/">
                            <img src="assets/images/brand/brand-05.png" alt="" />
                        </Link>
                        </figure>
                        <figure className="overlay__image">
                        <Link href="/">
                            <img
                            src="assets/images/brand/brand-hover-logo-05.png"
                            alt=""
                            />
                        </Link>
                        </figure>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    )
}
