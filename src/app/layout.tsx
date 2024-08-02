import { Box, ChakraProvider } from '@chakra-ui/react'
import type { Metadata } from 'next'
import { Toaster } from 'sonner'

import Footer from '@/components/navbar/footer'
import Header from '@/components/navbar/header'

import { inter } from '@/constants/fonts'
import { SITE_NAME } from '@/constants/seo.constants'

import { HEADER_HEIGHT, MINI_HEADER_HEIGHT } from '@/config/_variables.config'

import { Providers } from './providers'
import YandexMetrika from '@/seo/YandexMetrika'
import '@/styles/globals.scss'

export const metadata: Metadata = {
	title: {
		default: SITE_NAME,
		template: `%s | ${SITE_NAME}`
	},
	description: 'osteoclinic | Бишкек'
}

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body className={inter.className}>
				<ChakraProvider>
					<Providers>
						<Header />
						<Box
							pb={{ md: '180px', base: '54px' }}
							pt={{ md: HEADER_HEIGHT, base: MINI_HEADER_HEIGHT }}
						>
							{children}
						</Box>
						<Footer />
						<Toaster
							theme='dark'
							position='top-right'
							duration={2000}
						/>
						{/* <YandexMetrika /> */}
					</Providers>
				</ChakraProvider>
			</body>
		</html>
	)
}
