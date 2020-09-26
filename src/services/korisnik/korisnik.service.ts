import { Injectable, Post } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AddKorisnikDto } from 'src/dtos/korisnik/add.korisnik.dto';
import { Korisnik } from 'src/entities/korisnik.entity';
import { Repository } from 'typeorm';
import * as crypto from 'crypto';
import { EditKorisnikDto } from 'src/dtos/korisnik/edit.korisnik.dto';
import { ApiResponse } from 'src/misc/api.response';

@Injectable()
export class KorisnikService {
    constructor(
        @InjectRepository(Korisnik)
        private readonly korisnik: Repository<Korisnik>
    ) { }

    getAll(): Promise<Korisnik[]> {
        return this.korisnik.find();
    }

    getById(id: number): Promise<Korisnik> {
        return this.korisnik.findOne(id);
    }

    addKorisnik(data: AddKorisnikDto): Promise<Korisnik | ApiResponse> {

        const passwordHash = crypto.createHash('sha512');
        passwordHash.update(data.password);
        const passwordHashString = passwordHash.digest('hex').toUpperCase();

        const newKorisnik = new Korisnik();
        newKorisnik.korisnickoIme = data.username;
        newKorisnik.lozinka = passwordHashString;

        return new Promise((resolve) => {
            this.korisnik.save(newKorisnik)
            .then(data => resolve(data))
            .catch(error => {
                const response: ApiResponse = new ApiResponse('error', -1001);
                resolve(response);
            })
        })        
    }

    async editKorisnik(id: number, data: EditKorisnikDto): Promise<Korisnik | ApiResponse> {
        let korisnik: Korisnik = await this.korisnik.findOne(id);

        if (korisnik === undefined) {
            return new ApiResponse('error', -1002);
        }
        const passwordHash = crypto.createHash('sha512');
        passwordHash.update(data.password);
        const passwordHashString = passwordHash.digest('hex').toUpperCase();

        korisnik.lozinka = passwordHashString;

        return this.korisnik.save(korisnik);
    }
}

