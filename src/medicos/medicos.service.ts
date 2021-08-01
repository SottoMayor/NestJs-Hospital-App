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

    // OBS: Criação de método privado para evitar repetição de código.
    private async medicoFinder(id: string): Promise<Medicos>{
        const foundMedico = await this.MedicosRepository.findOne(id);
        // Verificar encontrou algo
        return foundMedico;
    }

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
        const foundMedico = await this.medicoFinder(id);

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

        const foundMedico = await this.medicoFinder(id); 

        foundMedico.nome = nome;
        foundMedico.crm = crm;
        foundMedico.telefoneFixo = telefoneFixo;
        foundMedico.telefoneCelular = telefoneCelular;
        foundMedico.cep = cep;
        foundMedico.especialidade = especialidade;

        await this.MedicosRepository.save(foundMedico);

        return foundMedico;

    }

    /*
     * OBS: 
        Por falta de tempo não farei o soft delete, mas vou escrever como seria possível de ser feito.
        Antes de tudo deveríamos criar uma tabela para salvar os médicos que foram deletados, após, 
        na lógica de negócio, devemos encontrar o médico que desejamos deletar, passar os registros 
        desse médico para a tabela de médicos deletados e por fim, de fato, deletar ele da nossa tabela 
        de médicos.
    */

    public async deleteMedicoById(id: string): Promise<void>{

        const foundMedico = await this.medicoFinder(id);

        await this.MedicosRepository.remove(foundMedico);

    }


}
