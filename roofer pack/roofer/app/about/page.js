'use client'
import Layout from "@/components/layout/Layout"
import CounterUp from "@/components/elements/CounterUp"
import TestimonialSlider5 from '@/components/slider/TestimonialSlider5'
import Link from "next/link"
import { useState } from 'react'
export default function Home() {
   
    const [activeIndex, setActiveIndex] = useState(1)
    const handleOnClick = (index) => {
        setActiveIndex(index)
    }

    return (
        <>
            <Layout headerStyle={4} footerStyle={2} breadcrumbTitle="About Us">
                <div>
                
                {/* about-section-three */}
                <section className="about__section__three see__pad">
                    <div className="about__three">
                    <div className="auto_container">
                        <div className="row">
                        <div className="col-lg-6 col-md-12 pe-lg-5">
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
                                <div className="row">
                                <div className="col-xl-6 col-lg-12">
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
                                        </ul>
                                    </div>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-12">
                                    <div className="engineer__content">
                                    <div className="engineer__content__list">
                                        <ul>
                                        <li>
                                            <span className="icon-21" /> Certified Company
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
                        <div className="col-lg-6 col-md-12 p_relative ps-lg-5">
                            <div className="about__three__right">
                            <div className="anim-icon">
                                <div className="parallax-scene parallax-scene-7">
                                <div
                                    data-depth="0.30"
                                    className="icon layer-bg"
                                    style={{
                                    backgroundImage: "url(assets/images/icons/icon-02.svg)"
                                    }}
                                />
                                </div>
                            </div>
                            <div className="one__img">
                                <div className="inner_box">
                                <div className="image_box">
                                    <figure
                                    className="image wow zoomIn animated"
                                    data-wow-delay="00ms"
                                    data-wow-duration="1500ms"
                                    >
                                    <img
                                        src="assets/images/resource/about-three-01.png"
                                        alt=""
                                    />
                                    </figure>
                                </div>
                                </div>
                            </div>
                            <div className="two__img p_absolute">
                                <img src="assets/images/resource/about-three-02.png" alt="" />
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
                    </div>
                    </div>
                </section>
                {/* about-section-three-end */}

                {/* history-section */}
                <section className="history__section p_relative see__pad">
                    <div className="history__tab">
                    <div className="auto_container">
                        <div className="title text-center">
                        <div className="sub__title">
                            <h6>History</h6>
                        </div>
                        <div className="main__title">
                            <h2> Roofing Service History </h2>
                        </div>
                        </div>
                        <div className="hisyory__tab__section">
                        <div className="tabs-box">
                            <div className="tab-btn-box p_relative">
                            <ul className="tab-btns tab-buttons clearfix">
                                <li className={activeIndex == 1 ? "tab-btn active-btn" : "tab-btn"} onClick={() => handleOnClick(1)}>
                                <span className="tab___btn"> 1998 </span>
                                </li>
                                <li className={activeIndex == 2 ? "tab-btn active-btn" : "tab-btn"} onClick={() => handleOnClick(2)}>
                                <span className="tab___btn"> 2005</span>
                                </li>
                                <li className={activeIndex == 3 ? "tab-btn active-btn" : "tab-btn"} onClick={() => handleOnClick(3)}>
                                <span className="tab___btn"> 2010 </span>
                                </li>
                                <li className={activeIndex == 4 ? "tab-btn active-btn" : "tab-btn"} onClick={() => handleOnClick(4)}>
                                <span className="tab___btn"> 2015 </span>
                                </li>
                                <li className={activeIndex == 5 ? "tab-btn active-btn" : "tab-btn"} onClick={() => handleOnClick(5)}>
                                <span className="tab___btn"> 2020 </span>
                                </li>
                                <li className={activeIndex == 6 ? "tab-btn active-btn" : "tab-btn"} onClick={() => handleOnClick(6)}>
                                <span className="tab___btn"> 2022 </span>
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
                                    <div className="row">
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
                                        <div className="tab__list">
                                            <ul>
                                            <li>
                                                <span className="icon-21" /> Innovative Work
                                                Experience{" "}
                                            </li>
                                            <li>
                                                <span className="icon-21" /> 100% Satisfaction
                                                Guarantee{" "}
                                            </li>
                                            <li>
                                                <span className="icon-21" /> Quality Expert Engineer{" "}
                                            </li>
                                            <li>
                                                <span className="icon-21" /> Certified Company{" "}
                                            </li>
                                            <li>
                                                <span className="icon-21" /> Roof Renovation{" "}
                                            </li>
                                            </ul>
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                <div className={activeIndex == 2 ? "tab-pane fadeInUp animated show active" : "tab-pane fadeInUp animated"}>
                                    <div className="row">
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
                                                Experience{" "}
                                            </li>
                                            <li>
                                                <span className="icon-21" /> 100% Satisfaction
                                                Guarantee{" "}
                                            </li>
                                            <li>
                                                <span className="icon-21" /> Quality Expert Engineer{" "}
                                            </li>
                                            <li>
                                                <span className="icon-21" /> Certified Company{" "}
                                            </li>
                                            <li>
                                                <span className="icon-21" /> Roof Renovation{" "}
                                            </li>
                                            </ul>
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                <div className={activeIndex == 3 ? "tab-pane fadeInUp animated show active" : "tab-pane fadeInUp animated"}>
                                    <div className="row">
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
                                                Experience{" "}
                                            </li>
                                            <li>
                                                <span className="icon-21" /> 100% Satisfaction
                                                Guarantee{" "}
                                            </li>
                                            <li>
                                                <span className="icon-21" /> Quality Expert Engineer{" "}
                                            </li>
                                            <li>
                                                <span className="icon-21" /> Certified Company{" "}
                                            </li>
                                            <li>
                                                <span className="icon-21" /> Roof Renovation{" "}
                                            </li>
                                            </ul>
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                <div className={activeIndex == 4 ? "tab-pane fadeInUp animated show active" : "tab-pane fadeInUp animated"}>
                                    <div className="row">
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
                                                Experience{" "}
                                            </li>
                                            <li>
                                                <span className="icon-21" /> 100% Satisfaction
                                                Guarantee{" "}
                                            </li>
                                            <li>
                                                <span className="icon-21" /> Quality Expert Engineer{" "}
                                            </li>
                                            <li>
                                                <span className="icon-21" /> Certified Company{" "}
                                            </li>
                                            <li>
                                                <span className="icon-21" /> Roof Renovation{" "}
                                            </li>
                                            </ul>
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                <div className={activeIndex == 5 ? "tab-pane fadeInUp animated show active" : "tab-pane fadeInUp animated"}>
                                    <div className="row">
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
                                        <h4>Opening Year of History</h4>
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
                                                Experience{" "}
                                            </li>
                                            <li>
                                                <span className="icon-21" /> 100% Satisfaction
                                                Guarantee{" "}
                                            </li>
                                            <li>
                                                <span className="icon-21" /> Quality Expert Engineer{" "}
                                            </li>
                                            <li>
                                                <span className="icon-21" /> Certified Company{" "}
                                            </li>
                                            <li>
                                                <span className="icon-21" /> Roof Renovation{" "}
                                            </li>
                                            </ul>
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                <div className={activeIndex == 6 ? "tab-pane fadeInUp animated show active" : "tab-pane fadeInUp animated"}>
                                    <div className="row">
                                    <div className="col-lg-6 col-md-12 pe-xl-4">
                                        <div className="tab__left__content">
                                        <figure className="image">
                                            <img
                                            src="assets/images/resource/service-05.png"
                                            alt=""
                                            />
                                        </figure>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-12 ps-xl-4">
                                        <div className="tab__right__content">
                                        <h4>Opening Year of RoofTox</h4>
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
                                                Experience{" "}
                                            </li>
                                            <li>
                                                <span className="icon-21" /> 100% Satisfaction
                                                Guarantee{" "}
                                            </li>
                                            <li>
                                                <span className="icon-21" /> Quality Expert Engineer{" "}
                                            </li>
                                            <li>
                                                <span className="icon-21" /> Certified Company{" "}
                                            </li>
                                            <li>
                                                <span className="icon-21" /> Roof Renovation{" "}
                                            </li>
                                            </ul>
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
                {/* history-section-end */}
                
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
                                <p>Project Complete</p>
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

                {/* choose-section-two */}
                <section className="choose__two see__pad p_relative">
                    <div className="choose__two__content">
                    <div className="anim-icon">
                        <div
                        className="icon icons-01"
                        style={{ backgroundImage: "url(assets/images/shape/shape-36.png)" }}
                        />
                        <div
                        className="icon icons-02"
                        style={{ backgroundImage: "url(assets/images/shape/shape-37.png)" }}
                        />
                    </div>
                    <div className="auto_container">
                        <div className="row">
                        <div className="col-lg-6 col-md-12 pe-lg-5">
                            <div className="choose__two__left">
                            <div className="title">
                                <div className="sub__title">
                                <h6>Why Choose Rooftox</h6>
                                </div>
                                <div className="main__title">
                                <h2>
                                    Why Choose RoofTox <br /> For Roofing
                                </h2>
                                </div>
                            </div>
                            <div className="roofer__two__text">
                                <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Adipiscing integer ultrices suspendisse varius etiam est. Est,
                                felis, tempus nec vitae orci sodales Metus, velit nec at diam
                                in sed. Massa dui ipsum ornare sagittis dolor sagittis amet
                                odio est. Sit semper et velit fusce.
                                </p>
                            </div>
                            <div className="roofer__list__content">
                                <div className="row">
                                <div className="col-xl-6 col-lg-12">
                                    <div className="roofer__two__list">
                                    <ul>
                                        <li>
                                        <span className="icon-41" /> Expert Engineers
                                        </li>
                                        <li>
                                        <span className="icon-41" /> Award Wining Company
                                        </li>
                                        <li>
                                        <span className="icon-41" /> Required Works
                                        </li>
                                    </ul>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-12">
                                    <div className="roofer__two__list">
                                    <ul>
                                        <li>
                                        <span className="icon-41" /> Quality Materials
                                        </li>
                                        <li>
                                        <span className="icon-41" /> Fully insured
                                        </li>
                                    </ul>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <div
                            className="choose__two__right wow zoomIn animated"
                            data-wow-delay="100ms"
                            data-wow-duration="1500ms"
                            >
                            <figure className="image">
                                <img src="assets/images/resource/choose-two.png" alt="" />
                            </figure>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </section>
                {/* choose-section-two-end */}

                {/* team-section */}
                <section className="team__section three about__page p_relative see__pad">
                    <div className="auto_container">
                    <div className="title text-center">
                        <div className="sub__title">
                        <h6>Expert Team</h6>
                        </div>
                        <div className="main__title">
                        <h2>
                            We Have A Professional <br /> Team Member
                        </h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-sm-12">
                        <div className="team_block_one">
                            <div className="inner_box hover_three">
                            <div className="image_box p_relative">
                                <figure className="image">
                                <img src="assets/images/team/team-06.png" alt="" />
                                </figure>
                                <div className="overlay">
                                <div className="inner__box">
                                    <ul className="social_links">
                                    <li>
                                        <Link href="/">
                                        <span className="icon-2" />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/">
                                        <span className="icon-1" />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/">
                                        <span className="icon-23" />
                                        </Link>
                                    </li>
                                    </ul>
                                </div>
                                </div>
                            </div>
                            <div className="lower_content__two">
                                <div className="team_info">
                                <h4>
                                    <Link href="/team-details">Brooklyn Simmons</Link>
                                </h4>
                                <span className="designation">Founder</span>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12">
                        <div className="team_block_one">
                            <div className="inner_box hover_three">
                            <div className="image_box p_relative">
                                <figure className="image">
                                <img src="assets/images/team/team-07.png" alt="" />
                                </figure>
                                <div className="overlay">
                                <div className="inner_box">
                                    <ul className="social_links">
                                    <li>
                                        <Link href="/">
                                        <span className="icon-2" />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/">
                                        <span className="icon-1" />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/">
                                        <span className="icon-23" />
                                        </Link>
                                    </li>
                                    </ul>
                                </div>
                                </div>
                            </div>
                            <div className="lower_content__two">
                                <div className="team_info">
                                <h4>
                                    <Link href="/team-details">Guy Hawkins</Link>
                                </h4>
                                <span className="designation">Worker</span>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12">
                        <div className="team_block_one">
                            <div className="inner_box hover_three">
                            <div className="image_box p_relative">
                                <figure className="image">
                                <img src="assets/images/team/team-05.png" alt="" />
                                </figure>
                                <div className="overlay">
                                <div className="inner_box">
                                    <ul className="social_links">
                                    <li>
                                        <Link href="/">
                                        <span className="icon-2" />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/">
                                        <span className="icon-1" />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/">
                                        <span className="icon-23" />
                                        </Link>
                                    </li>
                                    </ul>
                                </div>
                                </div>
                            </div>
                            <div className="lower_content__two">
                                <div className="team_info">
                                <h4>
                                    <Link href="/team-details">Cody Fisher</Link>
                                </h4>
                                <span className="designation">Consultant</span>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12">
                        <div className="team_block_one">
                            <div className="inner_box hover_three">
                            <div className="image_box p_relative">
                                <figure className="image">
                                <img src="assets/images/team/team-04.png" alt="" />
                                </figure>
                                <div className="overlay">
                                <div className="inner_box">
                                    <ul className="social_links">
                                    <li>
                                        <Link href="/">
                                        <span className="icon-2" />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/">
                                        <span className="icon-1" />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/">
                                        <span className="icon-23" />
                                        </Link>
                                    </li>
                                    </ul>
                                </div>
                                </div>
                            </div>
                            <div className="lower_content__two">
                                <div className="team_info">
                                <h4>
                                    <Link href="/team-details">Mathim Moni</Link>
                                </h4>
                                <span className="designation">CTO</span>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </section>
                {/* team-section-end */}

                {/* testimonials-about */}
                <section className="testimonials__about see__pad">
                    <div className="about__testimonials">
                    <div className="auto_container">
                        <div className="testimonials__about__top">
                        <div className="row">
                            <div className="col-lg-6 col-md-12">
                            <div className="title">
                                <div className="sub__title">
                                <h6>Testimonials </h6>
                                </div>
                                <div className="main__title">
                                <h2>
                                    {" "}
                                    What People’s Say About <br /> Rooftox
                                </h2>
                                </div>
                            </div>
                            </div>
                            <div className="col-lg-4 col-md-12 normal__text__bottom">
                            <div className="normal__text">
                                <p>
                                Blandit aliquet varius id malsua nun tempor malesuada
                                sollicitudin sit tell dignissim lacinia.
                                </p>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="testimonials__slider__about">
                            <TestimonialSlider5/>
                        </div>
                    </div>
                    </div>
                </section>
                {/* testimonials-about end */}
                {/* news-letter */}
                <section className="news_letter">
                    <div className="auto_container">
                    <div className="news_letter_content">
                        <div className="row">
                        <div className="col-lg-6">
                            <div className="news_letter_left p_relative">
                            <h3>Our Newsletters</h3>
                            <div className="form-inner p_relative">
                                <form
                                action="/"
                                method="post"
                                className="subscribe-form"
                                >
                                <div className="form-group">
                                    <input
                                    type="email"
                                    name="email"
                                    placeholder="Your email"
                                    required=""
                                    />
                                    <button type="submit" className="btn-two">
                                    Subscribe Now
                                    </button>
                                </div>
                                </form>
                            </div>
                            </div>
                        </div>
                        <div className="col-lg-6 ps-xl-0">
                            <div className="news_letter_right p_relative">
                            <div
                                className="image_layer shape_01"
                                style={{
                                backgroundImage: "url(assets/images/shape/shape-03.png)"
                                }}
                            >
                                {" "}
                            </div>
                            <div className="news_letter_image">
                                <figure className="image">
                                <img src="assets/images/resource/news-letter.png" alt="" />
                                </figure>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </section>
                {/* news-letter-end */}



                </div>

            </Layout>
        </>
    )
}