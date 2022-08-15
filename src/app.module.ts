import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import typeormConfig from './config/typeorm';
//引入mongooseModule
// import { MongooseModule } from '@nestjs/mongoose';
// import { SharedModule } from './shared/shared.module';
// import { AuthModule } from './auth/auth.module';
import { ProductModule } from './product/product.module';

@Module({
  imports: [
    // MongooseModule.forRoot(process.env.MONGO_URI),
    // SharedModule,
    // AuthModule,
    ProductModule,
    TypeOrmModule.forRoot(typeormConfig),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
