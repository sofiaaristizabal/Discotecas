import { Module } from '@nestjs/common';
import { ConsumidoresService } from './consumidores.service';
import { ConsumidoresController } from './consumidores.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Consumidor } from './entities/consumidore.entity';
import { Usuario } from 'src/usuarios/entities/usuario.entity';
import { UsuariosModule } from 'src/usuarios/usuarios.module';
import { UsuariosService } from 'src/usuarios/usuarios.service';

@Module({
  controllers: [ConsumidoresController],
  providers: [ConsumidoresService, UsuariosService],
  imports: [TypeOrmModule.forFeature([Consumidor, Usuario]), UsuariosModule]
})
export class ConsumidoresModule {}
