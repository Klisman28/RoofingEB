
'use client'
import Isotope from "isotope-layout"
import Link from "next/link"
import { useCallback, useEffect, useRef, useState } from "react"

export default function PortfolioFilter1() {
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
                    <li className={activeBtn("cat-1")} onClick={handleFilterKeyChange("cat-1")}>Business </li>
                    <li className={activeBtn("cat-2")} onClick={handleFilterKeyChange("cat-2")}>Corporate </li>
                    <li className={activeBtn("cat-3")} onClick={handleFilterKeyChange("cat-3")}>Marketing </li>
                </ul>
            </div>


            <div className="items-container row clearfix">
                {/* Case Block */}
                <div className="col-lg-3 col-md-6 col-sm-12 masonry-item all cat-1 col-lg-3 col-md-6 col-sm-12">
                    <div className="portfolio__block__one">
                        <div className="inner-box">
                        <figure className="image-box">
                            <img src="assets/images/resource/portfolio-01.png" alt="" />
                        </figure>
                        <div className="lower__content">
                            <div className="view-btn">
                            <Link
                                href="assets/images/resource/portfolio-big-01.png"
                                className="lightbox-image"
                                data-fancybox="gallery"
                            >
                                <span className="icon-18" />
                            </Link>
                            </div>
                            <div className="portfolio__block">
                            <span>Maintenance</span>
                            <h4>
                                <Link href="/project-details">Quality Materials</Link>
                            </h4>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
                {/* Case Block */}
                <div className="col-lg-3 col-md-6 col-sm-12  masonry-item all cat-2 col-lg-3 col-md-6 col-sm-12">
                    <div className="portfolio__block__one">
                        <div className="inner-box">
                        <figure className="image-box">
                            <img src="assets/images/resource/portfolio-02.png" alt="" />
                        </figure>
                        <div className="lower__content">
                            <div className="view-btn">
                            <Link
                                href="assets/images/resource/portfolio-big-02.png"
                                className="lightbox-image"
                                data-fancybox="gallery"
                            >
                                <span className="icon-18" />
                            </Link>
                            </div>
                            <div className="portfolio__block">
                            <span>Design</span>
                            <h4>
                                <Link href="/project-details">Fixing Storm Damage</Link>
                            </h4>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
                {/* Case Block */}
                <div className="col-lg-3 col-md-6 col-sm-12 masonry-item all cat-1 cat-2 cat-4 col-lg-3 col-md-6 col-sm-12">
                    <div className="portfolio__block__one">
                        <div className="inner-box">
                        <figure className="image-box">
                            <img src="assets/images/resource/portfolio-03.png" alt="" />
                        </figure>
                        <div className="lower__content">
                            <div className="view-btn">
                            <Link
                                href="assets/images/resource/portfolio-big-03.png"
                                className="lightbox-image"
                                data-fancybox="gallery"
                            >
                                <span className="icon-18" />
                            </Link>
                            </div>
                            <div className="portfolio__block">
                            <span>Residential</span>
                            <h4>
                                <Link href="/project-details">Roof Construction</Link>
                            </h4>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
                {/* Case Block */}
                <div className="col-lg-3 col-md-6 col-sm-12 masonry-item all cat-1 cat-3 col-lg-3 col-md-6 col-sm-12">
                    <div className="portfolio__block__one">
                        <div className="inner-box">
                        <figure className="image-box">
                            <img src="assets/images/resource/portfolio-04.png" alt="" />
                        </figure>
                        <div className="lower__content">
                            <div className="view-btn">
                            <Link
                                href="assets/images/resource/portfolio-big-04.png"
                                className="lightbox-image"
                                data-fancybox="gallery"
                            >
                                <span className="icon-18" />
                            </Link>
                            </div>
                            <div className="portfolio__block">
                            <span>Green Design</span>
                            <h4>
                                <Link href="/project-details">Roof Installation</Link>
                            </h4>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
                {/* Case Block */}
                <div className="col-lg-3 col-md-6 col-sm-12 masonry-item all cat-2 cat-1 col-lg-3 col-md-6 col-sm-12">
                    <div className="portfolio__block__one">
                        <div className="inner-box">
                        <figure className="image-box">
                            <img src="assets/images/resource/portfolio-05.png" alt="" />
                        </figure>
                        <div className="lower__content">
                            <div className="view-btn">
                            <Link
                                href="assets/images/resource/portfolio-big-05.png"
                                className="lightbox-image"
                                data-fancybox="gallery"
                            >
                                <span className="icon-18" />
                            </Link>
                            </div>
                            <div className="portfolio__block">
                            <span>Maintenance</span>
                            <h4>
                                <Link href="/project-details">Modern Pattern Style</Link>
                            </h4>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
                {/* Case Block */}
                <div className="col-lg-3 col-md-6 col-sm-12 masonry-item all cat-1 cat-2 cat-3 col-lg-3 col-md-6 col-sm-12">
                    <div className="portfolio__block__one">
                        <div className="inner-box">
                        <figure className="image-box">
                            <img src="assets/images/resource/portfolio-06.png" alt="" />
                        </figure>
                        <div className="lower__content">
                            <div className="view-btn">
                            <Link
                                href="assets/images/resource/portfolio-big-06.png"
                                className="lightbox-image"
                                data-fancybox="gallery"
                            >
                                <span className="icon-18" />
                            </Link>
                            </div>
                            <div className="portfolio__block">
                            <span>Interior</span>
                            <h4>
                                <Link href="/project-details">Winter Maintenance</Link>
                            </h4>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
                {/* Case Block */}
                <div className="col-lg-3 col-md-6 col-sm-12 masonry-item all cat-1 cat-2 cat-3 col-lg-3 col-md-6 col-sm-12">
                    <div className="portfolio__block__one">
                        <div className="inner-box">
                        <figure className="image-box">
                            <img src="assets/images/resource/portfolio-07.png" alt="" />
                        </figure>
                        <div className="lower__content">
                            <div className="view-btn">
                            <Link
                                href="assets/images/resource/portfolio-big-07.png"
                                className="lightbox-image"
                                data-fancybox="gallery"
                            >
                                <span className="icon-18" />
                            </Link>
                            </div>
                            <div className="portfolio__block">
                            <span>Commercial</span>
                            <h4>
                                <Link href="/project-details">Quality Materials</Link>
                            </h4>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
                {/* Case Block */}
                <div className="col-lg-3 col-md-6 col-sm-12 masonry-item all cat-2 cat-3 col-lg-3 col-md-6 col-sm-12">
                    <div className="portfolio__block__one">
                        <div className="inner-box">
                        <figure className="image-box">
                            <img src="assets/images/resource/portfolio-08.png" alt="" />
                        </figure>
                        <div className="lower__content">
                            <div className="view-btn">
                            <Link
                                href="assets/images/resource/portfolio-big-08.png"
                                className="lightbox-image"
                                data-fancybox="gallery"
                            >
                                <span className="icon-18" />
                            </Link>
                            </div>
                            <div className="portfolio__block">
                            <span>Maintenance</span>
                            <h4>
                                <Link href="/project-details">Roof Construction</Link>
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
