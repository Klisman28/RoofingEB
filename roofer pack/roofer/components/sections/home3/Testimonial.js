import TestimonialSlider7 from '@/components/slider/TestimonialSlider7'

export default function Testimonial() {
    return (
        <>
        {/* testimonials-section */}
        <section className="testimonials__section three p_relative">
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
                <TestimonialSlider7/>
            </div>
            </div>
        </section>
        {/* testimonials-section-end */}
        </>

    )
}
