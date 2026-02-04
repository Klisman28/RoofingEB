
import Link from "next/link"
import CounterUp from "@/components/elements/CounterUp"


export default function Funfact() {
    return (
        <>
        {/* funfact-section */}
        <section className="funfact__section three p_relative ">
            <div className="funfact__content">
            <div className="auto_container">
                <div className="row">
                <div
                    className=" col-lg-3 col-md-6 col-sm-6 col-12 counter-block-one wow zoomIn animated"
                    data-wow-delay="00ms"
                    data-wow-duration="1500ms"
                >
                    <div className="inner_box">
                    <div className="icon__image">
                        <span className="icon-8" />
                    </div>
                    <div className="funfact__text">
                        <div className="count-outer count-box">
                        <CounterUp end={932} />
                        <span>+</span>
                        </div>
                        <p>Experience Staff</p>
                    </div>
                    </div>
                </div>
                <div
                    className="col-lg-3 col-md-6 col-sm-6 col-12 counter-block-one wow zoomIn animated"
                    data-wow-delay="100ms"
                    data-wow-duration="1500ms"
                >
                    <div className="inner_box">
                    <div className="icon__image">
                        <span className="icon-7" />
                    </div>
                    <div className="funfact__text">
                        <div className="count-outer count-box">
                        <CounterUp end={90} />
                        <span>+</span>
                        </div>
                        <p>Experience Staff</p>
                    </div>
                    </div>
                </div>
                <div
                    className="col-lg-3 col-md-6 col-sm-6 col-12 counter-block-one wow zoomIn animated"
                    data-wow-delay="200ms"
                    data-wow-duration="1500ms"
                >
                    <div className="inner_box">
                    <div className="icon__image">
                        <span className="icon-9" />
                    </div>
                    <div className="funfact__text">
                        <div className="count-outer count-box">
                        <CounterUp end={20} />
                        <span>+</span>
                        </div>
                        <p>Awards Win</p>
                    </div>
                    </div>
                </div>
                <div
                    className="col-lg-3  col-md-6 col-sm-6 col-12 counter-block-one wow zoomIn animated"
                    data-wow-delay="300ms"
                    data-wow-duration="1500ms"
                >
                    <div className="inner_box">
                    <div className="icon__image">
                        <span className="icon-10" />
                    </div>
                    <div className="funfact__text">
                        <div className="count-outer count-box">
                        <CounterUp end={620} />
                        <span>+</span>
                        </div>
                        <p>Satisfied Clients</p>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </section>
        {/* funfact-section-end */}
        </>



    )
}
