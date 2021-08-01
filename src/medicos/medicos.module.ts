import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MedicosRepository } from './medicos.repository';
import { MedicosController } from './medicos.controller';
import { MedicosService } from './medicos.service';

// É importante botar 'MedicosRepository' em 'imports' para que esse fique disponível
// em todo o lugar dentro do módulo.

@Module({
  controllers: [MedicosController],
  providers: [MedicosService],
  imports: [TypeOrmModule.forFeature([MedicosRepository])]
})
export class MedicosModule {}
