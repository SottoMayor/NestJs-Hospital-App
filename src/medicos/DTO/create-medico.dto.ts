import { EspecialidadeMedica } from "../medicos-especialidade.enum";

export class CreateMedicoDto{
    nome: string;
    crm: number;
    telefoneFixo: string;
    telefoneCelular: string;
    cep: string;
    especialidade: EspecialidadeMedica
}