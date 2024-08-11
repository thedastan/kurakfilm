import { Box, Container, Flex } from '@chakra-ui/react'
import { useTranslations } from 'next-intl'
import Image from 'next/image'

import Description from '@/components/ui/texts/Description'

import WomanAvatar from '@/assets/img/film-still3.png'

const Dream = () => {
	const t = useTranslations('film_stills')
	return (
		<Box
			mt='180px'
			className='dream'
		>
			<Container maxW='container.xl'>
				<Flex
					w='100%'
					minH='708px'
					justifyContent='end'
					alignItems='center'
				>
					<Flex
						alignItems='center'
						gap='65px'
					>
						<Box
							w='379px'
							h='314.37px'
						>
							<Image
								src={WomanAvatar}
								alt='Image'
								className='unscroll'
							/>
						</Box>

						<Description maxW='338px'>{t('description')}</Description>
					</Flex>
				</Flex>
			</Container>
		</Box>
	)
}

export default Dream
