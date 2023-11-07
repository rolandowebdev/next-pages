import Link from 'next/link'

export const Navbar = () => {
	return (
		<header className='w-full flex items-center justify-between px-8 bg-slate-900 h-16'>
			<Link href='/' className='text-2xl font-bold text-slate-xl'>
				Navbar
			</Link>
			<nav>
				<ul className='flex gap-4 items-center'>
					<li>
						<Link href='/'>Home</Link>
					</li>
					<li>
						<Link href='/setting'>Setting</Link>
					</li>
					<li>
						<Link href='/about'>About</Link>
					</li>
					<li>
						<Link href='/product'>Product</Link>
					</li>
					<li>
						<Link href='/shop'>Shop</Link>
					</li>
				</ul>
			</nav>
		</header>
	)
}
