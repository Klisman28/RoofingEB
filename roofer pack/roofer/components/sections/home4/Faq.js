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
        {/* faq-section */}
        <section className="faq__section four see__pad p_relative">
            <div className="faq__content four">
            <div className="auto_container">
                <div className="row">
                <div className="col-lg-6">
                    <div className="faq__right__four">
                    <div className="inner__box">
                        <div className="image__box">
                        <figure className="image">
                            <img src="assets/images/resource/faq-four.png" alt="" />
                        </figure>
                        </div>
                    </div>
                    <div className="faq__need">
                        <div className="help__left">
                        <div className="help__one">
                            <span className="icon-47" />
                        </div>
                        <div className="help__two">
                            <h2>Need Any Roofing Help?</h2>
                            <span>
                            Call us: <a href="tel:+21359281237">+21-359-28-1237</a>
                            </span>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="faq__right__section ">
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
        </>

    )
}

