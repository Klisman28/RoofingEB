'use client'
import Link from "next/link";
import { useState } from "react";

const MobileMenu = ({ isSidebar, handleMobileMenu, handleSidebar }) => {
    const [isActive, setIsActive] = useState({
        status: false,
        key: "",
        subMenuKey: "",
    });

    const handleToggle = (key, subMenuKey = "") => {
        if (isActive.key === key && isActive.subMenuKey === subMenuKey) {
            setIsActive({
                status: false,
                key: "",
                subMenuKey: "",
            });
        } else {
            setIsActive({
                status: true,
                key,
                subMenuKey,
            });
        }
    };
    return (
        <>

            {/*Mobile Menu */}
            <div className="mobile-menu">
                <div className="menu-backdrop" onClick={handleMobileMenu}></div>
                <div className="close-btn" onClick={handleMobileMenu}><i className="fas fa-times"></i></div>

                <nav className="menu-box">
                    <div className="nav-logo">
                        <Link href="/">
                            <img src="assets/images/white-logo.png" alt="E&B Roofing" />
                        </Link>
                    </div>
                    {/*menu-outer*/}
                    <div className="menu-outer">
                        <div className="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
                            <ul className="navigation clearfix">
                                <li className={isActive.key == 1 ? "dropdown current" : "dropdown"}><Link href="/" onClick={handleMobileMenu}>Home</Link>
                                </li>
                                <li><Link href="/about" onClick={handleMobileMenu}>About</Link></li>
                                <li><Link href="/services" onClick={handleMobileMenu}>Roofing Services</Link></li>
                                <li><Link href="/project-2" onClick={handleMobileMenu}>Our Work</Link></li>
                                <li><Link href="/testimonial-2" onClick={handleMobileMenu}>Reviews</Link></li>
                                <li><Link href="/contact" onClick={handleMobileMenu}>Contact</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="contact-info">
                        <h4>Contact Info</h4>
                        <ul>
                            <li>Pawtucket, Rhode Island
                                (Serving MA & RI)</li>
                            <li>
                                <Link href="tel:+7743001932"> (774) 300-1932</Link>
                            </li>
                            <li>
                                <Link href="mailto:E_broofing@yahoo.com">E_broofing@yahoo.com</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="social-links">
                        <ul className="clearfix">
                            <li>
                                <Link href="https://www.facebook.com/ebroofingusa">
                                    <span className="fab fa-facebook-square" />
                                </Link>
                            </li>
                            <li>
                                <Link href="https://www.instagram.com/e_broofing">
                                    <span className="fab fa-instagram" />
                                </Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
            {/*End Mobile Menu */}


            <div className="nav-overlay" style={{ display: `${isSidebar ? "block" : "none"}` }} onClick={handleSidebar} />



        </>
    )
}
export default MobileMenu;
