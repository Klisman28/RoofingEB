import Layout from "@/components/layout/Layout"
import About from "@/components/sections/home4/About"
import Banner from "@/components/sections/home4/Banner"
import Services from "@/components/sections/home4/Services"
import ServiceFour from "@/components/sections/home4/ServiceFour"
import Choose from "@/components/sections/home4/Choose"
import Funfact from "@/components/sections/home4/Funfact"
import Faq from "@/components/sections/home4/Faq"
import Team from "@/components/sections/home4/Team"
import Brand from "@/components/sections/home4/Brand"
import Blog from "@/components/sections/home4/Blog"
import News from "@/components/sections/home4/News"
import Testimonial from "@/components/sections/home4/Testimonial"
export default function Home() {

    return (
        <>
            <Layout headerStyle={4} footerStyle={2}>
                <Banner />
                <Services />
                <About />
                <ServiceFour />
                <Choose />
                <Testimonial />
                <Faq />
                <Team />
                <Brand />
                <Funfact />
                <Blog />
                <News />
            </Layout>
        </>
    )
}