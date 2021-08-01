// Essas são todas as especialidades médicas possíveis, que foram listadas no documento do teste.

// A ideia é "amarrar" apenas as especialidades válidas, para evitar possíveis arbitrariedades
// na hora de cadastrar uma especialidade.

export enum EspecialidadeMedica {
    Alergologia = 'Alergologia',
    Angiologia = 'Angiologia',
    BucoMaxilo = 'Buco maxilo',
    CardiologiaClinica = 'Cardiologia clínica',
    CardiologiaInfantil = 'Cardiologia infantil',
    CirurgiaCabeçaEPescoço = 'Cirurgia cabeça e pescoço',
    CirurgiaCardiaca = 'Cirurgia cardíaca',
    CirurgiaDeTorax = 'Cirurgia de tórax',
}