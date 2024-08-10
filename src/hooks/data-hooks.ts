import { useQuery } from '@tanstack/react-query'

import { clinicService } from '@/services/services'

export function useDoctors() {
	const { data, isLoading } = useQuery({
		queryKey: ['doctors'],
		queryFn: () => clinicService.getDoctors()
	})

	return { data, isLoading }
}
