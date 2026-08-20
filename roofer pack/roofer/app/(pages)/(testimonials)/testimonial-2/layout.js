import { createPageMetadata } from '@/lib/seo'

export const metadata = createPageMetadata({
    title: 'Customer Reviews',
    description: 'Read customer feedback about E&B Roofing projects in Rhode Island and Southeastern Massachusetts.',
    path: '/testimonial-2',
})

export default function ReviewsLayout({ children }) {
    return children
}
