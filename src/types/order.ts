import { Document } from 'mongoose';
import { Product } from './product';
interface ProductOrder {
  product: Product;
  quality: number;
}
export interface User extends Document {
  name: string;
  readonly password: string;
  seller: boolean;
  products: ProductOrder[];
  created: Date;
}
