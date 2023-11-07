import { PropsWithChildren } from 'react'
import { useRouter } from 'next/router'
import { Navbar } from '../Navbar/Navbar'

const disableNavbar = ['/auth/login', '/auth/register', '/404']

export const RootContainer = ({ children }: PropsWithChildren) => {
	const { pathname } = useRouter()

	return (
		<>
			{!disableNavbar.includes(pathname) && <Navbar />}
			<main className='px-8'>{children}</main>
		</>
	)
}
