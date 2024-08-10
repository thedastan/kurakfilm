import { useQuery } from '@tanstack/react-query'

import { filmService } from '@/services/services'

export function useCast() {
	const { data, isLoading } = useQuery({
		queryKey: ['cast'],
		queryFn: () => filmService.getCast()
	})

	return { data, isLoading }
}

export function useCrew() {
	const { data, isLoading } = useQuery({
		queryKey: ['crew'],
		queryFn: () => filmService.getCrew()
	})

	return { data, isLoading }
}

export function useProducer() {
	const { data, isLoading } = useQuery({
		queryKey: ['producer'],
		queryFn: () => filmService.getProducer()
	})

	return { data, isLoading }
}

export function useNews() {
	const { data, isLoading } = useQuery({
		queryKey: ['news'],
		queryFn: () => filmService.getNews()
	})

	return { data, isLoading }
}

export function useNewsDetail(id: number) {
	const { data, isLoading } = useQuery({
		queryKey: ['news', id],
		queryFn: () => filmService.getNewsDetail(id)
	})

	return { data, isLoading }
}
