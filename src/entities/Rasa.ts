import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Ljubimac } from "./Ljubimac";
import { Vrsta } from "./Vrsta";

@Index("fk_rasa_vrsta_id", ["vrstaId"], {})
@Index("uq_rasa_naziv", ["naziv"], { unique: true })
@Entity("rasa", { schema: "aplikacija" })
export class Rasa {
  @PrimaryGeneratedColumn({ type: "int", name: "rasa_id", unsigned: true })
  rasaId: number;

  @Column("varchar", {
    name: "naziv",
    unique: true,
    length: 50,
    default: () => "'0'",
  })
  naziv: string;

  @Column("int", { name: "vrsta_id", unsigned: true, default: () => "'0'" })
  vrstaId: number;

  @OneToMany(() => Ljubimac, (ljubimac) => ljubimac.rasa)
  ljubimacs: Ljubimac[];

  @ManyToOne(() => Vrsta, (vrsta) => vrsta.rasas, {
    onDelete: "NO ACTION",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "vrsta_id", referencedColumnName: "vrstaId" }])
  vrsta: Vrsta;
}
