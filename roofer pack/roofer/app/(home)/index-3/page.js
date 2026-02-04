import Layout from "@/components/layout/Layout"
import About from "@/components/sections/home3/About"
import Banner from "@/components/sections/home3/Banner"
import Services from "@/components/sections/home3/Services"
import Projects from "@/components/sections/home3/Projects"
import Quality from "@/components/sections/home3/Quality"
import Roofer from "@/components/sections/home3/Roofer"
import Funfact from "@/components/sections/home3/Funfact"
import Team from "@/components/sections/home3/Team"
import News from "@/components/sections/home3/News"
import Blog from "@/components/sections/home3/Blog"
import Testimonial from "@/components/sections/home3/Testimonial"
export default function Home() {

    return (
        <>
            <Layout headerStyle={3} footerStyle={1}>
                <Banner />
                <Quality />
                <About />
                <Services />
                <Roofer />
                <Funfact />
                <Team />
                <Projects />
                <Testimonial />
                <News />
                <Blog />
            </Layout>
        </>
    )
}