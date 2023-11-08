import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export const middleware = (req: NextRequest) => {
	const isLogin = false

	if (!isLogin) {
		return NextResponse.redirect(new URL('/', req.url))
	}

	return NextResponse.next()
}

// add page route you want to redirect and run middleware
export const config = {
	matcher: ['/product', '/about'] // you can't access the matcher page directly
}
