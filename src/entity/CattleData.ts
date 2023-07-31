import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from "typeorm";
import { CattleInterface } from "../interfaces/cattle.interface";

@Entity()
export class CattleData {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  filePath: string;

  @Column()
  filename: string;

  @Column()
  mimeType: string;

  @CreateDateColumn()
  timestamp: Date;

  constructor(data: Partial<CattleInterface>) {
    if (!data) {
        return;
    }
    this.filePath = data.filePath;
    this.filename = data.filename;
    this.mimeType = data.mimeType;
  }
}
