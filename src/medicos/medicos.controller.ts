import { Body, Controller, Post } from '@nestjs/common';
import { CreateMedicoDto } from './DTO/create-medico.dto';
import { Medicos } from './medicos.entity';
import { MedicosService } from './medicos.service';

@Controller('medicos')
export class MedicosController {

    constructor(private medicosService: MedicosService){}

    @Post()
    public createMedico(@Body() CreateMedicoDto: CreateMedicoDto): Promise<Medicos>{
        return this.medicosService.createMedico(CreateMedicoDto)
    }

}
