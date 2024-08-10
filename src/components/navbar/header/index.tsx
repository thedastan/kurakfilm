import { useTranslations } from 'next-intl'

import { useHeaderNav } from '../data'

import HeaderClientComp from './HeaderClientComp'

const Header = () => {
	const t = useTranslations('Navbar.Main')
	const header_nav = useHeaderNav()
	return (
		<HeaderClientComp
			header_nav={header_nav}
			contact_btn={t('contact')}
		/>
	)
}

export default Header
