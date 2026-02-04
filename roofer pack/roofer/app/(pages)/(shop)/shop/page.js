import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Home() {

    return (
        <>
            <Layout headerStyle={4} footerStyle={1} breadcrumbTitle="Shop Page">
                <div>

                {/*Start Shop Page One */}
                <section className="shop-page-one see__pad p_relative">
                    <div className="auto_container">
                        <div className="row text-right-rtl">
                            <div className="col-xl-3 col-lg-3 order-box-2">
                                <div className="sidebar-content-box left">
                                    {/*Start Single Sidebar Box */}
                                    <div className="single-sidebar-box">
                                        <div className="title">
                                            <h3>Search</h3>
                                        </div>
                                        <div className="single-sidebar_search_box">
                                            <div className="sidebar-search-box">
                                                <form className="search-form" action="#">
                                                    <input placeholder="Search" type="text"/>
                                                    <button type="submit"><i className="icon-17"></i></button>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                    {/*End Single Sidebar Box */}
                                    {/*Start Single Sidebar Box */}
                                    <div className="single-sidebar-box style2">
                                        <div className="title">
                                            <h3>Category</h3>
                                        </div>
                                        <div className="sidebar-categories">
                                            <ul className="sidebar-categories-box">
                                                <li><Link href="/shop">Roofing</Link></li>
                                                <li><Link href="/shop">Drill Machine</Link></li>
                                                <li><Link href="/shop">Helmet</Link></li>
                                                <li><Link href="/shop">Gloves Wall</Link></li>
                                                <li><Link href="/shop">Accessories</Link></li>
                                                <li><Link href="/shop">Uncategories</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    {/*End Single Sidebar Box */}
                                    {/*Start Single Sidebar Box */}
                                    <div className="single-sidebar-box">
                                        <div className="title">
                                            <h3>Filter by Price</h3>
                                        </div>
                                        <div className="price-ranger">
                                            <div id="slider-range"></div>
                                            <div className="ranger-min-max-block">
                                                <div className="left">
                                                    <input type="submit" value="Filter"/>
                                                </div>
                                                <div className="right">
                                                    <span>Price:</span>
                                                    <input type="text" className="min"/> 
                                                    <span>-</span>
                                                    <input type="text" className="max"/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* End Single Sidebar Box*/}
                                </div>
                            </div>
                
                            <div className="col-xl-9 col-lg-9 order-box-1">
                                <div className="shop-content-box">
                                    <div className="row">
                                        {/*Start Single Shop Item */}
                                        <div className="col-xl-4 col-lg-4 col-md-6">
                                            <div className="single-shop-item text-center">
                                                <div className="img-holder">
                                                    <Link href="product-details">
                                                        <img src="assets/images/shop/shop-1.png" alt=""/>
                                                    </Link>
                                                    <div className="overlay"></div>
                                                    <div className="shop-hover-btn">
                                                        <div className="shop-top-btn">
                                                            <div className="top-btn-one">
                                                            <Link href="product-details"><span className="icon-49"></span></Link> 
                                                            </div>
                                                            <div className="top-btn-one">
                                                            <Link href="product-details"><span className="icon-35"></span></Link>
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
                                                    <h3><Link href="/product-details">Roof Damage Repair</Link></h3>
                                                    <h6>$70.00</h6>
                                                </div>
                                            </div>
                                        </div>
                                        {/*End Single Shop Item */}
                                        {/*Start Single Shop Item */}
                                        <div className="col-xl-4 col-lg-4 col-md-6">
                                            <div className="single-shop-item text-center">
                                                <div className="img-holder">
                                                    <Link href="product-details">
                                                        <img src="assets/images/shop/shop-2.png" alt=""/>
                                                    </Link>
                                                    <div className="overlay"></div>
                                                    <div className="shop-hover-btn">
                                                        <div className="shop-top-btn">
                                                            <div className="top-btn-one">
                                                                <Link href="product-details"><span className="icon-49"></span></Link> 
                                                            </div>
                                                            <div className="top-btn-one">
                                                                <Link href="product-details"><span className="icon-35"></span></Link>
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
                                                    <h3><Link href="/product-details">Roof Installation</Link></h3>
                                                    <h6>$70.00</h6>
                                                </div>
                                            </div>
                                        </div>
                                        {/*End Single Shop Item */}

                                        {/*Start Single Shop Item */}
                                        <div className="col-xl-4 col-lg-4 col-md-6">
                                            <div className="single-shop-item text-center">
                                                <div className="img-holder">
                                                    <Link href="product-details">
                                                        <img src="assets/images/shop/shop-3.png" alt=""/>
                                                    </Link>
                                                    <div className="overlay"></div>
                                                    <div className="shop-hover-btn">
                                                        <div className="shop-top-btn">
                                                            <div className="top-btn-one">
                                                                <Link href="product-details"><span className="icon-49"></span></Link> 
                                                            </div>
                                                            <div className="top-btn-one">
                                                                <Link href="product-details"><span className="icon-35"></span></Link>
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
                                                    <h3><Link href="/product-details">Roof Layer Fixing</Link></h3>
                                                    <h6>$70.00</h6>
                                                </div>
                                            </div>
                                        </div>
                                        {/*End Single Shop Item */}

                                        {/*Start Single Shop Item */}
                                        <div className="col-xl-4 col-lg-4 col-md-6">
                                            <div className="single-shop-item text-center">
                                                <div className="img-holder">
                                                    <Link href="product-details">
                                                        <img src="assets/images/shop/shop-4.png" alt=""/>
                                                    </Link>
                                                    <div className="overlay"></div>
                                                    <div className="shop-hover-btn">
                                                        <div className="shop-top-btn">
                                                            <div className="top-btn-one">
                                                                <Link href="product-details"><span className="icon-49"></span></Link> 
                                                            </div>
                                                            <div className="top-btn-one">
                                                                <Link href="product-details"><span className="icon-35"></span></Link>
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
                                                    <h3><Link href="/product-details">Roof Siding Install</Link></h3>
                                                    <h6>$70.00</h6>
                                                </div>
                                            </div>
                                        </div>
                                        {/*End Single Shop Item */}

                                        {/*Start Single Shop Item */}
                                        <div className="col-xl-4 col-lg-4 col-md-6">
                                            <div className="single-shop-item text-center">
                                                <div className="img-holder">
                                                    <Link href="product-details">
                                                        <img src="assets/images/shop/shop-5.png" alt=""/>
                                                    </Link>
                                                    <div className="overlay"></div>
                                                    <div className="shop-hover-btn">
                                                        <div className="shop-top-btn">
                                                            <div className="top-btn-one">
                                                                <Link href="product-details"><span className="icon-49"></span></Link> 
                                                            </div>
                                                            <div className="top-btn-one">
                                                                <Link href="product-details"><span className="icon-35"></span></Link>
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
                                                    <h3><Link href="/product-details">Roof Frame Design</Link></h3>
                                                    <h6>$70.00</h6>
                                                </div>
                                            </div>
                                        </div>
                                        {/*End Single Shop Item */}

                                        {/*Start Single Shop Item */}
                                        <div className="col-xl-4 col-lg-4 col-md-6">
                                            <div className="single-shop-item text-center">
                                                <div className="img-holder">
                                                    <Link href="product-details">
                                                        <img src="assets/images/shop/shop-6.png" alt=""/>
                                                    </Link>
                                                    <div className="overlay"></div>
                                                    <div className="shop-hover-btn">
                                                        <div className="shop-top-btn">
                                                            <div className="top-btn-one">
                                                                <Link href="product-details"><span className="icon-49"></span></Link> 
                                                            </div>
                                                            <div className="top-btn-one">
                                                                <Link href="product-details"><span className="icon-35"></span></Link>
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
                                                    <h3><Link href="/product-details">Roof Cornering</Link></h3>
                                                    <h6>$70.00</h6>
                                                </div>
                                            </div>
                                        </div>
                                        {/*End Single Shop Item */}

                                        {/*Start Single Shop Item */}
                                        <div className="col-xl-4 col-lg-4 col-md-6">
                                            <div className="single-shop-item text-center">
                                                <div className="img-holder">
                                                    <Link href="product-details">
                                                        <img src="assets/images/shop/shop-7.png" alt=""/>
                                                    </Link>
                                                    <div className="overlay"></div>
                                                    <div className="shop-hover-btn">
                                                        <div className="shop-top-btn">
                                                            <div className="top-btn-one">
                                                                <Link href="product-details"><span className="icon-49"></span></Link> 
                                                            </div>
                                                            <div className="top-btn-one">
                                                                <Link href="product-details"><span className="icon-35"></span></Link>
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
                                                    <h3><Link href="/product-details">Corrugated Asphalt Roofing</Link></h3>
                                                    <h6>$70.00</h6>
                                                </div>
                                            </div>
                                        </div>
                                        {/*End Single Shop Item */}

                                        {/*Start Single Shop Item */}
                                        <div className="col-xl-4 col-lg-4 col-md-6">
                                            <div className="single-shop-item text-center">
                                                <div className="img-holder">
                                                    <Link href="product-details">
                                                        <img src="assets/images/shop/shop-8.png" alt=""/>
                                                    </Link>
                                                    <div className="overlay"></div>
                                                    <div className="shop-hover-btn">
                                                        <div className="shop-top-btn">
                                                            <div className="top-btn-one">
                                                                <Link href="product-details"><span className="icon-49"></span></Link> 
                                                            </div>
                                                            <div className="top-btn-one">
                                                                <Link href="product-details"><span className="icon-35"></span></Link>
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
                                                    <h3><Link href="/product-details">Roof Block Design</Link></h3>
                                                    <h6>$70.00</h6>
                                                </div>
                                            </div>
                                        </div>
                                        {/*End Single Shop Item */}

                                        {/*Start Single Shop Item */}
                                        <div className="col-xl-4 col-lg-4 col-md-6">
                                            <div className="single-shop-item text-center">
                                                <div className="img-holder">
                                                    <Link href="product-details">
                                                        <img src="assets/images/shop/shop-9.png" alt=""/>
                                                    </Link>
                                                    <div className="overlay"></div>
                                                    <div className="shop-hover-btn">
                                                        <div className="shop-top-btn">
                                                            <div className="top-btn-one">
                                                                <Link href="product-details"><span className="icon-49"></span></Link> 
                                                            </div>
                                                            <div className="top-btn-one">
                                                                <Link href="product-details"><span className="icon-35"></span></Link>
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
                                                    <h3><Link href="/product-details">Roof Cornering</Link></h3>
                                                    <h6>$70.00</h6>
                                                </div>
                                            </div>
                                        </div>
                                        {/*End Single Shop Item */}
                                    </div>
                                    <div className="row">
                                        <div className="col-xl-12">
                                            <ul className="styled-pagination text-center clearfix">
                                                <li className="arrow prev"><Link href="#"><span className="icon-46"></span></Link></li>
                                                <li className="active"><Link href="#">1</Link></li>
                                                <li><Link href="#">2</Link></li>
                                                <li className="arrow next"><Link href="#"><span className="icon-46"></span></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/*End Shop Page One */}

                </div>

            </Layout>
        </>
    )
}
