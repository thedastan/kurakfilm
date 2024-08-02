import { Box, Divider, Flex, Heading, Text } from '@chakra-ui/react'
import { PropsWithChildren } from 'react'
import { MdKeyboardArrowRight } from 'react-icons/md'

interface Props extends PropsWithChildren {
	viewMoreFn?: () => void
	color?: string
}
const TitleComponent = ({ children, color = '#000000', viewMoreFn }: Props) => {
	return (
		<Box mb={{ md: '6', base: '4' }}>
			<Flex
				justifyContent='space-between'
				alignItems='center'
			>
				<Heading
					as='h1'
					color={color}
					fontWeight={'700'}
					lineHeight={{ md: '32.63px', base: '27.61px' }}
					fontSize={{ md: '26px', base: '22px' }}
					textTransform={{ md: 'uppercase', base: 'none' }}
				>
					{children}
				</Heading>
				{!!viewMoreFn && (
					<Flex
						onClick={viewMoreFn}
						color='#141414'
						alignItems='center'
						cursor='pointer'
						_active={{ opacity: '.7' }}
					>
						<Text
							fontWeight='500'
							fontSize={{ md: '20px', base: '14px' }}
							lineHeight={{ md: '26px', base: '18.2px	' }}
						>
							ВСЕ
						</Text>
						<MdKeyboardArrowRight fontSize='20px' />
					</Flex>
				)}
			</Flex>
			<Divider
				display={{ md: 'block', base: 'none' }}
				mt='32px'
				bg='#0000001A'
				h='1.18px'
			/>
		</Box>
	)
}

export default TitleComponent
