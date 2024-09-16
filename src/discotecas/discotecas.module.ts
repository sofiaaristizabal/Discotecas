import { Module } from '@nestjs/common';
import { DiscotecasService } from './discotecas.service';
import { DiscotecasController } from './discotecas.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Discoteca } from './entities/discoteca.entity';
import { Usuario } from 'src/usuarios/entities/usuario.entity';
import { UsuariosModule } from 'src/usuarios/usuarios.module';
import { UsuariosService } from 'src/usuarios/usuarios.service';

@Module({
  controllers: [DiscotecasController],
  providers: [DiscotecasService, UsuariosService],
  imports:[TypeOrmModule.forFeature([Discoteca, Usuario]), UsuariosModule]
})
export class DiscotecasModule {}
