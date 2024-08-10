import { getRequestConfig } from 'next-intl/server'
import { notFound } from 'next/navigation'

import { EnumIntl, ILocale } from './types/intl.types'

// Can be imported from a shared config

export const locales_data: ILocale[] = [
	{
		name: 'кыргызча',
		locale: EnumIntl.KYRGYZ,
		short_name: 'KGZ'
	},
	{
		name: 'english',
		locale: EnumIntl.ENGLISH,
		short_name: 'ENG'
	},
	{
		name: 'deutsch',
		locale: EnumIntl.GERMANY,
		short_name: 'DEU'
	},
	{
		name: 'русский',
		locale: EnumIntl.RUSSIAN,
		short_name: 'RUS'
	},
	{
		name: 'français',
		locale: EnumIntl.FRENCH,
		short_name: 'FRA'
	},
	{
		name: 'español',
		locale: EnumIntl.SPANISH,
		short_name: 'ESP'
	},
	{
		name: 'italiano',
		locale: EnumIntl.ITALY,
		short_name: 'ITA'
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
