'use client'
import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 3,
    spaceBetween: 30,
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
            slidesPerView: 2,
            // spaceBetween: 30,
        },
        991: {
            slidesPerView: 3,
            // spaceBetween: 30,
        },
        1199: {
            slidesPerView: 4,
            // spaceBetween: 30,
        },
        1350: {
            slidesPerView: 4,
            // spaceBetween: 30,
        },
    }
}
export default function TestimonialSlider0() {
    return (
        <>
            <Swiper {...swiperOptions} className="theme_carousel owl-theme">
                <SwiperSlide className="slide">
                    <div className="portfolio__block__one">
                        <div className="inner-box">
                        <figure className="image-box">
                            <img src="assets/images/resource/portfolio-01.png" alt="" />
                        </figure>
                        <div className="lower__content">
                            <div className="view-btn">
                            <Link
                                href="assets/images/resource/portfolio-big-01.png"
                                className="lightbox-image"
                                data-fancybox="gallery"
                            >
                                <span className="icon-18" />
                            </Link>
                            </div>
                            <div className="portfolio__block">
                            <span>Maintenance</span>
                            <h4>
                                <Link href="/project-details">Quality Materials</Link>
                            </h4>
                            </div>
                        </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="slide">
                    <div className="portfolio__block__one">
                        <div className="inner-box">
                        <figure className="image-box">
                            <img src="assets/images/resource/portfolio-02.png" alt="" />
                        </figure>
                        <div className="lower__content">
                            <div className="view-btn">
                            <Link
                                href="assets/images/resource/portfolio-big-02.png"
                                className="lightbox-image"
                                data-fancybox="gallery"
                            >
                                <span className="icon-18" />
                            </Link>
                            </div>
                            <div className="portfolio__block">
                            <span>Alfa Project</span>
                            <h4>
                                <Link href="/project-details">Roof Repair</Link>
                            </h4>
                            </div>
                        </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="slide">
                    <div className="portfolio__block__one">
                        <div className="inner-box">
                        <figure className="image-box">
                            <img src="assets/images/resource/portfolio-03.png" alt="" />
                        </figure>
                        <div className="lower__content">
                            <div className="view-btn">
                            <Link
                                href="assets/images/resource/portfolio-big-03.png"
                                className="lightbox-image"
                                data-fancybox="gallery"
                            >
                                <span className="icon-18" />
                            </Link>
                            </div>
                            <div className="portfolio__block">
                            <span>Residential</span>
                            <h4>
                                <Link href="/project-details">Renovation Of Roof</Link>
                            </h4>
                            </div>
                        </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="slide">
                    <div className="portfolio__block__one">
                        <div className="inner-box">
                        <figure className="image-box">
                            <img src="assets/images/resource/portfolio-04.png" alt="" />
                        </figure>
                        <div className="lower__content">
                            <div className="view-btn">
                            <Link
                                href="assets/images/resource/portfolio-big-04.png"
                                className="lightbox-image"
                                data-fancybox="gallery"
                            >
                                <span className="icon-18" />
                            </Link>
                            </div>
                            <div className="portfolio__block">
                            <span>Residential</span>
                            <h4>
                                <Link href="/project-details">Roof Construction</Link>
                            </h4>
                            </div>
                        </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="slide">
                    <div className="portfolio__block__one">
                        <div className="inner-box">
                        <figure className="image-box">
                            <img src="assets/images/resource/portfolio-01.png" alt="" />
                        </figure>
                        <div className="lower__content">
                            <div className="view-btn">
                            <Link
                                href="assets/images/resource/portfolio-big-01.png"
                                className="lightbox-image"
                                data-fancybox="gallery"
                            >
                                <span className="icon-18" />
                            </Link>
                            </div>
                            <div className="portfolio__block">
                            <span>Maintenance</span>
                            <h4>
                                <Link href="/project-details">Quality Materials</Link>
                            </h4>
                            </div>
                        </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="slide">
                    <div className="portfolio__block__one">
                        <div className="inner-box">
                        <figure className="image-box">
                            <img src="assets/images/resource/portfolio-02.png" alt="" />
                        </figure>
                        <div className="lower__content">
                            <div className="view-btn">
                            <Link
                                href="assets/images/resource/portfolio-big-02.png"
                                className="lightbox-image"
                                data-fancybox="gallery"
                            >
                                <span className="icon-18" />
                            </Link>
                            </div>
                            <div className="portfolio__block">
                            <span>Alfa Project</span>
                            <h4>
                                <Link href="/project-details">Roof Repair</Link>
                            </h4>
                            </div>
                        </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="slide">
                    <div className="portfolio__block__one">
                        <div className="inner-box">
                        <figure className="image-box">
                            <img src="assets/images/resource/portfolio-03.png" alt="" />
                        </figure>
                        <div className="lower__content">
                            <div className="view-btn">
                            <Link
                                href="assets/images/resource/portfolio-big-03.png"
                                className="lightbox-image"
                                data-fancybox="gallery"
                            >
                                <span className="icon-18" />
                            </Link>
                            </div>
                            <div className="portfolio__block">
                            <span>Residential</span>
                            <h4>
                                <Link href="/project-details">Renovation Of Roof</Link>
                            </h4>
                            </div>
                        </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="slide">
                    <div className="portfolio__block__one">
                        <div className="inner-box">
                        <figure className="image-box">
                            <img src="assets/images/resource/portfolio-04.png" alt="" />
                        </figure>
                        <div className="lower__content">
                            <div className="view-btn">
                            <Link
                                href="assets/images/resource/portfolio-big-04.png"
                                className="lightbox-image"
                                data-fancybox="gallery"
                            >
                                <span className="icon-18" />
                            </Link>
                            </div>
                            <div className="portfolio__block">
                            <span>Residential</span>
                            <h4>
                                <Link href="/project-details">Roof Construction</Link>
                            </h4>
                            </div>
                        </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    )
}
