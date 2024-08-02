import { ChakraProps, Heading } from '@chakra-ui/react'

interface Props extends ChakraProps {
	children: string
}
const Title = ({
	children,
	fontWeight = '700',
	fontSize = '22px',
	lineHeight = '27.61px',
	color = '#000000',
	...props
}: Props) => {
	return (
		<Heading
			as='h1'
			{...props}
			color={color}
			fontWeight={fontWeight}
			lineHeight={lineHeight}
			fontSize={fontSize}
		>
			{children}
		</Heading>
	)
}

export default Title
