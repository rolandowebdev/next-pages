import { app } from './init'
import {
	collection,
	doc,
	getDoc,
	getDocs,
	getFirestore
} from 'firebase/firestore'
import { Product } from '@/types/product'

const firestore = getFirestore(app)

export const getListProduct = async (): Promise<Array<Product>> => {
	const snapshot = await getDocs(collection(firestore, 'products'))
	const data: Array<any> = []

	snapshot.docs.map((doc) => {
		data.push({
			id: doc.id,
			...doc.data()
		})
	})

	return data as Array<Product>
}

export const getProductById = async (id: string): Promise<Product> => {
	const snapshot = await getDoc(doc(firestore, 'products', id))
	const data = snapshot.data()

	return data as Product
}
