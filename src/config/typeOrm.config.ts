import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const TypeOrmPostgresConfig: TypeOrmModuleOptions = {
  type: process.env.DB_TYPE as any,
  host: process.env.PG_HOST,
  port: parseInt(process.env.PG_PORT),
  username: process.env.PG_USER,
  password: process.env.PG_PASSWORD,
  database: process.env.PG_DB,
  entities: [__dirname + '/**/*.entity{.ts,.js}'],
  synchronize: true,
};

export const TypeOrmSqliteConfig: TypeOrmModuleOptions = {
  type: 'sqlite',
  database: 'db.sqlite',
  entities: [__dirname + '/../**/*.entity{.ts,.js}'],
  synchronize: true,
};
