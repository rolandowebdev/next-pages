import Image from 'next/image'
import { Products } from '@/types/product'
import Link from 'next/link'

export const ProductView = ({ products, isLoading }: Products) => {
	return (
		<div className='grid grid-cols-4 gap-3'>
			{!isLoading ? (
				<>
					{products?.data?.map((product) => (
						<Link
							href={`/product/${product.id}`}
							key={product.id}
							className='bg-slate-900 p-3 rounded-md'>
							<div className='w-full h-64 rounded-md overflow-hidden mb-4'>
								<Image
									className='w-full h-full object-cover'
									src={product.image}
									alt={product.name}
									height={1000}
									width={1000}
									quality={100}
								/>
							</div>
							<h2 className='text-xl font-bold'>{product.name}</h2>
							<div className='mt-2 flex flex-col gap-2'>
								<p className='text-slate-400'>{product.category}</p>
								<p>
									{product.price.toLocaleString('id-ID', {
										style: 'currency',
										currency: 'IDR'
									})}
								</p>
							</div>
						</Link>
					))}
				</>
			) : (
				<>
					{Array.from({
						length: products?.data ? products?.data.length : 4
					}).map((_, index) => (
						<div key={index} className='rounded-md bg-slate-800 p-3'>
							<div className='animate-pulse flex flex-col'>
								<div className='rounded-md bg-slate-700 h-64 w-full' />
								<div className='mt-6'>
									<div className='flex flex-col gap-4'>
										<div className='h-5 bg-slate-700 rounded-full w-4/5' />
										<div className='flex flex-col gap-3'>
											<div className='h-3 bg-slate-700 rounded-full w-1/3' />
											<div className='h-3 bg-slate-700 rounded-full w-1/2' />
										</div>
									</div>
								</div>
							</div>
						</div>
					))}
				</>
			)}
		</div>
	)
}
