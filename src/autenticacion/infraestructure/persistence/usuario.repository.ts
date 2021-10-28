import { Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UsuarioEntity } from 'src/autenticacion/domian/entites/usuario.entity';
import { IUsuarioRepository } from 'src/autenticacion/domian/repositories/usuario.repository';
import { Usuario, UsuarioDocument } from './usuario.schema';

export class UsuarioRepository implements IUsuarioRepository {
  logger = new Logger('UserRespository');

  constructor(
    @InjectModel(Usuario.name) private model: Model<UsuarioDocument>,
  ) {}

  async crearUsuario(usuario: UsuarioEntity): Promise<UsuarioEntity> {
    const item = await new this.model(usuario).save();
    const usuarioEntity: UsuarioEntity = {
      email: item.email,
      password: item.password,
    };

    return usuarioEntity;
  }
  async buscarUsuarioPorEmail(usuario: UsuarioEntity): Promise<UsuarioEntity> {
    const item = await this.model.findOne({ email: usuario.email });

    const usuarioEntity: UsuarioEntity = {
      email: item.email,
      password: '',
    };

    return usuarioEntity;
  }
}
