import { Avatar, Box, Container, Flex, Text, Wrap } from '@chakra-ui/react'

import TitleComponent from '@/components/ui/texts/TitleComponent'

import { CONTAINER_WIDTH } from '@/config/_variables.config'

const FilmCrew = () => {
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
					{[1, 2, 3, 4, 5].map(el => (
						<Flex
							key={el}
							bg='#FFFFFF1A'
							borderBottom='1.12px solid #000000'
							alignItems='center'
							px={{ lg: '30px', base: '4' }}
							py='15px'
							gap='3'
							maxW={{ lg: '416px', md: '47%', sm: '80%', base: '100%' }}
							w='100%'
						>
							<Avatar
								w='90px'
								h='90px'
							/>
							<Box color='#FFFFFF'>
								<Text
									fontWeight='600'
									fontSize='20px'
									lineHeight='22.8px'
								>
									Erke Dzhumakmatova
								</Text>
								<Text
									mt='2'
									opacity='.8'
									fontSize='16px'
									lineHeight='18.24px'
								>
									Scriptwriter and Director
								</Text>
							</Box>
						</Flex>
					))}
				</Flex>
			</Container>
		</Box>
	)
}

export default FilmCrew
