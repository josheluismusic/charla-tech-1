import { UsuarioEntity } from 'src/autenticacion/domian/entites/usuario.entity';

export interface ILoginUsuarioService {
  execute(usuario: UsuarioEntity): Promise<UsuarioEntity>;
}
