'use client'
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import React from 'react';

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 2,
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
export default function TestimonialSlider1() {
    const staticReviews = [
        {
            author_name: "Jeff R.",
            text: "Brian and his crew did a great job replacing the roof on our house and detached shed. He provided a competitive quote and we were even able to have gutter guards installed as part of the process. They were polite, courteous and did a great job cleaning up. Definitely recommend to anyone looking for a roof replacement.",
            profile_photo_url: "https://ui-avatars.com/api/?name=Jeff+R&background=795548&color=fff",
            relative_time_description: "5 months ago",
            rating: 5
        },
        {
            author_name: "Jace Santiago",
            text: "Brian and his crew did a great job repairing our roof! Great pricing great crew reliable company to call!",
            profile_photo_url: "https://ui-avatars.com/api/?name=Jace+Santiago&background=4CAF50&color=fff",
            relative_time_description: "3 weeks ago",
            rating: 5
        },
        {
            author_name: "Kristine Pike",
            text: "The roof looks wonderful and the crew were friendly and cleaned up before they left the job. The price was competitive with the other quotes I had received. I would highly recommend Brian and his company.",
            profile_photo_url: "https://ui-avatars.com/api/?name=Kristine+Pike&background=039BE5&color=fff",
            relative_time_description: "a month ago",
            rating: 5
        },
        {
            author_name: "ms. Africa",
            text: "Brian and his team is the best contractor I ever worked with,this guys do it from the heart,excellent work they did for siding sidings on my house and the most amazing thing is Brian is a man of his words he do us promised. I can't be happier.",
            profile_photo_url: "https://ui-avatars.com/api/?name=ms.+Africa&background=9C27B0&color=fff",
            relative_time_description: "3 weeks ago",
            rating: 5
        },
        {
            author_name: "Luke Scholfield",
            text: "Brian and his team did an amazing job installing a new roof on my home including shingles, a section of rubber roofing and gutter guards. From installation to cleanup this company is extremely thorough and even took an extra step to spray paint our chimney.",
            profile_photo_url: "https://ui-avatars.com/api/?name=Luke+Scholfield&background=FF5722&color=fff",
            relative_time_description: "2 years ago",
            rating: 5
        },
        {
            author_name: "Kristine Pike",
            text: "E&B Roofing/ Brian and his crew just finished my new roof! The roof looks wonderful and the crew were friendly and cleaned up before they left the job. The price was competitive with the other quotes I had received.",
            profile_photo_url: "https://ui-avatars.com/api/?name=Kristine+Pike&background=E91E63&color=fff",
            relative_time_description: "a month ago",
            rating: 5
        }
    ];

    const [reviews, setReviews] = React.useState(staticReviews);

    React.useEffect(() => {
        async function fetchReviews() {
            try {
                const res = await fetch('/api/google-reviews');
                if (res.ok) {
                    const data = await res.json();
                    if (data.reviews && Array.isArray(data.reviews) && data.reviews.length > 0) {
                        setReviews(data.reviews);
                    }
                }
            } catch (error) {
                console.error("Failed to fetch Google Reviews", error);
            }
        }
        fetchReviews();
    }, []);

    return (
        <>
            <Swiper {...swiperOptions} className="theme_carousel owl-theme">
                <div className="swiper-wrapper">
                    {reviews.map((review, index) => (
                        <SwiperSlide key={index} className="slide">
                            <div className="swiper-slide testimonials__block__one">
                                <div className="testimonials__info">
                                    <div className="authore__img">
                                        <figure className="image">
                                            <img
                                                src={review.profile_photo_url || "assets/images/resource/author-01.png"}
                                                alt={review.author_name}
                                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                            />
                                        </figure>
                                    </div>
                                    <div className="testimonials__text">
                                        <p>
                                            {review.text.length > 180
                                                ? review.text.substring(0, 180) + "..."
                                                : review.text}
                                        </p>
                                    </div>
                                    <div className="authore__info">
                                        <h5>{review.author_name}</h5>
                                        <p>{review.relative_time_description}</p>
                                        <div className="test__rating" style={{ marginTop: '10px' }}>
                                            <ul style={{ display: 'flex', gap: '5px', padding: 0, listStyle: 'none' }}>
                                                {[...Array(5)].map((_, i) => (
                                                    <li key={i}>
                                                        <svg width="18" height="110" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M9 0L11.0206 6.21885H17.5595L12.2694 10.0623L14.2901 16.2812L9 12.4377L3.70993 16.2812L5.73056 10.0623L0.440492 6.21885H6.97937L9 0Z" fill="#FFAA00" />
                                                        </svg>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="quote">
                                        <span className="icon-22" />
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </div>
            </Swiper>
        </>
    )
}
