import { Module } from '@nestjs/common';
import { HomeModule } from './home/home.module';
import { ParticipantModule } from './participant/participant.module';

@Module({
  imports: [HomeModule, ParticipantModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
