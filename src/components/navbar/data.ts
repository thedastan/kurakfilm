import { useTranslations } from 'next-intl'
import { IoLogoInstagram } from 'react-icons/io5'
import { PiYoutubeLogoLight } from 'react-icons/pi'
import { SlSocialFacebook } from 'react-icons/sl'

import { DASHBOARD_PAGES } from '@/config/pages-url.config'

import useTypedLocale from '@/hooks/useLocale'

import {
	FACEBOOK_LINK,
	INSTAGRAM_LINK,
	YOUTUBE_LINK
} from './../../constants/admin'

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
			name: t('film_stills'),
			path: DASHBOARD_PAGES.FILM_STILLS(localActive)
		},
		{
			name: t('backstage'),
			path: DASHBOARD_PAGES.BACKSTAGE(localActive)
		},

		{
			name: t('news'),
			path: '#news'
		}
	]
}

export const social_contact = [
	{
		path: FACEBOOK_LINK,
		icon: SlSocialFacebook
	},
	{
		path: INSTAGRAM_LINK,
		icon: IoLogoInstagram
	},
	{
		path: YOUTUBE_LINK,
		icon: PiYoutubeLogoLight
	}
]
