import { EspecialidadeMedica } from "../medicos-especialidade.enum";

export class CreateMedicoDto{
    nome: string;
    crm: string;
    telefoneFixo: string;
    telefoneCelular: string;
    cep: string;
    especialidade: EspecialidadeMedica
}