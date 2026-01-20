import Link from "next/link"


export default function Team() {
    return (
        <>
        {/* team-section */}
        <section className="team__section three p_relative see__pad">
            <div className="auto_container">
            <div className="title text-center">
                <div className="sub__title">
                <h6>Expert Team</h6>
                </div>
                <div className="main__title">
                <h2>
                    We Have A Professional <br /> Team Member
                </h2>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-3 col-md-6 col-sm-12">
                <div className="team_block_one">
                    <div className="inner_box hover_three">
                    <div className="image_box p_relative">
                        <figure className="image">
                        <img src="assets/images/team/team-05.png" alt="" />
                        </figure>
                        <div className="overlay">
                        <div className="inner__box">
                            <ul className="social_links">
                            <li>
                                <Link href="/">
                                <span className="icon-2" />
                                </Link>
                            </li>
                            <li>
                                <Link href="/">
                                <span className="icon-1" />
                                </Link>
                            </li>
                            <li>
                                <Link href="/">
                                <span className="icon-23" />
                                </Link>
                            </li>
                            </ul>
                        </div>
                        </div>
                    </div>
                    <div className="lower_content__two">
                        <div className="team_info">
                        <h4>
                            <Link href="/team-details">Brooklyn Simmons</Link>
                        </h4>
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
                        <img src="assets/images/team/team-06.png" alt="" />
                        </figure>
                        <div className="overlay">
                        <div className="inner_box">
                            <ul className="social_links">
                            <li>
                                <Link href="/">
                                <span className="icon-2" />
                                </Link>
                            </li>
                            <li>
                                <Link href="/">
                                <span className="icon-1" />
                                </Link>
                            </li>
                            <li>
                                <Link href="/">
                                <span className="icon-23" />
                                </Link>
                            </li>
                            </ul>
                        </div>
                        </div>
                    </div>
                    <div className="lower_content__two">
                        <div className="team_info">
                        <h4>
                            <Link href="/team-details">Guy Hawkins</Link>
                        </h4>
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
                        <img src="assets/images/team/team-07.png" alt="" />
                        </figure>
                        <div className="overlay">
                        <div className="inner_box">
                            <ul className="social_links">
                            <li>
                                <Link href="/">
                                <span className="icon-2" />
                                </Link>
                            </li>
                            <li>
                                <Link href="/">
                                <span className="icon-1" />
                                </Link>
                            </li>
                            <li>
                                <Link href="/">
                                <span className="icon-23" />
                                </Link>
                            </li>
                            </ul>
                        </div>
                        </div>
                    </div>
                    <div className="lower_content__two">
                        <div className="team_info">
                        <h4>
                            <Link href="/team-details">Cody Fisher</Link>
                        </h4>
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
                        <img src="assets/images/team/team-04.png" alt="" />
                        </figure>
                        <div className="overlay">
                        <div className="inner_box">
                            <ul className="social_links">
                            <li>
                                <Link href="/">
                                <span className="icon-2" />
                                </Link>
                            </li>
                            <li>
                                <Link href="/">
                                <span className="icon-1" />
                                </Link>
                            </li>
                            <li>
                                <Link href="/">
                                <span className="icon-23" />
                                </Link>
                            </li>
                            </ul>
                        </div>
                        </div>
                    </div>
                    <div className="lower_content__two">
                        <div className="team_info">
                        <h4>
                            <Link href="/team-details">Mathim Tony</Link>
                        </h4>
                        <span className="designation">CTO</span>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </section>
        {/* team-section-end */}
        </>

    )
}
