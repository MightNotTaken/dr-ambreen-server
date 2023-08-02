import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from "typeorm";
import { CattleInterface } from "../interfaces/cattle.interface";

@Entity()
export class CattleData {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  filename: string;

  @Column()
  RFID: string;

  @Column()
  mimeType: string;

  @CreateDateColumn()
  timestamp: Date;

  @Column()
  position: 'inside' | 'outside';

  constructor(data: Partial<CattleInterface>) {
    if (!data) {
        return;
    }
    this.filename = data.filename;
    this.mimeType = data.mimeType;
    this.RFID = data.RFID;
    this.position = data.position;
  }
}
