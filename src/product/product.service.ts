import { Product } from '@/typeorm/entity/product.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private readonly productRespository: Repository<Product>,
  ) {}

  //findall
  async findALl(): Promise<Product[]> {
    return this.productRespository.find();
  }
  //finde one product
  async findById(id: number): Promise<Product> {
    try {
      const product = this.productRespository.findOneByOrFail({ id });
      return product;
    } catch (error) {
      throw error;
    }
  }
  //insert product
  async create(product: any): Promise<Product> {
    return this.productRespository.save(product);
  }

  //update product
  async update(product: any): Promise<Product> {
    const { id, title, description, image } = product;
    const p = await this.findById(id);
    p.title = title;
    p.description = description;
    p.image = image;
    return this.productRespository.save(p);
  }
  //delete product
  async delete(id: number): Promise<Product> {
    const p = await this.findById(id);
    return this.productRespository.remove(p);
  }
}
