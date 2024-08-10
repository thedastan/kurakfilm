import { ChakraProps, Heading } from '@chakra-ui/react'

import { fjalla_one } from '@/constants/fonts'

interface Props extends ChakraProps {
	children: string
}
const TitleComponent = ({
	children,
	fontSize = { md: '60px', base: '54px' },
	lineHeight = { md: '75.41px', base: '67.87px' },
	color = '#CAC7C5',
	...props
}: Props) => {
	return (
		<Heading
			className={fjalla_one.className}
			as='h1'
			{...props}
			color={color}
			fontWeight='400'
			lineHeight={lineHeight}
			textTransform='uppercase'
			letterSpacing='-1px'
			fontSize={fontSize}
		>
			{children}
		</Heading>
	)
}

export default TitleComponent
