// src/app.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
let { PGHOST, PGDATABASE, PGUSER, PGPASSWORD } = process.env;
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: PGHOST,
      database: PGDATABASE,
      username: PGUSER,
      password: PGPASSWORD,       
      port: 5432,
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
      ssl: true,
    }),
    UserModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
// import { Module } from '@nestjs/common';
// import { TypeOrmModule } from '@nestjs/typeorm';
// import { UserModule } from './user/user.module';

// @Module({
//   imports: [
//     TypeOrmModule.forRoot({
//       type: 'postgres',
//       url: process.env.SUPABASE_DB_URL, // Use the connection string from the .env file
//       entities: [__dirname + '/**/*.entity{.ts,.js}'],
//       synchronize: true, // Set to false in production to avoid unintended schema changes
//     }),
//     UserModule,
//   ],
//   controllers: [],
//   providers: [],
// })
// export class AppModule {}
