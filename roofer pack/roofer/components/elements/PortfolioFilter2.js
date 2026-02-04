
'use client'
import Isotope from "isotope-layout"
import Link from "next/link"
import { useCallback, useEffect, useRef, useState } from "react"

export default function PortfolioFilter2() {
    // Isotope
    const isotope = useRef()
    const [filterKey, setFilterKey] = useState("*")
    useEffect(() => {
        setTimeout(() => {
            isotope.current = new Isotope(".items-container", {
                itemSelector: ".masonry-item",
                // layoutMode: "fitRows",
                percentPosition: true,
                masonry: {
                    columnWidth: ".masonry-item",
                },
                animationOptions: {
                    duration: 750,
                    easing: "linear",
                    queue: false,
                },
            })
        }, 1000)
    }, [])
    useEffect(() => {
        if (isotope.current) {
            filterKey === "*"
                ? isotope.current.arrange({ filter: `*` })
                : isotope.current.arrange({ filter: `.${filterKey}` })
        }
    }, [filterKey])
    const handleFilterKeyChange = useCallback((key) => () => {
        setFilterKey(key)
    },
        []
    )

    const activeBtn = (value) => (value === filterKey ? "filter active" : "filter")



    return (
        <>

            <div className="filters">
                <ul className="filter-tabs filter-btns clearfix">
                    <li className={activeBtn("*")} onClick={handleFilterKeyChange("*")}>All Works </li>
                    <li className={activeBtn("cat-1")} onClick={handleFilterKeyChange("cat-1")}>Residential Roofing </li>
                    <li className={activeBtn("cat-2")} onClick={handleFilterKeyChange("cat-2")}>Commercial Roofing </li>
                    <li className={activeBtn("cat-3")} onClick={handleFilterKeyChange("cat-3")}>Siding & Gutters </li>
                </ul>
            </div>


            <div className="items-container row clearfix">
                {/* Case Block 1 - Residential */}
                <div className="col-lg-4 col-md-6 col-sm-12 masonry-item all cat-1 col-lg-4 col-md-6 col-sm-12">
                    <div className="portfolio__block__one">
                        <div className="inner-box">
                            <figure className="image-box">
                                <img src="assets/images/resource/roof-replacement-pawtucket-ri.JPG" alt="Residential Roof Replacement" />
                            </figure>
                            <div className="lower__content">
                                <div className="view-btn">
                                    <Link
                                        href="assets/images/resource/roof-replacement-pawtucket-ri.JPG"
                                        className="lightbox-image"
                                        data-fancybox="gallery"
                                    >
                                        <span className="icon-18" />
                                    </Link>
                                </div>
                                <div className="portfolio__block">
                                    <span>Residential</span>
                                    <h4>
                                        <Link href="/project-details">Full Roof Replacement</Link>
                                    </h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Case Block 2 - Commercial */}
                <div className="col-lg-4 col-md-6 col-sm-12  masonry-item all cat-2 col-lg-4 col-md-6 col-sm-12">
                    <div className="portfolio__block__one">
                        <div className="inner-box">
                            <figure className="image-box">
                                <img src="assets/images/resource/commercial.jpg" alt="Commercial Flat Roofing" />
                            </figure>
                            <div className="lower__content">
                                <div className="view-btn">
                                    <Link
                                        href="assets/images/resource/commercial.jpg"
                                        className="lightbox-image"
                                        data-fancybox="gallery"
                                    >
                                        <span className="icon-18" />
                                    </Link>
                                </div>
                                <div className="portfolio__block">
                                    <span>Commercial</span>
                                    <h4>
                                        <Link href="/project-details">Commercial Flat Roof System</Link>
                                    </h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Case Block 3 - Residential */}
                <div className="col-lg-4 col-md-6 col-sm-12 masonry-item all cat-1 cat-4 col-lg-4 col-md-6 col-sm-12">
                    <div className="portfolio__block__one">
                        <div className="inner-box">
                            <figure className="image-box">
                                <img src="assets/images/resource/new-roof-installation-eb-roofing.JPG" alt="New Roof Installation" />
                            </figure>
                            <div className="lower__content">
                                <div className="view-btn">
                                    <Link
                                        href="assets/images/resource/new-roof-installation-eb-roofing.JPG"
                                        className="lightbox-image"
                                        data-fancybox="gallery"
                                    >
                                        <span className="icon-18" />
                                    </Link>
                                </div>
                                <div className="portfolio__block">
                                    <span>Residential</span>
                                    <h4>
                                        <Link href="/project-details">New Construction Roofing</Link>
                                    </h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Case Block 4 - Siding */}
                <div className="col-lg-4 col-md-6 col-sm-12 masonry-item all cat-3 col-lg-4 col-md-6 col-sm-12">
                    <div className="portfolio__block__one">
                        <div className="inner-box">
                            <figure className="image-box">
                                <img src="assets/images/resource/siding-windows-home-attleboro-ma.JPG" alt="Vinyl Siding Installation" />
                            </figure>
                            <div className="lower__content">
                                <div className="view-btn">
                                    <Link
                                        href="assets/images/resource/siding-windows-home-attleboro-ma.JPG"
                                        className="lightbox-image"
                                        data-fancybox="gallery"
                                    >
                                        <span className="icon-18" />
                                    </Link>
                                </div>
                                <div className="portfolio__block">
                                    <span>Siding</span>
                                    <h4>
                                        <Link href="/project-details">Vinyl Siding Installation</Link>
                                    </h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Case Block 5 - Residential */}
                <div className="col-lg-4 col-md-6 col-sm-12 masonry-item all cat-1 col-lg-4 col-md-6 col-sm-12">
                    <div className="portfolio__block__one">
                        <div className="inner-box">
                            <figure className="image-box">
                                <img src="assets/images/resource/ebroofing3.JPG" alt="Asphalt Shingle Renewal" />
                            </figure>
                            <div className="lower__content">
                                <div className="view-btn">
                                    <Link
                                        href="assets/images/resource/ebroofing3.JPG"
                                        className="lightbox-image"
                                        data-fancybox="gallery"
                                    >
                                        <span className="icon-18" />
                                    </Link>
                                </div>
                                <div className="portfolio__block">
                                    <span>Residential</span>
                                    <h4>
                                        <Link href="/project-details">Asphalt Shingle Renewal</Link>
                                    </h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Case Block 6 - Commercial */}
                <div className="col-lg-4 col-md-6 col-sm-12 masonry-item all cat-2 col-lg-4 col-md-6 col-sm-12">
                    <div className="portfolio__block__one">
                        <div className="inner-box">
                            <figure className="image-box">
                                <img src="assets/images/resource/commercial1.jpg" alt="Flat Roof Repair" />
                            </figure>
                            <div className="lower__content">
                                <div className="view-btn">
                                    <Link
                                        href="assets/images/resource/commercial1.jpg"
                                        className="lightbox-image"
                                        data-fancybox="gallery"
                                    >
                                        <span className="icon-18" />
                                    </Link>
                                </div>
                                <div className="portfolio__block">
                                    <span>Commercial</span>
                                    <h4>
                                        <Link href="/project-details">Flat Roof Repair & Coating</Link>
                                    </h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}
