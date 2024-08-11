import { Box, Container, Flex } from '@chakra-ui/react'

import { PropsWithTitle } from '@/types/props.types'

import BottomLeftCorder from '@/assets/svg/BottomLeftCorder'
import BottomRightCorner from '@/assets/svg/BottomRightCorner'
import TopLeftCorner from '@/assets/svg/TopLeftCorner'
import TopRightCorner from '@/assets/svg/TopRightCorner'

import TitleComponent from '../ui/texts/TitleComponent'

const Backstage = ({ title }: PropsWithTitle) => {
	return (
		<Box pt='47px'>
			<Container maxW='container.lg'>
				<TitleComponent textAlign='center'>{title}</TitleComponent>
				<Flex
					justifyContent='center'
					mt='47px'
					p='20px'
					w='942.5px'
					position='relative'
				>
					<TopLeftCorner />
					<TopRightCorner />
					<BottomLeftCorder />
					<BottomRightCorner />
					<iframe
						src='https://drive.google.com/file/d/1f3hdrcsq3sA0sNyKEMdw-O7sFc466nwv/preview'
						width='100%'
						height='481'
						allow='autoplay'
					></iframe>
				</Flex>

				<Flex
					justifyContent='center'
					mt='97px'
					p='20px'
					w='942.5px'
					position='relative'
				>
					<TopLeftCorner />
					<TopRightCorner />
					<BottomLeftCorder />
					<BottomRightCorner />
					<iframe
						src='https://drive.google.com/file/d/1f3hdrcsq3sA0sNyKEMdw-O7sFc466nwv/preview'
						width='100%'
						height='481'
						allow='autoplay'
					></iframe>
				</Flex>
			</Container>
		</Box>
	)
}

export default Backstage
