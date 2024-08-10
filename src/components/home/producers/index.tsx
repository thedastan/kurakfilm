import { Avatar, Box, Container, Flex, Text } from '@chakra-ui/react'
import Image from 'next/image'

import Description from '@/components/ui/texts/Description'
import TitleComponent from '@/components/ui/texts/TitleComponent'

import { CONTAINER_WIDTH } from '@/config/_variables.config'

const Producers = () => {
	return (
		<Box mt='150px'>
			<Container
				maxW={CONTAINER_WIDTH}
				px={{ md: '4', base: '0' }}
			>
				<TitleComponent px={{ md: '0', base: '4' }}>Producers</TitleComponent>
				<Flex
					mt='25px'
					w='100%'
					overflowX='auto'
					className='unscroll'
				>
					<Flex
						px={{ md: '0', base: '4' }}
						gap='30px'
					>
						{[1, 2, 3, 4, 5].map(el => (
							<Box
								w='300px'
								h='371px'
							>
								<Image
									src={''}
									alt='Image'
									height={300}
									width={300}
								/>
								<Flex
									mt='6'
									gap='3'
									alignItems='center'
								>
									<Avatar
										// src=''
										w='38px'
										h='38px'
									/>
									<Box color='#FFFFFF'>
										<Text
											fontWeight='600'
											fontSize='18px'
											lineHeight='20.52px'
										>
											Erke DZHUMAKMATOVA
										</Text>
										<Text
											mt='2'
											opacity='.5'
											lineHeight='18.24px'
										>
											Studio Oymo
										</Text>
									</Box>
								</Flex>
							</Box>
						))}
					</Flex>
				</Flex>
			</Container>
		</Box>
	)
}

export default Producers
