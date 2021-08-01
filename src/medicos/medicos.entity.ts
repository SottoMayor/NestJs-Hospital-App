import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { EspecialidadeMedica } from "./medico-especialidade.enum";

// Definindo Entidade médicos, que seguem a estrutura proposta no documento do teste

@Entity()
export class Medicos{
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    nome: string;
    
    @Column()
    telefoneFixo: number;

    @Column()
    telefoneCelular: number;

    @Column()
    cep: number;

    @Column()
    especialidade: EspecialidadeMedica
}