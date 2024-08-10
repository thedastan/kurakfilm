import { Box, Container, Flex, SimpleGrid, Text } from '@chakra-ui/react'
import { PiShareFatLight } from 'react-icons/pi'
import { SlEye } from 'react-icons/sl'

import { CONTAINER_WIDTH } from '@/config/_variables.config'

import Description from '../ui/texts/Description'
import TitleComponent from '../ui/texts/TitleComponent'

const News = () => {
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
					{[1, 2, 3, 4].map(el => (
						<Flex
							key={el}
							p='4'
							gap='4'
							bg='#FFFFFF'
							boxShadow='0px 30px 60px 0px #20385526'
							alignItems='start'
						>
							<Box
								minW='118px'
								h='100%'
								bg='red'
							/>

							<Box>
								<Description
									noOfLines={2}
									color='#000000'
								>
									Erke Dzhumakmatova and Emil Atageldiev’s gritty drama Kurak is
									set to be the first France-Kyrgyzstan co-production in two
									decades, following an agreement signed between CNC and
									Kyrgyzstan’s Cinema Department in Cannes.
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
											56
										</Text>
									</Flex>
									<PiShareFatLight fontSize='18px' />
								</Flex>
							</Box>
						</Flex>
					))}
				</SimpleGrid>
			</Container>
		</Box>
	)
}

export default News
