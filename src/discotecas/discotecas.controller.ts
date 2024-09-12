import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DiscotecasService } from './discotecas.service';
import { CreateDiscotecaDto } from './dto/create-discoteca.dto';
import { UpdateDiscotecaDto } from './dto/update-discoteca.dto';

@Controller('discotecas')
export class DiscotecasController {
  constructor(private readonly discotecasService: DiscotecasService) {}

  @Post()
  create(@Body() createDiscotecaDto: CreateDiscotecaDto) {
    return this.discotecasService.create(createDiscotecaDto);
  }

  @Get()
  findAll() {
    return this.discotecasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.discotecasService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDiscotecaDto: UpdateDiscotecaDto) {
    return this.discotecasService.update(+id, updateDiscotecaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.discotecasService.remove(+id);
  }
}
