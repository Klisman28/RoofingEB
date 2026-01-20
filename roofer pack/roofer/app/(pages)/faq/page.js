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
            <Layout headerStyle={4} footerStyle={2} breadcrumbTitle="Frequently Asked Question">
                <div>
                    


                    {/*faq-page */}
                    <section className="faq__page__one see__pad">
                        <div className="auto_container">
                            <div className="row">
                                <div className="col-lg-7 col-md-12">
                                    <div className="faq__page__left">
                                        <div className="faq__right__section">
                                            <div className="tab__content">
                                                <div className="title">
                                                    <div className="sub__title">
                                                        <h6>Faq’s</h6>
                                                    </div>
                                                    <div className="main__title">
                                                        <h2> Frequently Asked <br/>
                                                            Question </h2>
                                                    </div>
                                                </div>
                                                <div className="tab__text">
                                                    <p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Adipiscing integer
                                                        ultrices suspendisse varius etiam est.</p>
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
                                                    {/*Start single accordion box*/}
                                                    <div className="accordion accordion-block">
                                                        <div className={isActive.key == 4 ? "accord-btn active" : "accord-btn"} onClick={() => handleToggle(4)}>
                                                        <h5>
                                                            <span>Q.</span>  Are You Ready to take our roofing service?
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
                                                        <div className={isActive.key == 4 ? "accord-content collapsed" : "accord-content"}>
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
                                                        <div className={isActive.key == 5 ? "accord-btn active" : "accord-btn"} onClick={() => handleToggle(5)}>
                                                        <h5>
                                                            <span>Q.</span> How Supply Includes does Your Pricing?
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
                                                        <div className={isActive.key == 5 ? "accord-content collapsed" : "accord-content"}>
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
                                                        <div className={isActive.key == 6 ? "accord-btn active" : "accord-btn"} onClick={() => handleToggle(6)}>
                                                        <h5>
                                                            <span>Q.</span> How Long your warranty Work ?
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
                                                        <div className={isActive.key == 6 ? "accord-content collapsed" : "accord-content"}>
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
                                <div className="col-lg-4 col-md-12 offset-lg-1">
                                    <div className="faq__page__right p_relative">
                                        <div className="image__layer" style={{backgroundImage: 'url(assets/images/shape/shape-06.png)'}}>
                                        </div>
                                        <div className="inner__content">
                                            <div className="contact__title">
                                                <h4>Asked Your Valuable <br/> Question </h4>
                                            </div>
                                            <form method="post" action="/" id="contact-form"> 
                                                <div className="from__inner">
                                                    <div className="form-group">
                                                        <input type="text" name="username" placeholder="Your name" required="" aria-required="true"/>
                                                    </div>
                                                    <div className="form-group">
                                                        <input type="email" name="email" placeholder="Your email" required="" aria-required="true"/>
                                                    </div>
                                                    <div className="form-group">
                                                        <input type="email" name="email" placeholder="Phone number" required="" aria-required="true"/>
                                                    </div>
                                                    <div className="form-group">
                                                        <textarea name="message" id="message" cols="30" rows="9" placeholder="Type message"></textarea>
                                                    </div>
                                                    <div className="message-btn">
                                                        <div className="faq__btn btn-one"> 
                                                            <em>
                                                                <i></i>
                                                                <i></i>
                                                                <i></i>
                                                                <i></i>
                                                                <i></i>
                                                                <i></i>
                                                                <i></i>
                                                            </em>
                                                            <button className="btn__submit" type="submit" name="submit-form"><span>Submit Now</span> </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </section>
                    {/*faq-page end */}

                    {/*news-letter */}
                    <section className="news_letter two">
                        <div className="auto_container">
                            <div className="news_letter_content" style={{backgroundImage: 'url(assets/images/shape/shape-27.png)'}}>
                                <div className="news_letter_left p_relative">
                                    <h3>Subscribe <br/>
                                        To Our Newsletter</h3>
                                    <div className="form-inner p_relative">
                                        <form action="/" method="post" className="subscribe-form">
                                            <div className="form-group">
                                                <input type="email" name="email" placeholder="Your email" required=""/>
                                                <button type="submit" className="btn-two">Subscribe Now</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/*news-letter-end  */}
                    
                </div>

            </Layout>
        </>
    )
}

