import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { RegisterAuthDto } from './dto/register-auth.dto';
import { hash, compare } from 'bcrypt'
import { PrismaService } from 'src/prisma.service';
import { LoginAuthDto } from './dto/login-auth.dto';
import { JwtService } from '@nestjs/jwt';
import { randomBytes } from 'crypto';
import { MailService } from './mail.service';

@Injectable()
export class AuthService {

    constructor(
        private readonly prisma: PrismaService,
        private jwtService: JwtService,
        private mailservice: MailService
    ) { }

    async register(userObject: RegisterAuthDto) {
        const { password, email } = userObject;

        const findUserName = await this.prisma.user.findUnique({
            where: { userName: userObject.userName}
        })

        if (findUserName) throw new HttpException('Username already exists', 409)

        const findEmail = await this.prisma.user.findUnique({
            where: { email: userObject.email}
        })
    
        if (findEmail) throw new HttpException('Email already exists', 409)

        const plainToHash = await hash(password, 10);
        const confirmationToken = randomBytes(32).toString('hex')

        userObject = { ...userObject, password: plainToHash, confirmationToken }

        await this.prisma.user.create({
            data: userObject
        })

        const confirmLink = `http://localhost:3000/auth/confirm?token=${confirmationToken}`;
        await this.mailservice.sendMail(
            email,
            'Confirm your email',
            `Click here to confirm your email: ${confirmLink}`
        )

        return { message: 'Registration successful, please check your email for confirmation link.' }
    }

    async login(userObject: LoginAuthDto) {
        const { email, password, emailConfirmed } = userObject;

        const findEmail = await this.prisma.user.findUnique(
            { where: { email } }
        )

        if (!findEmail) throw new HttpException('Email not found', 404)

        const checkPassword = await compare(password, findEmail.password)

        if (!checkPassword) throw new HttpException('Wrong password', 403)

        const isEmailConfirmed = await this.prisma.user.findUnique({
            where: { email }
        })        

        if (!isEmailConfirmed.emailConfirmed) throw new HttpException('Please confirm your email', 403)        

        const payload = { id: findEmail.id, name: findEmail.name, username: findEmail.userName, email: findEmail.email, lastName: findEmail.lastName }
        const token = this.jwtService.sign(payload)

        const { password: _, ...userData } = findEmail

        return {
            user: userData,
            token
        }

    }

    async confirmEmail(token: string) {
        const user = await this.prisma.user.findFirst({
            where: {confirmationToken: token},
        });

        if (!user) {
            throw new HttpException('Invalid token', HttpStatus.BAD_REQUEST);
        }

        await this.prisma.user.update({
            where: { id: user.id },
            data: { confirmationToken: null, emailConfirmed: true },
        });

        return { message: 'Email confirmed successfully.' };
    }

}
