import { useTranslations } from 'next-intl'

import { useHeaderNav } from '../data'

import FooterClientComp from './FooterClientComp'

const Footer = () => {
	const header_nav = useHeaderNav()
	const t = useTranslations('Navbar')
	return (
		<FooterClientComp
			header_nav={header_nav}
			collaboration={t('collaboration')}
			developer={t('developer')}
		/>
	)
}

export default Footer
