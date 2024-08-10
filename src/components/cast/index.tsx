'use client'

import { Box } from '@chakra-ui/react'

import { HEADER_HEIGHT, MINI_HEADER_HEIGHT } from '@/config/_variables.config'

import { useCast } from '@/hooks/data-hooks'

import CastCard from './CastCard'

const Cast = () => {
	const { data, isLoading } = useCast()
	return (
		<Box pt={{ md: HEADER_HEIGHT, base: MINI_HEADER_HEIGHT }}>
			{data?.map((el, index) => (
				<CastCard
					el={el}
					withBg={index % 2 !== 0}
					key={el.id}
				/>
			))}
		</Box>
	)
}

export default Cast
