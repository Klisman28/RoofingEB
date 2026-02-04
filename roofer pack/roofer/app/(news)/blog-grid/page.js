
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Home() {

    return (
        <>
            <Layout headerStyle={4} footerStyle={1} breadcrumbTitle="Blog Grid">
                <div>

                {/*blog-section */}
                <section className="blog__section blog__grid p_relative see__pad">
                    <div className="blog__content">
                        <div className="auto_container">
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
                                                    <Link href="#">11 <span>April</span> </Link>
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
                                    <div className="news__block__one wow fadeInUp animated" data-wow-delay="100ms" data-wow-duration="1500m">
                                        <div className="inner__box">
                                            <div className="image__box">
                                                <figure className="image">
                                                    <Link href="/blog-details"><img src="assets/images/news/news-02.png" alt=""/></Link>
                                                </figure>
                                            </div>
                                            <div className="lower__content">
                                                <div className="image_layer shape-06" style={{ backgroundImage: 'url(assets/images/shape/shape-06.png)'}}></div>
                                                <div className="news__date" style={{backgroundImage: 'url(assets/images/shape/shape-05.png)'}}>
                                                    <Link href="#">12 <span>April</span> </Link>
                                                </div>
                                                <div className="news__title">
                                                    <h4> <Link href="/blog-details"> Roofing Surveys Paints Optimistic Outlook </Link></h4>
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
                                    <div className="news__block__one  wow fadeInUp animated" data-wow-delay="200ms" data-wow-duration="1500m">
                                        <div className="inner__box">
                                            <div className="image__box">
                                                <figure className="image">
                                                    <Link href="/blog-details"><img src="assets/images/news/news-03.png" alt=""/></Link>
                                                </figure>
                                            </div>
                                            <div className="lower__content" >
                                                <div className="image_layer shape-06" style={{ backgroundImage: 'url(assets/images/shape/shape-06.png)'}}></div>
                                                <div className="news__date" style={{backgroundImage: 'url(assets/images/shape/shape-05.png)'}}>
                                                    <Link href="#">13 <span>April</span> </Link>
                                                </div>
                                                <div className="news__title">
                                                    <h4> <Link href="/blog-details"> Roofing are Fact Make Easier 10 Reason </Link></h4>
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
                                    <div className="news__block__one  wow fadeInUp animated" data-wow-delay="300ms" data-wow-duration="1500m">
                                        <div className="inner__box">
                                            <div className="image__box">
                                                <figure className="image">
                                                    <Link href="/blog-details"><img src="assets/images/news/news-04.png" alt=""/></Link>
                                                </figure>
                                            </div>
                                            <div className="lower__content" >
                                                <div className="image_layer shape-06" style={{ backgroundImage: 'url(assets/images/shape/shape-06.png)'}}></div>
                                                <div className="news__date" style={{backgroundImage: 'url(assets/images/shape/shape-05.png)'}}>
                                                    <Link href="#">14 <span>April</span> </Link>
                                                </div>
                                                <div className="news__title">
                                                    <h4> <Link href="/blog-details">All Important Info On Flat Roofing </Link></h4>
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
                                    <div className="news__block__one  wow fadeInUp animated" data-wow-delay="400ms" data-wow-duration="1500m">
                                        <div className="inner__box">
                                            <div className="image__box">
                                                <figure className="image">
                                                    <Link href="/blog-details"><img src="assets/images/news/news-05.png" alt=""/></Link>
                                                </figure>
                                            </div>
                                            <div className="lower__content" >
                                                <div className="image_layer shape-06" style={{backgroundImage: 'url(assets/images/shape/shape-06.png)'}}></div>
                                                <div className="news__date" style={{backgroundImage: 'url(assets/images/shape/shape-05.png)'}}>
                                                    <Link href="#">15 <span>April</span> </Link>
                                                </div>
                                                <div className="news__title">
                                                    <h4> <Link href="/blog-details"> Installing The New Roofing Systems By Experts </Link></h4>
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
                                    <div className="news__block__one  wow fadeInUp animated" data-wow-delay="500ms" data-wow-duration="1500m">
                                        <div className="inner__box">
                                            <div className="image__box">
                                                <figure className="image">
                                                    <Link href="/blog-details"><img src="assets/images/news/news-06.png" alt=""/></Link>
                                                </figure>
                                            </div>
                                            <div className="lower__content" >
                                                <div className="image_layer shape-06" style={{backgroundImage: 'url(assets/images/shape/shape-06.png)'}}></div>
                                                <div className="news__date" style={{backgroundImage: 'url(assets/images/shape/shape-05.png)'}}>
                                                    <Link href="#">16 <span>April</span> </Link>
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
                                                    <Link href="/blog-details"><img src="assets/images/news/news-07.png" alt=""/></Link>
                                                </figure>
                                            </div>
                                            <div className="lower__content" >
                                                <div className="image_layer shape-06" style={{backgroundimage: 'url(assets/images/shape/shape-06.png)'}}></div>
                                                <div className="news__date" style={{backgroundImage: 'url(assets/images/shape/shape-05.png)'}}>
                                                    <Link href="#">17 <span>April</span> </Link>
                                                </div>
                                                <div className="news__title">
                                                    <h4> <Link href="/blog-details"> Importance Of Expert Engineer By Roofer</Link></h4>
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
                                    <div className="news__block__one  wow fadeInUp animated" data-wow-delay="700ms" data-wow-duration="1500m">
                                        <div className="inner__box">
                                            <div className="image__box">
                                                <figure className="image">
                                                    <Link href="/blog-details"><img src="assets/images/news/news-08.png" alt=""/></Link>
                                                </figure>
                                            </div>
                                            <div className="lower__content" >
                                                <div className="image_layer shape-06" style={{backgroundImage: 'url(assets/images/shape/shape-06.png)'}}></div>
                                                <div className="news__date" style={{backgroundImage: 'url(assets/images/shape/shape-05.png)'}}>
                                                    <Link href="#">18 <span>April</span> </Link>
                                                </div>
                                                <div className="news__title">
                                                    <h4> <Link href="/blog-details"> Durable Roofing Solutions Importance </Link></h4>
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
                                    <div className="news__block__one  wow fadeInUp animated" data-wow-delay="800ms" data-wow-duration="1500m">
                                        <div className="inner__box">
                                            <div className="image__box">
                                                <figure className="image">
                                                    <Link href="/blog-details"><img src="assets/images/news/news-09.png" alt=""/></Link>
                                                </figure>
                                            </div>
                                            <div className="lower__content" >
                                                <div className="image_layer shape-06" style={{backgroundImage: 'url(assets/images/shape/shape-06.png)'}}></div>
                                                <div className="news__date" style={{backgroundImage: 'url(assets/images/shape/shape-05.png)'}}>
                                                    <Link href="#">19 <span>April</span> </Link>
                                                </div>
                                                <div className="news__title">
                                                    <h4> <Link href="/blog-details"> All About Custom Roofing Design </Link></h4>
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
                            <div className="col-xl-12 mt-30">
                                <ul className="styled-pagination text-center clearfix">
                                    <li className="arrow prev"><Link href="#"><span className="icon-46"></span></Link></li>
                                    <li className="active"><Link href="#">1</Link></li>
                                    <li><Link href="#">2</Link></li>
                                    <li className="arrow next"><Link href="#"><span className="icon-46"></span></Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
                {/*blog-section end */}

                </div>

            </Layout>
        </>
    )
}