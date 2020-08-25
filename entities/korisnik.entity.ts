import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";


@Entity()
export class Korisnik {
    @PrimaryGeneratedColumn({
        name: 'korisnik_id', type: 'int', unsigned: true
    })
    korisnikId: number;

    @Column({
       name: 'korisnicko_ime', type: 'varchar', length: '50', unique: true
    })
    korisnickoIme: string;

    @Column({
        type: 'varchar', length: '128'
     })
     lozinka: string;




}