import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateMedicoDto } from './DTO/create-medico.dto';
import { Medicos } from './medicos.entity';
import { MedicosService } from './medicos.service';

@Controller('medicos')
export class MedicosController {

    constructor(private medicosService: MedicosService){}

    @Get('/:id')
    public getMedicoById(@Param('id') id: string): Promise<Medicos>{
        return this.medicosService.getMedicoById(id);
    }

    @Post()
    public createMedico(@Body() CreateMedicoDto: CreateMedicoDto): Promise<Medicos>{
        return this.medicosService.createMedico(CreateMedicoDto)
    }

}
