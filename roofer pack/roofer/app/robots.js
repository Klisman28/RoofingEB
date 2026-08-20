import { SITE_URL } from '@/lib/seo'

export default function robots() {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: [
                '/api/',
                '/cart',
                '/checkout',
                '/shop',
                '/shop-details',
                '/team-1',
                '/team-2',
                '/team-details',
                '/index-2',
                '/index-3',
                '/index-4',
            ],
        },
        sitemap: `${SITE_URL}/sitemap.xml`,
        host: SITE_URL,
    }
}
