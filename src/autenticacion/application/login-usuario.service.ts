import { Inject, Logger } from '@nestjs/common';
import { UsuarioEntity } from '../domian/entites/usuario.entity';
import { IUsuarioRepository } from '../domian/repositories/usuario.repository';
import { ILoginUsuarioService } from './interfaces/login-usuario.interface';

export class LoginUsuarioService implements ILoginUsuarioService {
  logger = new Logger('LoginUsuarioService');
  constructor(
    @Inject('IUsuarioRepository')
    private readonly usuarioRepository: IUsuarioRepository,
  ) {}

  async execute(usuario: UsuarioEntity): Promise<UsuarioEntity> {
    return await this.usuarioRepository.buscarUsuarioPorEmail(usuario);
  }
}
