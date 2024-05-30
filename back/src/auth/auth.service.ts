import { HttpException, Injectable } from '@nestjs/common';
import { RegisterAuthDto } from './dto/register-auth.dto';
import { hash, compare } from 'bcrypt'
import { PrismaService } from 'src/prisma.service';
import { LoginAuthDto } from './dto/login-auth.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {

    constructor(
        private readonly prisma: PrismaService,
        private jwtService: JwtService
    ) {}

    async register(userObject: RegisterAuthDto) {
        const { password } = userObject;
        const plainToHash = await hash(password, 10);

        userObject = {...userObject, password: plainToHash}

        return this.prisma.user.create({
            data: userObject
        })
    }

    async login(userObject: LoginAuthDto) {
        const { email, password } = userObject;
        
        const findUser = await this.prisma.user.findUnique(
            {where: { email }}
        )

        if (!findUser) throw new HttpException('USER_NOT_FOUND', 404)

        const checkPassword = await compare(password, findUser.password)

        if (!checkPassword) throw new HttpException('WRONG_PASSWORD', 403)

        const payload = {id: findUser.id, name: findUser.name}
        const token = this.jwtService.sign(payload)
       
        const {password: _, ...userData} = findUser

        return {
            user: userData,
            token
        }
        
    }

}
