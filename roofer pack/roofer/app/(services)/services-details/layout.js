import { createPageMetadata } from '@/lib/seo'

export const metadata = {
    ...createPageMetadata({
        title: 'Roofing Service Details',
        description: 'Review roofing and exterior service information from E&B Roofing, serving Rhode Island and Southeastern Massachusetts.',
        path: '/services-details',
    }),
    robots: {
        index: false,
        follow: false,
    },
}

export default function ServiceDetailsLayout({ children }) {
    return children
}
