import { Box } from '@chakra-ui/react'
import { useTranslations } from 'next-intl'

import Backstage from '@/components/backstage'
import News from '@/components/news'

import { HEADER_HEIGHT, MINI_HEADER_HEIGHT } from '@/config/_variables.config'

export default function BackstagePage() {
	const t = useTranslations('backstage')
	return (
		<Box pt={{ md: HEADER_HEIGHT, base: MINI_HEADER_HEIGHT }}>
			<Backstage title={t('title')} />
			<News />
		</Box>
	)
}
