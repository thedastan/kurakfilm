import { Box, Flex } from '@chakra-ui/react'
import { useTranslations } from 'next-intl'

import Description from '@/components/ui/texts/Description'
import TitleComponent from '@/components/ui/texts/TitleComponent'

const StillHero = () => {
	const t = useTranslations('film_stills')
	return (
		<Box>
			<Box className='still-hero'>
				<Flex
					justifyContent='center'
					alignItems='end'
					pb={{ md: '50px', base: '19px' }}
					minH='664px'
					px='4'
				>
					<Flex
						flexDirection='column'
						alignItems='center'
						textAlign='center'
					>
						<TitleComponent>{t('title')}</TitleComponent>
						<Description
							mt='9px'
							maxW='400px'
						>
							{t('query')}
						</Description>
					</Flex>
				</Flex>
			</Box>
		</Box>
	)
}

export default StillHero
