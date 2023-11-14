import { Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ReportEntity {
  @PrimaryGeneratedColumn()
  id: number;
}
