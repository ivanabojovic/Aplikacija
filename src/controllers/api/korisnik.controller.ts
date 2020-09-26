import { Body, Controller, Get, Param, Post, Put } from "@nestjs/common";
import { Korisnik } from "entities/korisnik.entity";
import { AddKorisnikDto } from "src/dtos/korisnik/add.korisnik.dto";
import { EditKorisnikDto } from "src/dtos/korisnik/edit.korisnik.dto";
import { KorisnikService } from "src/services/korisnik/korisnik.service";
import { ApiResponse } from "src/services/korisnik/misc/Api.response.class";


@Controller('api/korisnik')
export class KorisnikController {
    constructor(
        private korisnikService: KorisnikService
    ) {}

    @Get() // http://localhost:3000/api/korisnik/
    getAll(): Promise<Korisnik[]> {
      return this.korisnikService.getAll();
    }
    // GET http://localhost:3000/api/korisnik/4/
    @Get(':id')
    async getById(@Param('id') korisnikId: number): Promise<Korisnik | ApiResponse> {
        return new Promise(async (resolve)=> {
            let admin = await this.korisnikService.getById(korisnikId);

            if(admin === undefined) {
                resolve(new ApiResponse("error", -1002));
            }

            resolve(admin);
        });
        
    }
   // POST http://localhost:3000/api/korisnik/4/
    @Post(':id')
    edit(@Param('id') id: number, @Body() data: EditKorisnikDto): Promise<Korisnik | ApiResponse> {
        return this.korisnikService.editById(id,data);
    }
   //PUT http://localhost:3000/api/korisnik/
    @Put()
    add(@Body() data: AddKorisnikDto): Promise<Korisnik | ApiResponse> {
        return this.korisnikService.add(data);

    }

}
