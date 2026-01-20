
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Home() {

    return (
        <>
            <Layout headerStyle={4} footerStyle={1} breadcrumbTitle="CONTACT US">
                <div>
                    {/*contact-page */}
                    <section className="contact__page see__pad p_relative">
                        <div className="auto_container">
                            <div className="contact__page__content">
                                <div className="row">
                                    <div className="col-lg-4 col-md-12">
                                        <div className="contact__left">
                                            <div className="title">
                                                <div className="sub__title">
                                                    <h6>Contact Info</h6>
                                                </div>
                                                <div className="main__title">
                                                    <h2>Get In Touch</h2>
                                                </div>
                                            </div>
                                            <div className="normal__text">
                                                <p>Eros proin nibh neque interdum accumsan, neque vitae. Tortor etiam sed suspendise faucibus volutpat mattis tortor nec.</p>
                                            </div>
                                            <div className="contact__info">
                                                <div className="contact__info__block">
                                                    <div className="left__site__info">
                                                        <div className="contact__icon one">
                                                            <span className="icon-30"></span>
                                                        </div>
                                                    </div>
                                                    <div className="right__site__info one">
                                                        <h4>Our Location</h4>
                                                        <p>4517 Washington Ave. Manchester,
                                                            Kentucky 39495</p>
                                                    </div>
                                                </div>
                                                <div className="contact__info__block">
                                                    <div className="left__site__info">
                                                        <div className="contact__icon one">
                                                            <span className="icon-51"></span>
                                                        </div>
                                                    </div>
                                                    <div className="right__site__info one">
                                                        <h4>Email Address</h4>
                                                        <a href="mailto:contact@example.com">contact@example.com </a> <br/>
                                                        <a href="mailto:support@example.com">support@example.com </a> 
                                                    </div>
                                                </div>
                                                <div className="contact__info__block">
                                                    <div className="left__site__info">
                                                        <div className="contact__icon one">
                                                            <span className="icon-36"></span>
                                                        </div>
                                                    </div>
                                                    <div className="right__site__info one">
                                                        <h4>Phone Number</h4>
                                                        <p>Emergency Cases</p>
                                                        <a href="tel:+456987231">+(208) 555-0112 (24/7)</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-12 offset-lg-2">
                                        <div className="contact__right">
                                            <div className="form-inner">
                                                <div className="contact___title">
                                                    <span>Booking Form</span>
                                                    <h3> Send Us Message</h3>
                                                </div>
                                                <form method="post" action="/" id="contact-form" > 
                                                    <div className="row clearfix">
                                                        <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                                            <input type="name" name="first-name" placeholder="Your Name" required="" aria-required="true"/>
                                                        </div>
                                                        <div className="col-lg-6 col-md-6 col-sm-12 ps-xl-0 form-group">
                                                            <input type="email" name="email" placeholder="Your email" required="" aria-required="true"/>
                                                        </div>
                                                        <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                                                            <input type="name" name="last-name" placeholder="Your Name" required="" aria-required="true"/>
                                                        </div>
                                                        <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                                                            <textarea name="message" placeholder="Type message"></textarea>
                                                        </div>
                                                        <div className="col-lg-12 col-md-12 col-sm-12 form-group message-btn">
                                                            <div className="more__buttons"> 
                                                                <button className="btn-one" type="submit" name="submit-form">
                                                                    <em>
                                                                        <i></i>
                                                                        <i></i>
                                                                        <i></i>
                                                                        <i></i>
                                                                        <i></i>
                                                                        <i></i>
                                                                        <i></i>
                                                                    </em>
                                                                <span>Send Your Message </span> 
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
                    </section>
                    {/*contact-page end */}
                    
                    {/*google-map */}
                    <section className="google__map">
                        <div className="map__location">
                            <iframe 
                                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d2489.311254698863!2d0.4934654155410975!3d51.39733537961717!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1672123672895!5m2!1sen!2sbd" 
                                width="100%" 
                                height="450" 
                                style={{ border: '0' }} 
                                allowFullScreen 
                                loading="lazy" 
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Google Map"
                            ></iframe>
                        </div>
                    </section>
                    {/*google-map_end */}


                </div>

            </Layout>
        </>
    )
}