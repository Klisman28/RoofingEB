
// import PortfolioFilter1 from ""
import dynamic from 'next/dynamic'
const PortfolioFilter2 = dynamic(() => import('@/components/elements/PortfolioFilter2'), {
    ssr: false,
})
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Home() {

    return (
        <>
            <Layout headerStyle={4} footerStyle={1} breadcrumbTitle="Our Work">

                {/* portfolio-section */}
                <section className="portfolio style__one two see__pad p_relative ">
                    <div className="auto_container">
                        <div className="sortable-masonry">
                            <PortfolioFilter2 />
                        </div>
                    </div>
                </section>
                {/* project-style-1 */}

            </Layout>
        </>
    )
}