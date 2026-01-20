import Link from "next/link"
import TestimonialSlider6 from '@/components/slider/TestimonialSlider6'


export default function Projects() {
    return (
        <>
        {/* projects-section-end */}
        <section className="projects___section">
            <div className="projects___content">
            <div className="auto_container">
                <div className="row">
                <div className="col-lg-6 col-md-12">
                    <div className="title">
                    <div className="sub__title">
                        <h6>Why Choose</h6>
                    </div>
                    <div className="main__title">
                        <h2>
                        Explore Our Most Latest <br /> Projects
                        </h2>
                    </div>
                    </div>
                </div>
                <div className="col-lg-6 col-md-12">
                    <div className="normal__text">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing adipiscing
                        integer ultrices suspendisse varius etiam felis tempus nec vitae
                        orci sodales Metus velit nec at diam in sed.
                    </p>
                    </div>
                </div>
                </div>
            </div>
            <div className="projects___slider">
                <TestimonialSlider6/>
            </div>
            </div>
        </section>
        {/* projects-section-end */}
        </>

    )
}
