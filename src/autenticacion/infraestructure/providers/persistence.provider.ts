import { Provider } from '@nestjs/common';
import { UsuarioRepository } from '../persistence/usuario.repository';

export const UsuarioRepositoryProvider: Provider = {
  provide: 'IUsuarioRepository',
  useClass: UsuarioRepository,
};

export const PersistenceProviders: Provider[] = [UsuarioRepositoryProvider];
