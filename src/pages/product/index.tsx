import { PageContainer } from '@/components/layouts/Container/PageContainer'
import { fetcher } from '@/lib/swr/fetcher'
import { ProductView } from '@/views/Product'
import useSWR from 'swr'

const ProductPage = () => {
    const { data: products, isLoading } = useSWR('/api/product', fetcher)
    return (
        <PageContainer title="Product Page">
            <ProductView
                products={!isLoading ? products : []}
                isLoading={isLoading}
            />
        </PageContainer>
    )
}

export default ProductPage
