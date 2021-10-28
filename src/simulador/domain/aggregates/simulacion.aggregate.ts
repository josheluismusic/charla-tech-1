import { DatosSimulacionEntity } from '../entities/datos-simulacion.entity';
import { ResultadoSimulacionEntity } from '../entities/resultado-simulacion.entity';
import { TasaInteresEntity } from '../entities/tasa-interes.entity';

export interface SimulacionAggregate {
  tasaInteresEntity: TasaInteresEntity;
  datosSimulacion: DatosSimulacionEntity;
  resultadoSimulacionEntity: ResultadoSimulacionEntity;
}
