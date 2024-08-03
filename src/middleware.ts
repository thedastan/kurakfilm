import createMiddleware from 'next-intl/middleware'

import { LOCALES } from './i18n'

const locales = LOCALES

export default createMiddleware({
	// A list of all locales that are supported
	locales,

	// Used when no locale matches
	defaultLocale: 'kg'
})

export const config = {
	// Match only internationalized pathnames
	matcher: ['/', '/(kg|en|ru)/:path*']
}
