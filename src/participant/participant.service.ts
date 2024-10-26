import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateParticipantDto } from './dto/create-participant.dto';
import { UpdateParticipantDto } from './dto/update-participant.dto';
import { Repository } from 'typeorm';
import { Participant } from './entities/participant.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ParticipantService {
  constructor(
    @InjectRepository(Participant)
    private readonly participantRepository: Repository<Participant>,
  ) {}

  create(createParticipantDto: CreateParticipantDto) {
    return this.participantRepository.save(createParticipantDto);
  }

  findAll() {
    return this.participantRepository.find();
  }

  async findOne(id: string) {
    return await this.participantRepository.findOne({ where: { id } });
  }

  async update(id: string, updateParticipantDto: UpdateParticipantDto) {
    const updated = await this.participantRepository.preload(updateParticipantDto)
    if (!updated) throw new BadRequestException()
    return await this.participantRepository.save(updated);
  }

  remove(id: string) {
    return this.participantRepository.delete(id);
  }
}
