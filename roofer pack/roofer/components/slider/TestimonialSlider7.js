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
            slidesPerView: 3,
            // spaceBetween: 30,
        },
    }
}
export default function TestimonialSlider7() {
    return (
        <>
            <Swiper {...swiperOptions} className="theme_carousel owl-theme">
                <SwiperSlide className="slide">
                    <div className="testimonials__middle">
                        <div
                        className="image__layer"
                        style={{
                            backgroundImage: "url(assets/images/shape/shape-06.png)"
                        }}
                        />
                        <div className="testimonials__block__one">
                        <div className="testimonials__info">
                            <div className="authore__img">
                            <figure className="image">
                                <img
                                src="assets/images/resource/testimonial-01.png"
                                alt=""
                                />
                            </figure>
                            </div>
                            <div className="testimonials__text">
                            <p>
                                Blandit aliquet varius id malsua nun tempor malesuada
                                sollicitudin sit tell dignissim lacinia convallis.Massa dui
                                ipsum ornare sagittis dolor sagittis lacinia fusce.
                            </p>
                            </div>
                            <div className="authore__info">
                            <h5>Leslie Alexander</h5>
                            <p>Manager</p>
                            </div>
                            <div className="quote">
                            <span className="icon-22" />
                            </div>
                        </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="slide">
                    <div className="testimonials__middle">
                        <div
                        className="image__layer"
                        style={{
                            backgroundImage: "url(assets/images/shape/shape-06.png)"
                        }}
                        />
                        <div className="testimonials__block__one">
                        <div className="testimonials__info">
                            <div className="authore__img">
                            <figure className="image">
                                <img
                                src="assets/images/resource/testimonial-02.png"
                                alt=""
                                />
                            </figure>
                            </div>
                            <div className="testimonials__text">
                            <p>
                                Blandit aliquet varius id malsua nun tempor malesuada
                                sollicitudin sit tell dignissim lacinia convallis.Massa dui
                                ipsum ornare sagittis dolor sagittis lacinia fusce.
                            </p>
                            </div>
                            <div className="authore__info">
                            <h5>Jane Cooper</h5>
                            <p>Ex CEO</p>
                            </div>
                            <div className="quote">
                            <span className="icon-22" />
                            </div>
                        </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="slide">
                    <div className="testimonials__middle">
                        <div
                        className="image__layer"
                        style={{
                            backgroundImage: "url(assets/images/shape/shape-06.png)"
                        }}
                        />
                        <div className="testimonials__block__one">
                        <div className="testimonials__info">
                            <div className="authore__img">
                            <figure className="image">
                                <img
                                src="assets/images/resource/testimonial-03.png"
                                alt=""
                                />
                            </figure>
                            </div>
                            <div className="testimonials__text">
                            <p>
                                Blandit aliquet varius id malsua nun tempor malesuada
                                sollicitudin sit tell dignissim lacinia convallis.Massa dui
                                ipsum ornare sagittis dolor sagittis lacinia fusce.
                            </p>
                            </div>
                            <div className="authore__info">
                            <h5>Annette Black</h5>
                            <p>CTO</p>
                            </div>
                            <div className="quote">
                            <span className="icon-22" />
                            </div>
                        </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="slide">
                    <div className="testimonials__middle">
                        <div
                        className="image__layer"
                        style={{
                            backgroundImage: "url(assets/images/shape/shape-06.png)"
                        }}
                        />
                        <div className="testimonials__block__one">
                        <div className="testimonials__info">
                            <div className="authore__img">
                            <figure className="image">
                                <img
                                src="assets/images/resource/testimonial-01.png"
                                alt=""
                                />
                            </figure>
                            </div>
                            <div className="testimonials__text">
                            <p>
                                Blandit aliquet varius id malsua nun tempor malesuada
                                sollicitudin sit tell dignissim lacinia convallis.Massa dui
                                ipsum ornare sagittis dolor sagittis lacinia fusce.
                            </p>
                            </div>
                            <div className="authore__info">
                            <h5>Leslie Alexander</h5>
                            <p>Manager</p>
                            </div>
                            <div className="quote">
                            <span className="icon-22" />
                            </div>
                        </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="slide">
                    <div className="testimonials__middle">
                        <div
                        className="image__layer"
                        style={{
                            backgroundImage: "url(assets/images/shape/shape-06.png)"
                        }}
                        />
                        <div className="testimonials__block__one">
                        <div className="testimonials__info">
                            <div className="authore__img">
                            <figure className="image">
                                <img
                                src="assets/images/resource/testimonial-02.png"
                                alt=""
                                />
                            </figure>
                            </div>
                            <div className="testimonials__text">
                            <p>
                                Blandit aliquet varius id malsua nun tempor malesuada
                                sollicitudin sit tell dignissim lacinia convallis.Massa dui
                                ipsum ornare sagittis dolor sagittis lacinia fusce.
                            </p>
                            </div>
                            <div className="authore__info">
                            <h5>Jane Cooper</h5>
                            <p>Ex CEO</p>
                            </div>
                            <div className="quote">
                            <span className="icon-22" />
                            </div>
                        </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="slide">
                    <div className="testimonials__middle">
                        <div
                        className="image__layer"
                        style={{
                            backgroundImage: "url(assets/images/shape/shape-06.png)"
                        }}
                        />
                        <div className="testimonials__block__one">
                        <div className="testimonials__info">
                            <div className="authore__img">
                            <figure className="image">
                                <img
                                src="assets/images/resource/testimonial-03.png"
                                alt=""
                                />
                            </figure>
                            </div>
                            <div className="testimonials__text">
                            <p>
                                Blandit aliquet varius id malsua nun tempor malesuada
                                sollicitudin sit tell dignissim lacinia convallis.Massa dui
                                ipsum ornare sagittis dolor sagittis lacinia fusce.
                            </p>
                            </div>
                            <div className="authore__info">
                            <h5>Annette Black</h5>
                            <p>CTO</p>
                            </div>
                            <div className="quote">
                            <span className="icon-22" />
                            </div>
                        </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>

        </>
    )
}
