import 'dotenv/config';
import { MongoConnectionOptions } from 'typeorm/driver/mongodb/MongoConnectionOptions';
import { Product } from '@/typeorm/entity/product.entity';
const typeormConfig: MongoConnectionOptions = {
  name: 'default',
  type: 'mongodb',
  host: 'localhost',
  port: 27017,
  database: 'nest-shop',
  entities: [Product],
  synchronize: true,
  useNewUrlParser: true,
  logging: true,
};

export default typeormConfig;
