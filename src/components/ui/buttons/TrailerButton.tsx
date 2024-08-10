import { Button } from '@chakra-ui/react'
import { VscTriangleRight } from 'react-icons/vsc'

const TrailerButton = () => {
	return (
		<Button
			variant='none'
			w='217px'
			bg='#BD1A1A'
			h='47.5px'
			color='#FFFFFF'
			fontSize='18px'
			fontWeight='500'
			px='3'
			lineHeight='25.2px'
			gap='9px'
			alignItems='center'
		>
			Watch the Trailer
			<VscTriangleRight color='#FFFFFF' />
		</Button>
	)
}

export default TrailerButton
