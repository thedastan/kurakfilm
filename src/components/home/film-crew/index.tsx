'use client'

import { Avatar, Box, Container, Flex, Text } from '@chakra-ui/react'
import Link from 'next/link'

import TitleComponent from '@/components/ui/texts/TitleComponent'

import { CONTAINER_WIDTH } from '@/config/_variables.config'

import { useCrew } from '@/hooks/data-hooks'
import useTypedLocale from '@/hooks/useLocale'

const FilmCrew = () => {
	const { data, isLoading } = useCrew()
	const locale = useTypedLocale()
	return (
		<Box mt='160px'>
			<Container maxW={CONTAINER_WIDTH}>
				<TitleComponent textAlign='center'>film crew</TitleComponent>

				<Flex
					flexWrap='wrap'
					justifyContent='center'
					gap='5'
					mt='40px'
				>
					{data?.map(el => (
						<Box
							maxW={{ lg: '416px', md: '47%', sm: '80%', base: '100%' }}
							w='100%'
						>
							<Link
								href={el.link}
								target='_blank'
							>
								<Flex
									key={el.id}
									bg='#FFFFFF1A'
									borderBottom='1.12px solid #000000'
									alignItems='center'
									px={{ lg: '30px', base: '4' }}
									py='15px'
									gap='3'
									w='100%'
									_hover={{ textDecoration: 'underline' }}
								>
									<Avatar
										src={el.image}
										w='90px'
										h='90px'
									/>
									<Box color='#FFFFFF'>
										<Text
											fontWeight='600'
											fontSize='20px'
											lineHeight='22.8px'
										>
											{el[`full_name_${locale}`]}
										</Text>
										<Text
											mt='2'
											opacity='.8'
											fontSize='16px'
											lineHeight='18.24px'
										>
											{el[`info_${locale}`]}
										</Text>
									</Box>
								</Flex>
							</Link>
						</Box>
					))}
				</Flex>
			</Container>
		</Box>
	)
}

export default FilmCrew
