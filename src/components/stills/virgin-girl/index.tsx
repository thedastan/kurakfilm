import { Box, Container, Flex } from '@chakra-ui/react'
import { useTranslations } from 'next-intl'
import Image from 'next/image'

import Description from '@/components/ui/texts/Description'
import TitleComponent from '@/components/ui/texts/TitleComponent'

import Image1 from '@/assets/img/film-still4.png'
import Image2 from '@/assets/img/film-still5.png'

const VirginGirl = () => {
	const t = useTranslations('film_stills')
	return (
		<Box mt='180px'>
			<Container maxW='container.lg'>
				<Flex
					gap='27px'
					alignItems='end'
				>
					<Box
						minW='538px'
						h='308px'
					>
						<Image
							src={Image1}
							alt='Image'
						/>
					</Box>

					<Box>
						<TitleComponent>{t('virgin')}</TitleComponent>
						<Description mt='11px'>{t('virgin_description')}</Description>
					</Box>
				</Flex>
				<Box
					mt='36px'
					h='481px'
					w='100%'
				>
					<Image
						src={Image2}
						alt='Image'
						className='full-image'
					/>
				</Box>
			</Container>
		</Box>
	)
}

export default VirginGirl
