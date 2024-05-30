import { Role } from "@prisma/client"
import { IsEnum, IsOptional, IsEmail, IsNotEmpty, IsString } from "class-validator"

export class UpdateUserDto {

    @IsString()
    @IsNotEmpty()
    @IsOptional()
    name: string;

    @IsEmail()
    @IsNotEmpty()
    @IsOptional()
    email: string;

    @IsString()
    @IsNotEmpty()
    @IsOptional()
    userName: string;

    @IsString()
    @IsNotEmpty()
    @IsOptional()
    password: string;
    
    @IsString()
    @IsNotEmpty()
    @IsOptional()
    @IsEnum(Role)
    role?: Role;
}