import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { LoginController } from './infraestructure/controller/login.controller';
import { RegistroController } from './infraestructure/controller/registro.controller';
import {
  Usuario,
  UsuarioSchema,
} from './infraestructure/persistence/usuario.schema';
import {
  ApplicationProviders,
  PersistenceProviders,
} from './infraestructure/providers';

@Module({
  imports: [
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (config: ConfigService) => ({
        uri: config.get<string>('MONGO_URI'),
        user: config.get<string>('MONGO_USERNAME'),
        pass: config.get<string>('MONGO_PASSWORD'),
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }),
      inject: [ConfigService],
    }),
    MongooseModule.forFeature([{ name: Usuario.name, schema: UsuarioSchema }]),
  ],
  controllers: [RegistroController, LoginController],
  providers: [...ApplicationProviders, ...PersistenceProviders],
})
export class AutenticacionModule {}
