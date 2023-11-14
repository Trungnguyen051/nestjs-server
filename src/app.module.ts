import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import {
  // TypeOrmPostgresConfig,
  TypeOrmSqliteConfig,
} from './config/typeOrm.config';
import { ReportsModule } from './reports/reports.module';

@Module({
  imports: [
    UsersModule,
    TypeOrmModule.forRoot(TypeOrmSqliteConfig),
    ReportsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
