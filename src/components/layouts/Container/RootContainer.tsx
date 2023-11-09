import { PropsWithChildren } from 'react'
import { useRouter } from 'next/router'
import { Navbar } from '../Navbar/Navbar'
import { PlusJakartaSans } from '@/lib/fonts/fonts'

const disableNavbar = ['/auth/login', '/auth/register', '/404']

export const RootContainer = ({ children }: PropsWithChildren) => {
    const { pathname } = useRouter()

    return (
        <>
            {!disableNavbar.includes(pathname) && <Navbar />}
            <div className={`${PlusJakartaSans.className} px-8`}>
                {children}
            </div>
        </>
    )
}
