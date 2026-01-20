import TestimonialSlider4 from '@/components/slider/TestimonialSlider4'

export default function Testimonial() {
    return (
        <>
        {/* testimonials-section */}
        <section className="testimonials__section three four see__pad p_relative">
            <div className="auto_container">
            <div className="testimonials__content p_relative">
                <div className="title text-center">
                <div className="sub__title">
                    <h6>Testimonials</h6>
                </div>
                <div className="main__title">
                    <h2>
                    What People’s Say About <br /> Rooftox
                    </h2>
                </div>
                </div>
                <div className="testimonial__one__content">
                    <TestimonialSlider4/>
                </div>
            </div>
            </div>
        </section>
        {/* testimonials-section-end */}
        </>

    )
}
