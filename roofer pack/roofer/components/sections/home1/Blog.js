import Link from "next/link"
export default function Blog() {
    return (
        <>
           {/*blog-section */}
            <section className="blog__section p_relative see__pad ">
                <div className="blog__content">
                    <div className="auto_container">
                        <div className="title text-center">
                            <div className="sub__title">
                                <h6>Article</h6>
                            </div>
                            <div className="main__title">
                                <h2>Get More Update From <br/> RoofTox</h2>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-4 col-md-6 col-sm-12">
                                <div className="news__block__one wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1500m">
                                    <div className="inner__box">
                                        <div className="image__box">
                                            <figure className="image">
                                                <Link href="/blog-details"><img src="assets/images/news/news-01.png" alt=""/></Link>
                                            </figure>
                                        </div>
                                        <div className="lower__content">
                                            <div className="image_layer shape-06" style={{backgroundImage: 'url(assets/images/shape/shape-06.png)'}}></div>
                                            <div className="news__date" style={{backgroundImage: 'url(assets/images/shape/shape-05.png)'}}>
                                                <Link href="#">15 <span>April</span> </Link>
                                            </div>
                                            <div className="news__title">
                                                <h4> <Link href="/blog-details"> How to Handle Unexpected Situations on Road </Link></h4>
                                            </div>
                                            <div className="author__info">
                                                <ul>
                                                    <li> 
                                                        <Link href="#"><span className="icon-icon-22"></span>by Admin</Link> <span>2 Comments</span>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="news__text">
                                                <p>Tincidunt Maur nemi sit Interdum praesent eget morbi lacinia volutpat pellentesque Tincidunt aurna suspit.</p>
                                            </div>
                                            <div className="more__btn">
                                                <Link href="/blog-details">Read More <span className="icon-53"></span> <span className="icon-52"></span></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div> 
                            <div className="col-lg-4 col-md-6 col-sm-12">
                                <div className="news__block__one wow fadeInUp animated" data-wow-delay="300ms" data-wow-duration="1500m">
                                    <div className="inner__box">
                                        <div className="image__box">
                                            <figure className="image">
                                                <Link href="/blog-details"><img src="assets/images/news/news-02.png" alt=""/></Link>
                                            </figure>
                                        </div>
                                        <div className="lower__content">
                                        <div className="image_layer shape-06" style={{backgroundImage: 'url(assets/images/shape/shape-06.png)'}}></div>
                                            <div className="news__date" style={{backgroundImage: 'url(assets/images/shape/shape-05.png)'}}>
                                                <Link href="#">15 <span>April</span> </Link>
                                            </div>
                                            <div className="news__title">
                                                <h4> <Link href="/blog-details"> How to Handle Unexpected Situations on Road </Link></h4>
                                            </div>
                                            <div className="author__info">
                                                <ul>
                                                    <li> 
                                                        <Link href="#"><span className="icon-icon-22"></span>by Admin</Link> <span>2 Comments</span>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="news__text">
                                                <p>Tincidunt Maur nemi sit Interdum praesent eget morbi lacinia volutpat pellentesque Tincidunt aurna suspit.</p>
                                            </div>
                                            <div className="more__btn">
                                                <Link href="/blog-details">Read More <span className="icon-53"></span> <span className="icon-52"></span></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12">
                                <div className="news__block__one  wow fadeInUp animated" data-wow-delay="600ms" data-wow-duration="1500m">
                                    <div className="inner__box">
                                        <div className="image__box">
                                            <figure className="image">
                                                <Link href="/blog-details"><img src="assets/images/news/news-03.png" alt=""/></Link>
                                            </figure>
                                        </div>
                                        <div className="lower__content" >
                                            <div className="image_layer shape-06" style={{backgroundImage: 'url(assets/images/shape/shape-06.png)'}}></div>
                                            <div className="news__date" style={{backgroundImage: 'url(assets/images/shape/shape-05.png)'}}>
                                                <Link href="#">15 <span>April</span> </Link>
                                            </div>
                                            <div className="news__title">
                                                <h4> <Link href="/blog-details"> How to Handle Unexpected Situations on Road </Link></h4>
                                            </div>
                                            <div className="author__info">
                                                <ul>
                                                    <li> 
                                                        <Link href="#"><span className="icon-icon-22"></span>by Admin</Link> <span>2 Comments</span>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="news__text">
                                                <p>Tincidunt Maur nemi sit Interdum praesent eget morbi lacinia volutpat pellentesque Tincidunt aurna suspit.</p>
                                            </div>
                                            <div className="more__btn">
                                                <Link href="/blog-details">Read More <span className="icon-53"></span> <span className="icon-52"></span></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*blog-section end */}
        </>
    )
}
