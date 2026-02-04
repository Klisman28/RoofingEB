
'use client';
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { useState } from "react"

export default function Home() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });
    const [status, setStatus] = useState('idle');
    const [responseMsg, setResponseMsg] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('submitting');
        setResponseMsg('');

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });
            const data = await res.json();
            if (res.ok) {
                setStatus('success');
                setResponseMsg('Thank you! Your message has been sent.');
                setFormData({ name: '', email: '', phone: '', message: '' });
            } else {
                setStatus('error');
                setResponseMsg(data.error || 'Something went wrong.');
            }
        } catch (error) {
            setStatus('error');
            setResponseMsg('Failed to send message.');
        }
    };

    return (
        <>
            <Layout headerStyle={4} footerStyle={1} breadcrumbTitle="Contact Us">
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
                                                <p>E&B ROOFING LLC specializes in top-quality roofing, siding and window services. Serving Southeastern Massachusetts and Rhode Island for over 15 years.</p>
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
                                                        <p>Pawtucket, Rhode Island <br /> (Serving RI & Southeastern MA)</p>
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
                                                        <a href="mailto:E_broofing@yahoo.com">E_broofing@yahoo.com</a>
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
                                                        <p>Call or Text</p>
                                                        <a href="tel:+17743001932">(774) 300-1932</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-12 offset-lg-2">
                                        <div className="contact__right">
                                            <div className="form-inner">
                                                <div className="contact___title">
                                                    <span>Free Estimate</span>
                                                    <h3> Send Us Message</h3>
                                                </div>
                                                <form onSubmit={handleSubmit} id="contact-form" >
                                                    <div className="row clearfix">
                                                        <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                                            <input type="text" name="name" placeholder="Your Name" required value={formData.name} onChange={handleChange} />
                                                        </div>
                                                        <div className="col-lg-6 col-md-6 col-sm-12 ps-xl-0 form-group">
                                                            <input type="email" name="email" placeholder="Your email" required value={formData.email} onChange={handleChange} />
                                                        </div>
                                                        <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                                                            <input type="text" name="phone" placeholder="Phone Number" required value={formData.phone} onChange={handleChange} />
                                                        </div>
                                                        <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                                                            <textarea name="message" placeholder="Type message" required value={formData.message} onChange={handleChange}></textarea>
                                                        </div>
                                                        <div className="col-lg-12 col-md-12 col-sm-12 form-group message-btn">
                                                            <div className="more__buttons">
                                                                <button className="btn-one" type="submit" name="submit-form" disabled={status === 'submitting'}>
                                                                    <em>
                                                                        <i></i>
                                                                        <i></i>
                                                                        <i></i>
                                                                        <i></i>
                                                                        <i></i>
                                                                        <i></i>
                                                                        <i></i>
                                                                    </em>
                                                                    <span>{status === 'submitting' ? 'Sending...' : 'Send Your Message'} </span>
                                                                </button>
                                                            </div>
                                                            {status === 'success' && <p style={{ color: 'green', marginTop: '10px' }}>{responseMsg}</p>}
                                                            {status === 'error' && <p style={{ color: 'red', marginTop: '10px' }}>{responseMsg}</p>}
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
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47532.66779774635!2d-71.42878770742513!3d41.8795083162791!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e4431a40306ee1%3A0xe54d24660252119d!2sPawtucket%2C%20RI!5e0!3m2!1sen!2sus!4v1672123672895"
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