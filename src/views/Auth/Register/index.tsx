import Link from 'next/link'

export const RegisterView = () => {
	return (
		<div>
			<h1>RegisterPage</h1>
			<button>Register</button>
			<p>
				Already have an account? <Link href='/auth/login'>Login</Link>
			</p>
		</div>
	)
}
