'use client'

import { Box, Container, Flex, SimpleGrid, Text } from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link'
import { PiShareFatLight } from 'react-icons/pi'
import { SlEye } from 'react-icons/sl'

import { PropsWithTitle } from '@/types/props.types'

import { CONTAINER_WIDTH } from '@/config/_variables.config'

import { useNews } from '@/hooks/data-hooks'
import useTypedLocale from '@/hooks/useLocale'

import Description from '../ui/texts/Description'
import TitleComponent from '../ui/texts/TitleComponent'

const NewsClientComp = ({ title }: PropsWithTitle) => {
	const locale = useTypedLocale()
	const { data, isLoading } = useNews()

	return (
		<Box
			id='news'
			mt={{ md: '169px', base: '194px' }}
			bg={{ md: '#1A1A1A', base: 'transparent' }}
			pb={{ md: '63px', base: '0' }}
			pt={{ md: '77px', base: '0' }}
		>
			<Container maxW={CONTAINER_WIDTH}>
				<TitleComponent>{title}</TitleComponent>
				<SimpleGrid
					mt={{ md: '5', base: '30px' }}
					columns={{ md: 2, base: 1 }}
					spacing={{ md: '37px', base: '25px' }}
				>
					{data?.map(el => (
						<Link
							key={el.id}
							href={el.link}
							target='_blank'
						>
							<Flex
								p='4'
								gap='4'
								bg='#050505'
								boxShadow='0px 30px 60px 0px #20385526'
								alignItems='start'
								_hover={{ textDecoration: 'underline' }}
							>
								<Box
									minW='118px'
									h='100%'
								>
									<Image
										src={el.image}
										alt='Image'
										width={118}
										height={85}
										className='unscroll'
									/>
								</Box>

								<Box>
									<Description
										noOfLines={2}
										color='#FFFFFF'
									>
										{el[`description_${locale}`]}
									</Description>
									<Flex
										mt='2'
										justifyContent='end'
										alignItems='center'
										color='#FFFFFF'
										opacity='.6'
										gap='5'
									>
										<Flex
											gap='2'
											alignItems='center'
										>
											<SlEye fontSize='18px' />
											<Text
												lineHeight='16.94px'
												fontSize='14px'
											>
												{el.views}
											</Text>
										</Flex>
										<PiShareFatLight fontSize='18px' />
									</Flex>
								</Box>
							</Flex>
						</Link>
					))}
				</SimpleGrid>
			</Container>
		</Box>
	)
}

export default NewsClientComp
