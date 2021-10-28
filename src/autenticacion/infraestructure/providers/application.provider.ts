import { Provider } from '@nestjs/common';
import { LoginUsuarioService } from 'src/autenticacion/application/login-usuario.service';
import { RegistrarUsuarioService } from 'src/autenticacion/application/registrar-usuario.service';

export const RegistrarUsuarioServiceProvider: Provider = {
  provide: 'IRegistrarUsuarioService',
  useClass: RegistrarUsuarioService,
};

export const LoginUsuarioServiceProvider: Provider = {
  provide: 'ILoginUsuarioService',
  useClass: LoginUsuarioService,
};

export const ApplicationProviders: Provider[] = [
  RegistrarUsuarioService,
  LoginUsuarioService,
];
