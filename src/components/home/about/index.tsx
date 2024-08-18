import { Box, Container, Flex, Stack, Text } from '@chakra-ui/react'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import Link from 'next/link'

import Description from '@/components/ui/texts/Description'
import TitleComponent from '@/components/ui/texts/TitleComponent'

import AboutImage from '@/assets/img/about.png'
import Logo from '@/assets/img/footer-logo.svg'
import LogoLine from '@/assets/img/logo-line.svg'

import { CONTAINER_WIDTH } from '@/config/_variables.config'
import { DASHBOARD_PAGES } from '@/config/pages-url.config'

import useTypedLocale from '@/hooks/useLocale'

import { sponsors } from './sponsors'

const About = () => {
	const t = useTranslations('About')
	const t_nav = useTranslations('Navbar.Main')
	const Hadis = useTranslations('Hero')
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
			spacing='6px'
			mt={{ md: '37px', base: '30px' }}
		>
			<Description
				fontSize={{ md: '18px', base: '16px' }}
				lineHeight={{ md: '28px', base: '18px' }}
			>{`${t('Characteristics.country')}: ${t('Characteristics.3')}`}</Description>
			<Description
				fontSize={{ md: '18px', base: '16px' }}
				lineHeight={{ md: '28px', base: '18px' }}
			>{`${t('Characteristics.language')}: ${t('Characteristics.2')}`}</Description>
			<Description
				fontSize={{ md: '18px', base: '16px' }}
				lineHeight={{ md: '28px', base: '18px' }}
			>{`${t('Characteristics.age')}: 16+`}</Description>
			<Description
				fontSize={{ md: '18px', base: '16px' }}
				lineHeight={{ md: '28px', base: '18px' }}
			>{`${t('Characteristics.chron')}: D`}</Description>
		</Stack>
	)
	return (
		<Box
			pt={{ md: '150px', base: '468px' }}
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
				bg='radial-gradient(67.84% 67.84% at 50% 50%, rgba(0, 0, 0, 0) 0%, #000000 100%)'
				zIndex='0'
			/>
			<Container
				maxW={CONTAINER_WIDTH}
				// className='about'
				position='relative'
				h={{ md: '651px', base: '810px' }}
			>
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
						<Box position='relative'>
							<Box
								w={{ md: '461px', base: '100%' }}
								h={{ md: '605px', base: 'auto' }}
							>
								<Image
									src={AboutImage}
									alt='Image'
									width={461}
									height={605}
									objectFit='cover'
									className='full-image'
								/>

								<Flex
									position='absolute'
									left='0'
									top='0'
									w='100%'
									h='100%'
									justifyContent='center'
									py={{ sm: '4', base: '3' }}
								>
									<Flex
										flexDirection='column'
										justifyContent='space-between'
										textTransform='uppercase'
									>
										<Box>
											<Text
												color='#CAC7C5'
												fontSize={{ md: '9.12px', base: '7px' }}
												lineHeight={{ md: '12.86px', base: '10px' }}
												fontWeight='700'
												textAlign='center'
											>
												{Hadis('description')}
											</Text>
											<Box
												mt='6px'
												color='#CAC7C5'
												fontSize={{ md: '8.46px', base: '6px' }}
												lineHeight={{ md: '11.93px', base: '9px' }}
												fontWeight='400'
												textAlign='end'
											>
												<Text>{Hadis('subtitle')}</Text>
												<Text>Sunan AL-TIRMIDHI</Text>
											</Box>
										</Box>

										<Flex
											flexDirection='column'
											alignItems='center'
										>
											<Text
												color='#CAC7C5'
												fontSize={{ md: '8.46px', base: '6px' }}
												lineHeight={{ md: '11.93px', base: '9px' }}
												fontWeight='400'
											>
												From the directors of the film "The Lake”
											</Text>
											<Text
												mt='1'
												color='#CAC7C5'
												fontSize={{ md: '11.28px', base: '7px' }}
												lineHeight={{ md: '15.9px', base: '11px' }}
												fontWeight='700'
											>
												Erke Dzhumakmatova & Emil Atageldiev
											</Text>

											<Box my={{ md: '14px', base: '2' }}>
												<Image
													src={Logo}
													alt='Logo'
												/>
											</Box>

											<Text
												my={{ md: '14px', base: '2' }}
												color='#CAC7C5'
												fontSize='7.24px'
												lineHeight='10.21px'
												fontWeight='400'
												opacity='.56'
											>
												Production by Kyrgyzstan, Switzerland, Serbia, France
											</Text>

											<Flex
												justifyContent='center'
												gap={{ md: '20px', base: '3' }}
											>
												{sponsors.map((el, idx) => (
													<Image
														key={idx}
														src={el}
														alt='Logo'
													/>
												))}
											</Flex>
										</Flex>
									</Flex>
								</Flex>
							</Box>
						</Box>
						<Box display={{ md: 'none', base: 'block' }}>{characteristics}</Box>
					</Box>

					<Box maxW={{ md: '580px', base: '100%' }}>
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
