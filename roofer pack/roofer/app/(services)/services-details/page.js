import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Home() {

    return (
        <>
            <Layout headerStyle={4} footerStyle={1} breadcrumbTitle="Service Details">
                <div>
                {/*services-details */}
                <section className="services__details see__pad">
                    <div className="auto_container">
                        <div className="row">
                            <div className="sidebar__side col-xl-4 col-lg-6 pe-xl-5">
                                <div className="sidebar">
                                    <div className="sidebar__widget__one">
                                        <div className="sidebar__title">
                                            <h4>All Services</h4>
                                        </div>
                                        <ul className="service__details__1__cat">
                                            <li><Link href="/roofing-layer"> Roofing Layer</Link></li>
                                            <li  className="active"><Link href="/damage-repair"> Damage Repair</Link></li>
                                            <li><Link href="/roof-cornering"> Roof Cornering</Link></li>
                                            <li><Link href="/siding-install"> Siding Install</Link></li>                                
                                            <li><Link href="/corner-fixing"> Corner Fixing</Link></li>
                                            <li><Link href="/roof-renovation"> Roof Renovation</Link></li>
                                        </ul>
                                    </div>
                                    <div className="sidebar__widget__two">
                                        <div className="need__section" style={{backgroundImage: 'url(assets/images/service/service-details-03.png)'}}>
                                            <div className="need___top">
                                                <div className="icon">
                                                    <span className="icon-29"></span>
                                                </div>
                                                <h3>Do You Need <br/> Any <span>Help?</span></h3>
                                            </div>
                                            <div className="need___bottom">
                                                <Link href="mailto:info@rooftox.com">info@rooftox.com</Link>
                                                <Link href="tel:3336660021">(+91) 333 666 0021</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="content__side col-xl-8 col-lg-12 col-md-12 col-sm-12 ps-xl-4">
                                <div className="services__single">
                                    <div className="inner__box">
                                        <div className="image__box">
                                            <figure>
                                                <img src="assets/images/service/service-details-01.png" alt=""/>
                                            </figure>
                                        </div>
                                    </div>
                                    <div className="content__box">
                                        <h3>Strategy & Planning</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et enim justo, in mauris posuere dolor. Dolor felis sapien sit egestas. Ut venenatis faucibus non sed faucibus mauris ultricies. Cras varius proin amet vehicula magna. Ultricies gravida vel volutpat sed. Platea sed fames at egestas amet feugiat laoreet sed potenti integer. Viverra at maecenas convallis condimentum egestas nunc sagittis eu. Semper faucibus facilisis vitae sollicitudin. </p>

                                        <p>Fringilla mauris magna sit elesystemmentum elit. Facilisi lacus, pharetra quam eu urna amet aenean. Nunc mattis vitae tellus bibendum a eu, nunc. Consequat commodo ac cursus in donec orci tempus. Massa sed sit faucibus neque  habitant consequat.</p>
                                    </div>
                                    <div className="service_system">
                                        <div className="row">
                                            <div className="col-xl-6 col-lg-12 pr-xl-0">
                                                <div className="service__system__left">
                                                    <h3>Roofing System <br/> Area.</h3>
                                                    <p>Dolor felis sapien sit egestas venenatis faucibus non sed faucibus mauris ultricies. Cras varius proin amet vehicula magna. Ultricies gravida vel volutpat sed platea sed fames at egestas amet feugiat laoreet sed potenti integer.</p>
                                                    <div className="system__list">
                                                        <ul>
                                                            <li><span className="icon-41"></span> Expert Engineers </li>
                                                            <li><span className="icon-41"></span> Award Wining Company </li>
                                                            <li><span className="icon-41"></span> Required Works </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-6 col-lg-12">
                                                <div className="service__system__right">
                                                    <div className="inner__box">
                                                        <div className="image__box">
                                                            <figure className="image">
                                                                <img src="assets/images/service/service-details-02.png" alt=""/>
                                                            </figure>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="our__solutions">
                                        <h3>Our Solutions</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et enim justo, in mauris posuere dolor. Dolor felis sapien sit egestas. Ut venenatis faucibus non sed faucibus mauris ultricies. Cras varius proin amet vehicula magna. Ultricies gravida vel volutpat sed. Platea sed fames at egestas amet feugiat laoreet sed potenti integer. Viverra at maecenas convallis condimentum egestas nunc sagittis eu. Semper faucibus facilisis vitae sollicitudin.</p>
                                    </div>
                                    <div className="download__section">
                                        <h3>Download Resources</h3>
                                        <div className="download__one">
                                            <div className="left__one">
                                                <div className="icon">
                                                    <span className="icon-34"></span>
                                                </div>
                                                <div className="text">
                                                    <h6>Company Briefing Update for the Year</h6>
                                                    <p>Pdf(160kb)</p>
                                                </div>
                                            </div>
                                            <div className="right__one">
                                                <button>Download</button>
                                            </div>
                                        </div>
                                        <div className="download__one">
                                            <div className="left__one">
                                                <div className="icon">
                                                    <span className="icon-34"></span>
                                                </div>
                                                <div className="text">
                                                    <h6>Cultural Centers and Event schedule</h6>
                                                    <p>Pdf(160kb)</p>
                                                </div>
                                            </div>
                                            <div className="right__one">
                                                <button>Download</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/*services-details end */}
                </div>
            </Layout>
        </>
    )
}