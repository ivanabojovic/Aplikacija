import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { TypeOrmCrudService } from "@nestjsx/crud-typeorm";
import { Ljubimac } from "src/entities/ljubimac.entity";
import { Repository } from "typeorm";

@Injectable()
export class LjubimacService extends TypeOrmCrudService<Ljubimac> {
    constructor(
        @InjectRepository(Ljubimac)
        private readonly ljubimac: Repository<Ljubimac>
    ) {
        super(ljubimac);
    }
}