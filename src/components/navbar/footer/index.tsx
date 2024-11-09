import { useTranslations } from 'next-intl'

import { useHeaderNav } from '../data'

import FooterClientComp from './FooterClientComp'
import useLogoImg from '@/components/home/hero/data'

const Footer = () => {
	const header_nav = useHeaderNav()
	const t = useTranslations('Navbar')
	const data_logo = useLogoImg()
	return (
		<FooterClientComp
			header_nav={header_nav}
			data_logo={data_logo}
			collaboration={t('collaboration')}
			developer={t('developer')}
		/>
	)
}

export default Footer
