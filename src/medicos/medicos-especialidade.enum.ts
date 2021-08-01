// Essas são todas as especialidades médicas possíveis, que foram listadas no documento do teste.

// A ideia é "amarrar" apenas as especialidades válidas, para evitar possíveis arbitrariedades
// na hora de cadastrar uma especialidade.

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