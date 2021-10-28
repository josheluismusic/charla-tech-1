import { UsuarioEntity } from 'src/autenticacion/domian/entites/usuario.entity';

export interface IRegistrarUsuarioService {
  execute(usuario: UsuarioEntity): Promise<UsuarioEntity>;
}
