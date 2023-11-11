import Link from 'next/link'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/router'
import { useState } from 'react'

export const LoginView = () => {
    const { push, query } = useRouter()
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState('')

    const callbackUrl: any = query.callbackUrl || '/'

    const handleSubmit = async (event: any) => {
        event.preventDefault()
        setIsLoading(true)

        try {
            const res = await signIn('credentials', {
                redirect: false,
                email: event.target.email.value,
                password: event.target.password.value,
                callbackUrl,
            })

            if (!res?.error) {
                push(callbackUrl)
            } else {
                setError("Email or Password doesn't match")
            }
        } catch (error: any) {
            setError(error)
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <div className="mx-auto mt-8 w-96 rounded-md bg-slate-900 p-4">
            {error && <p className="mb-4 text-center text-red-500">{error}</p>}
            <div className="mb-4">
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <div className="flex flex-col gap-1">
                        <label htmlFor="email">Email</label>
                        <input
                            className="rounded-sm bg-slate-950 p-2"
                            type="email"
                            id="email"
                            name="email"
                            placeholder="email"
                        />
                    </div>
                    <div className="flex flex-col gap-1">
                        <label htmlFor="password">Password</label>
                        <input
                            className="rounded-sm bg-slate-950 p-2"
                            type="password"
                            id="password"
                            name="password"
                            placeholder="password"
                        />
                    </div>
                    <input
                        type="submit"
                        disabled={isLoading}
                        value={`${isLoading ? 'Loading...' : 'Login'} `}
                        className="w-full cursor-pointer rounded-sm bg-slate-950 py-2 hover:bg-black"
                    />
                </form>
                <button
                    className="mt-4 w-full cursor-pointer rounded-sm bg-slate-950 py-2 hover:bg-black"
                    onClick={() =>
                        signIn('google', { callbackUrl, redirect: false })
                    }
                >
                    Sign in with Google
                </button>
            </div>
            <p className="text-center">
                Don&apos;t have an account?{' '}
                <Link href="/auth/register">Create an account</Link>
            </p>
        </div>
    )
}
