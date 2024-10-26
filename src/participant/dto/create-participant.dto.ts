import { Guest } from '../entities/guest.entity';
import { IsNotEmpty, IsNumberString, IsOptional } from 'class-validator';

export class CreateParticipantDto {

  @IsNotEmpty()
  readonly name: string;

  @IsNumberString()
  readonly phone: string;

  @IsOptional()
  readonly isConfirmed: boolean;

  @IsOptional()
  readonly guests: [Guest];
}
