import { ChakraProps, Text } from '@chakra-ui/react'
import React from 'react'

interface Props extends ChakraProps {
	children: string
}
const Description = ({
	children,
	fontWeight = '400',
	fontSize = '18px',
	lineHeight = '28.26px',
	color = '#CAC7C5',
	...props
}: Props) => {
	return (
		<Text
			color={color}
			fontWeight={fontWeight}
			lineHeight={lineHeight}
			fontSize={fontSize}
			{...props}
		>
			{children}
		</Text>
	)
}

export default Description
