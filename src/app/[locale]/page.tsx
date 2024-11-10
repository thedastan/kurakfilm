import { Box } from '@chakra-ui/react'
import { useTranslations } from 'next-intl'

import About from '@/components/home/about'
import FilmCrew from '@/components/home/film-crew'
import Hero from '@/components/home/hero'
import Producers from '@/components/home/producers'
import News from '@/components/news'
import dataHome from '@/components/home/hero/data'
import useLogoImg from '@/components/home/hero/data'

export default function Home() {
	const crewTitle = useTranslations('crew')('title')
	const producerTitle = useTranslations('producers')('title')
	const producerSoTitle = useTranslations('producers')('co-producer')
	const producerAsTitle = useTranslations('producers')('associate-producer')


	const data_logo = useLogoImg()
	return (
		<Box>
			<Hero data_logo={data_logo}/>
			<About data_logo={data_logo}/>
			<FilmCrew title={crewTitle} />
			<Producers 
			title={producerTitle} 
			coProducerTitle={producerSoTitle} 
			associateProducerTitle={producerAsTitle} 
			  />
			<News />
		</Box>
	)
}
