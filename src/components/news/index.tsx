import { useTranslations } from 'next-intl'

import NewsClientComp from './NewsClientComp'

const News = () => {
	const t = useTranslations('news')
	return <NewsClientComp title={t('title')} />
}

export default News
