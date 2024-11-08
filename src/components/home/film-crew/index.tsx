'use client'

import { Avatar, Box, Container, Flex, Stack, Text } from '@chakra-ui/react'
import Link from 'next/link'

import TitleComponent from '@/components/ui/texts/TitleComponent'

import { PropsWithTitle } from '@/types/props.types'

import { CONTAINER_WIDTH } from '@/config/_variables.config'

import { useCrew } from '@/hooks/data-hooks'
import useTypedLocale from '@/hooks/useLocale'

const FilmCrew = ({ title }: PropsWithTitle) => {
	const { data, isLoading } = useCrew()
	const locale = useTypedLocale()
	return (
		<Box mt={{ md: '160px', base: '78px' }}>
			<Box
				position='absolute'
				top={0}
				left={0}
				right={0}
				bottom={0}
				bgImage='radial-gradient(circle at left, rgba(40, 9, 97, 0.2) 15%, rgba(27, 27, 27, 0.2) 50%, rgba(0, 0, 0, 0) 100%)'
				zIndex={-1}
			/>

			<Container maxW={CONTAINER_WIDTH}>
				<TitleComponent textAlign={{ md: 'center', base: 'start' }}>
					{title}
				</TitleComponent>

				<Flex
					flexWrap='wrap'
					justifyContent='center'
					alignItems='start'
					gap='5'
					mt='40px'
				>
					{data?.map(el => (
						<Box
							maxW={{ lg: '416px', md: '47%', sm: '80%', base: '100%' }}
							w='100%'
							bg='#FFFFFF1A'
							borderBottom='1.12px solid #000000'
							py='15px'
							px={{ lg: '30px', base: '4' }}
							rounded='3px'
						>
							<Text
								opacity='.8'
								fontSize='16px'
								lineHeight='18.24px'
								color='#FFFFFF'
							>
								{el[`info_${locale}`]}
                
							</Text>

							<Stack
								spacing='3'
								mt={{ md: '5', base: '4' }}
							>
								{el.crews.map(crew => (
									<Link
										href={crew.link}
										target='_blank'
										key={crew.id}
									>
										<Flex
											key={el.id}
											alignItems='center'
											color='#FFFFFF'
											gap='3'
											w='100%'
											_hover={{ textDecoration: 'underline' }}
										>
											<Avatar
												src={crew.image}
												w='50px'
												h='50px'
											/>
											<Text
												fontWeight='500'
												fontSize='20px'
												lineHeight='22.8px'
											>
												{crew[`full_name_${locale}`]}
											</Text>
										</Flex>
									</Link>
								))}
							</Stack>
							{/* <Link
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
                      opacity='.8'
                      fontSize='16px'
                      lineHeight='18.24px'
                    >
                      {el[`info_${locale}`]}
                    </Text>
                    <Text
                      mt='2'
                      fontWeight='500'
                      fontSize='20px'
                      lineHeight='22.8px'
                    >
                      {el[`full_name_${locale}`]}
                    </Text>
                  </Box>
                </Flex>
              </Link> */}
						</Box>
					))}
				</Flex>
			</Container>
		</Box>
	)
}

export default FilmCrew
