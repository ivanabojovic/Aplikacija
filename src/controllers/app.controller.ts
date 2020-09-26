import { Controller, Get } from '@nestjs/common';
import { Korisnik } from 'entities/korisnik.entity';
import { KorisnikService } from '../services/korisnik/korisnik.service';


@Controller()
export class AppController {
  constructor(
    private korisnikService: KorisnikService
  ){}

  @Get() // http://localhost:3000/
  getIndex(): string {
    return 'Home page';
  }

  
}
