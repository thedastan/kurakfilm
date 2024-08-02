'use client'

import {
	QueryClient,
	QueryClientProvider,
	dehydrate
} from '@tanstack/react-query'
import { PropsWithChildren, useState } from 'react'

export function Providers({ children }: PropsWithChildren) {
	const [client] = useState(
		new QueryClient({
			defaultOptions: {
				queries: {
					refetchOnWindowFocus: false
				}
			}
		})
	)
	const dehydratedState = dehydrate(client)
	return (
		<QueryClientProvider client={client}>
			{children}

			{/* <ReactQueryDevtools initialIsOpen={false} /> */}
		</QueryClientProvider>
	)
}
