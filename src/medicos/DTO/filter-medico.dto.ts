import { EspecialidadeMedica } from "../medicos-especialidade.enum";
import { IsOptional } from "class-validator";

/*
 * OBS: 
    A filtragem ocorrerá via query paramters, filtraremos por característica próprias do médico 
    (nome, especialidade, crm, cep, telefone celular e telefone fixo) por exemplo 
    ?nome=NOME_DO_MÉDICO
*/

export class FilterMedicoDto{
    @IsOptional()
    nome?: string;

    @IsOptional()
    especialidade?: EspecialidadeMedica;

    @IsOptional()
    crm?: string;

    @IsOptional()
    cep?: string;

    @IsOptional()
    telefoneFixo?: string;

    @IsOptional()
    telefoneCelular?: string;
}