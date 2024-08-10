import { Box } from '@chakra-ui/react'

import About from '@/components/home/about'
import FilmCrew from '@/components/home/film-crew'
import Hero from '@/components/home/hero'
import Producers from '@/components/home/producers'
import News from '@/components/news'

export default function Home() {
	return (
		<Box>
			<Hero />
			<About />
			<FilmCrew />
			<Producers />
			<News />
		</Box>
	)
}
