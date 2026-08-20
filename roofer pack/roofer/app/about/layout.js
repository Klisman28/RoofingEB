import { createPageMetadata } from '@/lib/seo'

export const metadata = createPageMetadata({
    title: 'About Our Roofing Company',
    description: 'Learn about E&B Roofing and our roofing and exterior work for homeowners and businesses across Rhode Island and Southeastern Massachusetts.',
    path: '/about',
})

export default function AboutLayout({ children }) {
    return children
}
