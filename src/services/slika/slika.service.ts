import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { TypeOrmCrudService } from "@nestjsx/crud-typeorm";
import { Slika } from "src/entities/slika.entity";
import { Repository } from "typeorm";

@Injectable()
export class SlikaService extends TypeOrmCrudService<Slika> {
    constructor(
        @InjectRepository(Slika)
        private readonly slika: Repository<Slika>
    ) {
        super(slika);
    }
}