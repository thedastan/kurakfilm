import { Box, Container, Flex } from '@chakra-ui/react'
import { useTranslations } from 'next-intl'
import Image from 'next/image'

import Description from '@/components/ui/texts/Description'

import WomanAvatar from '@/assets/img/film-still3.png'

const Dream = () => {
	const t = useTranslations('film_stills')
	return (
		<Box
			mt={{ md: '180px', base: '60px' }}
			className='dream'
		>
			<Container maxW='container.xl'>
				<Flex
					w='100%'
					minH={{ md: '708px', base: '523px' }}
					justifyContent={{ md: 'end', base: 'center' }}
					alignItems={{ md: 'center', base: 'end' }}
				>
					<Flex
						alignItems={{ md: 'center', base: 'start' }}
						gap={{ md: '65px', base: '0' }}
						flexDirection={{ md: 'row', base: 'column' }}
						mb='-138px'
					>
						<Box
							w={{ sm: '379px', base: '100%' }}
							h='314.37px'
						>
							<Image
								src={WomanAvatar}
								alt='Image'
								className='unscroll'
							/>
						</Box>

						<Description
							mt='-64px'
							maxW='338px'
						>
							{t('description')}
						</Description>
					</Flex>
				</Flex>
			</Container>
		</Box>
	)
}

export default Dream
