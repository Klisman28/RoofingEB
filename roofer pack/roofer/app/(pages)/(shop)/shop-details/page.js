'use client'
import QuantityInput from "@/components/elements/QuantityInput"
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { useState } from "react"
import 'swiper/css/thumbs'
import { Autoplay, Navigation, Thumbs } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
export default function Home() {

    const [activeIndex, setActiveIndex] = useState(1)
    const handleOnClick = (index) => {
        setActiveIndex(index)
    }
    const [thumbsSwiper, setThumbsSwiper] = useState(null)
    const swiperOptions1 = {
        modules: [Autoplay, Navigation, Thumbs],
        onSwiper: setThumbsSwiper,
        // freeMode: true,
        // preloadImages: false,
        loop: true,
        slidesPerView: 3,
        speed: 1400,
        spaceBetween: 0,
        direction: "vertical",
        breakpoints: {
            300: {
                slidesPerView: 3,
            },
        }
    }

    const swiperOptions2 = {
        loop: true,
        speed: 1400,
        spaceBetween: 0,
        effect: "fade",
    }
    return (
        <>
            <Layout headerStyle={4} footerStyle={1} breadcrumbTitle="Product Details">
                <div>
                
                    {/*Start Product Details Area*/}
                    <section className="product-details-area see__pad">
                        <div className="auto_container">
                        <div className="row">
                            <div className="col-lg-6 col-md-12">
                            <div className="product-details-image-box">
                                <div className="product-details-main-image">
                                <img src="assets/images/shop/product-details-1.png" alt="" />
                                </div>
                                <div className="overlay-icon">
                                <Link
                                    className="lightbox-image"
                                    data-fancybox="gallery"
                                    href="assets/images/shop/product-details-1.png"
                                >
                                    <span className="icon-17" />
                                </Link>
                                </div>
                            </div>
                            </div>
                            <div className="col-lg-6 col-md-12">
                            <div className="product-details-content-box">
                                <div className="product-title">
                                <h2>Roof Damage Repair</h2>
                                </div>
                                <div className="product-details-rate-box">
                                <div className="current-rate">
                                    <h3>$90.00</h3>
                                </div>
                                </div>
                                <div className="products-details-review-box">
                                <div className="review-box">
                                    <ul>
                                    <li>
                                        <i className="icon-54" />
                                    </li>
                                    <li>
                                        <i className="icon-54" />
                                    </li>
                                    <li>
                                        <i className="icon-54" />
                                    </li>
                                    <li>
                                        <i className="icon-54" />
                                    </li>
                                    <li>
                                        <i className="icon-55" />
                                    </li>
                                    </ul>
                                    <p>(2 Customer Reviews)</p>
                                </div>
                                </div>
                                <div className="product-description">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Semper
                                    sagittis dolor aliquet quam feugiat nisi a ultrices feugiat.
                                    Viverra facilisi turpis eget tempor. Mattis risus amet euismod
                                    eleifend.
                                </p>
                                <p>
                                    {" "}
                                    Dictum tellus sollicitudin senectus. Eu nullam posuere aliquet
                                    bibendum id sed ipsum semper. Feugiat augue parturient id enim.
                                </p>
                                </div>
                                <div className="product-quantity-box">
                                <div className="input-box">
                                <QuantityInput />
                                </div>
                                <div className="right">
                                    <div className="cart-box">
                                    <button className="btn-one" type="submit">
                                        <em>
                                        <i />
                                        <i />
                                        <i />
                                        <i />
                                        <i />
                                        <i />
                                        <i />
                                        </em>
                                        <span className="txt">Add to Cart</span>
                                    </button>
                                    </div>
                                    <div className="button">
                                    <Link href="/shop-details">
                                        <span className="icon-49" />
                                    </Link>
                                    </div>
                                </div>
                                </div>
                                <div className="product-details-product-info">
                                <ul>
                                    <li>
                                    Category: <span> Chicken, Launch</span>
                                    </li>
                                    <li>
                                    Tags: <span> Healthy, Organic, Chicken</span>
                                    </li>
                                </ul>
                                </div>
                            </div>
                            </div>
                        </div>
                        {/*Start product tab box*/}
                        <div className="row">
                            <div className="col-md-12">
                            <div className="product-tab-box tabs-box">
                                <ul className="tab-btns tab-buttons clearfix">
                                    <li onClick={() => handleOnClick(1)} className={activeIndex === 1 ? "tab-btn active-btn" : "tab-btn"}><span>Descriprion</span></li>
                                    <li onClick={() => handleOnClick(2)} className={activeIndex === 2 ? "tab-btn active-btn" : "tab-btn"}><span>Reviews (3)</span></li>
                                </ul>
                                <div className="tabs-content">
                                <div id="desc" className={activeIndex === 1 ? "tab active-tab" : "tab"}>
                                    <div className="product-details-tab-content">
                                    <div className="product-description-content">
                                        <div className="text">
                                        <h4>Description</h4>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                            Magna sem tortor praesent suspendisse. Posuere fermentum
                                            magna odio bibendum fermentum sagittis, faucibus
                                            lobortis in. Bibendum justo, sodales integer morbi
                                            fermentum ligula nascetur. Convallis ut ultrices
                                            facilisis morbi sit convallis nec. Sed suspendisse
                                            sagittis, fames orci.
                                        </p>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                <div className={activeIndex === 2 ? "tab active-tab" : "tab"} id="review">
                                    <div className="product-details-tab-content">
                                    <div className="row">
                                        <div className="col-xl-6 col-lg-6 col-md-12">
                                        <div className="review-box-holder">
                                            <ul>
                                            <li className="single-review-box">
                                                <div className="img-box">
                                                <img
                                                    src="assets/images/shop/review-1.jpg"
                                                    alt=""
                                                />
                                                </div>
                                                <div className="text-box">
                                                <h5>
                                                    Steven Rich, <span>Mar 21, 2021</span>
                                                </h5>
                                                <div className="review-box">
                                                    <ul>
                                                    <li>
                                                        <i className="icon-54" />
                                                    </li>
                                                    <li>
                                                        <i className="icon-54" />
                                                    </li>
                                                    <li>
                                                        <i className="icon-54" />
                                                    </li>
                                                    <li>
                                                        <i className="icon-54" />
                                                    </li>
                                                    <li>
                                                        <i className="icon-54" />
                                                    </li>
                                                    </ul>
                                                </div>
                                                <p>
                                                    Indignation and dislike men who are so beguiled
                                                    &amp; demoralized by the charms
                                                </p>
                                                </div>
                                            </li>
                                            <li className="single-review-box">
                                                <div className="img-box">
                                                <img
                                                    src="assets/images/shop/review-2.jpg"
                                                    alt=""
                                                />
                                                </div>
                                                <div className="text-box">
                                                <h5>
                                                    William Cobus, <span>Mar 21, 2021</span>
                                                </h5>
                                                <div className="review-box">
                                                    <ul>
                                                    <li>
                                                        <i className="icon-54" />
                                                    </li>
                                                    <li>
                                                        <i className="icon-54" />
                                                    </li>
                                                    <li>
                                                        <i className="icon-54" />
                                                    </li>
                                                    <li>
                                                        <i className="icon-54" />
                                                    </li>
                                                    <li>
                                                        <i className="icon-54" />
                                                    </li>
                                                    </ul>
                                                </div>
                                                <p>
                                                    Nor again is there anyone who loves pursues
                                                    desires obtain of itself because it is pain.
                                                </p>
                                                </div>
                                            </li>
                                            <li className="single-review-box">
                                                <div className="img-box">
                                                <img
                                                    src="assets/images/shop/review-3.jpg"
                                                    alt=""
                                                />
                                                </div>
                                                <div className="text-box">
                                                <h5>
                                                    Sofia Charlotte, <span>Mar 20, 2021</span>
                                                </h5>
                                                <div className="review-box">
                                                    <ul>
                                                    <li>
                                                        <i className="icon-54" />
                                                    </li>
                                                    <li>
                                                        <i className="icon-54" />
                                                    </li>
                                                    <li>
                                                        <i className="icon-54" />
                                                    </li>
                                                    <li>
                                                        <i className="icon-54" />
                                                    </li>
                                                    <li>
                                                        <i className="icon-54" />
                                                    </li>
                                                    </ul>
                                                </div>
                                                <p>
                                                    Ever undertake laborious physical exercise
                                                    except.
                                                </p>
                                                </div>
                                            </li>
                                            </ul>
                                        </div>
                                        </div>
                                        <div className="col-xl-6">
                                        <div className="review-form text-right-rtl">
                                            <div className="title-box">
                                            <h2>Add Your Comments</h2>
                                            <p>
                                                Your email address will not be published. Required
                                                fields are marked <b>*</b>
                                            </p>
                                            </div>
                                            <div className="add-rating-box">
                                            <div className="add-rating-title">
                                                <p>Your Rating</p>
                                            </div>
                                            <div className="review-box">
                                                <ul>
                                                <li>
                                                    <i className="icon-54" />
                                                </li>
                                                <li>
                                                    <i className="icon-54" />
                                                </li>
                                                <li>
                                                    <i className="icon-54" />
                                                </li>
                                                <li>
                                                    <i className="icon-54" />
                                                </li>
                                                <li>
                                                    <i className="icon-54" />
                                                </li>
                                                </ul>
                                            </div>
                                            </div>
                                            <form id="review-form" action="#">
                                            <div className="row">
                                                <div className="col-md-6">
                                                <div className="input-box">
                                                    <input
                                                    type="text"
                                                    name="fname"
                                                    placeholder="Your Name"
                                                    required=""
                                                    />
                                                </div>
                                                </div>
                                                <div className="col-md-6">
                                                <div className="input-box">
                                                    <input
                                                    type="email"
                                                    name="femail"
                                                    placeholder="Email Address"
                                                    required=""
                                                    />
                                                </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-12">
                                                <div className="input-box">
                                                    <textarea
                                                    name="fcomments"
                                                    placeholder="Comments"
                                                    required=""
                                                    defaultValue={""}
                                                    />
                                                </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-12">
                                                <div className="btn__submit">
                                                    <button className="btn-one" type="submit">
                                                    <em>
                                                        <i />
                                                        <i />
                                                        <i />
                                                        <i />
                                                        <i />
                                                        <i />
                                                        <i />
                                                    </em>
                                                    <span className="txt">Submit</span>
                                                    </button>
                                                </div>
                                                </div>
                                            </div>
                                            </form>
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        {/*End product tab box*/}
                        {/*Start Related Product Content*/}
                        <div className="related-product-content">
                            <div className="inner-title">
                            <h3>Related Products</h3>
                            </div>
                            <div className="row">
                            <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12">
                                <div className="single-shop-item text-center">
                                <div className="img-holder">
                                    <Link href="product-details">
                                    <img src="assets/images/shop/shop-1.png" alt="" />
                                    </Link>
                                    <div className="overlay" />
                                    <div className="shop-hover-btn">
                                    <div className="shop-top-btn">
                                        <div className="top-btn-one">
                                        <Link href="product-details">
                                            <span className="icon-49" />
                                        </Link>
                                        </div>
                                        <div className="top-btn-one">
                                        <Link href="product-details">
                                            <span className="icon-35" />
                                        </Link>
                                        </div>
                                    </div>
                                    <div className="add-to-cart">
                                        <Link className="btn-one-add" href="/product-details">
                                        <span className="txt">Add to Cart</span>
                                        </Link>
                                    </div>
                                    </div>
                                </div>
                                <div className="title-holder">
                                    <h3>
                                    <Link href="/product-details">Roof Damage Repair</Link>
                                    </h3>
                                    <h6>$70.00</h6>
                                </div>
                                </div>
                            </div>
                            {/*End Single Shop Item*/}
                            {/*Start Single Shop Item*/}
                            <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12">
                                <div className="single-shop-item text-center">
                                <div className="img-holder">
                                    <Link href="product-details">
                                    <img src="assets/images/shop/shop-2.png" alt="" />
                                    </Link>
                                    <div className="overlay" />
                                    <div className="shop-hover-btn">
                                    <div className="shop-top-btn">
                                        <div className="top-btn-one">
                                        <Link href="product-details">
                                            <span className="icon-49" />
                                        </Link>
                                        </div>
                                        <div className="top-btn-one">
                                        <Link href="product-details">
                                            <span className="icon-35" />
                                        </Link>
                                        </div>
                                    </div>
                                    <div className="add-to-cart">
                                        <Link className="btn-one-add" href="/product-details">
                                        <span className="txt">Add to Cart</span>
                                        </Link>
                                    </div>
                                    </div>
                                </div>
                                <div className="title-holder">
                                    <h3>
                                    <Link href="/product-details">Roof Installation</Link>
                                    </h3>
                                    <h6>$70.00</h6>
                                </div>
                                </div>
                            </div>
                            {/*End Single Shop Item*/}
                            {/*Start Single Shop Item*/}
                            <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12">
                                <div className="single-shop-item text-center">
                                <div className="img-holder">
                                    <Link href="product-details">
                                    <img src="assets/images/shop/shop-3.png" alt="" />
                                    </Link>
                                    <div className="overlay" />
                                    <div className="shop-hover-btn">
                                    <div className="shop-top-btn">
                                        <div className="top-btn-one">
                                        <Link href="product-details">
                                            <span className="icon-49" />
                                        </Link>
                                        </div>
                                        <div className="top-btn-one">
                                        <Link href="product-details">
                                            <span className="icon-35" />
                                        </Link>
                                        </div>
                                    </div>
                                    <div className="add-to-cart">
                                        <Link className="btn-one-add" href="/product-details">
                                        <span className="txt">Add to Cart</span>
                                        </Link>
                                    </div>
                                    </div>
                                </div>
                                <div className="title-holder">
                                    <h3>
                                    <Link href="/product-details">Roof Layer Fixing</Link>
                                    </h3>
                                    <h6>$70.00</h6>
                                </div>
                                </div>
                            </div>
                            {/*End Single Shop Item*/}
                            {/*Start Single Shop Item*/}
                            <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12">
                                <div className="single-shop-item text-center">
                                <div className="img-holder">
                                    <Link href="product-details">
                                    <img src="assets/images/shop/shop-4.png" alt="" />
                                    </Link>
                                    <div className="overlay" />
                                    <div className="shop-hover-btn">
                                    <div className="shop-top-btn">
                                        <div className="top-btn-one">
                                        <Link href="product-details">
                                            <span className="icon-49" />
                                        </Link>
                                        </div>
                                        <div className="top-btn-one">
                                        <Link href="product-details">
                                            <span className="icon-35" />
                                        </Link>
                                        </div>
                                    </div>
                                    <div className="add-to-cart">
                                        <Link className="btn-one-add" href="/product-details">
                                        <span className="txt">Add to Cart</span>
                                        </Link>
                                    </div>
                                    </div>
                                </div>
                                <div className="title-holder">
                                    <h3>
                                    <Link href="/product-details">Roof Siding Install</Link>
                                    </h3>
                                    <h6>$70.00</h6>
                                </div>
                                </div>
                            </div>
                            {/*End Single Shop Item*/}
                            </div>
                        </div>
                        {/*End Related Product Content*/}
                        </div>
                    </section>
                    {/*End Product Details Area*/}

                </div>

            </Layout>
        </>
    )
}
