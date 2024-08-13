import { Box, Container, Flex, Stack } from '@chakra-ui/react'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import Link from 'next/link'

import Description from '@/components/ui/texts/Description'
import TitleComponent from '@/components/ui/texts/TitleComponent'

import AboutImage from '@/assets/img/about.webp'

import { CONTAINER_WIDTH } from '@/config/_variables.config'
import { DASHBOARD_PAGES } from '@/config/pages-url.config'

import useTypedLocale from '@/hooks/useLocale'

const About = () => {
	const t = useTranslations('About')
	const t_nav = useTranslations('Navbar.Main')
	const locale = useTypedLocale()
	const navigates = [
		{
			name: `${t_nav('cast_actors')} >`,
			path: DASHBOARD_PAGES.ACTORS(locale)
		},
		{
			name: `${t_nav('backstage')} >`,
			path: DASHBOARD_PAGES.BACKSTAGE(locale)
		},
		{
			name: `${t_nav('film_stills')} >`,
			path: DASHBOARD_PAGES.FILM_STILLS(locale)
		}
	]

	const characteristics = (
		<Stack
			spacing='14px'
			mt={{ md: '37px', base: '30px' }}
		>
			<Description
				fontSize={{ md: '18px', base: '16px' }}
				lineHeight={{ md: '28px', base: '18px' }}
			>{`${t('Characteristics.chron')}: D`}</Description>
			<Description
				fontSize={{ md: '18px', base: '16px' }}
				lineHeight={{ md: '28px', base: '18px' }}
			>{`${t('Characteristics.language')}: ${t('Characteristics.2')}`}</Description>
			<Description
				fontSize={{ md: '18px', base: '16px' }}
				lineHeight={{ md: '28px', base: '18px' }}
			>{`${t('Characteristics.country')}: ${t('Characteristics.3')}`}</Description>
			<Description
				fontSize={{ md: '18px', base: '16px' }}
				lineHeight={{ md: '28px', base: '18px' }}
			>{`${t('Characteristics.age')}: 16+`}</Description>
		</Stack>
	)
	return (
		<Box pt={{ md: '150px', base: '548px' }}>
			<Container
				maxW={CONTAINER_WIDTH}
				className='about'
				position='relative'
				h={{ md: '651px', base: '810px' }}
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
					padding={{ md: '23px', base: '0 16px' }}
					position={{ md: 'relative', base: 'absolute' }}
					zIndex='1'
					gap={{ '2xl': '142px', md: '50px', base: '30px' }}
					alignItems={{ md: 'center', base: 'start' }}
					flexDirection={{ md: 'row', base: 'column-reverse' }}
					left='0'
					w='100%'
					bottom='42px'
				>
					<Box>
						<Box
							w={{ md: '561px', base: '100%' }}
							h={{ md: '605px', base: '460px' }}
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
						<Box display={{ md: 'none', base: 'block' }}>{characteristics}</Box>
					</Box>

					<Box maxW={{ md: '480px', base: '100%' }}>
						<TitleComponent>{t('title')}</TitleComponent>
						<Description mt='5'>{t('description')}</Description>

						<Flex
							mt='30px'
							overflowX='auto'
							className='unscroll'
							w='100%'
						>
							<Flex gap='10px'>
								{navigates.map((el, idx) => (
									<Link
										href={el.path}
										key={idx}
									>
										<Flex
											px='5'
											py='2'
											rounded='100px'
											bg='#FFFFFF1F'
											fontWeight='500'
											fontSize='14.13px'
											lineHeight='28.26px'
											color='#CAC7C5'
											whiteSpace='nowrap'
										>
											{el.name}
										</Flex>
									</Link>
								))}
							</Flex>
						</Flex>
						<Box display={{ md: 'block', base: 'none' }}>{characteristics}</Box>
					</Box>
				</Flex>
			</Container>
		</Box>
	)
}

export default About
