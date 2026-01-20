import CounterUp from "@/components/elements/CounterUp"
export default function Funfacts() {
    return (
        <>
            {/*funfact-section */}
            <section className="funfact__section p_relative ">
                <div className="funfact__content">
                    <div className="auto_container">
                        <div className="inner__container p_relative">
                            <div className=" col-xl-3 col-lg-6 col-sm-6 col-12 counter-block-one wow slideInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                                <div className="inner-box one">
                                    <div className="icon__image">
                                        <span className="icon-8"></span>
                                    </div>
                                    <div className="funfact__text">
                                        <div className="count-outer count-box">
                                            <CounterUp end={932} /><span>+</span>
                                        </div>
                                        <p>Project Complete</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-6 col-sm-6 col-12 counter-block-one wow slideInUp animated" data-wow-delay="100ms" data-wow-duration="1500ms">
                                <div className="inner-box two">
                                    <div className="icon__image">
                                        <span className="icon-7"></span>
                                    </div>
                                    <div className="funfact__text">
                                        <div className="count-outer count-box">
                                            <CounterUp end={90} /><span>+</span>
                                        </div>
                                        <p>Experience Staff</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-6 col-sm-6 col-12 counter-block-one wow slideInUp animated" data-wow-delay="200ms" data-wow-duration="1500ms">
                                <div className="inner-box three">
                                    <div className="icon__image">
                                        <span className="icon-9"></span>
                                    </div>
                                    <div className="funfact__text">
                                        <div className="count-outer count-box">
                                            <CounterUp end={20} /><span>+</span>
                                        </div>
                                        <p>Awards Win</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-6 col-sm-6 col-12 counter-block-one wow slideInUp animated" data-wow-delay="300ms" data-wow-duration="1500ms">
                                <div className="inner-box four">
                                    <div className="icon__image">
                                        <span className="icon-10"></span>
                                    </div>
                                    <div className="funfact__text">
                                        <div className="count-outer count-box">
                                            <CounterUp end={620} /><span>+</span>
                                        </div>
                                        <p>Satisfied Clients</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*funfact-section-end */}
        </>
    )
}
