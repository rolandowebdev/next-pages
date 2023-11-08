import { useSession } from 'next-auth/react'

const ProfilePage = () => {
    const { data }: any = useSession()

    return (
        <div>
            <h1>ProfilePage</h1>
            {data && data.user?.fullname}
        </div>
    )
}

export default ProfilePage
