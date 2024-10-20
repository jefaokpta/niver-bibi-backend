import { BadRequestException, HttpException, Injectable } from '@nestjs/common';
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

  findOne(id: string) {
    return this.participantRepository.findOne({ where: { id } });
  }

  async update(id: string, updateParticipantDto: UpdateParticipantDto) {
    const participant = await this.participantRepository.findOne({
      where: { id },
    });
    if (!participant) {throw new BadRequestException()}
    const participantUpdated = {
      ...participant,
      ...updateParticipantDto.guests,
      isConfirmed: true,
    };
    return await this.participantRepository.save(participantUpdated);
  }

  remove(id: string) {
    return this.participantRepository.delete(id);
  }
}
