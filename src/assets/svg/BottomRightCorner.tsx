import { Box } from '@chakra-ui/react'

const BottomRightCorner = () => {
	return (
		<Box
			position='absolute'
			bottom='0'
			right='0'
			w='48px'
			h='43px'
		>
			<svg
				width='100%'
				height='100%'
				viewBox='0 0 47 44'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
			>
				<path
					opacity='0.5'
					d='M0 42.7715H46.5V0.771545'
					stroke='white'
				/>
			</svg>
		</Box>
	)
}

export default BottomRightCorner
