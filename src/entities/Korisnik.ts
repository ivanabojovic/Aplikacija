import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Ljubimac } from "./Ljubimac";

@Index("uq_korisnik_korisnicko_ime", ["korisnickoIme"], { unique: true })
@Entity("korisnik", { schema: "aplikacija" })
export class Korisnik {
  @PrimaryGeneratedColumn({ type: "int", name: "korisnik_id", unsigned: true })
  korisnikId: number;

  @Column("varchar", {
    name: "korisnicko_ime",
    unique: true,
    length: 50,
   
  })
  korisnickoIme: string;

  @Column("varchar", { name: "lozinka", length: 128 })
  lozinka: string;

  @OneToMany(() => Ljubimac, (ljubimac) => ljubimac.korisnik)
  ljubimacs: Ljubimac[];
}
