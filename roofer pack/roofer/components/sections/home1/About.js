import Link from "next/link";

export default function About() {
    return (
        <>
            {/*about-section */}
            <section className="about__section p_relative">
                <div className="anim-icon">
                    <div className="parallax-scene parallax-scene-1" >
                        <div data-depth="0.30" className="icon layer-bg" style={{backgroundImage:'url(assets/images/icons/icon-01.svg)'}}></div>
                    </div>
                    <div className="parallax-scene parallax-scene-2" >
                        <div data-depth="0.30" className="icon layer-bg" style={{backgroundImage:'url(assets/images/icons/icon-01.svg)'}}></div>
                    </div>
                    <div className="icon icon-02 wow slideInRight animated" data-wow-delay="100ms" data-wow-duration="1500ms" style={{backgroundImage:'url(assets/images/shape/shape-12.png)'}}></div>
                    <div className="icon icon-03 wow slideInLeft animated" data-wow-delay="100ms" data-wow-duration="1500ms" style={{backgroundImage:'url(assets/images/shape/shape-13.png)'}}></div>
                </div>
                <div className="auto_container">
                    <div className="about__section__content">
                        <div className="row">
                            <div className="col-xl-6 col-lg-12 pe-xl-5">
                                <div className="about_left__section p_relative">
                                    <div className="row">
                                        <div className="col-lg-6 col-md-6 col-sm-12 pe-md-0 ps-xl-0">
                                            <div className="about__image__block one">
                                                <div className="inner__box">
                                                    <div className="image__box">
                                                        <figure className="image">
                                                            <img src="assets/images/resource/about-01.png" alt=""/>
                                                        </figure>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-12 pl-20 pe-xl-0 about__image__block__two">
                                            <div className="about__image__block">
                                                <div className="inner__box">
                                                    <div className="image__box">
                                                        <figure className="image">
                                                            <img src="assets/images/resource/about-02.png" alt=""/>
                                                        </figure>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="about__image__block  pt-20">
                                                <div className="inner__box">
                                                    <div className="image__box">
                                                        <figure className="image">
                                                            <img src="assets/images/resource/about-03.png" alt=""/>
                                                        </figure>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="expericence" style={{backgroundImage:'url(assets/images/shape/shape-14.png)'}}>
                                        <div className="expericence__text">
                                            <h2>20 </h2>
                                            <span>Years of Expericence</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-12 ps-xl-5">
                                <div className="about__right__section">
                                    <div className="title">
                                        <div className="sub__title">
                                            <h6>About Rooftox</h6>
                                        </div>
                                        <div className="main__title">
                                            <h2>Experienced &amp; <br/>
                                                Quality More Than <br/>
                                                30 Years</h2>
                                        </div>
                                    </div>
                                    <div className="normal__text">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing integer
                                            ultrices suspendisse varius etiam est. Est, felis, tempus nec vitae orci sodales
                                            Metus, velit nec at diam in sed. Massa dui ipsum ornare sagittis dolor sagittis
                                            amet odio est. Sit semper et velit fusce.</p>
                                    </div>
                                    <div className="engineer__section">
                                        <div className="row">
                                            <div className="col-xl-6 col-lg-12">
                                                <div className="engineer__content">
                                                    <div className="engineer__icon">
                                                        <span className="icon-20"></span>
                                                    </div>
                                                    <div className="engineer__text">
                                                        <h5> Quality Materials</h5>
                                                        <p> Amet minim mollit deserunt
                                                        ulamco sit enim.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-6 col-lg-12">
                                                <div className="engineer__content">
                                                    <div className="engineer__icon">
                                                        <span className="icon-7"></span>
                                                    </div>
                                                    <div className="engineer__text">
                                                        <h5> Expert Engineer</h5>
                                                        <p> Amet minim mollit deserunt
                                                        ulamco sit enim.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="about__btn">
                                            <Link className="btn-one" href="/about">
                                                <em>
                                                    <i></i>
                                                    <i></i>
                                                    <i></i>
                                                    <i></i>
                                                    <i></i>
                                                    <i></i>
                                                    <i></i>
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
            {/*about-section-end */}
        </>
    )
}
