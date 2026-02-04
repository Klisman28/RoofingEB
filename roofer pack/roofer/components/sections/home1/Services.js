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
                                                <span className="tab___all"> Roofing Services </span>
                                            </div>
                                        </li>
                                        <li className={activeIndex == 2 ? "tab-btn active-btn" : "tab-btn"} onClick={() => handleOnClick(2)}>
                                            <div className="inner__tab">
                                                <span className="tab___all"> Siding Installation</span>
                                            </div>
                                        </li>
                                        <li className={activeIndex == 3 ? "tab-btn active-btn" : "tab-btn"} onClick={() => handleOnClick(3)}>
                                            <div className="inner__tab">
                                                <span className="tab___all"> Window Replacement</span>
                                            </div>
                                        </li>
                                        <li className={activeIndex == 4 ? "tab-btn active-btn" : "tab-btn"} onClick={() => handleOnClick(4)}>
                                            <div className="inner__tab">
                                                <span className="tab___all"> Gutters & Skylights</span>
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
                                                                src="assets/images/service/roofing_services.jpg"
                                                                alt=""
                                                            />
                                                        </figure>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 col-md-12 ps-xl-4">
                                                    <div className="tab__right__content">
                                                        <h4>Roofing Services</h4>
                                                        <div className="tab__text">
                                                            <p>
                                                                We offer complete roofing solutions including asphalt shingle replacement,
                                                                flat rubber roofs (EPDM/TPO), and emergency leak repairs.
                                                                Our team ensures your home is protected with high-quality materials and expert installation.
                                                            </p>
                                                        </div>
                                                        <div className="tab__list one">
                                                            <ul>
                                                                <li>
                                                                    <span className="icon-21" /> Asphalt Shingles & Flat Roofs
                                                                </li>
                                                                <li>
                                                                    <span className="icon-21" /> 24/7 Emergency Repairs
                                                                </li>
                                                                <li>
                                                                    <span className="icon-21" /> Manufacturer Warranties
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
                                                                src="assets/images/service/siding_installation.jpg"
                                                                alt=""
                                                            />
                                                        </figure>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 col-md-12 px-xl-4">
                                                    <div className="tab__right__content">
                                                        <h4>Siding Installation</h4>
                                                        <div className="tab__text">
                                                            <p>
                                                                Transform the look of your home with our vinyl siding services.
                                                                We provide professional installation that improves energy efficiency
                                                                and curb appeal, using durability-tested products in various colors and styles.
                                                            </p>
                                                        </div>
                                                        <div className="tab__list">
                                                            <ul>
                                                                <li>
                                                                    <span className="icon-21" /> Vinyl Siding
                                                                </li>
                                                                <li>
                                                                    <span className="icon-21" /> Cedar Impressions
                                                                </li>
                                                                <li>
                                                                    <span className="icon-21" /> Expert Trim Work
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
                                                                src="assets/images/service/windwo_replacement.jpg"
                                                                alt=""
                                                            />
                                                        </figure>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 col-md-12 ps-xl-4">
                                                    <div className="tab__right__content">
                                                        <h4>Window Replacement</h4>
                                                        <div className="tab__text">
                                                            <p>
                                                                Upgrade to energy-efficient replacement windows to lower your heating
                                                                and cooling bills. We install high-performance windows that are easy to
                                                                operate, secure, and beautiful.
                                                            </p>
                                                        </div>
                                                        <div className="tab__list">
                                                            <ul>
                                                                <li>
                                                                    <span className="icon-21" /> Energy Efficient Glass
                                                                </li>
                                                                <li>
                                                                    <span className="icon-21" /> Double Hung & Casement
                                                                </li>
                                                                <li>
                                                                    <span className="icon-21" /> Professional Sealing
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
                                                                src="assets/images/service/Skylights&Chimneys.jpg"
                                                                alt=""
                                                            />
                                                        </figure>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 col-md-12 ps-xl-4">
                                                    <div className="tab__right__content">
                                                        <h4>Gutters & Skylights</h4>
                                                        <div className="tab__text">
                                                            <p>
                                                                Protect your foundation with seamless gutters and brighten your home with skylights.
                                                                We offer complete installation, repair, and cleaning services for all your
                                                                roof accessories.
                                                            </p>
                                                        </div>
                                                        <div className="tab__list">
                                                            <ul>
                                                                <li>
                                                                    <span className="icon-21" /> Seamless Gutters
                                                                </li>
                                                                <li>
                                                                    <span className="icon-21" /> Gutter Guards
                                                                </li>
                                                                <li>
                                                                    <span className="icon-21" /> Skylight Installation
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


















