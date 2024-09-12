import { Injectable } from '@nestjs/common';
import { CreateDiscotecaDto } from './dto/create-discoteca.dto';
import { UpdateDiscotecaDto } from './dto/update-discoteca.dto';
import { Discoteca } from './entities/discoteca.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class DiscotecasService {

  constructor(@InjectRepository(Discoteca) 
  private readonly discotecasRepository: Repository<Discoteca>){

  }

  async create(createDiscotecaDto: CreateDiscotecaDto) {

    const discoteca = this.discotecasRepository.create(createDiscotecaDto) 
    await this.discotecasRepository.save(discoteca)
    return discoteca;
  }

  async findAll() {

    const discotecas = await this.discotecasRepository.find({})
    return discotecas;
  }

  findOne(id: string) {
    const discoteca = this.discotecasRepository.findOneBy({id:id})
    return discoteca;
  }

  update(id: number, updateDiscotecaDto: UpdateDiscotecaDto) {
    return `This action updates a #${id} discoteca`;
  }

  remove(id: number) {
    return `This action removes a #${id} discoteca`;
  }
}
