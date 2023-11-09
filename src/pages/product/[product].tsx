import { DetailProduct } from '@/views/DetailProduct'
import { Product, ProductItem } from '@/types/product'
import { PageContainer } from '@/components/layouts/Container/PageContainer'

const DetailProductPage = ({ product }: { product: ProductItem }) => {
    return (
        <PageContainer title={product.name}>
            <DetailProduct product={product} />
        </PageContainer>
    )
}

export default DetailProductPage

// export const getServerSideProps = async ({
// 	params
// }: {
// 	params: { product: string }
// }) => {
// 	try {
// 		const response = await fetch(
// 			`http://localhost:3000/api/product/${params.product}`
// 		)
// 		const product = await response.json()

// 		return { props: { product: product.data } }
// 	} catch (error) {
// 		console.log(error)
// 	}
// }

export const getStaticPaths = async () => {
    const response = await fetch('http://localhost:3000/api/product')
    const products = (await response.json()) as Product

    const paths = products.data.map((product) => ({
        params: { product: product.id },
    }))

    return { paths, fallback: false }
}

export const getStaticProps = async ({
    params,
}: {
    params: { product: string }
}) => {
    try {
        const response = await fetch(
            `http://localhost:3000/api/product/${params.product}`
        )
        const product = await response.json()

        return { props: { product: product.data } }
    } catch (error) {
        console.log(error)
    }
}
