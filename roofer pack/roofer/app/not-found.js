

import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Error404() {

    return (
        <>
            <Layout headerStyle={4} footerStyle={1} breadcrumbTitle="404 Error">
          
            {/* error-section */}
            <section className="error__section see__pad p_relative">
                <div className="auto_container">
                <div className="image__section">
                    <figure>
                    <img src="assets/images/resource/error.png" alt="" />
                    </figure>
                </div>
                <div className="text__section text-center">
                    <h3>
                    Oops! That Page Can <br />
                    Not be Found.
                    </h3>
                    <p>
                    The page you are looking is not available or has been removed. <br />{" "}
                    Try going to Home Page by using the button below.
                    </p>
                    <div className="error__btn">
                    <Link href="/">
                        <span className="icon-45" /> Back to Homepage{" "}
                    </Link>
                    </div>
                </div>
                </div>
            </section>
            {/* error-section end */}


            </Layout>
        </>
    )
}
