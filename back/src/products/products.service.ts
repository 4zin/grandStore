import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { ProductDto } from './dto/product.dto';

@Injectable()
export class ProductsService {

    constructor(private prisma: PrismaService){}

    async getAllProducts() {
        return await this.prisma.products.findMany()
    }

    async getProductsById(id: string) {

        const existingProduct = await this.prisma.products.findUnique({
            where: { id }
        })

        if (!existingProduct) throw new NotFoundException('Product doesn\'t exist')

        return await this.prisma.products.findUnique({
            where: {
                id: id
            }
        })
    }

    async createProduct(product: ProductDto) {
        return await this.prisma.products.create(
            {
                data: product
            }
        )
    }

    async updateProduct(id:string, product: ProductDto) {

        const existingProduct = await this.prisma.products.findUnique({
            where: { id }
        })

        if (!existingProduct) throw new NotFoundException('Product doesn\'t exist')

        return await this.prisma.products.update({
            where: {
                id: id
            },
            data: product
        })
    }

    async deleteProduct(id: string) {

        const existingProduct = await this.prisma.products.findUnique({
            where: { id }
        })

        if (!existingProduct) throw new NotFoundException('Product doesn\'t exist')

        return await this.prisma.products.delete({
            where: {
                id: id
            }
        })
    }

}
