'use client'

import { Box, Flex } from '@chakra-ui/react'
import Image from 'next/image'
import { useState } from 'react'

import TitleComponent from '@/components/ui/texts/TitleComponent'

import { PropsWithTitle } from '@/types/props.types'

import { useGalley } from '@/hooks/data-hooks'

const StillHeroClient = ({ title }: PropsWithTitle) => {
	const { data, isLoading } = useGalley()
	const [image, setImage] = useState('')
	return (
		<Box>
			<Box
				className='still-hero'
				position='relative'
			>
				<Box
					position='absolute'
					bg='linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%)'
					h='151px'
					w='100%'
					left='0'
					bottom='0'
					zIndex='0'
				/>

				{!!image && (
					<Box
						position='absolute'
						zIndex='3'
						left='0'
						top='0'
						bottom='0'
						right='0'
						w='100%'
						h='100%'
					>
						<Image
							src={image}
							alt='Background'
							width={1440}
							height={664}
							className='full-image'
						/>

						<Box
							position='absolute'
							bg='linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%)'
							h='151px'
							w='100%'
							left='0'
							bottom='0'
							zIndex='4'
						/>
					</Box>
				)}
				<Flex
					justifyContent='center'
					alignItems='end'
					pb={{ md: '50px', base: '19px' }}
					minH='664px'
					px='4'
					position='relative'
					zIndex='1'
				>
					<Flex
						flexDirection='column'
						alignItems='center'
						textAlign='center'
					>
						<TitleComponent>{title}</TitleComponent>
					</Flex>
				</Flex>
			</Box>
			<Flex
				w='100%'
				overflowX='auto'
				className='unscroll'
			>
				<Flex>
					{!!data &&
						data.map(el => (
							<Box
								key={el.id}
								onMouseOver={() => setImage(el.image)}
								onMouseLeave={() => setImage('')}
								onClick={() => setImage(el.image)}
								w={{ md: '205.88px', base: '107.51px' }}
								h={{ md: '126.39px', base: '69.29px' }}
								cursor='pointer'
								_active={{ opacity: '.8' }}
							>
								<Image
									src={el.image}
									alt='Image'
									width={205.88}
									height={126.39}
									className='full-image'
								/>
							</Box>
						))}
				</Flex>
			</Flex>
		</Box>
	)
}

export default StillHeroClient
