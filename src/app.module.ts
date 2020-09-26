import { Module } from '@nestjs/common';
import { AppController } from './controllers/app.controller';
import { TypeOrmModule} from '@nestjs/typeorm';
import { DatabaseConfiguration } from 'config/database.configuration';
import { Korisnik } from 'entities/korisnik.entity';
import { KorisnikService } from './services/korisnik/korisnik.service';
import { KorisnikController } from './controllers/api/korisnik.controller';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: DatabaseConfiguration.hostname,
      port: 3306,
      username: DatabaseConfiguration.username,
      password: DatabaseConfiguration.password,
      database: DatabaseConfiguration.database,
      entities: [Korisnik ]
    }),
    TypeOrmModule.forFeature([Korisnik])
  ],
  controllers: [AppController, KorisnikController],
  providers: [KorisnikService],
})
export class AppModule {}
