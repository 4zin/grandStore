import { Body, Controller, Get, Param, Post, Request, UseGuards } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { CreateOrderDto } from './create-order.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Post()
  createOrder(@Request() req, @Body() createOrder: CreateOrderDto) {
    const userId = req.user.userId
    return this.ordersService.createOrder(userId, createOrder)
  }

  @Get()
  getUserOrders(@Request() req) {
    const userId = req.user.userId
    return this.ordersService.getUserOrders(userId)
  }
}
