import { useTranslations } from 'next-intl'

const Header = () => {
	const t = useTranslations('Header')
	return <div>{t('title')}</div>
}

export default Header
