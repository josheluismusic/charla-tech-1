import { Body, Controller, Inject, Post } from '@nestjs/common';
import { ISimulacionCreditoService } from 'src/simulador/application/interfaces/simulacion-credito.interface';
import { DatosSimulacionEntity } from 'src/simulador/domain/entities/datos-simulacion.entity';
import { CalculoCuotaDTO } from '../dto/calculo-cuota.dto';

@Controller('simulador/v1/calculo')
export class CalculoController {
  constructor(
    @Inject('ISimulacionCreditoService')
    private readonly simulacionCreditoService: ISimulacionCreditoService,
  ) {}

  @Post()
  async caluloCuota(@Body() calculoCuotaDTO: CalculoCuotaDTO) {
    const datosSimulacionEntity: DatosSimulacionEntity = {
      monto: calculoCuotaDTO.monto,
      plazo: calculoCuotaDTO.cantidadCuotas,
    };

    return this.simulacionCreditoService.execute(datosSimulacionEntity);
  }
}
