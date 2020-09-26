import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn
} from "typeorm";
import { Korisnik } from "./korisnik.entity";
import { Rasa } from "./rasa.entity";
import { Slika } from "./slika.entity";

@Index("fk_ljubimac_korisnik_id", ["korisnikId"], {})
@Index("fk_ljubimac_rasa_id", ["rasaId"], {})
@Entity("ljubimac", { schema: "aplikacija" })
export class Ljubimac {
  @PrimaryGeneratedColumn({ type: "int", name: "ljubimac_id", unsigned: true })
  ljubimacId: number;

  @Column("tinyint", { name: "is_papiri", width: 1, default: () => "'0'" })
  isPapiri: boolean;

  @Column("tinyint", { name: "is_vakcinacija", width: 1, default: () => "'0'" })
  isVakcinacija: boolean;

  @Column("int", { name: "uzrast", default: () => "'0'" })
  uzrast: number;

  @Column("varchar", { name: "boja", length: 10, default: () => "'0'" })
  boja: string;

  @Column("double", { name: "tezina", precision: 22, default: () => "'0'" })
  tezina: number;

  @Column("text", { name: "opis_oglasa" })
  opisOglasa: string;

  @Column("int", { name: "korisnik_id", unsigned: true, default: () => "'0'" })
  korisnikId: number;

  @Column("int", { name: "rasa_id", unsigned: true, default: () => "'0'" })
  rasaId: number;

  @ManyToOne(
    () => Korisnik,
    korisnik => korisnik.ljubimac,
    { onDelete: "RESTRICT", onUpdate: "CASCADE" }
  )
  @JoinColumn([{ name: "korisnik_id", referencedColumnName: "korisnikId" }])
  korisnik: Korisnik;

  @ManyToOne(
    () => Rasa,
    rasa => rasa.ljubimacs,
    { onDelete: "RESTRICT", onUpdate: "CASCADE" }
  )
  @JoinColumn([{ name: "rasa_id", referencedColumnName: "rasaId" }])
  rasa: Rasa;

  @OneToMany(
    () => Slika,
    slika => slika.ljubimac
  )
  slikas: Slika[];
}
