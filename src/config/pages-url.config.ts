import { IntlType } from '@/types/intl.types'

class DASHBOARD {
	private root = '/'

	HOME = (locale: IntlType) => {
		return this.root + locale
	}
	ACTORS = (locale: IntlType) => {
		return `${this.root + locale}/cast-actors`
	}
	BACKSTAGE = (locale: IntlType) => {
		return `${this.root + locale}/backstage`
	}
	FILM_STILLS = (locale: IntlType) => {
		return `${this.root + locale}/film-stills`
	}
}
export const DASHBOARD_PAGES = new DASHBOARD()
