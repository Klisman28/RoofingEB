import Link from "next/link"
export default function Workprocess() {
    return (
        <>
            {/* work-process-section */}
            <section className="work__process p_relative see__pad">
                <div className="anim-icon">
                    <div
                        className="icon icons-1 "
                        data-parallax='{"x": 100}'
                        style={{ backgroundImage: "url(assets/images/shape/shape-25.png)" }}
                    />
                    <div
                        className="icon icons-2 "
                        data-parallax='{"x": 100}'
                        style={{ backgroundImage: "url(assets/images/shape/shape-26.png)" }}
                    />
                </div>
                <div className="auto_container">
                    <div className="work__process____two">
                        <div className="title text-center">
                            <div className="sub__title">
                                <h6>Our Roofing Process</h6>
                            </div>
                            <div className="main__title">
                                <h2>
                                    Seamless Roofing Replacement
                                    <br /> in 3 Steps
                                </h2>
                            </div>
                        </div>
                        <div className="work__content">
                            <div className="work__block">
                                <div className="icon__box p_ralative">
                                    <div className="anim-icon">
                                        <div
                                            className="icon icons-4 "
                                            style={{
                                                backgroundImage: "url(assets/images/shape/shape-24.png)"
                                            }}
                                        />
                                    </div>
                                    <div
                                        className="icon__hover__one"
                                        style={{
                                            backgroundImage: "url(assets/images/shape/shape-22.png)"
                                        }}
                                    />
                                    <div
                                        className="icon__hover__two"
                                        style={{
                                            backgroundImage: "url(assets/images/shape/shape-23.png)"
                                        }}
                                    />
                                    <div className="work__block__content">
                                        <div className="icon__outer">
                                            <div className="icon__bg">
                                                <span className="icon-5" />
                                            </div>
                                        </div>
                                        <div className="work__text">
                                            <h4>Get Consultation</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="work__block">
                                <div className="icon__box p_ralative">
                                    <div className="anim-icon">
                                        <div
                                            className="icon icons-4 "
                                            style={{
                                                backgroundImage: "url(assets/images/shape/shape-24.png)"
                                            }}
                                        />
                                    </div>
                                    <div
                                        className="icon__hover__one"
                                        style={{
                                            backgroundImage: "url(assets/images/shape/shape-22.png)"
                                        }}
                                    />
                                    <div
                                        className="icon__hover__two"
                                        style={{
                                            backgroundImage: "url(assets/images/shape/shape-23.png)"
                                        }}
                                    />
                                    <div className="work__block__content">
                                        <div className="icon__outer">
                                            <div className="icon__bg">
                                                <span className="icon-4" />
                                            </div>
                                        </div>
                                        <div className="work__text">
                                            <h4>Install New Roof</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="work__block">
                                <div
                                    className="icon icon-01"
                                    style={{
                                        backgroundImage: "url(assets/images/shape/shape-24.png)"
                                    }}
                                />
                                <div className="icon__box p_ralative">
                                    <div
                                        className="icon__hover__one"
                                        style={{
                                            backgroundImage: "url(assets/images/shape/shape-22.png)"
                                        }}
                                    />
                                    <div
                                        className="icon__hover__two"
                                        style={{
                                            backgroundImage: "url(assets/images/shape/shape-23.png)"
                                        }}
                                    />
                                    <div className="work__block__content">
                                        <div className="icon__outer">
                                            <div className="icon__bg">
                                                <span className="icon-6" />
                                            </div>
                                        </div>
                                        <div className="work__text">
                                            <h4>Relax &amp; Enjoy Roofing</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* work-process-section-end */}
        </>

    )
}
