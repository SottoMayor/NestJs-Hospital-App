import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateMedicoDto } from './DTO/create-medico.dto';
import { Medicos } from './medicos.entity';
import { MedicosRepository } from './medicos.repository';
import { consultarCep } from 'correios-brasil/dist';
import { FilterMedicoDto } from './DTO/filter-medico.dto';
import { EspecialidadeMedica } from './medicos-especialidade.enum';

@Injectable()
export class MedicosService {

    constructor( @InjectRepository(MedicosRepository) 
    private MedicosRepository: MedicosRepository ){}

    public async getMedicos(FilterMedicoDto: FilterMedicoDto): Promise<Medicos[]>{

        const { nome, crm, telefoneFixo, telefoneCelular, cep, especialidade } = FilterMedicoDto;

        const query = this.MedicosRepository.createQueryBuilder('medicos');

        if(nome){
            query.andWhere('LOWER(medicos.nome) LIKE LOWER(:nome) ', { nome: `%${nome}%` })
        }

        if(crm){
            query.andWhere('medicos.crm LIKE :crm ', { crm: `%${crm}%` })
        }

        if(telefoneFixo){
            query.andWhere('medicos.telefoneFixo LIKE :telefoneFixo ', { telefoneFixo: `%${telefoneFixo}%` })
        }

        if(telefoneCelular){
            query.andWhere('medicos.telefoneCelular LIKE :telefoneCelular ', { telefoneCelular: `%${telefoneCelular}%` })
        }

        if(cep){
            query.andWhere('medicos.cep LIKE :cep ', { cep: `%${cep}%` })
        }

        if(especialidade){
            query.andWhere('LOWER(medicos.especialidade) LIKE LOWER(:especialidade) ', { especialidade: `%${especialidade}%` })
        }


        const medicos = await query.getMany();

        return medicos;

    }

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

    public async updatedMedicoById(id: string, CreateMedicoDto): Promise<Medicos>{
        const { nome, crm, telefoneFixo, telefoneCelular, cep, especialidade } = CreateMedicoDto;

        const foundMedico = await this.MedicosRepository.findOne(id);
        // Verificar encontrou algo

        foundMedico.nome = nome;
        foundMedico.crm = crm;
        foundMedico.telefoneFixo = telefoneFixo;
        foundMedico.telefoneCelular = telefoneCelular;
        foundMedico.cep = cep;
        foundMedico.especialidade = especialidade;

        await this.MedicosRepository.save(foundMedico);

        return foundMedico;

    }

    public async deleteMedicoById(id: string): Promise<void>{

        const foundMedico = await this.MedicosRepository.findOne(id);
        // Verificar encontrou algo

        await this.MedicosRepository.remove(foundMedico);

    }


}
