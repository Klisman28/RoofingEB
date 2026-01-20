import Layout from "@/components/layout/Layout"
import Servicefrom from "@/components/sections/home2/Servicefrom"
import About from "@/components/sections/home2/About"
import Banner from "@/components/sections/home2/Banner"
import Services from "@/components/sections/home2/Services"
import Work from "@/components/sections/home2/Work"
import Help from "@/components/sections/home2/Help"
import Choose from "@/components/sections/home2/Choose"
import News from "@/components/sections/home2/News"
import Blog from "@/components/sections/home2/Blog"
import Team from "@/components/sections/home2/Team"
import Faq from "@/components/sections/home2/Faq"
import Testimonial from "@/components/sections/home2/Testimonial"
import Portfolio from "@/components/sections/home2/Portfolio"
export default function Home() {

    return (
        <>
            <Layout headerStyle={2} footerStyle={2}>
                <Banner />
                <Servicefrom />
                <About />
                <Services />
                <Choose />
                <Work />
                <Testimonial />
                <Team />
                <Portfolio />
                <Faq />
                <Help />
                <Blog />
                <News />
            </Layout>
        </>
    )
}