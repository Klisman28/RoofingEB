import TestimonialSlider3 from '@/components/slider/TestimonialSlider3'
import Link from "next/link";

export default function ServiceFour() {
    return (
        <>
        {/* our-service-four */}
        <section
            className="service__four p_relative"
            style={{
            backgroundImage: "url(assets/images/background/background-02.png)"
            }}
        >
            <div className="service__four__content">
            <div className="auto_container">
                <div className="title text-center">
                <div className="sub__title">
                    <h6>Our Services</h6>
                </div>
                <div className="main__title">
                    <h2>
                    We’re Prodviding Quality <br /> Roofing Services
                    </h2>
                </div>
                </div>
                <div className="service__four__slider">
                    <TestimonialSlider3/>
                </div>
            </div>
            </div>
        </section>
        {/* our-service-four-end */}
        </>
    )
}
