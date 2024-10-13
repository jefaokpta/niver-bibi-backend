import { Injectable } from '@nestjs/common';
import { CreateParticipantDto } from './dto/create-participant.dto';
import { UpdateParticipantDto } from './dto/update-participant.dto';
import { Repository } from 'typeorm';
import { Participant } from './entities/participant.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ParticipantService {

  constructor(
    @InjectRepository(Participant)
    private readonly participantRepository: Repository<Participant>
  ) {}

  create(createParticipantDto: CreateParticipantDto) {
    return this.participantRepository.save(createParticipantDto);
  }

  findAll() {
    return 'This action returns all participant';
  }

  findOne(id: string) {
    return `This action returns a #${id} participant`;
  }

  update(id: number, updateParticipantDto: UpdateParticipantDto) {
    return `This action updates a #${id} participant`;
  }

  remove(id: number) {
    return `This action removes a #${id} participant`;
  }
}
