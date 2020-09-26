import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn
} from "typeorm";
import { Ljubimac } from "./ljubimac.entity";


@Index("fk_slika_ljubimac_id", ["ljubimacId"], {})
@Entity("slika", { schema: "aplikacija" })
export class Slika {
  @PrimaryGeneratedColumn({ type: "int", name: "slika_id", unsigned: true })
  slikaId: number;

  @Column("varchar", { name: "image_path", length: 128, default: () => "'0'" })
  imagePath: string;

  @Column("int", { name: "ljubimac_id", unsigned: true, default: () => "'0'" })
  ljubimacId: number;

  @ManyToOne(
    () => Ljubimac,
    ljubimac => ljubimac.slikas,
    { onDelete: "RESTRICT", onUpdate: "CASCADE" }
  )
  @JoinColumn([{ name: "ljubimac_id", referencedColumnName: "ljubimacId" }])
  ljubimac: Ljubimac;
}
