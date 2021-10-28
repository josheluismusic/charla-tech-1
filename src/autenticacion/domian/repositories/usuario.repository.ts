import { UsuarioEntity } from '../entites/usuario.entity';

export interface IUsuarioRepository {
  crearUsuario(usuario: UsuarioEntity): Promise<UsuarioEntity>;
  buscarUsuarioPorEmail(usuario: UsuarioEntity): Promise<UsuarioEntity>;
}
