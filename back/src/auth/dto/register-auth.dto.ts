import { IsNotEmpty, IsOptional, IsString } from "class-validator";
import { LoginAuthDto } from "./login-auth.dto";


export class RegisterAuthDto extends LoginAuthDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsNotEmpty()
    lastName: string;

    @IsString()
    @IsNotEmpty()
    userName: string;

    @IsString()
    @IsOptional()
    confirmationToken: string
}