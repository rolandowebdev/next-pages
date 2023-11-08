import { NextAuthOptions } from 'next-auth'
import NextAuth from 'next-auth/next'
import CredentialsProvider from 'next-auth/providers/credentials'

const authOptions: NextAuthOptions = {
    session: { strategy: 'jwt' },
    secret: process.env.NEXTAUTH_SECRET,
    providers: [
        CredentialsProvider({
            type: 'credentials',
            name: 'Credentials',
            credentials: {
                email: { label: 'Email', type: 'text' },
                fullname: { label: 'Fullname', type: 'text' },
                password: { label: 'Password', type: 'password' },
            },
            async authorize(credentials) {
                const { email, fullname, password } = credentials as {
                    email: string
                    fullname: string
                    password: string
                }

                const user: any = {
                    id: 1,
                    email,
                    fullname,
                    password,
                }

                if (!user) return

                return user
            },
        }),
    ],
    callbacks: {
        jwt({ token, account, profile, user }: any) {
            if (account?.provider === 'credentials') {
                token.email = user.email
                token.fullname = user.fullname
            }

            return token
        },

        async session({ session, token }: any) {
            if ('email' in token) {
                session.user.email = token.email
            }

            if ('fullname' in token) {
                session.user.fullname = token.fullname
            }

            return session
        },
    },
}

export default NextAuth(authOptions)