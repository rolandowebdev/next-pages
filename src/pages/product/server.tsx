import { PageContainer } from '@/components/layouts/Container/PageContainer'
import { Products } from '@/types/product'
import { ProductView } from '@/views/Product'

const ProductPage = ({ products }: Products) => {
    return (
        <PageContainer title="Product Page Server">
            <ProductView products={products} />
        </PageContainer>
    )
}

export default ProductPage

export const getServerSideProps = async () => {
    try {
        const res = await fetch('http://localhost:3000/api/product')
        const data = await res.json()

        return { props: { products: data } }
    } catch (error) {
        console.log(error)
    }
}
