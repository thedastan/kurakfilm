import { ICast } from '@/types/cast.types'
import { ICrew } from '@/types/crew.types'
import { INews } from '@/types/news.types'
import { IGalley } from '@/types/other.types'
import { IProducer } from '@/types/producer.types'

import { PUBLIC_API } from '@/api/interceptors'
import { IBacks } from '@/types/backs'

class FilmServices {
	private BASE_URL = 'film/'

	async getProducer() {
		const response = await PUBLIC_API.get<IProducer[]>(
			this.BASE_URL + 'producer/'
		)

		return response.data
	}

	async getCast() {
		const response = await PUBLIC_API.get<ICast[]>(this.BASE_URL + 'cast/')

		return response.data
	}

	async getCrew() {
		const response = await PUBLIC_API.get<ICrew[]>(this.BASE_URL + 'crew/')

		return response.data
	}

	async getNews() {
		const response = await PUBLIC_API.get<INews[]>(this.BASE_URL + 'news/')

		return response.data
	}

	async getNewsDetail(id: number) {
		const response = await PUBLIC_API.get<INews[]>(
			this.BASE_URL + `news/view/${id}/`
		)

		return response.data
	}

	async getGalley() {
		const response = await PUBLIC_API.get<IGalley[]>(this.BASE_URL + `gallery/`)

		return response.data
	}

	async getBackstage() {
		const response = await PUBLIC_API.get<IBacks[]>(this.BASE_URL + `backstage/`)

		return response.data
	}
}

export const filmService = new FilmServices()
