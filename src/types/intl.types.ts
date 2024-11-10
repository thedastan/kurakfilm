export enum EnumIntl {
	GERMANY = 'de',
	ENGLISH = 'en',
	SPANISH = 'es',
	FRENCH = 'fr',	
	ITALY = 'it',
	KYRGYZ = 'kg',
	RUSSIAN = 'ru'
}

// types
export type IntlType =
	| EnumIntl.GERMANY
	| EnumIntl.ENGLISH
	| EnumIntl.SPANISH
	| EnumIntl.FRENCH
	| EnumIntl.ITALY
	| EnumIntl.KYRGYZ
	| EnumIntl.RUSSIAN

export interface ILocale {
	name: string
	locale: IntlType
	short_name: string
}
