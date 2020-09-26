import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Rasa } from "./rasa.entity";

@Index("uq_vrsta_ime", ["ime"], { unique: true })
@Entity("vrsta", { schema: "aplikacija" })
export class Vrsta {
  @PrimaryGeneratedColumn({ type: "int", name: "vrsta_id", unsigned: true })
  vrstaId: number;

  @Column("varchar", {
    name: "ime",
    unique: true,
    length: 50,
    default: () => "'0'",
  })
  ime: string;

  @OneToMany(() => Rasa, (rasa) => rasa.vrsta)
  rasas: Rasa[];
}
