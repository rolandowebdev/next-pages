import { Role } from '@/types/authUser'
import { getToken } from 'next-auth/jwt'
import {
    NextFetchEvent,
    NextMiddleware,
    NextRequest,
    NextResponse,
} from 'next/server'

const secret = process.env.NEXTAUTH_SECRET
const onlyAdmin = ['/admin']

export default function withAuth(
    middleware: NextMiddleware,
    requireAuth: string[] = []
) {
    return async (req: NextRequest, next: NextFetchEvent) => {
        const pathname = req.nextUrl.pathname
        if (requireAuth.includes(pathname)) {
            const token = await getToken({
                req,
                secret,
            })

            if (!token) {
                const url = new URL('/auth/login', req.url)
                // Set the callback URL to automatically redirect to the previous page after signing out and set callback from next auth.
                url.searchParams.set('callbackUrl', encodeURI(req.url))
                return NextResponse.redirect(url)
            }

            if (token.role !== Role.ADMIN && onlyAdmin.includes(pathname)) {
                return NextResponse.redirect(new URL('/', req.url))
            }
        }
        return middleware(req, next)
    }
}
