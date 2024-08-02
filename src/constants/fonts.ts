import { Inter, Mulish, Poppins } from 'next/font/google'

export const mulish = Mulish({
	subsets: ['latin', 'cyrillic'],
	weight: ['300', '400', '500', '600', '700', '800', '900'],
	display: 'swap'
})

export const poppins = Poppins({
	subsets: ['latin'],
	weight: ['300', '400', '500', '600', '700', '800', '900'],
	display: 'swap'
})

export const inter = Inter({
	subsets: ['latin', 'cyrillic'],
	weight: ['300', '400', '500', '600', '700', '800', '900'],
	display: 'swap'
})
