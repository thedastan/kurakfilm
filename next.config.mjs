import createNextIntlPlugin from 'next-intl/plugin'

const withNextIntl = createNextIntlPlugin()

/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		domains: ['kurak.online']

	}
		// domains: ['kurak.pythonanywhere.com']

	// webpack: config => {
	// 	config.resolve.alias.canvas = false

	// 	return config

	// }
}

export default withNextIntl(nextConfig)
