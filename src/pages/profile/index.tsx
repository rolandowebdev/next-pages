import { PageContainer } from '@/components/layouts/Container/PageContainer'
import { useSession } from 'next-auth/react'

const ProfilePage = () => {
    const { data }: any = useSession()

    return (
        <PageContainer title="Profile Page">
            {data && data.user?.fullname}
        </PageContainer>
    )
}

export default ProfilePage
