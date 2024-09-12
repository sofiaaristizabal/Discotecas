import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateDiscotecaDto } from './dto/create-discoteca.dto';
import { UpdateDiscotecaDto } from './dto/update-discoteca.dto';
import { Discoteca } from './entities/discoteca.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { UsuariosService } from 'src/usuarios/usuarios.service';

@Injectable()
export class DiscotecasService {

  constructor(@InjectRepository(Discoteca) 
  private readonly discotecasRepository: Repository<Discoteca>,
  private readonly usuarioService: UsuariosService
  )
  {}

  async create(createDiscotecaDto: CreateDiscotecaDto) {
    const usuario = await this.usuarioService.create(createDiscotecaDto); 
    const discoteca = this.discotecasRepository.create({...createDiscotecaDto, usuario}) 
    await this.discotecasRepository.save(discoteca)
    return discoteca;
  }

  async findAll() {

    const discotecas = await this.discotecasRepository.find({})
    return discotecas;
  }

  findOne(id: string) {
    const discoteca = this.discotecasRepository.findOne({where:{id}, relations: ['user']})
    if(!discoteca){
      throw new NotFoundException (`the discoteca with id #${id} was not found `)
    }
    return discoteca;
  }

  async update(id: string, updateDiscotecaDto: UpdateDiscotecaDto) {
    await this.usuarioService.update(id,updateDiscotecaDto);
    const discoteca = await this.discotecasRepository.preload({id:id,...updateDiscotecaDto})
    if(!discoteca){
      throw new NotFoundException (`the discoteca with id #${id} was not found `)
    }
    return discoteca;
  }

  async remove(id: string) {
    await this.usuarioService.remove(id);
    const discoteca = await this.discotecasRepository.delete({id:id});
    return discoteca;
  }
}
