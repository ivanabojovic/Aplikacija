import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Korisnik {
    [x: string]: any;
    @PrimaryGeneratedColumn({
        name: 'korisnik_id',
        type: 'int',
        unsigned: true
    })
    korisnikId: number;

    @Column({
        name: 'korisnicko_ime',
        type: 'varchar',
        length: 50,
        unique: true
    })
    korisnickoIme: string;

    @Column({
        name: 'lozinka',
        type: 'varchar',
        length: 128
    })
    lozinka: string;
  
}