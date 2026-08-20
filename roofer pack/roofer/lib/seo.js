export const SITE_URL = 'https://www.ebroofingma.net'
export const SITE_NAME = 'E&B Roofing'
export const DEFAULT_TITLE = 'Roofing, Siding & Windows in MA & RI | E&B Roofing'
export const DEFAULT_DESCRIPTION = 'E&B Roofing provides roof replacement, roof repair, siding, windows, gutters and exterior services across Rhode Island and Southeastern Massachusetts.'
export const SOCIAL_IMAGE = '/assets/images/banner/banner-1.JPG'

export function createPageMetadata({ title, description, path, absoluteTitle = false }) {
    return {
        title: absoluteTitle ? { absolute: title } : title,
        description,
        alternates: {
            canonical: path,
        },
        openGraph: {
            type: 'website',
            locale: 'en_US',
            url: path,
            siteName: SITE_NAME,
            title,
            description,
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
            title,
            description,
            images: [SOCIAL_IMAGE],
        },
    }
}

export const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@graph': [
        {
            '@type': 'RoofingContractor',
            '@id': `${SITE_URL}/#business`,
            name: 'E&B Roofing LLC',
            url: SITE_URL,
            logo: `${SITE_URL}/assets/images/logo.png`,
            image: `${SITE_URL}${SOCIAL_IMAGE}`,
            telephone: '+1-774-300-1932',
            email: 'E_broofing@yahoo.com',
            areaServed: [
                {
                    '@type': 'AdministrativeArea',
                    name: 'Rhode Island',
                },
                {
                    '@type': 'AdministrativeArea',
                    name: 'Southeastern Massachusetts',
                },
            ],
            sameAs: [
                'https://www.facebook.com/ebroofingusa',
                'https://www.instagram.com/e_broofing',
                'https://nextdoor.com/page/eb-roofing-pawtucket-ri',
            ],
            hasOfferCatalog: {
                '@type': 'OfferCatalog',
                name: 'Exterior home services',
                itemListElement: [
                    'Roof replacement and repair',
                    'Siding installation',
                    'Window replacement',
                    'Gutter and gutter guard services',
                    'Skylight and chimney services',
                    'Exterior painting',
                ].map((name) => ({
                    '@type': 'Offer',
                    itemOffered: {
                        '@type': 'Service',
                        name,
                        areaServed: ['Rhode Island', 'Southeastern Massachusetts'],
                        provider: {
                            '@id': `${SITE_URL}/#business`,
                        },
                    },
                })),
            },
        },
        {
            '@type': 'WebSite',
            '@id': `${SITE_URL}/#website`,
            url: SITE_URL,
            name: SITE_NAME,
            publisher: {
                '@id': `${SITE_URL}/#business`,
            },
            inLanguage: 'en-US',
        },
    ],
}
