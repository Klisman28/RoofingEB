import { SITE_URL } from '@/lib/seo'

export default function sitemap() {
    const lastModified = new Date()

    return [
        { path: '/', changeFrequency: 'weekly', priority: 1 },
        { path: '/services', changeFrequency: 'monthly', priority: 0.9 },
        { path: '/about', changeFrequency: 'monthly', priority: 0.8 },
        { path: '/project-2', changeFrequency: 'monthly', priority: 0.8 },
        { path: '/testimonial-2', changeFrequency: 'monthly', priority: 0.7 },
        { path: '/contact', changeFrequency: 'monthly', priority: 0.9 },
    ].map(({ path, ...entry }) => ({
        url: `${SITE_URL}${path}`,
        lastModified,
        ...entry,
    }))
}
