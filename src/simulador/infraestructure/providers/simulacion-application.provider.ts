import { Provider } from '@nestjs/common';
import { SimulacionCreditoService } from 'src/simulador/application/simulacion-credito.service';

export const SimulacionCreditoServiceProvider: Provider = {
  provide: 'ISimulacionCreditoService',
  useClass: SimulacionCreditoService,
};

export const SimuladorApplicationProviders: Provider[] = [
  SimulacionCreditoServiceProvider,
];
