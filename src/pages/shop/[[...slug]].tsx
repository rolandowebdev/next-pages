import { PageContainer } from '@/components/layouts/Container/PageContainer'
import { useRouter } from 'next/router'

const ShopPage = () => {
    const { query } = useRouter()

    return (
        <PageContainer title="Shop Page">
            <p>
                Shop :{' '}
                {`${query.slug ? query.slug[0] + '-' + query.slug[1] : ''}`}
            </p>
        </PageContainer>
    )
}

export default ShopPage
