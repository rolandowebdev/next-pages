export enum Role {
    ADMIN = 'ADMIN',
    MEMBER = 'MEMBER',
}

export enum LoginType {
    GOOGLE = 'GOOGLE',
}

export type User = {
    email: string
    fullname: string
    image: string
    role?: Role
    type?: LoginType.GOOGLE
}

export type ResultUser = {
    status: boolean
    message: string
    data: User
}

export type SignUp = User & {
    password: string
}

export type SignIn = User & {
    password: string
}
