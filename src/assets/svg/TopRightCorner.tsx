import { Box } from '@chakra-ui/react'

const TopRightCorner = () => {
	return (
		<Box
			position='absolute'
			top='0'
			right='0'
			w='48px'
			h='43px'
		>
			<svg
				width='100%'
				height='100%'
				viewBox='0 0 47 43'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
			>
				<path
					opacity='0.5'
					d='M0 0.771545H46.5V42.7715'
					stroke='white'
				/>
			</svg>
		</Box>
	)
}

export default TopRightCorner