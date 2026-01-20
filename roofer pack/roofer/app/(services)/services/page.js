'use client'
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { useState } from 'react'
export default function Home() {
   

    return (
        <>
            <Layout headerStyle={4} footerStyle={1} breadcrumbTitle="Our Services">
                <div>
                {/*service-section-two */}
                <section className="service__page p_relative see__pad">
                    <div className="service__content__two">
                        <div className="auto_container">
                            <div className="row">
                                <div className="col-lg-4 col-md-6 col-sm-12">
                                    <div className="service__block__one wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1500m">
                                        <div className="inner__box">
                                            <div className="image__box">
                                                <figure className="image">
                                                    <Link href="/service-details"><img src="assets/images/service/service-01.png" alt=""/></Link>
                                                </figure>
                                            </div>
                                            <div className="lower__content">
                                                <div className="image_layer shape-06" style={{backgroundImage: 'url(assets/images/shape/shape-06.png)'}}></div>
                                                <div className="service__icon">
                                                    <div className="image_layer_one shape-34" style={{backgroundImage: 'url(assets/images/shape/shape-34.png)'}}></div>
                                                    <div className="image_layer_two shape-35" style={{backgroundImage: 'url(assets/images/shape/shape-35.png)'}}></div>
                                                    <div className="icon">
                                                        <span className="icon-27"></span>
                                                    </div>
                                                </div>
                                                <div className="service__title">
                                                    <h4> <Link href="/service-details"> Roofing Layer </Link></h4>
                                                </div>
                                                <div className="service__text">
                                                    <p>Suspendisse varius etiam est vitae dui
                                                        tempus nec vitae orci sodales metus velit
                                                        nec at diam in sed.</p>
                                                </div>
                                                <div className="more__btn">
                                                    <Link href="/service-details">Read More <span className="icon-53"></span> <span className="icon-52"></span></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div> 
                                <div className="col-lg-4 col-md-6 col-sm-12">
                                    <div className="service__block__one wow fadeInUp animated" data-wow-delay="300ms" data-wow-duration="1500m">
                                        <div className="inner__box">
                                            <div className="image__box">
                                                <figure className="image">
                                                    <Link href="/service-details"><img src="assets/images/service/service-02.png" alt=""/></Link>
                                                </figure>
                                            </div>
                                            <div className="lower__content">
                                                <div className="image_layer shape-06" style={{backgroundImage: 'url(assets/images/shape/shape-06.png)'}}></div>
                                                <div className="service__icon">
                                                    <div className="image_layer_one shape-34" style={{backgroundImage: 'url(assets/images/shape/shape-34.png)'}}></div>
                                                    <div className="image_layer_two shape-35" style={{backgroundImage: 'url(assets/images/shape/shape-35.png)'}}></div>
                                                    <div className="icon">
                                                        <span className="icon-8"></span>
                                                    </div>
                                                </div>
                                                <div className="service__title">
                                                    <h4> <Link href="/service-details"> Damage Repair </Link></h4>
                                                </div>
                                                <div className="service__text">
                                                    <p>Suspendisse varius etiam est vitae dui
                                                        tempus nec vitae orci sodales metus velit
                                                        nec at diam in sed.</p>
                                                </div>
                                                <div className="more__btn">
                                                    <Link href="/service-details">Read More <span className="icon-53"></span> <span className="icon-52"></span></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-12">
                                    <div className="service__block__one  wow fadeInUp animated" data-wow-delay="600ms" data-wow-duration="1500m">
                                        <div className="inner__box">
                                            <div className="image__box">
                                                <figure className="image">
                                                    <Link href="/service-details"><img src="assets/images/service/service-03.png" alt=""/></Link>
                                                </figure>
                                            </div>
                                            <div className="lower__content" >
                                                <div className="image_layer shape-06" style={{backgroundImage: 'url(assets/images/shape/shape-06.png)'}}></div>
                                                <div className="service__icon">
                                                    <div className="image_layer_one shape-34" style={{backgroundImage: 'url(assets/images/shape/shape-34.png)'}}></div>
                                                    <div className="image_layer_two shape-35" style={{backgroundImage: 'url(assets/images/shape/shape-35.png)'}}></div>
                                                    <div className="icon">
                                                        <span className="icon-14"></span>
                                                    </div>
                                                </div>
                                                <div className="service__title">
                                                    <h4> <Link href="/service-details">Roof Cornering </Link></h4>
                                                </div>
                                                <div className="service__text">
                                                    <p>Suspendisse varius etiam est vitae dui
                                                        tempus nec vitae orci sodales metus velit
                                                        nec at diam in sed.</p>
                                                </div>
                                                <div className="more__btn">
                                                    <Link href="/service-details">Read More <span className="icon-53"></span> <span className="icon-52"></span></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-12">
                                    <div className="service__block__one wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1500m">
                                        <div className="inner__box">
                                            <div className="image__box">
                                                <figure className="image">
                                                    <Link href="/service-details"><img src="assets/images/service/service-04.png" alt=""/></Link>
                                                </figure>
                                            </div>
                                            <div className="lower__content">
                                                <div className="image_layer shape-06" style={{backgroundImage: 'url(assets/images/shape/shape-06.png)'}}></div>
                                                <div className="service__icon">
                                                    <div className="image_layer_one shape-34" style={{backgroundImage: 'url(assets/images/shape/shape-34.png)'}}></div>
                                                    <div className="image_layer_two shape-35" style={{backgroundImage: 'url(assets/images/shape/shape-35.png)'}}></div>
                                                    <div className="icon">
                                                        <span className="icon-31"></span>
                                                    </div>
                                                </div>
                                                <div className="service__title">
                                                    <h4> <Link href="/service-details"> Siding Install </Link></h4>
                                                </div>
                                                <div className="service__text">
                                                    <p>Suspendisse varius etiam est vitae dui
                                                        tempus nec vitae orci sodales metus velit
                                                        nec at diam in sed.</p>
                                                </div>
                                                <div className="more__btn">
                                                    <Link href="/service-details">Read More <span className="icon-53"></span> <span className="icon-52"></span></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div> 
                                <div className="col-lg-4 col-md-6 col-sm-12">
                                    <div className="service__block__one wow fadeInUp animated" data-wow-delay="300ms" data-wow-duration="1500m">
                                        <div className="inner__box">
                                            <div className="image__box">
                                                <figure className="image">
                                                    <Link href="/service-details"><img src="assets/images/service/service-05.png" alt=""/></Link>
                                                </figure>
                                            </div>
                                            <div className="lower__content">
                                                <div className="image_layer shape-06" style={{backgroundImage: 'url(assets/images/shape/shape-06.png)'}}></div>
                                                <div className="service__icon">
                                                    <div className="image_layer_one shape-34" style={{backgroundImage: 'url(assets/images/shape/shape-34.png)'}}></div>
                                                    <div className="image_layer_two shape-35" style={{backgroundImage: 'url(assets/images/shape/shape-35.png)'}}></div>
                                                    <div className="icon">
                                                        <span className="icon-32"></span>
                                                    </div>
                                                </div>
                                                <div className="service__title">
                                                    <h4> <Link href="/service-details"> Corner Fixing </Link></h4>
                                                </div>
                                                <div className="service__text">
                                                    <p>Suspendisse varius etiam est vitae dui
                                                        tempus nec vitae orci sodales metus velit
                                                        nec at diam in sed.</p>
                                                </div>
                                                <div className="more__btn">
                                                    <Link href="/service-details">Read More <span className="icon-53"></span> <span className="icon-52"></span></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-12">
                                    <div className="service__block__one  wow fadeInUp animated" data-wow-delay="600ms" data-wow-duration="1500m">
                                        <div className="inner__box">
                                            <div className="image__box">
                                                <figure className="image">
                                                    <Link href="/service-details"><img src="assets/images/service/service-06.png" alt=""/></Link>
                                                </figure>
                                            </div>
                                            <div className="lower__content" >
                                                <div className="image_layer shape-06" style={{backgroundImage: 'url(assets/images/shape/shape-06.png)'}}></div>
                                                <div className="service__icon">
                                                    <div className="image_layer_one shape-34" style={{backgroundImage: 'url(assets/images/shape/shape-34.png)'}}></div>
                                                    <div className="image_layer_two shape-35" style={{backgroundImage: 'url(assets/images/shape/shape-35.png)'}}></div>
                                                    <div className="icon">
                                                        <span className="icon-33"></span>
                                                    </div>
                                                </div>
                                                <div className="service__title">
                                                    <h4> <Link href="/service-details">Metal Roofing </Link></h4>
                                                </div>
                                                <div className="service__text">
                                                    <p>Suspendisse varius etiam est vitae dui
                                                        tempus nec vitae orci sodales metus velit
                                                        nec at diam in sed.</p>
                                                </div>
                                                <div className="more__btn">
                                                    <Link href="/service-details">Read More <span className="icon-53"></span> <span className="icon-52"></span></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/*service-section-twoend  */}


                </div>

            </Layout>
        </>
    )
}