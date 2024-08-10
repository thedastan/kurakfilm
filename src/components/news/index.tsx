'use client'

import { Box, Container, Flex, SimpleGrid, Text } from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link'
import { PiShareFatLight } from 'react-icons/pi'
import { SlEye } from 'react-icons/sl'

import { CONTAINER_WIDTH } from '@/config/_variables.config'

import { useNews } from '@/hooks/data-hooks'
import useTypedLocale from '@/hooks/useLocale'

import Description from '../ui/texts/Description'
import TitleComponent from '../ui/texts/TitleComponent'

const News = () => {
	const locale = useTypedLocale()
	const { data, isLoading } = useNews()

	return (
		<Box
			mt='169px'
			bg='#1A1A1A'
			pb='63px'
			pt='77px'
		>
			<Container maxW={CONTAINER_WIDTH}>
				<TitleComponent>News</TitleComponent>
				<SimpleGrid
					mt='5'
					columns={2}
					spacing='37px'
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
								bg='#FFFFFF'
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
										color='#000000'
									>
										{el[`description_${locale}`]}
									</Description>
									<Flex
										mt='2'
										justifyContent='end'
										alignItems='center'
										color='#000000'
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

export default News
