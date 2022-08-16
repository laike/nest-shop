import {
  Body,
  Controller,
  Delete,
  Get,
  Logger,
  Patch,
  Post,
  Put,
} from '@nestjs/common';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
  private readonly logger = new Logger('nest-shop');
  constructor(private productService: ProductService) {}

  @Get()
  listAll() {
    return this.productService.findALl();
  }

  @Post('/create')
  create(@Body() product) {
    console.log(product);
    return this.productService.create(product);
  }

  // @Get('id')
  // read() {}

  // @Put(':id')
  // update() {}

  // @Patch(':id')
  // modify() {}

  // @Delete(':id')
  // delete() {}
}
