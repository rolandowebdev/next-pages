import { Plus_Jakarta_Sans } from 'next/font/google'

const PlusJakartaSans = Plus_Jakarta_Sans({ subsets: ['latin'] })

const Home = () => {
	return <main className={PlusJakartaSans.className}>Hello Bro</main>
}

export default Home
