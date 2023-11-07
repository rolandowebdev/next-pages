import { getListProduct } from '@/lib/firebase/service'
import type { NextApiRequest, NextApiResponse } from 'next'

const getProducts = async (req: NextApiRequest, res: NextApiResponse) => {
	try {
		const data = await getListProduct()
		res.status(200).json({ status: true, statusCode: 200, data })
	} catch (error) {
		res
			.status(400)
			.json({ status: false, statusCode: 400, message: 'Product not found' })
	}
}

export default getProducts
