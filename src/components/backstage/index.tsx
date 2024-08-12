'use client'

import { Box, Container, Flex } from '@chakra-ui/react'
import Image from 'next/image'

import { PropsWithTitle } from '@/types/props.types'

import BottomLeftCorder from '@/assets/svg/BottomLeftCorder'
import BottomRightCorner from '@/assets/svg/BottomRightCorner'
import TopLeftCorner from '@/assets/svg/TopLeftCorner'
import TopRightCorner from '@/assets/svg/TopRightCorner'

import { useGalley } from '@/hooks/data-hooks'

import TitleComponent from '../ui/texts/TitleComponent'

const Backstage = ({ title }: PropsWithTitle) => {
	const { data, isLoading } = useGalley()
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
			</Container>
			<Flex
				my='95px'
				w='100%'
				overflowX='auto'
				className='unscroll'
			>
				<Flex>
					{data?.map(el => (
						<Box
							key={el.id}
							w='360.5px'
							h='221.31px'
							cursor='pointer'
						>
							<Image
								src={el.image}
								alt='Image'
								width={360.88}
								height={221.39}
								className='full-image'
							/>
						</Box>
					))}
				</Flex>
			</Flex>
			<Container maxW='container.lg'>
				<Flex
					justifyContent='center'
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
