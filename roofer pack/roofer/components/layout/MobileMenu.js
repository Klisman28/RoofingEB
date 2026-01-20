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
                    <img src="assets/images/white-logo.png" alt="" title="" />
                    </Link>
                </div>
                    {/*menu-outer*/}
                    <div className="menu-outer">
                        <div className="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
                            <ul className="navigation clearfix">
                            
                                <li className={isActive.key == 1 ? "dropdown current" : "dropdown"}><Link href="/" onClick={handleMobileMenu}>Home</Link>
                                    <ul style={{ display: `${isActive.key == 1 ? "block" : "none"}` }}>
                                        <li><Link href="/" onClick={handleMobileMenu}>Home One</Link></li>
                                        <li><Link href="/index-2" onClick={handleMobileMenu}>Home Two</Link></li>
                                        <li><Link href="/index-3" onClick={handleMobileMenu}>Home Three</Link></li>
                                        <li><Link href="/index-4" onClick={handleMobileMenu}>Home Four</Link></li>
                                        <li className={isActive.subMenuKey == 2 ? "dropdown current" : "dropdown"}>
                                        
                                        <Link href="/" onClick={handleMobileMenu}>Header Style</Link>
                                        <ul style={{ display: `${isActive.subMenuKey == 2 ? "block" : "none"}` }}>
                                            <li><Link href="/" onClick={handleMobileMenu}>Header Style 01</Link></li>
                                            <li><Link href="/index-2" onClick={handleMobileMenu}>Header Style 02</Link></li>
                                            <li><Link href="/index-3" onClick={handleMobileMenu}>Header Style 03</Link></li>
                                            <li><Link href="/index-4" onClick={handleMobileMenu}>Header Style 04</Link></li>
                                        </ul>

                                        <div className={isActive.subMenuKey == 2 ? "dropdown-btn open" : "dropdown-btn"} onClick={() => handleToggle(1, 2)}><span className="fa fa-angle-right" /></div>
                                    </li>
                                    </ul>
                                    <div className={isActive.key == 1 ? "dropdown-btn open" : "dropdown-btn"} onClick={() => handleToggle(1)}><span className="fa fa-angle-right" /></div>
                                </li>
                                <li><Link href="/about/" onClick={handleMobileMenu}>About Us</Link></li>

                                <li className={isActive.key == 3 ? "dropdown current" : "dropdown"}><Link href="/#" onClick={handleMobileMenu}>Services</Link>
                                    <ul style={{ display: `${isActive.key == 3 ? "block" : "none"}` }}>
                                        <li><Link href="/services" onClick={handleMobileMenu}>Services</Link></li>
                                        <li><Link href="/services-single" onClick={handleMobileMenu}>Services Single</Link></li>
                                        <li><Link href="/services-details" onClick={handleMobileMenu}>Services Details</Link></li>
                                    </ul>

                                    <div className={isActive.key == 3 ? "dropdown-btn open" : "dropdown-btn"} onClick={() => handleToggle(3)}><span className="fa fa-angle-right" /></div>
                                </li>


                                <li className={isActive.key == 4 ? "dropdown current" : "dropdown"}>
                                    <Link href="/#" onClick={handleMobileMenu}>Pages</Link>
                                    <ul style={{ display: `${isActive.key == 4 ? "block" : "none"}` }}>
                                        <li className={isActive.subMenuKey == 5 ? "dropdown current" : "dropdown"}>
                                            <Link href="/" onClick={handleMobileMenu}>Team</Link>
                                            <ul style={{ display: `${isActive.subMenuKey == 5 ? "block" : "none"}` }}>
                                                <li><Link href="/team" onClick={handleMobileMenu}>Our Team 1</Link></li>
                                                <li><Link href="/team-2" onClick={handleMobileMenu}>Our Team 2</Link></li>
                                                <li><Link href="/team-details" onClick={handleMobileMenu}>Team Details</Link></li>
                                            </ul>
                                            <div className={isActive.subMenuKey == 5 ? "dropdown-btn open" : "dropdown-btn"} onClick={() => handleToggle(4, 5)}><span className="fa fa-angle-right" /></div>
                                        </li>
                                        <li className={isActive.subMenuKey == 6 ? "dropdown current" : "dropdown"}>
                                            <Link href="/" onClick={handleMobileMenu}>Testimonial</Link>
                                            <ul style={{ display: `${isActive.subMenuKey == 6 ? "block" : "none"}` }}>
                                                <li><Link href="/testimonial-1" onClick={handleMobileMenu}>Testimonial 1</Link></li>
                                                <li><Link href="/testimonial-2" onClick={handleMobileMenu}>Testimonial 2</Link></li>
                                            </ul>
                                            <div className={isActive.subMenuKey == 6 ? "dropdown-btn open" : "dropdown-btn"} onClick={() => handleToggle(4, 6)}><span className="fa fa-angle-right" /></div>
                                        </li>
                                        <li className={isActive.subMenuKey == 7 ? "dropdown current" : "dropdown"}>
                                            <Link href="/" onClick={handleMobileMenu}>Project</Link>
                                            <ul style={{ display: `${isActive.subMenuKey == 7 ? "block" : "none"}` }}>
                                                <li><Link href="/project-1" onClick={handleMobileMenu}>Project 1</Link></li>
                                                <li><Link href="/project-2" onClick={handleMobileMenu}>Project 2</Link></li>
                                                <li><Link href="/project-details" onClick={handleMobileMenu}>Project Details</Link></li>
                                            </ul>
                                            <div className={isActive.subMenuKey == 7 ? "dropdown-btn open" : "dropdown-btn"} onClick={() => handleToggle(4, 7)}><span className="fa fa-angle-right" /></div>
                                        </li>
                                        <li className={isActive.subMenuKey == 8 ? "dropdown current" : "dropdown"}>
                                            <Link href="/" onClick={handleMobileMenu}>Shop</Link>
                                            <ul style={{ display: `${isActive.subMenuKey == 8 ? "block" : "none"}` }}>
                                                <li><Link href="/shop" onClick={handleMobileMenu}>Shop</Link></li>
                                                <li><Link href="/shop-details" onClick={handleMobileMenu}>Shop Details</Link></li>
                                                <li><Link href="/cart" onClick={handleMobileMenu}>Cart Page</Link></li>
                                                <li><Link href="/checkout" onClick={handleMobileMenu}>Checkout</Link></li>
                                            </ul>
                                            <div className={isActive.subMenuKey == 8 ? "dropdown-btn open" : "dropdown-btn"} onClick={() => handleToggle(4, 8)}><span className="fa fa-angle-right" /></div>
                                        </li>
                                        <li><Link href="/faq" onClick={handleMobileMenu}>FAQ</Link></li>
                                        <li><Link href="/pricing" onClick={handleMobileMenu}>Pricing</Link></li>
                                        <li><Link href="/error" onClick={handleMobileMenu}>Error</Link></li>
                                    </ul>
                                    <div className={isActive.key == 4 ? "dropdown-btn open" : "dropdown-btn"} onClick={() => handleToggle(4)}><span className="fa fa-angle-right" /></div>
                                </li>



                                <li className={isActive.key == 7 ? "dropdown current" : "dropdown"}>
                                    <Link href="/#" onClick={handleMobileMenu}>News</Link>
                                    <ul style={{ display: `${isActive.key == 7 ? "block" : "none"}` }}>
                                        <li><Link href="/blog-grid" onClick={handleMobileMenu}>Blog Grid</Link></li>
                                        <li><Link href="/blog-standard" onClick={handleMobileMenu}>Blog Standard</Link></li>
                                        <li><Link href="/blog-details" onClick={handleMobileMenu}>Blog Details</Link></li>
                                    </ul>
                                    <div className={isActive.key == 7 ? "dropdown-btn open" : "dropdown-btn"} onClick={() => handleToggle(7)}><span className="fa fa-angle-right" /></div>
                                </li>
                                <li><Link href="/contact" onClick={handleMobileMenu}>Contact</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="contact-info">
                        <h4>Contact Info</h4>
                        <ul>
                        <li>Chicago 12, Melborne City, USA</li>
                        <li>
                            <Link href="tel:+8801682648101">+88 01682648101</Link>
                        </li>
                        <li>
                            <Link href="mailto:info@example.com">info@example.com</Link>
                        </li>
                        </ul>
                    </div>
                    <div className="social-links">
                        <ul className="clearfix">
                        <li>
                            <Link href="/">
                            <span className="fab fa-twitter" />
                            </Link>
                        </li>
                        <li>
                            <Link href="/">
                            <span className="fab fa-facebook-square" />
                            </Link>
                        </li>
                        <li>
                            <Link href="/">
                            <span className="fab fa-pinterest-p" />
                            </Link>
                        </li>
                        <li>
                            <Link href="/">
                            <span className="fab fa-instagram" />
                            </Link>
                        </li>
                        <li>
                            <Link href="/">
                            <span className="fab fa-youtube" />
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
