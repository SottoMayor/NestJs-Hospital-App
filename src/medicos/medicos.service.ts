import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateMedicoDto } from './DTO/create-medico.dto';
import { Medicos } from './medicos.entity';
import { MedicosRepository } from './medicos.repository';
import { consultarCep } from 'correios-brasil/dist';

@Injectable()
export class MedicosService {

    constructor( @InjectRepository(MedicosRepository) 
    private MedicosRepository: MedicosRepository ){}

    public async getMedicoById(id: string): Promise<any>{
        const foundMedico = await this.MedicosRepository.findOne(id);
        // Verificar encontrou algo

        const foundCep = await consultarCep(foundMedico.cep)
        // Verificar se o CEP é valido

        const result = {
            dadosMedicos: foundMedico,
            dadosCep: foundCep
        }

        return result;
    } 

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

    public async deleteMedicoById(id: string): Promise<void>{

        const foundMedico = await this.MedicosRepository.findOne(id);
        // Verificar encontrou algo

        await this.MedicosRepository.remove(foundMedico);

    }


}
