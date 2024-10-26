import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Participant } from './participant.entity';

@Entity('guests')
export class Guest {
    @PrimaryGeneratedColumn()
    readonly id: number;

    @Column()
    readonly name: string;

    @Column({ name: 'is_kid', type: 'boolean' , default: false})
    readonly isKid: boolean;

    @ManyToOne(() => Participant, (participant) => participant.guests, {onDelete: 'CASCADE', orphanedRowAction: 'delete'})
    readonly participant: Participant;
}