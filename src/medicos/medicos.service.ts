import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateMedicoDto } from './DTO/create-medico.dto';
import { Medicos } from './medicos.entity';
import { MedicosRepository } from './medicos.repository';

@Injectable()
export class MedicosService {

    constructor( @InjectRepository(MedicosRepository) 
    private MedicosRepository: MedicosRepository ){}

    public async createMedico(CreateMedicoDto: CreateMedicoDto):Promise<Medicos>{
        const { nome, crm, telefoneFixo, telefoneCelular, cep, especialidade } = CreateMedicoDto;

        const newMedico = await this.MedicosRepository.create({
            nome: nome,
            crm: crm,
            telefoneFixo: telefoneFixo,
            telefoneCelular: telefoneCelular,
            cep: cep,
            especialidade: especialidade
        });

        await this.MedicosRepository.save(newMedico);

        return newMedico;
    }



}
