
'use client'
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { useState } from 'react'
export default function Home() {
    const [isActive, setIsActive] = useState({
        status: false,
        key: 1,
    })

    const handleToggle = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
            })
        } else {
            setIsActive({
                status: true,
                key,
            })
        }
    }

    return (
        <>
            <Layout headerStyle={4} footerStyle={1} breadcrumbTitle="Services Single">
                <div>
                {/*service-single-page */}
                <section className="service__single see__pad p_relative">
                    <div className="auto_container">
                        <div className="row">
                            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                                <div className="service__single__block">
                                    <div className="inner__content__four">
                                        <div className="service__content__four">
                                            <div className="image_layer">
                                                <div className="image__hover__bg__one" style={{backgroundImage: 'url(assets/images/shape/shape-53.png)'}}></div>
                                                <div className="image__hover__bg__two" style={{backgroundImage: 'url(assets/images/shape/shape-51.png)'}}></div>
                                            </div>
                                            <div className="lower__content__four">
                                                <div className="icon__box p_ralative">
                                                    <div className="icon__hover__bg__one" style={{backgroundImage: 'url(assets/images/shape/shape-49.png)'}}></div>
                                                    <div className="icon__hover__bg__two" style={{backgroundImage: 'url(assets/images/shape/shape-49.png)'}}></div>
                                                    <div className="icon__outer">
                                                        <div className="icon__bg">
                                                            <span className="icon-27"></span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="service__text">
                                                    <h4><Link href="/services-details">Roofing Layer</Link></h4>
                                                    <p>Suspendisse varius etiam est
                                                        tempus nec vitae orci sodales
                                                        nec at diam in sed.</p>
                                                </div>
                                                <div className="more__btn">
                                                    <Link href="/services-details">Read More <span className="icon-53"></span> <span className="icon-52"></span></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                                <div className="service__single__block">
                                    <div className="inner__content__four">
                                        <div className="service__content__four">
                                            <div className="image_layer">
                                                <div className="image__hover__bg__one" style={{backgroundImage: 'url(assets/images/shape/shape-53.png)'}}></div>
                                                <div className="image__hover__bg__two" style={{backgroundImage: 'url(assets/images/shape/shape-51.png)'}}></div>
                                            </div>
                                            <div className="lower__content__four">
                                                <div className="icon__box p_ralative">
                                                    <div className="icon__hover__bg__one" style={{backgroundImage: 'url(assets/images/shape/shape-49.png)'}}></div>
                                                    <div className="icon__hover__bg__two" style={{backgroundImage: 'url(assets/images/shape/shape-49.png)'}}></div>
                                                    <div className="icon__outer">
                                                        <div className="icon__bg">
                                                            <span className="icon-8"></span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="service__text">
                                                    <h4><Link href="/services-details">Damage Repair</Link></h4>
                                                    <p>Suspendisse varius etiam est
                                                        tempus nec vitae orci sodales
                                                        nec at diam in sed.</p>
                                                </div>
                                                <div className="more__btn">
                                                    <Link href="/services-details">Read More <span className="icon-53"></span> <span className="icon-52"></span></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                                <div className="service__single__block">
                                    <div className="inner__content__four">
                                        <div className="service__content__four">
                                            <div className="image_layer">
                                                <div className="image__hover__bg__one" style={{backgroundImage: 'url(assets/images/shape/shape-53.png)'}}></div>
                                                <div className="image__hover__bg__two" style={{backgroundImage: 'url(assets/images/shape/shape-51.png)'}}></div>
                                            </div>
                                            <div className="lower__content__four">
                                                <div className="icon__box p_ralative">
                                                    <div className="icon__hover__bg__one" style={{backgroundImage: 'url(assets/images/shape/shape-49.png)'}}></div>
                                                    <div className="icon__hover__bg__two" style={{backgroundImage: 'url(assets/images/shape/shape-49.png)'}}></div>
                                                    <div className="icon__outer">
                                                        <div className="icon__bg">
                                                            <span className="icon-14"></span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="service__text">
                                                    <h4><Link href="/services-details">Roof Cornering</Link></h4>
                                                    <p>Suspendisse varius etiam est
                                                        tempus nec vitae orci sodales
                                                        nec at diam in sed.</p>
                                                </div>
                                                <div className="more__btn">
                                                    <Link href="/services-details">Read More <span className="icon-53"></span> <span className="icon-52"></span></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                                <div className="service__single__block">
                                    <div className="inner__content__four">
                                        <div className="service__content__four">
                                            <div className="image_layer">
                                                <div className="image__hover__bg__one" style={{backgroundImage: 'url(assets/images/shape/shape-53.png)'}}></div>
                                                <div className="image__hover__bg__two" style={{backgroundImage: 'url(assets/images/shape/shape-51.png)'}}></div>
                                            </div>
                                            <div className="lower__content__four">
                                                <div className="icon__box p_ralative">
                                                    <div className="icon__hover__bg__one" style={{backgroundImage: 'url(assets/images/shape/shape-49.png)'}}></div>
                                                    <div className="icon__hover__bg__two" style={{backgroundImage: 'url(assets/images/shape/shape-49.png)'}}></div>
                                                    <div className="icon__outer">
                                                        <div className="icon__bg">
                                                            <span className="icon-31"></span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="service__text">
                                                    <h4><Link href="/services-details">Siding Install</Link></h4>
                                                    <p>Suspendisse varius etiam est
                                                        tempus nec vitae orci sodales
                                                        nec at diam in sed.</p>
                                                </div>
                                                <div className="more__btn">
                                                    <Link href="/services-details">Read More <span className="icon-53"></span> <span className="icon-52"></span></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                                <div className="service__single__block">
                                    <div className="inner__content__four">
                                        <div className="service__content__four">
                                            <div className="image_layer">
                                                <div className="image__hover__bg__one" style={{backgroundImage: 'url(assets/images/shape/shape-53.png)'}}></div>
                                                <div className="image__hover__bg__two" style={{backgroundImage: 'url(assets/images/shape/shape-51.png)'}}></div>
                                            </div>
                                            <div className="lower__content__four">
                                                <div className="icon__box p_ralative">
                                                    <div className="icon__hover__bg__one" style={{backgroundImage: 'url(assets/images/shape/shape-49.png)'}}></div>
                                                    <div className="icon__hover__bg__two" style={{backgroundImage: 'url(assets/images/shape/shape-49.png)'}}></div>
                                                    <div className="icon__outer">
                                                        <div className="icon__bg">
                                                            <span className="icon-32"></span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="service__text">
                                                    <h4><Link href="/services-details">Corner Fixing</Link></h4>
                                                    <p>Suspendisse varius etiam est
                                                        tempus nec vitae orci sodales
                                                        nec at diam in sed.</p>
                                                </div>
                                                <div className="more__btn">
                                                    <Link href="/services-details">Read More <span className="icon-53"></span> <span className="icon-52"></span></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                                <div className="service__single__block">
                                    <div className="inner__content__four">
                                        <div className="service__content__four">
                                            <div className="image_layer">
                                                <div className="image__hover__bg__one" style={{backgroundImage: 'url(assets/images/shape/shape-53.png)'}}></div>
                                                <div className="image__hover__bg__two" style={{backgroundImage: 'url(assets/images/shape/shape-51.png)'}}></div>
                                            </div>
                                            <div className="lower__content__four">
                                                <div className="icon__box p_ralative">
                                                    <div className="icon__hover__bg__one" style={{backgroundImage: 'url(assets/images/shape/shape-49.png)'}}></div>
                                                    <div className="icon__hover__bg__two" style={{backgroundImage: 'url(assets/images/shape/shape-49.png)'}}></div>
                                                    <div className="icon__outer">
                                                        <div className="icon__bg">
                                                            <span className="icon-33"></span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="service__text">
                                                    <h4><Link href="/services-details">Metal Roofing</Link></h4>
                                                    <p>Suspendisse varius etiam est
                                                        tempus nec vitae orci sodales
                                                        nec at diam in sed.</p>
                                                </div>
                                                <div className="more__btn">
                                                    <Link href="/services-details">Read More <span className="icon-53"></span> <span className="icon-52"></span></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                                <div className="service__single__block">
                                    <div className="inner__content__four">
                                        <div className="service__content__four">
                                            <div className="image_layer">
                                                <div className="image__hover__bg__one" style={{backgroundImage: 'url(assets/images/shape/shape-53.png)'}}></div>
                                                <div className="image__hover__bg__two" style={{backgroundImage: 'url(assets/images/shape/shape-51.png)'}}></div>
                                            </div>
                                            <div className="lower__content__four">
                                                <div className="icon__box p_ralative">
                                                    <div className="icon__hover__bg__one" style={{backgroundImage: 'url(assets/images/shape/shape-49.png)'}}></div>
                                                    <div className="icon__hover__bg__two" style={{backgroundImage: 'url(assets/images/shape/shape-49.png)'}}></div>
                                                    <div className="icon__outer">
                                                        <div className="icon__bg">
                                                            <span className="icon-28"></span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="service__text">
                                                    <h4><Link href="/services-details">Roof Renovation</Link></h4>
                                                    <p>Suspendisse varius etiam est
                                                        tempus nec vitae orci sodales
                                                        nec at diam in sed.</p>
                                                </div>
                                                <div className="more__btn">
                                                    <Link href="/services-details">Read More <span className="icon-53"></span> <span className="icon-52"></span></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                                <div className="service__single__block">
                                    <div className="inner__content__four">
                                        <div className="service__content__four">
                                            <div className="image_layer">
                                                <div className="image__hover__bg__one" style={{backgroundImage: 'url(assets/images/shape/shape-53.png)'}}></div>
                                                <div className="image__hover__bg__two" style={{backgroundImage: 'url(assets/images/shape/shape-51.png)'}}></div>
                                            </div>
                                            <div className="lower__content__four">
                                                <div className="icon__box p_ralative">
                                                    <div className="icon__hover__bg__one" style={{backgroundImage: 'url(assets/images/shape/shape-49.png)'}}></div>
                                                    <div className="icon__hover__bg__two" style={{backgroundImage: 'url(assets/images/shape/shape-49.png)'}}></div>
                                                    <div className="icon__outer">
                                                        <div className="icon__bg">
                                                            <span className="icon-20"></span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="service__text">
                                                    <h4><Link href="/services-details">Roof Animation</Link></h4>
                                                    <p>Suspendisse varius etiam est
                                                        tempus nec vitae orci sodales
                                                        nec at diam in sed.</p>
                                                </div>
                                                <div className="more__btn">
                                                    <Link href="/services-details">Read More <span className="icon-53"></span> <span className="icon-52"></span></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </section>
                {/*ervice-single-page-end */}

                {/* faq-section */}
                <section className="faq__section page service see__pad p_relative">
                    <div className="anim-icon">
                    <div className="parallax-scene parallax-scene-6">
                        <div
                        data-depth="0.30"
                        className="icon layer-bg"
                        style={{ backgroundImage: "url(assets/images/icons/icon-01.svg)" }}
                        />
                    </div>
                    <div
                        className="icon icons-2 "
                        data-parallax='{"x": 100}'
                        style={{ backgroundImage: "url(assets/images/shape/shape-39.png)" }}
                    />
                    </div>
                    <div className="faq__content">
                    <div className="auto_container">
                        <div className="row">
                        <div className="col-lg-6 col-md-12">
                            <div
                            className="faq__left__content wow slideInUp animated"
                            data-wow-delay="100ms"
                            data-wow-duration="1500ms"
                            >
                            <figure className="image">
                                <img src="assets/images/resource/faq.png" alt="" />
                            </figure>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <div className="faq__right__section">
                            <div className="tab__content">
                                <div className="title">
                                <div className="sub__title">
                                    <h6>Faq’s</h6>
                                </div>
                                <div className="main__title">
                                    <h2>
                                    {" "}
                                    Frequently Asked <br />
                                    Question{" "}
                                    </h2>
                                </div>
                                </div>
                                <div className="tab__text">
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipiscing elit.
                                    Adipiscing integer ultrices suspendisse varius etiam est.
                                </p>
                                </div>
                            </div>
                            <div className="faq-content-box">
                                <div className="accordion-box-style1">
                                {/*Start single accordion box*/}
                                <div className="accordion accordion-block">
                                    <div className={isActive.key == 1 ? "accord-btn active" : "accord-btn"} onClick={() => handleToggle(1)}>
                                    <h5>
                                        <span>Q.</span> How Can I Take Your Service?
                                    </h5>
                                    <div className="collapse-icon">
                                        <div className="plus">
                                        <span className="icon-44" />
                                        </div>
                                        <div className="minace">
                                        <span className="icon-56" />
                                        </div>
                                    </div>
                                    </div>
                                    <div className={isActive.key == 1 ? "accord-content collapsed" : "accord-content"}>
                                    <p>
                                        Sodales posuere facilisi metus elementum ipsum egestas
                                        amet amet mattis commodo Nunc tempor amet massa diam
                                        mauris Risus sodales interdum.
                                    </p>
                                    </div>
                                </div>
                                {/*End single accordion box*/}
                                {/*Start single accordion box*/}
                                <div className="accordion accordion-block">
                                    <div className={isActive.key == 2 ? "accord-btn active" : "accord-btn"} onClick={() => handleToggle(2)}>
                                    <h5>
                                        <span>Q.</span> How does Your Pricing Work?
                                    </h5>
                                    <div className="collapse-icon">
                                        <div className="plus">
                                        <span className="icon-44" />
                                        </div>
                                        <div className="minace">
                                        <span className="icon-56" />
                                        </div>
                                    </div>
                                    </div>
                                    <div className={isActive.key == 2 ? "accord-content collapsed" : "accord-content"}>
                                    <p>
                                        Sodales posuere facilisi metus elementum ipsum egestas
                                        amet amet mattis commodo Nunc tempor amet massa diam
                                        mauris Risus sodales interdum.
                                    </p>
                                    </div>
                                </div>
                                {/*End single accordion box*/}
                                {/*Start single accordion box*/}
                                <div className="accordion accordion-block">
                                    <div className={isActive.key == 3 ? "accord-btn active" : "accord-btn"} onClick={() => handleToggle(3)}>
                                    <h5>
                                        <span>Q.</span> How Does Saas Work?
                                    </h5>
                                    <div className="collapse-icon">
                                        <div className="plus">
                                        <span className="icon-44" />
                                        </div>
                                        <div className="minace">
                                        <span className="icon-56" />
                                        </div>
                                    </div>
                                    </div>
                                    <div className={isActive.key == 3 ? "accord-content collapsed" : "accord-content"}>
                                    <p>
                                        Sodales posuere facilisi metus elementum ipsum egestas
                                        amet amet mattis commodo Nunc tempor amet massa diam
                                        mauris Risus sodales interdum.
                                    </p>
                                    </div>
                                </div>
                                {/*End single accordion box*/}
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </section>
                {/* faq-section-end */}

                </div>

            </Layout>
        </>
    )
}