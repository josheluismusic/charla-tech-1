import { SimulacionAggregate } from '../domain/aggregates/simulacion.aggregate';
import { DatosSimulacionEntity } from '../domain/entities/datos-simulacion.entity';
import { ISimulacionCreditoService } from './interfaces/simulacion-credito.interface';

export class SimulacionCreditoService implements ISimulacionCreditoService {
  async execute(
    datosSimulacion: DatosSimulacionEntity,
  ): Promise<SimulacionAggregate> {
    const intereses = 0.04; // base de datos en la futura sesión.

    const calc1 = intereses * datosSimulacion.monto;
    console.log(calc1);
    const calc2 = 1 - Math.pow(1 + intereses, datosSimulacion.plazo * -1);
    console.log(calc2);
    const cuota = Math.round(calc1 / calc2);

    const simulacion: SimulacionAggregate = {
      datosSimulacion,
      resultadoSimulacionEntity: {
        montoTotal: cuota * datosSimulacion.plazo,
        capital: datosSimulacion.monto,
        interesTotal: cuota * datosSimulacion.plazo - datosSimulacion.monto,
        montoMensual: cuota,
      },
      tasaInteresEntity: {
        tasa: intereses,
      },
    };

    console.log(simulacion);

    return simulacion;
  }
}
