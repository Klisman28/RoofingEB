import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Home() {

    return (
        <>
            <Layout headerStyle={4} footerStyle={2} breadcrumbTitle="Team 2">
                <div>
                {/*team-section  */}
                <section className="team__section three team__page__two p_relative see__pad">
                    <div className="auto_container">
                        <div className="row">
                            <div className="col-lg-3 col-md-6 col-sm-12">
                                <div className="team_block_one">
                                    <div className="inner_box hover_three">
                                        <div className="image_box p_relative">
                                            <figure className="image">
                                                <img src="assets/images/team/team-05.png" alt=""/>
                                            </figure>
                                            <div className="overlay">
                                                <div className="inner__box">
                                                    <ul className="social_links">
                                                        <li><Link href="/"><span className="icon-2"></span></Link></li>
                                                        <li><Link href="/"><span className="icon-1"></span></Link></li>
                                                        <li><Link href="/"><span className="icon-23"></span></Link></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="lower_content__two">
                                            <div className="team_info">
                                                <h4><Link href="/team-details">Brooklyn Simmons</Link></h4>
                                                <span className="designation">Founder</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12">
                                <div className="team_block_one">
                                    <div className="inner_box hover_three">
                                        <div className="image_box p_relative">
                                            <figure className="image">
                                                <img src="assets/images/team/team-06.png" alt=""/>
                                            </figure>
                                            <div className="overlay">
                                                <div className="inner_box">
                                                    <ul className="social_links">
                                                        <li><Link href="/"><span className="icon-2"></span></Link></li>
                                                        <li><Link href="/"><span className="icon-1"></span></Link></li>
                                                        <li><Link href="/"><span className="icon-23"></span></Link></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="lower_content__two">
                                            <div className="team_info">
                                                <h4><Link href="/team-details">Guy Hawkins</Link></h4>
                                                <span className="designation">Worker</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12">
                                <div className="team_block_one">
                                    <div className="inner_box hover_three">
                                        <div className="image_box p_relative">
                                            <figure className="image">
                                                <img src="assets/images/team/team-07.png" alt=""/>
                                            </figure>
                                            <div className="overlay">
                                                <div className="inner_box">
                                                    <ul className="social_links">
                                                        <li><Link href="/"><span className="icon-2"></span></Link></li>
                                                        <li><Link href="/"><span className="icon-1"></span></Link></li>
                                                        <li><Link href="/"><span className="icon-23"></span></Link></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="lower_content__two">
                                            <div className="team_info">
                                                <h4><Link href="/team-details">Cody Fisher</Link></h4>
                                                <span className="designation">Consultant</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12">
                                <div className="team_block_one">
                                    <div className="inner_box hover_three">
                                        <div className="image_box p_relative">
                                            <figure className="image">
                                                <img src="assets/images/team/team-04.png" alt=""/>
                                            </figure>
                                            <div className="overlay">
                                                <div className="inner_box">
                                                    <ul className="social_links">
                                                        <li><Link href="/"><span className="icon-2"></span></Link></li>
                                                        <li><Link href="/"><span className="icon-1"></span></Link></li>
                                                        <li><Link href="/"><span className="icon-23"></span></Link></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="lower_content__two">
                                            <div className="team_info">
                                                <h4><Link href="/team-details">Mathim Tony</Link></h4>
                                                <span className="designation">CTO</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12">
                                <div className="team_block_one">
                                    <div className="inner_box hover_three">
                                        <div className="image_box p_relative">
                                            <figure className="image">
                                                <img src="assets/images/team/team-17.png" alt=""/>
                                            </figure>
                                            <div className="overlay">
                                                <div className="inner__box">
                                                    <ul className="social_links">
                                                        <li><Link href="/"><span className="icon-2"></span></Link></li>
                                                        <li><Link href="/"><span className="icon-1"></span></Link></li>
                                                        <li><Link href="/"><span className="icon-23"></span></Link></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="lower_content__two">
                                            <div className="team_info">
                                                <h4><Link href="/team-details">Dianne Russell</Link></h4>
                                                <span className="designation">Ex Founder</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12">
                                <div className="team_block_one">
                                    <div className="inner_box hover_three">
                                        <div className="image_box p_relative">
                                            <figure className="image">
                                                <img src="assets/images/team/team-16.png" alt=""/>
                                            </figure>
                                            <div className="overlay">
                                                <div className="inner_box">
                                                    <ul className="social_links">
                                                        <li><Link href="/"><span className="icon-2"></span></Link></li>
                                                        <li><Link href="/"><span className="icon-1"></span></Link></li>
                                                        <li><Link href="/"><span className="icon-23"></span></Link></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="lower_content__two">
                                            <div className="team_info">
                                                <h4><Link href="/team-details">Jacob Jones</Link></h4>
                                                <span className="designation">Sr Developer</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12">
                                <div className="team_block_one">
                                    <div className="inner_box hover_three">
                                        <div className="image_box p_relative">
                                            <figure className="image">
                                                <img src="assets/images/team/team-15.png" alt=""/>
                                            </figure>
                                            <div className="overlay">
                                                <div className="inner_box">
                                                    <ul className="social_links">
                                                        <li><Link href="/"><span className="icon-2"></span></Link></li>
                                                        <li><Link href="/"><span className="icon-1"></span></Link></li>
                                                        <li><Link href="/"><span className="icon-23"></span></Link></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="lower_content__two">
                                            <div className="team_info">
                                                <h4><Link href="/team-details">Arlene McCoy</Link></h4>
                                                <span className="designation">Sr Consultant</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12">
                                <div className="team_block_one">
                                    <div className="inner_box hover_three">
                                        <div className="image_box p_relative">
                                            <figure className="image">
                                                <img src="assets/images/team/team-14.png" alt=""/>
                                            </figure>
                                            <div className="overlay">
                                                <div className="inner_box">
                                                    <ul className="social_links">
                                                        <li><Link href="/"><span className="icon-2"></span></Link></li>
                                                        <li><Link href="/"><span className="icon-1"></span></Link></li>
                                                        <li><Link href="/"><span className="icon-23"></span></Link></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="lower_content__two">
                                            <div className="team_info">
                                                <h4><Link href="/team-details">Darrell Steward</Link></h4>
                                                <span className="designation">Sr Worker</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/*team-section-end */}

                {/*news-letter */}
                <section className="news_letter two">
                    <div className="auto_container">
                        <div className="news_letter_content" style={{backgroundImage: 'url(assets/images/shape/shape-27.png)'}}>
                            <div className="news_letter_left p_relative">
                                <h3>Subscribe <br/>
                                    To Our Newsletter</h3>
                                <div className="form-inner p_relative">
                                    <form action="/" method="post" className="subscribe-form">
                                        <div className="form-group">
                                            <input type="email" name="email" placeholder="Your email" required=""/>
                                            <button type="submit" className="btn-two">Subscribe Now</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/*news-letter-end */}
                </div>

            </Layout>
        </>
    )
}