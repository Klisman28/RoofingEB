import { createPageMetadata } from '@/lib/seo'

export const metadata = {
    ...createPageMetadata({
        title: 'Residential & Commercial Roofing',
        description: 'Roof repair, replacement and installation services for homes and businesses in Rhode Island and Southeastern Massachusetts.',
        path: '/services-single',
    }),
    robots: {
        index: false,
        follow: false,
    },
}

export default function ServiceLayout({ children }) {
    return children
}
