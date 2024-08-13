import { Box } from '@chakra-ui/react'

const BottomLeftCorder = () => {
	return (
		<Box
			position='absolute'
			bottom='0'
			left='0'
			w={{ md: '48px', base: '19.46px' }}
			h={{ md: '43px', base: '17.57px' }}
		>
			<svg
				width='100%'
				height='100%'
				viewBox='0 0 48 44'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
			>
				<path
					opacity='0.5'
					d='M47.5 42.7715H1V0.771545'
					stroke='white'
				/>
			</svg>
		</Box>
	)
}

export default BottomLeftCorder
