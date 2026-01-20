import Link from "next/link"

export default function Footer1() {
    return (
        <>
            {/*main-footer */}
            <footer className="main__footer three p_relative">
                <div className="main__footer__top">
                    <div className="footer__top p_relative d_block">
                        <div className="auto_container">
                            <div className="footer__top__content">
                                <div className="footer__top__left">
                                    <div className="logo-widget">
                                        <figure className="footer-logo"><Link href="/"><img src="assets/images/footer-logo.png" alt=""/></Link></figure>
                                    </div>
                                </div>
                                <div className="footer__top__right">
                                    <div className="footer__social__media">
                                        <ul>
                                            <li><Link href="/"><span className="icon-2"></span></Link></li>
                                            <li><Link href="/"><span className="icon-1"></span></Link></li>
                                            <li><Link href="/"><span className="icon-23"></span></Link></li>
                                            <li><Link href="/"><span className="icon-3"></span></Link></li>
                                            <li><Link href="/"><span className="icon-24"></span></Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer__middle p_relative d_block">
                        <div className="auto_container">
                            <div className="footer__middle__content">
                                <div className="row clearfix">
                                    <div className="col-lg-3 col-md-6 col-sm-12 footer_column">
                                        <div className="footer_widget left">
                                            <div className="widget_title">
                                                <h4>Get In Touch</h4>
                                            </div>
                                            <div className="widget_content">
                                                <ul className="links_list clearfix">
                                                    <li>Tincidunt neque pretium lectus <br/>
                                                        donec risus.</li>
                                                    <li><span>Add:</span> New Hyde Park, NY 11040</li>
                                                    <li><span>Email:</span> <Link href="mailto:example@gmail.com">example@gmail.com</Link></li>
                                                    <li><span>Phone:</span> <Link href="tel:3336660000"> 333 666 0000</Link></li>
                                                </ul>
                                            </div>  
                                            <div className="widget_media">
                                                <ul>
                                                    <li><Link href="/"><span className="icon-2"></span></Link></li>
                                                    <li><Link href="/"><span className="icon-1"></span></Link></li>
                                                    <li><Link href="/"><span className="icon-23"></span></Link></li>
                                                </ul>
                                            </div>    
                                        </div>
                                    </div>
                                    <div className="col-lg-2 col-md-6 col-sm-12 footer_column">
                                        <div className="footer_widget links_widget ml_100">
                                            <div className="widget_title">
                                                <h4>Links</h4>
                                            </div>
                                            <div className="widget_content">
                                                <ul className="links_list clearfix">
                                                    <li><Link href="/about">About Us</Link></li>
                                                    <li><Link href="/services">Services</Link></li>
                                                    <li><Link href="/">Case</Link></li>
                                                    <li><Link href="/">Roof Repair</Link></li>
                                                    <li><Link href="/">Contact Us</Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6 col-sm-12 footer_column">
                                        <div className="footer_widget links_widget">
                                            <div className="widget_title">
                                                <h4>Working Hours</h4>
                                            </div>
                                            <div className="widget_content">
                                                <ul className="links_list clearfix">
                                                    <li>Tincidunt neque pretium lectus
                                                        donec risus.</li>
                                                    <li>Mon - Fri: 9:00AM - 6:00PM</li>   
                                                    <li>Sat - Sun: 8:00AM - 4:00PM</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-1"></div>
                                    <div className="col-lg-3 col-md-6 col-sm-12 p-xl-0 footer_column">
                                        <div className="footer_widget links_widget">
                                            <div className="widget_title">
                                                <h4>Follow Instagram</h4>
                                            </div>
                                            <div className="widget_content">
                                                <ul className="instagram_list clearfix">
                                                    <li>
                                                        <div className="inner__box">
                                                            <div className="image__box">
                                                                <Link href="/"><img src="assets/images/resource/instagram-01.png" alt=""/></Link>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="inner__box">
                                                            <div className="image__box">
                                                                <Link href="/"><img src="assets/images/resource/instagram-02.png" alt=""/></Link>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="inner__box">
                                                            <div className="image__box">
                                                                <Link href="/"><img src="assets/images/resource/instagram-03.png" alt=""/></Link>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="inner__box">
                                                            <div className="image__box">
                                                                <Link href="/"><img src="assets/images/resource/instagram-04.png" alt=""/></Link>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="inner__box">
                                                            <div className="image__box">
                                                                <Link href="/"><img src="assets/images/resource/instagram-05.png" alt=""/></Link>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="inner__box">
                                                            <div className="image__box">
                                                                <Link href="/"><img src="assets/images/resource/instagram-06.png" alt=""/></Link>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer_bottom p_relative">
                    <div className="auto_container">
                        <div className="bottom_inner p_relative">
                            <div className="copyright"><p> Copyright 2024 by <Link href="/">Roofer</Link> theme All Right Reserved.</p></div>
                        </div>
                    </div>
                </div>
            </footer>
            {/*main-footer end */}

        </>
    )
}
