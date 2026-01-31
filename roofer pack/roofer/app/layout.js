import "@/node_modules/react-modal-video/css/modal-video.css"
import "../public/assets/css/style.css"
import 'swiper/css'
// import "swiper/css/navigation"
import "swiper/css/pagination"
// import 'owl.carousel'
import 'swiper/css/free-mode';
import { inter, roboto } from '@/lib/font'
export const metadata = {
    title: 'E&B Roofing',
    description: 'E&B Roofing - Where Performance Meets Quality',
    icons: {
        icon: 'assets/images/logo.png',
    },
}

export default function RootLayout({ children }) {
    return (
        <html lang="en" className={`${inter.variable} ${roboto.variable}`}>
            <body>{children}</body>
        </html>
    )
}
