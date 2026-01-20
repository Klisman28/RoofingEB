import Link from "next/link"


export default function Quality() {
    return (
        <>
        {/* Quality-section */}
        <section className="quality__section three p_relative">
            <div className="auto_container">
            <div className="row">
                <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="inner__content two">
                    <div
                    className="image_layer shape-06"
                    style={{
                        backgroundImage: "url(assets/images/shape/shape-06.png)"
                    }}
                    />
                    <div className="icon__box p_ralative">
                    <div
                        className="icon__hover__bg__one"
                        style={{
                        backgroundImage: "url(assets/images/shape/shape-10.png)"
                        }}
                    />
                    <div
                        className="icon__hover__bg__two"
                        style={{
                        backgroundImage: "url(assets/images/shape/shape-9.png)"
                        }}
                    />
                    <div className="icon__outer">
                        <div className="icon__bg">
                        <span className="icon-7" />
                        </div>
                    </div>
                    </div>
                    <div className="service__text">
                    <h4>
                        <Link href="/services-details">Expert Engineer</Link>
                    </h4>
                    <p>
                        Suspendisse varius etiam est vitae dui tempus nec vitae orci
                        sodales metus velit nec at diam in sed.
                    </p>
                    </div>
                    <div className="more__btn">
                    <Link href="/services-details">
                        Read More <span className="icon-53" />{" "}
                        <span className="icon-52" />
                    </Link>
                    </div>
                </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="inner__content two">
                    <div
                    className="image_layer shape-06"
                    style={{
                        backgroundImage: "url(assets/images/shape/shape-06.png)"
                    }}
                    />
                    <div className="icon__box p_relative">
                    <div
                        className="icon__hover__bg__one"
                        style={{
                        backgroundImage: "url(assets/images/shape/shape-10.png)"
                        }}
                    />
                    <div
                        className="icon__hover__bg__two"
                        style={{
                        backgroundImage: "url(assets/images/shape/shape-9.png)"
                        }}
                    />
                    <div className="icon__outer">
                        <div className="icon__bg">
                        <span className="icon-12" />
                        </div>
                    </div>
                    </div>
                    <div className="service__text">
                    <h4>
                        <Link href="/services-details">Quality Materials</Link>
                    </h4>
                    <p>
                        Suspendisse varius etiam est vitae dui tempus nec vitae orci
                        sodales metus velit nec at diam in sed.
                    </p>
                    </div>
                    <div className="more__btn">
                    <Link href="/services-details">
                        Read More <span className="icon-53" />{" "}
                        <span className="icon-52" />
                    </Link>
                    </div>
                </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="inner__content two">
                    <div
                    className="image_layer shape-06"
                    style={{
                        backgroundImage: "url(assets/images/shape/shape-06.png)"
                    }}
                    />
                    <div className="icon__box p_relative">
                    <div
                        className="icon__hover__bg__one"
                        style={{
                        backgroundImage: "url(assets/images/shape/shape-10.png)"
                        }}
                    />
                    <div
                        className="icon__hover__bg__two"
                        style={{
                        backgroundImage: "url(assets/images/shape/shape-9.png)"
                        }}
                    />
                    <div className="icon__outer">
                        <div className="icon__bg">
                        <span className="icon-13" />
                        </div>
                    </div>
                    </div>
                    <div className="service__text">
                    <h4>
                        <Link href="/services-details">Free Estimates</Link>
                    </h4>
                    <p>
                        Suspendisse varius etiam est vitae dui tempus nec vitae orci
                        sodales metus velit nec at diam in sed.
                    </p>
                    </div>
                    <div className="more__btn">
                    <Link href="/services-details">
                        Read More <span className="icon-53" />{" "}
                        <span className="icon-52" />
                    </Link>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </section>
        {/* quality-section-end */}
        </>

    )
}
