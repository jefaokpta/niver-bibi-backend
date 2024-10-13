import { Guest } from './guest.entity';

export class Participant {
  readonly id: string;
  readonly name: string;
  readonly phone: string;
  readonly isConfirmed: boolean;
  readonly link: string;
  readonly guests?: Guest[];
}
