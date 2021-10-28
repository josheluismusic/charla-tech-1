import { Module } from '@nestjs/common';
import { AutenticacionModule } from './autenticacion/autenticacion.module';
import { AfiliadoModule } from './afiliado/afiliado.module';
import { SimuladorModule } from './simulador/simulador.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [
        () => ({
          MONGO_URI: 'mongodb://localhost:27017',
          MONGO_USERNAME: 'root',
          MONGO_PASSWORD: 'rootpassword',
        }),
      ],
    }),
    AutenticacionModule,
    AfiliadoModule,
    SimuladorModule,
  ],
  providers: [],
})
export class AppModule {}
