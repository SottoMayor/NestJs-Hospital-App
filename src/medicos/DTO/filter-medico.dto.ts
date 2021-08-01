import { EspecialidadeMedica } from "../medicos-especialidade.enum";

/*
 * OBS: 
    A filtragem ocorrerá via query paramters, filtraremos por característica próprias do médico 
    (nome, especialidade, crm, cep, telefone celular e telefone fixo) por exemplo 
    ?nome=NOME_DO_MÉDICO
*/

export class FilterMedicoDto{
    nome?: string;
    especialidade?: EspecialidadeMedica;
    crm?: string;
    cep?: string;
    telefoneFixo?: string;
    telefoneCelular?: string;
}