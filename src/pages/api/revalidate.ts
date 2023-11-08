import { getListProduct } from '@/lib/firebase/service'
import type { NextApiRequest, NextApiResponse } from 'next'

type Revalidate = {
	revalidated: boolean
	message?: string
}

// revalidated static site generation for product/static
const revalidate = async (
	req: NextApiRequest,
	res: NextApiResponse<Revalidate>
) => {
	// check token before revalidate
	if (req.query.token !== process.env.REVALIDATE_TOKEN) {
		return res
			.status(401)
			.json({ revalidated: false, message: 'Invalid token' })
	}

	if (req.query.data === 'product') {
		try {
			await res.revalidate('/product/static')
			return res.json({ revalidated: true })
		} catch (error) {
			return res.status(500).send({ revalidated: false })
		}
	}

	return res.json({
		revalidated: false,
		message: 'Choose the data to revalidate'
	})
}

export default revalidate
