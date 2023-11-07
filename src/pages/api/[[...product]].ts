import { getProductById } from '@/lib/firebase/service'
import type { NextApiRequest, NextApiResponse } from 'next'

const getDetailProduct = async (req: NextApiRequest, res: NextApiResponse) => {
	const productQueryParam = req.query.product![1]

	if (!productQueryParam) {
		res.status(400).json({
			status: false,
			statusCode: 400,
			message: 'Invalid product query parameters'
		})
	}

	try {
		const data = await getProductById(productQueryParam)
		res.status(200).json({ status: true, statusCode: 200, data })
	} catch (error) {
		res
			.status(400)
			.json({ status: false, statusCode: 400, message: 'Product not found' })
	}
}

export default getDetailProduct
