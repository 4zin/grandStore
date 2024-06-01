import { IsEmail, IsNotEmpty, IsString, MaxLength, MinLength } from "class-validator";

export class LoginAuthDto {

    @IsEmail()
    email: string;

    @IsString()
    @IsNotEmpty()
    @MinLength(2)
    @MaxLength(5)
    password: string;

    emailConfirmed: boolean
}