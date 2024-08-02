import { redirect } from 'next/navigation'
import { toast } from 'sonner'

import { PUBLIC_PAGES } from '@/config/pages-url.config'

export const errorCatch = (error: any): string => {
	const message = error?.response?.data?.message

	return message
		? typeof error.response.data.message === 'object'
			? message[0]
			: message
		: error.message
}
