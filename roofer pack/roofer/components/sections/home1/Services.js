'use client'
import Link from "next/link"
import { useState } from "react"


export default function Services() {
    const [activeIndex, setActiveIndex] = useState(1)
    const handleOnClick = (index) => {
        setActiveIndex(index)
    }
    return (
        <>
        {/* service-section */}
        <section className="service__section see__pad">
            <div className="service__content p_relative">
                <div className="anim-icon">
                    <div
                    className="icon icons-1"
                    data-parallax='{"x": 100}'
                    style={{ backgroundImage: "url(assets/images/shape/shape-15.png)" }}
                    />
                    <div
                    className="icon icons-2"
                    data-parallax='{"x": -100}'
                    style={{ backgroundImage: "url(assets/images/shape/shape-16.png)" }}
                    />
                </div>
                <div className="auto_container">
                    <div className="title text-center">
                    <div className="sub__title">
                        <h6>Our Services</h6>
                    </div>
                    <div className="main__title">
                        <h2>
                        We’re Prodviding Quality <br />
                        Roofing Services
                        </h2>
                    </div>
                    </div>
                    <div className="service__tab__section">
                    <div className="tabs-box">
                        <div className="tab-btn-box p_relative">
                        <ul className="tab-btns tab-buttons clearfix">
                                <li className={activeIndex == 1 ? "tab-btn active-btn" : "tab-btn"} onClick={() => handleOnClick(1)}>
                                    <div className="inner__tab">
                                        <span className="tab___all"> Roofing Layer </span>
                                    </div>
                                </li>
                                <li className={activeIndex == 2 ? "tab-btn active-btn" : "tab-btn"} onClick={() => handleOnClick(2)}>
                                    <div className="inner__tab">
                                        <span className="tab___all"> Damage Repair</span>
                                    </div>
                                </li>
                                <li className={activeIndex == 3 ? "tab-btn active-btn" : "tab-btn"} onClick={() => handleOnClick(3)}>
                                    <div className="inner__tab">
                                        <span className="tab___all"> Roof Cornering</span>
                                    </div>
                                </li>
                                <li className={activeIndex == 4 ? "tab-btn active-btn" : "tab-btn"} onClick={() => handleOnClick(4)}>
                                    <div className="inner__tab">
                                        <span className="tab___all"> Siding Install</span>
                                    </div>
                                </li>
                        </ul>
                                
                        </div>
                        <div
                        className="tabs-content wow fadeInUp animated animated"
                        data-wow-delay="00ms"
                        data-wow-duration="1500ms"
                        style={{
                            visibility: "visible",
                            animationDuration: "1500ms",
                            animationDelay: "0ms",
                            animationName: "fadeInUp"
                        }}
                        >
                            <div className="tab-content wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1200ms">
                                <div className={activeIndex == 1 ? "tab-pane fadeInUp animated show active" : "tab-pane fadeInUp animated"}>                               
                                    <div className="row clearfix">
                                        <div className="col-lg-6 col-md-12 pe-xl-4">
                                            <div className="tab__left__content">
                                            <figure className="image">
                                                <img
                                                src="assets/images/resource/service-01.png"
                                                alt=""
                                                />
                                            </figure>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-12 ps-xl-4">
                                            <div className="tab__right__content">
                                            <h4>Roofing Layer</h4>
                                            <div className="tab__text">
                                                <p>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing
                                                elit. Adipiscing integer ultrices suspendisse varius
                                                etiam est. Est, felis, tempus nec vitae orci sodales
                                                Metus, velit nec at diam in sed. Massa dui ipsum
                                                ornare sagittis dolor sagittis amet odio est. Sit
                                                semper et velit fusce.
                                                </p>
                                            </div>
                                            <div className="tab__list one">
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
                                                </ul>
                                            </div>
                                            <div className="tab__btn">
                                                <Link className="btn-one two" href="/service">
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
                                <div className={activeIndex == 2 ? "tab-pane fadeInUp animated show active" : "tab-pane fadeInUp animated"}>
                                    <div className="row clearfix">
                                        <div className="col-lg-6 col-md-12 pe-xl-4">
                                            <div className="tab__left__content">
                                            <figure className="image">
                                                <img
                                                src="assets/images/resource/service-02.png"
                                                alt=""
                                                />
                                            </figure>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-12 px-xl-4">
                                            <div className="tab__right__content">
                                            <h4>Damage Repair</h4>
                                            <div className="tab__text">
                                                <p>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing
                                                elit. Adipiscing integer ultrices suspendisse varius
                                                etiam est. Est, felis, tempus nec vitae orci sodales
                                                Metus, velit nec at diam in sed. Massa dui ipsum
                                                ornare sagittis dolor sagittis amet odio est. Sit
                                                semper et velit fusce.
                                                </p>
                                            </div>
                                            <div className="tab__list">
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
                                                </ul>
                                            </div>
                                            <div className="tab__btn">
                                                <Link className="btn-one" href="/service">
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
                                <div className={activeIndex == 3 ? "tab-pane fadeInUp animated show active" : "tab-pane fadeInUp animated"}>
                                    <div className="row clearfix">
                                        <div className="col-lg-6 col-md-12 pe-xl-4">
                                            <div className="tab__left__content">
                                            <figure className="image">
                                                <img
                                                src="assets/images/resource/service-03.png"
                                                alt=""
                                                />
                                            </figure>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-12 ps-xl-4">
                                            <div className="tab__right__content">
                                            <h4>Roof Cornering</h4>
                                            <div className="tab__text">
                                                <p>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing
                                                elit. Adipiscing integer ultrices suspendisse varius
                                                etiam est. Est, felis, tempus nec vitae orci sodales
                                                Metus, velit nec at diam in sed. Massa dui ipsum
                                                ornare sagittis dolor sagittis amet odio est. Sit
                                                semper et velit fusce.
                                                </p>
                                            </div>
                                            <div className="tab__list">
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
                                                </ul>
                                            </div>
                                            <div className="tab__btn">
                                                <Link className="btn-one" href="/service">
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
                                <div className={activeIndex == 4 ? "tab-pane fadeInUp animated show active" : "tab-pane fadeInUp animated"}>
                                    <div className="row clearfix">
                                    <div className="col-lg-6 col-md-12 pe-xl-4">
                                        <div className="tab__left__content">
                                        <figure className="image">
                                            <img
                                            src="assets/images/resource/service-04.png"
                                            alt=""
                                            />
                                        </figure>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-12 ps-xl-4">
                                        <div className="tab__right__content">
                                        <h4>Siding Install</h4>
                                        <div className="tab__text">
                                            <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing
                                            elit. Adipiscing integer ultrices suspendisse varius
                                            etiam est. Est, felis, tempus nec vitae orci sodales
                                            Metus, velit nec at diam in sed. Massa dui ipsum
                                            ornare sagittis dolor sagittis amet odio est. Sit
                                            semper et velit fusce.
                                            </p>
                                        </div>
                                        <div className="tab__list">
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
                                            </ul>
                                        </div>
                                        <div className="tab__btn">
                                            <Link className="btn-one" href="/service">
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
                    </div>
                    </div>
                </div>
            </div>
        </section>
        {/* service-section-end */}
        </>
    )
}

















            
