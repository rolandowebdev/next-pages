import { PropsWithChildren } from 'react'
import { useRouter } from 'next/router'
import { PlusJakartaSans } from '@/lib/fonts/fonts'
import dynamic from 'next/dynamic'

const Navbar = dynamic(() => import('../Navbar/Navbar'))

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
