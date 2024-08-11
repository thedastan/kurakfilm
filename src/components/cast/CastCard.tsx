import { Box, Container, Flex } from '@chakra-ui/react'
import Image from 'next/image'

import { ICast } from '@/types/cast.types'

import YellowEllipse from '@/assets/svg/YellowEllipse'

import { CONTAINER_WIDTH } from '@/config/_variables.config'

import useTypedLocale from '@/hooks/useLocale'

import Description from '../ui/texts/Description'
import TitleComponent from '../ui/texts/TitleComponent'

const CastCard = ({ el, withBg }: { el: ICast; withBg: boolean }) => {
	const locale = useTypedLocale()
	return (
		<Flex
			minH={withBg ? '555px' : '588px'}
			alignItems='center'
			background={
				withBg ? `url("${el.image}") no-repeat center/cover` : 'transparent'
			}
			position='relative'
			overflow='hidden'
		>
			{withBg && (
				<Box
					bg='#000000B2'
					position='absolute'
					left='0'
					top='0'
					w='100%'
					h='100%'
					zIndex='0'
				/>
			)}

			{!withBg && (
				<Box
					position='absolute'
					right='-10%'
					bottom='100%'
					zIndex='0'
					h='100%'
				>
					<YellowEllipse />
				</Box>
			)}

			<Container maxW={CONTAINER_WIDTH}>
				<Flex
					justifyContent='space-between'
					flexDirection={withBg ? 'row-reverse' : 'row'}
					alignItems='center'
					gap='74px'
					position='relative'
					zIndex='1'
				>
					<Box
						minW='347px'
						h='347px'
						rounded='50%'
						overflow='hidden'
					>
						<Image
							src={el.image}
							alt='Image'
							width={347}
							height={347}
							className='full-image'
						/>
					</Box>

					<Box>
						<TitleComponent
							fontSize='34px'
							lineHeight='38.76px'
							color='#FFFFFF'
						>
							{el[`full_name_${locale}`]}
						</TitleComponent>
						<Description mt='10px'>{el[`info_${locale}`]}</Description>
						<Description mt='33px'>{el[`description_${locale}`]}</Description>
					</Box>
				</Flex>
			</Container>
		</Flex>
	)
}

export default CastCard
