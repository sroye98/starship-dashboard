'use client'

import { Providers } from './providers'
import { Provider } from 'react-redux'
import { store } from '@/stores/store'

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			<body>
				<Provider store={store}>
					<Providers>
						{children}
					</Providers>
				</Provider>
			</body>
		</html>
	)
}
