import { fetcher } from '@/lib/swr/fetcher'
import { ProductView } from '@/views/Product'
import useSWR from 'swr'

const ProductPage = () => {
	const { data: products, isLoading } = useSWR('/api/product', fetcher)
	return (
		<main className=' my-8'>
			<h1 className='text-4xl font-bold mb-8'>Product Page</h1>
			<ProductView
				products={!isLoading ? products : []}
				isLoading={isLoading}
			/>
		</main>
	)
}

export default ProductPage
