import { Button } from '@chakra-ui/react'
import { useTranslations } from 'next-intl'
import { VscTriangleRight } from 'react-icons/vsc'

const TrailerButton = () => {
	const t = useTranslations('Hero')
	return (
		<Button
			variant='none'
			minW='217px'
			bg='#BD1A1A'
			h='47.5px'
			color='#FFFFFF'
			fontSize='18px'
			fontWeight='500'
			px='40px'
			lineHeight='25.2px'
			gap='9px'
			alignItems='center'
		>
			{t('button')}
			<VscTriangleRight color='#FFFFFF' />
		</Button>
	)
}

export default TrailerButton
