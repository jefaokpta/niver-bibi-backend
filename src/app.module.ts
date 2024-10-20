import { Module } from '@nestjs/common';
import { HomeModule } from './home/home.module';
import { ParticipantModule } from './participant/participant.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { MysqlConfig } from './config/mysql.config';
import { DataSource } from 'typeorm';
import { AdminModule } from './admin/admin.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      useClass: MysqlConfig,
      inject: [MysqlConfig],
    }),
    HomeModule,
    ParticipantModule,
    AdminModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {
  constructor(private readonly dataSource: DataSource) {
    console.log('🚀 Database conectado:', dataSource.options.database);
  }
}
