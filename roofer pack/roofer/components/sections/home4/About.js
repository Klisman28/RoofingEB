import Link from "next/link"


export default function About() {
    return (
        <>
        {/* about-section */}
        <section className="about__section four p_relative see__pad">
            <div className="anim-icon">
            <div className="parallax-scene parallax-scene-1">
                <div
                data-depth="0.30"
                className="icon layer-bg"
                style={{ backgroundImage: "url(assets/images/icons/icon-01.svg)" }}
                />
            </div>
            <div
                className="icon icons-1 "
                data-parallax='{"x": 100}'
                style={{ backgroundImage: "url(assets/images/shape/shape-43.png)" }}
            />
            <div
                className="icon icons-2 "
                data-parallax='{"x": 100}'
                style={{ backgroundImage: "url(assets/images/shape/shape-44.png)" }}
            />
            </div>
            <div className="auto_container">
            <div className="about__section__content">
                <div className="row">
                <div className="col-lg-5 col-md-12 ps-xl-0 pe-xl-4">
                    <div className="about_left__section p_relative">
                    <div className="about__image__block">
                        <div className="inner__box">
                        <div className="image__box">
                            <figure className="image">
                            <img
                                src="assets/images/resource/about-four-01.png"
                                alt=""
                            />
                            </figure>
                        </div>
                        </div>
                        <div
                        className="about__two__expericence"
                        style={{
                            backgroundImage: "url(assets/images/shape/shape-42.png)"
                        }}
                        >
                        <div className="about__two__text">
                            <h2>20 </h2>
                            <span>Years of Expericence</span>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="col-lg-6 col-md-12 offset-lg-1 ps-xl-4">
                    <div className="about__three__left">
                    <div className="title">
                        <div className="sub__title">
                        <h6>About Rooftox</h6>
                        </div>
                        <div className="main__title">
                        <h2>
                            Experienced &amp; <br />
                            Quality More Than <br />
                            30 Years
                        </h2>
                        </div>
                    </div>
                    <div className="normal__text">
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Adipiscing integer ultrices suspendisse varius etiam est. Est,
                        felis, tempus nec vitae orci sodales Metus, velit nec at diam
                        in sed. Massa dui ipsum ornare sagittis dolor sagittis amet
                        odio est. Sit semper et velit fusce.
                        </p>
                    </div>
                    <div className="engineer__section">
                        <div className="engineer__section__top">
                        <div className="engineer__section__left">
                            <div className="engineer__content__img">
                            <figure className="image">
                                <img
                                src="assets/images/resource/about-four-02.png"
                                alt=""
                                />
                            </figure>
                            </div>
                        </div>
                        <div className="engineer__section__right">
                            <div className="engineer__content">
                            <div className="engineer__content__list">
                                <ul>
                                <li>
                                    <span className="icon-21" /> Innovative Work
                                    Experience
                                </li>
                                <li>
                                    <span className="icon-21" /> 100% Satisfaction
                                    Guarantee
                                </li>
                                <li>
                                    <span className="icon-21" /> Quality Expert Engineer
                                </li>
                                <li>
                                    <span className="icon-21" /> Roof Renovation
                                </li>
                                </ul>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="about__btn">
                        <Link className="btn-one" href="/about">
                            <em>
                            <i />
                            <i />
                            <i />
                            <i />
                            <i />
                            <i />
                            <i />
                            </em>
                            <span>Read More</span>
                        </Link>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </section>
        {/* about-section-end */}
        </>

    )
}
