import { createPageMetadata } from '@/lib/seo'

export const metadata = createPageMetadata({
    title: 'Roofing & Exterior Services',
    description: 'Explore roof replacement, roof repair, siding, windows, gutters, skylight, chimney and exterior painting services across Rhode Island and Southeastern Massachusetts.',
    path: '/services',
})

export default function ServicesLayout({ children }) {
    return children
}
