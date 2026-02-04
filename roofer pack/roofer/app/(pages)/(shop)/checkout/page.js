
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Home() {

    return (
        <>
            <Layout headerStyle={4} footerStyle={1} breadcrumbTitle="Checkout">
                <div>
                {/*Start Checkout area*/}
                <section className="checkout-area see__pad">
                    <div className="auto_container">
                    <div className="row text-right-rtl">
                        <div className="col-md-12">
                        <div className="coupon">
                            <div className="title">
                            <h5>
                                Have a Coupon?{" "}
                                <Link href="/cart">Click here to enter your code</Link>
                            </h5>
                            </div>
                            <div className="remove">
                            <span className="icon-18" />
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="row text-right-rtl">
                        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                        <div className="form billing-info">
                            <div className="title">
                            <h3>Billing Details</h3>
                            </div>
                            <form method="post" action="/">
                            <div className="row">
                                <div className="col-lg-6">
                                <div className="field-label">First Name*</div>
                                <div className="field-input">
                                    <input
                                    type="text"
                                    name="fname"
                                    defaultValue=""
                                    placeholder=""
                                    required=""
                                    />
                                </div>
                                </div>
                                <div className="col-lg-6">
                                <div className="field-label">Last Name*</div>
                                <div className="field-input">
                                    <input
                                    type="text"
                                    name="lname"
                                    defaultValue=""
                                    placeholder=""
                                    required=""
                                    />
                                </div>
                                </div>
                                <div className="col-lg-12">
                                <div className="field-label">Company Name</div>
                                <div className="field-input">
                                    <input
                                    type="text"
                                    name="country"
                                    defaultValue=""
                                    placeholder=""
                                    />
                                </div>
                                </div>
                                <div className="col-lg-12">
                                <div className="field-label">Email Address*</div>
                                <div className="field-input">
                                    <input
                                    type="email"
                                    name="email"
                                    defaultValue=""
                                    placeholder=""
                                    required=""
                                    />
                                </div>
                                </div>
                                <div className="col-lg-6">
                                <div className="field-label">Phone Number*</div>
                                <div className="field-input">
                                    <input
                                    type="tel"
                                    name="phone"
                                    placeholder=""
                                    pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                                    required=""
                                    />
                                </div>
                                </div>
                                <div className="col-lg-6">
                                <div className="field-label">Country*</div>
                                <div className="field-input">
                                    <div className="select-box">
                                    <select className="wide">
                                        <option data-display="United State">
                                        United State
                                        </option>
                                        <option value={1}>United Kingdom (UK)</option>
                                        <option value={2}>Canada</option>
                                        <option value={3}>France</option>
                                    </select>
                                    </div>
                                </div>
                                </div>
                                <div className="col-lg-12">
                                <div className="field-label">Address*</div>
                                <div className="field-input address">
                                    <input
                                    type="text"
                                    name="address"
                                    defaultValue=""
                                    placeholder=""
                                    required=""
                                    />
                                </div>
                                </div>
                                <div className="col-lg-12">
                                <div className="field-input">
                                    <input
                                    type="text"
                                    name="address"
                                    defaultValue=""
                                    placeholder=""
                                    required=""
                                    />
                                </div>
                                </div>
                                <div className="col-lg-12">
                                <div className="field-label">Town/City*</div>
                                <div className="field-input">
                                    <input
                                    type="text"
                                    name="town-city"
                                    defaultValue=""
                                    placeholder=""
                                    required=""
                                    />
                                </div>
                                </div>
                                <div className="col-lg-12">
                                <div className="row">
                                    <div className="col-lg-6">
                                    <div className="field-label">State*</div>
                                    <div className="field-input">
                                        <div className="select-box">
                                        <select className="wide">
                                            <option data-display="Select State">
                                            Select State
                                            </option>
                                            <option value={1}>United Kingdom (UK)</option>
                                            <option value={2}>Canada</option>
                                            <option value={3}>France</option>
                                        </select>
                                        </div>
                                    </div>
                                    </div>
                                    <div className="col-lg-6">
                                    <div className="field-label">Zip Code*</div>
                                    <div className="field-input">
                                        <input
                                        type="text"
                                        name="zipcode"
                                        defaultValue=""
                                        placeholder=""
                                        required=""
                                        />
                                    </div>
                                    </div>
                                </div>
                                </div>
                                <div className="col-lg-12">
                                <div className="create-acc">
                                    <div className="checkbox">
                                    <label>
                                        <input type="checkbox" name="ship-same-address" />
                                        <span>Create an Account</span>
                                    </label>
                                    </div>
                                </div>
                                </div>
                                <div className="col-lg-12">
                                <div className="field-label">Order Notes</div>
                                <div className="field-input">
                                    <textarea
                                    name="order-notes"
                                    placeholder="Notes about your order, e.g. special notes for your delivery"
                                    defaultValue={""}
                                    />
                                </div>
                                </div>
                            </div>
                            </form>
                        </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                        <div className="form order-info">
                            <div className="title">
                            <h3>Your Order</h3>
                            </div>
                            <div className="order-info-table-box">
                            <div className="table-outer">
                                <table className="order-table">
                                <thead className="order-header clearfix">
                                    <tr>
                                    <th className="prod-column">Product</th>
                                    <th />
                                    <th>Total</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                    <td colSpan={2} className="prod-column">
                                        <div className="column-box">
                                        <div className="prod-thumb">
                                            <a href="#">
                                            <img
                                                src="assets/images/shop/product-thumb-1.png"
                                                alt=""
                                            />
                                            </a>
                                        </div>
                                        <div className="inner-title">
                                            <h3 className="prod-title">
                                            Roof Damage Repair
                                            <span className="flaticon-add-1" />1
                                            </h3>
                                        </div>
                                        </div>
                                    </td>
                                    <td className="total">$35.00</td>
                                    </tr>
                                    <tr>
                                    <td colSpan={2} className="prod-column">
                                        <div className="column-box">
                                        <div className="prod-thumb">
                                            <a href="#">
                                            <img
                                                src="assets/images/shop/product-thumb-2.png"
                                                alt=""
                                            />
                                            </a>
                                        </div>
                                        <div className="inner-title">
                                            <h3 className="prod-title">
                                            Roof Installation
                                            <span className="flaticon-add-1" />1
                                            </h3>
                                        </div>
                                        </div>
                                    </td>
                                    <td className="total">$25.00</td>
                                    </tr>
                                    <tr>
                                    <td colSpan={2} className="prod-column">
                                        <div className="column-box">
                                        <div className="prod-thumb">
                                            <a href="#">
                                            <img
                                                src="assets/images/shop/product-thumb-3.png"
                                                alt=""
                                            />
                                            </a>
                                        </div>
                                        <div className="inner-title">
                                            <h3 className="prod-title">
                                            Roof Frame Design
                                            <span className="flaticon-add-1" />1
                                            </h3>
                                        </div>
                                        </div>
                                    </td>
                                    <td className="total">$90.00</td>
                                    </tr>
                                    <tr>
                                    <td colSpan={2}>
                                        <h3 className="inner-title2">Sub Total</h3>
                                    </td>
                                    <td className="value">$150.50</td>
                                    </tr>
                                    <tr>
                                    <td colSpan={2}>
                                        <h3 className="inner-title2">Order Total</h3>
                                    </td>
                                    <td className="value2">$150.50</td>
                                    </tr>
                                </tbody>
                                </table>
                            </div>
                            </div>
                            <div className="payment-options">
                            <div className="title">
                                <h3>Payment Proccess</h3>
                            </div>
                            <div className="inner">
                                <div className="option-block">
                                <div className="checkbox">
                                    <label>
                                    <input name="pay-us" type="checkbox" />
                                    <span>Direct Bank Transfer</span>
                                    </label>
                                </div>
                                <div className="text">
                                    <p>
                                    Please send a check to Store Name, Store Street, Store
                                    Town, Store State / County, Store Postcode.
                                    </p>
                                </div>
                                </div>
                                <div className="option-block">
                                <div className="radio-block">
                                    <div className="checkbox">
                                    <label>
                                        <input name="pay-us" type="checkbox" />
                                        <span>
                                        Paypal <b>What is Paypal</b>
                                        </span>
                                    </label>
                                    </div>
                                </div>
                                </div>
                                <div className="placeorder-button text-left">
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
                                    <span className="txt">Place Your Order</span>
                                </button>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </section>
                {/*End Checkout area*/}
                </div>

            </Layout>
        </>
    )
}