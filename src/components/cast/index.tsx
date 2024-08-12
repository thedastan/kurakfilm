'use client'

import { Box } from '@chakra-ui/react'
import 'swiper/css'
import 'swiper/css/effect-fade'
import { Autoplay, EffectFade, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/scss/navigation'
import 'swiper/scss/pagination'

import { HEADER_HEIGHT, MINI_HEADER_HEIGHT } from '@/config/_variables.config'

import { useCast } from '@/hooks/data-hooks'

import Spinner from '../loader/spinner'

import CastCard from './CastCard'
import CastResponsiveCard from './CastResponsiveCard'

const Cast = () => {
	const { data, isLoading } = useCast()

	const pagination = {
		clickable: true,
		renderBullet: function (index: number, className: string) {
			return `<span class="` + className + `"></span>`
		}
	}
	return (
		<Box pt={{ md: HEADER_HEIGHT, base: MINI_HEADER_HEIGHT }}>
			{isLoading && <Spinner />}
			<Box display={{ md: 'block', base: 'none' }}>
				{data?.map((el, index) => (
					<CastCard
						el={el}
						withBg={index % 2 !== 0}
						key={el.id}
					/>
				))}
			</Box>

			<Box
				display={{ md: 'none', base: 'block' }}
				position='relative'
			>
				<Swiper
					spaceBetween={50}
					slidesPerView={1}
					autoplay={{
						delay: 3000,
						disableOnInteraction: false
					}}
					modules={[Pagination, Autoplay]}
					pagination={pagination}
					loop={true}
					className='mySwiper'
				>
					{data?.map(el => (
						<SwiperSlide key={el.id}>
							<CastResponsiveCard el={el} />
						</SwiperSlide>
					))}
				</Swiper>
			</Box>
		</Box>
	)
}

export default Cast
