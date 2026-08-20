import "@/node_modules/react-modal-video/css/modal-video.css"
import "../public/assets/css/style.css"
import 'swiper/css'
// import "swiper/css/navigation"
import "swiper/css/pagination"
// import 'owl.carousel'
import 'swiper/css/free-mode';
import Script from 'next/script'
import { inter, roboto } from '@/lib/font'
import { DEFAULT_DESCRIPTION, DEFAULT_TITLE, SITE_NAME, SITE_URL, SOCIAL_IMAGE, localBusinessSchema } from '@/lib/seo'

export const metadata = {
    metadataBase: new URL(SITE_URL),
    title: {
        default: DEFAULT_TITLE,
        template: `%s | ${SITE_NAME}`,
    },
    description: DEFAULT_DESCRIPTION,
    applicationName: SITE_NAME,
    keywords: [
        'roofing contractor Rhode Island',
        'roof repair Southeastern Massachusetts',
        'roof replacement Pawtucket RI',
        'roofing Attleboro MA',
        'siding contractor MA RI',
        'replacement windows MA RI',
        'gutter installation MA RI',
    ],
    creator: 'E&B Roofing LLC',
    publisher: 'E&B Roofing LLC',
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-image-preview': 'large',
            'max-snippet': -1,
            'max-video-preview': -1,
        },
    },
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: '/',
        siteName: SITE_NAME,
        title: DEFAULT_TITLE,
        description: DEFAULT_DESCRIPTION,
        images: [
            {
                url: SOCIAL_IMAGE,
                width: 1200,
                height: 900,
                alt: 'E&B Roofing project in Rhode Island and Southeastern Massachusetts',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: DEFAULT_TITLE,
        description: DEFAULT_DESCRIPTION,
        images: [SOCIAL_IMAGE],
    },
    icons: {
        icon: '/assets/images/logo.png',
    },
}

export default function RootLayout({ children }) {
    return (
        <html lang="en" className={`${inter.variable} ${roboto.variable}`}>
            <body>
                {children}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
                />
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
