import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Evaluation {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  rating: number;

  @Column()
  comment: string;

  // Add any other columns as needed
}
