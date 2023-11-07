import '@/styles/globals.css'

import { RootContainer } from '@/components/layouts/Container/RootContainer'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
	return (
		<RootContainer>
			<Component {...pageProps} />
		</RootContainer>
	)
}
