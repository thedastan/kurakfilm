'use client'

import {
	Button,
	Modal,
	ModalCloseButton,
	ModalContent,
	useDisclosure
} from '@chakra-ui/react'
import { VscTriangleRight } from 'react-icons/vsc'

import { PropsWithTitle } from '@/types/props.types'

const TrailerButton = ({ title }: PropsWithTitle) => {
	const { isOpen, onClose, onOpen } = useDisclosure()
	const link =
		'https://drive.google.com/file/d/1f3hdrcsq3sA0sNyKEMdw-O7sFc466nwv/preview'
	return (
		<>
			<Button
				onClick={onOpen}
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
				{title}
				<VscTriangleRight color='#FFFFFF' />
			</Button>

			<Modal
				isOpen={isOpen}
				onClose={onClose}
				size='full'
			>
				<ModalContent
					bg='transparent'
					h='100vh'
				>
					<ModalCloseButton
						left='20px'
						top='20px'
						color='#FFFFFF'
						fontSize={{ md: '26px', base: '20px' }}
					/>
					<iframe
						src={link}
						width='100%'
						height='100%'
						allow='autoplay'
					></iframe>
				</ModalContent>
			</Modal>
		</>
	)
}

export default TrailerButton
