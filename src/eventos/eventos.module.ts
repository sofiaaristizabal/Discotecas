import { Module } from '@nestjs/common';
import { EventosService } from './eventos.service';
import { EventosController } from './eventos.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Evento } from './entities/evento.entity';
@Module({
  controllers: [EventosController],
  providers: [EventosService],
  imports:[TypeOrmModule.forFeature([Evento])]
})
export class EventosModule {}
