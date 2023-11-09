import { app } from './init'
import {
    addDoc,
    collection,
    doc,
    getDoc,
    getDocs,
    getFirestore,
    query,
    where,
} from 'firebase/firestore'
import { Product } from '@/types/product'
import { Role, SignUp } from '@/types/authUser'
import bcrypt from 'bcrypt'

const firestore = getFirestore(app)

export const getListProduct = async (): Promise<Array<Product>> => {
    const snapshot = await getDocs(collection(firestore, 'products'))
    const data: Array<any> = []

    snapshot.docs.map((doc) => {
        data.push({
            id: doc.id,
            ...doc.data(),
        })
    })

    return data as Array<Product>
}

export const getProductById = async (id: string): Promise<Product> => {
    const snapshot = await getDoc(doc(firestore, 'products', id))
    const data = snapshot.data()

    return data as Product
}

export const signUp = async (
    userData: SignUp,
    callback: Function
): Promise<void> => {
    const q = query(
        collection(firestore, 'users'),
        where('email', '==', userData.email)
    )

    const snapshot = await getDocs(q)

    const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data,
    }))

    if (data.length > 0) {
        callback({ status: false, message: 'Email already exist' })
    } else {
        userData.password = await bcrypt.hash(userData.password, 10)
        userData.role = Role.MEMBER

        await addDoc(collection(firestore, 'users'), userData)
            .then(() => {
                callback({ status: true, message: 'Register success' })
            })
            .catch((error: any) => {
                callback({ status: false, message: error.message })
            })
    }
}
