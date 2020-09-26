import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { TypeOrmCrudService } from "@nestjsx/crud-typeorm";
import { Vrsta } from "src/entities/vrsta.entity";
import { Repository } from "typeorm";

@Injectable()
export class VrstaService extends TypeOrmCrudService<Vrsta> {
    constructor(
        @InjectRepository(Vrsta)
        private readonly vrsta: Repository<Vrsta>
    ) {
        super(vrsta);
    }
}