import Link from 'next/link'

export const LoginView = () => {
    return (
        <div className="mx-auto mt-8 w-96 rounded-md bg-slate-900 p-4">
            <div className="mb-4">
                <form className="flex flex-col gap-4">
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
                        value="Submit"
                        className="w-full cursor-pointer rounded-sm bg-slate-950 py-2 hover:bg-black"
                    />
                </form>
            </div>
            <p className="text-center">
                Don&apos;t have an account?{' '}
                <Link href="/auth/register">Create an account</Link>
            </p>
        </div>
    )
}
