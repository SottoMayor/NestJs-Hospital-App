import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { EspecialidadeMedica } from "./medicos-especialidade.enum";

// Definindo Entidade médicos, que seguem a estrutura proposta no documento do teste

/* 
*OBS: Apesar de esperarmos números em Telefone Fixo, Telefone Celular e Telefone, podemos
ter números muito grandes podemos ter uma incompatibilidade relacionado a bytes.
Esse problema pode ser contornado se mudarmos para tipo string, mas para garantir que apenas números serão 
passados devemos fazer uma validação nesses campos.

* O CRM é um número de no máximo 7 dígitos, como proposto, então não há problema de setá-lo como um number.
*/
@Entity()
export class Medicos{
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    nome: string;

    @Column()
    crm: number;
    
    @Column()
    telefoneFixo: string;

    @Column()
    telefoneCelular: string;

    @Column()
    cep: string;

    @Column()
    especialidade: EspecialidadeMedica
}