import { Box, ChakraProvider } from '@chakra-ui/react'
import type { Metadata } from 'next'
import { Toaster } from 'sonner'

import Footer from '@/components/navbar/footer'
import Header from '@/components/navbar/header'

import { inter } from '@/constants/fonts'
import { SITE_NAME } from '@/constants/seo.constants'

import { Providers } from '../providers'

import YandexMetrika from '@/seo/YandexMetrika'
import '@/styles/globals.scss'

export const metadata: Metadata = {
	title: {
		default: SITE_NAME,
		template: `%s | ${SITE_NAME}`
	},
	description: 'Kuraq Film'
}

interface RootLayoutProps {
	children: React.ReactNode
	params: {
		locale: string
	}
}

export default function RootLayout({
	children,
	params: { locale }
}: Readonly<RootLayoutProps>) {
	return (
		<html lang={locale}>
			<body className={inter.className}>
				<ChakraProvider>
					<Providers>
						<Header />
						<Box>{children}</Box>
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
