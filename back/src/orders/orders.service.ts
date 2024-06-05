import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateOrderDto } from './create-order.dto';

@Injectable()
export class OrdersService {

    constructor(private prisma: PrismaService) {}

    async createOrder(userId: string, CreateOrderDto: CreateOrderDto) {
        const { items } = CreateOrderDto;

        for (const item of items) {
            const product = await this.prisma.products.findUnique({
                where: { id: item.productId }
            });

            if (!product || product.quantity < item.quantity) {
                throw new Error('Product not found or insufficient quantity');
            }
        }

        for (const item of items) {
            await this.prisma.products.update({
                where: { id: item.productId },
                data: {
                    quantity: {
                        decrement: item.quantity
                    }
                }
            });
        }

        const order = await this.prisma.order.create({
            data: {
                userId,
                items: {
                    create: items.map(item => ({
                        productId: item.productId,
                        quantity: item.quantity
                    }))
                }
            },
            include: {
                items: true
            }
        });

        return order;
    }

    async getUserOrders(userId: string) {
        return await this.prisma.order.findMany({
            where: {userId},
            include: {
                items: {
                    include: {
                        product: true
                    }
                }
            }
        })
    }

}
