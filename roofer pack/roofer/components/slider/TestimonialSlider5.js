'use client'
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import InitialsAvatar from "../elements/InitialsAvatar"

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
        nextEl: '.owl-prev',
        prevEl: '.owl-next',
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
            slidesPerView: 2,
            // spaceBetween: 30,
        },
        767: {
            slidesPerView: 2,
            // spaceBetween: 30,
        },
        991: {
            slidesPerView: 2,
            // spaceBetween: 30,
        },
        1199: {
            slidesPerView: 2,
            // spaceBetween: 30,
        },
        1350: {
            slidesPerView: 2,
            // spaceBetween: 30,
        },
    }
}
export default function TestimonialSlider5() {
    return (
        <>
            <Swiper {...swiperOptions} className="theme_carousel owl-theme">
                <SwiperSlide className="slide">
                    <div className="testimonials__block p_relative">
                        <div
                            className="image__layer"
                            style={{
                                backgroundImage: "url(assets/images/shape/shape-52.png)"
                            }}
                        />
                        <div className="testimonials__content">
                            <div className="authore__img">
                                <figure className="image">
                                    <InitialsAvatar name="Jackie Mackenzie" />
                                </figure>
                            </div>
                            <div className="testimonial__bottom">
                                <div className="testimonials__text">
                                    <p>
                                        Brian and his team did an outstanding job on my roof and skylights!  Brian is so easy to work with, and he got right back to me with any questions that I had.  He gave me the most reasonable estimate
                                        for the job compared to some other companies that I had contacted.  I will definitely recommend E & B Roofing to all of my family and friends.
                                    </p>
                                </div>
                                <div className="authore__info">
                                    <div className="authore__content">
                                        <h5>Jackie Mackenzie</h5>
                                    </div>
                                    <div className="quote">
                                        <span className="icon-22" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="slide">
                    <div className="testimonials__block p_relative">
                        <div
                            className="image__layer"
                            style={{
                                backgroundImage: "url(assets/images/shape/shape-52.png)"
                            }}
                        />
                        <div className="testimonials__content">
                            <div className="authore__img">
                                <figure className="image">
                                    <InitialsAvatar name="Carol Roberts" />
                                </figure>
                            </div>
                            <div className="testimonial__bottom">
                                <div className="testimonials__text">
                                    <p>
                                        Brian and his crew did an amazing job replacing the roofs on my house, shed and entrance to the basement. Everything looks so beautiful. They were professional, worked non-stop with efficiency and cleaned up completely when they were finished. Brian scheduled an estimate within a day and scheduled the job within the week.
                                        He was readily available via phone and text with any questions or concerns. I would highly recommend E & B roofing. They are the best!
                                    </p>
                                </div>
                                <div className="authore__info">
                                    <div className="authore__content">
                                        <h5>Carol Roberts</h5>
                                    </div>
                                    <div className="quote">
                                        <span className="icon-22" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="slide">
                    <div className="testimonials__block p_relative">
                        <div
                            className="image__layer"
                            style={{
                                backgroundImage: "url(assets/images/shape/shape-52.png)"
                            }}
                        />
                        <div className="testimonials__content">
                            <div className="authore__img">
                                <figure className="image">
                                    <InitialsAvatar name="Nathan Guite" />
                                </figure>
                            </div>
                            <div className="testimonial__bottom">
                                <div className="testimonials__text">
                                    <p>
                                        Brian and his team @ E&B Roofing did a great job with our house in Rehoboth. He not only had the best pricing and certified roofing system but the quality and the craftsmanship was unmatched. I had more than 5 estimates from competitors and he is no doubt on top.
                                        He answered all my questions and also went the extra mile on the gutters to ensure the roof will perform better than new. Great work.
                                    </p>
                                </div>
                                <div className="authore__info">
                                    <div className="authore__content">
                                        <h5>Nathan Guite</h5>
                                    </div>
                                    <div className="quote">
                                        <span className="icon-22" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

            </Swiper>

        </>
    )
}
