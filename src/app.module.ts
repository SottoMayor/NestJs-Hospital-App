import { Module } from '@nestjs/common';
import { MedicosModule } from './medicos/medicos.module';
import { TypeOrmModule } from '@nestjs/typeorm';

// A conexão com DB foi feita com Postgres com serviço em nuvem do elephatesql.com

// Obs: Para conectar é preciso conectar a um SGBD, no meu caso estou usando o DBEAVER.
// Para conectar ao DBEAVER, basta conectar usando as credenciais abaixo.
@Module({
  imports: [
    MedicosModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'kesavan.db.elephantsql.com',
      port: 5432,
      username: 'uewmvuls',
      password: 'i5MuTbBnXtqNfiMQu5V-puRs2zs0fYNy',
      database: 'uewmvuls',
      autoLoadEntities: true,
      synchronize: true,
    })
  ],
})
export class AppModule {}
