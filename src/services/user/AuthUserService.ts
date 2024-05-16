import prismaClient from "../../prisma"
import { compare } from 'bcryptjs'

interface AuthRequest {
    email: string,
    password: string
}

class AuthUserService {
    async execute({ email, password }: AuthRequest) {
        if (!email) {
            throw new Error("Invalid Email!")
        }

        if (!password) {
            throw new Error("Invalid Password!")
        }

        const user = await prismaClient.user.findFirst({
            where: {
                email: email
            }
        })

        if (!user) {
            throw new Error("Invalid Credentials!")
        }


    }
}

export { AuthUserService }