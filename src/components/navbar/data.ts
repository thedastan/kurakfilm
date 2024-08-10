import { useTranslations } from 'next-intl'

import { DASHBOARD_PAGES } from '@/config/pages-url.config'

import useTypedLocale from '@/hooks/useLocale'

export interface IHeaderNav {
	name: string
	path: string
}

export function useHeaderNav(): IHeaderNav[] {
	const t = useTranslations('Navbar.Main')
	const localActive = useTypedLocale()
	return [
		{
			name: t('home'),
			path: DASHBOARD_PAGES.HOME(localActive)
		},
		{
			name: t('cast_actors'),
			path: DASHBOARD_PAGES.ACTORS(localActive)
		},
		{
			name: t('backstage'),
			path: DASHBOARD_PAGES.BACKSTAGE(localActive)
		},
		{
			name: t('film_stills'),
			path: DASHBOARD_PAGES.FILM_STILLS(localActive)
		},
		{
			name: t('news'),
			path: '#news'
		}
	]
}
