import { ChakraProps, Text } from '@chakra-ui/react'

import { oswald } from '@/constants/fonts'

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
		<Text
			as='h1'
			{...props}
			className={oswald.className}
			color={color}
			fontWeight='400'
			lineHeight={lineHeight}
			textTransform='uppercase'
			fontSize={fontSize}
		>
			{children}
		</Text>
	)
}

export default TitleComponent
