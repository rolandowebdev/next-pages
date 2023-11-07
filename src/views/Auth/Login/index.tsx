import Link from 'next/link'
import { useRouter } from 'next/router'

export const LoginView = () => {
	const { push } = useRouter()
	const handleLogin = () => push('/product')

	return (
		<div>
			<h1>LoginPage</h1>
			<button onClick={handleLogin}>Login</button>
			<p>
				Don&apos;t have an account?{' '}
				<Link href='/auth/register'>Create an account</Link>
			</p>
		</div>
	)
}
