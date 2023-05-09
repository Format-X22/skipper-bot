import { Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Bot {
    @PrimaryGeneratedColumn('uuid')
    id: string;
}
