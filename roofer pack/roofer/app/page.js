import Layout from "@/components/layout/Layout"
import ServiceFrom from "@/components/sections/home1/ServiceFrom"
import Quality from "@/components/sections/home1/Quality"
import About from "@/components/sections/home1/About"
import Banner from "@/components/sections/home1/Banner"
import Services from "@/components/sections/home1/Services"

import Funfacts from "@/components/sections/home1/Funfacts"
import Roofer from "@/components/sections/home1/Roofer"
import Portfolio from "@/components/sections/home1/Portfolio"
import News from "@/components/sections/home1/News"
import Brand from "@/components/sections/home1/Brand"
import Testimonial from "@/components/sections/home1/Testimonial"
import Workprocess from "@/components/sections/home1/Workprocess"
import { DEFAULT_DESCRIPTION, DEFAULT_TITLE, createPageMetadata } from '@/lib/seo'

export const metadata = createPageMetadata({
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    path: '/',
    absoluteTitle: true,
})

export default function Home() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={2}>
                <Banner />
                <ServiceFrom />
                <Quality />
                <About />
                <Services />
                <Funfacts />
                <Roofer />
                <Workprocess />
                <Brand />
                <Portfolio />
                <Testimonial />


                <News />
            </Layout>
        </>
    )
}
