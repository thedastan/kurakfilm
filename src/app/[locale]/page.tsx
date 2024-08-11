import { Box } from '@chakra-ui/react'
import { useTranslations } from 'next-intl'

import About from '@/components/home/about'
import FilmCrew from '@/components/home/film-crew'
import Hero from '@/components/home/hero'
import Producers from '@/components/home/producers'
import News from '@/components/news'

export default function Home() {
	const crewTitle = useTranslations('crew')('title')
	const producerTitle = useTranslations('producers')('title')
	return (
		<Box>
			<Hero />
			<About />
			<FilmCrew title={crewTitle} />
			<Producers title={producerTitle} />
			<News />
		</Box>
	)
}
