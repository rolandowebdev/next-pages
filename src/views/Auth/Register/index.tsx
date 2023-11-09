import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'

export const RegisterView = () => {
    const { push } = useRouter()

    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState('')

    const handleSubmit = async (event: any) => {
        event.preventDefault()
        setIsLoading(true)

        try {
            const formData = {
                email: event.target.email.value,
                fullname: event.target.fullname.value,
                password: event.target.password.value,
            }

            const response = await fetch('/api/register', {
                method: 'POST',
                headers: { 'Content-type': 'application/json' },
                body: JSON.stringify(formData),
            })

            if (!response.ok) throw new Error('Email already exist')

            event.target.reset()
            push('/auth/login')
        } catch (error: any) {
            setError(error.message)
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
                        <label htmlFor="fullname">Full Name</label>
                        <input
                            className="rounded-sm bg-slate-950 p-2"
                            type="text"
                            id="fullname"
                            name="fullname"
                            placeholder="fullname"
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
                        value={`${isLoading ? 'Loading...' : 'Submit'} `}
                        className="w-full cursor-pointer rounded-sm bg-slate-950 py-2 hover:bg-black"
                    />
                </form>
            </div>
            <p className="text-center">
                Already have an account? <Link href="/auth/login">Login</Link>
            </p>
        </div>
    )
}
