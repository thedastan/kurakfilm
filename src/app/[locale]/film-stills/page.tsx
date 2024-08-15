import { Box } from '@chakra-ui/react'

import News from '@/components/news'
import StillHero from '@/components/stills/hero'

export default function FilmStillsPage() {
	return (
		<Box>
			<StillHero />
			<News />
		</Box>
	)
}
