import { Guest } from './guest.entity';
import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity('participants')
export class Participant {
  @PrimaryGeneratedColumn('uuid')
  readonly id: string;

  @Column()
  readonly name: string;

  @Column()
  readonly phone: string;

  @Column({ name: 'is_confirmed', type: 'boolean', default: false })
  readonly isConfirmed: boolean;

  @OneToMany(() => Guest, (guest) => guest.participant, { cascade: true, eager: true })
  readonly guests: Guest[];

  @CreateDateColumn({ name: 'created_at' })
  readonly createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  readonly updatedAt: Date;
}
