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
		<Box mt={{ md: '180px', base: '180px' }}>
			<Container maxW='container.lg'>
				<Flex
					gap={{ md: '27px', base: '60px' }}
					alignItems={{ lg: 'end', base: 'start' }}
					flexDirection={{ lg: 'row', base: 'column' }}
				>
					<Box
						minW={{ md: '538px', base: '100%' }}
						h={{ md: '308px', base: 'auto' }}
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
					mt={{ md: '36px', base: '60px' }}
					h={{ md: '481px', base: 'auto' }}
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
