import { getRequestConfig } from 'next-intl/server';
import { notFound } from 'next/navigation';


// Can be imported from a shared config

export const locales_data = [
	{
		name: 'кыргызча',
		locale: 'kg'
	},
	{
		name: 'english',
		locale: 'en'
	},
	{
		name: 'русский',
		locale: 'ru'
	}
]

export const LOCALES = locales_data.map(el => el.locale)

export default getRequestConfig(async ({ locale }) => {
	// Validate that the incoming `locale` parameter is valid
	if (!LOCALES.includes(locale as any)) notFound()

	return {
		messages: (await import(`../messages/${locale}.json`)).default
	}
})