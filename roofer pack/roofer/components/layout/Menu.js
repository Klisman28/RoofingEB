import Link from "next/link"
// import { useRouter } from "next/router"

export default function Menu() {
    // const router = useRouter()

    return (
        <>

            {/* <ul className="sub-menu">
                <Link className={router.pathname == "/" ? "active" : ""}>Home Default</Link>
                <Link className={router.pathname == "/index-2" ? "active" : ""}>Home Interior</Link>
            </ul> */}

            {/* <ul className="navigation clearfix">
                <li className="dropdown"><Link href="/">Home</Link>
                    <ul>
                        <li><Link href="/">Home Page 01</Link></li>
                        <li><Link href="/index-2">Home Page 02</Link></li>
                        <li><Link href="/index-3">Home Page 03</Link></li>
                    </ul>
                </li>
                <li className="dropdown"><Link href="#">Services</Link>
                    <ul>
                        <li><Link href="/services1">Our Services 1</Link></li>
                        <li><Link href="/services2">Our Services 2</Link></li>
                        <li><Link href="/tax-management">Tax Management</Link></li>
                        <li><Link href="/strategy-planning">Strategy & Planning</Link></li>
                        <li><Link href="/program-manager">Program Manager</Link></li>
                        <li><Link href="/investment-policy">Investment Policy</Link></li>
                        <li><Link href="/financial-advices">Financial Advices</Link></li>
                        <li><Link href="/insurance-strategy">Insurance Strategy</Link></li>
                    </ul>
                </li>
                <li className="dropdown"><Link href="#">Pages</Link>
                    <ul>
                        <li className="dropdown"><Link href="#">Team</Link>
                            <ul>
                                <li><Link href="/team">Team Member</Link></li>
                                <li><Link href="/team-details">Team Details</Link></li>
                            </ul>
                        </li>
                        <li><Link href="/portfolio">Portfolio</Link></li>
                        <li><Link href="/about-us">About Us</Link></li>
                        <li><Link href="/pricing-table">Pricing Table</Link></li>
                        <li><Link href="/career">Career</Link></li>
                        <li><Link href="/faq">Faq’s</Link></li>
                        <li><Link href="/testimonials">Testimonials</Link></li>
                        <li><Link href="/404">404</Link></li>
                    </ul>
                </li>
                <li className="dropdown"><Link href="#">Shop</Link>
                    <ul>
                        <li><Link href="/shop">Products</Link></li>
                        <li><Link href="/product-details">Product Details</Link></li>
                        <li><Link href="/shopping-cart">Shopping Cart</Link></li>
                        <li><Link href="/checkout">Checkout</Link></li>
                    </ul>
                </li>
                <li className="dropdown"><Link href="#">Blog</Link>
                    <ul>
                        <li><Link href="/blog">Blog Grid</Link></li>
                        <li><Link href="/blog-2">Blog Standard</Link></li>
                        <li><Link href="/blog-details">Blog Details</Link></li>
                    </ul>
                </li> 
                <li><Link href="/contact">Contact</Link></li>
            </ul> */}
            <ul className="navigation clearfix">
                <li className=""><Link href="/">Home</Link>






                </li>
                <li><Link href="/about">About</Link></li>
                <li className=""><Link href="/services">Roofing Services</Link>
                    <ul>
                        <li><Link href="/services">Services</Link></li>
                        <li><Link href="/services-single">Services Single</Link></li>
                        <li><Link href="/services-details">Services Details</Link></li>
                    </ul>
                </li>
                <li className=""><Link href="/project-2">Our Work</Link>
                    {/** <ul>
                                                <li className="dropdown"><Link href="#">Team</Link>
                                                    <ul>
                                                        <li><Link href="/team-1">Team 1</Link></li>
                                                        <li><Link href="/team-2">Team 2</Link></li>
                                                        <li><Link href="/team-details">Team Details</Link></li>
                                                    </ul>
                                                </li>
                                                <li className="dropdown"><Link href="#">Testimonial</Link>
                                                    <ul>
                                                        <li><Link href="/testimonial-1">Testimonial 1</Link></li>
                                                        <li><Link href="/testimonial-2">Testimonial 2</Link></li>
                                                    </ul>
                                                </li>
                                                <li className="dropdown"><Link href="#">Review</Link>
                                                    <ul>
                                                        <li><Link href="/project-1">Project 1</Link></li>
                                                        <li><Link href="/project-2">Project 2</Link></li>
                                                        <li><Link href="/project-details">Project Details</Link></li>
                                                    </ul>
                                                </li>
                                                <li className="dropdown"><Link href="#">Store</Link>
                                                    <ul>
                                                        <li><Link href="/shop">Shop</Link></li>
                                                        <li><Link href="/shop-details">Shop Details</Link></li>
                                                        <li><Link href="/cart">Cart Page</Link></li>
                                                        <li><Link href="/checkout">Checkout</Link></li>
                                                    </ul>
                                                </li>
                                                <li><Link href="/faq">FAQ</Link></li>
                                                <li><Link href="/pricing">Pricing</Link></li>
                                                <li><Link href="/error">Error</Link></li>
                                            </ul> */}
                </li>
                <li className=""><Link href="/testimonial-2">Review</Link>
                    <ul>
                        <li><Link href="/blog-grid">Blog Grid</Link></li>
                        <li><Link href="/blog-standard">Blog Standard</Link></li>
                        <li><Link href="/blog-details">Blog Details</Link></li>
                    </ul>
                </li>
                <li><Link href="/contact"> Contact </Link></li>
            </ul>
        </>
    )
}
