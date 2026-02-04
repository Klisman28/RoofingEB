'use client'
import QuantityInput from "@/components/elements/QuantityInput"
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Home() {

    return (
        <>
            <Layout headerStyle={4} footerStyle={1} breadcrumbTitle="Cart Page">
                <div>
                {/*Start cart area */}
                <section className="cart-area see__pad">
                    <div className="auto_container">
                        <div className="row text-right-rtl">
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                                <div className="cart-table-box">
                                    <div className="table-outer">
                                        <table className="cart-table">
                                            <thead className="cart-header clearfix">
                                                <tr>
                                                    <th></th>
                                                    <th></th>
                                                    <th className="prod-column">Product</th>
                                                    <th></th>
                                                    <th></th>
                                                    <th className="price">Price</th>
                                                    <th>Quantity</th>
                                                    <th>Subtotal</th>
                                                </tr>    
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <div className="remove">
                                                            <span className="icon-18"></span>
                                                        </div>
                                                    </td>
                                                    <td colSpan="4" className="prod-column">
                                                        <div className="column-box">
                                                            <div className="prod-thumb">
                                                                <a href="#"><img src="assets/images/shop/product-thumb-1.png" alt=""/></a>
                                                            </div>
                                                            <div className="title">
                                                                <h3 className="prod-title"><Link href="/shop-details">Safety Hand Gloves</Link> </h3>
                                                            </div>    
                                                        </div>
                                                    </td>
                                                    <td className="price">$35.00</td>
                                                    <td className="qty">
                                                        <div className="item-quantity">
                                                            <QuantityInput />
                                                        </div>
                                                    </td>
                                                    <td className="sub-total">$35.00</td> 
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div className="remove">
                                                            <span className="icon-18"></span>
                                                        </div>
                                                    </td>
                                                    <td colSpan="4" className="prod-column">
                                                        <div className="column-box">
                                                            <div className="prod-thumb">
                                                                <a href="#"><img src="assets/images/shop/product-thumb-2.png" alt=""/></a>
                                                            </div>
                                                            <div className="title">
                                                                <h3 className="prod-title"><Link href="/ shop-details">Roof Frame Design</Link> </h3>
                                                            </div>    
                                                        </div>
                                                    </td>
                                                    <td className="price">$35.00</td>
                                                    <td className="qty">
                                                        <div className="item-quantity">
                                                            <QuantityInput />
                                                        </div>
                                                    </td>
                                                    <td className="sub-total">$35.00</td> 
                                                </tr>

                                                <tr>
                                                    <td>
                                                        <div className="remove">
                                                            <span className="icon-18"></span>
                                                        </div>
                                                    </td>
                                                    <td colSpan="4" className="prod-column">
                                                        <div className="column-box">
                                                            <div className="prod-thumb">
                                                                <a href="#"><img src="assets/images/shop/product-thumb-3.png" alt=""/></a>
                                                            </div>
                                                            <div className="title">
                                                                <h3 className="prod-title"><Link href="/shop-details">Corrugated Asphalt Roofing</Link> </h3>
                                                            </div>    
                                                        </div>
                                                    </td>
                                                    <td className="price">$35.00</td>
                                                    <td className="qty">
                                                        <div className="item-quantity">
                                                            <QuantityInput />
                                                        </div>
                                                    </td>
                                                    <td className="sub-total">$35.00</td> 
                                                </tr>

                                            </tbody>    
                                        </table>
                                    </div>
                                </div>
                            </div>     
                        </div>
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="cart-button-box">
                                    <div className="apply-coupon">
                                        <div className="inner">
                                            <div className="cart__input__box">
                                                <input type="text" name="coupon-code" placeholder="Coupon code"/>
                                            </div>
                                            <div className="apply-coupon-button">        
                                                <button className="btn-one" type="submit">
                                                    <em>
                                                        <i></i>
                                                        <i></i>
                                                        <i></i>
                                                        <i></i>
                                                        <i></i>
                                                        <i></i>
                                                        <i></i>
                                                    </em>
                                                    <span className="txt">Apply Coupon</span>
                                                </button>
                                            </div> 
                                        </div>       
                                    </div>
                                    <div className="update-cart">
                                        <button className="btn-one update-cart-button" type="button">
                                            <em>
                                                <i></i>
                                                <i></i>
                                                <i></i>
                                                <i></i>
                                                <i></i>
                                                <i></i>
                                                <i></i>
                                            </em>
                                            <span className="txt">Update Cart</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row text-right-rtl">
                            <div className="col-xl-12">
                                <div className="cart-totals-form">
                                    <div className="inner-title">
                                        <h3>Cart Totals</h3>
                                    </div>
                                    <form className="cart-totals" method="post" action="#">
                                        <ul>
                                            <li>Subtotal <span>$150.50</span></li>
                                            <li>Order Total <span className="total">$150.50</span></li>
                                        </ul>
                                        <button className="btn-one" type="button"><span className="txt">Proceed to Checkout</span></button>
                                    </form>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </section>         
                {/*End cart area */}
                </div>

            </Layout>
        </>
    )
}