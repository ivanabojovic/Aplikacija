import { Controller } from "@nestjs/common";
import { Crud } from "@nestjsx/crud";
import { Vrsta } from "src/entities/vrsta.entity";
import { VrstaService } from "src/services/vrsta/vrsta.service";

@Controller('api/vrsta')
@Crud({
    model: {
        type: Vrsta
    },
    params: {
        id: {
            field: 'id',
            type: 'number',
            primary: true
        }
    }
})
export class VrstaController {
    constructor(
        public service: VrstaService
    ) {

    }
}