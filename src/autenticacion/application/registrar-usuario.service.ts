import { Inject, Logger } from '@nestjs/common';
import { IRegistrarUsuarioService } from './interfaces/registrar-usuario.interface';
import { UsuarioEntity } from '../domian/entites/usuario.entity';
import { IUsuarioRepository } from '../domian/repositories/usuario.repository';

export class RegistrarUsuarioService implements IRegistrarUsuarioService {
  logger = new Logger('RegistrarUsuarioService');
  constructor(
    @Inject('IUsuarioRepository')
    private readonly usuarioRepository: IUsuarioRepository,
  ) {}

  async execute(usuario: UsuarioEntity): Promise<UsuarioEntity> {
    return this.usuarioRepository.crearUsuario(usuario);
  }
}
