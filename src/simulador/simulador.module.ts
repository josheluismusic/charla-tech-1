import { Module } from '@nestjs/common';
import { CalculoController } from './infraestructure/controller/calculo.controller';
import { SimulacionCreditoServiceProvider } from './infraestructure/providers/simulacion-application.provider';

@Module({
  controllers: [CalculoController],
  providers: [SimulacionCreditoServiceProvider],
})
export class SimuladorModule {}
