import { Module } from '@nestjs/common';
import { MedicosModule } from './medicos/medicos.module';

@Module({
  imports: [MedicosModule],
})
export class AppModule {}
