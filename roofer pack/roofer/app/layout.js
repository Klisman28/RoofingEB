import "@/node_modules/react-modal-video/css/modal-video.css"
import "../public/assets/css/style.css"
import 'swiper/css'
// import "swiper/css/navigation"
import "swiper/css/pagination"
// import 'owl.carousel'
import 'swiper/css/free-mode';
import Script from 'next/script'
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
            <body>
                {children}
                <Script id="meta-pixel" strategy="afterInteractive">
                    {`!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '2036724506972192');
fbq('track', 'PageView');`}
                </Script>
                <noscript>
                    <img
                        height="1"
                        width="1"
                        style={{ display: 'none' }}
                        src="https://www.facebook.com/tr?id=2036724506972192&ev=PageView&noscript=1"
                        alt=""
                    />
                </noscript>
            </body>
        </html>
    )
}
