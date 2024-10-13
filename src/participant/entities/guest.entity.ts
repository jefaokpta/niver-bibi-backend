import { Column, Entity, ManyToOne } from 'typeorm';
import { Participant } from './participant.entity';

@Entity('guests')
export class Guest {
    @Column()
    readonly name: string;

    @Column({ name: 'is_kid', type: 'boolean' })
    readonly isKid: boolean;

    @ManyToOne(() => Participant, (participant) => participant.guests, {onDelete: 'CASCADE', orphanedRowAction: 'delete'})
    readonly participant: Participant;
}