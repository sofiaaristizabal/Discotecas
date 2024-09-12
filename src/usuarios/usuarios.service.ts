import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Usuario } from './entities/usuario.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsuariosService {
  
  constructor(@InjectRepository(Usuario)
  private readonly usuarioRepository: Repository<Usuario>,
  )
  {}


  async create(createUsuarioDto: CreateUsuarioDto) {

    try{
      const usuario = this.usuarioRepository.create(createUsuarioDto);
      usuario.password = await bcrypt.hash(usuario.password, 10);
      await this.usuarioRepository.save(usuario);
      const {fullName, email} = usuario;
      return usuario;
    } 
    catch(err){
      console.log(err);
      throw new BadRequestException(err.detail);
    }

  }

  async findAll() {

    const usuarios= await this.usuarioRepository.find({});
    return usuarios;
  }

  async findOne(id: string) {

    const usuario = await this.usuarioRepository.findOneBy({id:id});
    if(!usuario){
      throw new NotFoundException(`the user with id #${id} was not found `)
    }
    return usuario;
  }

  async update(id: string, updateUsuarioDto: UpdateUsuarioDto) {

    const usuario = await  this.usuarioRepository.preload({id:id,...updateUsuarioDto});
    if(!usuario){
      throw new NotFoundException(`the user with id #${id} was not found `)
    }

    this.usuarioRepository.save(usuario);

    return usuario;
  }

  async remove(id: string) {

    const usuario = await this.usuarioRepository.delete({id:id});
    return usuario;
  }
}
