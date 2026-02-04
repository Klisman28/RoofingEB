'use client'
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { useState } from 'react'
export default function Home() {


    return (
        <>
            <Layout headerStyle={4} footerStyle={1} breadcrumbTitle="Roofing Services">
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
                                                        <Link href="/service-details"><img src="assets/images/service/roofing_services.jpg" alt="" /></Link>
                                                    </figure>
                                                </div>
                                                <div className="lower__content">
                                                    <div className="image_layer shape-06" style={{ backgroundImage: 'url(assets/images/shape/shape-06.png)' }}></div>
                                                    <div className="service__icon">
                                                        <div className="image_layer_one shape-34" style={{ backgroundImage: 'url(assets/images/shape/shape-34.png)' }}></div>
                                                        <div className="image_layer_two shape-35" style={{ backgroundImage: 'url(assets/images/shape/shape-35.png)' }}></div>
                                                        <div className="icon">
                                                            <span className="icon-27"></span>
                                                        </div>
                                                    </div>
                                                    <div className="service__title">
                                                        <h4> <Link href="/service-details"> Roofing Services </Link></h4>
                                                    </div>
                                                    <div className="service__text">
                                                        <p>From complete asphalt shingle roof replacements to emergency leak repairs and tarping (24/7). We provide free, honest inspections.</p>
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
                                                        <Link href="/service-details"><img src="assets/images/service/siding_installation.jpg" alt="" /></Link>
                                                    </figure>
                                                </div>
                                                <div className="lower__content">
                                                    <div className="image_layer shape-06" style={{ backgroundImage: 'url(assets/images/shape/shape-06.png)' }}></div>
                                                    <div className="service__icon">
                                                        <div className="image_layer_one shape-34" style={{ backgroundImage: 'url(assets/images/shape/shape-34.png)' }}></div>
                                                        <div className="image_layer_two shape-35" style={{ backgroundImage: 'url(assets/images/shape/shape-35.png)' }}></div>
                                                        <div className="icon">
                                                            <span className="icon-8"></span>
                                                        </div>
                                                    </div>
                                                    <div className="service__title">
                                                        <h4> <Link href="/service-details"> Siding Installation </Link></h4>
                                                    </div>
                                                    <div className="service__text">
                                                        <p>Transform your home's appearance and energy efficiency with high-quality vinyl siding and exterior cladding solutions.</p>
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
                                                        <Link href="/service-details"><img src="assets/images/service/windwo_replacement.jpg" alt="" /></Link>
                                                    </figure>
                                                </div>
                                                <div className="lower__content" >
                                                    <div className="image_layer shape-06" style={{ backgroundImage: 'url(assets/images/shape/shape-06.png)' }}></div>
                                                    <div className="service__icon">
                                                        <div className="image_layer_one shape-34" style={{ backgroundImage: 'url(assets/images/shape/shape-34.png)' }}></div>
                                                        <div className="image_layer_two shape-35" style={{ backgroundImage: 'url(assets/images/shape/shape-35.png)' }}></div>
                                                        <div className="icon">
                                                            <span className="icon-14"></span>
                                                        </div>
                                                    </div>
                                                    <div className="service__title">
                                                        <h4> <Link href="/service-details"> Window Replacement </Link></h4>
                                                    </div>
                                                    <div className="service__text">
                                                        <p>Upgrade to energy-efficient replacement windows. Professional installation that improves home comfort and lowers potential energy bills.</p>
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
                                                        <Link href="/service-details"><img src="assets/images/service/Gutters&Guards.jpg" alt="" /></Link>
                                                    </figure>
                                                </div>
                                                <div className="lower__content">
                                                    <div className="image_layer shape-06" style={{ backgroundImage: 'url(assets/images/shape/shape-06.png)' }}></div>
                                                    <div className="service__icon">
                                                        <div className="image_layer_one shape-34" style={{ backgroundImage: 'url(assets/images/shape/shape-34.png)' }}></div>
                                                        <div className="image_layer_two shape-35" style={{ backgroundImage: 'url(assets/images/shape/shape-35.png)' }}></div>
                                                        <div className="icon">
                                                            <span className="icon-31"></span>
                                                        </div>
                                                    </div>
                                                    <div className="service__title">
                                                        <h4> <Link href="/service-details"> Gutters & Guards </Link></h4>
                                                    </div>
                                                    <div className="service__text">
                                                        <p>Protect your foundation with seamless gutters and gutter guards. We handle installation, repair, and cleaning.</p>
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
                                                        <Link href="/service-details"><img src="assets/images/service/Skylights&Chimneys.jpg" alt="" /></Link>
                                                    </figure>
                                                </div>
                                                <div className="lower__content">
                                                    <div className="image_layer shape-06" style={{ backgroundImage: 'url(assets/images/shape/shape-06.png)' }}></div>
                                                    <div className="service__icon">
                                                        <div className="image_layer_one shape-34" style={{ backgroundImage: 'url(assets/images/shape/shape-34.png)' }}></div>
                                                        <div className="image_layer_two shape-35" style={{ backgroundImage: 'url(assets/images/shape/shape-35.png)' }}></div>
                                                        <div className="icon">
                                                            <span className="icon-32"></span>
                                                        </div>
                                                    </div>
                                                    <div className="service__title">
                                                        <h4> <Link href="/service-details"> Skylights & Chimneys </Link></h4>
                                                    </div>
                                                    <div className="service__text">
                                                        <p>Expert installation and repair for skylights and chimneys. We fix leaks, replace flashing, and ensure proper sealing.</p>
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
                                                        <Link href="/service-details"><img src="assets/images/service/Exterior_painting.jpg" alt="" /></Link>
                                                    </figure>
                                                </div>
                                                <div className="lower__content" >
                                                    <div className="image_layer shape-06" style={{ backgroundImage: 'url(assets/images/shape/shape-06.png)' }}></div>
                                                    <div className="service__icon">
                                                        <div className="image_layer_one shape-34" style={{ backgroundImage: 'url(assets/images/shape/shape-34.png)' }}></div>
                                                        <div className="image_layer_two shape-35" style={{ backgroundImage: 'url(assets/images/shape/shape-35.png)' }}></div>
                                                        <div className="icon">
                                                            <span className="icon-33"></span>
                                                        </div>
                                                    </div>
                                                    <div className="service__title">
                                                        <h4> <Link href="/service-details">Exterior Painting </Link></h4>
                                                    </div>
                                                    <div className="service__text">
                                                        <p>Revitalize your property with professional exterior painting. We cover trim work, siding painting, and detail finishing.</p>
                                                    </div>
                                                    {/*  <div className="more__btn">
                                                        <Link href="/service-details">Read More <span className="icon-53"></span> <span className="icon-52"></span></Link>
                                                    </div>
                                                     */}
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