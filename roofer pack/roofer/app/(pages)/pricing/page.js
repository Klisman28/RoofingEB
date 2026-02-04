'use client'
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { useState } from "react"
export default function Home() {

    const [activeIndex, setActiveIndex] = useState(1)
    const handleOnClick = (index) => {
        setActiveIndex(index)
    }
    return (
        <>
            <Layout headerStyle={4} footerStyle={2} breadcrumbTitle="Pricing Table">
                <div>
                {/*pricing-one */}
                <section className="pricing-one pricing-page-1 p_relative see__pad">
                    <div className="auto_container">
                        <div className="title text-center">
                            <div className="sub__title">
                                <h6>Pricing Table</h6>
                            </div>
                            <div className="main__title">
                                <h2>Not Any Hidden Charge, Choose  <br/>
                                    Our Pricing Plan</h2>
                            </div>
                        </div>
                        <div className="tabs-box">
                            <div className="tab-btn-box p_relative d_block">
                                <ul className="tab-btns tab-buttons clearfix p_relative">
                                    <li className={activeIndex == 1 ? "tab-btn active-btn" : "tab-btn"} onClick={() => handleOnClick(1)}>
                                        Monthly
                                    </li>
                                    <li className={activeIndex == 2 ? "tab-btn active-btn" : "tab-btn"} onClick={() => handleOnClick(2)}>
                                        Monthly
                                    </li>
                                </ul>
                                
                            </div>
                            <div className="tab-content wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1200ms">
                                <div className={activeIndex == 1 ? "tab-pane fadeInUp animated show active" : "tab-pane fadeInUp animated"}>
                                    <div className="row">
                                        <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                                            <div className="price__content p_relative">
                                                <div className="image_layer shape-06" style={{backgroundImage: 'url(assets/images/shape/shape-06.png)'}}></div>
                                                <div className="price__text p_relative">
                                                    <div className="image_layer shape-55" style={{backgroundImage: 'url(assets/images/shape/shape-55.png)'}}></div>
                                                    <h6>Basic Pack</h6>
                                                    <h2>$24.50</h2>
                                                    <p>Monthly</p>
                                                </div>
                                                <div className="price__list">
                                                    <ul>
                                                        <li><span className="icon-21"></span> Powerful Admin Panel</li>
                                                        <li><span className="icon-21"></span> 1 Native Android App</li>
                                                        <li><span className="icon-21"></span> Multi-Language Support</li>
                                                        <li><span className="icon-21"></span> Advance Options</li>
                                                        <li><span className="icon-21"></span> 24/7 Support</li>
                                                    </ul>
                                                </div>
                                                <div className="price__btn">
                                                    <Link href="/pricing">Choose Plan</Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                                            <div className="price__content p_relative">
                                                <div className="image_layer shape-06" style={{backgroundImage: 'url(assets/images/shape/shape-06.png)'}}></div>
                                                <div className="price__text p_relative">
                                                    <div className="image_layer shape-55" style={{backgroundImage: 'url(assets/images/shape/shape-55.png)'}}></div>
                                                    <h6>Standard Pack</h6>
                                                    <h2>$30.00</h2>
                                                    <p>Monthly</p>
                                                </div>
                                                <div className="price__list">
                                                    <ul>
                                                        <li><span className="icon-21"></span> Powerful Admin Panel</li>
                                                        <li><span className="icon-21"></span> 1 Native Android App</li>
                                                        <li><span className="icon-21"></span> Multi-Language Support</li>
                                                        <li><span className="icon-21"></span> Advance Options</li>
                                                        <li><span className="icon-21"></span> 24/7 Support</li>
                                                    </ul>
                                                </div>
                                                <div className="price__btn">
                                                    <Link href="/pricing">Choose Plan</Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                                            <div className="price__content p_relative">
                                                <div className="image_layer shape-06" style={{backgroundImage: 'url(assets/images/shape/shape-06.png)'}}></div>
                                                <div className="price__text p_relative">
                                                    <div className="image_layer shape-55" style={{backgroundImage: 'url(assets/images/shape/shape-55.png)'}}></div>
                                                    <h6>Advanced Pack</h6>
                                                    <h2>$42.50</h2>
                                                    <p>Monthly</p>
                                                </div>
                                                <div className="price__list">
                                                    <ul>
                                                        <li><span className="icon-21"></span> Powerful Admin Panel</li>
                                                        <li><span className="icon-21"></span> 1 Native Android App</li>
                                                        <li><span className="icon-21"></span> Multi-Language Support</li>
                                                        <li><span className="icon-21"></span> Advance Options</li>
                                                        <li><span className="icon-21"></span> 24/7 Support</li>
                                                    </ul>
                                                </div>
                                                <div className="price__btn">
                                                    <Link href="/pricing">Choose Plan</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={activeIndex == 2 ? "tab-pane fadeInUp animated show active" : "tab-pane fadeInUp animated"}>
                                    <div className="row">
                                        <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                                            <div className="price__content p_relative">
                                                <div className="image_layer shape-06" style={{backgroundImage: 'url(assets/images/shape/shape-06.png)'}}></div>
                                                <div className="price__text p_relative">
                                                    <div className="image_layer shape-55" style={{backgroundImage: 'url(assets/images/shape/shape-55.png)'}}></div>
                                                    <h6>Basic Pack</h6>
                                                    <h2>$40.50</h2>
                                                    <p>Yearly</p>
                                                </div>
                                                <div className="price__list">
                                                    <ul>
                                                        <li><span className="icon-21"></span> Powerful Admin Panel</li>
                                                        <li><span className="icon-21"></span> 1 Native Android App</li>
                                                        <li><span className="icon-21"></span> Multi-Language Support</li>
                                                        <li><span className="icon-21"></span> Advance Options</li>
                                                        <li><span className="icon-21"></span> 24/7 Support</li>
                                                    </ul>
                                                </div>
                                                <div className="price__btn">
                                                    <Link href="/pricing">Choose Plan</Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                                            <div className="price__content p_relative">
                                                <div className="image_layer shape-06" style={{backgroundImage: 'url(assets/images/shape/shape-06.png)'}}></div>
                                                <div className="price__text p_relative">
                                                    <div className="image_layer shape-55" style={{backgroundImage: 'url(assets/images/shape/shape-55.png)'}}></div>
                                                    <h6>Standard Pack</h6>
                                                    <h2>$64.50</h2>
                                                    <p>Yearly</p>
                                                </div>
                                                <div className="price__list">
                                                    <ul>
                                                        <li><span className="icon-21"></span> Powerful Admin Panel</li>
                                                        <li><span className="icon-21"></span> 1 Native Android App</li>
                                                        <li><span className="icon-21"></span> Multi-Language Support</li>
                                                        <li><span className="icon-21"></span> Advance Options</li>
                                                        <li><span className="icon-21"></span> 24/7 Support</li>
                                                    </ul>
                                                </div>
                                                <div className="price__btn">
                                                    <Link href="/pricing">Choose Plan</Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                                            <div className="price__content p_relative">
                                                <div className="image_layer shape-06" style={{backgroundImage: 'url(assets/images/shape/shape-06.png)'}}></div>
                                                <div className="price__text p_relative">
                                                    <div className="image_layer shape-55" style={{backgroundImage: 'url(assets/images/shape/shape-55.png)'}}></div>
                                                    <h6>Advanced Pack</h6>
                                                    <h2>$94.50</h2>
                                                    <p>Yearly</p>
                                                </div>
                                                <div className="price__list">
                                                    <ul>
                                                        <li><span className="icon-21"></span> Powerful Admin Panel</li>
                                                        <li><span className="icon-21"></span> 1 Native Android App</li>
                                                        <li><span className="icon-21"></span> Multi-Language Support</li>
                                                        <li><span className="icon-21"></span> Advance Options</li>
                                                        <li><span className="icon-21"></span> 24/7 Support</li>
                                                    </ul>
                                                </div>
                                                <div className="price__btn">
                                                    <Link href="/pricing">Choose Plan</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/*pricing-one end */}

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
                {/*news-letter-end */}
                </div>

            </Layout>
        </>
    )
}