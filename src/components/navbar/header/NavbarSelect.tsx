import {
	Box,
	Flex,
	Menu,
	MenuButton,
	MenuItem,
	MenuList,
	Text
} from '@chakra-ui/react'
import { usePathname, useRouter } from 'next/navigation'
import { AiOutlineCheck } from 'react-icons/ai'
import { IoChevronDown } from 'react-icons/io5'

import { poppins } from '@/constants/fonts'

import { IHeaderNav } from '../data'

const NavbarSelect = ({ header_nav }: { header_nav: IHeaderNav[] }) => {
	const pathname = usePathname()
	const { push } = useRouter()
	const current_name = header_nav.find(el => el.path === pathname)?.name
	return (
		<Menu>
			<MenuButton as={Box}>
				<Flex
					alignItems='center'
					cursor='pointer'
					className={poppins.className}
					gap='7px'
					h='24px'
					color='#FFFFFF'
					fontWeight='500'
					fontSize='15.75px'
					lineHeight='22.05px'
				>
					<Text noOfLines={1}>{current_name}</Text>
					<IoChevronDown fontSize='20px' />
				</Flex>
			</MenuButton>
			<MenuList
				w='204px'
				rounded='12px'
				bg='#FFFFFF'
				boxShadow='0px 8px 24px -6px #00000029'
				padding='4px 4px 4px 9px'
			>
				{header_nav.map((el, idx) => (
					<MenuItem
						key={idx}
						onClick={() => push(el.path)}
						justifyContent='space-between'
						rounded='6px'
						alignItems='center'
						bg={el.path === pathname ? '#F5F5F5' : 'transparent'}
						p='2'
						_hover={{ bg: '#F5F5F5' }}
					>
						{el.name}
						{el.path === pathname && <AiOutlineCheck color='#5846FB' />}
					</MenuItem>
				))}
			</MenuList>
		</Menu>
	)
}

export default NavbarSelect
