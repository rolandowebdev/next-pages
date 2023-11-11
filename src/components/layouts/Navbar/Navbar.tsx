import { signIn, signOut, useSession } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'

export const Navbar = () => {
    const { data }: any = useSession()

    return (
        <header className="flex h-16 w-full items-center justify-between bg-slate-900 px-8">
            <Link href="/" className="text-slate-xl text-2xl font-bold">
                Navbar
            </Link>
            <nav className="flex items-center gap-8">
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
                <div className="flex items-center gap-2">
                    {data?.user?.image ? (
                        <div className="h-8 w-8 overflow-hidden rounded-full">
                            <Image
                                className="h-full w-full object-cover object-center"
                                src={data?.user?.image}
                                alt={data?.user?.fullname}
                                width={40}
                                height={40}
                            />
                        </div>
                    ) : null}
                    <p>{data?.user?.fullname}</p>
                </div>
            </nav>
        </header>
    )
}
