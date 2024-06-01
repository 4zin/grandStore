import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductDto } from './dto/product.dto';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  getAllProducts() {
    return this.productsService.getAllProducts()
  }

  @Get(':id')
  getProductsById(@Param('id') id: string) {
    return this.productsService.getProductsById(id)
  }

  @Post()
  createProduct(@Body() product: ProductDto) {
    return this.productsService.createProduct(product)
  }

  @Put('/:id')
  updateProduct(@Param('id') id: string, @Body() product: ProductDto) {
    return this.productsService.updateProduct(id, product)
  }

  @Delete('/:id')
  deleteProduct(@Param('id') id: string) {
    return this.productsService.deleteProduct(id)
  }
}
