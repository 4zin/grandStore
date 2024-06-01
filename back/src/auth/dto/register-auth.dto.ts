import { IsNotEmpty, IsOptional, IsString } from "class-validator";
import { LoginAuthDto } from "./login-auth.dto";


export class RegisterAuthDto extends LoginAuthDto {
    @IsString()
    @IsNotEmpty()
    @IsOptional()
    name: string;

    @IsString()
    @IsNotEmpty()
    @IsOptional()
    lastName: string;

    @IsString()
    @IsOptional()
    @IsNotEmpty()
    userName: string;

    @IsString()
    @IsOptional()
    @IsNotEmpty()
    confirmationToken: string
}