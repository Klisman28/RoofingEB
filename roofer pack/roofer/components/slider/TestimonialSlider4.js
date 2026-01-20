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
            spaceBetween: 30,
        },
        575: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        767: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        991: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        1199: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        1350: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
    }
}
export default function TestimonialSlider4() {
    return (
        <>
            <Swiper {...swiperOptions} className="theme_carousel owl-theme">
                {/*Start single review box*/}
                <SwiperSlide className="slide-item">
                <div className="testimonial__block">
                    <div
                        className="image__layer"
                        style={{
                        backgroundImage: "url(assets/images/shape/shape-06.png)"
                        }}
                    />
                    <div className="author__img">
                        <figure className="image">
                        <img src="assets/images/resource/author-01.png" alt="" />
                        </figure>
                    </div>
                    <div className="des__text">
                        <p>
                        Blandit aliquet varius id malsua nun tempor malesuada
                        sollicitudin sit tell dignissim lacinia convallis.Massa dui
                        ipsum ornare sagittis dolor sagittis lacinia fusce.
                        </p>
                    </div>
                    <div className="author__info p_relative">
                        <h5>Leslie Alexander</h5>
                        <p>Manager</p>
                        <div className="quote">
                        <span className="icon-22 one" />
                        <span className="icon-22 two" />
                        </div>
                    </div>
                    </div>
                </SwiperSlide>
                {/*End single review box*/}
                {/*Start single review box*/}
                <SwiperSlide className="slide-item">
                <div className="testimonial__block">
                    <div
                        className="image__layer"
                        style={{
                        backgroundImage: "url(assets/images/shape/shape-06.png)"
                        }}
                    />
                    <div className="author__img">
                        <figure className="image">
                        <img src="assets/images/resource/testimonial-01.png" alt="" />
                        </figure>
                    </div>
                    <div className="des__text">
                        <p>
                        Blandit aliquet varius id malsua nun tempor malesuada
                        sollicitudin sit tell dignissim lacinia convallis.Massa dui
                        ipsum ornare sagittis dolor sagittis lacinia fusce.
                        </p>
                    </div>
                    <div className="author__info p_relative">
                        <h5>Leslie Alexander</h5>
                        <p>Manager</p>
                        <div className="quote">
                        <span className="icon-22 one" />
                        <span className="icon-22 two" />
                        </div>
                    </div>
                    </div>
                </SwiperSlide>
                {/*End single review box*/}
                {/*Start single review box*/}
                <SwiperSlide className="slide-item">
                <div className="testimonial__block">
                    <div
                        className="image__layer"
                        style={{
                        backgroundImage: "url(assets/images/shape/shape-06.png)"
                        }}
                    />
                    <div className="author__img">
                        <figure className="image">
                        <img src="assets/images/resource/testimonial-02.png" alt="" />
                        </figure>
                    </div>
                    <div className="des__text">
                        <p>
                        Blandit aliquet varius id malsua nun tempor malesuada
                        sollicitudin sit tell dignissim lacinia convallis.Massa dui
                        ipsum ornare sagittis dolor sagittis lacinia fusce.
                        </p>
                    </div>
                    <div className="author__info p_relative">
                        <h5>Leslie Alexander</h5>
                        <p>Manager</p>
                        <div className="quote">
                        <span className="icon-22 one" />
                        <span className="icon-22 two" />
                        </div>
                    </div>
                    </div>
                </SwiperSlide>
                {/*End single review box*/}
                {/*Start single review box*/}
                <SwiperSlide className="slide-item">
                <div className="testimonial__block">
                    <div
                        className="image__layer"
                        style={{
                        backgroundImage: "url(assets/images/shape/shape-06.png)"
                        }}
                    />
                    <div className="author__img">
                        <figure className="image">
                        <img src="assets/images/resource/testimonial-03.png" alt="" />
                        </figure>
                    </div>
                    <div className="des__text">
                        <p>
                        Blandit aliquet varius id malsua nun tempor malesuada
                        sollicitudin sit tell dignissim lacinia convallis.Massa dui
                        ipsum ornare sagittis dolor sagittis lacinia fusce.
                        </p>
                    </div>
                    <div className="author__info p_relative">
                        <h5>Leslie Alexander</h5>
                        <p>Manager</p>
                        <div className="quote">
                        <span className="icon-22 one" />
                        <span className="icon-22 two" />
                        </div>
                    </div>
                    </div>
                </SwiperSlide>
                {/*End single review box*/}
                {/*Start single review box*/}
                <SwiperSlide className="slide-item">
                <div className="testimonial__block">
                    <div
                        className="image__layer"
                        style={{
                        backgroundImage: "url(assets/images/shape/shape-06.png)"
                        }}
                    />
                    <div className="author__img">
                        <figure className="image">
                        <img src="assets/images/resource/testimonial-04.png" alt="" />
                        </figure>
                    </div>
                    <div className="des__text">
                        <p>
                        Blandit aliquet varius id malsua nun tempor malesuada
                        sollicitudin sit tell dignissim lacinia convallis.Massa dui
                        ipsum ornare sagittis dolor sagittis lacinia fusce.
                        </p>
                    </div>
                    <div className="author__info p_relative">
                        <h5>Leslie Alexander</h5>
                        <p>Manager</p>
                        <div className="quote">
                        <span className="icon-22 one" />
                        <span className="icon-22 two" />
                        </div>
                    </div>
                    </div>
                </SwiperSlide>
                {/*End single review box*/}
                {/*Start single review box*/}
                <SwiperSlide className="slide-item">
                <div className="testimonial__block">
                    <div
                        className="image__layer"
                        style={{
                        backgroundImage: "url(assets/images/shape/shape-06.png)"
                        }}
                    />
                    <div className="author__img">
                        <figure className="image">
                        <img src="assets/images/resource/testimonial-05.png" alt="" />
                        </figure>
                    </div>
                    <div className="des__text">
                        <p>
                        Blandit aliquet varius id malsua nun tempor malesuada
                        sollicitudin sit tell dignissim lacinia convallis.Massa dui
                        ipsum ornare sagittis dolor sagittis lacinia fusce.
                        </p>
                    </div>
                    <div className="author__info p_relative">
                        <h5>Leslie Alexander</h5>
                        <p>Manager</p>
                        <div className="quote">
                        <span className="icon-22 one" />
                        <span className="icon-22 two" />
                        </div>
                    </div>
                    </div>
                </SwiperSlide>
                {/*End single review box*/}
                
                {/*Start single review box*/}
                <SwiperSlide className="slide-item">
                <div className="testimonial__block">
                    <div
                        className="image__layer"
                        style={{
                        backgroundImage: "url(assets/images/shape/shape-06.png)"
                        }}
                    />
                    <div className="author__img">
                        <figure className="image">
                        <img src="assets/images/resource/author-01.png" alt="" />
                        </figure>
                    </div>
                    <div className="des__text">
                        <p>
                        Blandit aliquet varius id malsua nun tempor malesuada
                        sollicitudin sit tell dignissim lacinia convallis.Massa dui
                        ipsum ornare sagittis dolor sagittis lacinia fusce.
                        </p>
                    </div>
                    <div className="author__info p_relative">
                        <h5>Leslie Alexander</h5>
                        <p>Manager</p>
                        <div className="quote">
                        <span className="icon-22 one" />
                        <span className="icon-22 two" />
                        </div>
                    </div>
                    </div>
                </SwiperSlide>
                {/*End single review box*/}
                
                {/*Start single review box*/}
                <SwiperSlide className="slide-item">
                <div className="testimonial__block">
                    <div
                        className="image__layer"
                        style={{
                        backgroundImage: "url(assets/images/shape/shape-06.png)"
                        }}
                    />
                    <div className="author__img">
                        <figure className="image">
                        <img src="assets/images/resource/testimonial-01.png" alt="" />
                        </figure>
                    </div>
                    <div className="des__text">
                        <p>
                        Blandit aliquet varius id malsua nun tempor malesuada
                        sollicitudin sit tell dignissim lacinia convallis.Massa dui
                        ipsum ornare sagittis dolor sagittis lacinia fusce.
                        </p>
                    </div>
                    <div className="author__info p_relative">
                        <h5>Leslie Alexander</h5>
                        <p>Manager</p>
                        <div className="quote">
                        <span className="icon-22 one" />
                        <span className="icon-22 two" />
                        </div>
                    </div>
                    </div>
                </SwiperSlide>
                {/*End single review box*/}
                
                {/*Start single review box*/}
                <SwiperSlide className="slide-item">
                <div className="testimonial__block">
                    <div
                        className="image__layer"
                        style={{
                        backgroundImage: "url(assets/images/shape/shape-06.png)"
                        }}
                    />
                    <div className="author__img">
                        <figure className="image">
                        <img src="assets/images/resource/testimonial-02.png" alt="" />
                        </figure>
                    </div>
                    <div className="des__text">
                        <p>
                        Blandit aliquet varius id malsua nun tempor malesuada
                        sollicitudin sit tell dignissim lacinia convallis.Massa dui
                        ipsum ornare sagittis dolor sagittis lacinia fusce.
                        </p>
                    </div>
                    <div className="author__info p_relative">
                        <h5>Leslie Alexander</h5>
                        <p>Manager</p>
                        <div className="quote">
                        <span className="icon-22 one" />
                        <span className="icon-22 two" />
                        </div>
                    </div>
                    </div>
                </SwiperSlide>
                {/*End single review box*/}
                
            </Swiper>

        </>
    )
}
