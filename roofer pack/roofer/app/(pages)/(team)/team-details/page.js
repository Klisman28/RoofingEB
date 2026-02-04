import React from 'react';
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Home() {

    return (
        <>
            <Layout headerStyle={4} footerStyle={2} breadcrumbTitle="Team Details">

            {/*team-details */}
            <section className="team__details see__pad p_relative">
                <div className="team__details__block__one">
                    <div className="auto_container">
                        <div className="row">
                            <div className="col-lg-4 col-md-6 col-sm-12 pe-lg-0">
                                <div className="image__section">
                                    <figure className="image">
                                        <img src="assets/images/team/team-details-01.png" alt=""/>
                                    </figure>
                                </div>
                            </div>
                            <div className="col-lg-8 col-md-6 col-sm-12 ps-xl-5">
                                <div className="team__right__content">
                                    <span>Founder & CEO</span>
                                    <h2>Brooklyn Simmons</h2>
                                    <div className="team__media">
                                        <ul>
                                            <li><a href="#"><span className="icon-2"></span></a></li>
                                            <li><a href="#"><span className="icon-1"></span></a></li>
                                            <li><a href="#"><span className="icon-23"></span></a></li>
                                        </ul>
                                    </div>
                                    <div className="normal__text">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo sem diam et, sollicitudin eget. Tellus velit etiam elit, mi pretium eu. Suspendisse imperdiet enim ornare elit, eu vestibulum enim imperdiet viverra. Elementum habitant non mi est nec nunc. Orci odio dignissim aliquam dapibus duis. Faucibus velit amet vitae sed orc.</p>
                                    </div>
                                    <div className="signature">
                                        <figure className="image">
                                            <img src="assets/images/team/signature.png" alt=""/>
                                        </figure>
                                    </div>
                                    <div className="skill__list">
                                        <ul>
                                            <li><span>Expertise:</span> Roofing, Leadership</li>
                                            <li><span>Experience:</span> 08 Years</li>
                                            <li><span>Email:</span> <a href="mailto:brooklyn@gmail.com">brooklyn@gmail.com</a> </li>
                                            <li><span>Phone:</span> <a href="tel:3336660021">(+91) 333 666 0021</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="biography__section">
                    <div className="auto_container">
                        <div className="biography__title">
                            <h3>Biography</h3>
                        </div>
                        <div className="normal__text">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et enim justo, in mauris posuere dolor. Dolor felis sapien sit egestas. Ut venenatis faucibus non sed faucibus mauris ultricies. Cras varius proin amet vehicula magna. Ultricies gravida vel volutpat sed. Platea sed fames at egestas amet feugiat laoreet potenti integer. Viverra at maecenas convallis condimentum egestas nunc sagittis eu. Semper faucibus facilisis vitae sollicitudin.</p>
        
                            <p>Fringilla mauris magna sit elementum elit. Facilisi lacus, pharetra quam eu urna amet aenean. Nunc mattis vitae tellus bibendum a eu, nunc. Consequat commodo ac cursus in donec orci tempus. Massa sed sit faucibus neque ac. Nibh nisl nisl id fermentum habitant consequat. A ornare in dis sit cras natoque morbi. Phasellus senectus tortor sed magnis. Egestas nunc pellentesque egestas gravida amet.</p>
        
                        </div>
                    </div>
                </div>
                <div className="skills__section">
                    <div className="auto_container">
                        <div className="skills__title">
                            <h3>My Skills</h3>
                        </div>
                        <div className="skil__content">
                            <div className="normal__text">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et enim justo, in mauris posuere dolor. Dolor felis sapien sit egestas. Ut venenatis faucibus non sed faucibus mauris ultricies. Cras varius proin amet vehicula magna. Ultricies gravida vel volutpat sed. Platea sed fames at egestas amet feugiat laoreet potenti integer. Viverra at maecenas convallis condimentum egestas nunc sagittis eu. Semper faucibus facilisis vitae sollicitudin. </p>
                            </div>
                            <div className="skill__bar">
                                <div className="row">
                                    <div className="col-lg-6 pe-lg-5">
                                        <div className="skill__progressbar">
                                            <p className="progressbar__title">Management</p>
                                            <div className="progressbar__outer">
                                                <div className="progressbar__inner1 progress__line" data-width="75">
                                                </div>
                                                <div className="progressbar__percentage">
                                                    <div className="count-box">
                                                        <span className="count-text" data-speed="2000" data-stop="75">75</span>%
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="skill__progressbar">
                                            <p className="progressbar__title">Public Speaking</p>
                                            <div className="progressbar__outer">
                                                <div className="progressbar__inner2 progress__line" data-width="90">
                                                </div>
                                                <div className="progressbar__percentage">
                                                    <div className="count-box">
                                                        <span className="count-text" data-speed="2000" data-stop="90">90</span>%
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 pe-lg-5">
                                        <div className="skill__progressbar">
                                            <p className="progressbar__title">Problem Solving</p>
                                            <div className="progressbar__outer">
                                                <div className="progressbar__inner3 progress__line" data-width="80">
                                                </div>
                                                <div className="progressbar__percentage">
                                                    <div className="count-box"><span className="count-text" data-speed="2000" data-stop="80">80</span>%
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="skill__progressbar">
                                            <p className="progressbar__title">Strategy Planning</p>
                                            <div className="progressbar__outer">
                                                <div className="progressbar__inner4 progress__line" data-width="70">
                                                </div>
                                                <div className="progressbar__percentage">
                                                    <div className="count-box">
                                                        <span className="count-text" data-speed="2000" data-stop="70">70</span>%
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
            {/*team-details end */}

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

            </Layout>
        </>
    )
}

