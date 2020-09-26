import { Module } from '@nestjs/common';
import { AppController } from './controllers/app.controller';
import { TypeOrmModule} from '@nestjs/typeorm';
import { DatabaseConfiguration } from 'config/database.configuration';
import { Korisnik } from 'entities/korisnik.entity';
import { KorisnikService } from './services/korisnik/korisnik.service';
import { KorisnikController } from './controllers/api/korisnik.controller';
import { VrstaController } from './controllers/api/vrsta.controller';
import { VrstaService } from './services/vrsta/vrsta.service';
import { SlikaService } from './services/slika/slika.service';
import { LjubimacService } from './services/ljubimac/ljubimac.service';
import { Ljubimac } from './entities/ljubimac.entity';
import { Rasa } from './entities/rasa.entity';
import { Slika } from './entities/slika.entity';
import { Vrsta } from './entities/vrsta.entity';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: DatabaseConfiguration.hostname,
      port: 3306,
      username: DatabaseConfiguration.username,
      password: DatabaseConfiguration.password,
      database: DatabaseConfiguration.database,
      entities: [
          Korisnik,
          Ljubimac,
          Rasa,
          Slika,
          Vrsta
      ]
    }),
    TypeOrmModule.forFeature([
        Korisnik,
        Vrsta,
        Slika,
        Ljubimac
    ])
  ],
  controllers: [
    AppController,
    KorisnikController,
    VrstaController,
  ],
  providers: [
    KorisnikService,
    VrstaService,
    SlikaService,
    LjubimacService
  ],
})
export class AppModule {}
