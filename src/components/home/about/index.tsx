import { Box, Container, Flex, Stack } from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link'

import Description from '@/components/ui/texts/Description'
import TitleComponent from '@/components/ui/texts/TitleComponent'

import AboutImage from '@/assets/img/about.webp'

import { CONTAINER_WIDTH } from '@/config/_variables.config'
import { DASHBOARD_PAGES } from '@/config/pages-url.config'

import useTypedLocale from '@/hooks/useLocale'

const About = () => {
	const locale = useTypedLocale()
	const navigates = [
		{
			name: 'Cast >',
			path: DASHBOARD_PAGES.ACTORS(locale)
		},
		{
			name: 'Backstages >',
			path: DASHBOARD_PAGES.BACKSTAGE(locale)
		},
		{
			name: 'Film stills >',
			path: DASHBOARD_PAGES.FILM_STILLS(locale)
		}
	]
	return (
		<Box mt='150px'>
			<Container
				maxW={CONTAINER_WIDTH}
				className='about'
				position='relative'
			>
				<Box
					position='absolute'
					top='0'
					left='0'
					right='0'
					bottom='0'
					w='100%'
					h='100%'
					bg='linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, #000000 71.76%)'
					zIndex='0'
				/>
				<Flex
					padding={{ md: '23px', base: '0' }}
					position='relative'
					zIndex='1'
					gap='142px'
					alignItems='center'
				>
					<Box
						w='561px'
						h='605px'
					>
						<Image
							src={AboutImage}
							alt='Image'
							width={561}
							height={605}
							objectFit='cover'
							className='full-image'
						/>
					</Box>

					<Box maxW='480px'>
						<TitleComponent whiteSpace='nowrap'>More about film</TitleComponent>
						<Description mt='5'>
							Based on true events, several stories about disempowerment of
							women, are closely intertwined, affecting each other’s, unfolding
							against the background of the traditional, patriarchal society of
							modern-day Kyrgyzstan ultimately result in a series of tragic
							outcomes.
						</Description>

						<Flex
							gap='10px'
							mt='30px'
						>
							{navigates.map((el, idx) => (
								<Link
									href={el.path}
									key={idx}
								>
									<Flex
										px='25px'
										py='2'
										rounded='100px'
										bg='#FFFFFF1F'
										fontWeight='500'
										fontSize='14.13px'
										lineHeight='28.26px'
										color='#CAC7C5'
									>
										{el.name}
									</Flex>
								</Link>
							))}
						</Flex>
						<Stack
							spacing='14px'
							mt='37px'
						>
							<Description>Chron: D</Description>
							<Description>Language: Kyrgyz</Description>
							<Description>Country of Origin: Kyrgyzstan</Description>
							<Description>Age restrictions: 16+</Description>
						</Stack>
					</Box>
				</Flex>
			</Container>
		</Box>
	)
}

export default About
