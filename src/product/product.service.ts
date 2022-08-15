import { Product } from '@/typeorm/entity/product.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private readonly productService: Repository<Product>,
  ) {}

  //findall
  async findALl(): Promise<Product[]> {
    return this.productService.find();
  }
  //insert product
  async create(product: any): Promise<any> {
    return this.productService.save(product);
  }
}
