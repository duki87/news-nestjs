import { Injectable, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
