import { Injectable } from '@nestjs/common';
import { CreateParticipantDto } from './dto/create-participant.dto';
import { UpdateParticipantDto } from './dto/update-participant.dto';
import { Participant } from './entities/participant.entity';

@Injectable()
export class ParticipantService {

  private readonly participants: Participant[] = [
    {
      id: 'hash-id',
      name: 'John Doe',
      phone: '1234567890',
      isConfirmed: false,
      link: 'https://example.com',
      guests: [
        {
          name: 'Jane Doe',
          isKid: false,
        },
        {
          name: 'Joao Doe',
          isKid: true,
        }
      ],
    },
  ];
  create(createParticipantDto: CreateParticipantDto) {
    return 'This action adds a new participant';
  }

  findAll() {
    return 'This action returns all participant';
  }

  findOne(id: string) {
    return this.participants.find((participant) => participant.id === id);
  }

  update(id: number, updateParticipantDto: UpdateParticipantDto) {
    return `This action updates a #${id} participant`;
  }

  remove(id: number) {
    return `This action removes a #${id} participant`;
  }
}
