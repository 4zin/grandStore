import { IsString, IsNumber, IsUrl } from 'class-validator';

export class ProductDto {

    @IsString()
    title: string

    @IsNumber()
    price: number

    @IsNumber()
    quantity: number

    @IsUrl()
    images: string
}