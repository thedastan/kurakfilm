import { Box } from '@chakra-ui/react'

const TopLeftCorner = () => {
	return (
		<Box
			position='absolute'
			top='0'
			left='0'
			w='48px'
			h='43px'
		>
			<svg
				width='100%'
				height='100%'
				viewBox='0 0 48 43'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
			>
				<path
					opacity='0.5'
					d='M47.5 0.771545H1V42.7715'
					stroke='white'
				/>
			</svg>
		</Box>
	)
}

export default TopLeftCorner
