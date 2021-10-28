import { Body, Controller, Post } from '@nestjs/common';
import { LoginUsuarioService } from 'src/autenticacion/application/login-usuario.service';
import { UsuarioEntity } from 'src/autenticacion/domian/entites/usuario.entity';
import { LoginRequestDTO } from '../dto/login-request.dto';

@Controller('/autenticacion/v1/login')
export class LoginController {
  constructor(private readonly loginUsuarioService: LoginUsuarioService) {}

  @Post()
  async register(@Body() loginRequestDTO: LoginRequestDTO) {
    const usuarioEntity: UsuarioEntity = {
      email: loginRequestDTO.email,
      password: loginRequestDTO.password,
    };
    return this.loginUsuarioService.execute(usuarioEntity);
  }
}
