import { Box } from '@chakra-ui/react'

import News from '@/components/news'
import Dream from '@/components/stills/dream'
import StillHero from '@/components/stills/hero'
import VirginGirl from '@/components/stills/virgin-girl'

export default function FilmStillsPage() {
	return (
		<Box>
			<StillHero />
			<Dream />
			<VirginGirl />
			<News />
		</Box>
	)
}
