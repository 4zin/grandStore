import { Body, Controller, Get, HttpException, HttpStatus, Post, Query } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterAuthDto } from './dto/register-auth.dto';
import { LoginAuthDto } from './dto/login-auth.dto';

@Controller('auth')
export class AuthController {

    constructor(private readonly authService: AuthService) {}

    @Get('confirm')
    async confirm(@Query('token') token: string) {
        try {
            return await this.authService.confirmEmail(token);
        } catch (error) {
            throw new HttpException(error.message, HttpStatus.BAD_REQUEST)
        }
    }

    @Post('register')
    async register(@Body() userObject: RegisterAuthDto) {
        return await this.authService.register(userObject)
    }

    @Post('login')
    async login(@Body() userObjetLogin: LoginAuthDto) {
        return await this.authService.login(userObjetLogin)
    }

}
