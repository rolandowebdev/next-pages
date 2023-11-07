export type ProductItem = {
	id: string
	name: string
	price: number
	category: string
	image: string
}

export type Product = {
	status: boolean
	statusCode: number
	data: ProductItem[]
}

export type Products = {
	products: Product | null
	isLoading?: boolean
}
