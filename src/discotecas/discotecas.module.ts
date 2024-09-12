import { Module } from '@nestjs/common';
import { DiscotecasService } from './discotecas.service';
import { DiscotecasController } from './discotecas.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Discoteca } from './entities/discoteca.entity';

@Module({
  controllers: [DiscotecasController],
  providers: [DiscotecasService],
  imports:[TypeOrmModule.forFeature([Discoteca])]
})
export class DiscotecasModule {}
