import { SimulacionAggregate } from 'src/simulador/domain/aggregates/simulacion.aggregate';
import { DatosSimulacionEntity } from 'src/simulador/domain/entities/datos-simulacion.entity';

export interface ISimulacionCreditoService {
  execute(datosSimulacion: DatosSimulacionEntity): Promise<SimulacionAggregate>;
}
