import { Module } from '@nestjs/common';
import { HomeService } from './home.service';
import { HomeController } from './home.controller';
import { ParticipantModule } from '../participant/participant.module';

@Module({
  controllers: [HomeController],
  providers: [HomeService],
  imports: [ParticipantModule],
})
export class HomeModule {}
