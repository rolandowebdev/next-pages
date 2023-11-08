import { signIn, signOut, useSession } from 'next-auth/react'
import Link from 'next/link'

export const Navbar = () => {
    const { data }: any = useSession()

    return (
        <header className="flex h-16 w-full items-center justify-between bg-slate-900 px-8">
            <Link href="/" className="text-slate-xl text-2xl font-bold">
                Navbar
            </Link>
            <nav className="flex items-center gap-8">
                {/* <ul className="flex items-center gap-4">
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <Link href="/setting">Setting</Link>
                    </li>
                    <li>
                        <Link href="/about">About</Link>
                    </li>
                    <li>
                        <Link href="/product">Product</Link>
                    </li>
                    <li>
                        <Link href="/shop">Shop</Link>
                    </li>
                    <li>
                        <Link href="/profile">Profile</Link>
                    </li>
                </ul> */}
                {!data?.user ? (
                    <button
                        className="rounded-md bg-violet-600 px-4 py-2 text-white"
                        onClick={() => signIn()}
                    >
                        Sign in
                    </button>
                ) : (
                    <button
                        className="rounded-md bg-violet-600 px-4 py-2 text-white"
                        onClick={() => signOut()}
                    >
                        Sign out
                    </button>
                )}
                <p>{data?.user?.fullname}</p>
            </nav>
        </header>
    )
}
