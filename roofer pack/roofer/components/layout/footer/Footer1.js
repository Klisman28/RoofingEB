import Link from "next/link"

export default function Footer1() {
    return (
        <>
            {/* main-footer */}
            <footer className="main__footer one p_relative">
                <div className="main__footer__top">
                    <div className="footer__top p_relative d_block">
                        <div className="auto_container">
                            <div className="footer__top__content">
                                <div className="footer__top__left">
                                    <div className="logo-widget">
                                        <figure className="footer-logo">
                                            <Link href="/">
                                                <img src="assets/images/white-logo.png" alt="" style={{ width: 160, height: "auto" }} />
                                            </Link>
                                        </figure>
                                    </div>
                                </div>
                                <div className="footer__top__right">
                                    <div className="footer__social__media">
                                        <ul>
                                            <li>
                                                <Link href="https://www.facebook.com/ebroofingusa">
                                                    <span className="icon-2" />
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="https://www.instagram.com/e_broofing/">
                                                    <span className="icon-23" />
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="https://nextdoor.com/page/eb-roofing-pawtucket-ri">
                                                    <span className="icon-8" />
                                                </Link>
                                            </li>
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
                                                <ul className="contact_list">
                                                    {/* Intro */}
                                                    <li className="contact_intro">
                                                        Based in <strong>Pawtucket, RI</strong>. Serving homeowners and businesses across
                                                        <strong> Rhode Island</strong> & <strong>Southeastern Massachusetts</strong>.
                                                    </li>

                                                    {/* Service area */}
                                                    <li className="contact_item">
                                                        <span className="contact_label" >Service Area: </span>
                                                        <span className="contact_value">
                                                            <p className="text-white">
                                                                Pawtucket · Cranston · East Providence · Central Falls
                                                                Attleboro · North Attleborough · Seekonk · Taunton
                                                                Mansfield · Easton · Rehoboth
                                                            </p>

                                                        </span>
                                                    </li>

                                                    {/* Email */}
                                                    <li className="contact_item">
                                                        <span className="contact_label">Email</span>
                                                        <a className="contact_link" href="mailto:E_broofing@yahoo.com">
                                                            E_broofing@yahoo.com
                                                        </a>
                                                    </li>

                                                    {/* Phone */}
                                                    <li className="contact_item">
                                                        <span className="contact_label">Phone</span>
                                                        <a className="contact_link" href="tel:+17743001932">
                                                            (774) 300-1932 <span className="contact_hint">— Call or Text</span>
                                                        </a>
                                                    </li>

                                                    {/* Licenses */}
                                                    <li className="contact_legal" style={{ fontSize: '13px', marginTop: '0px' }}>
                                                        MA HIC <strong>#212610</strong> · RI Registration <strong>#GC-47693</strong>
                                                    </li>
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
                                                    <li><Link href="/">Home</Link></li>
                                                    <li><Link href="/about">About</Link></li>
                                                    <li><Link href="/services">Roofing Services</Link></li>
                                                    <li><Link href="/project-2">Our Work</Link></li>
                                                    <li><Link href="/testimonial-2">Review</Link></li>
                                                    <li><Link href="/contact">Contact</Link></li>
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
                                                    <li>Mon - Fri: 8:00AM - 6:00PM</li>
                                                    <li>Sat: 8:00AM - 2:00PM</li>
                                                    <li>Sun: By appointment only</li>
                                                    <li>24/7 emergency tarping & leak response available.</li>
                                                </ul>
                                                <div className="widget_media">
                                                    <ul>
                                                        <li>
                                                            <Link href="https://www.facebook.com/ebroofingusa">
                                                                <span className="icon-2" />
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link href="https://www.instagram.com/e_broofing">
                                                                <span className="icon-23" />
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link href="https://nextdoor.com/page/eb-roofing-pawtucket-ri">
                                                                <span className="icon-8" />
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-1" />
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
                                                                <Link href="https://www.instagram.com/e_broofing/">
                                                                    <img
                                                                        src="assets/images/resource/instagram0.jpg"
                                                                        alt=""
                                                                        style={{ width: 150, height: 150, objectFit: "cover", display: "block" }}

                                                                    />
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="inner__box">
                                                            <div className="image__box">
                                                                <Link href="https://www.instagram.com/e_broofing/">
                                                                    <img
                                                                        src="assets/images/resource/instagram1.jpg"
                                                                        alt=""
                                                                        style={{ width: 150, height: 150, objectFit: "cover", display: "block" }}

                                                                    />
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="inner__box">
                                                            <div className="image__box">
                                                                <Link href="https://www.instagram.com/e_broofing/">
                                                                    <img
                                                                        src="assets/images/resource/instagram3.jpg"
                                                                        alt=""
                                                                        style={{ width: 150, height: 150, objectFit: "cover", display: "block" }}

                                                                    />
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="inner__box">
                                                            <div className="image__box">
                                                                <Link href="https://www.instagram.com/e_broofing/">
                                                                    <img
                                                                        src="assets/images/resource/instagram4.jpg"
                                                                        alt=""
                                                                        style={{ width: 150, height: 150, objectFit: "cover", display: "block" }}

                                                                    />
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="inner__box">
                                                            <div className="image__box">
                                                                <Link href="https://www.instagram.com/e_broofing/">
                                                                    <img
                                                                        src="assets/images/resource/instagram5.jpg"
                                                                        alt=""
                                                                        style={{ width: 150, height: 150, objectFit: "cover", display: "block" }}

                                                                    />
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="inner__box">
                                                            <div className="image__box">
                                                                <Link href="https://www.instagram.com/e_broofing/">
                                                                    <img
                                                                        src="assets/images/resource/instagram6.jpg"
                                                                        alt=""
                                                                        style={{ width: 150, height: 150, objectFit: "cover", display: "block" }}

                                                                    />
                                                                </Link>
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
                            <div className="copyright">
                                <p>
                                    © {new Date().getFullYear()} E&amp;B Roofing LLC. All rights
                                    reserved.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            {/* main-footer end */}
        </>
    )
}
