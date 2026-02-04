import Link from "next/link"


export default function News() {
    return (
        <>
        {/* News-letter */}
        <section className="news_letter three see__pad">
            <div className="auto_container">
            <div className="news_letter_content">
                <div className="row">
                <div className="col-xl-6 col-lg-12">
                    <div className="help__left">
                    <div className="help__one">
                        <span className="icon-47" />
                    </div>
                    <div className="help__two">
                        <h2>Need Any Roofing Help?</h2>
                        <span>
                        Call us: <a href="tel:+21359281237">+21-359-28-1237</a>
                        </span>
                    </div>
                    </div>
                </div>
                <div className="col-xl-6 col-lg-12 pl-40">
                    <div className="news_letter_right p_relative">
                    <div
                        className="image_layer shape_01"
                        style={{
                        backgroundImage: "url(assets/images/shape/shape-03.png)"
                        }}
                    >
                        {" "}
                    </div>
                    <div className="news_letter_image">
                        <figure className="image">
                        <img src="assets/images/resource/need-help-01.png" alt="" />
                        </figure>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </section>
        {/* news-letter-end */}
        </>

    )
}
