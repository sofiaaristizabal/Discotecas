import { Module } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { UsuariosController } from './usuarios.controller';
import { Usuario } from './entities/usuario.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [UsuariosController],
  providers: [UsuariosService],
  imports:[TypeOrmModule.forFeature([Usuario])],
  exports:[TypeOrmModule],
})
export class UsuariosModule {}
