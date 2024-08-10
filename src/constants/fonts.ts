import { Fjalla_One, Inter, Poppins } from 'next/font/google'

export const poppins = Poppins({
	subsets: ['latin', 'latin-ext'],
	weight: ['300', '400', '500', '600', '700', '800', '900'],
	display: 'swap'
})

export const inter = Inter({
	subsets: ['latin', 'cyrillic', 'latin-ext', 'greek'],
	weight: ['300', '400', '500', '600', '700', '800', '900'],
	display: 'swap'
})

export const fjalla_one = Fjalla_One({
	subsets: ['latin', 'cyrillic-ext', 'vietnamese', 'latin-ext'],
	weight: ['400'],
	display: 'swap'
})
