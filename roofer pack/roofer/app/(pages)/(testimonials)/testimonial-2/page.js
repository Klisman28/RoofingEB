'use client'
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import React from "react"

export default function Home() {
    // Static reviews with REAL content from E&B Roofing customers
    // Photos now use 'ui-avatars.com' to generate Google-style initial icons
    const reviews = [
        {
            author_name: "Jeff R.",
            text: "Brian and his crew did a great job replacing the roof on our house and detached shed. He provided a competitive quote and we were even able to have gutter guards installed as part of the process. They were polite, courteous and did a great job cleaning up. Definitely recommend to anyone looking for a roof replacement.",
            profile_photo_url: "https://ui-avatars.com/api/?name=Jeff+R&background=795548&color=fff", // Brownish
            relative_time_description: "5 months ago",
            rating: 5
        },
        {
            author_name: "Jace Santiago",
            text: "Brian and his crew did a great job repairing our roof! Great pricing great crew reliable company to call!",
            profile_photo_url: "https://ui-avatars.com/api/?name=Jace+Santiago&background=4CAF50&color=fff", // Green
            relative_time_description: "3 weeks ago",
            rating: 5
        },
        {
            author_name: "Kristine Pike",
            text: "The roof looks wonderful and the crew were friendly and cleaned up before they left the job. The price was competitive with the other quotes I had received. I would highly recommend Brian and his company.",
            profile_photo_url: "https://ui-avatars.com/api/?name=Kristine+Pike&background=039BE5&color=fff", // Google Blue
            relative_time_description: "a month ago",
            rating: 5
        },
        {
            author_name: "ms. Africa",
            text: "Brian and his team is the best contractor I ever worked with,this guys do it from the heart,excellent work they did for siding sidings on my house and the most amazing thing is Brian is a man of his words he do us promised. I can't be happier.",
            profile_photo_url: "https://ui-avatars.com/api/?name=ms.+Africa&background=9C27B0&color=fff", // Purple
            relative_time_description: "3 weeks ago",
            rating: 5
        },
        {
            author_name: "Luke Scholfield",
            text: "Brian and his team did an amazing job installing a new roof on my home including shingles, a section of rubber roofing and gutter guards. From installation to cleanup this company is extremely thorough and even took an extra step to spray paint our chimney.",
            profile_photo_url: "https://ui-avatars.com/api/?name=Luke+Scholfield&background=FF5722&color=fff", // Orange
            relative_time_description: "2 years ago",
            rating: 5
        },
        {
            author_name: "Jeff S",
            text: "Brian and his crew did a great job replacing the roof on our house and detached shed. He provided a competitive quote and we were even able to have gutter guards installed as part of the process. They were polite, courteous and did a great job cleaning up. Definitely recommend to anyone looking for a roof replacement.",
            profile_photo_url: "https://ui-avatars.com/api/?name=Luke+Scholfield&background=FF5722&color=fff", // Orange
            relative_time_description: "Hace 5 meses",
            rating: 5
        }
    ];

    return (
        <>
            <Layout headerStyle={4} footerStyle={2} breadcrumbTitle="Review Google">
                <div>
                    {/*testimonial-1 */}
                    <section className="testimonial__two see__pad p_relative">
                        <div className="testimonial__two__content">
                            <div className="auto_container">
                                <div className="row">
                                    {reviews.map((review, index) => (
                                        <div className="col-lg-4 col-md-6 col-sm-12" key={index}>
                                            <div className="testimonial__block__two">
                                                <div className="image__layer" style={{ backgroundImage: 'url(assets/images/shape/shape-06.png)' }}>
                                                </div>
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
                                                            {review.text.length > 150
                                                                ? review.text.substring(0, 150) + "..."
                                                                : review.text}
                                                        </p>
                                                    </div>
                                                    <div className="authore__info">
                                                        <h5>{review.author_name}</h5>
                                                        <p>{review.relative_time_description}</p>

                                                        {/* Google Stars */}
                                                        <div className="test__rating" style={{ marginTop: '10px' }}>
                                                            <ul style={{ display: 'flex', gap: '5px', padding: 0, listStyle: 'none' }}>
                                                                {[...Array(5)].map((_, i) => (
                                                                    <li key={i}>
                                                                        <svg width="18" height="100" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                            <path d="M9 0L11.0206 6.21885H17.5595L12.2694 10.0623L14.2901 16.2812L9 12.4377L3.70993 16.2812L5.73056 10.0623L0.440492 6.21885H6.97937L9 0Z" fill="#FFAA00" />
                                                                        </svg>
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="quote">
                                                        <span className="icon-22"></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </section>
                    {/*testimonial-1 end */}

                    {/*news-letter */}
                    <section className="news_letter two">
                        <div className="auto_container">
                            <div className="news_letter_content" style={{ backgroundImage: 'url(assets/images/shape/shape-27.png)' }}>
                                <div className="news_letter_left p_relative">
                                    <h3>Subscribe <br />
                                        To Our Newsletter</h3>
                                    <div className="form-inner p_relative">
                                        <form action="/" method="post" className="subscribe-form">
                                            <div className="form-group">
                                                <input type="email" name="email" placeholder="Your email" required="" />
                                                <button type="submit" className="btn-two">Subscribe Now</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/*news-letter-end */}
                </div>

            </Layout>
        </>
    )
}
