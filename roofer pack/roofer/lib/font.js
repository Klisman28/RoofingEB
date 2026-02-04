import { Inter, Roboto } from 'next/font/google'

export const roboto = Roboto({
    weight: [ '300','400', '500', '700', '900'],
    subsets: ['latin'],
    variable: "--roboto",
    display: 'swap',
})
export const inter = Inter({
    weight: [ '300','400', '500', '600', '700', '800', '900'],
    subsets: ['latin'],
    variable: "--inter",
    display: 'swap',
})
