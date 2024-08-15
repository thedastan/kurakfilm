import { useTranslations } from 'next-intl'

import StillHeroClient from './StillHeroClient'

const StillHero = () => {
	const t = useTranslations('film_stills')
	return <StillHeroClient title={t('title')} />
}

export default StillHero
