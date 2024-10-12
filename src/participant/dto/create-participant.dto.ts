import { Guest } from '../entities/guest.entity';

export class CreateParticipantDto {
  readonly id: string;
  readonly name: string;
  readonly phone: string;
  readonly isConfirmed: boolean;
  readonly link: string;
  readonly guests: [Guest];
}
