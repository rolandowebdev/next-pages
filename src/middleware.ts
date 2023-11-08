import withAuth from '@/middlewares/withAuth'

import { NextResponse } from 'next/server'

export function mainMiddleware() {
    const res = NextResponse.next()
    return res
}

// add page route you want to redirect and run middleware
export default withAuth(mainMiddleware, ['/profile', '/product'])
