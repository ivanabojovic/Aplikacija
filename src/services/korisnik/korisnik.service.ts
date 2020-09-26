import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Korisnik } from 'entities/korisnik.entity';
import { AddKorisnikDto } from 'src/dtos/korisnik/add.korisnik.dto';
import { EditKorisnikDto } from 'src/dtos/korisnik/edit.korisnik.dto';
import { Repository } from 'typeorm';
import { ApiResponse } from './misc/Api.response.class';



@Injectable()
export class KorisnikService {
    constructor(
        @InjectRepository(Korisnik) 
        private readonly korisnik:Repository<Korisnik>,
    ) {}

    getAll(): Promise<Korisnik[]> {
        return this.korisnik.find();

    }

    getById(id: number): Promise<Korisnik> {
        return this.korisnik.findOne(id);

    }

    add(data: AddKorisnikDto): Promise<Korisnik | ApiResponse> {
        const crypto = require('crypto');

        const passwordHash = crypto.createHash('sha512');
        passwordHash.update(data.password);

        const lozinkaString = passwordHash.digest('hex').toUpperCase();

        const newAdmin: Korisnik = new Korisnik();
        newAdmin.korisnickoIme = data.username;
        newAdmin.lozinka = lozinkaString;

         return new Promise((resolve) => {
                this.korisnik.save(newAdmin) 
                .then(data => resolve(data))
                .catch(error => {
                     const response: ApiResponse = new ApiResponse("error", -1001);
                     resolve(response);
                });
         }) ;
    }
     async editById(id: number, data: EditKorisnikDto): Promise<Korisnik | ApiResponse> {
        let admin: Korisnik = await this.korisnik.findOne(id);
          
        if(admin === undefined) {
            return new Promise((resolve)=> {
             resolve(new ApiResponse("error", -1002));
            });
        }
        const crypto = require('crypto');

        const lozinka = crypto.createHash('sha512');
        lozinka.update(data.password);

        const lozinkaString = lozinka.digest('hex').toUpperCase();

        admin.lozinka = lozinkaString;

        return this.korisnik.save(admin);

    }
}


