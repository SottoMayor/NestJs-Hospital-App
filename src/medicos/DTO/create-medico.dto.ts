import { IsNotEmpty, IsString, MaxLength, IsNumberString, IsPhoneNumber, IsMobilePhone} from "class-validator";
import { EspecialidadeMedica } from "../medicos-especialidade.enum"

export class CreateMedicoDto{
    @IsNotEmpty({ message: 'Você deve preencher esse campo.' })
    @IsString({ message: 'Esse campo deve ser uma cadeia de caracteres.' })
    @MaxLength(120, { message: 'O tamanho máximo para o nome é de 120 caracteres.' })
    nome: string;

    @IsNotEmpty({ message: 'Você deve preencher esse campo.' })
    @IsNumberString(null, { message: 'Digite apenas números nesse campo.' })
    @MaxLength(7, {message: 'O CRM deve ter no máximo 7 dígitos e todos numéricos.'})
    crm: string;

    @IsNotEmpty({ message: 'Você deve preencher esse campo.' })
    @IsNumberString(null, { message: 'Digite apenas números nesse campo.' })
    @IsPhoneNumber('BR', { message: 'Número de telefone fixo inválido.' })
    telefoneFixo: string;

    @IsNotEmpty({ message: 'Você deve preencher esse campo.' })
    @IsNumberString(null, { message: 'Digite apenas números nesse campo.' })
    @IsMobilePhone('pt-BR', null, { message: 'Número de telefone inválido.' })
    telefoneCelular: string;

    @IsNotEmpty({ message: 'Você deve preencher esse campo.' })
    @IsNumberString(null, { message: 'Digite apenas números nesse campo.' })
    @MaxLength(8, { message: 'O CEP deve ter no máximo 8 dígitos e todos numéricos.' }) 
        // No doc de teste não disse o tamanho de dígitos do cep, mas no Brasil esse número é 8, mas eu
        // quis botar para certificar que o usuário irá passar apenas números ao invés de pontos ou traços.
    cep: string;

    @IsNotEmpty({ message: 'Você deve preencher esse campo.' })
    especialidade: EspecialidadeMedica
}