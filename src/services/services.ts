import { PUBLIC_API } from '@/api/interceptors'

import { IDoctor, IFeedbackValue, IProcedure, IRehab, IReview } from './types'

class ClinicServices {
	private BASE_URL = 'clinic/'

	async getDoctors() {
		const response = await PUBLIC_API.get<IDoctor[]>(this.BASE_URL + 'doctor/')

		return response.data
	}

	
}

export const clinicService = new ClinicServices()
