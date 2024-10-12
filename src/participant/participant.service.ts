import { Injectable } from '@nestjs/common';
import { CreateParticipantDto } from './dto/create-participant.dto';
import { UpdateParticipantDto } from './dto/update-participant.dto';
import { Participant } from './entities/participant.entity';

@Injectable()
export class ParticipantService {
  create(createParticipantDto: CreateParticipantDto) {
    return 'This action adds a new participant';
  }

  findAll() {
    const participants: Participant[] = [
      {
        id: 'qwemnb-qweqwe',
        name: 'John Doe',
        phone: '1234567890',
        isConfirmed: false,
        link: 'https://example.com',
        guests: [
          {
            name: 'Jane Doe',
            isKid: false,
          },
        ],
      },
    ];
    return participants;
  }

  findOne(id: number) {
    return `This action returns a #${id} participant`;
  }

  update(id: number, updateParticipantDto: UpdateParticipantDto) {
    return `This action updates a #${id} participant`;
  }

  remove(id: number) {
    return `This action removes a #${id} participant`;
  }
}
