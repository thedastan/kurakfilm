'use client'

import { Button } from '@chakra-ui/react'
import Link from 'next/link'
import { VscTriangleRight } from 'react-icons/vsc'

import { PropsWithTitle } from '@/types/props.types'

const TrailerButton = ({ title }: PropsWithTitle) => {
	const link =
		'https://drive.google.com/file/d/1pUEbvbMEpGeAJQWOjRXgUU541_8ukryN/view?usp=sharing'
	return (
		<>
			<Link
				href={link}
				target={'_blank'}
			>
				<Button
					variant='none'
					minW='217px'
					bg='#BD1A1A'
					h='47.5px'
					color='#FFFFFF'
					fontSize='18px'
					fontWeight='500'
					px='40px'
					lineHeight='25.2px'
					gap='9px'
					alignItems='center'
				>
					{title}
					<VscTriangleRight color='#FFFFFF' />
				</Button>
			</Link>
		</>
	)
}

export default TrailerButton
