import { Controller, Delete, Get, Patch, Post, Put } from '@nestjs/common';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
  constructor(private productService: ProductService) {}

  @Get()
  listAll() {}

  @Post()
  create() {}

  @Get('id')
  read() {}

  @Put(':id')
  update() {}

  @Patch(':id')
  modify() {}

  @Delete(':id')
  delete() {}
}
