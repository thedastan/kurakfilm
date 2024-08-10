import { Box, Container, Heading } from '@chakra-ui/react'
import Image from 'next/image'

import TrailerButton from '@/components/ui/buttons/TrailerButton'
import Description from '@/components/ui/texts/Description'

import { fjalla_one } from '@/constants/fonts'

import Logo from '@/assets/img/hero-logo.svg'

import {
	CONTAINER_WIDTH,
	HEADER_HEIGHT,
	MINI_HEADER_HEIGHT
} from '@/config/_variables.config'

const Hero = () => {
	return (
		<Box
			className='hero-home'
			position='relative'
			pt={{ md: HEADER_HEIGHT, base: MINI_HEADER_HEIGHT }}
		>
			<Box
				position='absolute'
				top='0'
				left='0'
				right='0'
				bottom='0'
				w='100%'
				h='100%'
				bg='radial-gradient(67.84% 67.84% at 50% 50%, rgba(0, 0, 0, 0) 0%, #000000 100%)'
				zIndex='0'
			/>

			<Container maxW={CONTAINER_WIDTH}>
				<Box
					position='relative'
					zIndex='1'
					maxW='579px'
					mt='116px'
				>
					<Image
						src={Logo}
						alt='Logo'
					/>
					<Heading
						mt='40px'
						className={fjalla_one.className}
						fontSize='34px'
						textTransform='uppercase'
						lineHeight='42.73px'
						color='#FFFFFF'
						opacity='.8'
					>
						“THE BEST OF YOU ARE THOSE WHO ARE BEST TO THEIR WOMEN”
					</Heading>

					<Description
						mt='15px'
						mb='48px'
					>
						Prophet Muhammad (ﷺ)
					</Description>
					<TrailerButton />
				</Box>
			</Container>
		</Box>
	)
}

export default Hero
