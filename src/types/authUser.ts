export enum Role {
    ADMIN = 'ADMIN',
    MEMBER = 'MEMBER',
}

export type SignUp = {
    email: string
    fullname: string
    password: string
    role?: Role
}
