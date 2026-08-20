import { createPageMetadata } from '@/lib/seo'

export const metadata = createPageMetadata({
    title: 'Request a Roofing Estimate',
    description: 'Contact E&B Roofing for roof repair, roof replacement, siding, windows and exterior services in Rhode Island and Southeastern Massachusetts.',
    path: '/contact',
})

export default function ContactLayout({ children }) {
    return children
}
