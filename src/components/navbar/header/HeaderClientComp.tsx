'use client'

import { Container, Flex, Text } from '@chakra-ui/react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

import { poppins } from '@/constants/fonts'

import {
	CONTAINER_WIDTH,
	HEADER_HEIGHT,
	MINI_HEADER_HEIGHT
} from '@/config/_variables.config'

import useTypedLocale from '@/hooks/useLocale'

import { IHeaderNav } from '../data'

import LanguageSelect from './LanguageSelect'

interface HeaderClientCompProps {
	header_nav: IHeaderNav[]
	contact_btn: string
}

const HeaderClientComp = ({
	header_nav,
	contact_btn
}: HeaderClientCompProps) => {
	const [isActive, setActive] = useState<boolean>(false)
	const localActive = useTypedLocale()

	const pathname = usePathname()
	if (typeof window !== 'undefined') {
		window.addEventListener('scroll', () => {
			setActive(window.scrollY > 36)
		})
	}
	return (
		<Flex
			alignItems='center'
			position='fixed'
			left='0'
			zIndex='30'
			top='0'
			right='0'
			maxH={{ md: HEADER_HEIGHT, base: MINI_HEADER_HEIGHT }}
			boxShadow={isActive ? '0px 19px 20px 0px #40404014' : 'none'}
			py={{ md: isActive ? '4' : '7', base: isActive ? '16px' : '10px' }}
			transition='.3s ease'
			bg='#FFFFFF1A'
			borderBottom='1.12px solid #000000'
		>
			<Container maxW={CONTAINER_WIDTH}>
				<Flex
					h='24px'
					justifyContent='space-between'
					alignItems='center'
				>
					<Flex
						display={{ md: 'flex', base: 'none' }}
						gap='27px'
						className={poppins.className}
					>
						{header_nav.map((el, idx) => (
							<Link
								href={el.path}
								key={idx}
							>
								<Text
									fontWeight='400'
									fontSize='14px'
									color='#FFFFFF'
									lineHeight='19.6px'
									textDecoration={pathname === el.path ? 'underline' : 'none'}
								>
									{el.name}
								</Text>
							</Link>
						))}
					</Flex>
					<Flex
						gap='30px'
						alignItems='center'
					>
						<Text
							fontWeight='400'
							fontSize='14px'
							color='#FFFFFF'
							lineHeight='19.6px'
						>
							{contact_btn}
						</Text>
						<LanguageSelect />
					</Flex>
				</Flex>
			</Container>
		</Flex>
	)
}

export default HeaderClientComp