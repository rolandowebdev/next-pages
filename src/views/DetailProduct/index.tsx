import { ProductItem } from '@/types/product'
import Image from 'next/image'

export const DetailProduct = ({ product }: { product: ProductItem }) => {
	return (
		<div className='bg-slate-900 p-3 rounded-md mx-auto max-w-lg'>
			<div className='w-full h-64 rounded-md overflow-hidden mb-4'>
				<Image
					className='w-full h-full object-cover'
					src={product?.image}
					alt={product?.name}
					height={1000}
					width={1000}
					quality={100}
				/>
			</div>
			<h2 className='text-xl font-bold'>{product?.name}</h2>
			<div className='mt-2 flex flex-col gap-2'>
				<p className='text-slate-400'>{product?.category}</p>
				<p>
					{product?.price?.toLocaleString('id-ID', {
						style: 'currency',
						currency: 'IDR'
					})}
				</p>
			</div>
		</div>
	)
}
