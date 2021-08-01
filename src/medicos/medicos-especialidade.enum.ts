// Essas são todas as especialidades médicas possíveis, que foram listadas no documento do teste.

// A ideia é "amarrar" apenas as especialidades válidas, para evitar possíveis arbitrariedades
// na hora de cadastrar uma especialidade.

/**
 * OBS:
    Por falta de tempo, vamos assumir que um médico tem apenas um especialização. Apesar disso,
    vou dizer como faríamos para um médico ter mais de 2 especializações como proposto no documento
    do teste.
    -> SQL: Aqui contaríamos com uma tabela com todas as especialidade propostas. Faríamos uma relação
    N para N com as tabelas de especialidades propostas e tabela de médicos, o resultado dessa operação
    ficaria armazenado em uma 3° tabela onde teríamos o ID do médico e o ID de especialidades, dessa forma
    seria possível atribuir a recuperar dados sobre a especilização de cada médico.
    -> NoSQL: Aqui poderiamos criar um campo de especialidade, dentro da collection médicos,
    em formato de array que levaria as especialidades de cada médico. Essa abordagem é muito mais prática
    que a do SQL por conta da flexibilidade que os bancos NoSQL nos fornecem.
 */

export enum EspecialidadeMedica {
    ALERGOLOGIA = 'ALERGOLOGIA',
    ANGIOLOGIA = 'ANGIOLOGIA',
    BUCO_MAXILO = 'BUCO_MAXILO',
    CARDIOLOGIA_CLÍNICA = 'CARDIOLOGIA_CLÍNICA',
    CARDIOLOGIA_INFANTIL = 'CARDIOLOGIA_INFANTIL',
    CIRURGIA_CABEÇA_E_PESCOÇO = 'CIRURGIA_CABEÇA_E_PESCOÇO',
    CIRURGIA_CARDÍACA = 'CIRURGIA_CARDÍACA',
    CIRURGIA_DE_TÓRAX = 'CIRURGIA_DE_TÓRAX',
}