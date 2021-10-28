import { Body, Controller, Post } from '@nestjs/common';
import { RegistrarUsuarioService } from 'src/autenticacion/application/registrar-usuario.service';
import { RegistroRequestDTO } from '../dto/registro-request.dto';

@Controller('/autenticacion/v1/registro')
export class RegistroController {
  constructor(
    private readonly registrarUsuarioService: RegistrarUsuarioService,
  ) {}

  @Post()
  async register(@Body() registroRequestDTO: RegistroRequestDTO) {
    return this.registrarUsuarioService.execute({
      email: registroRequestDTO.email,
      password: registroRequestDTO.password,
    });
  }
}
