'use client';
import Link from "next/link"
import { useState } from "react"

export default function News() {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState('idle');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('submitting');
        setMessage('');

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name: 'Newsletter Subscriber',
                    email: email,
                    phone: 'N/A', // Not collected in this form
                    message: 'New Newsletter Subscription Request'
                }),
            });

            if (res.ok) {
                setStatus('success');
                setMessage('Subscribed successfully!');
                setEmail('');
            } else {
                setStatus('error');
                setMessage('Subscription failed. Try again.');
            }
        } catch (error) {
            setStatus('error');
            setMessage('Something went wrong.');
        }
    };

    return (
        <>
            {/*news-letter */}
            <section className="news_letter">
                <div className="auto_container">
                    <div className="news_letter_content">
                        <div className="row">
                            <div className="col-xl-6 col-lg-12">
                                <div className="news_letter_left p_relative">
                                    <h3>Unlock Roofing Discounts</h3>
                                    <div className="form-inner p_relative">
                                        <form onSubmit={handleSubmit} className="subscribe-form">
                                            <div className="form-group">
                                                <input
                                                    type="email"
                                                    name="email"
                                                    placeholder="Your email"
                                                    required
                                                    value={email}
                                                    onChange={(e) => setEmail(e.target.value)}
                                                />
                                                <button type="submit" className="btn-two" disabled={status === 'submitting'}>
                                                    {status === 'submitting' ? '...' : 'Get My Free Tips'}
                                                </button>
                                            </div>
                                            {message & <div style={{ marginTop: '10px', color: status === 'success' ? 'white' : 'red' }}>{message}</div>}
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-12 ps-xl-0">
                                <div className="news_letter_right p_relative">
                                    <div className="image_layer shape_01" style={{ backgroundImage: 'url(assets/images/shape/shape-03.png)' }}> </div>
                                    <div className="news_letter_image">
                                        <figure className="image">
                                            <img src="assets/images/resource/news-letter.png" alt="" />
                                        </figure>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*news-letter-end */}
        </>
    )
}
