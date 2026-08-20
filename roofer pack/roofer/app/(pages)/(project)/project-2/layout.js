import { createPageMetadata } from '@/lib/seo'

export const metadata = createPageMetadata({
    title: 'Roofing Projects in MA & RI',
    description: 'View completed roofing, siding and exterior projects by E&B Roofing across Rhode Island and Southeastern Massachusetts.',
    path: '/project-2',
})

export default function ProjectsLayout({ children }) {
    return children
}
