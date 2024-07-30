import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class FormUser {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 100 })
  companyUEN: string;

  @Column({ type: 'varchar', length: 100 })
  companyName: string;

  @Column({ type: 'varchar', length: 100 })
  fullName: string;

  @Column({ type: 'varchar', length: 100 })
  position: string;

  @Column({ type: 'varchar', length: 100 })
  email: string;

  @Column({ type: 'varchar', length: 100 })
  mobile: string;

  @Column({ type: 'varchar', length: 100 })
  confirmEmail: string;

  @Column({ type: 'varchar', length: 100 })
  documents: string;
}
